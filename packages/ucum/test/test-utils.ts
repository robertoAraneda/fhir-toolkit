import { Decimal } from 'decimal.js';
import {
  PREFIXES as RAW_PREFIXES,
  BASE_UNITS as RAW_BASE_UNITS,
  DEFINED_UNITS as RAW_DEFINED_UNITS,
} from '../src/definitions.js';
import type { BaseUnit, Prefix, DefinedUnit } from '../src/model.js';
import { Model } from '../src/model.js';

/**
 * Build a Model from the embedded UCUM definitions.
 * Uses the same field mapping as buildModel() in service.ts.
 */
export function createTestModel(): Model {
  const prefixes: Prefix[] = RAW_PREFIXES.map((p) => ({
    code: p.code,
    name: p.name,
    value: new Decimal(p.value),
  }));

  const baseUnits: BaseUnit[] = RAW_BASE_UNITS.map((bu) => ({
    code: bu.code,
    name: bu.name,
    property: bu.property,
    dim: bu.dim,
  }));

  const definedUnits: DefinedUnit[] = RAW_DEFINED_UNITS.map((du) => ({
    code: du.code,
    name: du.name,
    property: du.property,
    isMetric: du.isMetric,
    isSpecial: du.isSpecial,
    isArbitrary: du.isArbitrary,
    class: du.class,
    value: du.value
      ? {
          unit: du.value.unit,
          text: '',
          value: du.value.value === '' ? new Decimal(1) : new Decimal(du.value.value),
        }
      : null,
  }));

  return new Model(prefixes, baseUnits, definedUnits);
}
