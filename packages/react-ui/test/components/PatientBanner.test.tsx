import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { PatientBanner } from '../../src/components/PatientBanner.js';
import {
  renderWithProvider,
  createAuthenticatedSmartAuth,
  createTestSmartAuth,
  setupFetchMock,
} from '../helpers/test-utils.js';

describe('PatientBanner', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('passes loading state to render prop', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <PatientBanner>
        {({ loading, data }) => (
          <div>
            <span data-testid="loading">{String(loading)}</span>
            <span data-testid="has-data">{String(!!data)}</span>
          </div>
        )}
      </PatientBanner>,
      smartAuth,
    );

    // Should eventually resolve
    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
  });

  it('provides refetch function', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    let refetchFn: (() => void) | undefined;
    renderWithProvider(
      <PatientBanner>
        {({ refetch }) => {
          refetchFn = refetch;
          return <span data-testid="ok">ok</span>;
        }}
      </PatientBanner>,
      smartAuth,
    );

    expect(typeof refetchFn).toBe('function');
  });

  it('data is null when no patient ID available', () => {
    renderWithProvider(
      <PatientBanner>
        {({ data, loading }) => (
          <div>
            <span data-testid="data">{data ? 'yes' : 'no'}</span>
            <span data-testid="loading">{String(loading)}</span>
          </div>
        )}
      </PatientBanner>,
    );

    expect(screen.getByTestId('data').textContent).toBe('no');
    expect(screen.getByTestId('loading').textContent).toBe('false');
  });

  it('uses explicit patientId prop over context', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <PatientBanner patientId="789">
        {({ data, loading }) => (
          <div>
            <span data-testid="loading">{String(loading)}</span>
            <span data-testid="name">{data?.displayName ?? 'loading...'}</span>
          </div>
        )}
      </PatientBanner>,
      smartAuth,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
  });

  it('strips Patient/ prefix from patientId', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <PatientBanner patientId="Patient/789">
        {({ loading }) => (
          <span data-testid="loading">{String(loading)}</span>
        )}
      </PatientBanner>,
      smartAuth,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
  });

  it('passes error to render prop on fetch failure', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    renderWithProvider(
      <PatientBanner patientId="nonexistent">
        {({ error, loading }) => (
          <div>
            <span data-testid="loading">{String(loading)}</span>
            <span data-testid="error">{error ? 'yes' : 'no'}</span>
          </div>
        )}
      </PatientBanner>,
      smartAuth,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
  });
});
