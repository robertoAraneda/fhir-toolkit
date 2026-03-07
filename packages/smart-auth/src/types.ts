import type { SmartAuthError } from './errors.js';

// === SMART Configuration (from .well-known/smart-configuration) ===

export interface SmartConfiguration {
  authorization_endpoint: string;
  token_endpoint: string;
  registration_endpoint?: string;
  management_endpoint?: string;
  introspection_endpoint?: string;
  revocation_endpoint?: string;
  capabilities?: string[];
  code_challenge_methods_supported?: string[];
  scopes_supported?: string[];
  response_types_supported?: string[];
  grant_types_supported?: string[];
  token_endpoint_auth_methods_supported?: string[];
}

// === Token Response ===

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  id_token?: string;
  /** SMART launch context: patient ID */
  patient?: string;
  /** SMART launch context: encounter ID */
  encounter?: string;
  /** SMART launch context: FHIR user reference */
  fhirUser?: string;
  /** Computed internally: Unix timestamp (ms) when token expires */
  _expiresAt?: number;
}

// === Auth State ===

export type AuthState =
  | { status: 'unauthorized' }
  | { status: 'authorizing' }
  | { status: 'authorized'; tokenResponse: TokenResponse }
  | { status: 'error'; error: SmartAuthError };

// === Configuration ===

export interface SmartAuthConfig {
  clientId: string;
  redirectUri: string;
  scope: string;
  fhirBaseUrl: string;
  /** For confidential clients only (server-side). Never use in browser. */
  clientSecret?: string;
  /** Token storage adapter. Default: sessionStorage */
  storage?: StorageAdapter;
  /** Auto-refresh tokens before expiry. Default: true */
  autoRefresh?: boolean;
  /** Seconds before expiry to trigger refresh. Default: 60 */
  refreshBuffer?: number;
  /** Prefix for storage keys. Default: 'smart_' */
  storageKeyPrefix?: string;
}

// === Storage ===

export interface StorageAdapter {
  get(key: string): string | null | Promise<string | null>;
  set(key: string, value: string): void | Promise<void>;
  remove(key: string): void | Promise<void>;
}

// === Authorize Options ===

export interface AuthorizeOptions {
  /** Additional scopes to append */
  extraScopes?: string[];
  /** Override the aud parameter */
  aud?: string;
  /** Extra query parameters for the authorization URL */
  extraParams?: Record<string, string>;
}

// === EHR Launch Params ===

export interface EhrLaunchParams {
  iss: string;
  launch: string;
}

// === Scope Types ===

export interface ParsedScope {
  context: 'patient' | 'user' | 'system';
  resourceType: string;
  permissions: string;
}

// === State change listener ===

export type AuthStateListener = (state: AuthState) => void;

// === Storage Keys ===

export const STORAGE_KEYS = {
  CODE_VERIFIER: 'code_verifier',
  STATE: 'state',
  TOKEN_RESPONSE: 'token_response',
  SMART_CONFIGURATION: 'smart_configuration',
} as const;
