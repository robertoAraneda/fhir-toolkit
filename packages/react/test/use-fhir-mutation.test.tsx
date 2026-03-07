import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from '@testing-library/react';
import { useFhirMutation } from '../src/use-fhir-mutation.js';
import {
  createAuthenticatedSmartAuth,
  renderHookWithProvider,
  setupFetchMock,
} from './helpers/test-utils.js';

const PATIENT_RESOURCE = {
  resourceType: 'Patient' as const,
  name: [{ family: 'Smith', given: ['John'] }],
};

const CREATED_PATIENT = {
  ...PATIENT_RESOURCE,
  id: 'new-123',
};

describe('useFhirMutation', () => {
  beforeEach(() => {
    setupFetchMock();

    const originalFetch = globalThis.fetch;
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : input.toString();
        const method = init?.method ?? 'GET';

        if (url.includes('/Patient') && method === 'POST') {
          return new Response(JSON.stringify(CREATED_PATIENT), {
            status: 201,
            headers: {
              'content-type': 'application/fhir+json',
              location: 'Patient/new-123/_history/1',
            },
          });
        }
        if (url.includes('/Patient/') && method === 'PUT') {
          const body = JSON.parse(init?.body as string);
          return new Response(JSON.stringify(body), {
            status: 200,
            headers: { 'content-type': 'application/fhir+json' },
          });
        }
        if (url.includes('/Patient/') && method === 'DELETE') {
          return new Response(null, { status: 204 });
        }
        return originalFetch(input, init);
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns loading false initially', () => {
    const { result } = renderHookWithProvider(() => useFhirMutation());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('provides create, update, delete functions', () => {
    const { result } = renderHookWithProvider(() => useFhirMutation());

    expect(typeof result.current.create).toBe('function');
    expect(typeof result.current.update).toBe('function');
    expect(typeof result.current.delete).toBe('function');
  });

  it('throws on create when not authenticated', async () => {
    const { result } = renderHookWithProvider(() => useFhirMutation());

    await expect(
      act(async () => {
        await result.current.create(PATIENT_RESOURCE);
      }),
    ).rejects.toThrow('No authenticated FHIR client available');
  });

  it('throws on update when not authenticated', async () => {
    const { result } = renderHookWithProvider(() => useFhirMutation());

    await expect(
      act(async () => {
        await result.current.update({ ...PATIENT_RESOURCE, id: '123' });
      }),
    ).rejects.toThrow('No authenticated FHIR client available');
  });

  it('throws on delete when not authenticated', async () => {
    const { result } = renderHookWithProvider(() => useFhirMutation());

    await expect(
      act(async () => {
        await result.current.delete('Patient', '123');
      }),
    ).rejects.toThrow('No authenticated FHIR client available');
  });

  it('creates a resource when authenticated', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useFhirMutation(), smartAuth);

    // Wait for client to be created
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });

    let created: typeof CREATED_PATIENT | undefined;
    await act(async () => {
      created = await result.current.create(PATIENT_RESOURCE);
    });

    expect(created).toBeDefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('deletes a resource when authenticated', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useFhirMutation(), smartAuth);

    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });

    await act(async () => {
      await result.current.delete('Patient', '123');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
