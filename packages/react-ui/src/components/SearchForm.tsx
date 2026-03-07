import { useState, useCallback, useMemo } from 'react';
import type { SearchFormProps, SearchParams } from '../types.js';

export function SearchForm({ initialParams, onSearch, children }: SearchFormProps) {
  const [params, setParams] = useState<SearchParams>(() => ({ ...initialParams }));

  const setParam = useCallback((key: string, value: string) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  const submit = useCallback(
    (e?: { preventDefault?: () => void }) => {
      e?.preventDefault?.();
      onSearch(params);
    },
    [params, onSearch],
  );

  const reset = useCallback(() => {
    setParams({ ...initialParams });
    onSearch({ ...initialParams });
  }, [initialParams, onSearch]);

  const isDirty = useMemo(() => {
    const keys = new Set([...Object.keys(params), ...Object.keys(initialParams)]);
    for (const key of keys) {
      if (params[key] !== initialParams[key]) return true;
    }
    return false;
  }, [params, initialParams]);

  return children({ params, setParam, submit, reset, isDirty });
}
