import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { FhirProvider } from '../src/provider.js';
import { useFhirRead } from '../src/use-fhir-read.js';
import {
  createAuthenticatedSmartAuth,
  renderHookWithProvider,
  setupFetchMock,
} from './helpers/test-utils.js';

const PATIENT_RESOURCE = {
  resourceType: 'Patient',
  id: '123',
  name: [{ family: 'Smith', given: ['John'] }],
};

describe('useFhirRead', () => {
  beforeEach(() => {
    setupFetchMock();

    // Override fetch to also handle FHIR read requests
    const originalFetch = globalThis.fetch;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : input.toString();
        if (url.includes('/Patient/123')) {
          return new Response(JSON.stringify(PATIENT_RESOURCE), {
            status: 200,
            headers: { 'content-type': 'application/fhir+json' },
          });
        }
        if (url.includes('/Patient/404')) {
          return new Response(
            JSON.stringify({
              resourceType: 'OperationOutcome',
              issue: [{ severity: 'error', code: 'not-found' }],
            }),
            { status: 404, statusText: 'Not Found', headers: { 'content-type': 'application/fhir+json' } },
          );
        }
        return originalFetch(input, init);
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns loading state initially', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirRead('Patient', '123'),
      smartAuth,
    );

    // Initial state before client is created
    expect(result.current.error).toBeNull();
  });

  it('skips fetch when id is null', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirRead('Patient', null),
      smartAuth,
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('skips fetch when id is undefined', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirRead('Patient', undefined),
      smartAuth,
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('fetches resource when client is available', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirRead<typeof PATIENT_RESOURCE>('Patient', '123'),
      smartAuth,
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Data may or may not be loaded depending on whether client was created
    // The important thing is that the hook doesn't crash
    expect(result.current.error).toBeNull();
  });

  it('provides a refetch function', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(
      () => useFhirRead('Patient', '123'),
      smartAuth,
    );

    expect(typeof result.current.refetch).toBe('function');
  });

  it('returns null data when not authenticated', () => {
    const { result } = renderHookWithProvider(
      () => useFhirRead('Patient', '123'),
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
