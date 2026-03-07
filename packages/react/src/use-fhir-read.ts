import { useState, useEffect, useCallback, useRef } from 'react';
import type { FhirClientError } from '@fhir-toolkit/client';
import { useFhirContext } from './use-fhir-context.js';

export interface UseFhirReadResult<T> {
  data: T | null;
  loading: boolean;
  error: FhirClientError | null;
  refetch: () => void;
}

export function useFhirRead<T = unknown>(
  resourceType: string,
  id: string | null | undefined,
): UseFhirReadResult<T> {
  const { client } = useFhirContext();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FhirClientError | null>(null);
  const fetchIdRef = useRef(0);

  const execute = useCallback(() => {
    if (!client || !id) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchId = ++fetchIdRef.current;
    setLoading(true);
    setError(null);

    client
      .read<T & { resourceType: string; id?: string }>(resourceType, id)
      .then((result) => {
        if (fetchId === fetchIdRef.current) {
          setData(result as unknown as T);
          setLoading(false);
        }
      })
      .catch((err: FhirClientError) => {
        if (fetchId === fetchIdRef.current) {
          setError(err);
          setLoading(false);
        }
      });
  }, [client, resourceType, id]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}
