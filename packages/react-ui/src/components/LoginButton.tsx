import { useCallback } from 'react';
import { useSmartAuth } from '@fhir-toolkit/react';
import type { LoginButtonProps } from '../types.js';

export function LoginButton({
  authorizeOptions,
  children,
  onLogin,
  label = 'Login',
  ...buttonProps
}: LoginButtonProps) {
  const { authorize, status, isAuthenticated } = useSmartAuth();

  const login = useCallback(() => {
    onLogin?.();
    authorize(authorizeOptions);
  }, [authorize, authorizeOptions, onLogin]);

  const isLoading = status === 'authorizing';

  if (children) {
    return children({ login, isLoading, status, isAuthenticated });
  }

  return (
    <button
      type="button"
      onClick={login}
      disabled={buttonProps.disabled ?? isLoading}
      aria-label={buttonProps['aria-label'] ?? label}
    >
      {label}
    </button>
  );
}
