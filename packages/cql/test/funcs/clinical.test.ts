import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerClinicalFunctions } from '../../src/funcs/index.js';
import { CqlDate, CqlInteger } from '../../src/types/index.js';
import { EvalContext } from '../../src/eval/context.js';

describe('clinical functions', () => {
  let registry: FunctionRegistry;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerClinicalFunctions(registry);
  });

  function makeCtx(birthDate: string): EvalContext {
    return new EvalContext(null, { birthDate });
  }

  it('CalculateAgeInYears between two dates', () => {
    const fn = registry.resolve('CalculateAgeInYears')!;
    const result = fn(
      [new CqlDate('1990-06-15'), new CqlDate('2020-06-15')],
      null as any,
    );
    expect(result).toEqual(new CqlInteger(30));
  });

  it('CalculateAgeInYears before birthday', () => {
    const fn = registry.resolve('CalculateAgeInYears')!;
    const result = fn(
      [new CqlDate('1990-06-15'), new CqlDate('2020-06-14')],
      null as any,
    );
    expect(result).toEqual(new CqlInteger(29));
  });

  it('CalculateAgeInMonths', () => {
    const fn = registry.resolve('CalculateAgeInMonths')!;
    const result = fn(
      [new CqlDate('2020-01-15'), new CqlDate('2020-04-20')],
      null as any,
    );
    expect(result).toEqual(new CqlInteger(3));
  });

  it('CalculateAgeInWeeks', () => {
    const fn = registry.resolve('CalculateAgeInWeeks')!;
    const result = fn(
      [new CqlDate('2020-01-01'), new CqlDate('2020-01-15')],
      null as any,
    );
    expect(result).toEqual(new CqlInteger(2));
  });

  it('CalculateAgeInDays', () => {
    const fn = registry.resolve('CalculateAgeInDays')!;
    const result = fn(
      [new CqlDate('2020-01-01'), new CqlDate('2020-01-11')],
      null as any,
    );
    expect(result).toEqual(new CqlInteger(10));
  });

  it('CalculateAgeInYears returns null for null birthDate', () => {
    const fn = registry.resolve('CalculateAgeInYears')!;
    expect(fn([null, new CqlDate('2020-01-01')], null as any)).toBeNull();
  });

  it('AgeInYears uses context resource birthDate', () => {
    const fn = registry.resolve('AgeInYears')!;
    const ctx = makeCtx('2000-01-01');
    const result = fn([], ctx) as CqlInteger;
    // Should be >= 26 (test written 2026)
    expect(result).toBeInstanceOf(CqlInteger);
    expect(result.value).toBeGreaterThanOrEqual(25);
  });

  it('AgeInYears returns null when no context resource', () => {
    const fn = registry.resolve('AgeInYears')!;
    const ctx = new EvalContext(null, null);
    expect(fn([], ctx)).toBeNull();
  });

  it('AgeInYearsAt uses provided date', () => {
    const fn = registry.resolve('AgeInYearsAt')!;
    const ctx = makeCtx('1990-06-15');
    const result = fn([new CqlDate('2020-06-15')], ctx);
    expect(result).toEqual(new CqlInteger(30));
  });
});
