import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerDateTimeFunctions } from '../../src/funcs/index.js';
import {
  CqlDate,
  CqlDateTime,
  CqlInteger,
  CqlString,
  CqlTime,
} from '../../src/types/index.js';

describe('datetime functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerDateTimeFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  describe('DurationBetween', () => {
    it('years between two dates', () => {
      const result = call(
        'DurationBetween',
        new CqlDate('2010-01-01'),
        new CqlDate('2020-01-01'),
        new CqlString('years'),
      );
      expect(result).toEqual(new CqlInteger(10));
    });

    it('months between two dates', () => {
      const result = call(
        'DurationBetween',
        new CqlDate('2020-01-15'),
        new CqlDate('2020-04-15'),
        new CqlString('months'),
      );
      expect(result).toEqual(new CqlInteger(3));
    });

    it('days between two dates', () => {
      const result = call(
        'DurationBetween',
        new CqlDate('2020-01-01'),
        new CqlDate('2020-01-11'),
        new CqlString('days'),
      );
      expect(result).toEqual(new CqlInteger(10));
    });

    it('returns null for null args', () => {
      expect(call('DurationBetween', null, new CqlDate('2020-01-01'), new CqlString('days'))).toBeNull();
    });
  });

  describe('DateTimeComponentFrom', () => {
    it('extracts year', () => {
      expect(
        call('DateTimeComponentFrom', new CqlDate('2020-06-15'), new CqlString('year')),
      ).toEqual(new CqlInteger(2020));
    });

    it('extracts month', () => {
      expect(
        call('DateTimeComponentFrom', new CqlDate('2020-06-15'), new CqlString('month')),
      ).toEqual(new CqlInteger(6));
    });

    it('extracts day', () => {
      expect(
        call('DateTimeComponentFrom', new CqlDate('2020-06-15'), new CqlString('day')),
      ).toEqual(new CqlInteger(15));
    });

    it('returns null for null', () => {
      expect(call('DateTimeComponentFrom', null, new CqlString('year'))).toBeNull();
    });
  });

  describe('Date constructor', () => {
    it('creates year-only date', () => {
      const result = call('Date', new CqlInteger(2020));
      expect(result).toBeInstanceOf(CqlDate);
      expect(result!.toString()).toBe('2020');
    });

    it('creates year-month date', () => {
      const result = call('Date', new CqlInteger(2020), new CqlInteger(6));
      expect(result!.toString()).toBe('2020-06');
    });

    it('creates full date', () => {
      const result = call('Date', new CqlInteger(2020), new CqlInteger(6), new CqlInteger(15));
      expect(result!.toString()).toBe('2020-06-15');
    });

    it('returns null for null year', () => {
      expect(call('Date', null)).toBeNull();
    });
  });

  describe('DateTime constructor', () => {
    it('creates datetime with timezone', () => {
      const result = call(
        'DateTime',
        new CqlInteger(2020),
        new CqlInteger(6),
        new CqlInteger(15),
        new CqlInteger(10),
        new CqlInteger(30),
        new CqlInteger(0),
        new CqlInteger(0),
        new CqlString('+05:00'),
      );
      expect(result).toBeInstanceOf(CqlDateTime);
      expect(result!.toString()).toContain('2020');
    });
  });

  describe('Time constructor', () => {
    it('creates time', () => {
      const result = call('Time', new CqlInteger(14), new CqlInteger(30), new CqlInteger(0));
      expect(result).toBeInstanceOf(CqlTime);
      expect(result!.toString()).toBe('14:30:00.000');
    });
  });

  describe('Now/Today/TimeOfDay', () => {
    it('Now returns a DateTime', () => {
      const result = call('Now');
      expect(result).toBeInstanceOf(CqlDateTime);
    });

    it('Today returns a Date', () => {
      const result = call('Today');
      expect(result).toBeInstanceOf(CqlDate);
    });

    it('TimeOfDay returns a Time', () => {
      const result = call('TimeOfDay');
      expect(result).toBeInstanceOf(CqlTime);
    });
  });
});
