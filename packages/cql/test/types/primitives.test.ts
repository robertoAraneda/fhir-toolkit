import { describe, expect, it } from 'vitest';
import Decimal from 'decimal.js';
import {
  CqlBoolean,
  CqlInteger,
  CqlLong,
  CqlDecimal,
  CqlString,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
  DatePrecision,
  DateTimePrecision,
  TimePrecision,
} from '../../src/types/primitives.js';

// ---------------------------------------------------------------------------
// CqlBoolean
// ---------------------------------------------------------------------------

describe('CqlBoolean', () => {
  it('has type "Boolean"', () => {
    expect(CqlBoolean.TRUE.type).toBe('Boolean');
  });

  it('provides singleton TRUE / FALSE', () => {
    expect(CqlBoolean.of(true)).toBe(CqlBoolean.TRUE);
    expect(CqlBoolean.of(false)).toBe(CqlBoolean.FALSE);
  });

  it('equals: same value', () => {
    expect(CqlBoolean.TRUE.equals(CqlBoolean.TRUE)).toBe(true);
    expect(CqlBoolean.TRUE.equals(CqlBoolean.FALSE)).toBe(false);
  });

  it('equivalent is same as equals', () => {
    expect(CqlBoolean.TRUE.equivalent(CqlBoolean.TRUE)).toBe(true);
    expect(CqlBoolean.TRUE.equivalent(CqlBoolean.FALSE)).toBe(false);
  });

  it('equals returns false for different type', () => {
    expect(CqlBoolean.TRUE.equals(new CqlInteger(1))).toBe(false);
  });

  it('compareTo: false < true', () => {
    expect(CqlBoolean.FALSE.compareTo(CqlBoolean.TRUE)).toBeLessThan(0);
    expect(CqlBoolean.TRUE.compareTo(CqlBoolean.FALSE)).toBeGreaterThan(0);
    expect(CqlBoolean.TRUE.compareTo(CqlBoolean.TRUE)).toBe(0);
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => CqlBoolean.TRUE.compareTo(new CqlInteger(1))).toThrow(
      TypeError,
    );
  });

  it('toString', () => {
    expect(CqlBoolean.TRUE.toString()).toBe('true');
    expect(CqlBoolean.FALSE.toString()).toBe('false');
  });
});

// ---------------------------------------------------------------------------
// CqlInteger
// ---------------------------------------------------------------------------

describe('CqlInteger', () => {
  it('has type "Integer"', () => {
    expect(new CqlInteger(42).type).toBe('Integer');
  });

  it('equals: same value', () => {
    expect(new CqlInteger(5).equals(new CqlInteger(5))).toBe(true);
    expect(new CqlInteger(5).equals(new CqlInteger(6))).toBe(false);
  });

  it('equals: cross-type with CqlDecimal', () => {
    expect(new CqlInteger(5).equals(CqlDecimal.of(5))).toBe(true);
    expect(new CqlInteger(5).equals(CqlDecimal.of(5.1))).toBe(false);
  });

  it('equivalent: same as equals (Integer <-> Decimal)', () => {
    expect(new CqlInteger(5).equivalent(CqlDecimal.of('5.0'))).toBe(true);
  });

  it('compareTo: Integer vs Integer', () => {
    expect(new CqlInteger(3).compareTo(new CqlInteger(5))).toBeLessThan(0);
    expect(new CqlInteger(5).compareTo(new CqlInteger(3))).toBeGreaterThan(0);
    expect(new CqlInteger(5).compareTo(new CqlInteger(5))).toBe(0);
  });

  it('compareTo: Integer vs Decimal', () => {
    expect(new CqlInteger(3).compareTo(CqlDecimal.of('3.5'))).toBeLessThan(0);
    expect(new CqlInteger(4).compareTo(CqlDecimal.of('3.5'))).toBeGreaterThan(
      0,
    );
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => new CqlInteger(1).compareTo(new CqlString('x'))).toThrow(
      TypeError,
    );
  });

  it('toString', () => {
    expect(new CqlInteger(42).toString()).toBe('42');
    expect(new CqlInteger(-7).toString()).toBe('-7');
  });
});

// ---------------------------------------------------------------------------
// CqlLong
// ---------------------------------------------------------------------------

describe('CqlLong', () => {
  it('has type "Long"', () => {
    expect(new CqlLong(42n).type).toBe('Long');
  });

  it('equals', () => {
    expect(new CqlLong(1n).equals(new CqlLong(1n))).toBe(true);
    expect(new CqlLong(1n).equals(new CqlLong(2n))).toBe(false);
  });

  it('equals: cross-type Integer comparison', () => {
    expect(new CqlLong(1n).equals(new CqlInteger(1))).toBe(true);
    expect(new CqlLong(1n).equals(new CqlInteger(2))).toBe(false);
  });

  it('equals: different type returns false', () => {
    expect(new CqlLong(1n).equals(new CqlString('1'))).toBe(false);
  });

  it('compareTo', () => {
    expect(new CqlLong(1n).compareTo(new CqlLong(2n))).toBeLessThan(0);
    expect(new CqlLong(2n).compareTo(new CqlLong(1n))).toBeGreaterThan(0);
    expect(new CqlLong(3n).compareTo(new CqlLong(3n))).toBe(0);
  });

  it('compareTo with Integer', () => {
    expect(new CqlLong(1n).compareTo(new CqlInteger(2))).toBeLessThan(0);
    expect(new CqlLong(2n).compareTo(new CqlInteger(1))).toBeGreaterThan(0);
    expect(new CqlLong(3n).compareTo(new CqlInteger(3))).toBe(0);
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => new CqlLong(1n).compareTo(new CqlString('1'))).toThrow(
      TypeError,
    );
  });

  it('toString', () => {
    expect(new CqlLong(9007199254740993n).toString()).toBe(
      '9007199254740993',
    );
  });
});

// ---------------------------------------------------------------------------
// CqlDecimal
// ---------------------------------------------------------------------------

describe('CqlDecimal', () => {
  it('has type "Decimal"', () => {
    expect(CqlDecimal.of('3.14').type).toBe('Decimal');
  });

  it('equals: same value', () => {
    expect(CqlDecimal.of('1.0').equals(CqlDecimal.of('1.0'))).toBe(true);
    expect(CqlDecimal.of('1.0').equals(CqlDecimal.of('1.00'))).toBe(true); // numerically equal
    expect(CqlDecimal.of('1.0').equals(CqlDecimal.of('2.0'))).toBe(false);
  });

  it('equals: cross-type with CqlInteger', () => {
    expect(CqlDecimal.of('5.0').equals(new CqlInteger(5))).toBe(true);
    expect(CqlDecimal.of('5.1').equals(new CqlInteger(5))).toBe(false);
  });

  it('compareTo', () => {
    expect(CqlDecimal.of('1.5').compareTo(CqlDecimal.of('2.5'))).toBeLessThan(
      0,
    );
    expect(
      CqlDecimal.of('2.5').compareTo(CqlDecimal.of('1.5')),
    ).toBeGreaterThan(0);
    expect(CqlDecimal.of('3.0').compareTo(CqlDecimal.of('3.0'))).toBe(0);
  });

  it('compareTo: Decimal vs Integer', () => {
    expect(CqlDecimal.of('3.5').compareTo(new CqlInteger(3))).toBeGreaterThan(
      0,
    );
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => CqlDecimal.of('1').compareTo(new CqlString('x'))).toThrow(
      TypeError,
    );
  });

  it('toString', () => {
    expect(CqlDecimal.of('3.14').toString()).toBe('3.14');
  });
});

// ---------------------------------------------------------------------------
// CqlString
// ---------------------------------------------------------------------------

describe('CqlString', () => {
  it('has type "String"', () => {
    expect(new CqlString('hello').type).toBe('String');
  });

  it('equals: case-sensitive', () => {
    expect(new CqlString('abc').equals(new CqlString('abc'))).toBe(true);
    expect(new CqlString('abc').equals(new CqlString('ABC'))).toBe(false);
  });

  it('equals: different type returns false', () => {
    expect(new CqlString('5').equals(new CqlInteger(5))).toBe(false);
  });

  it('equivalent: case-insensitive + whitespace normalization', () => {
    expect(new CqlString('Hello').equivalent(new CqlString('hello'))).toBe(
      true,
    );
    expect(
      new CqlString('  foo  bar  ').equivalent(new CqlString('foo bar')),
    ).toBe(true);
  });

  it('equivalent: different type returns false', () => {
    expect(new CqlString('5').equivalent(new CqlInteger(5))).toBe(false);
  });

  it('compareTo: lexicographic', () => {
    expect(new CqlString('a').compareTo(new CqlString('b'))).toBeLessThan(0);
    expect(new CqlString('b').compareTo(new CqlString('a'))).toBeGreaterThan(
      0,
    );
    expect(new CqlString('abc').compareTo(new CqlString('abc'))).toBe(0);
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => new CqlString('a').compareTo(new CqlInteger(1))).toThrow(
      TypeError,
    );
  });

  it('toString', () => {
    expect(new CqlString('hello').toString()).toBe('hello');
  });
});

// ---------------------------------------------------------------------------
// CqlDate
// ---------------------------------------------------------------------------

describe('CqlDate', () => {
  it('has type "Date"', () => {
    expect(new CqlDate('2024').type).toBe('Date');
  });

  it('parses year-only', () => {
    const d = new CqlDate('2024');
    expect(d.year).toBe(2024);
    expect(d.precision).toBe(DatePrecision.Year);
  });

  it('parses year-month', () => {
    const d = new CqlDate('2024-01');
    expect(d.year).toBe(2024);
    expect(d.month).toBe(1);
    expect(d.precision).toBe(DatePrecision.Month);
  });

  it('parses full date', () => {
    const d = new CqlDate('2024-01-15');
    expect(d.year).toBe(2024);
    expect(d.month).toBe(1);
    expect(d.day).toBe(15);
    expect(d.precision).toBe(DatePrecision.Day);
  });

  it('throws for invalid format', () => {
    expect(() => new CqlDate('not-a-date')).toThrow('invalid date format');
  });

  it('equals: same precision and value', () => {
    expect(new CqlDate('2024-01-15').equals(new CqlDate('2024-01-15'))).toBe(
      true,
    );
    expect(new CqlDate('2024').equals(new CqlDate('2024'))).toBe(true);
  });

  it('equals: different precision returns false', () => {
    expect(new CqlDate('2024').equals(new CqlDate('2024-01'))).toBe(false);
  });

  it('equals: different value returns false', () => {
    expect(new CqlDate('2024-01').equals(new CqlDate('2024-02'))).toBe(false);
  });

  it('compareTo: same precision', () => {
    expect(
      new CqlDate('2024-01-15').compareTo(new CqlDate('2024-06-01')),
    ).toBeLessThan(0);
    expect(
      new CqlDate('2024-06-01').compareTo(new CqlDate('2024-01-15')),
    ).toBeGreaterThan(0);
    expect(
      new CqlDate('2024-01-15').compareTo(new CqlDate('2024-01-15')),
    ).toBe(0);
  });

  it('compareTo: different precision, different year is deterministic', () => {
    expect(
      new CqlDate('2023').compareTo(new CqlDate('2024-01')),
    ).toBeLessThan(0);
  });

  it('compareTo: different precision, same year is ambiguous', () => {
    expect(() => new CqlDate('2024').compareTo(new CqlDate('2024-01'))).toThrow(
      'ambiguous',
    );
  });

  it('compareTo: different precision, same year-month but different months is deterministic', () => {
    // year-month vs full date, different months
    expect(
      new CqlDate('2024-01').compareTo(new CqlDate('2024-02-15')),
    ).toBeLessThan(0);
  });

  it('compareTo: different precision, same year and month is ambiguous', () => {
    expect(() =>
      new CqlDate('2024-01').compareTo(new CqlDate('2024-01-15')),
    ).toThrow('ambiguous');
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => new CqlDate('2024').compareTo(new CqlInteger(2024))).toThrow(
      TypeError,
    );
  });

  it('toString respects precision', () => {
    expect(new CqlDate('2024').toString()).toBe('2024');
    expect(new CqlDate('2024-01').toString()).toBe('2024-01');
    expect(new CqlDate('2024-01-15').toString()).toBe('2024-01-15');
  });
});

// ---------------------------------------------------------------------------
// CqlDateTime
// ---------------------------------------------------------------------------

describe('CqlDateTime', () => {
  it('has type "DateTime"', () => {
    expect(new CqlDateTime('2024').type).toBe('DateTime');
  });

  it('parses full datetime with timezone', () => {
    const dt = new CqlDateTime('2024-01-15T10:30:00.123Z');
    expect(dt.year).toBe(2024);
    expect(dt.month).toBe(1);
    expect(dt.day).toBe(15);
    expect(dt.hour).toBe(10);
    expect(dt.minute).toBe(30);
    expect(dt.second).toBe(0);
    expect(dt.millis).toBe(123);
    expect(dt.hasTZ).toBe(true);
    expect(dt.tzOffset).toBe(0);
    expect(dt.precision).toBe(DateTimePrecision.Millisecond);
  });

  it('parses datetime with positive tz offset', () => {
    const dt = new CqlDateTime('2024-01-15T10:30:00+05:30');
    expect(dt.hasTZ).toBe(true);
    expect(dt.tzOffset).toBe(330);
  });

  it('parses datetime with negative tz offset', () => {
    const dt = new CqlDateTime('2024-01-15T10:30:00-04:00');
    expect(dt.tzOffset).toBe(-240);
  });

  it('parses partial datetime (year-month only)', () => {
    const dt = new CqlDateTime('2024-06');
    expect(dt.precision).toBe(DateTimePrecision.Month);
    expect(dt.month).toBe(6);
  });

  it('throws for invalid format', () => {
    expect(() => new CqlDateTime('nope')).toThrow('invalid datetime format');
  });

  it('equals: same value and precision', () => {
    expect(
      new CqlDateTime('2024-01-15T10:30:00Z').equals(
        new CqlDateTime('2024-01-15T10:30:00Z'),
      ),
    ).toBe(true);
  });

  it('equals: different precision returns false', () => {
    expect(
      new CqlDateTime('2024-01').equals(new CqlDateTime('2024-01-15')),
    ).toBe(false);
  });

  it('equals: different tz returns false', () => {
    expect(
      new CqlDateTime('2024-01-15T10:30:00Z').equals(
        new CqlDateTime('2024-01-15T10:30:00+01:00'),
      ),
    ).toBe(false);
  });

  it('compareTo: same precision', () => {
    expect(
      new CqlDateTime('2024-01-15T10:00:00Z').compareTo(
        new CqlDateTime('2024-01-15T11:00:00Z'),
      ),
    ).toBeLessThan(0);
  });

  it('compareTo: different precision, different year', () => {
    expect(
      new CqlDateTime('2023').compareTo(new CqlDateTime('2024-01')),
    ).toBeLessThan(0);
  });

  it('compareTo: different precision, ambiguous', () => {
    expect(() =>
      new CqlDateTime('2024').compareTo(new CqlDateTime('2024-01')),
    ).toThrow('ambiguous');
  });

  it('compareTo throws for incompatible type', () => {
    expect(() =>
      new CqlDateTime('2024').compareTo(new CqlDate('2024')),
    ).toThrow(TypeError);
  });

  it('toString respects precision and timezone', () => {
    expect(new CqlDateTime('2024').toString()).toBe('2024');
    expect(new CqlDateTime('2024-01-15T10:30:00Z').toString()).toBe(
      '2024-01-15T10:30:00Z',
    );
    expect(new CqlDateTime('2024-01-15T10:30:00.500+05:30').toString()).toBe(
      '2024-01-15T10:30:00.500+05:30',
    );
  });
});

// ---------------------------------------------------------------------------
// CqlTime
// ---------------------------------------------------------------------------

describe('CqlTime', () => {
  it('has type "Time"', () => {
    expect(new CqlTime('10:30:00').type).toBe('Time');
  });

  it('parses hour only', () => {
    const t = new CqlTime('14');
    expect(t.hour).toBe(14);
    expect(t.precision).toBe(TimePrecision.Hour);
  });

  it('parses hour:minute', () => {
    const t = new CqlTime('14:30');
    expect(t.hour).toBe(14);
    expect(t.minute).toBe(30);
    expect(t.precision).toBe(TimePrecision.Minute);
  });

  it('parses full time with millis', () => {
    const t = new CqlTime('14:30:15.123');
    expect(t.hour).toBe(14);
    expect(t.minute).toBe(30);
    expect(t.second).toBe(15);
    expect(t.millis).toBe(123);
    expect(t.precision).toBe(TimePrecision.Millisecond);
  });

  it('parses with leading T', () => {
    const t = new CqlTime('T10:30:00');
    expect(t.hour).toBe(10);
    expect(t.minute).toBe(30);
    expect(t.second).toBe(0);
    expect(t.precision).toBe(TimePrecision.Second);
  });

  it('throws for invalid format', () => {
    expect(() => new CqlTime('nope')).toThrow('invalid time format');
  });

  it('equals: same precision and value', () => {
    expect(new CqlTime('10:30:00').equals(new CqlTime('10:30:00'))).toBe(true);
    expect(new CqlTime('10:30:00').equals(new CqlTime('10:30:01'))).toBe(
      false,
    );
  });

  it('equals: different precision returns false', () => {
    expect(new CqlTime('10').equals(new CqlTime('10:00'))).toBe(false);
  });

  it('compareTo: same precision', () => {
    expect(
      new CqlTime('10:30:00').compareTo(new CqlTime('11:00:00')),
    ).toBeLessThan(0);
    expect(
      new CqlTime('11:00:00').compareTo(new CqlTime('10:30:00')),
    ).toBeGreaterThan(0);
    expect(new CqlTime('10:30:00').compareTo(new CqlTime('10:30:00'))).toBe(0);
  });

  it('compareTo: different precision, different hour is deterministic', () => {
    expect(new CqlTime('09').compareTo(new CqlTime('10:30'))).toBeLessThan(0);
  });

  it('compareTo: different precision, same hour is ambiguous', () => {
    expect(() => new CqlTime('10').compareTo(new CqlTime('10:30'))).toThrow(
      'ambiguous',
    );
  });

  it('compareTo throws for incompatible type', () => {
    expect(() => new CqlTime('10:30').compareTo(new CqlInteger(10))).toThrow(
      TypeError,
    );
  });

  it('toString respects precision', () => {
    expect(new CqlTime('14').toString()).toBe('14');
    expect(new CqlTime('14:30').toString()).toBe('14:30');
    expect(new CqlTime('14:30:15').toString()).toBe('14:30:15');
    expect(new CqlTime('14:30:15.123').toString()).toBe('14:30:15.123');
  });
});

// ---------------------------------------------------------------------------
// CqlQuantity
// ---------------------------------------------------------------------------

describe('CqlQuantity', () => {
  it('has type "Quantity"', () => {
    expect(CqlQuantity.of(10, 'mg').type).toBe('Quantity');
  });

  it('equals: same value and unit', () => {
    expect(CqlQuantity.of(10, 'mg').equals(CqlQuantity.of(10, 'mg'))).toBe(
      true,
    );
  });

  it('equals: different value', () => {
    expect(CqlQuantity.of(10, 'mg').equals(CqlQuantity.of(20, 'mg'))).toBe(
      false,
    );
  });

  it('equals: different unit', () => {
    expect(CqlQuantity.of(10, 'mg').equals(CqlQuantity.of(10, 'kg'))).toBe(
      false,
    );
  });

  it('equals: different type returns false', () => {
    expect(CqlQuantity.of(10, 'mg').equals(new CqlInteger(10))).toBe(false);
  });

  it('equivalent: case-insensitive unit', () => {
    expect(
      CqlQuantity.of(10, 'mg').equivalent(CqlQuantity.of(10, 'MG')),
    ).toBe(true);
  });

  it('equivalent: different type returns false', () => {
    expect(CqlQuantity.of(10, 'mg').equivalent(new CqlInteger(10))).toBe(
      false,
    );
  });

  it('compareTo: same unit', () => {
    expect(
      CqlQuantity.of(5, 'mg').compareTo(CqlQuantity.of(10, 'mg')),
    ).toBeLessThan(0);
    expect(
      CqlQuantity.of(10, 'mg').compareTo(CqlQuantity.of(5, 'mg')),
    ).toBeGreaterThan(0);
    expect(CqlQuantity.of(10, 'mg').compareTo(CqlQuantity.of(10, 'mg'))).toBe(
      0,
    );
  });

  it('compareTo: different unit throws', () => {
    expect(() =>
      CqlQuantity.of(10, 'mg').compareTo(CqlQuantity.of(10, 'kg')),
    ).toThrow('incompatible units');
  });

  it('compareTo: incompatible type throws', () => {
    expect(() =>
      CqlQuantity.of(10, 'mg').compareTo(new CqlInteger(10)),
    ).toThrow(TypeError);
  });

  it('toString', () => {
    expect(CqlQuantity.of(10, 'mg').toString()).toBe('10 mg');
    expect(new CqlQuantity(new Decimal(5), '').toString()).toBe('5');
  });
});
