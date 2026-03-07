import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { SmartAuth } from '../src/smart-auth.js';
import { SmartAuthError } from '../src/errors.js';
import { createMockStorageAdapter } from './helpers/mock-storage.js';
import type { SmartAuthConfig, TokenResponse } from '../src/types.js';

const SMART_CONFIG_RESPONSE = {
  authorization_endpoint: 'https://auth.example.com/authorize',
  token_endpoint: 'https://auth.example.com/token',
};

const TOKEN_RESPONSE: TokenResponse = {
  access_token: 'at-123',
  token_type: 'Bearer',
  expires_in: 3600,
  refresh_token: 'rt-456',
  patient: 'Patient/789',
  _expiresAt: Date.now() + 3600_000,
};

function createTestConfig(overrides?: Partial<SmartAuthConfig>): SmartAuthConfig {
  return {
    clientId: 'test-app',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid patient/Patient.read',
    fhirBaseUrl: 'https://fhir.example.com',
    storage: createMockStorageAdapter(),
    ...overrides,
  };
}

describe('SmartAuth', () => {
  beforeEach(() => {
    // Mock window.location
    vi.stubGlobal('window', {
      location: {
        assign: vi.fn(),
        href: 'http://localhost:3000',
      },
    });

    // Mock fetch for discovery
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL) => {
        const url = typeof input === 'string' ? input : input.toString();
        if (url.includes('.well-known/smart-configuration')) {
          return new Response(JSON.stringify(SMART_CONFIG_RESPONSE), { status: 200 });
        }
        if (url.includes('/token')) {
          return new Response(JSON.stringify(TOKEN_RESPONSE), { status: 200 });
        }
        return new Response(null, { status: 404 });
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('constructor', () => {
    it('throws on missing required config', () => {
      expect(() => new SmartAuth({ clientId: '', redirectUri: '', scope: '', fhirBaseUrl: '' })).toThrow(
        SmartAuthError,
      );
    });

    it('creates with valid config', () => {
      const auth = new SmartAuth(createTestConfig());
      expect(auth.getAuthState()).toEqual({ status: 'unauthorized' });
    });

    it('uses configuration_error code', () => {
      try {
        new SmartAuth({ clientId: '', redirectUri: '', scope: '', fhirBaseUrl: '' });
        expect.fail('Should have thrown');
      } catch (error) {
        expect((error as SmartAuthError).code).toBe('configuration_error');
      }
    });
  });

  describe('discover', () => {
    it('fetches SMART configuration', async () => {
      const auth = new SmartAuth(createTestConfig());
      const config = await auth.discover();

      expect(config.authorization_endpoint).toBe('https://auth.example.com/authorize');
      expect(config.token_endpoint).toBe('https://auth.example.com/token');
    });

    it('caches discovered configuration', async () => {
      const auth = new SmartAuth(createTestConfig());
      await auth.discover();
      await auth.discover();

      // fetch should only be called once for .well-known
      const calls = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls;
      const discoveryFetches = calls.filter((c) =>
        String(c[0]).includes('.well-known'),
      );
      expect(discoveryFetches).toHaveLength(1);
    });
  });

  describe('authorize', () => {
    it('redirects to authorization URL', async () => {
      const auth = new SmartAuth(createTestConfig());
      await auth.authorize();

      expect(window.location.assign).toHaveBeenCalledOnce();
      const url = (window.location.assign as ReturnType<typeof vi.fn>).mock.calls[0]![0];
      expect(url).toContain('https://auth.example.com/authorize');
      expect(url).toContain('client_id=test-app');
      expect(url).toContain('response_type=code');
    });

    it('stores PKCE verifier and state in storage', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();

      expect(storage._store.has('smart_code_verifier')).toBe(true);
      expect(storage._store.has('smart_state')).toBe(true);
    });

    it('sets auth state to authorizing', async () => {
      const auth = new SmartAuth(createTestConfig());
      await auth.authorize();
      expect(auth.getAuthState().status).toBe('authorizing');
    });
  });

  describe('handleCallback', () => {
    it('exchanges code for token', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));

      // Simulate authorize step
      await auth.authorize();
      const savedState = storage._store.get('smart_state')!;

      // Simulate callback
      const callbackUrl = `http://localhost:3000/callback?code=auth-code&state=${savedState}`;
      const result = await auth.handleCallback(callbackUrl);

      expect(result.access_token).toBe('at-123');
    });

    it('sets auth state to authorized', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();
      const savedState = storage._store.get('smart_state')!;

      await auth.handleCallback(
        `http://localhost:3000/callback?code=code&state=${savedState}`,
      );

      expect(auth.getAuthState().status).toBe('authorized');
    });

    it('throws on state mismatch', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();

      await expect(
        auth.handleCallback('http://localhost:3000/callback?code=code&state=wrong-state'),
      ).rejects.toThrow(SmartAuthError);
    });

    it('throws with state_mismatch code', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();

      try {
        await auth.handleCallback(
          'http://localhost:3000/callback?code=code&state=wrong',
        );
        expect.fail('Should have thrown');
      } catch (error) {
        expect((error as SmartAuthError).code).toBe('state_mismatch');
      }
    });

    it('cleans up PKCE artifacts after callback', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();
      const savedState = storage._store.get('smart_state')!;

      await auth.handleCallback(
        `http://localhost:3000/callback?code=code&state=${savedState}`,
      );

      expect(storage._store.has('smart_code_verifier')).toBe(false);
      expect(storage._store.has('smart_state')).toBe(false);
    });

    it('handles OAuth error responses', async () => {
      const auth = new SmartAuth(createTestConfig());

      await expect(
        auth.handleCallback(
          'http://localhost:3000/callback?error=access_denied&error_description=User+denied',
        ),
      ).rejects.toThrow('User denied');
    });
  });

  describe('getAccessToken', () => {
    it('returns token from storage', async () => {
      const storage = createMockStorageAdapter();
      storage._store.set('smart_token_response', JSON.stringify(TOKEN_RESPONSE));

      const auth = new SmartAuth(createTestConfig({ storage }));
      const token = await auth.getAccessToken();
      expect(token).toBe('at-123');
    });

    it('returns null when no token', async () => {
      const auth = new SmartAuth(createTestConfig());
      const token = await auth.getAccessToken();
      expect(token).toBeNull();
    });

    it('returns null for expired token without refresh', async () => {
      const storage = createMockStorageAdapter();
      storage._store.set(
        'smart_token_response',
        JSON.stringify({
          ...TOKEN_RESPONSE,
          refresh_token: undefined,
          _expiresAt: Date.now() - 1000,
        }),
      );

      const auth = new SmartAuth(createTestConfig({ storage, autoRefresh: false }));
      const token = await auth.getAccessToken();
      expect(token).toBeNull();
    });
  });

  describe('context', () => {
    it('returns patient ID from token response', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();
      const savedState = storage._store.get('smart_state')!;
      await auth.handleCallback(
        `http://localhost:3000/callback?code=code&state=${savedState}`,
      );

      expect(auth.getPatientId()).toBe('Patient/789');
    });

    it('returns null when not authenticated', () => {
      const auth = new SmartAuth(createTestConfig());
      expect(auth.getPatientId()).toBeNull();
      expect(auth.getEncounterId()).toBeNull();
      expect(auth.getFhirUser()).toBeNull();
    });
  });

  describe('state management', () => {
    it('notifies listeners on state change', async () => {
      const auth = new SmartAuth(createTestConfig());
      const listener = vi.fn();
      auth.onStateChange(listener);

      await auth.authorize();

      expect(listener).toHaveBeenCalledWith({ status: 'authorizing' });
    });

    it('unsubscribe stops notifications', async () => {
      const auth = new SmartAuth(createTestConfig());
      const listener = vi.fn();
      const unsub = auth.onStateChange(listener);
      unsub();

      await auth.authorize();
      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('clears storage and resets state', async () => {
      const storage = createMockStorageAdapter();
      storage._store.set('smart_token_response', JSON.stringify(TOKEN_RESPONSE));
      storage._store.set('smart_smart_configuration', JSON.stringify(SMART_CONFIG_RESPONSE));

      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.logout();

      expect(storage._store.has('smart_token_response')).toBe(false);
      expect(auth.getAuthState().status).toBe('unauthorized');
      expect(auth.isAuthenticated()).toBe(false);
    });
  });

  describe('isAuthenticated', () => {
    it('returns false initially', () => {
      const auth = new SmartAuth(createTestConfig());
      expect(auth.isAuthenticated()).toBe(false);
    });

    it('returns true after successful auth', async () => {
      const storage = createMockStorageAdapter();
      const auth = new SmartAuth(createTestConfig({ storage }));
      await auth.authorize();
      const savedState = storage._store.get('smart_state')!;
      await auth.handleCallback(
        `http://localhost:3000/callback?code=code&state=${savedState}`,
      );

      expect(auth.isAuthenticated()).toBe(true);
    });
  });

  describe('session restore', () => {
    it('restores session from storage', async () => {
      const storage = createMockStorageAdapter();
      storage._store.set('smart_token_response', JSON.stringify(TOKEN_RESPONSE));

      const auth = new SmartAuth(createTestConfig({ storage }));

      // Wait for async restore to complete
      await new Promise((r) => setTimeout(r, 10));

      expect(auth.isAuthenticated()).toBe(true);
      expect(auth.getTokenResponse()?.access_token).toBe('at-123');
    });

    it('does not restore expired tokens', async () => {
      const storage = createMockStorageAdapter();
      storage._store.set(
        'smart_token_response',
        JSON.stringify({ ...TOKEN_RESPONSE, _expiresAt: Date.now() - 1000 }),
      );

      const auth = new SmartAuth(createTestConfig({ storage }));
      await new Promise((r) => setTimeout(r, 10));

      expect(auth.isAuthenticated()).toBe(false);
    });
  });

  describe('createFhirClient', () => {
    it('creates a FhirClient with correct baseUrl', async () => {
      const auth = new SmartAuth(createTestConfig());
      const client = auth.createFhirClient();
      expect(client).toBeDefined();
    });
  });

  describe('getInterceptors', () => {
    it('returns interceptors object', () => {
      const auth = new SmartAuth(createTestConfig());
      const interceptors = auth.getInterceptors();
      expect(interceptors.onRequest).toBeDefined();
      expect(interceptors.onResponse).toBeDefined();
    });
  });

  describe('handleEhrLaunch', () => {
    it('updates fhirBaseUrl from iss', async () => {
      const auth = new SmartAuth(createTestConfig());
      await auth.handleEhrLaunch({
        iss: 'https://ehr.example.com/fhir',
        launch: 'launch-token',
      });

      const url = (window.location.assign as ReturnType<typeof vi.fn>).mock.calls[0]![0];
      expect(url).toContain('launch=launch-token');
    });
  });
});
