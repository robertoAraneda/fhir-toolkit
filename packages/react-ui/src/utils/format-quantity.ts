import type { IQuantity } from '@fhir-toolkit/r4-types';

export function formatQuantity(quantity: IQuantity): string {
  const parts: string[] = [];

  if (quantity.comparator) {
    parts.push(quantity.comparator);
  }

  if (quantity.value !== undefined) {
    parts.push(String(quantity.value));
  }

  if (quantity.unit) {
    parts.push(quantity.unit);
  } else if (quantity.code) {
    parts.push(quantity.code);
  }

  return parts.join(' ').trim();
}
