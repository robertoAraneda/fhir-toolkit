import type { IRange } from '@fhir-toolkit/r4-types';
import { formatQuantity } from './format-quantity.js';

export function formatRange(range: IRange): string {
  const low = range.low ? formatQuantity(range.low) : '';
  const high = range.high ? formatQuantity(range.high) : '';

  if (low && high) return `${low} – ${high}`;
  if (low) return `>= ${low}`;
  if (high) return `<= ${high}`;
  return '';
}
