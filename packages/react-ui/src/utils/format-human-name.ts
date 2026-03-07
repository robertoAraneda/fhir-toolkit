import type { IHumanName } from '@fhir-toolkit/r4-types';

export interface FormatHumanNameOptions {
  /** Order: 'family-first' or 'given-first'. Default: 'given-first' */
  order?: 'family-first' | 'given-first';
  /** Include prefix (e.g., "Dr."). Default: true */
  includePrefix?: boolean;
  /** Include suffix (e.g., "Jr."). Default: true */
  includeSuffix?: boolean;
}

export function formatHumanName(
  name: IHumanName,
  options?: FormatHumanNameOptions,
): string {
  if (name.text) return name.text;

  const order = options?.order ?? 'given-first';
  const includePrefix = options?.includePrefix !== false;
  const includeSuffix = options?.includeSuffix !== false;

  const parts: string[] = [];

  if (includePrefix && name.prefix?.length) {
    parts.push(name.prefix.join(' '));
  }

  if (order === 'given-first') {
    if (name.given?.length) parts.push(name.given.join(' '));
    if (name.family) parts.push(name.family);
  } else {
    if (name.family) parts.push(name.family + ',');
    if (name.given?.length) parts.push(name.given.join(' '));
  }

  if (includeSuffix && name.suffix?.length) {
    parts.push(name.suffix.join(' '));
  }

  return parts.join(' ').trim() || 'Unknown';
}
