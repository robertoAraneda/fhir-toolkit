/**
 * Shared helper functions for safely extracting typed values from CqlValue.
 */

import { Decimal } from 'decimal.js';
import type { CqlComparable, CqlValue } from '../types/index.js';
import {
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlDecimal,
  CqlInteger,
  CqlString,
  CqlTime,
} from '../types/index.js';
import { CqlInterval, CqlList } from '../types/index.js';

// ---------------------------------------------------------------------------
// Type guards / extractors
// ---------------------------------------------------------------------------

export function asString(v: CqlValue | null): string | null {
  if (v === null) return null;
  if (v instanceof CqlString) return v.value;
  return null;
}

export function asInteger(v: CqlValue | null): number | null {
  if (v === null) return null;
  if (v instanceof CqlInteger) return v.value;
  return null;
}

export function asDecimal(v: CqlValue | null): Decimal | null {
  if (v === null) return null;
  if (v instanceof CqlDecimal) return v.value;
  if (v instanceof CqlInteger) return new Decimal(v.value);
  return null;
}

export function asBoolean(v: CqlValue | null): boolean | null {
  if (v === null) return null;
  if (v instanceof CqlBoolean) return v.value;
  return null;
}

export function asList(v: CqlValue | null): CqlValue[] | null {
  if (v === null) return null;
  if (v instanceof CqlList) return v.values;
  return null;
}

export function asInterval(
  v: CqlValue | null,
): CqlInterval<CqlComparable> | null {
  if (v === null) return null;
  if (v instanceof CqlInterval) return v as CqlInterval<CqlComparable>;
  return null;
}

/**
 * Extract a numeric Decimal from a CqlValue (Integer or Decimal), defaulting
 * to Decimal(0) if not numeric.
 */
export function numericVal(v: CqlValue | null): Decimal {
  if (v === null) return new Decimal(0);
  if (v instanceof CqlInteger) return new Decimal(v.value);
  if (v instanceof CqlDecimal) return v.value;
  return new Decimal(0);
}

// ---------------------------------------------------------------------------
// Temporal helpers
// ---------------------------------------------------------------------------

const DATE_FORMATS = [
  // ISO 8601 with TZ
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(Z|[+-]\d{2}:\d{2})$/,
  // ISO 8601 no TZ
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?$/,
  // Date only
  /^(\d{4})-(\d{2})-(\d{2})$/,
  // Year-month
  /^(\d{4})-(\d{2})$/,
  // Year only
  /^(\d{4})$/,
];

/**
 * Parse a CqlValue (Date, DateTime, or String) to a JS Date object.
 * Returns null if parsing fails or value is null.
 */
export function toDate(v: CqlValue | null): Date | null {
  if (v === null) return null;

  if (v instanceof CqlDate) {
    return new Date(
      Date.UTC(v.year, (v.month || 1) - 1, v.day || 1),
    );
  }

  if (v instanceof CqlDateTime) {
    return new Date(
      Date.UTC(
        v.year,
        (v.month || 1) - 1,
        v.day || 1,
        v.hour || 0,
        v.minute || 0,
        v.second || 0,
        v.millis || 0,
      ),
    );
  }

  if (v instanceof CqlTime) {
    // Time-only: use epoch day
    return new Date(
      Date.UTC(1970, 0, 1, v.hour, v.minute || 0, v.second || 0, v.millis || 0),
    );
  }

  // Try string parsing
  if (v instanceof CqlString) {
    const s = v.value;
    for (const fmt of DATE_FORMATS) {
      if (fmt.test(s)) {
        const d = new Date(s);
        if (!isNaN(d.getTime())) return d;
      }
    }
    // Fallback: try Date constructor directly
    const d = new Date(s);
    if (!isNaN(d.getTime())) return d;
  }

  return null;
}
