import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFhirClient } from '../src/use-fhir-client.js';
import {
  createTestSmartAuth,
  createAuthenticatedSmartAuth,
  renderHookWithProvider,
  setupFetchMock,
} from './helpers/test-utils.js';

describe('useFhirClient', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('throws outside FhirProvider', () => {
    expect(() => renderHook(() => useFhirClient())).toThrow(
      'useFhirContext must be used within a <FhirProvider>',
    );
  });

  it('returns null when not authenticated', () => {
    const { result } = renderHookWithProvider(() => useFhirClient());
    expect(result.current).toBeNull();
  });

  it('returns FhirClient when authenticated', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useFhirClient(), smartAuth);

    // Wait for provider effect to create client
    await act(async () => {
      await new Promise((r) => setTimeout(r, 10));
    });

    expect(result.current).not.toBeNull();
    expect(result.current).toBeDefined();
  });

  it('returns null after logout', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useFhirClient(), smartAuth);

    await act(async () => {
      await new Promise((r) => setTimeout(r, 10));
    });
    expect(result.current).not.toBeNull();

    await act(async () => {
      await smartAuth.logout();
    });

    expect(result.current).toBeNull();
  });
});
