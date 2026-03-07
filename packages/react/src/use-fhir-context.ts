import { useContext } from 'react';
import { FhirContext } from './context.js';
import type { FhirContextValue } from './context.js';

export function useFhirContext(): FhirContextValue {
  const ctx = useContext(FhirContext);
  if (!ctx) {
    throw new Error(
      'useFhirContext must be used within a <FhirProvider>. ' +
        'Wrap your component tree with <FhirProvider config={...}> or <FhirProvider smartAuth={...}>.',
    );
  }
  return ctx;
}
