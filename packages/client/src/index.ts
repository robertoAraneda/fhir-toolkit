/**
 * @fhir-toolkit/client
 *
 * A type-safe FHIR R4 REST client for browser and Node.js (18+).
 * Zero external runtime dependencies. Uses native fetch API.
 *
 * @packageDocumentation
 */

export { FhirClient } from './client.js';

export type {
  FhirClientOptions,
  FhirClientInterceptors,
  AuthConfig,
  SearchParams,
  HistoryParams,
  RequestOptions,
  JsonPatch,
  FhirResponse,
} from './types.js';

export { FhirClientError, FhirTimeoutError } from './errors.js';

export { extractResources, findBundleLink, parseLocationHeader } from './utils.js';
