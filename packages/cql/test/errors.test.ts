import { describe, it, expect } from 'vitest';
import {
  CqlSyntaxError,
  CqlEvalError,
  CqlTimeoutError,
  CqlTooCostlyError,
} from '../src/errors.js';

describe('CqlSyntaxError', () => {
  it('has correct name and message', () => {
    const err = new CqlSyntaxError('unexpected token', 3, 10);
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlSyntaxError');
    expect(err.message).toBe('unexpected token');
    expect(err.line).toBe(3);
    expect(err.column).toBe(10);
  });

  it('works without line/column', () => {
    const err = new CqlSyntaxError('bad syntax');
    expect(err.line).toBeUndefined();
    expect(err.column).toBeUndefined();
  });
});

describe('CqlEvalError', () => {
  it('has correct name and message', () => {
    const err = new CqlEvalError('division by zero');
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlEvalError');
    expect(err.message).toBe('division by zero');
  });
});

describe('CqlTimeoutError', () => {
  it('has correct name and timeout', () => {
    const err = new CqlTimeoutError(30000);
    expect(err.name).toBe('CqlTimeoutError');
    expect(err.timeoutMs).toBe(30000);
    expect(err.message).toContain('30000');
  });
});

describe('CqlTooCostlyError', () => {
  it('has correct name', () => {
    const err = new CqlTooCostlyError('expression too large');
    expect(err.name).toBe('CqlTooCostlyError');
    expect(err.message).toBe('expression too large');
  });
});
