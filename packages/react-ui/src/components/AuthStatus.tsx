import type { ReactElement } from 'react';
import { useSmartAuth } from '@fhir-toolkit/react';
import type { AuthStatusProps } from '../types.js';

export function AuthStatus({ children }: AuthStatusProps): ReactElement {
  const {
    status,
    isAuthenticated,
    error,
    patientId,
    encounterId,
    fhirUser,
    tokenResponse,
  } = useSmartAuth();

  return children({
    status,
    isAuthenticated,
    error,
    patientId,
    encounterId,
    fhirUser,
    tokenResponse,
  });
}
