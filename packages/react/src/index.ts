// Provider
export { FhirProvider } from './provider.js';
export type { FhirProviderProps } from './provider.js';

// Context
export type { FhirContextValue } from './context.js';

// Hooks
export { useSmartAuth } from './use-smart-auth.js';
export { useFhirClient } from './use-fhir-client.js';
export { useFhirRead } from './use-fhir-read.js';
export type { UseFhirReadResult } from './use-fhir-read.js';
export { useFhirSearch } from './use-fhir-search.js';
export type { UseFhirSearchResult, UseFhirSearchOptions } from './use-fhir-search.js';
export { useFhirMutation } from './use-fhir-mutation.js';
export type { UseFhirMutationResult } from './use-fhir-mutation.js';

// Re-exports from @fhir-toolkit/smart-auth (common types)
export type {
  SmartAuthConfig,
  AuthState,
  TokenResponse,
  AuthorizeOptions,
  EhrLaunchParams,
} from '@fhir-toolkit/smart-auth';
export { SmartAuth, SmartAuthError } from '@fhir-toolkit/smart-auth';

// Re-exports from @fhir-toolkit/client (common types)
export type { SearchParams, FhirClientOptions } from '@fhir-toolkit/client';
export { FhirClient, FhirClientError } from '@fhir-toolkit/client';
