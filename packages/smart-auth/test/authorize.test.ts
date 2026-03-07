import { describe, it, expect } from 'vitest';
import {
  buildAuthorizationUrl,
  buildEhrLaunchAuthorizationUrl,
  parseCallbackParams,
} from '../src/authorize.js';
import type { SmartAuthConfig, SmartConfiguration } from '../src/types.js';
import { SmartAuthError } from '../src/errors.js';

const config: SmartAuthConfig = {
  clientId: 'my-app',
  redirectUri: 'http://localhost:3000/callback',
  scope: 'openid patient/Patient.read',
  fhirBaseUrl: 'https://fhir.example.com',
};

const smartConfig: SmartConfiguration = {
  authorization_endpoint: 'https://auth.example.com/authorize',
  token_endpoint: 'https://auth.example.com/token',
};

describe('buildAuthorizationUrl', () => {
  it('builds URL with required parameters', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig);
    const url = new URL(result.url);

    expect(url.origin + url.pathname).toBe('https://auth.example.com/authorize');
    expect(url.searchParams.get('response_type')).toBe('code');
    expect(url.searchParams.get('client_id')).toBe('my-app');
    expect(url.searchParams.get('redirect_uri')).toBe('http://localhost:3000/callback');
    expect(url.searchParams.get('scope')).toBe('openid patient/Patient.read');
    expect(url.searchParams.get('code_challenge_method')).toBe('S256');
  });

  it('includes PKCE challenge', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig);
    const url = new URL(result.url);
    expect(url.searchParams.get('code_challenge')).toBeTruthy();
    expect(result.codeVerifier).toBeTruthy();
  });

  it('includes state parameter', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig);
    const url = new URL(result.url);
    expect(url.searchParams.get('state')).toBe(result.state);
  });

  it('uses fhirBaseUrl as default aud', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig);
    const url = new URL(result.url);
    expect(url.searchParams.get('aud')).toBe('https://fhir.example.com');
  });

  it('allows overriding aud', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig, {
      aud: 'https://other.fhir.com',
    });
    const url = new URL(result.url);
    expect(url.searchParams.get('aud')).toBe('https://other.fhir.com');
  });

  it('appends extra scopes', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig, {
      extraScopes: ['offline_access', 'launch/patient'],
    });
    const url = new URL(result.url);
    expect(url.searchParams.get('scope')).toBe(
      'openid patient/Patient.read offline_access launch/patient',
    );
  });

  it('includes extra params', async () => {
    const result = await buildAuthorizationUrl(config, smartConfig, {
      extraParams: { login_hint: 'user@example.com' },
    });
    const url = new URL(result.url);
    expect(url.searchParams.get('login_hint')).toBe('user@example.com');
  });

  it('generates different state on each call', async () => {
    const a = await buildAuthorizationUrl(config, smartConfig);
    const b = await buildAuthorizationUrl(config, smartConfig);
    expect(a.state).not.toBe(b.state);
  });
});

describe('buildEhrLaunchAuthorizationUrl', () => {
  it('includes launch parameter', async () => {
    const result = await buildEhrLaunchAuthorizationUrl(config, smartConfig, {
      iss: 'https://ehr.example.com/fhir',
      launch: 'xyz123',
    });
    const url = new URL(result.url);
    expect(url.searchParams.get('launch')).toBe('xyz123');
  });

  it('uses iss as aud', async () => {
    const result = await buildEhrLaunchAuthorizationUrl(config, smartConfig, {
      iss: 'https://ehr.example.com/fhir',
      launch: 'xyz123',
    });
    const url = new URL(result.url);
    expect(url.searchParams.get('aud')).toBe('https://ehr.example.com/fhir');
  });
});

describe('parseCallbackParams', () => {
  it('parses successful callback', () => {
    const result = parseCallbackParams(
      'http://localhost:3000/callback?code=abc123&state=xyz789',
    );
    expect(result).toEqual({ code: 'abc123', state: 'xyz789' });
  });

  it('parses error callback', () => {
    const result = parseCallbackParams(
      'http://localhost:3000/callback?error=access_denied&error_description=User+denied',
    );
    expect(result).toEqual({
      error: 'access_denied',
      error_description: 'User denied',
    });
  });

  it('throws on missing code and state', () => {
    expect(() => parseCallbackParams('http://localhost:3000/callback')).toThrow(
      SmartAuthError,
    );
  });

  it('throws with invalid_callback code', () => {
    try {
      parseCallbackParams('http://localhost:3000/callback?code=abc');
      expect.fail('Should have thrown');
    } catch (error) {
      expect((error as SmartAuthError).code).toBe('invalid_callback');
    }
  });
});
