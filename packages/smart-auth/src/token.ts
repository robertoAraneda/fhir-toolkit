import type { TokenResponse } from './types.js';
import { SmartAuthError } from './errors.js';

/**
 * Enriches a raw token response with computed _expiresAt.
 */
export function enrichTokenResponse(raw: Record<string, unknown>): TokenResponse {
  const token = raw as unknown as TokenResponse;

  if (token.expires_in && typeof token.expires_in === 'number') {
    token._expiresAt = Date.now() + token.expires_in * 1000;
  }

  return token;
}

/**
 * Checks if a token is expired (or will expire within bufferSeconds).
 */
export function isTokenExpired(
  tokenResponse: TokenResponse,
  bufferSeconds: number = 0,
): boolean {
  if (!tokenResponse._expiresAt) return false;
  return Date.now() + bufferSeconds * 1000 >= tokenResponse._expiresAt;
}

/**
 * Exchanges an authorization code for tokens.
 *
 * @param tokenEndpoint - The token endpoint URL
 * @param params - Code exchange parameters
 * @param fetchFn - Optional fetch function for testability
 */
export async function exchangeCodeForToken(
  tokenEndpoint: string,
  params: {
    code: string;
    codeVerifier: string;
    clientId: string;
    redirectUri: string;
    clientSecret?: string;
  },
  fetchFn: typeof fetch = globalThis.fetch,
): Promise<TokenResponse> {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: params.code,
    code_verifier: params.codeVerifier,
    client_id: params.clientId,
    redirect_uri: params.redirectUri,
  });

  if (params.clientSecret) {
    body.set('client_secret', params.clientSecret);
  }

  let response: Response;
  try {
    response = await fetchFn(tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
  } catch (error) {
    throw new SmartAuthError(
      'token_exchange_failed',
      'Network error during token exchange',
      error,
    );
  }

  if (!response.ok) {
    let detail = response.statusText;
    try {
      const errorBody = await response.json();
      if (errorBody.error_description) detail = errorBody.error_description;
      else if (errorBody.error) detail = errorBody.error;
    } catch {
      // ignore parse errors
    }
    throw new SmartAuthError(
      'token_exchange_failed',
      `Token exchange failed: ${response.status} ${detail}`,
    );
  }

  const raw = (await response.json()) as Record<string, unknown>;
  return enrichTokenResponse(raw);
}

/**
 * Refreshes an access token using a refresh token.
 *
 * @param tokenEndpoint - The token endpoint URL
 * @param params - Refresh parameters
 * @param fetchFn - Optional fetch function for testability
 */
export async function refreshToken(
  tokenEndpoint: string,
  params: {
    refreshToken: string;
    clientId: string;
    clientSecret?: string;
    scope?: string;
  },
  fetchFn: typeof fetch = globalThis.fetch,
): Promise<TokenResponse> {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: params.refreshToken,
    client_id: params.clientId,
  });

  if (params.clientSecret) {
    body.set('client_secret', params.clientSecret);
  }
  if (params.scope) {
    body.set('scope', params.scope);
  }

  let response: Response;
  try {
    response = await fetchFn(tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
  } catch (error) {
    throw new SmartAuthError(
      'token_refresh_failed',
      'Network error during token refresh',
      error,
    );
  }

  if (!response.ok) {
    let detail = response.statusText;
    try {
      const errorBody = await response.json();
      if (errorBody.error_description) detail = errorBody.error_description;
      else if (errorBody.error) detail = errorBody.error;
    } catch {
      // ignore parse errors
    }
    throw new SmartAuthError(
      'token_refresh_failed',
      `Token refresh failed: ${response.status} ${detail}`,
    );
  }

  const raw = (await response.json()) as Record<string, unknown>;
  return enrichTokenResponse(raw);
}
