import type { FhirClientInterceptors, FhirClientOptions } from '@fhir-toolkit/client';

export interface SmartInterceptorOptions {
  /** Returns the current access token, or null if not authenticated. */
  getAccessToken: () => Promise<string | null>;
  /** Called on 401 response. Should refresh the token and return the new token, or null on failure. */
  onUnauthorized?: () => Promise<string | null>;
}

/**
 * Creates FhirClient interceptors that automatically inject Bearer tokens
 * and handle 401 responses with token refresh + request replay.
 */
export function createSmartInterceptors(
  options: SmartInterceptorOptions,
): FhirClientInterceptors {
  let refreshPromise: Promise<string | null> | null = null;
  const pendingRequests = new Map<string, RequestInit>();

  return {
    onRequest: async (url: string, init: RequestInit): Promise<RequestInit> => {
      const token = await options.getAccessToken();
      const headers = { ...(init.headers as Record<string, string>) };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      const newInit = { ...init, headers };
      pendingRequests.set(url, newInit);
      return newInit;
    },

    onResponse: async (response: Response): Promise<Response> => {
      const requestUrl = response.url;
      const originalInit = pendingRequests.get(requestUrl);
      pendingRequests.delete(requestUrl);

      if (response.status !== 401 || !options.onUnauthorized || !originalInit) {
        return response;
      }

      // Deduplicate concurrent refresh attempts
      if (!refreshPromise) {
        refreshPromise = options.onUnauthorized().finally(() => {
          refreshPromise = null;
        });
      }

      const newToken = await refreshPromise;
      if (!newToken) return response;

      // Replay the original request with new token
      const replayHeaders = { ...(originalInit.headers as Record<string, string>) };
      replayHeaders['Authorization'] = `Bearer ${newToken}`;
      return fetch(requestUrl, { ...originalInit, headers: replayHeaders });
    },
  };
}

/**
 * Creates FhirClientOptions pre-configured with SMART interceptors.
 */
export function createSmartClientOptions(
  fhirBaseUrl: string,
  interceptorOptions: SmartInterceptorOptions,
  clientOptions?: Partial<FhirClientOptions>,
): FhirClientOptions {
  return {
    ...clientOptions,
    baseUrl: fhirBaseUrl,
    interceptors: createSmartInterceptors(interceptorOptions),
  };
}
