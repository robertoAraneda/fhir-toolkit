import { describe, it, expect, beforeAll } from 'vitest';
import { Parser } from '../src/parser.js';
import type { Symbol as UcumSymbol } from '../src/ast.js';
import type { Model } from '../src/model.js';
import { createTestModel } from './test-utils.js';

let model: Model;
let parser: Parser;

beforeAll(() => {
  model = createTestModel();
  parser = new Parser(model);
});

describe('Parser', () => {
  describe('valid codes', () => {
    it.each([
      'm', 'kg', 'm/s', 'mg/dL', '10*3/uL', 'm.s-1', 'm2',
      'kg.m/s2', '%', '[lb_av]', 'cm[H2O]', 'mol/L', 'mm[Hg]',
      '/m', '{score}', 'm{annotation}', '1',
    ])('parses %s without error', (code) => {
      expect(() => parser.parse(code)).not.toThrow();
    });
  });

  describe('invalid codes', () => {
    it.each(['xyz', 'm/', ''])('rejects %s', (code) => {
      expect(() => parser.parse(code)).toThrow();
    });
  });

  it('resolves km as prefix k + unit m', () => {
    const ast = parser.parse('km');
    const sym = ast.comp as UcumSymbol;
    expect(sym.kind).toBe('symbol');
    expect(sym.prefix?.code).toBe('k');
    expect(sym.unit?.code).toBe('m');
  });

  it('parses positive exponent m2', () => {
    const ast = parser.parse('m2');
    const sym = ast.comp as UcumSymbol;
    expect(sym.kind).toBe('symbol');
    expect(sym.exponent).toBe(2);
  });

  it('parses negative exponent m-2', () => {
    const ast = parser.parse('m-2');
    const sym = ast.comp as UcumSymbol;
    expect(sym.kind).toBe('symbol');
    expect(sym.exponent).toBe(-2);
  });
});
