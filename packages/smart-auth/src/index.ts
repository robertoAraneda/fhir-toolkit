// Main class
export { SmartAuth } from './smart-auth.js';

// Types
export type {
  SmartAuthConfig,
  SmartConfiguration,
  TokenResponse,
  AuthState,
  AuthStateListener,
  StorageAdapter,
  AuthorizeOptions,
  EhrLaunchParams,
  ParsedScope,
} from './types.js';

export { STORAGE_KEYS } from './types.js';

// Errors
export { SmartAuthError } from './errors.js';
export type { SmartAuthErrorCode } from './errors.js';

// Storage adapters
export {
  createSessionStorageAdapter,
  createLocalStorageAdapter,
  createMemoryStorageAdapter,
} from './storage.js';

// PKCE utilities
export {
  generateCodeVerifier,
  generateCodeChallenge,
  generatePkcePair,
} from './pkce.js';

// Discovery
export { discoverSmartConfiguration } from './discovery.js';

// Scope utilities
export { parseScope, formatScope, parseScopes, hasScope } from './scopes.js';

// Token utilities
export { isTokenExpired } from './token.js';

// Interceptor factory
export { createSmartInterceptors, createSmartClientOptions } from './interceptor.js';
export type { SmartInterceptorOptions } from './interceptor.js';
