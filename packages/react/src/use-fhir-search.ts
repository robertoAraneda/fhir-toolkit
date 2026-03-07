import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import type { SearchParams, FhirClientError } from '@fhir-toolkit/client';
import { useFhirContext } from './use-fhir-context.js';

export interface UseFhirSearchOptions {
  enabled?: boolean;
}

export interface UseFhirSearchResult<T> {
  data: T | null;
  loading: boolean;
  error: FhirClientError | null;
  refetch: () => void;
}

export function useFhirSearch<T = unknown>(
  resourceType: string,
  params?: SearchParams,
  options?: UseFhirSearchOptions,
): UseFhirSearchResult<T> {
  const { client } = useFhirContext();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FhirClientError | null>(null);
  const fetchIdRef = useRef(0);

  const enabled = options?.enabled !== false;
  const paramsKey = useMemo(() => JSON.stringify(params ?? {}), [params]);

  const execute = useCallback(() => {
    if (!client || !enabled) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchId = ++fetchIdRef.current;
    setLoading(true);
    setError(null);

    const parsedParams: SearchParams | undefined =
      paramsKey !== '{}' ? (JSON.parse(paramsKey) as SearchParams) : undefined;

    client
      .search(resourceType, parsedParams)
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
  }, [client, resourceType, paramsKey, enabled]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}
