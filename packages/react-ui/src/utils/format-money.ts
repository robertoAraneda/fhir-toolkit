import type { IMoney } from '@fhir-toolkit/r4-types';

export function formatMoney(money: IMoney): string {
  if (money.value === undefined) return '';

  const formatted = money.value.toFixed(2);
  if (money.currency) return `${formatted} ${money.currency}`;
  return formatted;
}
