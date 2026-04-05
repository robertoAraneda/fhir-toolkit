import { describe, it, expect, beforeEach } from 'vitest';
import { Decimal } from 'decimal.js';
import { FunctionRegistry, registerAggregateFunctions } from '../../src/funcs/index.js';
import { CqlBoolean, CqlDecimal, CqlInteger } from '../../src/types/index.js';
import { CqlList } from '../../src/types/index.js';

describe('aggregate functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerAggregateFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  const intList = (...nums: number[]) =>
    new CqlList(nums.map((n) => new CqlInteger(n)));

  it('Count returns list length', () => {
    expect(call('Count', intList(1, 2, 3))).toEqual(new CqlInteger(3));
  });

  it('Count returns 0 for null', () => {
    expect(call('Count', null)).toEqual(new CqlInteger(0));
  });

  it('Sum sums integers', () => {
    const result = call('Sum', intList(1, 2, 3)) as CqlInteger;
    expect(result.value).toBe(6);
  });

  it('Sum returns null for empty list', () => {
    expect(call('Sum', new CqlList([]))).toBeNull();
  });

  it('Avg computes average', () => {
    const result = call('Avg', intList(2, 4, 6)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(4);
  });

  it('Min returns minimum', () => {
    expect(call('Min', intList(3, 1, 2))).toEqual(new CqlInteger(1));
  });

  it('Min returns null for empty', () => {
    expect(call('Min', new CqlList([]))).toBeNull();
  });

  it('Max returns maximum', () => {
    expect(call('Max', intList(3, 1, 5, 2))).toEqual(new CqlInteger(5));
  });

  it('AllTrue with all true', () => {
    const list = new CqlList([CqlBoolean.TRUE, CqlBoolean.TRUE]);
    expect(call('AllTrue', list)).toEqual(CqlBoolean.TRUE);
  });

  it('AllTrue with a false', () => {
    const list = new CqlList([CqlBoolean.TRUE, CqlBoolean.FALSE]);
    expect(call('AllTrue', list)).toEqual(CqlBoolean.FALSE);
  });

  it('AnyTrue with one true', () => {
    const list = new CqlList([CqlBoolean.FALSE, CqlBoolean.TRUE]);
    expect(call('AnyTrue', list)).toEqual(CqlBoolean.TRUE);
  });

  it('AnyTrue with all false', () => {
    const list = new CqlList([CqlBoolean.FALSE, CqlBoolean.FALSE]);
    expect(call('AnyTrue', list)).toEqual(CqlBoolean.FALSE);
  });

  it('PopulationVariance computes correctly', () => {
    // [2, 4, 6] mean=4, diffs=[-2,0,2], sq=[4,0,4], sum=8, /3 = 2.666...
    const result = call('PopulationVariance', intList(2, 4, 6)) as CqlDecimal;
    expect(result.value.toDecimalPlaces(4).toNumber()).toBeCloseTo(2.6667, 3);
  });

  it('PopulationVariance returns null for < 2 items', () => {
    expect(call('PopulationVariance', intList(1))).toBeNull();
  });

  it('PopulationStdDev computes correctly', () => {
    const result = call('PopulationStdDev', intList(2, 4, 6)) as CqlDecimal;
    expect(result.value.toNumber()).toBeCloseTo(Math.sqrt(8 / 3), 5);
  });

  it('Variance computes sample variance', () => {
    // [2, 4, 6] mean=4, sumSq=8, /2 = 4
    const result = call('Variance', intList(2, 4, 6)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(4);
  });

  it('StdDev computes sample std dev', () => {
    const result = call('StdDev', intList(2, 4, 6)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(2);
  });
});
