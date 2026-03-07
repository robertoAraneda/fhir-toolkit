import React from 'react';
import { render, renderHook, type RenderOptions, type RenderHookOptions } from '@testing-library/react';
import { SmartAuth } from '@fhir-toolkit/react';
import type { SmartAuthConfig } from '@fhir-toolkit/react';
import { FhirProvider } from '@fhir-toolkit/react';
import { MOCK_PATIENT } from './mock-patient.js';

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

function createMockStorageAdapter() {
  const store = new Map<string, string>();
  return {
    _store: store,
    get: (key: string) => store.get(key) ?? null,
    set: (key: string, value: string) => {
      store.set(key, value);
    },
    remove: (key: string) => {
      store.delete(key);
    },
  };
}

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

export function createAuthenticatedSmartAuth() {
  const storage = createMockStorageAdapter();
  storage._store.set('smart_token_response', JSON.stringify(TOKEN_RESPONSE));
  const smartAuth = new SmartAuth(createTestConfig({ storage }));
  return { smartAuth, storage };
}

export function renderWithProvider(
  ui: React.ReactElement,
  smartAuth?: SmartAuth,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  const auth = smartAuth ?? createTestSmartAuth();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FhirProvider smartAuth={auth}>{children}</FhirProvider>
  );
  return { ...render(ui, { wrapper, ...options }), smartAuth: auth };
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
      if (url.includes('/Patient/789')) {
        return new Response(JSON.stringify(MOCK_PATIENT), {
          status: 200,
          headers: { 'content-type': 'application/fhir+json' },
        });
      }
      return new Response(null, { status: 404 });
    }),
  );
}

export { SMART_CONFIG_RESPONSE, TOKEN_RESPONSE, MOCK_PATIENT };
