import { Decimal } from 'decimal.js';
import type { Term } from './ast.js';
import type { Canonical } from './canonical.js';
import {
  divideCanonicals,
  mergeCanonicalUnits,
  multiplyCanonicals,
} from './canonical.js';
import { composeCanonicalUnits } from './composer.js';
import {
  PREFIXES as RAW_PREFIXES,
  BASE_UNITS as RAW_BASE_UNITS,
  DEFINED_UNITS as RAW_DEFINED_UNITS,
} from './definitions.js';
import type { PrefixDef, BaseUnitDef, UnitDef } from './definitions.js';
import { UcumConversionError, UcumValidationError } from './errors.js';
import type { BaseUnit, Prefix, DefinedUnit } from './model.js';
import { Model } from './model.js';
import { Parser } from './parser.js';
import type { SpecialHandler } from './special.js';
import { SPECIAL_HANDLERS } from './special.js';

/** A numeric value with its UCUM unit code. */
export interface Pair {
  value: number;
  code: string;
}

/** Convert raw definitions into Model-compatible types. */
function buildModel(
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

/**
 * Main UCUM service providing validation, conversion, and canonical form computation.
 */
export class UcumService {
  private readonly model: Model;
  private readonly parser: Parser;
  private readonly cache = new Map<string, Term>();

  constructor(model?: Model) {
    this.model = model ?? buildModel(RAW_PREFIXES, RAW_BASE_UNITS, RAW_DEFINED_UNITS);
    this.parser = new Parser(this.model);
  }

  /** Parse a UCUM code, caching the result. */
  private parseCached(code: string): Term {
    const cached = this.cache.get(code);
    if (cached) return cached;
    const t = this.parser.parse(code);
    this.cache.set(code, t);
    return t;
  }

  /** Check if the given code is a valid UCUM expression. Throws UcumValidationError on failure. */
  validate(code: string): void {
    try {
      this.parseCached(code);
    } catch (err) {
      throw new UcumValidationError(code, (err as Error).message);
    }
  }

  /** Return the canonical (base-unit) form of a value+code pair. */
  canonical(value: number, code: string): Pair {
    const can = this.getCanonical(code);
    const v = value * can.value.toNumber();
    const units = composeCanonicalUnits(can);
    return { value: v, code: units };
  }

  /** Convert a value from one unit to another. */
  convert(value: number, from: string, to: string): number {
    let srcTerm: Term;
    let dstTerm: Term;
    try {
      srcTerm = this.parseCached(from);
    } catch (err) {
      throw new UcumConversionError(from, to, (err as Error).message);
    }
    try {
      dstTerm = this.parseCached(to);
    } catch (err) {
      throw new UcumConversionError(from, to, (err as Error).message);
    }

    let srcCan: Canonical;
    let dstCan: Canonical;
    try {
      srcCan = this.getCanonical(from);
    } catch (err) {
      throw new UcumConversionError(from, to, (err as Error).message);
    }
    try {
      dstCan = this.getCanonical(to);
    } catch (err) {
      throw new UcumConversionError(from, to, (err as Error).message);
    }

    // Check comparability
    const srcUnits = composeCanonicalUnits(srcCan);
    const dstUnits = composeCanonicalUnits(dstCan);
    if (srcUnits !== dstUnits) {
      throw new UcumConversionError(from, to, `units are not comparable: ${srcUnits} vs ${dstUnits}`);
    }

    let result = value;

    // Step 1: If source is special, convert value to canonical first
    const srcHandler = this.specialHandlerForTerm(srcTerm);
    if (srcHandler) {
      result = srcHandler.toCanonical(result);
    }

    // Step 2: Multiplicative conversion
    result = (result * srcCan.value.toNumber()) / dstCan.value.toNumber();

    // Step 3: If dest is special, convert from canonical
    const dstHandler = this.specialHandlerForTerm(dstTerm);
    if (dstHandler) {
      result = dstHandler.fromCanonical(result);
    }

    return result;
  }

  /** Returns true if the two unit codes have the same canonical units. */
  isComparable(code1: string, code2: string): boolean {
    const can1 = this.getCanonical(code1);
    const can2 = this.getCanonical(code2);
    return composeCanonicalUnits(can1) === composeCanonicalUnits(can2);
  }

  /** Multiply two value/unit pairs. */
  multiply(v1: Pair, v2: Pair): Pair {
    const can1 = this.getCanonical(v1.code);
    const can2 = this.getCanonical(v2.code);

    const val = v1.value * can1.value.toNumber() * v2.value * can2.value.toNumber();
    const merged = mergeCanonicalUnits(can1, can2);
    const code = composeCanonicalUnits(merged);
    return { value: val, code };
  }

  /** Compute the canonical form of a UCUM code. */
  private getCanonical(code: string): Canonical {
    const t = this.parseCached(code);
    return this.canonicalizeTerm(t);
  }

  private canonicalizeTerm(t: Term | null): Canonical {
    if (!t) {
      return { value: new Decimal(1), units: [] };
    }

    const left = this.canonicalizeComponent(t.comp);

    if (!t.term) {
      return left;
    }

    const right = this.canonicalizeTerm(t.term);

    if (t.op === 1 /* Division */) {
      return divideCanonicals(left, right);
    }
    return multiplyCanonicals(left, right);
  }

  private canonicalizeComponent(c: { kind: string; [key: string]: any }): Canonical {
    switch (c.kind) {
      case 'factor':
        return { value: new Decimal(c.value as number), units: [] };
      case 'symbol':
        return this.canonicalizeSymbol(c as any);
      case 'term':
        return this.canonicalizeTerm(c as Term);
      default:
        throw new Error(`unexpected component type: ${c.kind}`);
    }
  }

  private canonicalizeSymbol(sym: {
    unit: { code: string; isBase: boolean; isSpecial: boolean; value: { unit: string; value: Decimal } | null };
    prefix: { value: Decimal } | null;
    exponent: number;
  }): Canonical {
    const u = sym.unit;

    // Start with the prefix value (or 1 if no prefix)
    let prefixVal = new Decimal(1);
    if (sym.prefix) {
      prefixVal = sym.prefix.value;
    }

    if (u.isBase) {
      const bu = this.findBaseUnit(u.code);
      if (!bu) {
        throw new Error(`base unit "${u.code}" not found`);
      }
      const val = prefixVal.pow(sym.exponent);
      return {
        value: val,
        units: [{ base: bu, exponent: sym.exponent }],
      };
    }

    // Defined unit: expand through its value expression
    if (!u.value) {
      throw new Error(`unit "${u.code}" has no value definition`);
    }

    let unitExpr = u.value.unit;
    let unitValue = u.value.value;

    if (u.isSpecial) {
      const h = SPECIAL_HANDLERS.get(u.code);
      if (!h) {
        throw new Error(`no handler for special unit "${u.code}"`);
      }
      unitExpr = h.units();
      unitValue = new Decimal(1);
    }

    // Parse and canonicalize the unit's value expression
    if (!unitExpr || unitExpr === '1') {
      const val = prefixVal.mul(unitValue).pow(sym.exponent);
      return { value: val, units: [] };
    }

    const inner = this.parseCached(unitExpr);
    const can = this.canonicalizeTerm(inner);

    // Multiply by the unit's numeric value and the prefix
    can.value = prefixVal.mul(unitValue).mul(can.value);

    // Apply exponent
    if (sym.exponent !== 1) {
      can.value = can.value.pow(sym.exponent);
      for (const cu of can.units) {
        cu.exponent *= sym.exponent;
      }
    }

    return can;
  }

  private findBaseUnit(code: string): BaseUnit | undefined {
    return this.model.baseUnits.find((bu) => bu.code === code);
  }

  /**
   * Returns a SpecialHandler if the term is a single symbol whose unit is
   * special (no operators, no exponents other than 1).
   */
  private specialHandlerForTerm(t: Term): SpecialHandler | null {
    if (t.term !== null) return null;
    if (t.comp.kind !== 'symbol') return null;
    const sym = t.comp;
    if (!sym.unit.isSpecial) return null;
    if (sym.exponent !== 1) return null;
    return SPECIAL_HANDLERS.get(sym.unit.code) ?? null;
  }
}

/** Create a UcumService with default definitions. */
export function createUcumService(): UcumService {
  return new UcumService();
}
