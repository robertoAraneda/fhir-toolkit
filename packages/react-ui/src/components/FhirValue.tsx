import { useMemo } from 'react';
import { formatFhirValue } from '../utils/format-fhir-value.js';
import type { FhirValueProps } from '../types.js';

export function FhirValue({ value, type, children }: FhirValueProps) {
  const formatted = useMemo(() => formatFhirValue(value, type), [value, type]);

  if (children) {
    return children({ formatted, raw: value, type });
  }

  return <span>{formatted}</span>;
}
