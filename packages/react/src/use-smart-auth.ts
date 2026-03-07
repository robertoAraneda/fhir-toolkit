import { useCallback, useSyncExternalStore } from 'react';
import type { AuthState, AuthorizeOptions, EhrLaunchParams } from '@fhir-toolkit/smart-auth';
import { useFhirContext } from './use-fhir-context.js';

const UNAUTHORIZED_STATE: AuthState = { status: 'unauthorized' };

export function useSmartAuth() {
  const { smartAuth } = useFhirContext();

  const state = useSyncExternalStore(
    (cb) => smartAuth.onStateChange(cb),
    () => smartAuth.getAuthState(),
    () => UNAUTHORIZED_STATE,
  );

  const authorize = useCallback(
    (options?: AuthorizeOptions) => smartAuth.authorize(options),
    [smartAuth],
  );

  const handleCallback = useCallback(
    (callbackUrl?: string) => smartAuth.handleCallback(callbackUrl),
    [smartAuth],
  );

  const handleEhrLaunch = useCallback(
    (params: EhrLaunchParams) => smartAuth.handleEhrLaunch(params),
    [smartAuth],
  );

  const logout = useCallback(() => smartAuth.logout(), [smartAuth]);

  return {
    status: state.status,
    error: state.status === 'error' ? state.error : null,
    isAuthenticated: state.status === 'authorized',
    authorize,
    handleCallback,
    handleEhrLaunch,
    logout,
    patientId: smartAuth.getPatientId(),
    encounterId: smartAuth.getEncounterId(),
    fhirUser: smartAuth.getFhirUser(),
    tokenResponse: smartAuth.getTokenResponse(),
    smartAuth,
  };
}
