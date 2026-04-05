import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerListFunctions } from '../../src/funcs/index.js';
import {
  CqlBoolean,
  CqlDecimal,
  CqlInteger,
  CqlString,
} from '../../src/types/index.js';
import { CqlList } from '../../src/types/index.js';

describe('list functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerListFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  const intList = (...nums: number[]) =>
    new CqlList(nums.map((n) => new CqlInteger(n)));

  it('Flatten flattens nested lists', () => {
    const nested = new CqlList([
      new CqlInteger(1),
      new CqlList([new CqlInteger(2), new CqlInteger(3)]),
      new CqlInteger(4),
    ]);
    const result = call('Flatten', nested) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(3),
      new CqlInteger(4),
    ]);
  });

  it('Flatten returns null for null', () => {
    expect(call('Flatten', null)).toBeNull();
  });

  it('Distinct removes duplicates', () => {
    const list = new CqlList([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(1),
      new CqlInteger(3),
      new CqlInteger(2),
    ]);
    const result = call('Distinct', list) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(3),
    ]);
  });

  it('Mode returns most frequent', () => {
    const list = new CqlList([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(2),
      new CqlInteger(3),
    ]);
    expect(call('Mode', list)).toEqual(new CqlInteger(2));
  });

  it('Mode returns null for empty list', () => {
    expect(call('Mode', new CqlList([]))).toBeNull();
  });

  it('Median of odd list', () => {
    const result = call('Median', intList(1, 3, 5)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(3);
  });

  it('Median of even list', () => {
    const result = call('Median', intList(1, 2, 3, 4)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(2.5);
  });

  it('GeometricMean of positive numbers', () => {
    // GM(4, 9) = sqrt(36) = 6
    const result = call('GeometricMean', intList(4, 9)) as CqlDecimal;
    expect(result.value.toNumber()).toBe(6);
  });

  it('GeometricMean returns null for zero', () => {
    expect(call('GeometricMean', intList(0, 5))).toBeNull();
  });

  it('First returns first element', () => {
    expect(call('First', intList(10, 20, 30))).toEqual(new CqlInteger(10));
  });

  it('First returns null for empty', () => {
    expect(call('First', new CqlList([]))).toBeNull();
  });

  it('Last returns last element', () => {
    expect(call('Last', intList(10, 20, 30))).toEqual(new CqlInteger(30));
  });

  it('SingletonFrom returns single element', () => {
    expect(call('SingletonFrom', intList(42))).toEqual(new CqlInteger(42));
  });

  it('SingletonFrom returns null for non-singleton', () => {
    expect(call('SingletonFrom', intList(1, 2))).toBeNull();
  });

  it('Exists returns true for non-empty', () => {
    expect(call('Exists', intList(1))).toEqual(CqlBoolean.TRUE);
  });

  it('Exists returns false for empty', () => {
    expect(call('Exists', new CqlList([]))).toEqual(CqlBoolean.FALSE);
  });

  it('Exists returns false for null', () => {
    expect(call('Exists', null)).toEqual(CqlBoolean.FALSE);
  });

  it('Take returns first n elements', () => {
    const result = call('Take', intList(1, 2, 3, 4, 5), new CqlInteger(3)) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(3),
    ]);
  });

  it('Skip skips first n elements', () => {
    const result = call('Skip', intList(1, 2, 3, 4, 5), new CqlInteger(2)) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(3),
      new CqlInteger(4),
      new CqlInteger(5),
    ]);
  });

  it('Tail returns all but first', () => {
    const result = call('Tail', intList(1, 2, 3)) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(2),
      new CqlInteger(3),
    ]);
  });

  it('Tail returns empty for single-element list', () => {
    const result = call('Tail', intList(1)) as CqlList;
    expect(result.values).toEqual([]);
  });
});
