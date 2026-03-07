import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen, act } from '@testing-library/react';
import { LogoutButton } from '../../src/components/LogoutButton.js';
import {
  renderWithProvider,
  createAuthenticatedSmartAuth,
  setupFetchMock,
} from '../helpers/test-utils.js';

describe('LogoutButton', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders default button with label "Logout"', () => {
    renderWithProvider(<LogoutButton />);
    expect(screen.getByRole('button', { name: 'Logout' })).toBeDefined();
  });

  it('renders custom label', () => {
    renderWithProvider(<LogoutButton label="Sign Out" />);
    expect(screen.getByRole('button', { name: 'Sign Out' })).toBeDefined();
  });

  it('calls logout on click', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(<LogoutButton />, smartAuth);

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    // After logout, state should be unauthorized
    expect(smartAuth.isAuthenticated()).toBe(false);
  });

  it('calls onLogout callback after successful logout', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const onLogout = vi.fn();
    renderWithProvider(<LogoutButton onLogout={onLogout} />, smartAuth);

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
      await new Promise((r) => setTimeout(r, 10));
    });

    expect(onLogout).toHaveBeenCalledOnce();
  });

  it('renders render prop children', () => {
    renderWithProvider(
      <LogoutButton>
        {({ logout, isLoading, isAuthenticated }) => (
          <div>
            <span data-testid="loading">{String(isLoading)}</span>
            <span data-testid="auth">{String(isAuthenticated)}</span>
            <button data-testid="custom-btn" onClick={logout}>Go</button>
          </div>
        )}
      </LogoutButton>,
    );

    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('auth').textContent).toBe('false');
  });

  it('disables button when disabled prop is true', () => {
    renderWithProvider(<LogoutButton disabled />);
    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });
});
