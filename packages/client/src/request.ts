import type { IOperationOutcome } from '@fhir-toolkit/r4-types';
import type { FhirClientOptions, RequestOptions, FhirResponse } from './types.js';
import { FhirClientError, FhirTimeoutError } from './errors.js';

const DEFAULT_TIMEOUT = 30_000;
const FHIR_JSON = 'application/fhir+json';

function buildHeaders(
  options: FhirClientOptions,
  requestOptions: RequestOptions | undefined,
  method: string,
): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: FHIR_JSON,
    ...(options.defaultHeaders ?? {}),
  };

  if (['POST', 'PUT'].includes(method)) {
    headers['Content-Type'] = FHIR_JSON;
  } else if (method === 'PATCH') {
    headers['Content-Type'] = 'application/json-patch+json';
  }

  if (options.auth) {
    headers['Authorization'] =
      options.auth.type === 'bearer'
        ? `Bearer ${options.auth.token}`
        : options.auth.value;
  }

  if (requestOptions) {
    if (requestOptions.ifMatch) headers['If-Match'] = requestOptions.ifMatch;
    if (requestOptions.ifNoneMatch) headers['If-None-Match'] = requestOptions.ifNoneMatch;
    if (requestOptions.ifNoneExist) headers['If-None-Exist'] = requestOptions.ifNoneExist;
    if (requestOptions.ifModifiedSince) headers['If-Modified-Since'] = requestOptions.ifModifiedSince;
    // Request-level headers override everything
    if (requestOptions.headers) Object.assign(headers, requestOptions.headers);
  }

  return headers;
}

function createTimeoutSignal(
  timeoutMs: number,
  userSignal?: AbortSignal,
): { signal: AbortSignal; clear: () => void } {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  if (userSignal) {
    if (userSignal.aborted) {
      controller.abort(userSignal.reason);
      clearTimeout(timer);
    } else {
      userSignal.addEventListener(
        'abort',
        () => {
          controller.abort(userSignal.reason);
          clearTimeout(timer);
        },
        { once: true },
      );
    }
  }

  return {
    signal: controller.signal,
    clear: () => clearTimeout(timer),
  };
}

async function tryParseOperationOutcome(
  response: Response,
): Promise<IOperationOutcome | undefined> {
  try {
    const body = await response.clone().json();
    if (body && typeof body === 'object' && body.resourceType === 'OperationOutcome') {
      return body as IOperationOutcome;
    }
  } catch {
    // not JSON or not parseable
  }
  return undefined;
}

/**
 * Core fetch function. Returns the full FhirResponse with HTTP metadata.
 * @internal
 */
export async function fhirFetch<T>(
  url: string,
  method: string,
  options: FhirClientOptions,
  requestOptions?: RequestOptions,
  body?: unknown,
): Promise<FhirResponse<T>> {
  const timeoutMs = requestOptions?.timeout ?? options.timeout ?? DEFAULT_TIMEOUT;
  const headers = buildHeaders(options, requestOptions, method);

  let init: RequestInit = {
    method,
    headers,
    body:
      body !== undefined
        ? typeof body === 'string'
          ? body
          : JSON.stringify(body)
        : undefined,
  };

  if (options.interceptors?.onRequest) {
    init = await options.interceptors.onRequest(url, init);
  }

  const { signal, clear } = createTimeoutSignal(timeoutMs, requestOptions?.signal);
  init.signal = signal;

  let response: Response;
  try {
    response = await fetch(url, init);
  } catch (error: unknown) {
    clear();
    if (error instanceof DOMException && error.name === 'AbortError') {
      const timeoutError = new FhirTimeoutError(url, method, timeoutMs);
      options.interceptors?.onError?.(timeoutError as unknown as FhirClientError);
      throw timeoutError;
    }
    throw error;
  } finally {
    clear();
  }

  if (options.interceptors?.onResponse) {
    response = await options.interceptors.onResponse(response);
  }

  if (!response.ok) {
    const operationOutcome = await tryParseOperationOutcome(response);
    const fhirError = new FhirClientError({
      message: `FHIR ${method} ${url} failed with status ${response.status} ${response.statusText}`,
      status: response.status,
      statusText: response.statusText,
      url,
      method,
      operationOutcome,
    });
    options.interceptors?.onError?.(fhirError);
    throw fhirError;
  }

  // 204 No Content (e.g., delete)
  if (response.status === 204) {
    return {
      resource: undefined as unknown as T,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      etag: response.headers.get('ETag') ?? undefined,
      location: response.headers.get('Location') ?? undefined,
      lastModified: response.headers.get('Last-Modified') ?? undefined,
    };
  }

  const resource = (await response.json()) as T;

  return {
    resource,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    etag: response.headers.get('ETag') ?? undefined,
    location: response.headers.get('Location') ?? undefined,
    lastModified: response.headers.get('Last-Modified') ?? undefined,
  };
}

/**
 * Simplified fetch that returns just the resource.
 * @internal
 */
export async function fhirFetchResource<T>(
  url: string,
  method: string,
  options: FhirClientOptions,
  requestOptions?: RequestOptions,
  body?: unknown,
): Promise<T> {
  const result = await fhirFetch<T>(url, method, options, requestOptions, body);
  return result.resource;
}
