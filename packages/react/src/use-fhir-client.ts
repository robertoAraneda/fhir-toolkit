import type { FhirClient } from '@fhir-toolkit/client';
import { useFhirContext } from './use-fhir-context.js';

export function useFhirClient(): FhirClient | null {
  return useFhirContext().client;
}
