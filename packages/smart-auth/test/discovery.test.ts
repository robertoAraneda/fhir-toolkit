import { describe, it, expect, vi, afterEach } from 'vitest';
import { discoverSmartConfiguration } from '../src/discovery.js';
import { SmartAuthError } from '../src/errors.js';

function createMockFetchFn(
  handler: (url: string) => { status: number; body?: unknown },
): typeof fetch {
  return vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === 'string' ? input : input.toString();
    const result = handler(url);
    return new Response(
      result.body !== undefined ? JSON.stringify(result.body) : null,
      { status: result.status },
    );
  }) as unknown as typeof fetch;
}

describe('discoverSmartConfiguration', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('discovers from .well-known/smart-configuration', async () => {
    const fetchFn = createMockFetchFn((url) => {
      if (url.includes('.well-known')) {
        return {
          status: 200,
          body: {
            authorization_endpoint: 'https://auth.example.com/authorize',
            token_endpoint: 'https://auth.example.com/token',
          },
        };
      }
      return { status: 404 };
    });

    const config = await discoverSmartConfiguration('https://fhir.example.com', fetchFn);
    expect(config.authorization_endpoint).toBe('https://auth.example.com/authorize');
    expect(config.token_endpoint).toBe('https://auth.example.com/token');
  });

  it('falls back to /metadata when .well-known fails', async () => {
    const fetchFn = createMockFetchFn((url) => {
      if (url.includes('.well-known')) {
        return { status: 404 };
      }
      if (url.endsWith('/metadata')) {
        return {
          status: 200,
          body: {
            resourceType: 'CapabilityStatement',
            rest: [
              {
                security: {
                  extension: [
                    {
                      url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
                      extension: [
                        {
                          url: 'authorize',
                          valueUri: 'https://auth.example.com/authorize',
                        },
                        {
                          url: 'token',
                          valueUri: 'https://auth.example.com/token',
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        };
      }
      return { status: 404 };
    });

    const config = await discoverSmartConfiguration('https://fhir.example.com', fetchFn);
    expect(config.authorization_endpoint).toBe('https://auth.example.com/authorize');
    expect(config.token_endpoint).toBe('https://auth.example.com/token');
  });

  it('throws when both methods fail', async () => {
    const fetchFn = createMockFetchFn(() => ({ status: 404 }));

    await expect(
      discoverSmartConfiguration('https://fhir.example.com', fetchFn),
    ).rejects.toThrow(SmartAuthError);
  });

  it('throws SmartAuthError with discovery_failed code', async () => {
    const fetchFn = createMockFetchFn(() => ({ status: 500 }));

    try {
      await discoverSmartConfiguration('https://fhir.example.com', fetchFn);
      expect.fail('Should have thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(SmartAuthError);
      expect((error as SmartAuthError).code).toBe('discovery_failed');
    }
  });

  it('strips trailing slashes from base URL', async () => {
    const fetchFn = createMockFetchFn((url) => {
      if (url === 'https://fhir.example.com/.well-known/smart-configuration') {
        return {
          status: 200,
          body: {
            authorization_endpoint: 'https://auth.example.com/authorize',
            token_endpoint: 'https://auth.example.com/token',
          },
        };
      }
      return { status: 404 };
    });

    const config = await discoverSmartConfiguration('https://fhir.example.com/', fetchFn);
    expect(config.authorization_endpoint).toBeDefined();
  });

  it('handles network errors on .well-known and falls back', async () => {
    let callCount = 0;
    const fetchFn = vi.fn(async (input: RequestInfo | URL) => {
      const url = typeof input === 'string' ? input : input.toString();
      callCount++;
      if (callCount === 1) {
        throw new Error('Network error');
      }
      if (url.endsWith('/metadata')) {
        return new Response(
          JSON.stringify({
            resourceType: 'CapabilityStatement',
            rest: [
              {
                security: {
                  extension: [
                    {
                      url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
                      extension: [
                        { url: 'authorize', valueUri: 'https://auth.example.com/authorize' },
                        { url: 'token', valueUri: 'https://auth.example.com/token' },
                      ],
                    },
                  ],
                },
              },
            ],
          }),
          { status: 200 },
        );
      }
      return new Response(null, { status: 404 });
    }) as unknown as typeof fetch;

    const config = await discoverSmartConfiguration('https://fhir.example.com', fetchFn);
    expect(config.authorization_endpoint).toBe('https://auth.example.com/authorize');
  });
});
