import { vi } from 'vitest';

export interface MockResponse {
  status: number;
  body?: unknown;
  headers?: Record<string, string>;
  url?: string;
}

export function createMockFetch(
  handler: (url: string, init?: RequestInit) => MockResponse | Promise<MockResponse>,
): typeof fetch {
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    const result = await handler(url, init);

    const headers = new Headers(result.headers ?? {});
    const responseInit: ResponseInit = {
      status: result.status,
      statusText: result.status === 200 ? 'OK' : 'Error',
      headers,
    };

    const body = result.body !== undefined ? JSON.stringify(result.body) : null;

    const response = new Response(body, responseInit);

    // Override url property (Response.url is read-only, so we use defineProperty)
    Object.defineProperty(response, 'url', {
      value: result.url ?? url,
      writable: false,
    });

    return response;
  }) as unknown as typeof fetch;
}

export function setupFetch(
  handler: (url: string, init?: RequestInit) => MockResponse | Promise<MockResponse>,
): void {
  vi.stubGlobal('fetch', createMockFetch(handler));
}
