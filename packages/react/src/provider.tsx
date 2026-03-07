import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { SmartAuth } from '@fhir-toolkit/smart-auth';
import type { SmartAuthConfig } from '@fhir-toolkit/smart-auth';
import type { FhirClient } from '@fhir-toolkit/client';
import { FhirContext } from './context.js';

export interface FhirProviderProps {
  /** Pre-created SmartAuth instance. Mutually exclusive with `config`. */
  smartAuth?: SmartAuth;
  /** SmartAuth configuration. Creates an instance internally. Mutually exclusive with `smartAuth`. */
  config?: SmartAuthConfig;
  children: ReactNode;
}

export function FhirProvider({ smartAuth: smartAuthProp, config, children }: FhirProviderProps) {
  if (smartAuthProp && config) {
    throw new Error(
      'FhirProvider accepts either `smartAuth` or `config`, not both.',
    );
  }
  if (!smartAuthProp && !config) {
    throw new Error(
      'FhirProvider requires either a `smartAuth` instance or a `config` object.',
    );
  }

  // Create SmartAuth from config if no instance provided
  const smartAuth = useMemo(
    () => smartAuthProp ?? new SmartAuth(config!),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [smartAuthProp],
  );

  const [client, setClient] = useState<FhirClient | null>(null);

  useEffect(() => {
    // Set initial client if already authenticated
    if (smartAuth.isAuthenticated()) {
      setClient(smartAuth.createFhirClient());
    }

    const unsubscribe = smartAuth.onStateChange((state) => {
      if (state.status === 'authorized') {
        setClient(smartAuth.createFhirClient());
      } else {
        setClient(null);
      }
    });

    return unsubscribe;
  }, [smartAuth]);

  const value = useMemo(() => ({ smartAuth, client }), [smartAuth, client]);

  return <FhirContext.Provider value={value}>{children}</FhirContext.Provider>;
}
