import type {
  SmartAuthConfig,
  SmartConfiguration,
  AuthorizeOptions,
  EhrLaunchParams,
} from './types.js';
import { SmartAuthError } from './errors.js';
import { generatePkcePair } from './pkce.js';

/**
 * Generates a cryptographically random state parameter.
 */
async function generateState(): Promise<string> {
  const array = new Uint8Array(16);
  globalThis.crypto.getRandomValues(array);
  let binary = '';
  for (let i = 0; i < array.length; i++) {
    binary += String.fromCharCode(array[i]!);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Builds a SMART authorization URL for standalone launch.
 * Pure function — does not redirect or store anything.
 */
export async function buildAuthorizationUrl(
  config: SmartAuthConfig,
  smartConfig: SmartConfiguration,
  options?: AuthorizeOptions,
): Promise<{ url: string; state: string; codeVerifier: string }> {
  const { codeVerifier, codeChallenge } = await generatePkcePair();
  const state = await generateState();

  let scope = config.scope;
  if (options?.extraScopes?.length) {
    scope = `${scope} ${options.extraScopes.join(' ')}`;
  }

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope,
    state,
    aud: options?.aud ?? config.fhirBaseUrl,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  if (options?.extraParams) {
    for (const [key, value] of Object.entries(options.extraParams)) {
      params.set(key, value);
    }
  }

  const url = `${smartConfig.authorization_endpoint}?${params.toString()}`;
  return { url, state, codeVerifier };
}

/**
 * Builds a SMART authorization URL for EHR launch.
 * Adds the `launch` parameter and uses `iss` as `aud`.
 */
export async function buildEhrLaunchAuthorizationUrl(
  config: SmartAuthConfig,
  smartConfig: SmartConfiguration,
  launchParams: EhrLaunchParams,
  options?: AuthorizeOptions,
): Promise<{ url: string; state: string; codeVerifier: string }> {
  return buildAuthorizationUrl(config, smartConfig, {
    ...options,
    aud: options?.aud ?? launchParams.iss,
    extraParams: {
      ...options?.extraParams,
      launch: launchParams.launch,
    },
  });
}

/**
 * Parses the callback URL after authorization redirect.
 * Returns either the authorization code + state, or an OAuth error.
 */
export function parseCallbackParams(
  callbackUrl: string,
): { code: string; state: string } | { error: string; error_description?: string } {
  const url = new URL(callbackUrl);
  const params = url.searchParams;

  const error = params.get('error');
  if (error) {
    return {
      error,
      error_description: params.get('error_description') ?? undefined,
    };
  }

  const code = params.get('code');
  const state = params.get('state');

  if (!code || !state) {
    throw new SmartAuthError(
      'invalid_callback',
      'Callback URL missing required "code" or "state" parameters',
    );
  }

  return { code, state };
}
