import { Decimal } from 'decimal.js';
import type { Component, Term } from './ast.js';
import { operatorToString } from './ast.js';
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
import { UcumConversionError, UcumValidationError } from './errors.js';
import { buildModel } from './model-builder.js';
import type { BaseUnit } from './model.js';
import { Model } from './model.js';
import { Parser } from './parser.js';
import type { SpecialHandler } from './special.js';
import { SPECIAL_HANDLERS } from './special.js';

/** A numeric value with its UCUM unit code. */
export interface Pair {
  value: number;
  code: string;
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

  /**
   * Validates a UCUM unit code expression.
   * @param code - A UCUM unit code string (e.g. 'mg/dL', 'Cel', 'km/h')
   * @throws {UcumValidationError} If the code is not a valid UCUM expression
   */
  validate(code: string): void {
    try {
      this.parseCached(code);
    } catch (err) {
      throw new UcumValidationError(code, (err as Error).message);
    }
  }

  /**
   * Returns the canonical (base-unit) form of a value+code pair.
   * @param value - The numeric magnitude
   * @param code - A valid UCUM unit code string
   * @returns A `Pair` with the value expressed in base units and the composed base-unit code
   * @throws {UcumValidationError} If the code cannot be parsed
   */
  canonical(value: number, code: string): Pair {
    const can = this.getCanonical(code);
    const v = value * can.value.toNumber();
    const units = composeCanonicalUnits(can);
    return { value: v, code: units };
  }

  /**
   * Converts a numeric value from one UCUM unit to another.
   * @param value - The numeric magnitude in the source unit
   * @param from - Source UCUM unit code (e.g. 'mg')
   * @param to - Target UCUM unit code (e.g. 'g')
   * @returns The converted numeric value in the target unit
   * @throws {UcumConversionError} If either unit is invalid or the units are not comparable
   */
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

  /**
   * Returns true if the two unit codes resolve to the same canonical base units.
   * @param code1 - First UCUM unit code
   * @param code2 - Second UCUM unit code
   * @returns `true` if both codes are dimensionally equivalent
   */
  isComparable(code1: string, code2: string): boolean {
    const can1 = this.getCanonical(code1);
    const can2 = this.getCanonical(code2);
    return composeCanonicalUnits(can1) === composeCanonicalUnits(can2);
  }

  /** Multiply two value/unit pairs, composing units in their original form. */
  multiply(v1: Pair, v2: Pair): Pair {
    const val = v1.value * v2.value;
    const code = this.composeUnits(v1.code, v2.code, 1);
    return { value: val, code };
  }

  /** Divide two value/unit pairs, composing units in their original form. */
  divide(v1: Pair, v2: Pair): Pair {
    const val = v1.value / v2.value;
    const code = this.composeUnits(v1.code, v2.code, -1);
    return { value: val, code };
  }

  /**
   * Compose two unit codes by merging their symbol exponents.
   * sign=1 for multiply, sign=-1 for divide.
   * Returns the composed UCUM code (e.g. cm.cm → cm2, g/cm3 / g/cm3 → 1).
   */
  private composeUnits(code1: string, code2: string, sign: 1 | -1): string {
    const syms1 = this.flattenTermSymbols(this.parseCached(code1), 1);
    const syms2 = this.flattenTermSymbols(this.parseCached(code2), sign);

    // Merge by (prefixCode + unitCode)
    const map = new Map<string, { prefixCode: string; unitCode: string; exponent: number }>();
    for (const s of [...syms1, ...syms2]) {
      const key = s.prefixCode + s.unitCode;
      const existing = map.get(key);
      if (existing) {
        existing.exponent += s.exponent;
      } else {
        map.set(key, { ...s });
      }
    }

    // Remove zero-exponent entries
    const parts: string[] = [];
    for (const entry of map.values()) {
      if (entry.exponent === 0) continue;
      let s = entry.prefixCode + entry.unitCode;
      if (entry.exponent !== 1) s += String(entry.exponent);
      parts.push(s);
    }

    if (parts.length === 0) return '1';
    parts.sort();
    return parts.join('.');
  }

  /**
   * Flatten a parsed Term into a list of (prefixCode, unitCode, exponent) tuples.
   * The outerSign is applied to all exponents (1 for as-is, -1 for inversion).
   */
  private flattenTermSymbols(
    t: Term | null,
    outerSign: number,
  ): Array<{ prefixCode: string; unitCode: string; exponent: number }> {
    if (!t) return [];

    const result: Array<{ prefixCode: string; unitCode: string; exponent: number }> = [];
    this.collectSymbols(t, outerSign, result);
    return result;
  }

  private collectSymbols(
    t: Term,
    sign: number,
    out: Array<{ prefixCode: string; unitCode: string; exponent: number }>,
  ): void {
    this.collectComponentSymbols(t.comp, sign, out);
    if (t.term) {
      // Division flips the sign for the right-hand side
      const rhsSign = t.op === 1 /* Division */ ? -sign : sign;
      this.collectSymbols(t.term, rhsSign, out);
    }
  }

  private collectComponentSymbols(
    c: { kind: string; [key: string]: any },
    sign: number,
    out: Array<{ prefixCode: string; unitCode: string; exponent: number }>,
  ): void {
    switch (c.kind) {
      case 'symbol': {
        const prefixCode = c.prefix ? c.prefix.code : '';
        const unitCode = c.unit.code;
        out.push({ prefixCode, unitCode, exponent: (c.exponent as number) * sign });
        break;
      }
      case 'term':
        this.collectSymbols(c as Term, sign, out);
        break;
      case 'factor':
        // Numeric factors don't contribute to unit composition
        break;
    }
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
   * Returns unit suggestions whose code starts with or whose name contains the given prefix.
   * @param prefix - Search string to match against unit codes and names
   * @param limit - Maximum number of suggestions to return (default: 20)
   * @returns Array of matching `{ code, name }` objects
   */
  suggest(prefix: string, limit = 20): Array<{ code: string; name: string }> {
    const lower = prefix.toLowerCase()
    const seen = new Set<string>()
    const results: Array<{ code: string; name: string }> = []

    const addIfMatch = (code: string, name: string) => {
      if (results.length >= limit) return
      if (seen.has(code)) return
      if (code.toLowerCase().startsWith(lower) || name.toLowerCase().includes(lower)) {
        seen.add(code)
        results.push({ code, name })
      }
    }

    for (const unit of this.model.definedUnits) {
      addIfMatch(unit.code, unit.name)
    }

    for (const base of this.model.baseUnits) {
      addIfMatch(base.code, base.name)
    }

    // Also generate prefix+unit combinations for metric units
    for (const pfx of this.model.prefixes) {
      if (results.length >= limit) break
      for (const unit of this.model.definedUnits) {
        if (!unit.isMetric) continue
        if (results.length >= limit) break
        const compoundCode = pfx.code + unit.code
        const compoundName = pfx.name + unit.name
        addIfMatch(compoundCode, compoundName)
      }
      for (const base of this.model.baseUnits) {
        if (results.length >= limit) break
        const compoundCode = pfx.code + base.code
        const compoundName = pfx.name + base.name
        addIfMatch(compoundCode, compoundName)
      }
    }

    return results
  }

  /**
   * Returns a human-readable description of a UCUM unit expression.
   * @param code - A valid UCUM unit code string (e.g. 'mg/dL')
   * @returns A human-readable string (e.g. 'milligram per deciliter')
   * @throws {UcumValidationError} If the code cannot be parsed
   */
  analyze(code: string): string {
    const t = this.parseCached(code);
    return this.analyzeTermHuman(t);
  }

  private analyzeTermHuman(t: Term): string {
    const parts: string[] = [];
    this.analyzeTermTo(t, parts);
    return parts.join('');
  }

  private analyzeTermTo(t: Term, parts: string[]): void {
    this.analyzeComponentHuman(t.comp, parts);
    if (t.term !== null) {
      parts.push(operatorToString(t.op));
      this.analyzeTermTo(t.term, parts);
    }
  }

  private analyzeComponentHuman(comp: Component, parts: string[]): void {
    if (comp.kind === 'factor') {
      parts.push(String(comp.value));
    } else if (comp.kind === 'symbol') {
      if (comp.prefix !== null) parts.push(comp.prefix.name);
      parts.push(comp.unit.name);
      if (comp.exponent !== 1) parts.push(String(comp.exponent));
    } else {
      // nested term
      this.analyzeTermTo(comp, parts);
    }
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
