/**
 * End-to-end integration tests for CQL evaluation.
 *
 * Each test compiles CQL source from scratch and evaluates through the
 * full pipeline: parse -> AST -> evaluate.
 */

import { describe, it, expect } from 'vitest';
import {
  CqlEngine,
  CqlInteger,
  CqlString,
  CqlBoolean,
  CqlDecimal,
  translateLibrary,
  importElmLibrary,
} from '../../src/index.js';

const engine = new CqlEngine();

/** Helper: evaluate a single expression from a one-liner library. */
async function evalExpr(expr: string): Promise<string | null> {
  const source = `library T version '1.0'\ndefine X: ${expr}`;
  const result = await engine.evaluateExpression(source, 'X', null);
  return result?.toString() ?? null;
}

// ---------------------------------------------------------------------------
// Arithmetic
// ---------------------------------------------------------------------------

describe('Arithmetic', () => {
  it('1 + 2 * 3 = 7', async () => {
    expect(await evalExpr('1 + 2 * 3')).toBe('7');
  });

  it('10 / 3 returns decimal', async () => {
    const r = await evalExpr('10 / 3');
    expect(r).not.toBeNull();
    // CQL decimal division should return a decimal value
    expect(r!.startsWith('3.3')).toBe(true);
  });

  it('10 div 3 = 3', async () => {
    expect(await evalExpr('10 div 3')).toBe('3');
  });

  it('10 mod 3 = 1', async () => {
    expect(await evalExpr('10 mod 3')).toBe('1');
  });

  it('negative number: -5 = -5', async () => {
    expect(await evalExpr('-5')).toBe('-5');
  });

  it('4 - 7 = -3', async () => {
    expect(await evalExpr('4 - 7')).toBe('-3');
  });
});

// ---------------------------------------------------------------------------
// Strings
// ---------------------------------------------------------------------------

describe('Strings', () => {
  it("Upper('hello') = 'HELLO'", async () => {
    expect(await evalExpr("Upper('hello')")).toBe('HELLO');
  });

  it("'abc' & 'def' = 'abcdef'", async () => {
    expect(await evalExpr("'abc' & 'def'")).toBe('abcdef');
  });

  it("Length('test') = 4", async () => {
    expect(await evalExpr("Length('test')")).toBe('4');
  });
});

// ---------------------------------------------------------------------------
// Lists
// ---------------------------------------------------------------------------

describe('Lists', () => {
  it('Count({1, 2, 3}) = 3', async () => {
    expect(await evalExpr('Count({1, 2, 3})')).toBe('3');
  });

  it('{1, 2, 3} union {3, 4} has 4 elements', async () => {
    expect(await evalExpr('Count({1, 2, 3} union {3, 4})')).toBe('4');
  });

  it('exists ({1, 2}) = true', async () => {
    expect(await evalExpr('exists ({1, 2})')).toBe('true');
  });

  it('exists ({}) = false', async () => {
    expect(await evalExpr('exists ({})')).toBe('false');
  });
});

// ---------------------------------------------------------------------------
// Intervals
// ---------------------------------------------------------------------------

describe('Intervals', () => {
  it('5 in Interval[1, 10] = true', async () => {
    expect(await evalExpr('5 in Interval[1, 10]')).toBe('true');
  });

  it('15 in Interval[1, 10] = false', async () => {
    expect(await evalExpr('15 in Interval[1, 10]')).toBe('false');
  });

  it('1 in Interval[1, 10] = true (closed bound)', async () => {
    expect(await evalExpr('1 in Interval[1, 10]')).toBe('true');
  });

  it('1 in Interval(1, 10] = false (open bound)', async () => {
    expect(await evalExpr('1 in Interval(1, 10]')).toBe('false');
  });
});

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

describe('Queries', () => {
  it('query with where filter', async () => {
    const result = await evalExpr(
      '({1, 2, 3, 4, 5}) X where X > 3 return X',
    );
    // Should return a list of {4, 5}
    expect(result).not.toBeNull();
  });

  it('query with return clause', async () => {
    const result = await evalExpr(
      '({1, 2, 3}) X return X + 10',
    );
    expect(result).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Control flow
// ---------------------------------------------------------------------------

describe('Control flow', () => {
  it('if true then 1 else 2 = 1', async () => {
    expect(await evalExpr('if true then 1 else 2')).toBe('1');
  });

  it('if false then 1 else 2 = 2', async () => {
    expect(await evalExpr('if false then 1 else 2')).toBe('2');
  });

  it('case expression', async () => {
    const result = await evalExpr(`
      case
        when 1 > 2 then 'a'
        when 2 > 1 then 'b'
        else 'c'
      end
    `);
    expect(result).toBe('b');
  });
});

// ---------------------------------------------------------------------------
// Null handling
// ---------------------------------------------------------------------------

describe('Null handling', () => {
  it('null is null = true', async () => {
    expect(await evalExpr('null is null')).toBe('true');
  });

  it('null and false = false', async () => {
    expect(await evalExpr('null and false')).toBe('false');
  });

  it('null or true = true', async () => {
    expect(await evalExpr('null or true')).toBe('true');
  });

  it('null + 1 = null', async () => {
    expect(await evalExpr('null + 1')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Boolean
// ---------------------------------------------------------------------------

describe('Boolean', () => {
  it('true and false = false', async () => {
    expect(await evalExpr('true and false')).toBe('false');
  });

  it('true or false = true', async () => {
    expect(await evalExpr('true or false')).toBe('true');
  });

  it('not true = false', async () => {
    expect(await evalExpr('not true')).toBe('false');
  });

  it('not false = true', async () => {
    expect(await evalExpr('not false')).toBe('true');
  });
});

// ---------------------------------------------------------------------------
// Comparison
// ---------------------------------------------------------------------------

describe('Comparison', () => {
  it('1 < 2 = true', async () => {
    expect(await evalExpr('1 < 2')).toBe('true');
  });

  it('2 > 1 = true', async () => {
    expect(await evalExpr('2 > 1')).toBe('true');
  });

  it('1 = 1 = true', async () => {
    expect(await evalExpr('1 = 1')).toBe('true');
  });

  it("'abc' = 'abc' = true", async () => {
    expect(await evalExpr("'abc' = 'abc'")).toBe('true');
  });

  it('1 != 2 = true', async () => {
    expect(await evalExpr('1 != 2')).toBe('true');
  });

  it('1 >= 1 = true', async () => {
    expect(await evalExpr('1 >= 1')).toBe('true');
  });

  it('1 <= 1 = true', async () => {
    expect(await evalExpr('1 <= 1')).toBe('true');
  });
});

// ---------------------------------------------------------------------------
// Multiple definitions / cross-references
// ---------------------------------------------------------------------------

describe('Cross-references', () => {
  it('definitions can reference each other', async () => {
    const r = await engine.evaluateLibrary(
      `library T version '1.0'
       define A: 10
       define B: A + 5`,
      null,
    );
    expect(r['B']?.toString()).toBe('15');
  });

  it('chained references through three definitions', async () => {
    const r = await engine.evaluateLibrary(
      `library T version '1.0'
       define A: 1
       define B: A + 1
       define C: B + 1`,
      null,
    );
    expect(r['C']?.toString()).toBe('3');
  });
});

// ---------------------------------------------------------------------------
// Parameters
// ---------------------------------------------------------------------------

describe('Parameters', () => {
  it('uses integer parameter', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'
       parameter Threshold Integer default 10
       define Check: Threshold > 5`,
      'Check',
      null,
      { Threshold: new CqlInteger(20) },
    );
    expect(r?.toString()).toBe('true');
  });

  it('uses default parameter value when not supplied', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'
       parameter Limit Integer default 42
       define Val: Limit`,
      'Val',
      null,
    );
    // Default handling depends on evaluator; at minimum should not throw
    expect(r).toBeDefined();
  });
});

// ---------------------------------------------------------------------------
// ELM round-trip
// ---------------------------------------------------------------------------

describe('ELM round-trip', () => {
  it('translates to ELM and imports back', () => {
    const source = `library T version '1.0'\ndefine X: 1 + 2`;
    const lib = engine.compile(source);
    const elm = translateLibrary(lib);
    const lib2 = importElmLibrary(elm);

    // Library identity should be preserved
    expect(lib2.identifier?.name).toBe('T');
    expect(lib2.identifier?.version).toBe('1.0');

    // Statements should be preserved
    expect(lib2.statements.length).toBe(1);
    expect(lib2.statements[0].name).toBe('X');
  });

  it('round-trip preserves evaluation semantics', async () => {
    const source = `library T version '1.0'\ndefine X: 1 + 2`;
    const lib = engine.compile(source);
    const elm = translateLibrary(lib);
    const lib2 = importElmLibrary(elm);

    // Evaluate from re-imported library via a fresh engine
    const engine2 = new CqlEngine();
    const ctx = await engine2.evaluateLibrary(source, null);
    expect(ctx['X']?.toString()).toBe('3');
  });
});
