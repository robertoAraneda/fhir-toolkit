import { describe, it, expect } from 'vitest';
import {
  CqlSyntaxError,
  CqlEvalError,
  CqlTimeoutError,
  CqlTooCostlyError,
} from '../src/errors.js';
import { CqlEngine } from '../src/engine.js';

describe('CqlSyntaxError', () => {
  it('has correct name and message', () => {
    const err = new CqlSyntaxError('unexpected token', 3, 10);
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlSyntaxError');
    expect(err.message).toBe('[CQL-001] (line 3, col 10): unexpected token');
    expect(err.line).toBe(3);
    expect(err.column).toBe(10);
  });

  it('works without line/column', () => {
    const err = new CqlSyntaxError('bad syntax');
    expect(err.line).toBeUndefined();
    expect(err.column).toBeUndefined();
    expect(err.message).toBe('[CQL-001]: bad syntax');
  });

  it('has code CQL-001', () => {
    const err = new CqlSyntaxError('unexpected token', 3, 10);
    expect(err.code).toBe('CQL-001');
  });

  it('CqlSyntaxError thrown by engine has code CQL-001', () => {
    try {
      new CqlEngine().compile(`library T version '1.0'\ndefine "X":`);
      // If no error, fail explicitly
      expect(true).toBe(false);
    } catch (err) {
      expect(err).toBeInstanceOf(CqlSyntaxError);
      expect((err as CqlSyntaxError).code).toBe('CQL-001');
      expect((err as CqlSyntaxError).message).toContain('[CQL-001]');
    }
  });
});

describe('CqlEvalError', () => {
  it('has correct name and message', () => {
    const err = new CqlEvalError('division by zero');
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlEvalError');
    expect(err.message).toBe('[CQL-101] division by zero');
  });

  it('has code CQL-101', () => {
    const err = new CqlEvalError('division by zero');
    expect(err.code).toBe('CQL-101');
  });

  it('includes definition name in message when provided', () => {
    const err = new CqlEvalError('division by zero', 'MyDef');
    expect(err.definition).toBe('MyDef');
    expect(err.message).toContain("Definition 'MyDef' failed:");
    expect(err.message).toContain('[CQL-101]');
  });

  it('CqlEvalError thrown by engine has code CQL-101 when expression not found', async () => {
    const engine = new CqlEngine();
    try {
      await engine.evaluateExpression(
        `library T version '1.0'\ndefine "X": 1`,
        'DoesNotExist',
        null,
      );
      expect(true).toBe(false);
    } catch (err) {
      expect(err).toBeInstanceOf(CqlEvalError);
      expect((err as CqlEvalError).code).toBe('CQL-101');
    }
  });
});

describe('CqlTimeoutError', () => {
  it('has correct name and timeout', () => {
    const err = new CqlTimeoutError(30000);
    expect(err.name).toBe('CqlTimeoutError');
    expect(err.timeoutMs).toBe(30000);
    expect(err.message).toContain('30000');
  });

  it('has code CQL-201', () => {
    const err = new CqlTimeoutError(30000);
    expect(err.code).toBe('CQL-201');
    expect(err.message).toContain('[CQL-201]');
  });
});

describe('CqlTooCostlyError', () => {
  it('has correct name', () => {
    const err = new CqlTooCostlyError('expression too large');
    expect(err.name).toBe('CqlTooCostlyError');
    expect(err.message).toBe('[CQL-202] expression too large');
  });

  it('has code CQL-202', () => {
    const err = new CqlTooCostlyError('expression too large');
    expect(err.code).toBe('CQL-202');
  });
});
