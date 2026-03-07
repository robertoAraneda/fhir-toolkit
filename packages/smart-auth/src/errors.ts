export type SmartAuthErrorCode =
  | 'discovery_failed'
  | 'pkce_failed'
  | 'state_mismatch'
  | 'token_exchange_failed'
  | 'token_refresh_failed'
  | 'token_expired'
  | 'no_token'
  | 'invalid_callback'
  | 'storage_error'
  | 'configuration_error';

export class SmartAuthError extends Error {
  readonly code: SmartAuthErrorCode;
  readonly cause?: unknown;

  constructor(code: SmartAuthErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = 'SmartAuthError';
    this.code = code;
    this.cause = cause;
  }
}
