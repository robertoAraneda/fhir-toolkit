/**
 * CQL primitive types.
 *
 * Each class implements CqlComparable (value + ordering).  The behaviour
 * follows the Go fhirpath/types package: precision-aware temporals,
 * cross-type Integer/Decimal equivalence, singleton booleans, etc.
 */

import { Decimal } from 'decimal.js';
import type { CqlComparable, CqlValue } from './value.js';

// ---------------------------------------------------------------------------
// Null sentinel
// ---------------------------------------------------------------------------

/**
 * CqlNull is a sentinel value used to represent null inside CqlList.
 * It allows lists to track null elements for operations like Length, First, Last, contains.
 */
export class CqlNull implements CqlValue {
  readonly type = 'Null' as const;
  static readonly INSTANCE = new CqlNull();
  private constructor() {}
  equals(_other: CqlValue): boolean { return _other instanceof CqlNull; }
  equivalent(_other: CqlValue): boolean { return _other instanceof CqlNull; }
  toString(): string { return 'null'; }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function typeError(self: string, other: string): TypeError {
  return new TypeError(`cannot compare ${self} with ${other}`);
}

// ---------------------------------------------------------------------------
// CqlBoolean
// ---------------------------------------------------------------------------

export class CqlBoolean implements CqlComparable {
  readonly type = 'Boolean' as const;

  private constructor(readonly value: boolean) {}

  static readonly TRUE = new CqlBoolean(true);
  static readonly FALSE = new CqlBoolean(false);

  static of(v: boolean): CqlBoolean {
    return v ? CqlBoolean.TRUE : CqlBoolean.FALSE;
  }

  equals(other: CqlValue): boolean {
    return other instanceof CqlBoolean && this.value === other.value;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlBoolean)) throw typeError('Boolean', other.type);
    // false < true
    return Number(this.value) - Number(other.value);
  }

  toString(): string {
    return String(this.value);
  }
}

// ---------------------------------------------------------------------------
// CqlInteger
// ---------------------------------------------------------------------------

export class CqlInteger implements CqlComparable {
  readonly type = 'Integer' as const;

  constructor(readonly value: number) {}

  equals(other: CqlValue): boolean {
    if (other instanceof CqlInteger) return this.value === other.value;
    if (other instanceof CqlDecimal)
      return new Decimal(this.value).equals(other.value);
    if (other instanceof CqlLong) return BigInt(this.value) === other.value;
    return false;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    if (other instanceof CqlInteger) return this.value - other.value;
    if (other instanceof CqlDecimal)
      return new Decimal(this.value).comparedTo(other.value);
    if (other instanceof CqlLong) {
      const bv = BigInt(this.value);
      if (bv < other.value) return -1;
      if (bv > other.value) return 1;
      return 0;
    }
    throw typeError('Integer', other.type);
  }

  toString(): string {
    return String(this.value);
  }
}

// ---------------------------------------------------------------------------
// CqlLong
// ---------------------------------------------------------------------------

export class CqlLong implements CqlComparable {
  readonly type = 'Long' as const;

  constructor(readonly value: bigint) {}

  equals(other: CqlValue): boolean {
    if (other instanceof CqlLong) return this.value === other.value;
    if (other instanceof CqlInteger) return this.value === BigInt(other.value);
    return false;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    let otherVal: bigint;
    if (other instanceof CqlLong) {
      otherVal = other.value;
    } else if (other instanceof CqlInteger) {
      otherVal = BigInt(other.value);
    } else {
      throw typeError('Long', other.type);
    }
    if (this.value < otherVal) return -1;
    if (this.value > otherVal) return 1;
    return 0;
  }

  toString(): string {
    return String(this.value);
  }
}

// ---------------------------------------------------------------------------
// CqlDecimal
// ---------------------------------------------------------------------------

export class CqlDecimal implements CqlComparable {
  readonly type = 'Decimal' as const;
  readonly originalPrecision: number; // number of decimal places in original representation

  constructor(readonly value: Decimal, originalPrecision?: number) {
    if (originalPrecision !== undefined) {
      this.originalPrecision = originalPrecision;
    } else {
      // Infer from value
      const s = value.toFixed();
      const dot = s.indexOf('.');
      this.originalPrecision = dot >= 0 ? s.length - dot - 1 : 0;
    }
  }

  static of(v: string | number): CqlDecimal {
    const s = String(v);
    const dot = s.indexOf('.');
    const origPrec = dot >= 0 ? s.length - dot - 1 : 0;
    return new CqlDecimal(new Decimal(v), origPrec);
  }

  equals(other: CqlValue): boolean {
    if (other instanceof CqlDecimal) return this.value.equals(other.value);
    if (other instanceof CqlInteger)
      return this.value.equals(new Decimal(other.value));
    return false;
  }

  equivalent(other: CqlValue): boolean {
    if (other instanceof CqlInteger) {
      return this.value.equals(new Decimal(other.value));
    }
    if (!(other instanceof CqlDecimal)) return false;
    // CQL decimal equivalence: compare at the least precision (fewest decimal places)
    // Truncate (not round) to the lower precision
    const thisStr = this.value.toFixed();
    const otherStr = other.value.toFixed();
    const thisDp = thisStr.includes('.') ? thisStr.split('.')[1].length : 0;
    const otherDp = otherStr.includes('.') ? otherStr.split('.')[1].length : 0;
    const minDp = Math.min(thisDp, otherDp);
    // Use ROUND_DOWN (truncate) to avoid rounding
    return this.value.toDecimalPlaces(minDp, Decimal.ROUND_DOWN)
      .equals(other.value.toDecimalPlaces(minDp, Decimal.ROUND_DOWN));
  }

  compareTo(other: CqlValue): number {
    if (other instanceof CqlDecimal)
      return this.value.comparedTo(other.value);
    if (other instanceof CqlInteger)
      return this.value.comparedTo(new Decimal(other.value));
    throw typeError('Decimal', other.type);
  }

  toString(): string {
    return this.value.toString();
  }
}

// ---------------------------------------------------------------------------
// CqlString
// ---------------------------------------------------------------------------

export class CqlString implements CqlComparable {
  readonly type = 'String' as const;

  constructor(readonly value: string) {}

  equals(other: CqlValue): boolean {
    return other instanceof CqlString && this.value === other.value;
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlString)) return false;
    return normalizeString(this.value) === normalizeString(other.value);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlString)) throw typeError('String', other.type);
    if (this.value < other.value) return -1;
    if (this.value > other.value) return 1;
    return 0;
  }

  toString(): string {
    return this.value;
  }
}

/** Normalize for CQL string equivalence: lowercase, collapse whitespace, trim. */
function normalizeString(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

// ---------------------------------------------------------------------------
// Temporal precision enums
// ---------------------------------------------------------------------------

export enum DatePrecision {
  Year = 0,
  Month = 1,
  Day = 2,
}

export enum DateTimePrecision {
  Year = 0,
  Month = 1,
  Day = 2,
  Hour = 3,
  Minute = 4,
  Second = 5,
  Millisecond = 6,
}

export enum TimePrecision {
  Hour = 0,
  Minute = 1,
  Second = 2,
  Millisecond = 3,
}

// ---------------------------------------------------------------------------
// CqlDate
// ---------------------------------------------------------------------------

const DATE_YEAR = /^(\d{4})$/;
const DATE_MONTH = /^(\d{4})-(\d{2})$/;
const DATE_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

export class CqlDate implements CqlComparable {
  readonly type = 'Date' as const;

  readonly year: number;
  readonly month: number; // 0 if not specified
  readonly day: number; // 0 if not specified
  readonly precision: DatePrecision;

  constructor(readonly raw: string) {
    let m: RegExpMatchArray | null;
    if ((m = DATE_DAY.exec(raw))) {
      this.year = Number(m[1]);
      this.month = Number(m[2]);
      this.day = Number(m[3]);
      this.precision = DatePrecision.Day;
    } else if ((m = DATE_MONTH.exec(raw))) {
      this.year = Number(m[1]);
      this.month = Number(m[2]);
      this.day = 0;
      this.precision = DatePrecision.Month;
    } else if ((m = DATE_YEAR.exec(raw))) {
      this.year = Number(m[1]);
      this.month = 0;
      this.day = 0;
      this.precision = DatePrecision.Year;
    } else {
      throw new Error(`invalid date format: ${raw}`);
    }
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlDate)) return false;
    if (this.precision !== other.precision) return false;
    if (this.year !== other.year) return false;
    if (this.precision >= DatePrecision.Month && this.month !== other.month)
      return false;
    if (this.precision >= DatePrecision.Day && this.day !== other.day)
      return false;
    return true;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlDate)) throw typeError('Date', other.type);

    if (this.precision !== other.precision) {
      // Different precision — compare at the minimum common precision
      const min = Math.min(this.precision, other.precision);

      if (this.year !== other.year) return this.year - other.year;
      if (min === DatePrecision.Year) {
        throw new Error(
          'ambiguous comparison between dates with different precisions',
        );
      }

      if (
        this.precision >= DatePrecision.Month &&
        other.precision >= DatePrecision.Month
      ) {
        if (this.month !== other.month) return this.month - other.month;
      }

      throw new Error(
        'ambiguous comparison between dates with different precisions',
      );
    }

    // Same precision
    if (this.year !== other.year) return this.year - other.year;
    if (this.precision >= DatePrecision.Month) {
      if (this.month !== other.month) return this.month - other.month;
    }
    if (this.precision >= DatePrecision.Day) {
      if (this.day !== other.day) return this.day - other.day;
    }
    return 0;
  }

  toString(): string {
    switch (this.precision) {
      case DatePrecision.Year:
        return String(this.year).padStart(4, '0');
      case DatePrecision.Month:
        return `${String(this.year).padStart(4, '0')}-${String(this.month).padStart(2, '0')}`;
      default:
        return `${String(this.year).padStart(4, '0')}-${String(this.month).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`;
    }
  }
}

// ---------------------------------------------------------------------------
// CqlDateTime
// ---------------------------------------------------------------------------

// DateTime regex - allows optional T with optional time components
// Supports: "2015", "2015-02", "2015-02-10", "2015T", "2015-02T", "2015-02-10T",
//   "2015-02-10T10", "2015-02-10T10:30:00.000Z", etc.
const DT_RE =
  /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?T?(?:(\d{2})(?::(\d{2})(?::(\d{2})(?:\.(\d+))?)?)?)?(Z|[+-]\d{2}:\d{2})?$/;

export class CqlDateTime implements CqlComparable {
  readonly type = 'DateTime' as const;

  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millis: number;
  readonly tzOffset: number; // minutes
  readonly hasTZ: boolean;
  readonly precision: DateTimePrecision;

  constructor(readonly raw: string) {
    const m = DT_RE.exec(raw);
    if (!m) throw new Error(`invalid datetime format: ${raw}`);

    this.year = Number(m[1]);
    let prec = DateTimePrecision.Year;

    this.month = m[2] ? ((prec = DateTimePrecision.Month), Number(m[2])) : 0;
    this.day = m[3] ? ((prec = DateTimePrecision.Day), Number(m[3])) : 0;
    this.hour = m[4] ? ((prec = DateTimePrecision.Hour), Number(m[4])) : 0;
    this.minute = m[5]
      ? ((prec = DateTimePrecision.Minute), Number(m[5]))
      : 0;
    this.second = m[6]
      ? ((prec = DateTimePrecision.Second), Number(m[6]))
      : 0;

    if (m[7]) {
      prec = DateTimePrecision.Millisecond;
      let ms = m[7];
      while (ms.length < 3) ms += '0';
      if (ms.length > 3) ms = ms.slice(0, 3);
      this.millis = Number(ms);
    } else {
      this.millis = 0;
    }

    if (m[8]) {
      this.hasTZ = true;
      if (m[8] === 'Z') {
        this.tzOffset = 0;
      } else {
        const sign = m[8][0] === '-' ? -1 : 1;
        const h = Number(m[8].slice(1, 3));
        const min = Number(m[8].slice(4, 6));
        this.tzOffset = sign * (h * 60 + min);
      }
    } else {
      this.hasTZ = false;
      this.tzOffset = 0;
    }

    this.precision = prec;
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlDateTime)) return false;
    if (this.precision !== other.precision) return false;
    if (this.year !== other.year) return false;
    if (this.precision >= DateTimePrecision.Month && this.month !== other.month)
      return false;
    if (this.precision >= DateTimePrecision.Day && this.day !== other.day)
      return false;
    if (this.precision >= DateTimePrecision.Hour && this.hour !== other.hour)
      return false;
    if (
      this.precision >= DateTimePrecision.Minute &&
      this.minute !== other.minute
    )
      return false;
    if (
      this.precision >= DateTimePrecision.Second &&
      this.second !== other.second
    )
      return false;
    if (
      this.precision >= DateTimePrecision.Millisecond &&
      this.millis !== other.millis
    )
      return false;
    if (this.hasTZ !== other.hasTZ) return false;
    if (this.hasTZ && this.tzOffset !== other.tzOffset) return false;
    return true;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlDateTime))
      throw typeError('DateTime', other.type);

    if (this.precision !== other.precision) {
      const min = Math.min(this.precision, other.precision) as DateTimePrecision;

      type ComponentGetter = (dt: CqlDateTime) => number;
      const components: Array<[DateTimePrecision, ComponentGetter]> = [
        [DateTimePrecision.Year, (dt) => dt.year],
        [DateTimePrecision.Month, (dt) => dt.month],
        [DateTimePrecision.Day, (dt) => dt.day],
        [DateTimePrecision.Hour, (dt) => dt.hour],
        [DateTimePrecision.Minute, (dt) => dt.minute],
        [DateTimePrecision.Second, (dt) => dt.second],
        [DateTimePrecision.Millisecond, (dt) => dt.millis],
      ];

      for (const [precLevel, getter] of components) {
        if (precLevel > min) {
          throw new Error(
            'ambiguous comparison between datetimes with different precisions',
          );
        }
        const a = getter(this);
        const b = getter(other);
        if (a !== b) return a - b;
      }

      // All compared components equal but different precisions => ambiguous
      throw new Error(
        'ambiguous comparison between datetimes with different precisions',
      );
    }

    // Same precision — component-by-component
    if (this.year !== other.year) return this.year - other.year;
    if (this.precision >= DateTimePrecision.Month && this.month !== other.month)
      return this.month - other.month;
    if (this.precision >= DateTimePrecision.Day && this.day !== other.day)
      return this.day - other.day;
    if (this.precision >= DateTimePrecision.Hour && this.hour !== other.hour)
      return this.hour - other.hour;
    if (
      this.precision >= DateTimePrecision.Minute &&
      this.minute !== other.minute
    )
      return this.minute - other.minute;
    if (
      this.precision >= DateTimePrecision.Second &&
      this.second !== other.second
    )
      return this.second - other.second;
    if (
      this.precision >= DateTimePrecision.Millisecond &&
      this.millis !== other.millis
    )
      return this.millis - other.millis;
    return 0;
  }

  toString(): string {
    let r = String(this.year).padStart(4, '0');
    if (this.precision >= DateTimePrecision.Month)
      r += `-${String(this.month).padStart(2, '0')}`;
    if (this.precision >= DateTimePrecision.Day)
      r += `-${String(this.day).padStart(2, '0')}`;
    if (this.precision >= DateTimePrecision.Hour)
      r += `T${String(this.hour).padStart(2, '0')}`;
    if (this.precision >= DateTimePrecision.Minute)
      r += `:${String(this.minute).padStart(2, '0')}`;
    if (this.precision >= DateTimePrecision.Second)
      r += `:${String(this.second).padStart(2, '0')}`;
    if (this.precision >= DateTimePrecision.Millisecond)
      r += `.${String(this.millis).padStart(3, '0')}`;
    if (this.hasTZ) {
      if (this.tzOffset === 0) {
        r += 'Z';
      } else {
        const sign = this.tzOffset < 0 ? '-' : '+';
        const abs = Math.abs(this.tzOffset);
        r += `${sign}${String(Math.floor(abs / 60)).padStart(2, '0')}:${String(abs % 60).padStart(2, '0')}`;
      }
    }
    return r;
  }
}

// ---------------------------------------------------------------------------
// CqlTime
// ---------------------------------------------------------------------------

const TIME_RE = /^T?(\d{2})(?::(\d{2})(?::(\d{2})(?:\.(\d+))?)?)?$/;

export class CqlTime implements CqlComparable {
  readonly type = 'Time' as const;

  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millis: number;
  readonly precision: TimePrecision;

  constructor(readonly raw: string) {
    const m = TIME_RE.exec(raw);
    if (!m) throw new Error(`invalid time format: ${raw}`);

    this.hour = Number(m[1]);
    let prec = TimePrecision.Hour;

    this.minute = m[2] ? ((prec = TimePrecision.Minute), Number(m[2])) : 0;
    this.second = m[3] ? ((prec = TimePrecision.Second), Number(m[3])) : 0;

    if (m[4]) {
      prec = TimePrecision.Millisecond;
      let ms = m[4];
      while (ms.length < 3) ms += '0';
      if (ms.length > 3) ms = ms.slice(0, 3);
      this.millis = Number(ms);
    } else {
      this.millis = 0;
    }

    this.precision = prec;
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlTime)) return false;
    if (this.precision !== other.precision) return false;
    if (this.hour !== other.hour) return false;
    if (this.precision >= TimePrecision.Minute && this.minute !== other.minute)
      return false;
    if (this.precision >= TimePrecision.Second && this.second !== other.second)
      return false;
    if (
      this.precision >= TimePrecision.Millisecond &&
      this.millis !== other.millis
    )
      return false;
    return true;
  }

  equivalent(other: CqlValue): boolean {
    return this.equals(other);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlTime)) throw typeError('Time', other.type);

    if (this.precision !== other.precision) {
      const min = Math.min(this.precision, other.precision) as TimePrecision;

      if (this.hour !== other.hour) return this.hour - other.hour;

      if (min >= TimePrecision.Minute) {
        if (this.minute !== other.minute) return this.minute - other.minute;
      } else {
        throw new Error(
          'ambiguous comparison between times with different precisions',
        );
      }

      if (min >= TimePrecision.Second) {
        if (this.second !== other.second) return this.second - other.second;
      } else {
        throw new Error(
          'ambiguous comparison between times with different precisions',
        );
      }

      // millisecond level ambiguity
      throw new Error(
        'ambiguous comparison between times with different precisions',
      );
    }

    // Same precision
    if (this.hour !== other.hour) return this.hour - other.hour;
    if (this.precision >= TimePrecision.Minute) {
      if (this.minute !== other.minute) return this.minute - other.minute;
    }
    if (this.precision >= TimePrecision.Second) {
      if (this.second !== other.second) return this.second - other.second;
    }
    if (this.precision >= TimePrecision.Millisecond) {
      if (this.millis !== other.millis) return this.millis - other.millis;
    }
    return 0;
  }

  toString(): string {
    let r = String(this.hour).padStart(2, '0');
    if (this.precision >= TimePrecision.Minute)
      r += `:${String(this.minute).padStart(2, '0')}`;
    if (this.precision >= TimePrecision.Second)
      r += `:${String(this.second).padStart(2, '0')}`;
    if (this.precision >= TimePrecision.Millisecond)
      r += `.${String(this.millis).padStart(3, '0')}`;
    return r;
  }
}

// ---------------------------------------------------------------------------
// CqlQuantity
// ---------------------------------------------------------------------------

export class CqlQuantity implements CqlComparable {
  readonly type = 'Quantity' as const;

  constructor(
    readonly value: Decimal,
    readonly unit: string,
  ) {}

  static of(value: string | number, unit: string): CqlQuantity {
    return new CqlQuantity(new Decimal(value), unit);
  }

  equals(other: CqlValue): boolean {
    if (!(other instanceof CqlQuantity)) return false;
    return this.unit === other.unit && this.value.equals(other.value);
  }

  equivalent(other: CqlValue): boolean {
    if (!(other instanceof CqlQuantity)) return false;
    // Case-insensitive unit comparison
    if (this.unit.toLowerCase() !== other.unit.toLowerCase()) return false;
    return this.value.equals(other.value);
  }

  compareTo(other: CqlValue): number {
    if (!(other instanceof CqlQuantity))
      throw typeError('Quantity', other.type);
    if (this.unit !== other.unit) {
      throw new Error(
        `incompatible units: ${this.unit} and ${other.unit}`,
      );
    }
    return this.value.comparedTo(other.value);
  }

  toString(): string {
    if (this.unit === '') return this.value.toString();
    return `${this.value.toString()} ${this.unit}`;
  }
}
