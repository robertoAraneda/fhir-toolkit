import { Decimal } from 'decimal.js';
import type { Component, Term, Symbol as UcumSymbol } from './ast.js';
import type { Canonical, CanonicalUnit } from './canonical.js';
import { collate, negateUnits } from './canonical.js';
import type { BaseUnit, Model } from './model.js';
import { Parser } from './parser.js';
import type { SpecialHandler } from './special.js';

/**
 * Walks a parsed UCUM AST and produces a canonical form consisting of
 * base units and a scalar value.
 *
 * Port of Go's converter (which itself is a port of Java's Converter.java).
 */
export class Converter {
  private readonly model: Model;
  private readonly handlers: Map<string, SpecialHandler>;
  private readonly parser: Parser;
  private readonly baseUnitMap: Map<string, BaseUnit>;

  constructor(model: Model, handlers: Map<string, SpecialHandler>) {
    this.model = model;
    this.handlers = handlers;
    this.parser = new Parser(model);

    this.baseUnitMap = new Map();
    for (const bu of model.baseUnits) {
      this.baseUnitMap.set(bu.code, bu);
    }
  }

  convert(t: Term): Canonical {
    return this.normaliseTerm(t);
  }

  private normaliseTerm(t: Term | null): Canonical {
    if (t === null) {
      return { value: new Decimal(1), units: [] };
    }

    const left = this.normaliseComponent(t.comp);

    if (t.term === null) {
      return left;
    }

    const right = this.normaliseTerm(t.term);

    if (t.op === 1 /* Division */) {
      left.value = left.value.div(right.value);
      negateUnits(right);
    } else {
      left.value = left.value.mul(right.value);
    }

    left.units = collate([...left.units, ...right.units]);
    return left;
  }

  private normaliseComponent(comp: Component): Canonical {
    switch (comp.kind) {
      case 'factor':
        return { value: new Decimal(comp.value), units: [] };
      case 'term':
        return this.normaliseTerm(comp);
      case 'symbol':
        return this.normaliseSymbol(comp);
    }
  }

  private normaliseSymbol(sym: UcumSymbol): Canonical {
    const u = sym.unit;

    if (u.isBase) {
      const bu = this.baseUnitMap.get(u.code);
      if (!bu) {
        throw new Error(`base unit "${u.code}" not found in model`);
      }
      const can: Canonical = {
        value: new Decimal(1),
        units: [{ base: bu, exponent: sym.exponent }],
      };
      return this.applyPrefix(can, sym);
    }

    // Special unit: use handler's units expression for base unit decomposition
    if (u.isSpecial) {
      const handler = this.handlers.get(u.code);
      if (!handler) {
        throw new Error(`no handler for special unit "${u.code}"`);
      }

      const t = this.parser.parse(handler.units());
      const can = this.normaliseTerm(t);

      // Multiply by the definition's numeric value (scale factor)
      if (u.value) {
        can.value = can.value.mul(u.value.value);
      }

      // Apply exponent
      if (sym.exponent !== 1) {
        can.value = can.value.pow(sym.exponent);
        for (const cu of can.units) {
          cu.exponent *= sym.exponent;
        }
      }

      return this.applyPrefix(can, sym);
    }

    // Regular defined unit: expand by re-parsing and converting its definition
    const can = this.expandDefinedUnit(u);

    if (sym.exponent !== 1) {
      can.value = can.value.pow(sym.exponent);
      for (const cu of can.units) {
        cu.exponent *= sym.exponent;
      }
    }

    return this.applyPrefix(can, sym);
  }

  private expandDefinedUnit(u: { code: string; value: { unit: string; value: Decimal } | null }): Canonical {
    if (!u.value) {
      throw new Error(`defined unit "${u.code}" has no value`);
    }

    const unitExpr = u.value.unit;
    if (!unitExpr || unitExpr === '1') {
      return { value: u.value.value, units: [] };
    }

    const t = this.parser.parse(unitExpr);
    const can = this.normaliseTerm(t);
    can.value = can.value.mul(u.value.value);
    return can;
  }

  private applyPrefix(can: Canonical, sym: UcumSymbol): Canonical {
    if (!sym.prefix) {
      return can;
    }
    const prefixVal = sym.prefix.value.pow(sym.exponent);
    can.value = can.value.mul(prefixVal);
    return can;
  }
}
