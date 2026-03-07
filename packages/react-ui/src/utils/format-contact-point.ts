import type { IContactPoint } from '@fhir-toolkit/r4-types';

export function formatContactPoint(contactPoint: IContactPoint): string {
  const parts: string[] = [];

  if (contactPoint.system) {
    parts.push(`[${contactPoint.system}]`);
  }

  if (contactPoint.value) {
    parts.push(contactPoint.value);
  }

  if (contactPoint.use) {
    parts.push(`(${contactPoint.use})`);
  }

  return parts.join(' ').trim();
}
