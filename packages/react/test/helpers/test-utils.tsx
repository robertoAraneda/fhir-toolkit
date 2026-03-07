import React from 'react';
import { renderHook, type RenderHookOptions } from '@testing-library/react';
import { SmartAuth } from '@fhir-toolkit/smart-auth';
import type { SmartAuthConfig } from '@fhir-toolkit/smart-auth';
import { FhirProvider } from '../../src/provider.js';
import { createMockStorageAdapter } from './mock-storage.js';

const SMART_CONFIG_RESPONSE = {
  authorization_endpoint: 'https://auth.example.com/authorize',
  token_endpoint: 'https://auth.example.com/token',
};

const TOKEN_RESPONSE = {
  access_token: 'at-123',
  token_type: 'Bearer',
  expires_in: 3600,
  refresh_token: 'rt-456',
  patient: 'Patient/789',
  _expiresAt: Date.now() + 3600_000,
};

export function createTestConfig(overrides?: Partial<SmartAuthConfig>): SmartAuthConfig {
  return {
    clientId: 'test-app',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid patient/Patient.read',
    fhirBaseUrl: 'https://fhir.example.com',
    storage: createMockStorageAdapter(),
    ...overrides,
  };
}

export function createTestSmartAuth(overrides?: Partial<SmartAuthConfig>): SmartAuth {
  return new SmartAuth(createTestConfig(overrides));
}

export function createAuthenticatedSmartAuth(): {
  smartAuth: SmartAuth;
  storage: ReturnType<typeof createMockStorageAdapter>;
} {
  const storage = createMockStorageAdapter();
  storage._store.set('smart_token_response', JSON.stringify(TOKEN_RESPONSE));
  const smartAuth = new SmartAuth(createTestConfig({ storage }));
  return { smartAuth, storage };
}

export function renderHookWithProvider<TResult>(
  hook: () => TResult,
  smartAuth?: SmartAuth,
  options?: Omit<RenderHookOptions<unknown>, 'wrapper'>,
) {
  const auth = smartAuth ?? createTestSmartAuth();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FhirProvider smartAuth={auth}>{children}</FhirProvider>
  );
  return { ...renderHook(hook, { wrapper, ...options }), smartAuth: auth };
}

export function setupFetchMock() {
  // In jsdom, window exists — only mock the parts we need, don't replace window entirely
  Object.defineProperty(window, 'location', {
    value: {
      assign: vi.fn(),
      href: 'http://localhost:3000',
    },
    writable: true,
    configurable: true,
  });

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
}

export { SMART_CONFIG_RESPONSE, TOKEN_RESPONSE };
