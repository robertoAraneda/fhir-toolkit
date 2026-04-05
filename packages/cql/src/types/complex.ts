/**
 * CQL complex types: Interval, List, Tuple, Code, Concept, Ratio.
 *
 * Mirrors the Go cql/types package while following TypeScript idioms.
 */

import type { CqlComparable, CqlValue } from './value.js';
import type { CqlQuantity } from './primitives.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function valuesEqual(a: CqlValue | null, b: CqlValue | null): boolean {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  return a.equals(b);
}

function valuesEquivalent(a: CqlValue | null, b: CqlValue | null): boolean {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  return a.equivalent(b);
}

function compareValues(a: CqlComparable, b: CqlValue): number {
  return a.compareTo(b);
}

// ---------------------------------------------------------------------------
// CqlInterval
// ---------------------------------------------------------------------------

export class CqlInterval<T extends CqlComparable> implements CqlValue {
  readonly type = 'Interval' as const;

  constructor(
    readonly low: T | null,
    readonly high: T | null,
    readonly lowClosed: boolean,
    readonly highClosed: boolean,
  ) {}

  /**
   * Checks if a point value is within the interval.
   */
  contains(point: T): boolean {
    if (this.low !== null) {
      const cmp = point.compareTo(this.low);
      if (this.lowClosed && cmp < 0) return false;
      if (!this.lowClosed && cmp <= 0) return false;
    }
    if (this.high !== null) {
      const cmp = point.compareTo(this.high);
      if (this.highClosed && cmp > 0) return false;
      if (!this.highClosed && cmp >= 0) return false;
    }
    return true;
  }

  /**
   * Checks if this interval includes another interval entirely.
   */
  includes(other: CqlInterval<T>): boolean {
    const lowOk = this.containsBound(other.low, other.lowClosed, true);
    const highOk = this.containsBound(other.high, other.highClosed, false);
    return lowOk && highOk;
  }

  /**
   * Checks if two intervals share any points.
   */
  overlaps(other: CqlInterval<T>): boolean {
    if (this.low !== null && other.high !== null) {
      const cmp = compareValues(this.low, other.high);
      if (cmp > 0 || (cmp === 0 && (!this.lowClosed || !other.highClosed))) {
        return false;
      }
    }
    if (this.high !== null && other.low !== null) {
      const cmp = compareValues(this.high, other.low);
      if (cmp < 0 || (cmp === 0 && (!this.highClosed || !other.lowClosed))) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns true when the interval cannot contain any points.
   * An interval is empty when low > high, or low == high and at least one
   * boundary is open.
   */
  isEmpty(): boolean {
    if (this.low === null || this.high === null) return false;
    const cmp = compareValues(this.low, this.high);
    if (cmp > 0) return true;
    if (cmp === 0 && (!this.lowClosed || !this.highClosed)) return true;
    return false;
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlInterval)) return false;
    if (this.lowClosed !== other.lowClosed || this.highClosed !== other.highClosed) {
      return false;
    }
    return valuesEqual(this.low, other.low) && valuesEqual(this.high, other.high);
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlInterval)) return false;
    if (this.lowClosed !== other.lowClosed || this.highClosed !== other.highClosed) {
      return false;
    }
    return (
      valuesEquivalent(this.low, other.low) &&
      valuesEquivalent(this.high, other.high)
    );
  }

  toString(): string {
    const open = this.lowClosed ? '[' : '(';
    const close = this.highClosed ? ']' : ')';
    const low = this.low !== null ? this.low.toString() : 'null';
    const high = this.high !== null ? this.high.toString() : 'null';
    return `Interval${open}${low}, ${high}${close}`;
  }

  // ---- private ----

  private containsBound(val: T | null, closed: boolean, isLow: boolean): boolean {
    if (val === null) {
      return isLow ? this.low === null : this.high === null;
    }
    if (isLow && this.low !== null) {
      const cmp = val.compareTo(this.low);
      if (cmp < 0) return false;
      if (cmp === 0 && closed && !this.lowClosed) return false;
    }
    if (!isLow && this.high !== null) {
      const cmp = val.compareTo(this.high);
      if (cmp > 0) return false;
      if (cmp === 0 && closed && !this.highClosed) return false;
    }
    return true;
  }
}

// ---------------------------------------------------------------------------
// CqlList
// ---------------------------------------------------------------------------

export class CqlList implements CqlValue {
  readonly type = 'List' as const;

  constructor(readonly values: CqlValue[]) {}

  /** Number of elements (including nulls). */
  count(): number {
    return this.values.length;
  }

  /** True if the list has no elements. */
  isEmpty(): boolean {
    return this.values.length === 0;
  }

  /** First element or null. */
  first(): CqlValue | null {
    return this.values.length > 0 ? this.values[0] : null;
  }

  /** Last element or null. */
  last(): CqlValue | null {
    return this.values.length > 0 ? this.values[this.values.length - 1] : null;
  }

  /** Returns a new list with duplicates removed (using equals). */
  distinct(): CqlList {
    const result: CqlValue[] = [];
    for (const v of this.values) {
      if (!result.some((r) => r.equals(v))) {
        result.push(v);
      }
    }
    return new CqlList(result);
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlList)) return false;
    if (this.values.length !== other.values.length) return false;
    for (let i = 0; i < this.values.length; i++) {
      if (!valuesEqual(this.values[i], other.values[i])) return false;
    }
    return true;
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlList)) return false;
    if (this.values.length !== other.values.length) return false;
    for (let i = 0; i < this.values.length; i++) {
      if (!valuesEquivalent(this.values[i], other.values[i])) return false;
    }
    return true;
  }

  toString(): string {
    if (this.values.length === 0) return '{}';
    return '{' + this.values.map((v) => v.toString()).join(', ') + '}';
  }
}

// ---------------------------------------------------------------------------
// CqlTuple
// ---------------------------------------------------------------------------

export class CqlTuple implements CqlValue {
  readonly type = 'Tuple' as const;

  /**
   * Optional named instance type (e.g. 'ValueSet', 'CodeSystem').
   * Set when the tuple was constructed via Instance expression for a known CQL type.
   */
  instanceType?: string;

  constructor(readonly elements: Map<string, CqlValue | null>) {}

  /** Get the value for a named element. */
  get(name: string): CqlValue | null | undefined {
    return this.elements.get(name);
  }

  /** Returns sorted list of element names. */
  keys(): string[] {
    return [...this.elements.keys()].sort();
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlTuple)) return false;
    if (this.elements.size !== other.elements.size) return false;
    for (const [k, v] of this.elements) {
      if (!other.elements.has(k)) return false;
      const ov = other.elements.get(k) ?? null;
      if (!valuesEqual(v, ov)) return false;
    }
    return true;
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlTuple)) return false;
    if (this.elements.size !== other.elements.size) return false;
    for (const [k, v] of this.elements) {
      if (!other.elements.has(k)) return false;
      const ov = other.elements.get(k) ?? null;
      if (!valuesEquivalent(v, ov)) return false;
    }
    return true;
  }

  toString(): string {
    if (this.elements.size === 0) return 'Tuple{}';
    const keys = this.keys();
    const parts = keys.map((k) => {
      const v = this.elements.get(k);
      const vs = v != null ? v.toString() : 'null';
      return `${k}: ${vs}`;
    });
    return 'Tuple{' + parts.join(', ') + '}';
  }
}

// ---------------------------------------------------------------------------
// CqlCode
// ---------------------------------------------------------------------------

export class CqlCode implements CqlValue {
  readonly type = 'Code' as const;

  constructor(
    readonly code: string,
    readonly system: string,
    readonly display?: string,
    readonly version?: string,
  ) {}

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlCode)) return false;
    return this.system === other.system && this.code === other.code;
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlCode)) return false;
    return (
      this.system.toLowerCase() === other.system.toLowerCase() &&
      this.code.toLowerCase() === other.code.toLowerCase()
    );
  }

  toString(): string {
    if (this.display) {
      return `Code '${this.code}' from ${this.system} display '${this.display}'`;
    }
    return `Code '${this.code}' from ${this.system}`;
  }
}

// ---------------------------------------------------------------------------
// CqlConcept
// ---------------------------------------------------------------------------

export class CqlConcept implements CqlValue {
  readonly type = 'Concept' as const;

  constructor(
    readonly codes: CqlCode[],
    readonly display?: string,
  ) {}

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlConcept)) return false;
    if (this.codes.length !== other.codes.length) return false;
    for (let i = 0; i < this.codes.length; i++) {
      if (!this.codes[i].equals(other.codes[i])) return false;
    }
    return true;
  }

  equivalent(other: CqlValue): boolean {
    if (other instanceof CqlConcept) {
      for (const cc of this.codes) {
        for (const oc of other.codes) {
          if (cc.equivalent(oc)) return true;
        }
      }
      return false;
    }
    if (other instanceof CqlCode) {
      for (const cc of this.codes) {
        if (cc.equivalent(other)) return true;
      }
      return false;
    }
    return false;
  }

  toString(): string {
    const parts = this.codes.map((c) => c.toString()).join(', ');
    const s = `Concept{${parts}}`;
    if (this.display) return `${s} display '${this.display}'`;
    return s;
  }
}

// ---------------------------------------------------------------------------
// CqlRatio
// ---------------------------------------------------------------------------

export class CqlRatio implements CqlValue {
  readonly type = 'Ratio' as const;

  constructor(
    readonly numerator: CqlQuantity,
    readonly denominator: CqlQuantity,
  ) {}

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlRatio)) return false;
    return (
      this.numerator.equals(other.numerator) &&
      this.denominator.equals(other.denominator)
    );
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlRatio)) return false;
    return (
      this.numerator.equivalent(other.numerator) &&
      this.denominator.equivalent(other.denominator)
    );
  }

  toString(): string {
    return `${this.numerator.toString()} : ${this.denominator.toString()}`;
  }
}
