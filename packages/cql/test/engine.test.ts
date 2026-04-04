import { describe, it, expect } from 'vitest';
import { CqlEngine, CqlTooCostlyError, CqlInteger } from '../src/index.js';

describe('CqlEngine', () => {
  it('evaluates a simple expression', async () => {
    const engine = new CqlEngine();
    const results = await engine.evaluateLibrary(
      `library Test version '1.0'\ndefine X: 1 + 2`,
      null,
    );
    expect(results['X']?.toString()).toBe('3');
  });

  it('evaluates a named expression', async () => {
    const engine = new CqlEngine();
    const result = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: 42`,
      'X',
      null,
    );
    expect(result?.toString()).toBe('42');
  });

  it('compile validates syntax', () => {
    const engine = new CqlEngine();
    expect(() =>
      engine.compile(`library T version '1.0'\ndefine X: 1`),
    ).not.toThrow();
    expect(() => engine.compile('invalid!!!')).toThrow();
  });

  it('caches compiled libraries', () => {
    const engine = new CqlEngine();
    const source = `library T version '1.0'\ndefine X: 1`;
    const lib1 = engine.compile(source);
    const lib2 = engine.compile(source);
    expect(lib1).toBe(lib2); // same reference
  });

  it('rejects too-large source', () => {
    const engine = new CqlEngine({ maxExpressionLen: 10 });
    expect(() => engine.compile('a'.repeat(100))).toThrow(CqlTooCostlyError);
  });

  it('accepts model info option', () => {
    expect(new CqlEngine({ modelInfo: 'R4' })).toBeDefined();
    expect(new CqlEngine({ modelInfo: 'R5' })).toBeDefined();
  });

  it('exposes function registry for custom registration', () => {
    const engine = new CqlEngine();
    engine.functions.register('MyDouble', ([v]) => {
      if (!v || v.type !== 'Integer') return null;
      return new CqlInteger((v as CqlInteger).value * 2);
    });
    expect(engine.functions.has('MyDouble')).toBe(true);
  });

  it('evaluates multiple definitions', async () => {
    const engine = new CqlEngine();
    const results = await engine.evaluateLibrary(
      `library T version '1.0'
       define A: 10
       define B: A + 5`,
      null,
    );
    expect(results['A']?.toString()).toBe('10');
    expect(results['B']?.toString()).toBe('15');
  });

  it('evaluateExpression resolves dependent definitions', async () => {
    const engine = new CqlEngine();
    const result = await engine.evaluateExpression(
      `library T version '1.0'
       define A: 10
       define B: A + 5`,
      'B',
      null,
    );
    expect(result?.toString()).toBe('15');
  });

  it('passes parameters to evaluation', async () => {
    const engine = new CqlEngine();
    const result = await engine.evaluateExpression(
      `library T version '1.0'
       parameter Threshold Integer default 10
       define Check: Threshold > 5`,
      'Check',
      null,
      { Threshold: new CqlInteger(20) },
    );
    expect(result?.toString()).toBe('true');
  });
});
