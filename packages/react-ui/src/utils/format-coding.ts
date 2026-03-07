import type { ICoding } from '@fhir-toolkit/r4-types';

export function formatCoding(coding: ICoding): string {
  if (coding.display) return coding.display;
  if (coding.code && coding.system) return `${coding.code} (${coding.system})`;
  if (coding.code) return coding.code;
  return '';
}
