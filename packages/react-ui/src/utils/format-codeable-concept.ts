import type { ICodeableConcept } from '@fhir-toolkit/r4-types';
import { formatCoding } from './format-coding.js';

export function formatCodeableConcept(concept: ICodeableConcept): string {
  if (concept.text) return concept.text;
  if (concept.coding?.length) {
    const first = concept.coding[0];
    if (first) return formatCoding(first);
  }
  return '';
}
