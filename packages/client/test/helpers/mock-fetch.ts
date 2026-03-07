import { vi } from 'vitest';

export interface MockResponse {
  status: number;
  body?: unknown;
  headers?: Record<string, string>;
}

export function createMockFetch(
  handler: (url: string, init?: RequestInit) => MockResponse,
): typeof fetch {
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input.toString();
    const mock = handler(url, init);

    const responseHeaders: Record<string, string> = {
      'Content-Type': 'application/fhir+json',
      ...(mock.headers ?? {}),
    };

    return new Response(
      mock.status === 204 ? null : JSON.stringify(mock.body),
      {
        status: mock.status,
        statusText: mock.status === 200 ? 'OK' : mock.status === 201 ? 'Created' : mock.status === 204 ? 'No Content' : 'Error',
        headers: responseHeaders,
      },
    );
  }) as unknown as typeof fetch;
}

export function mockFetchOnce(mock: MockResponse): typeof fetch {
  return createMockFetch(() => mock);
}
