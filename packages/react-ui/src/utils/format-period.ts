import type { IPeriod } from '@fhir-toolkit/r4-types';

export function formatPeriod(period: IPeriod): string {
  if (period.start && period.end) {
    return `${period.start} – ${period.end}`;
  }
  if (period.start) {
    return `${period.start} – ongoing`;
  }
  if (period.end) {
    return `until ${period.end}`;
  }
  return '';
}
