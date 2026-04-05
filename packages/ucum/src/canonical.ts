import { Decimal } from 'decimal.js';
import type { BaseUnit } from './model.js';

/** A value expressed in canonical (base) units. */
export interface Canonical {
  value: Decimal;
  units: CanonicalUnit[];
}

/** A base unit with its exponent in a canonical form. */
export interface CanonicalUnit {
  base: BaseUnit;
  exponent: number;
}

/** Merge canonical units with the same base, removing zero-exponent entries. */
export function collate(units: CanonicalUnit[]): CanonicalUnit[] {
  const map = new Map<string, { base: BaseUnit; exponent: number }>();
  const order: string[] = [];

  for (const u of units) {
    const existing = map.get(u.base.code);
    if (existing) {
      existing.exponent += u.exponent;
    } else {
      map.set(u.base.code, { base: u.base, exponent: u.exponent });
      order.push(u.base.code);
    }
  }

  order.sort();
  const result: CanonicalUnit[] = [];
  for (const code of order) {
    const entry = map.get(code)!;
    if (entry.exponent !== 0) {
      result.push({ base: entry.base, exponent: entry.exponent });
    }
  }
  return result;
}

/** Negate all unit exponents. */
export function negateUnits(can: Canonical): void {
  for (let i = 0; i < can.units.length; i++) {
    can.units[i]!.exponent = -can.units[i]!.exponent;
  }
}

/**
 * Merge two canonical unit lists. The sign is applied to right-side exponents
 * (+1 for multiply, -1 for divide).
 */
export function mergeUnitLists(
  left: CanonicalUnit[],
  right: CanonicalUnit[],
  sign: number,
): CanonicalUnit[] {
  const result = left.map((u) => ({ ...u }));

  for (const ru of right) {
    const existing = result.find((u) => u.base.code === ru.base.code);
    if (existing) {
      existing.exponent += ru.exponent * sign;
    } else {
      result.push({ base: ru.base, exponent: ru.exponent * sign });
    }
  }

  return result.filter((u) => u.exponent !== 0);
}

export function multiplyCanonicals(left: Canonical, right: Canonical): Canonical {
  return {
    value: left.value.mul(right.value),
    units: mergeUnitLists(left.units, right.units, 1),
  };
}

export function divideCanonicals(left: Canonical, right: Canonical): Canonical {
  return {
    value: left.value.div(right.value),
    units: mergeUnitLists(left.units, right.units, -1),
  };
}

export function mergeCanonicalUnits(a: Canonical, b: Canonical): Canonical {
  return {
    value: new Decimal(1),
    units: mergeUnitLists(a.units, b.units, 1),
  };
}
