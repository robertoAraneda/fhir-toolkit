import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';
import { AuthGuard } from '../../src/components/AuthGuard.js';
import {
  renderWithProvider,
  createAuthenticatedSmartAuth,
  setupFetchMock,
} from '../helpers/test-utils.js';

describe('AuthGuard', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children when authorized', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <AuthGuard>
        <div data-testid="protected">Protected Content</div>
      </AuthGuard>,
      smartAuth,
    );

    expect(screen.getByTestId('protected')).toBeDefined();
  });

  it('renders fallback when unauthorized', () => {
    renderWithProvider(
      <AuthGuard fallback={<div data-testid="fallback">Please login</div>}>
        <div data-testid="protected">Protected</div>
      </AuthGuard>,
    );

    expect(screen.getByTestId('fallback')).toBeDefined();
    expect(screen.queryByTestId('protected')).toBeNull();
  });

  it('renders null when unauthorized and no fallback', () => {
    const { container } = renderWithProvider(
      <AuthGuard>
        <div data-testid="protected">Protected</div>
      </AuthGuard>,
    );

    expect(screen.queryByTestId('protected')).toBeNull();
    expect(container.innerHTML).toBe('');
  });

  it('renders error callback when status is error', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    // Force error state by handling a bad callback
    try {
      await smartAuth.handleCallback('http://localhost:3000/callback?error=access_denied&error_description=Denied');
    } catch {
      // Expected
    }

    renderWithProvider(
      <AuthGuard
        error={(err) => <div data-testid="error">Error: {err.message}</div>}
      >
        <div data-testid="protected">Protected</div>
      </AuthGuard>,
      smartAuth,
    );

    expect(screen.getByTestId('error')).toBeDefined();
    expect(screen.queryByTestId('protected')).toBeNull();
  });

  it('requires patient when requirePatient=true', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    // This smartAuth has patient: 'Patient/789' from TOKEN_RESPONSE
    renderWithProvider(
      <AuthGuard requirePatient>
        <div data-testid="protected">Protected</div>
      </AuthGuard>,
      smartAuth,
    );

    expect(screen.getByTestId('protected')).toBeDefined();
  });

  it('renders fallback when requirePatient=true but no patientId', async () => {
    // Create auth with token that has no patient field
    const { createTestConfig } = await import('../helpers/test-utils.js');
    const { SmartAuth } = await import('@fhir-toolkit/react');

    const storage = {
      _store: new Map<string, string>(),
      get: (key: string) => storage._store.get(key) ?? null,
      set: (key: string, value: string) => { storage._store.set(key, value); },
      remove: (key: string) => { storage._store.delete(key); },
    };

    storage._store.set(
      'smart_token_response',
      JSON.stringify({
        access_token: 'at-123',
        token_type: 'Bearer',
        expires_in: 3600,
        _expiresAt: Date.now() + 3600_000,
        // No patient field
      }),
    );

    const smartAuth = new SmartAuth(createTestConfig({ storage }));
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <AuthGuard
        requirePatient
        fallback={<div data-testid="fallback">No patient</div>}
      >
        <div data-testid="protected">Protected</div>
      </AuthGuard>,
      smartAuth,
    );

    expect(screen.getByTestId('fallback')).toBeDefined();
    expect(screen.queryByTestId('protected')).toBeNull();
  });
});
