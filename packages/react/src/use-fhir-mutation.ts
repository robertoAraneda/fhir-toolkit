import { useState, useCallback } from 'react';
import type { FhirClientError } from '@fhir-toolkit/client';
import { useFhirContext } from './use-fhir-context.js';

export interface UseFhirMutationResult {
  create: <T extends { resourceType: string }>(resource: T) => Promise<T>;
  update: <T extends { resourceType: string; id?: string }>(resource: T) => Promise<T>;
  delete: (resourceType: string, id: string) => Promise<void>;
  loading: boolean;
  error: FhirClientError | null;
}

export function useFhirMutation(): UseFhirMutationResult {
  const { client } = useFhirContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FhirClientError | null>(null);

  function assertClient(): NonNullable<typeof client> {
    if (!client) {
      throw new Error(
        'No authenticated FHIR client available. Ensure the user is authenticated before calling mutations.',
      );
    }
    return client;
  }

  const create = useCallback(
    async <T extends { resourceType: string }>(resource: T): Promise<T> => {
      const c = assertClient();
      setLoading(true);
      setError(null);
      try {
        const result = await c.create(resource as T & { resourceType: string; id?: string });
        setLoading(false);
        return result as unknown as T;
      } catch (err) {
        setLoading(false);
        setError(err as FhirClientError);
        throw err;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [client],
  );

  const update = useCallback(
    async <T extends { resourceType: string; id?: string }>(resource: T): Promise<T> => {
      const c = assertClient();
      setLoading(true);
      setError(null);
      try {
        const result = await c.update(resource as T & { resourceType: string; id?: string });
        setLoading(false);
        return result as unknown as T;
      } catch (err) {
        setLoading(false);
        setError(err as FhirClientError);
        throw err;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [client],
  );

  const deleteFn = useCallback(
    async (resourceType: string, id: string): Promise<void> => {
      const c = assertClient();
      setLoading(true);
      setError(null);
      try {
        await c.delete(resourceType, id);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err as FhirClientError);
        throw err;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [client],
  );

  return { create, update, delete: deleteFn, loading, error };
}
