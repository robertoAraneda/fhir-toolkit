import type { FhirClientError } from './errors.js';

/**
 * Authentication configuration for the FHIR client.
 */
export type AuthConfig =
  | { type: 'bearer'; token: string }
  | { type: 'header'; value: string };

/**
 * Interceptors for customizing request/response handling.
 */
export interface FhirClientInterceptors {
  /** Called before each request. Can modify the RequestInit. */
  onRequest?: (url: string, init: RequestInit) => RequestInit | Promise<RequestInit>;

  /** Called after each response (before JSON parsing). */
  onResponse?: (response: Response) => Response | Promise<Response>;

  /** Called when a FhirClientError is thrown. */
  onError?: (error: FhirClientError) => void;
}

/**
 * Configuration options for the FHIR client.
 */
export interface FhirClientOptions {
  /** Base URL of the FHIR server (e.g., "https://hapi.fhir.org/baseR4") */
  baseUrl: string;

  /** Default headers to include in every request */
  defaultHeaders?: Record<string, string>;

  /** Authentication configuration */
  auth?: AuthConfig;

  /** Request timeout in milliseconds. Default: 30000 (30 seconds) */
  timeout?: number;

  /** Request/response interceptors */
  interceptors?: FhirClientInterceptors;
}

/**
 * Search parameters for FHIR search operations.
 * Array values are repeated as separate query parameters.
 *
 * @example
 * ```typescript
 * const params: SearchParams = {
 *   name: 'Smith',
 *   _count: 20,
 *   _include: ['Patient:organization'],
 *   active: true,
 * };
 * ```
 */
export type SearchParams = Record<string, string | string[] | number | boolean>;

/**
 * Parameters for history operations.
 */
export interface HistoryParams {
  _count?: number;
  _since?: string;
  _at?: string;
}

/**
 * Optional request-level overrides for FHIR operations.
 */
export interface RequestOptions {
  /** If-Match header for optimistic locking (e.g., 'W/"2"') */
  ifMatch?: string;

  /** If-None-Match header for conditional reads */
  ifNoneMatch?: string;

  /** If-None-Exist header for conditional creates */
  ifNoneExist?: string;

  /** If-Modified-Since header */
  ifModifiedSince?: string;

  /** Additional headers for this specific request */
  headers?: Record<string, string>;

  /** Override the timeout for this specific request */
  timeout?: number;

  /** AbortSignal for request cancellation */
  signal?: AbortSignal;
}

/**
 * A JSON Patch operation (RFC 6902).
 */
export interface JsonPatch {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
  path: string;
  value?: unknown;
  from?: string;
}

/**
 * Response wrapper that includes HTTP metadata alongside the FHIR resource.
 */
export interface FhirResponse<T> {
  resource: T;
  status: number;
  statusText: string;
  headers: Headers;
  etag?: string;
  location?: string;
  lastModified?: string;
}
