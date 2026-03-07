import type { ReactElement } from 'react';
import { useSmartAuth } from '@fhir-toolkit/react';
import type { AuthGuardProps } from '../types.js';

export function AuthGuard({
  children,
  fallback = null,
  loading = null,
  error,
  requirePatient = false,
}: AuthGuardProps): ReactElement | null {
  const { status, error: authError, patientId } = useSmartAuth();

  if (status === 'authorizing') {
    return (loading ?? null) as ReactElement | null;
  }

  if (status === 'error' && authError) {
    return error ? error(authError) : null;
  }

  if (status !== 'authorized') {
    return (fallback ?? null) as ReactElement | null;
  }

  if (requirePatient && !patientId) {
    return (fallback ?? null) as ReactElement | null;
  }

  return children as ReactElement;
}
