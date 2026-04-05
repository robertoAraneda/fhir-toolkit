import { Decimal } from 'decimal.js';

/** Conversion definition for a defined unit. */
export interface UnitValue {
  /** UCUM expression */
  unit: string;
  text: string;
  /** Numeric multiplier */
  value: Decimal;
}

/** SI prefix (kilo, milli, etc.). */
export interface Prefix {
  code: string;
  name: string;
  value: Decimal;
}

/** One of the 7 fundamental SI base units. */
export interface BaseUnit {
  code: string;
  name: string;
  property: string;
  /** Single character dimension symbol */
  dim: string;
}

/** A non-base UCUM unit. */
export interface DefinedUnit {
  code: string;
  name: string;
  property: string;
  isMetric: boolean;
  isSpecial: boolean;
  isArbitrary: boolean;
  class: string;
  value: UnitValue | null;
}

/** Common representation for base and defined units. */
export interface Unit {
  code: string;
  name: string;
  property: string;
  isMetric: boolean;
  isSpecial: boolean;
  isBase: boolean;
  isArbitrary: boolean;
  /** Dimension symbol, base units only */
  dim: string;
  value: UnitValue | null;
  class: string;
}

/**
 * Holds the complete set of UCUM definitions with O(1) lookup indexes.
 */
export class Model {
  readonly prefixes: Prefix[];
  readonly baseUnits: BaseUnit[];
  readonly definedUnits: DefinedUnit[];

  private readonly prefixByCode: Map<string, Prefix>;
  private readonly unitByCode: Map<string, Unit>;

  constructor(prefixes: Prefix[], baseUnits: BaseUnit[], definedUnits: DefinedUnit[]) {
    this.prefixes = prefixes;
    this.baseUnits = baseUnits;
    this.definedUnits = definedUnits;

    // Build prefix index
    this.prefixByCode = new Map();
    for (const p of prefixes) {
      this.prefixByCode.set(p.code, p);
    }

    // Build unit index
    this.unitByCode = new Map();
    for (const bu of baseUnits) {
      this.unitByCode.set(bu.code, {
        code: bu.code,
        name: bu.name,
        property: bu.property,
        isBase: true,
        isMetric: false,
        isSpecial: false,
        isArbitrary: false,
        dim: bu.dim,
        value: null,
        class: '',
      });
    }
    for (const du of definedUnits) {
      this.unitByCode.set(du.code, {
        code: du.code,
        name: du.name,
        property: du.property,
        isMetric: du.isMetric,
        isSpecial: du.isSpecial,
        isArbitrary: du.isArbitrary,
        isBase: false,
        dim: '',
        value: du.value,
        class: du.class,
      });
    }
  }

  getUnit(code: string): Unit | undefined {
    return this.unitByCode.get(code);
  }

  getPrefix(code: string): Prefix | undefined {
    return this.prefixByCode.get(code);
  }
}
