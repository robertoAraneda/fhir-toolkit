import { useMemo } from 'react';
import { formatFhirValue } from '../utils/format-fhir-value.js';
import type { ResourceTableProps, Row, Cell } from '../types.js';
import type { IResource } from '@fhir-toolkit/r4-types';

export function ResourceTable<T = IResource>({
  bundle,
  columns,
  children,
}: ResourceTableProps<T>) {
  const resources = useMemo(() => {
    if (!bundle.entry) return [] as T[];
    return bundle.entry
      .filter((e) => e.resource != null)
      .map((e) => e.resource as T);
  }, [bundle]);

  const rows = useMemo((): Row<T>[] => {
    return resources.map((resource) => {
      const cells: Cell[] = columns.map((col) => {
        const value = col.accessor(resource);
        const type = col.type ?? (typeof value === 'string' ? 'string' : typeof value === 'boolean' ? 'boolean' : typeof value === 'number' ? 'decimal' : 'string');
        return {
          value,
          formatted: formatFhirValue(value, type),
        };
      });
      return { resource, cells };
    });
  }, [resources, columns]);

  const total = bundle.total;

  return children({ rows, columns, total, resources });
}
