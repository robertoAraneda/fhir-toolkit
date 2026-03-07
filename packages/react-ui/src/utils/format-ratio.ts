import type { IRatio } from '@fhir-toolkit/r4-types';
import { formatQuantity } from './format-quantity.js';

export function formatRatio(ratio: IRatio): string {
  const num = ratio.numerator ? formatQuantity(ratio.numerator) : '';
  const den = ratio.denominator ? formatQuantity(ratio.denominator) : '';

  if (num && den) return `${num} / ${den}`;
  if (num) return num;
  if (den) return `/ ${den}`;
  return '';
}
