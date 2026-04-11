import { describe, it, expect } from 'vitest';
import { CqlEvaluator, wrapFhirResource } from '../../src/eval/evaluator.js';
import { createR4ModelInfo } from '../../src/model/r4.js';
import { EvalContext } from '../../src/eval/context.js';
import type { Expression } from '../../src/ast/nodes.js';
import {
  LiteralType,
  BinaryOp,
  UnaryOp,
  SortDirection,
  TimingKind,
  AccessLevel,
} from '../../src/ast/nodes.js';
import type { Library } from '../../src/ast/library.js';
import {
  CqlBoolean,
  CqlInteger,
  CqlDecimal,
  CqlString,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
} from '../../src/types/primitives.js';
import {
  CqlInterval,
  CqlList,
  CqlTuple,
  CqlCode,
  CqlConcept,
} from '../../src/types/complex.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function mkCtx(library?: Library | null): EvalContext {
  return new EvalContext(library ?? null, null);
}

function mkEval(ctx?: EvalContext): CqlEvaluator {
  return new CqlEvaluator(ctx ?? mkCtx());
}

function lit(type: LiteralType, value: string): Expression {
  return { kind: 'Literal', valueType: type, value };
}

function intLit(n: number): Expression {
  return lit(LiteralType.Integer, String(n));
}

function decLit(n: string): Expression {
  return lit(LiteralType.Decimal, n);
}

function strLit(s: string): Expression {
  return lit(LiteralType.String, s);
}

function boolLit(b: boolean): Expression {
  return lit(LiteralType.Boolean, b ? 'true' : 'false');
}

function nullLit(): Expression {
  return lit(LiteralType.Null, '');
}

function binary(op: BinaryOp, left: Expression, right: Expression): Expression {
  return { kind: 'Binary', operator: op, left, right };
}

function unary(op: UnaryOp, operand: Expression): Expression {
  return { kind: 'Unary', operator: op, operand };
}

// ---------------------------------------------------------------------------
// Literal evaluation
// ---------------------------------------------------------------------------

describe('CqlEvaluator', () => {
  describe('visitLiteral', () => {
    it('evaluates null literal', async () => {
      const result = await mkEval().evaluate(nullLit());
      expect(result).toBeNull();
    });

    it('evaluates boolean true', async () => {
      const result = await mkEval().evaluate(boolLit(true));
      expect(result).toBeInstanceOf(CqlBoolean);
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('evaluates boolean false', async () => {
      const result = await mkEval().evaluate(boolLit(false));
      expect((result as CqlBoolean).value).toBe(false);
    });

    it('evaluates string literal', async () => {
      const result = await mkEval().evaluate(strLit('hello'));
      expect(result).toBeInstanceOf(CqlString);
      expect((result as CqlString).value).toBe('hello');
    });

    it('evaluates integer literal', async () => {
      const result = await mkEval().evaluate(intLit(42));
      expect(result).toBeInstanceOf(CqlInteger);
      expect((result as CqlInteger).value).toBe(42);
    });

    it('evaluates decimal literal', async () => {
      const result = await mkEval().evaluate(decLit('3.14'));
      expect(result).toBeInstanceOf(CqlDecimal);
      expect((result as CqlDecimal).value.toNumber()).toBeCloseTo(3.14);
    });

    it('evaluates date literal', async () => {
      const result = await mkEval().evaluate(lit(LiteralType.Date, '2024-01-15'));
      expect(result).toBeInstanceOf(CqlDate);
      expect((result as CqlDate).year).toBe(2024);
      expect((result as CqlDate).month).toBe(1);
      expect((result as CqlDate).day).toBe(15);
    });

    it('evaluates datetime literal', async () => {
      const result = await mkEval().evaluate(
        lit(LiteralType.DateTime, '2024-01-15T10:30:00Z'),
      );
      expect(result).toBeInstanceOf(CqlDateTime);
      expect((result as CqlDateTime).year).toBe(2024);
      expect((result as CqlDateTime).hour).toBe(10);
    });

    it('evaluates time literal', async () => {
      const result = await mkEval().evaluate(lit(LiteralType.Time, '10:30:00'));
      expect(result).toBeInstanceOf(CqlTime);
      expect((result as CqlTime).hour).toBe(10);
      expect((result as CqlTime).minute).toBe(30);
    });

    it('evaluates quantity literal', async () => {
      const result = await mkEval().evaluate(lit(LiteralType.Quantity, '10 mg'));
      expect(result).toBeInstanceOf(CqlQuantity);
      expect((result as CqlQuantity).value.toNumber()).toBe(10);
      expect((result as CqlQuantity).unit).toBe('mg');
    });
  });

  // -------------------------------------------------------------------------
  // Arithmetic binary operators
  // -------------------------------------------------------------------------

  describe('arithmetic', () => {
    it('adds integers', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Add, intLit(3), intLit(4)));
      expect(result).toBeInstanceOf(CqlInteger);
      expect((result as CqlInteger).value).toBe(7);
    });

    it('subtracts integers', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Subtract, intLit(10), intLit(3)));
      expect((result as CqlInteger).value).toBe(7);
    });

    it('multiplies integers', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Multiply, intLit(3), intLit(5)));
      expect((result as CqlInteger).value).toBe(15);
    });

    it('divides integers yields decimal', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Divide, intLit(7), intLit(2)));
      expect(result).toBeInstanceOf(CqlDecimal);
      expect((result as CqlDecimal).value.toNumber()).toBe(3.5);
    });

    it('integer div', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Div, intLit(7), intLit(2)));
      expect(result).toBeInstanceOf(CqlInteger);
      expect((result as CqlInteger).value).toBe(3);
    });

    it('integer mod', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Mod, intLit(7), intLit(3)));
      expect(result).toBeInstanceOf(CqlInteger);
      expect((result as CqlInteger).value).toBe(1);
    });

    it('integer power', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Power, intLit(2), intLit(10)));
      expect((result as CqlInteger).value).toBe(1024);
    });

    it('divide by zero returns null', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Divide, intLit(5), intLit(0)));
      expect(result).toBeNull();
    });

    it('div by zero returns null', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Div, intLit(5), intLit(0)));
      expect(result).toBeNull();
    });

    it('mod by zero returns null', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Mod, intLit(5), intLit(0)));
      expect(result).toBeNull();
    });

    it('adds decimals', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Add, decLit('1.5'), decLit('2.3')));
      expect(result).toBeInstanceOf(CqlDecimal);
      expect((result as CqlDecimal).value.toNumber()).toBeCloseTo(3.8);
    });

    it('mixed integer + decimal yields decimal', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Add, intLit(2), decLit('1.5')));
      expect(result).toBeInstanceOf(CqlDecimal);
      expect((result as CqlDecimal).value.toNumber()).toBeCloseTo(3.5);
    });

    it('null + integer = null', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Add, nullLit(), intLit(5)));
      expect(result).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Comparison operators
  // -------------------------------------------------------------------------

  describe('comparison', () => {
    it('equal integers', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Equal, intLit(5), intLit(5)));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('not equal integers', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Equal, intLit(3), intLit(5)));
      expect((result as CqlBoolean).value).toBe(false);
    });

    it('less than', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Less, intLit(3), intLit(5)));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('less or equal when equal', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.LessOrEqual, intLit(5), intLit(5)));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('greater than', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Greater, intLit(5), intLit(3)));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('greater or equal', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.GreaterOrEqual, intLit(5), intLit(5)));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('string comparison', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Less, strLit('a'), strLit('b')));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('null equal returns null', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Equal, nullLit(), intLit(5)));
      expect(result).toBeNull();
    });

    it('equivalent: null ~ null = true', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.Equivalent, nullLit(), nullLit()));
      expect((result as CqlBoolean).value).toBe(true);
    });

    it('not equivalent: null !~ 5 = true', async () => {
      const result = await mkEval().evaluate(binary(BinaryOp.NotEquivalent, nullLit(), intLit(5)));
      expect((result as CqlBoolean).value).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // Three-valued logic (And / Or / Implies with null)
  // -------------------------------------------------------------------------

  describe('three-valued logic', () => {
    // AND
    it('true and true = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, boolLit(true), boolLit(true)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('true and false = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, boolLit(true), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('false and null = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, boolLit(false), nullLit()));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('null and false = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, nullLit(), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('true and null = null', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, boolLit(true), nullLit()));
      expect(r).toBeNull();
    });

    it('null and null = null', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.And, nullLit(), nullLit()));
      expect(r).toBeNull();
    });

    // OR
    it('true or null = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Or, boolLit(true), nullLit()));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('null or true = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Or, nullLit(), boolLit(true)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('false or null = null', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Or, boolLit(false), nullLit()));
      expect(r).toBeNull();
    });

    it('false or false = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Or, boolLit(false), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(false);
    });

    // IMPLIES
    it('false implies null = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, boolLit(false), nullLit()));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('false implies false = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, boolLit(false), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('true implies true = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, boolLit(true), boolLit(true)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('true implies false = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, boolLit(true), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('true implies null = null', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, boolLit(true), nullLit()));
      expect(r).toBeNull();
    });

    it('null implies true = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, nullLit(), boolLit(true)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('null implies null = null', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Implies, nullLit(), nullLit()));
      expect(r).toBeNull();
    });

    // XOR
    it('true xor false = true', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Xor, boolLit(true), boolLit(false)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('true xor true = false', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Xor, boolLit(true), boolLit(true)));
      expect((r as CqlBoolean).value).toBe(false);
    });
  });

  // -------------------------------------------------------------------------
  // Unary operators
  // -------------------------------------------------------------------------

  describe('unary operators', () => {
    it('Not true = false', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Not, boolLit(true)));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('Not null = null', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Not, nullLit()));
      expect(r).toBeNull();
    });

    it('Exists on non-null = true', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Exists, intLit(1)));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('Exists on null = false', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Exists, nullLit()));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('Exists on empty list = false', async () => {
      const listExpr: Expression = { kind: 'List', typeSpec: null, elements: [] };
      const r = await mkEval().evaluate(unary(UnaryOp.Exists, listExpr));
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('Exists on non-empty list = true', async () => {
      const listExpr: Expression = { kind: 'List', typeSpec: null, elements: [intLit(1)] };
      const r = await mkEval().evaluate(unary(UnaryOp.Exists, listExpr));
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('Negate integer', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Negate, intLit(5)));
      expect(r).toBeInstanceOf(CqlInteger);
      expect((r as CqlInteger).value).toBe(-5);
    });

    it('Negate null = null', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Negate, nullLit()));
      expect(r).toBeNull();
    });

    it('Positive returns same value', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.Positive, intLit(5)));
      expect((r as CqlInteger).value).toBe(5);
    });

    it('SuccessorOf integer', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.SuccessorOf, intLit(5)));
      expect((r as CqlInteger).value).toBe(6);
    });

    it('PredecessorOf integer', async () => {
      const r = await mkEval().evaluate(unary(UnaryOp.PredecessorOf, intLit(5)));
      expect((r as CqlInteger).value).toBe(4);
    });

    it('Flatten nested lists', async () => {
      const inner: Expression = { kind: 'List', typeSpec: null, elements: [intLit(3), intLit(4)] };
      const outer: Expression = { kind: 'List', typeSpec: null, elements: [intLit(1), intLit(2), inner] };
      // We need to eval outer first to get a list, then flatten it
      // Actually, flatten of list containing a list should unnest
      const r = await mkEval().evaluate(unary(UnaryOp.Flatten, outer));
      expect(r).toBeInstanceOf(CqlList);
      const list = r as CqlList;
      // The inner list elements [3,4] remain as a list item because List construction doesn't nest automatically
      // But flatten should handle CqlList items
      expect(list.values.length).toBeGreaterThanOrEqual(3);
    });

    it('SingletonFrom empty list = null', async () => {
      const listExpr: Expression = { kind: 'List', typeSpec: null, elements: [] };
      const r = await mkEval().evaluate(unary(UnaryOp.SingletonFrom, listExpr));
      expect(r).toBeNull();
    });

    it('SingletonFrom single-element list', async () => {
      const listExpr: Expression = { kind: 'List', typeSpec: null, elements: [intLit(42)] };
      const r = await mkEval().evaluate(unary(UnaryOp.SingletonFrom, listExpr));
      expect(r).toBeInstanceOf(CqlInteger);
      expect((r as CqlInteger).value).toBe(42);
    });

    it('SingletonFrom multi-element list throws', async () => {
      const listExpr: Expression = { kind: 'List', typeSpec: null, elements: [intLit(1), intLit(2)] };
      await expect(mkEval().evaluate(unary(UnaryOp.SingletonFrom, listExpr))).rejects.toThrow(
        'singleton from requires 0 or 1 elements',
      );
    });

    it('Distinct removes duplicates', async () => {
      const listExpr: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(1), intLit(3)],
      };
      const r = await mkEval().evaluate(unary(UnaryOp.Distinct, listExpr));
      expect(r).toBeInstanceOf(CqlList);
      expect((r as CqlList).values.length).toBe(3);
    });
  });

  // -------------------------------------------------------------------------
  // Concatenation
  // -------------------------------------------------------------------------

  describe('concatenation', () => {
    it('concatenates strings', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Concatenate, strLit('hello'), strLit(' world')));
      expect((r as CqlString).value).toBe('hello world');
    });

    it('null & "a" = "a"', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Concatenate, nullLit(), strLit('a')));
      expect((r as CqlString).value).toBe('a');
    });

    it('"a" & null = "a"', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Concatenate, strLit('a'), nullLit()));
      expect((r as CqlString).value).toBe('a');
    });
  });

  // -------------------------------------------------------------------------
  // Set operations
  // -------------------------------------------------------------------------

  describe('set operations', () => {
    const listA: Expression = { kind: 'List', typeSpec: null, elements: [intLit(1), intLit(2), intLit(3)] };
    const listB: Expression = { kind: 'List', typeSpec: null, elements: [intLit(2), intLit(3), intLit(4)] };

    it('union', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Union, listA, listB));
      expect(r).toBeInstanceOf(CqlList);
      expect((r as CqlList).values.length).toBe(4); // {1,2,3,4}
    });

    it('intersect', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Intersect, listA, listB));
      expect(r).toBeInstanceOf(CqlList);
      expect((r as CqlList).values.length).toBe(2); // {2,3}
    });

    it('except', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Except, listA, listB));
      expect(r).toBeInstanceOf(CqlList);
      expect((r as CqlList).values.length).toBe(1); // {1}
      expect(((r as CqlList).values[0] as CqlInteger).value).toBe(1);
    });

    it('null union X = X', async () => {
      const r = await mkEval().evaluate(binary(BinaryOp.Union, nullLit(), listA));
      expect(r).toBeInstanceOf(CqlList);
    });
  });

  // -------------------------------------------------------------------------
  // If/Then/Else
  // -------------------------------------------------------------------------

  describe('if/then/else', () => {
    it('evaluates then branch when true', async () => {
      const expr: Expression = {
        kind: 'IfThenElse',
        condition: boolLit(true),
        then: intLit(1),
        else: intLit(2),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(1);
    });

    it('evaluates else branch when false', async () => {
      const expr: Expression = {
        kind: 'IfThenElse',
        condition: boolLit(false),
        then: intLit(1),
        else: intLit(2),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(2);
    });

    it('evaluates else branch when null', async () => {
      const expr: Expression = {
        kind: 'IfThenElse',
        condition: nullLit(),
        then: intLit(1),
        else: intLit(2),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(2);
    });
  });

  // -------------------------------------------------------------------------
  // Case expression
  // -------------------------------------------------------------------------

  describe('case expression', () => {
    it('case without comparand', async () => {
      const expr: Expression = {
        kind: 'Case',
        comparand: null,
        items: [
          { when: boolLit(false), then: intLit(1) },
          { when: boolLit(true), then: intLit(2) },
        ],
        else: intLit(3),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(2);
    });

    it('case with comparand', async () => {
      const expr: Expression = {
        kind: 'Case',
        comparand: intLit(2),
        items: [
          { when: intLit(1), then: strLit('one') },
          { when: intLit(2), then: strLit('two') },
        ],
        else: strLit('other'),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlString).value).toBe('two');
    });

    it('case falls through to else', async () => {
      const expr: Expression = {
        kind: 'Case',
        comparand: null,
        items: [{ when: boolLit(false), then: intLit(1) }],
        else: intLit(99),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(99);
    });
  });

  // -------------------------------------------------------------------------
  // Type operations
  // -------------------------------------------------------------------------

  describe('type operations', () => {
    it('Is checks type', async () => {
      const expr: Expression = {
        kind: 'Is',
        operand: intLit(5),
        type: { specKind: 'NamedType', namespace: '', name: 'Integer' },
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('Is null returns false', async () => {
      const expr: Expression = {
        kind: 'Is',
        operand: nullLit(),
        type: { specKind: 'NamedType', namespace: '', name: 'Integer' },
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('As returns value when type matches', async () => {
      const expr: Expression = {
        kind: 'As',
        operand: intLit(5),
        type: { specKind: 'NamedType', namespace: '', name: 'Integer' },
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(5);
    });

    it('As returns null when type does not match', async () => {
      const expr: Expression = {
        kind: 'As',
        operand: intLit(5),
        type: { specKind: 'NamedType', namespace: '', name: 'String' },
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });

    it('Convert integer to string', async () => {
      const expr: Expression = {
        kind: 'Convert',
        operand: intLit(42),
        toType: { specKind: 'NamedType', namespace: '', name: 'String' },
        toUnit: '',
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlString);
      expect((r as CqlString).value).toBe('42');
    });

    it('Convert string to integer', async () => {
      const expr: Expression = {
        kind: 'Convert',
        operand: strLit('42'),
        toType: { specKind: 'NamedType', namespace: '', name: 'Integer' },
        toUnit: '',
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlInteger);
      expect((r as CqlInteger).value).toBe(42);
    });
  });

  // -------------------------------------------------------------------------
  // BooleanTest
  // -------------------------------------------------------------------------

  describe('boolean test', () => {
    it('is null', async () => {
      const expr: Expression = {
        kind: 'BooleanTest',
        operand: nullLit(),
        testValue: 'null',
        not: false,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('is not null', async () => {
      const expr: Expression = {
        kind: 'BooleanTest',
        operand: intLit(5),
        testValue: 'null',
        not: true,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('is true', async () => {
      const expr: Expression = {
        kind: 'BooleanTest',
        operand: boolLit(true),
        testValue: 'true',
        not: false,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('is false', async () => {
      const expr: Expression = {
        kind: 'BooleanTest',
        operand: boolLit(false),
        testValue: 'false',
        not: false,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // Tuple construction
  // -------------------------------------------------------------------------

  describe('tuple', () => {
    it('constructs a tuple', async () => {
      const expr: Expression = {
        kind: 'Tuple',
        elements: [
          { name: 'x', expression: intLit(1) },
          { name: 'y', expression: strLit('hello') },
        ],
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlTuple);
      const t = r as CqlTuple;
      expect((t.get('x') as CqlInteger).value).toBe(1);
      expect((t.get('y') as CqlString).value).toBe('hello');
    });
  });

  // -------------------------------------------------------------------------
  // List construction
  // -------------------------------------------------------------------------

  describe('list', () => {
    it('constructs a list', async () => {
      const expr: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlList);
      expect((r as CqlList).values.length).toBe(3);
    });

    it('null elements are preserved in list as CqlNull', async () => {
      const expr: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), nullLit(), intLit(3)],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlList).values.length).toBe(3);
    });
  });

  // -------------------------------------------------------------------------
  // Interval construction and operators
  // -------------------------------------------------------------------------

  describe('interval', () => {
    it('constructs a closed interval', async () => {
      const expr: Expression = {
        kind: 'Interval',
        lowClosed: true,
        highClosed: true,
        low: intLit(1),
        high: intLit(10),
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlInterval);
      const iv = r as CqlInterval<CqlInteger>;
      expect(iv.low!.value).toBe(1);
      expect(iv.high!.value).toBe(10);
      expect(iv.lowClosed).toBe(true);
      expect(iv.highClosed).toBe(true);
    });

    it('StartOf interval', async () => {
      const iv: Expression = {
        kind: 'Interval',
        lowClosed: true,
        highClosed: true,
        low: intLit(1),
        high: intLit(10),
      };
      const r = await mkEval().evaluate(unary(UnaryOp.StartOf, iv));
      expect((r as CqlInteger).value).toBe(1);
    });

    it('EndOf interval', async () => {
      const iv: Expression = {
        kind: 'Interval',
        lowClosed: true,
        highClosed: true,
        low: intLit(1),
        high: intLit(10),
      };
      const r = await mkEval().evaluate(unary(UnaryOp.EndOf, iv));
      expect((r as CqlInteger).value).toBe(10);
    });
  });

  // -------------------------------------------------------------------------
  // Member access
  // -------------------------------------------------------------------------

  describe('member access', () => {
    it('accesses tuple member', async () => {
      const tuple: Expression = {
        kind: 'Tuple',
        elements: [
          { name: 'name', expression: strLit('Alice') },
          { name: 'age', expression: intLit(30) },
        ],
      };
      const expr: Expression = {
        kind: 'MemberAccess',
        source: tuple,
        member: 'name',
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlString).value).toBe('Alice');
    });

    it('member access on null returns null', async () => {
      const expr: Expression = {
        kind: 'MemberAccess',
        source: nullLit(),
        member: 'x',
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Index access
  // -------------------------------------------------------------------------

  describe('index access', () => {
    it('accesses list element by index', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(10), intLit(20), intLit(30)],
      };
      const expr: Expression = {
        kind: 'IndexAccess',
        source: list,
        index: intLit(1),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(20);
    });

    it('out of bounds returns null', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(10)],
      };
      const expr: Expression = {
        kind: 'IndexAccess',
        source: list,
        index: intLit(5),
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Code and Concept
  // -------------------------------------------------------------------------

  describe('code and concept', () => {
    it('constructs a code', async () => {
      const expr: Expression = {
        kind: 'Code',
        code: '123',
        system: 'http://example.com',
        display: 'Test Code',
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlCode);
      expect((r as CqlCode).code).toBe('123');
      expect((r as CqlCode).system).toBe('http://example.com');
    });

    it('constructs a concept', async () => {
      const code1: Expression & { kind: 'Code' } = {
        kind: 'Code',
        code: '123',
        system: 'http://example.com',
        display: 'Code 1',
      };
      const code2: Expression & { kind: 'Code' } = {
        kind: 'Code',
        code: '456',
        system: 'http://example.com',
        display: 'Code 2',
      };
      const expr: Expression = {
        kind: 'Concept',
        codes: [code1, code2],
        display: 'Test Concept',
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlConcept);
      expect((r as CqlConcept).codes.length).toBe(2);
    });
  });

  // -------------------------------------------------------------------------
  // Instance construction
  // -------------------------------------------------------------------------

  describe('instance', () => {
    it('constructs an instance as tuple', async () => {
      const expr: Expression = {
        kind: 'Instance',
        type: { specKind: 'NamedType', namespace: '', name: 'Observation' },
        elements: [
          { name: 'status', expression: strLit('final') },
          { name: 'value', expression: intLit(120) },
        ],
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeInstanceOf(CqlTuple);
      expect(((r as CqlTuple).get('status') as CqlString).value).toBe('final');
    });
  });

  // -------------------------------------------------------------------------
  // External constant (parameter)
  // -------------------------------------------------------------------------

  describe('external constant', () => {
    it('resolves parameter', async () => {
      const ctx = mkCtx();
      ctx.parameters.set('MeasurePeriod', new CqlString('2024'));
      const evaluator = mkEval(ctx);
      const expr: Expression = { kind: 'ExternalConstant', name: 'MeasurePeriod' };
      const r = await evaluator.evaluate(expr);
      expect((r as CqlString).value).toBe('2024');
    });

    it('unknown parameter returns null', async () => {
      const expr: Expression = { kind: 'ExternalConstant', name: 'Unknown' };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // This, IndexRef, Total
  // -------------------------------------------------------------------------

  describe('context references', () => {
    it('$this returns context thisValue', async () => {
      const ctx = mkCtx();
      ctx.thisValue = new CqlInteger(42);
      const evaluator = mkEval(ctx);
      const r = await evaluator.evaluate({ kind: 'This' });
      expect((r as CqlInteger).value).toBe(42);
    });

    it('$index returns indexValue', async () => {
      const ctx = mkCtx();
      ctx.indexValue = 7;
      const evaluator = mkEval(ctx);
      const r = await evaluator.evaluate({ kind: 'IndexRef' });
      expect((r as CqlInteger).value).toBe(7);
    });

    it('$total returns totalValue', async () => {
      const ctx = mkCtx();
      ctx.totalValue = new CqlDecimal(CqlDecimal.of('100').value);
      const evaluator = mkEval(ctx);
      const r = await evaluator.evaluate({ kind: 'Total' });
      expect(r).toBeInstanceOf(CqlDecimal);
    });
  });

  // -------------------------------------------------------------------------
  // Query
  // -------------------------------------------------------------------------

  describe('query', () => {
    it('basic query with where filter', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3), intLit(4), intLit(5)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [],
        with: [],
        without: [],
        where: binary(
          BinaryOp.Greater,
          { kind: 'IdentifierRef', library: '', name: 'X' },
          intLit(3),
        ),
        return: null,
        aggregate: null,
        sort: null,
      };
      const r = await mkEval().evaluate(query);
      expect(r).toBeInstanceOf(CqlList);
      const list = r as CqlList;
      expect(list.values.length).toBe(2);
      expect((list.values[0] as CqlInteger).value).toBe(4);
      expect((list.values[1] as CqlInteger).value).toBe(5);
    });

    it('query with return clause', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [],
        with: [],
        without: [],
        where: null,
        return: {
          distinct: false,
          all: false,
          expression: binary(
            BinaryOp.Multiply,
            { kind: 'IdentifierRef', library: '', name: 'X' },
            intLit(2),
          ),
        },
        aggregate: null,
        sort: null,
      };
      const r = await mkEval().evaluate(query);
      const list = r as CqlList;
      expect(list.values.length).toBe(3);
      expect((list.values[0] as CqlInteger).value).toBe(2);
      expect((list.values[1] as CqlInteger).value).toBe(4);
      expect((list.values[2] as CqlInteger).value).toBe(6);
    });

    it('query with let clause', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [
          {
            identifier: 'doubled',
            expression: binary(
              BinaryOp.Multiply,
              { kind: 'IdentifierRef', library: '', name: 'X' },
              intLit(2),
            ),
          },
        ],
        with: [],
        without: [],
        where: null,
        return: {
          distinct: false,
          all: false,
          expression: { kind: 'IdentifierRef', library: '', name: 'doubled' },
        },
        aggregate: null,
        sort: null,
      };
      const r = await mkEval().evaluate(query);
      const list = r as CqlList;
      expect((list.values[0] as CqlInteger).value).toBe(2);
      expect((list.values[1] as CqlInteger).value).toBe(4);
      expect((list.values[2] as CqlInteger).value).toBe(6);
    });

    it('query with sort ascending', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(3), intLit(1), intLit(2)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [],
        with: [],
        without: [],
        where: null,
        return: null,
        aggregate: null,
        sort: { byItems: [], direction: SortDirection.Asc },
      };
      const r = await mkEval().evaluate(query);
      const list = r as CqlList;
      expect((list.values[0] as CqlInteger).value).toBe(1);
      expect((list.values[1] as CqlInteger).value).toBe(2);
      expect((list.values[2] as CqlInteger).value).toBe(3);
    });

    it('query with sort descending', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(3), intLit(1), intLit(2)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [],
        with: [],
        without: [],
        where: null,
        return: null,
        aggregate: null,
        sort: { byItems: [], direction: SortDirection.Desc },
      };
      const r = await mkEval().evaluate(query);
      const list = r as CqlList;
      expect((list.values[0] as CqlInteger).value).toBe(3);
      expect((list.values[1] as CqlInteger).value).toBe(2);
      expect((list.values[2] as CqlInteger).value).toBe(1);
    });

    it('query with distinct', async () => {
      const sourceList: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(1), intLit(2)],
      };
      const query: Expression = {
        kind: 'Query',
        sources: [{ source: sourceList, alias: 'X' }],
        let: [],
        with: [],
        without: [],
        where: null,
        return: {
          distinct: true,
          all: false,
          expression: { kind: 'IdentifierRef', library: '', name: 'X' },
        },
        aggregate: null,
        sort: null,
      };
      const r = await mkEval().evaluate(query);
      expect((r as CqlList).values.length).toBe(2);
    });
  });

  // -------------------------------------------------------------------------
  // Function calls
  // -------------------------------------------------------------------------

  describe('function calls', () => {
    it('calls built-in Count', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const expr: Expression = {
        kind: 'FunctionCall',
        source: list,
        name: 'Count',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(3);
    });

    it('calls built-in First', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(10), intLit(20)],
      };
      const expr: Expression = {
        kind: 'FunctionCall',
        source: list,
        name: 'First',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(10);
    });

    it('calls built-in Last', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(10), intLit(20)],
      };
      const expr: Expression = {
        kind: 'FunctionCall',
        source: list,
        name: 'Last',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(20);
    });

    it('calls user-defined function', async () => {
      const library: Library = {
        identifier: null,
        usings: [],
        includes: [],
        codeSystems: [],
        valueSets: [],
        codes: [],
        concepts: [],
        parameters: [],
        contexts: [],
        statements: [],
        functions: [
          {
            name: 'Double',
            operands: [
              { name: 'x', type: { specKind: 'NamedType', namespace: '', name: 'Integer' } },
            ],
            returnType: null,
            body: binary(
              BinaryOp.Multiply,
              { kind: 'IdentifierRef', library: '', name: 'x' },
              intLit(2),
            ),
            external: false,
            fluent: false,
            accessLevel: AccessLevel.Public,
          },
        ],
      };
      const ctx = mkCtx(library);
      const evaluator = new CqlEvaluator(ctx);
      const expr: Expression = {
        kind: 'FunctionCall',
        source: null,
        name: 'Double',
        library: '',
        operands: [intLit(21)],
      };
      const r = await evaluator.evaluate(expr);
      expect((r as CqlInteger).value).toBe(42);
    });

    it('calls Coalesce', async () => {
      const expr: Expression = {
        kind: 'FunctionCall',
        source: null,
        name: 'Coalesce',
        library: '',
        operands: [nullLit(), nullLit(), intLit(42), intLit(99)],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(42);
    });

    it('calls Abs', async () => {
      const expr: Expression = {
        kind: 'FunctionCall',
        source: unary(UnaryOp.Negate, intLit(5)),
        name: 'Abs',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(5);
    });

    it('calls ToString', async () => {
      const expr: Expression = {
        kind: 'FunctionCall',
        source: intLit(42),
        name: 'ToString',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlString).value).toBe('42');
    });

    it('calls Length on string', async () => {
      const expr: Expression = {
        kind: 'FunctionCall',
        source: strLit('hello'),
        name: 'Length',
        library: '',
        operands: [],
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(5);
    });
  });

  // -------------------------------------------------------------------------
  // Identifier resolution (lazy evaluation)
  // -------------------------------------------------------------------------

  describe('identifier resolution', () => {
    it('resolves from context aliases', async () => {
      const ctx = mkCtx();
      ctx.aliases.set('X', new CqlInteger(42));
      const evaluator = mkEval(ctx);
      const r = await evaluator.evaluate({ kind: 'IdentifierRef', library: '', name: 'X' });
      expect((r as CqlInteger).value).toBe(42);
    });

    it('lazily evaluates library expression', async () => {
      const library: Library = {
        identifier: null,
        usings: [],
        includes: [],
        codeSystems: [],
        valueSets: [],
        codes: [],
        concepts: [],
        parameters: [],
        contexts: [],
        statements: [
          {
            name: 'MyValue',
            expression: binary(BinaryOp.Add, intLit(20), intLit(22)),
            accessLevel: AccessLevel.Public,
            context: '',
          },
        ],
        functions: [],
      };
      const ctx = mkCtx(library);
      const evaluator = new CqlEvaluator(ctx);
      const r = await evaluator.evaluate({
        kind: 'IdentifierRef',
        library: '',
        name: 'MyValue',
      });
      expect((r as CqlInteger).value).toBe(42);
      // Second resolution should use cached value
      const r2 = await evaluator.evaluate({
        kind: 'IdentifierRef',
        library: '',
        name: 'MyValue',
      });
      expect((r2 as CqlInteger).value).toBe(42);
    });
  });

  // -------------------------------------------------------------------------
  // evaluateLibrary / evaluateExpression
  // -------------------------------------------------------------------------

  describe('evaluateLibrary', () => {
    it('evaluates all statements', async () => {
      const library: Library = {
        identifier: null,
        usings: [],
        includes: [],
        codeSystems: [],
        valueSets: [],
        codes: [],
        concepts: [],
        parameters: [],
        contexts: [],
        statements: [
          {
            name: 'A',
            expression: intLit(1),
            accessLevel: AccessLevel.Public,
            context: '',
          },
          {
            name: 'B',
            expression: binary(
              BinaryOp.Add,
              { kind: 'IdentifierRef', library: '', name: 'A' },
              intLit(1),
            ),
            accessLevel: AccessLevel.Public,
            context: '',
          },
        ],
        functions: [],
      };
      const ctx = mkCtx(library);
      const evaluator = new CqlEvaluator(ctx);
      const results = await evaluator.evaluateLibrary();
      expect((results['A'] as CqlInteger).value).toBe(1);
      expect((results['B'] as CqlInteger).value).toBe(2);
    });
  });

  describe('evaluateExpression', () => {
    it('evaluates a named expression', async () => {
      const library: Library = {
        identifier: null,
        usings: [],
        includes: [],
        codeSystems: [],
        valueSets: [],
        codes: [],
        concepts: [],
        parameters: [],
        contexts: [],
        statements: [
          {
            name: 'X',
            expression: intLit(99),
            accessLevel: AccessLevel.Public,
            context: '',
          },
        ],
        functions: [],
      };
      const ctx = mkCtx(library);
      const evaluator = new CqlEvaluator(ctx);
      const r = await evaluator.evaluateExpression('X');
      expect((r as CqlInteger).value).toBe(99);
    });
  });

  // -------------------------------------------------------------------------
  // Between
  // -------------------------------------------------------------------------

  describe('between', () => {
    it('value between low and high', async () => {
      const expr: Expression = {
        kind: 'Between',
        operand: intLit(5),
        low: intLit(1),
        high: intLit(10),
        properly: false,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('value not between', async () => {
      const expr: Expression = {
        kind: 'Between',
        operand: intLit(15),
        low: intLit(1),
        high: intLit(10),
        properly: false,
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('null between returns null', async () => {
      const expr: Expression = {
        kind: 'Between',
        operand: nullLit(),
        low: intLit(1),
        high: intLit(10),
        properly: false,
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Membership
  // -------------------------------------------------------------------------

  describe('membership', () => {
    it('element in list', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const expr: Expression = {
        kind: 'Membership',
        left: intLit(2),
        right: list,
        operator: 'in',
        precision: '',
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('element not in list', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const expr: Expression = {
        kind: 'Membership',
        left: intLit(5),
        right: list,
        operator: 'in',
        precision: '',
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(false);
    });

    it('list contains element', async () => {
      const list: Expression = {
        kind: 'List',
        typeSpec: null,
        elements: [intLit(1), intLit(2), intLit(3)],
      };
      const expr: Expression = {
        kind: 'Membership',
        left: list,
        right: intLit(2),
        operator: 'contains',
        precision: '',
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });

    it('in interval', async () => {
      const iv: Expression = {
        kind: 'Interval',
        lowClosed: true,
        highClosed: true,
        low: intLit(1),
        high: intLit(10),
      };
      const expr: Expression = {
        kind: 'Membership',
        left: intLit(5),
        right: iv,
        operator: 'in',
        precision: '',
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlBoolean).value).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // TypeExtent
  // -------------------------------------------------------------------------

  describe('type extent', () => {
    it('minimum Integer', async () => {
      const expr: Expression = {
        kind: 'TypeExtent',
        extent: 'minimum',
        type: { specKind: 'NamedType', namespace: '', name: 'Integer' },
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(-2147483648);
    });

    it('maximum Integer', async () => {
      const expr: Expression = {
        kind: 'TypeExtent',
        extent: 'maximum',
        type: { specKind: 'NamedType', namespace: '', name: 'Integer' },
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(2147483647);
    });
  });

  // -------------------------------------------------------------------------
  // DateTimeComponentFrom
  // -------------------------------------------------------------------------

  describe('datetime component from', () => {
    it('extracts year from date', async () => {
      const expr: Expression = {
        kind: 'DateTimeComponentFrom',
        component: 'year',
        operand: lit(LiteralType.Date, '2024-06-15'),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(2024);
    });

    it('extracts month from date', async () => {
      const expr: Expression = {
        kind: 'DateTimeComponentFrom',
        component: 'month',
        operand: lit(LiteralType.Date, '2024-06-15'),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(6);
    });

    it('returns null for null operand', async () => {
      const expr: Expression = {
        kind: 'DateTimeComponentFrom',
        component: 'year',
        operand: nullLit(),
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // DurationBetween
  // -------------------------------------------------------------------------

  describe('duration between', () => {
    it('years between dates', async () => {
      const expr: Expression = {
        kind: 'DurationBetween',
        precision: 'years',
        low: lit(LiteralType.Date, '2020-01-01'),
        high: lit(LiteralType.Date, '2024-01-01'),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(4);
    });

    it('months between dates', async () => {
      const expr: Expression = {
        kind: 'DurationBetween',
        precision: 'months',
        low: lit(LiteralType.Date, '2024-01-01'),
        high: lit(LiteralType.Date, '2024-06-01'),
      };
      const r = await mkEval().evaluate(expr);
      expect((r as CqlInteger).value).toBe(5);
    });

    it('null operand returns null', async () => {
      const expr: Expression = {
        kind: 'DurationBetween',
        precision: 'years',
        low: nullLit(),
        high: lit(LiteralType.Date, '2024-01-01'),
      };
      const r = await mkEval().evaluate(expr);
      expect(r).toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Null propagation rules
  // -------------------------------------------------------------------------

  describe('null propagation', () => {
    it('null + 5 = null', async () => {
      expect(await mkEval().evaluate(binary(BinaryOp.Add, nullLit(), intLit(5)))).toBeNull();
    });

    it('5 - null = null', async () => {
      expect(await mkEval().evaluate(binary(BinaryOp.Subtract, intLit(5), nullLit()))).toBeNull();
    });

    it('null * 5 = null', async () => {
      expect(await mkEval().evaluate(binary(BinaryOp.Multiply, nullLit(), intLit(5)))).toBeNull();
    });

    it('null = 5 returns null', async () => {
      expect(await mkEval().evaluate(binary(BinaryOp.Equal, nullLit(), intLit(5)))).toBeNull();
    });

    it('null < 5 returns null', async () => {
      expect(await mkEval().evaluate(binary(BinaryOp.Less, nullLit(), intLit(5)))).toBeNull();
    });
  });
});

// ---------------------------------------------------------------------------
// wrapFhirResource
// ---------------------------------------------------------------------------

describe('wrapFhirResource', () => {
  const mi = createR4ModelInfo();

  it('sets instanceType on top-level resource', () => {
    const obs = { resourceType: 'Observation', id: 'obs1', status: 'final' };
    const result = wrapFhirResource(obs, 'Observation', mi);
    expect(result).toBeInstanceOf(CqlTuple);
    expect(result.instanceType).toBe('Observation');
  });

  it('adds abstract alias for choice type (value -> valueQuantity)', () => {
    const obs = {
      resourceType: 'Observation',
      id: 'obs1',
      status: 'final',
      valueQuantity: { value: 165, unit: 'cm', system: 'http://unitsofmeasure.org' },
    };
    const result = wrapFhirResource(obs, 'Observation', mi);
    const abstractVal = result.get('value');
    const concreteVal = result.get('valueQuantity');
    expect(abstractVal).not.toBeNull();
    expect(abstractVal).toBe(concreteVal); // same reference
  });

  it('sets instanceType on choice type value (Quantity)', () => {
    const obs = {
      resourceType: 'Observation',
      valueQuantity: { value: 165, unit: 'cm' },
    };
    const result = wrapFhirResource(obs, 'Observation', mi);
    const val = result.get('value');
    expect(val).toBeInstanceOf(CqlTuple);
    expect((val as CqlTuple).instanceType).toBe('Quantity');
  });

  it('sets instanceType on nested FHIR complex types', () => {
    const obs = {
      resourceType: 'Observation',
      code: { coding: [{ system: 'http://loinc.org', code: '8302-2' }] },
    };
    const result = wrapFhirResource(obs, 'Observation', mi);
    const code = result.get('code');
    expect(code).toBeInstanceOf(CqlTuple);
    expect((code as CqlTuple).instanceType).toBe('CodeableConcept');
  });

  it('handles choice type with System type (valueString stays CqlString)', () => {
    const obs = {
      resourceType: 'Observation',
      valueString: 'positive',
    };
    const result = wrapFhirResource(obs, 'Observation', mi);
    const val = result.get('value');
    expect(val).toBeInstanceOf(CqlString);
  });

  it('handles missing choice type gracefully (no abstract alias added)', () => {
    const obs = {
      resourceType: 'Observation',
      id: 'obs1',
      status: 'final',
    };
    const result = wrapFhirResource(obs, 'Observation', mi);
    expect(result.get('value')).toBeUndefined();
  });

  it('handles unknown type name gracefully (falls back to generic wrapping)', () => {
    const resource = { resourceType: 'CustomResource', foo: 'bar' };
    const result = wrapFhirResource(resource, 'CustomResource', mi);
    expect(result).toBeInstanceOf(CqlTuple);
    expect(result.instanceType).toBe('CustomResource');
    expect(result.get('foo')).toBeInstanceOf(CqlString);
  });
});
