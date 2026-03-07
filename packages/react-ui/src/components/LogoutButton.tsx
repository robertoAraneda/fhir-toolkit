import { useCallback, useState } from 'react';
import { useSmartAuth } from '@fhir-toolkit/react';
import type { LogoutButtonProps } from '../types.js';

export function LogoutButton({
  children,
  onLogout,
  label = 'Logout',
  ...buttonProps
}: LogoutButtonProps) {
  const { logout: smartLogout, isAuthenticated } = useSmartAuth();
  const [isLoading, setIsLoading] = useState(false);

  const logout = useCallback(() => {
    setIsLoading(true);
    smartLogout()
      .then(() => {
        onLogout?.();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [smartLogout, onLogout]);

  if (children) {
    return children({ logout, isLoading, isAuthenticated });
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={buttonProps.disabled ?? isLoading}
      aria-label={buttonProps['aria-label'] ?? label}
    >
      {label}
    </button>
  );
}
