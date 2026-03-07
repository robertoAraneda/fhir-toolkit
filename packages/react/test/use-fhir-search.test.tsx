import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useFhirSearch } from '../src/use-fhir-search.js';
import {
  createAuthenticatedSmartAuth,
  renderHookWithProvider,
  setupFetchMock,
} from './helpers/test-utils.js';

const SEARCH_BUNDLE = {
  resourceType: 'Bundle',
  type: 'searchset',
  total: 1,
  entry: [
    {
      resource: {
        resourceType: 'Patient',
        id: '123',
        name: [{ family: 'Smith' }],
      },
    },
  ],
};

describe('useFhirSearch', () => {
  beforeEach(() => {
    setupFetchMock();

    const originalFetch = globalThis.fetch;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : input.toString();
        if (url.includes('/Patient') && !url.includes('/token') && !url.includes('.well-known')) {
          return new Response(JSON.stringify(SEARCH_BUNDLE), {
            status: 200,
            headers: { 'content-type': 'application/fhir+json' },
          });
        }
        return originalFetch(input, init);
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns null data when not authenticated', () => {
    const { result } = renderHookWithProvider(
      () => useFhirSearch('Patient'),
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('skips fetch when enabled is false', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirSearch('Patient', undefined, { enabled: false }),
      smartAuth,
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('provides a refetch function', () => {
    const { result } = renderHookWithProvider(
      () => useFhirSearch('Patient'),
    );

    expect(typeof result.current.refetch).toBe('function');
  });

  it('accepts search params', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirSearch('Patient', { name: 'Smith', _count: 10 }),
      smartAuth,
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeNull();
  });

  it('defaults enabled to true', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirSearch('Patient'),
      smartAuth,
    );

    // Should attempt fetch (loading or completed)
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeNull();
  });
});
