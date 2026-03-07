import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSmartAuth } from '../src/use-smart-auth.js';
import {
  createTestSmartAuth,
  createAuthenticatedSmartAuth,
  renderHookWithProvider,
  setupFetchMock,
} from './helpers/test-utils.js';

describe('useSmartAuth', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('throws outside FhirProvider', () => {
    expect(() => renderHook(() => useSmartAuth())).toThrow(
      'useFhirContext must be used within a <FhirProvider>',
    );
  });

  it('returns unauthorized status initially', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());

    expect(result.current.status).toBe('unauthorized');
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('returns authenticated status when token is in storage', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();

    // Wait for async restore
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useSmartAuth(), smartAuth);

    expect(result.current.status).toBe('authorized');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('exposes smartAuth instance', () => {
    const smartAuth = createTestSmartAuth();
    const { result } = renderHookWithProvider(() => useSmartAuth(), smartAuth);

    expect(result.current.smartAuth).toBe(smartAuth);
  });

  it('returns null context values when not authenticated', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());

    expect(result.current.patientId).toBeNull();
    expect(result.current.encounterId).toBeNull();
    expect(result.current.fhirUser).toBeNull();
    expect(result.current.tokenResponse).toBeNull();
  });

  it('returns context values when authenticated', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useSmartAuth(), smartAuth);

    expect(result.current.patientId).toBe('Patient/789');
    expect(result.current.tokenResponse?.access_token).toBe('at-123');
  });

  it('provides authorize function', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());
    expect(typeof result.current.authorize).toBe('function');
  });

  it('provides handleCallback function', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());
    expect(typeof result.current.handleCallback).toBe('function');
  });

  it('provides handleEhrLaunch function', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());
    expect(typeof result.current.handleEhrLaunch).toBe('function');
  });

  it('provides logout function', () => {
    const { result } = renderHookWithProvider(() => useSmartAuth());
    expect(typeof result.current.logout).toBe('function');
  });

  it('updates state on logout', async () => {
    const { smartAuth } = createAuthenticatedSmartAuth();
    await new Promise((r) => setTimeout(r, 10));

    const { result } = renderHookWithProvider(() => useSmartAuth(), smartAuth);
    expect(result.current.isAuthenticated).toBe(true);

    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.status).toBe('unauthorized');
    expect(result.current.isAuthenticated).toBe(false);
  });
});
