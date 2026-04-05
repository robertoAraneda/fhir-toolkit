import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerIntervalFunctions } from '../../src/funcs/index.js';
import { CqlBoolean, CqlInteger } from '../../src/types/index.js';
import { CqlInterval, CqlList } from '../../src/types/index.js';

describe('interval functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerIntervalFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  const intInterval = (lo: number, hi: number, loClosed = true, hiClosed = true) =>
    new CqlInterval(new CqlInteger(lo), new CqlInteger(hi), loClosed, hiClosed);

  it('Contains checks point in interval', () => {
    const iv = intInterval(1, 10);
    expect(call('Contains', iv, new CqlInteger(5))).toEqual(CqlBoolean.TRUE);
    expect(call('Contains', iv, new CqlInteger(11))).toEqual(CqlBoolean.FALSE);
  });

  it('Contains returns null for null args', () => {
    expect(call('Contains', null, new CqlInteger(5))).toBeNull();
  });

  it('Includes checks interval inclusion', () => {
    const a = intInterval(1, 10);
    const b = intInterval(3, 7);
    expect(call('Includes', a, b)).toEqual(CqlBoolean.TRUE);
    expect(call('Includes', b, a)).toEqual(CqlBoolean.FALSE);
  });

  it('IncludedIn is reverse of Includes', () => {
    const a = intInterval(3, 7);
    const b = intInterval(1, 10);
    expect(call('IncludedIn', a, b)).toEqual(CqlBoolean.TRUE);
  });

  it('Overlaps detects overlap', () => {
    const a = intInterval(1, 5);
    const b = intInterval(3, 8);
    expect(call('Overlaps', a, b)).toEqual(CqlBoolean.TRUE);
  });

  it('Overlaps detects no overlap', () => {
    const a = intInterval(1, 3);
    const b = intInterval(5, 8);
    expect(call('Overlaps', a, b)).toEqual(CqlBoolean.FALSE);
  });

  it('Before checks interval ordering', () => {
    const a = intInterval(1, 3);
    const b = intInterval(5, 8);
    expect(call('Before', a, b)).toEqual(CqlBoolean.TRUE);
    expect(call('Before', b, a)).toEqual(CqlBoolean.FALSE);
  });

  it('After checks interval ordering', () => {
    const a = intInterval(5, 8);
    const b = intInterval(1, 3);
    expect(call('After', a, b)).toEqual(CqlBoolean.TRUE);
  });

  it('Meets checks adjacency', () => {
    const a = intInterval(1, 5);
    const b = intInterval(5, 10);
    expect(call('Meets', a, b)).toEqual(CqlBoolean.TRUE);
  });

  it('Meets returns false for non-adjacent', () => {
    const a = intInterval(1, 3);
    const b = intInterval(5, 10);
    expect(call('Meets', a, b)).toEqual(CqlBoolean.FALSE);
  });

  it('Width returns interval width', () => {
    const iv = intInterval(1, 10, true, true);
    expect(call('Width', iv)).toEqual(new CqlInteger(9));
  });

  it('Width with open bounds', () => {
    // (1, 10) = effective [2, 9], width = 7
    const iv = intInterval(1, 10, false, false);
    expect(call('Width', iv)).toEqual(new CqlInteger(7));
  });

  it('Size returns width + 1 for integers', () => {
    const iv = intInterval(1, 10, true, true);
    expect(call('Size', iv)).toEqual(new CqlInteger(10));
  });

  it('Expand generates integer sequence', () => {
    const iv = intInterval(1, 5, true, true);
    const result = call('Expand', iv) as CqlList;
    expect(result).toBeInstanceOf(CqlList);
    expect(result.values).toEqual([
      new CqlInteger(1),
      new CqlInteger(2),
      new CqlInteger(3),
      new CqlInteger(4),
      new CqlInteger(5),
    ]);
  });

  it('Expand with step', () => {
    const iv = intInterval(1, 10, true, true);
    const result = call('Expand', iv, new CqlInteger(3)) as CqlList;
    expect(result.values).toEqual([
      new CqlInteger(1),
      new CqlInteger(4),
      new CqlInteger(7),
      new CqlInteger(10),
    ]);
  });

  it('Collapse merges overlapping intervals', () => {
    const intervals = new CqlList([
      intInterval(1, 5),
      intInterval(3, 8),
      intInterval(10, 15),
    ]);
    const result = call('Collapse', intervals) as CqlList;
    expect(result).toBeInstanceOf(CqlList);
    expect(result.values.length).toBe(2);
    // First merged interval should be [1, 8]
    const first = result.values[0] as CqlInterval<CqlInteger>;
    expect(first.low).toEqual(new CqlInteger(1));
    expect(first.high).toEqual(new CqlInteger(8));
  });

  it('Collapse returns null for null', () => {
    expect(call('Collapse', null)).toBeNull();
  });
});
