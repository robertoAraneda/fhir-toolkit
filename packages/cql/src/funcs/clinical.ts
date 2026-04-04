/**
 * CQL clinical functions (age calculations).
 *
 * Ported from Go: funcs/clinical.go
 */

import { CqlDate, CqlDateTime, CqlInteger, CqlString } from '../types/index.js';
import type { CqlValue } from '../types/index.js';
import { toDate } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Extract birthDate from the context resource.
 * Expects contextResource to be an object with a `birthDate` string field.
 */
function getBirthDate(ctx: { contextResource: unknown }): CqlValue | null {
  const res = ctx.contextResource as Record<string, unknown> | null;
  if (!res) return null;
  const bd = res['birthDate'];
  if (typeof bd === 'string') {
    // Try Date first, fall back to DateTime
    try {
      return new CqlDate(bd);
    } catch {
      try {
        return new CqlDateTime(bd);
      } catch {
        return new CqlString(bd);
      }
    }
  }
  if (bd && typeof bd === 'object' && 'type' in (bd as Record<string, unknown>)) {
    return bd as CqlValue;
  }
  return null;
}

function referenceDate(asOf: CqlValue | null): Date {
  if (asOf !== null) {
    const d = toDate(asOf);
    if (d !== null) return d;
  }
  return new Date();
}

function calcYears(birthDate: CqlValue | null, asOf: CqlValue | null): CqlValue | null {
  const bd = toDate(birthDate);
  if (bd === null) return null;
  const ref = referenceDate(asOf);
  let years = ref.getUTCFullYear() - bd.getUTCFullYear();
  // Compare month/day to avoid leap year dayOfYear issues
  if (
    ref.getUTCMonth() < bd.getUTCMonth() ||
    (ref.getUTCMonth() === bd.getUTCMonth() && ref.getUTCDate() < bd.getUTCDate())
  ) {
    years--;
  }
  return new CqlInteger(years);
}

function calcMonths(birthDate: CqlValue | null, asOf: CqlValue | null): CqlValue | null {
  const bd = toDate(birthDate);
  if (bd === null) return null;
  const ref = referenceDate(asOf);
  let months =
    (ref.getUTCFullYear() - bd.getUTCFullYear()) * 12 +
    ref.getUTCMonth() -
    bd.getUTCMonth();
  if (ref.getUTCDate() < bd.getUTCDate()) months--;
  return new CqlInteger(months);
}

function calcWeeks(birthDate: CqlValue | null, asOf: CqlValue | null): CqlValue | null {
  const bd = toDate(birthDate);
  if (bd === null) return null;
  const ref = referenceDate(asOf);
  const ms = ref.getTime() - bd.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return new CqlInteger(Math.floor(days / 7));
}

function calcDays(birthDate: CqlValue | null, asOf: CqlValue | null): CqlValue | null {
  const bd = toDate(birthDate);
  if (bd === null) return null;
  const ref = referenceDate(asOf);
  const ms = ref.getTime() - bd.getTime();
  return new CqlInteger(Math.floor(ms / (1000 * 60 * 60 * 24)));
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

export function registerClinicalFunctions(registry: FunctionRegistry): void {
  // AgeInYears() — uses ctx.contextResource.birthDate
  registry.register('AgeInYears', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcYears(bd, null);
  });

  // AgeInMonths()
  registry.register('AgeInMonths', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcMonths(bd, null);
  });

  // AgeInWeeks()
  registry.register('AgeInWeeks', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcWeeks(bd, null);
  });

  // AgeInDays()
  registry.register('AgeInDays', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcDays(bd, null);
  });

  // AgeInYearsAt(asOf)
  registry.register('AgeInYearsAt', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcYears(bd, args[0]);
  });

  // AgeInMonthsAt(asOf)
  registry.register('AgeInMonthsAt', (args, ctx) => {
    const bd = getBirthDate(ctx);
    return calcMonths(bd, args[0]);
  });

  // CalculateAgeInYears(birthDate, asOf?)
  registry.register('CalculateAgeInYears', (args) => {
    return calcYears(args[0], args[1] ?? null);
  });

  // CalculateAgeInMonths(birthDate, asOf?)
  registry.register('CalculateAgeInMonths', (args) => {
    return calcMonths(args[0], args[1] ?? null);
  });

  // CalculateAgeInWeeks(birthDate, asOf?)
  registry.register('CalculateAgeInWeeks', (args) => {
    return calcWeeks(args[0], args[1] ?? null);
  });

  // CalculateAgeInDays(birthDate, asOf?)
  registry.register('CalculateAgeInDays', (args) => {
    return calcDays(args[0], args[1] ?? null);
  });
}
