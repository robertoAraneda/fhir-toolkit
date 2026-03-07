import { describe, it, expect, vi, afterEach } from 'vitest';
import { createSmartInterceptors } from '../src/interceptor.js';

describe('createSmartInterceptors', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('onRequest', () => {
    it('injects Bearer token', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'my-token',
      });

      const init: RequestInit = { method: 'GET', headers: {} };
      const result = await interceptors.onRequest!('https://fhir.example.com/Patient/1', init);

      expect((result.headers as Record<string, string>)['Authorization']).toBe(
        'Bearer my-token',
      );
    });

    it('does not add Authorization when no token', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => null,
      });

      const init: RequestInit = { method: 'GET', headers: {} };
      const result = await interceptors.onRequest!('https://fhir.example.com/Patient/1', init);

      expect((result.headers as Record<string, string>)['Authorization']).toBeUndefined();
    });

    it('preserves existing headers', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'token',
      });

      const init: RequestInit = {
        method: 'GET',
        headers: { 'X-Custom': 'value' },
      };
      const result = await interceptors.onRequest!('https://fhir.example.com/Patient/1', init);
      const headers = result.headers as Record<string, string>;

      expect(headers['X-Custom']).toBe('value');
      expect(headers['Authorization']).toBe('Bearer token');
    });
  });

  describe('onResponse', () => {
    it('passes through non-401 responses', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'token',
        onUnauthorized: async () => 'new-token',
      });

      const response = new Response(null, { status: 200 });
      const result = await interceptors.onResponse!(response);
      expect(result).toBe(response);
    });

    it('passes through 401 when no onUnauthorized', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'token',
      });

      const response = new Response(null, { status: 401 });
      const result = await interceptors.onResponse!(response);
      expect(result).toBe(response);
    });

    it('returns original 401 when refresh fails', async () => {
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'token',
        onUnauthorized: async () => null,
      });

      // Track the request first
      await interceptors.onRequest!('https://fhir.example.com/Patient/1', {
        method: 'GET',
        headers: {},
      });

      const response = new Response(null, { status: 401 });
      Object.defineProperty(response, 'url', {
        value: 'https://fhir.example.com/Patient/1',
      });

      const result = await interceptors.onResponse!(response);
      expect(result.status).toBe(401);
    });

    it('replays request with new token on 401', async () => {
      const replayResponse = new Response(JSON.stringify({ id: '1' }), { status: 200 });

      vi.stubGlobal(
        'fetch',
        vi.fn(async () => replayResponse),
      );

      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'old-token',
        onUnauthorized: async () => 'new-token',
      });

      // Track the request
      await interceptors.onRequest!('https://fhir.example.com/Patient/1', {
        method: 'GET',
        headers: { Accept: 'application/fhir+json' },
      });

      const failedResponse = new Response(null, { status: 401 });
      Object.defineProperty(failedResponse, 'url', {
        value: 'https://fhir.example.com/Patient/1',
      });

      const result = await interceptors.onResponse!(failedResponse);
      expect(result.status).toBe(200);

      // Verify replay used new token
      expect(fetch).toHaveBeenCalledWith(
        'https://fhir.example.com/Patient/1',
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: 'Bearer new-token',
          }),
        }),
      );
    });

    it('deduplicates concurrent refresh calls', async () => {
      let refreshCount = 0;
      const interceptors = createSmartInterceptors({
        getAccessToken: async () => 'old-token',
        onUnauthorized: async () => {
          refreshCount++;
          return 'new-token';
        },
      });

      vi.stubGlobal(
        'fetch',
        vi.fn(async () => new Response(null, { status: 200 })),
      );

      // Track two requests
      await interceptors.onRequest!('https://fhir.example.com/Patient/1', {
        method: 'GET',
        headers: {},
      });
      await interceptors.onRequest!('https://fhir.example.com/Patient/2', {
        method: 'GET',
        headers: {},
      });

      const response1 = new Response(null, { status: 401 });
      Object.defineProperty(response1, 'url', {
        value: 'https://fhir.example.com/Patient/1',
      });

      const response2 = new Response(null, { status: 401 });
      Object.defineProperty(response2, 'url', {
        value: 'https://fhir.example.com/Patient/2',
      });

      // Trigger both 401 handlers concurrently
      await Promise.all([
        interceptors.onResponse!(response1),
        interceptors.onResponse!(response2),
      ]);

      // Only one refresh should have occurred
      expect(refreshCount).toBe(1);
    });
  });
});
