import { describe, it, expect, beforeEach } from 'vitest';
import { FunctionRegistry, registerStringFunctions } from '../../src/funcs/index.js';
import { CqlBoolean, CqlInteger, CqlString } from '../../src/types/index.js';
import { CqlList } from '../../src/types/index.js';

describe('string functions', () => {
  let registry: FunctionRegistry;
  const ctx = null as any;

  beforeEach(() => {
    registry = new FunctionRegistry();
    registerStringFunctions(registry);
  });

  const call = (name: string, ...args: any[]) =>
    registry.resolve(name)!(args, ctx);

  it('Upper converts to uppercase', () => {
    expect(call('Upper', new CqlString('hello'))).toEqual(new CqlString('HELLO'));
  });

  it('Upper returns null for null', () => {
    expect(call('Upper', null)).toBeNull();
  });

  it('Lower converts to lowercase', () => {
    expect(call('Lower', new CqlString('HELLO'))).toEqual(new CqlString('hello'));
  });

  it('Length returns string length', () => {
    expect(call('Length', new CqlString('abc'))).toEqual(new CqlInteger(3));
  });

  it('Length returns 0 for null (list semantics)', () => {
    expect(call('Length', null)).toEqual(new CqlInteger(0));
  });

  it('StartsWith checks prefix', () => {
    expect(call('StartsWith', new CqlString('hello world'), new CqlString('hello'))).toEqual(CqlBoolean.TRUE);
    expect(call('StartsWith', new CqlString('hello'), new CqlString('world'))).toEqual(CqlBoolean.FALSE);
  });

  it('StartsWith returns null for null args', () => {
    expect(call('StartsWith', null, new CqlString('a'))).toBeNull();
  });

  it('EndsWith checks suffix', () => {
    expect(call('EndsWith', new CqlString('hello world'), new CqlString('world'))).toEqual(CqlBoolean.TRUE);
  });

  it('Substring extracts substring', () => {
    expect(call('Substring', new CqlString('abcdef'), new CqlInteger(2), new CqlInteger(3))).toEqual(new CqlString('cde'));
  });

  it('Substring without length takes rest', () => {
    expect(call('Substring', new CqlString('abcdef'), new CqlInteger(3))).toEqual(new CqlString('def'));
  });

  it('Substring out of range returns null', () => {
    expect(call('Substring', new CqlString('abc'), new CqlInteger(10))).toBeNull();
  });

  it('IndexOf finds substring', () => {
    expect(call('IndexOf', new CqlString('hello world'), new CqlString('world'))).toEqual(new CqlInteger(6));
  });

  it('IndexOf returns -1 when not found', () => {
    expect(call('IndexOf', new CqlString('hello'), new CqlString('xyz'))).toEqual(new CqlInteger(-1));
  });

  it('PositionOf finds first occurrence', () => {
    expect(call('PositionOf', new CqlString('ll'), new CqlString('hello'))).toEqual(new CqlInteger(2));
  });

  it('LastPositionOf finds last occurrence', () => {
    expect(call('LastPositionOf', new CqlString('l'), new CqlString('hello'))).toEqual(new CqlInteger(3));
  });

  it('Matches checks full match', () => {
    expect(call('Matches', new CqlString('abc'), new CqlString('a.c'))).toEqual(CqlBoolean.TRUE);
    expect(call('Matches', new CqlString('abc'), new CqlString('a.d'))).toEqual(CqlBoolean.FALSE);
  });

  it('Matches returns null for null args', () => {
    expect(call('Matches', null, new CqlString('a'))).toBeNull();
  });

  it('ReplaceMatches replaces pattern', () => {
    expect(call('ReplaceMatches', new CqlString('abc123'), new CqlString('\\d+'), new CqlString('NUM'))).toEqual(new CqlString('abcNUM'));
  });

  it('Combine joins list with separator', () => {
    const list = new CqlList([new CqlString('a'), new CqlString('b'), new CqlString('c')]);
    expect(call('Combine', list, new CqlString(', '))).toEqual(new CqlString('a, b, c'));
  });

  it('Combine with no separator uses empty string', () => {
    const list = new CqlList([new CqlString('a'), new CqlString('b')]);
    expect(call('Combine', list)).toEqual(new CqlString('ab'));
  });

  it('Split splits string', () => {
    const result = call('Split', new CqlString('a,b,c'), new CqlString(','));
    expect(result).toEqual(new CqlList([new CqlString('a'), new CqlString('b'), new CqlString('c')]));
  });
});
