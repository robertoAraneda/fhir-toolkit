import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';
import { AuthStatus } from '../../src/components/AuthStatus.js';
import {
  renderWithProvider,
  createAuthenticatedSmartAuth,
  setupFetchMock,
} from '../helpers/test-utils.js';

describe('AuthStatus', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('passes unauthorized status to render prop', () => {
    renderWithProvider(
      <AuthStatus>
        {({ status }) => <span data-testid="status">{status}</span>}
      </AuthStatus>,
    );

    expect(screen.getByTestId('status').textContent).toBe('unauthorized');
  });

  it('passes isAuthenticated=false when unauthorized', () => {
    renderWithProvider(
      <AuthStatus>
        {({ isAuthenticated }) => (
          <span data-testid="auth">{String(isAuthenticated)}</span>
        )}
      </AuthStatus>,
    );

    expect(screen.getByTestId('auth').textContent).toBe('false');
  });

  it('passes isAuthenticated=true when authorized', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <AuthStatus>
        {({ isAuthenticated, status }) => (
          <div>
            <span data-testid="auth">{String(isAuthenticated)}</span>
            <span data-testid="status">{status}</span>
          </div>
        )}
      </AuthStatus>,
      smartAuth,
    );

    expect(screen.getByTestId('auth').textContent).toBe('true');
    expect(screen.getByTestId('status').textContent).toBe('authorized');
  });

  it('passes context values when authorized', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <AuthStatus>
        {({ patientId, tokenResponse }) => (
          <div>
            <span data-testid="patient">{patientId ?? 'none'}</span>
            <span data-testid="token">{tokenResponse?.access_token ?? 'none'}</span>
          </div>
        )}
      </AuthStatus>,
      smartAuth,
    );

    expect(screen.getByTestId('patient').textContent).toBe('Patient/789');
    expect(screen.getByTestId('token').textContent).toBe('at-123');
  });
});
