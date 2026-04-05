import { describe, it, expect, beforeAll } from 'vitest';
import { Decimal } from 'decimal.js';
import { Parser } from '../src/parser.js';
import { composeTerm, composeCanonicalUnits } from '../src/composer.js';
import type { Canonical } from '../src/canonical.js';
import type { BaseUnit, Model } from '../src/model.js';
import { createTestModel } from './test-utils.js';

let model: Model;
let parser: Parser;

beforeAll(() => {
  model = createTestModel();
  parser = new Parser(model);
});

describe('composeTerm', () => {
  const codes = ['m', 'm/s', 'kg.m/s2', 'mg/dL', '%', '[lb_av]', 'm2', 'm-1'];

  describe('round-trip: parse → composeTerm → re-parse', () => {
    it.each(codes)('round-trips %s', (code) => {
      const ast = parser.parse(code);
      const result = composeTerm(ast);
      expect(() => parser.parse(result)).not.toThrow();
    });
  });

  describe('exact output: composeTerm(parse(input)) === input', () => {
    it.each([
      ['m', 'm'],
      ['m2', 'm2'],
      ['m-1', 'm-1'],
      ['m/s', 'm/s'],
      ['kg.m/s2', 'kg.m/s2'],
      ['%', '%'],
      ['[lb_av]', '[lb_av]'],
      ['mg/dL', 'mg/dL'],
    ] as [string, string][])('composeTerm(parse(%s)) === %s', (input, want) => {
      const ast = parser.parse(input);
      const got = composeTerm(ast);
      expect(got).toBe(want);
    });
  });
});

describe('composeCanonicalUnits', () => {
  let mBase: BaseUnit;
  let sBase: BaseUnit;

  beforeAll(() => {
    const foundM = model.baseUnits.find((u) => u.code === 'm');
    const foundS = model.baseUnits.find((u) => u.code === 's');
    if (!foundM || !foundS) {
      throw new Error('could not find base units m and s');
    }
    mBase = foundM;
    sBase = foundS;
  });

  it('returns "1" for null canonical', () => {
    expect(composeCanonicalUnits(null)).toBe('1');
  });

  it('returns "1" for empty units array', () => {
    const canon: Canonical = { value: new Decimal(1), units: [] };
    expect(composeCanonicalUnits(canon)).toBe('1');
  });

  it('returns "m" for single base unit m with exponent 1', () => {
    const canon: Canonical = {
      value: new Decimal(1),
      units: [{ base: mBase, exponent: 1 }],
    };
    expect(composeCanonicalUnits(canon)).toBe('m');
  });

  it('returns "m.s-1" for velocity (m exp=1, s exp=-1)', () => {
    const canon: Canonical = {
      value: new Decimal(1),
      units: [
        { base: mBase, exponent: 1 },
        { base: sBase, exponent: -1 },
      ],
    };
    expect(composeCanonicalUnits(canon)).toBe('m.s-1');
  });

  it('returns "m2" for area (m exp=2)', () => {
    const canon: Canonical = {
      value: new Decimal(1),
      units: [{ base: mBase, exponent: 2 }],
    };
    expect(composeCanonicalUnits(canon)).toBe('m2');
  });

  it('skips zero-exponent units: m(exp=1) + s(exp=0) → "m"', () => {
    const canon: Canonical = {
      value: new Decimal(1),
      units: [
        { base: mBase, exponent: 1 },
        { base: sBase, exponent: 0 },
      ],
    };
    expect(composeCanonicalUnits(canon)).toBe('m');
  });
});
