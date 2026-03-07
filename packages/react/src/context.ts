import { createContext } from 'react';
import type { SmartAuth } from '@fhir-toolkit/smart-auth';
import type { FhirClient } from '@fhir-toolkit/client';

export interface FhirContextValue {
  smartAuth: SmartAuth;
  client: FhirClient | null;
}

export const FhirContext = createContext<FhirContextValue | null>(null);
