import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerTypeFunctions } from '../../src/funcs/index.js';
import {
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlDecimal,
  CqlInteger,
  CqlString,
} from '../../src/types/index.js';

describe('type functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerTypeFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  describe('ToString', () => {
    it('converts integer to string', () => {
      expect(call('ToString', new CqlInteger(42))).toEqual(new CqlString('42'));
    });

    it('converts boolean to string', () => {
      expect(call('ToString', CqlBoolean.TRUE)).toEqual(new CqlString('true'));
    });

    it('returns null for null', () => {
      expect(call('ToString', null)).toBeNull();
    });
  });

  describe('ToInteger', () => {
    it('passes through integer', () => {
      expect(call('ToInteger', new CqlInteger(42))).toEqual(new CqlInteger(42));
    });

    it('converts string to integer', () => {
      expect(call('ToInteger', new CqlString('123'))).toEqual(new CqlInteger(123));
    });

    it('returns null for invalid string', () => {
      expect(call('ToInteger', new CqlString('abc'))).toBeNull();
    });

    it('converts boolean to integer', () => {
      expect(call('ToInteger', CqlBoolean.TRUE)).toEqual(new CqlInteger(1));
      expect(call('ToInteger', CqlBoolean.FALSE)).toEqual(new CqlInteger(0));
    });

    it('truncates decimal', () => {
      expect(call('ToInteger', CqlDecimal.of(3.7))).toEqual(new CqlInteger(3));
    });

    it('returns null for null', () => {
      expect(call('ToInteger', null)).toBeNull();
    });
  });

  describe('ToDecimal', () => {
    it('passes through decimal', () => {
      const d = CqlDecimal.of(3.14);
      expect(call('ToDecimal', d)).toBe(d);
    });

    it('converts integer to decimal', () => {
      const result = call('ToDecimal', new CqlInteger(42)) as CqlDecimal;
      expect(result.value.toNumber()).toBe(42);
    });

    it('converts string to decimal', () => {
      const result = call('ToDecimal', new CqlString('3.14')) as CqlDecimal;
      expect(result.value.toNumber()).toBe(3.14);
    });

    it('returns null for invalid string', () => {
      expect(call('ToDecimal', new CqlString('abc'))).toBeNull();
    });

    it('returns null for null', () => {
      expect(call('ToDecimal', null)).toBeNull();
    });
  });

  describe('ToBoolean', () => {
    it('passes through boolean', () => {
      expect(call('ToBoolean', CqlBoolean.TRUE)).toBe(CqlBoolean.TRUE);
    });

    it('converts truthy strings', () => {
      for (const s of ['true', 't', 'yes', 'y', '1', '1.0']) {
        expect(call('ToBoolean', new CqlString(s))).toEqual(CqlBoolean.TRUE);
      }
    });

    it('converts falsy strings', () => {
      for (const s of ['false', 'f', 'no', 'n', '0', '0.0']) {
        expect(call('ToBoolean', new CqlString(s))).toEqual(CqlBoolean.FALSE);
      }
    });

    it('returns null for unknown string', () => {
      expect(call('ToBoolean', new CqlString('maybe'))).toBeNull();
    });

    it('converts non-zero integer to true', () => {
      expect(call('ToBoolean', new CqlInteger(5))).toEqual(CqlBoolean.TRUE);
    });

    it('converts zero integer to false', () => {
      expect(call('ToBoolean', new CqlInteger(0))).toEqual(CqlBoolean.FALSE);
    });

    it('returns null for null', () => {
      expect(call('ToBoolean', null)).toBeNull();
    });
  });

  describe('ToDate', () => {
    it('passes through date', () => {
      const d = new CqlDate('2020-06-15');
      expect(call('ToDate', d)).toBe(d);
    });

    it('extracts date from datetime', () => {
      const result = call('ToDate', new CqlDateTime('2020-06-15T10:30:00')) as CqlDate;
      expect(result.toString()).toBe('2020-06-15');
    });

    it('converts string to date', () => {
      const result = call('ToDate', new CqlString('2020-06-15')) as CqlDate;
      expect(result.toString()).toBe('2020-06-15');
    });

    it('returns null for invalid string', () => {
      expect(call('ToDate', new CqlString('not-a-date'))).toBeNull();
    });

    it('returns null for null', () => {
      expect(call('ToDate', null)).toBeNull();
    });
  });

  describe('ToDateTime', () => {
    it('passes through datetime', () => {
      const dt = new CqlDateTime('2020-06-15T10:30:00');
      expect(call('ToDateTime', dt)).toBe(dt);
    });

    it('converts date to datetime', () => {
      const result = call('ToDateTime', new CqlDate('2020-06-15')) as CqlDateTime;
      expect(result.toString()).toContain('2020-06-15');
    });

    it('converts string to datetime', () => {
      const result = call('ToDateTime', new CqlString('2020-06-15T10:30:00')) as CqlDateTime;
      expect(result).toBeInstanceOf(CqlDateTime);
    });

    it('returns null for null', () => {
      expect(call('ToDateTime', null)).toBeNull();
    });
  });
});
