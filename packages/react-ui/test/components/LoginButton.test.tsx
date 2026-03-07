import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { LoginButton } from '../../src/components/LoginButton.js';
import {
  renderWithProvider,
  setupFetchMock,
} from '../helpers/test-utils.js';

describe('LoginButton', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders default button with label "Login"', () => {
    renderWithProvider(<LoginButton />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeDefined();
  });

  it('renders custom label', () => {
    renderWithProvider(<LoginButton label="Sign In" />);
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeDefined();
  });

  it('calls onLogin callback on click', () => {
    const onLogin = vi.fn();
    renderWithProvider(<LoginButton onLogin={onLogin} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onLogin).toHaveBeenCalledOnce();
  });

  it('disables button when disabled prop is true', () => {
    renderWithProvider(<LoginButton disabled />);
    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });

  it('renders with custom aria-label', () => {
    renderWithProvider(<LoginButton aria-label="Sign in to SMART" />);
    expect(screen.getByLabelText('Sign in to SMART')).toBeDefined();
  });

  it('renders render prop children', () => {
    renderWithProvider(
      <LoginButton>
        {({ login, isLoading, status, isAuthenticated }) => (
          <div data-testid="custom">
            <span data-testid="status">{status}</span>
            <span data-testid="loading">{String(isLoading)}</span>
            <span data-testid="auth">{String(isAuthenticated)}</span>
            <button onClick={login}>Custom Login</button>
          </div>
        )}
      </LoginButton>,
    );

    expect(screen.getByTestId('status').textContent).toBe('unauthorized');
    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('auth').textContent).toBe('false');
    expect(screen.getByText('Custom Login')).toBeDefined();
  });

  it('render prop login function calls authorize', () => {
    const onLogin = vi.fn();
    renderWithProvider(
      <LoginButton onLogin={onLogin}>
        {({ login }) => (
          <button data-testid="custom-btn" onClick={login}>Go</button>
        )}
      </LoginButton>,
    );

    fireEvent.click(screen.getByTestId('custom-btn'));
    expect(onLogin).toHaveBeenCalledOnce();
  });
});
