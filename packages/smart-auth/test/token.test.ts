import { describe, it, expect, vi, afterEach } from 'vitest';
import { exchangeCodeForToken, refreshToken, isTokenExpired, enrichTokenResponse } from '../src/token.js';
import { SmartAuthError } from '../src/errors.js';

function createTokenFetchFn(
  handler: (url: string, init?: RequestInit) => { status: number; body?: unknown },
): typeof fetch {
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    const result = handler(url, init);
    return new Response(
      result.body !== undefined ? JSON.stringify(result.body) : null,
      { status: result.status, statusText: result.status === 200 ? 'OK' : 'Error' },
    );
  }) as unknown as typeof fetch;
}

describe('exchangeCodeForToken', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('exchanges code for token', async () => {
    const fetchFn = createTokenFetchFn((_url, init) => {
      const body = init?.body as string;
      expect(body).toContain('grant_type=authorization_code');
      expect(body).toContain('code=auth-code');
      expect(body).toContain('code_verifier=my-verifier');
      expect(body).toContain('client_id=my-app');
      expect(body).toContain('redirect_uri=');
      return {
        status: 200,
        body: {
          access_token: 'at-123',
          token_type: 'Bearer',
          expires_in: 3600,
          patient: 'Patient/456',
        },
      };
    });

    const result = await exchangeCodeForToken(
      'https://auth.example.com/token',
      {
        code: 'auth-code',
        codeVerifier: 'my-verifier',
        clientId: 'my-app',
        redirectUri: 'http://localhost:3000/callback',
      },
      fetchFn,
    );

    expect(result.access_token).toBe('at-123');
    expect(result.patient).toBe('Patient/456');
  });

  it('includes client_secret when provided', async () => {
    const fetchFn = createTokenFetchFn((_url, init) => {
      const body = init?.body as string;
      expect(body).toContain('client_secret=my-secret');
      return {
        status: 200,
        body: { access_token: 'at-123', token_type: 'Bearer' },
      };
    });

    await exchangeCodeForToken(
      'https://auth.example.com/token',
      {
        code: 'code',
        codeVerifier: 'verifier',
        clientId: 'app',
        redirectUri: 'http://localhost/callback',
        clientSecret: 'my-secret',
      },
      fetchFn,
    );
  });

  it('throws on non-200 response', async () => {
    const fetchFn = createTokenFetchFn(() => ({
      status: 400,
      body: { error: 'invalid_grant', error_description: 'Code expired' },
    }));

    await expect(
      exchangeCodeForToken(
        'https://auth.example.com/token',
        {
          code: 'bad-code',
          codeVerifier: 'verifier',
          clientId: 'app',
          redirectUri: 'http://localhost/callback',
        },
        fetchFn,
      ),
    ).rejects.toThrow(SmartAuthError);
  });

  it('throws with token_exchange_failed code', async () => {
    const fetchFn = createTokenFetchFn(() => ({ status: 400 }));

    try {
      await exchangeCodeForToken(
        'https://auth.example.com/token',
        {
          code: 'code',
          codeVerifier: 'v',
          clientId: 'a',
          redirectUri: 'http://localhost/cb',
        },
        fetchFn,
      );
      expect.fail('Should have thrown');
    } catch (error) {
      expect((error as SmartAuthError).code).toBe('token_exchange_failed');
    }
  });

  it('enriches token with _expiresAt', async () => {
    const now = Date.now();
    const fetchFn = createTokenFetchFn(() => ({
      status: 200,
      body: { access_token: 'at', token_type: 'Bearer', expires_in: 3600 },
    }));

    const result = await exchangeCodeForToken(
      'https://auth.example.com/token',
      {
        code: 'code',
        codeVerifier: 'v',
        clientId: 'a',
        redirectUri: 'http://localhost/cb',
      },
      fetchFn,
    );

    expect(result._expiresAt).toBeDefined();
    expect(result._expiresAt!).toBeGreaterThanOrEqual(now + 3600 * 1000 - 100);
  });

  it('uses Content-Type application/x-www-form-urlencoded', async () => {
    const fetchFn = createTokenFetchFn((_url, init) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers['Content-Type']).toBe('application/x-www-form-urlencoded');
      return {
        status: 200,
        body: { access_token: 'at', token_type: 'Bearer' },
      };
    });

    await exchangeCodeForToken(
      'https://auth.example.com/token',
      {
        code: 'code',
        codeVerifier: 'v',
        clientId: 'a',
        redirectUri: 'http://localhost/cb',
      },
      fetchFn,
    );
  });
});

describe('refreshToken', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('refreshes token', async () => {
    const fetchFn = createTokenFetchFn((_url, init) => {
      const body = init?.body as string;
      expect(body).toContain('grant_type=refresh_token');
      expect(body).toContain('refresh_token=rt-123');
      return {
        status: 200,
        body: {
          access_token: 'new-at',
          token_type: 'Bearer',
          expires_in: 3600,
        },
      };
    });

    const result = await refreshToken(
      'https://auth.example.com/token',
      { refreshToken: 'rt-123', clientId: 'app' },
      fetchFn,
    );

    expect(result.access_token).toBe('new-at');
  });

  it('throws on failure', async () => {
    const fetchFn = createTokenFetchFn(() => ({ status: 401 }));

    await expect(
      refreshToken(
        'https://auth.example.com/token',
        { refreshToken: 'bad', clientId: 'app' },
        fetchFn,
      ),
    ).rejects.toThrow(SmartAuthError);
  });

  it('throws with token_refresh_failed code', async () => {
    const fetchFn = createTokenFetchFn(() => ({ status: 400 }));

    try {
      await refreshToken(
        'https://auth.example.com/token',
        { refreshToken: 'rt', clientId: 'app' },
        fetchFn,
      );
      expect.fail('Should have thrown');
    } catch (error) {
      expect((error as SmartAuthError).code).toBe('token_refresh_failed');
    }
  });
});

describe('isTokenExpired', () => {
  it('returns false for non-expiring token', () => {
    expect(isTokenExpired({ access_token: 'at', token_type: 'Bearer' })).toBe(false);
  });

  it('returns false for fresh token', () => {
    expect(
      isTokenExpired({
        access_token: 'at',
        token_type: 'Bearer',
        _expiresAt: Date.now() + 3600_000,
      }),
    ).toBe(false);
  });

  it('returns true for expired token', () => {
    expect(
      isTokenExpired({
        access_token: 'at',
        token_type: 'Bearer',
        _expiresAt: Date.now() - 1000,
      }),
    ).toBe(true);
  });

  it('respects buffer seconds', () => {
    expect(
      isTokenExpired(
        {
          access_token: 'at',
          token_type: 'Bearer',
          _expiresAt: Date.now() + 30_000, // Expires in 30s
        },
        60, // 60s buffer
      ),
    ).toBe(true);
  });
});

describe('enrichTokenResponse', () => {
  it('adds _expiresAt from expires_in', () => {
    const now = Date.now();
    const result = enrichTokenResponse({
      access_token: 'at',
      token_type: 'Bearer',
      expires_in: 3600,
    });
    expect(result._expiresAt).toBeGreaterThanOrEqual(now + 3600 * 1000 - 100);
  });

  it('preserves SMART context fields', () => {
    const result = enrichTokenResponse({
      access_token: 'at',
      token_type: 'Bearer',
      patient: '123',
      encounter: '456',
      fhirUser: 'Practitioner/789',
    });
    expect(result.patient).toBe('123');
    expect(result.encounter).toBe('456');
    expect(result.fhirUser).toBe('Practitioner/789');
  });
});
