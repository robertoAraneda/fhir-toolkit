import { useMemo } from 'react';
import { formatFhirValue } from '../utils/format-fhir-value.js';
import type { ResourceDetailProps, RenderedField } from '../types.js';
import type { IResource } from '@fhir-toolkit/r4-types';

export function ResourceDetail<T = IResource>({
  resource,
  fields: fieldDefs,
  children,
}: ResourceDetailProps<T>) {
  const fields = useMemo((): RenderedField[] => {
    return fieldDefs.map((def) => {
      const value = def.accessor(resource);
      const type = def.type ?? (typeof value === 'string' ? 'string' : typeof value === 'boolean' ? 'boolean' : typeof value === 'number' ? 'decimal' : 'string');
      return {
        label: def.label,
        value,
        formatted: formatFhirValue(value, type),
      };
    });
  }, [resource, fieldDefs]);

  return children({ fields });
}
