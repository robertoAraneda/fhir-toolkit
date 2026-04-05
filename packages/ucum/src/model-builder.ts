import { Decimal } from 'decimal.js';
import {
  PREFIXES as RAW_PREFIXES,
  BASE_UNITS as RAW_BASE_UNITS,
  DEFINED_UNITS as RAW_DEFINED_UNITS,
} from './definitions.js';
import type { PrefixDef, BaseUnitDef, UnitDef } from './definitions.js';
import type { BaseUnit, Prefix, DefinedUnit } from './model.js';
import { Model } from './model.js';

/** Convert raw definitions into Model-compatible types. */
export function buildModel(
  rawPrefixes: readonly PrefixDef[],
  rawBaseUnits: readonly BaseUnitDef[],
  rawDefinedUnits: readonly UnitDef[],
): Model {
  const prefixes: Prefix[] = rawPrefixes.map((p) => ({
    code: p.code,
    name: p.name,
    value: new Decimal(p.value),
  }));

  const baseUnits: BaseUnit[] = rawBaseUnits.map((bu) => ({
    code: bu.code,
    name: bu.name,
    property: bu.property,
    dim: bu.dim,
  }));

  const definedUnits: DefinedUnit[] = rawDefinedUnits.map((du) => ({
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

/** Build a Model from the embedded UCUM definitions. */
export function buildDefaultModel(): Model {
  return buildModel(RAW_PREFIXES, RAW_BASE_UNITS, RAW_DEFINED_UNITS);
}
