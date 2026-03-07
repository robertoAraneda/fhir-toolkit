import { FhirClient } from '@fhir-toolkit/client';
import type { FhirClientOptions, FhirClientInterceptors } from '@fhir-toolkit/client';

import type {
  SmartAuthConfig,
  SmartConfiguration,
  TokenResponse,
  AuthState,
  AuthStateListener,
  StorageAdapter,
  AuthorizeOptions,
  EhrLaunchParams,
} from './types.js';
import { STORAGE_KEYS } from './types.js';
import { SmartAuthError } from './errors.js';
import { AuthStateManager } from './state.js';
import { createSessionStorageAdapter, storageGet, storageSet, storageRemove, storageClear } from './storage.js';
import { discoverSmartConfiguration } from './discovery.js';
import { buildAuthorizationUrl, buildEhrLaunchAuthorizationUrl, parseCallbackParams } from './authorize.js';
import { exchangeCodeForToken, refreshToken, isTokenExpired } from './token.js';
import { createSmartInterceptors } from './interceptor.js';

export class SmartAuth {
  private config: SmartAuthConfig;
  private smartConfig: SmartConfiguration | null = null;
  private readonly stateManager: AuthStateManager;
  private readonly storage: StorageAdapter;
  private readonly storagePrefix: string;

  constructor(config: SmartAuthConfig) {
    if (!config.clientId || !config.redirectUri || !config.scope || !config.fhirBaseUrl) {
      throw new SmartAuthError(
        'configuration_error',
        'SmartAuth requires clientId, redirectUri, scope, and fhirBaseUrl',
      );
    }

    this.config = { ...config };
    this.storage = config.storage ?? createSessionStorageAdapter();
    this.storagePrefix = config.storageKeyPrefix ?? 'smart_';
    this.stateManager = new AuthStateManager();

    // Fire-and-forget session restoration
    this.restoreSession();
  }

  // === Discovery ===

  async discover(): Promise<SmartConfiguration> {
    if (this.smartConfig) return this.smartConfig;
    this.smartConfig = await discoverSmartConfiguration(this.config.fhirBaseUrl);
    await storageSet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.SMART_CONFIGURATION,
      JSON.stringify(this.smartConfig),
    );
    return this.smartConfig;
  }

  // === Authorization ===

  async authorize(options?: AuthorizeOptions): Promise<void> {
    const smartConfig = await this.discover();
    const { url, state, codeVerifier } = await buildAuthorizationUrl(
      this.config,
      smartConfig,
      options,
    );

    await storageSet(this.storage, this.storagePrefix, STORAGE_KEYS.CODE_VERIFIER, codeVerifier);
    await storageSet(this.storage, this.storagePrefix, STORAGE_KEYS.STATE, state);
    this.stateManager.setState({ status: 'authorizing' });

    window.location.assign(url);
  }

  async handleEhrLaunch(params: EhrLaunchParams): Promise<void> {
    this.config = { ...this.config, fhirBaseUrl: params.iss };
    this.smartConfig = null;

    const smartConfig = await this.discover();
    const { url, state, codeVerifier } = await buildEhrLaunchAuthorizationUrl(
      this.config,
      smartConfig,
      params,
    );

    await storageSet(this.storage, this.storagePrefix, STORAGE_KEYS.CODE_VERIFIER, codeVerifier);
    await storageSet(this.storage, this.storagePrefix, STORAGE_KEYS.STATE, state);
    this.stateManager.setState({ status: 'authorizing' });

    window.location.assign(url);
  }

  // === Callback ===

  async handleCallback(callbackUrl?: string): Promise<TokenResponse> {
    const url = callbackUrl ?? window.location.href;
    const result = parseCallbackParams(url);

    if ('error' in result) {
      const error = new SmartAuthError(
        'token_exchange_failed',
        result.error_description ?? result.error,
      );
      this.stateManager.setState({ status: 'error', error });
      throw error;
    }

    // Validate state
    const savedState = await storageGet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.STATE,
    );
    if (result.state !== savedState) {
      const error = new SmartAuthError(
        'state_mismatch',
        'OAuth state parameter does not match. Possible CSRF attack.',
      );
      this.stateManager.setState({ status: 'error', error });
      throw error;
    }

    // Get code_verifier
    const codeVerifier = await storageGet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.CODE_VERIFIER,
    );
    if (!codeVerifier) {
      throw new SmartAuthError('pkce_failed', 'No code_verifier found in storage');
    }

    // Restore SMART configuration
    const smartConfig = await this.getOrRestoreSmartConfig();

    // Exchange code for tokens
    const tokenResponse = await exchangeCodeForToken(smartConfig.token_endpoint, {
      code: result.code,
      codeVerifier,
      clientId: this.config.clientId,
      redirectUri: this.config.redirectUri,
      clientSecret: this.config.clientSecret,
    });

    // Persist and update state
    await this.persistTokenResponse(tokenResponse);
    this.stateManager.setState({ status: 'authorized', tokenResponse });

    // Clean up PKCE artifacts
    await storageRemove(this.storage, this.storagePrefix, STORAGE_KEYS.CODE_VERIFIER);
    await storageRemove(this.storage, this.storagePrefix, STORAGE_KEYS.STATE);

    return tokenResponse;
  }

  // === Token Management ===

  async getAccessToken(): Promise<string | null> {
    const tokenResponse = await this.getTokenResponseFromStorage();
    if (!tokenResponse) return null;

    if (isTokenExpired(tokenResponse, this.config.refreshBuffer ?? 60)) {
      if (this.config.autoRefresh !== false && tokenResponse.refresh_token) {
        try {
          const refreshed = await this.refreshAccessToken();
          return refreshed.access_token;
        } catch {
          return null;
        }
      }
      return null;
    }

    return tokenResponse.access_token;
  }

  getTokenResponse(): TokenResponse | null {
    const state = this.stateManager.getState();
    return state.status === 'authorized' ? state.tokenResponse : null;
  }

  async refreshAccessToken(): Promise<TokenResponse> {
    const currentToken = await this.getTokenResponseFromStorage();
    if (!currentToken?.refresh_token) {
      throw new SmartAuthError('token_refresh_failed', 'No refresh token available');
    }

    const smartConfig = await this.getOrRestoreSmartConfig();
    const newToken = await refreshToken(smartConfig.token_endpoint, {
      refreshToken: currentToken.refresh_token,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    });

    // Preserve refresh_token if server doesn't return a new one
    if (!newToken.refresh_token && currentToken.refresh_token) {
      newToken.refresh_token = currentToken.refresh_token;
    }

    await this.persistTokenResponse(newToken);
    this.stateManager.setState({ status: 'authorized', tokenResponse: newToken });
    return newToken;
  }

  // === State ===

  getAuthState(): AuthState {
    return this.stateManager.getState();
  }

  onStateChange(callback: AuthStateListener): () => void {
    return this.stateManager.subscribe(callback);
  }

  // === Context ===

  getPatientId(): string | null {
    return this.getTokenResponse()?.patient ?? null;
  }

  getEncounterId(): string | null {
    return this.getTokenResponse()?.encounter ?? null;
  }

  getFhirUser(): string | null {
    return this.getTokenResponse()?.fhirUser ?? null;
  }

  // === Integration ===

  createFhirClient(options?: Partial<FhirClientOptions>): FhirClient {
    const smartInterceptors = this.getInterceptors();

    return new FhirClient({
      baseUrl: this.config.fhirBaseUrl,
      ...options,
      interceptors: {
        onRequest: async (url, init) => {
          let result = await smartInterceptors.onRequest!(url, init);
          if (options?.interceptors?.onRequest) {
            result = await options.interceptors.onRequest(url, result);
          }
          return result;
        },
        onResponse: async (response) => {
          let result = await smartInterceptors.onResponse!(response);
          if (options?.interceptors?.onResponse) {
            result = await options.interceptors.onResponse(result);
          }
          return result;
        },
        onError: (error) => {
          options?.interceptors?.onError?.(error);
        },
      },
    });
  }

  getInterceptors(): FhirClientInterceptors {
    return createSmartInterceptors({
      getAccessToken: () => this.getAccessToken(),
      onUnauthorized:
        this.config.autoRefresh !== false
          ? () =>
              this.refreshAccessToken()
                .then((t) => t.access_token)
                .catch(() => null)
          : undefined,
    });
  }

  // === Lifecycle ===

  isAuthenticated(): boolean {
    return this.stateManager.getState().status === 'authorized';
  }

  async logout(): Promise<void> {
    await storageClear(this.storage, this.storagePrefix);
    this.smartConfig = null;
    this.stateManager.setState({ status: 'unauthorized' });
  }

  // === Private Helpers ===

  private async restoreSession(): Promise<void> {
    try {
      const tokenJson = await storageGet(
        this.storage,
        this.storagePrefix,
        STORAGE_KEYS.TOKEN_RESPONSE,
      );
      if (tokenJson) {
        const tokenResponse = JSON.parse(tokenJson) as TokenResponse;
        if (!isTokenExpired(tokenResponse, 0)) {
          this.stateManager.setState({ status: 'authorized', tokenResponse });
        }
      }
    } catch {
      // Silent failure on restore
    }
  }

  private async persistTokenResponse(tokenResponse: TokenResponse): Promise<void> {
    await storageSet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.TOKEN_RESPONSE,
      JSON.stringify(tokenResponse),
    );
  }

  private async getTokenResponseFromStorage(): Promise<TokenResponse | null> {
    const json = await storageGet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.TOKEN_RESPONSE,
    );
    return json ? (JSON.parse(json) as TokenResponse) : null;
  }

  private async getOrRestoreSmartConfig(): Promise<SmartConfiguration> {
    if (this.smartConfig) return this.smartConfig;
    const cached = await storageGet(
      this.storage,
      this.storagePrefix,
      STORAGE_KEYS.SMART_CONFIGURATION,
    );
    if (cached) {
      this.smartConfig = JSON.parse(cached) as SmartConfiguration;
      return this.smartConfig;
    }
    return this.discover();
  }
}
