import { describe, it, expect } from 'vitest';
import { visit } from '../../src/eval/visitor.js';
import type { ExpressionVisitor } from '../../src/eval/visitor.js';
import type { Expression } from '../../src/ast/nodes.js';
import { LiteralType, BinaryOp, UnaryOp, TimingKind } from '../../src/ast/nodes.js';

// ---------------------------------------------------------------------------
// A simple node-counting visitor: returns 1 for leaves, recurses for compounds
// ---------------------------------------------------------------------------

const countingVisitor: ExpressionVisitor<number> = {
  visitLiteral: () => 1,
  visitIdentifierRef: () => 1,
  visitExternalConstant: () => 1,
  visitThis: () => 1,
  visitIndexRef: () => 1,
  visitTotal: () => 1,
  visitCode: () => 1,
  visitTypeExtent: () => 1,

  visitBinary: (expr) =>
    1 + visit(expr.left, countingVisitor) + visit(expr.right, countingVisitor),
  visitUnary: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitIfThenElse: (expr) =>
    1 +
    visit(expr.condition, countingVisitor) +
    visit(expr.then, countingVisitor) +
    visit(expr.else, countingVisitor),
  visitCase: (expr) => {
    let n = 1 + visit(expr.else, countingVisitor);
    if (expr.comparand) n += visit(expr.comparand, countingVisitor);
    for (const item of expr.items) {
      n += visit(item.when, countingVisitor) + visit(item.then, countingVisitor);
    }
    return n;
  },
  visitIs: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitAs: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitCast: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitConvert: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitBooleanTest: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitFunctionCall: (expr) => {
    let n = 1;
    if (expr.source) n += visit(expr.source, countingVisitor);
    for (const op of expr.operands) n += visit(op, countingVisitor);
    return n;
  },
  visitMemberAccess: (expr) => 1 + visit(expr.source, countingVisitor),
  visitIndexAccess: (expr) =>
    1 + visit(expr.source, countingVisitor) + visit(expr.index, countingVisitor),
  visitRetrieve: (expr) => {
    let n = 1;
    if (expr.codes) n += visit(expr.codes, countingVisitor);
    if (expr.context) n += visit(expr.context, countingVisitor);
    if (expr.dateRange) n += visit(expr.dateRange, countingVisitor);
    return n;
  },
  visitQuery: (expr) => {
    let n = 1;
    for (const s of expr.sources) n += visit(s.source, countingVisitor);
    for (const l of expr.let) n += visit(l.expression, countingVisitor);
    for (const w of expr.with) n += visit(w.source.source, countingVisitor) + visit(w.condition, countingVisitor);
    for (const w of expr.without) n += visit(w.source.source, countingVisitor) + visit(w.condition, countingVisitor);
    if (expr.where) n += visit(expr.where, countingVisitor);
    if (expr.return) n += visit(expr.return.expression, countingVisitor);
    if (expr.aggregate) {
      n += visit(expr.aggregate.expression, countingVisitor);
      if (expr.aggregate.starting) n += visit(expr.aggregate.starting, countingVisitor);
    }
    if (expr.sort) {
      for (const item of expr.sort.byItems) n += visit(item.expression, countingVisitor);
    }
    return n;
  },
  visitInterval: (expr) =>
    1 + visit(expr.low, countingVisitor) + visit(expr.high, countingVisitor),
  visitTuple: (expr) => {
    let n = 1;
    for (const el of expr.elements) n += visit(el.expression, countingVisitor);
    return n;
  },
  visitList: (expr) => {
    let n = 1;
    for (const el of expr.elements) n += visit(el, countingVisitor);
    return n;
  },
  visitInstance: (expr) => {
    let n = 1;
    for (const el of expr.elements) n += visit(el.expression, countingVisitor);
    return n;
  },
  visitConcept: (expr) => {
    let n = 1;
    for (const c of expr.codes) n += visit(c, countingVisitor);
    return n;
  },
  visitMembership: (expr) =>
    1 + visit(expr.left, countingVisitor) + visit(expr.right, countingVisitor),
  visitBetween: (expr) =>
    1 + visit(expr.operand, countingVisitor) + visit(expr.low, countingVisitor) + visit(expr.high, countingVisitor),
  visitDurationBetween: (expr) =>
    1 + visit(expr.low, countingVisitor) + visit(expr.high, countingVisitor),
  visitDifferenceBetween: (expr) =>
    1 + visit(expr.low, countingVisitor) + visit(expr.high, countingVisitor),
  visitDateTimeComponentFrom: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitDurationOf: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitDifferenceOf: (expr) => 1 + visit(expr.operand, countingVisitor),
  visitTiming: (expr) =>
    1 + visit(expr.left, countingVisitor) + visit(expr.right, countingVisitor),
  visitSetAggregate: (expr) => {
    let n = 1 + visit(expr.operand, countingVisitor);
    if (expr.per) n += visit(expr.per, countingVisitor);
    return n;
  },
};

// ---------------------------------------------------------------------------
// Helper factories
// ---------------------------------------------------------------------------

function lit(value: string): Expression {
  return { kind: 'Literal', valueType: LiteralType.Integer, value };
}

function binaryAdd(left: Expression, right: Expression): Expression {
  return { kind: 'Binary', operator: BinaryOp.Add, left, right };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('visit()', () => {
  it('dispatches Literal to visitLiteral', () => {
    expect(visit(lit('42'), countingVisitor)).toBe(1);
  });

  it('dispatches IdentifierRef to visitIdentifierRef', () => {
    const expr: Expression = { kind: 'IdentifierRef', library: '', name: 'x' };
    expect(visit(expr, countingVisitor)).toBe(1);
  });

  it('dispatches Binary and recurses into children', () => {
    const expr = binaryAdd(lit('1'), lit('2'));
    // 1 (Binary) + 1 (left Literal) + 1 (right Literal) = 3
    expect(visit(expr, countingVisitor)).toBe(3);
  });

  it('handles deeply nested trees', () => {
    // (1 + 2) + 3  =>  Binary(Binary(1,2), 3)
    const expr = binaryAdd(binaryAdd(lit('1'), lit('2')), lit('3'));
    // outer Binary(1) + inner Binary(1) + 3 Literals(3) = 5
    expect(visit(expr, countingVisitor)).toBe(5);
  });

  it('dispatches Unary', () => {
    const expr: Expression = {
      kind: 'Unary',
      operator: UnaryOp.Negate,
      operand: lit('5'),
    };
    expect(visit(expr, countingVisitor)).toBe(2);
  });

  it('dispatches IfThenElse', () => {
    const expr: Expression = {
      kind: 'IfThenElse',
      condition: lit('true'),
      then: lit('1'),
      else: lit('2'),
    };
    // 1 (IfThenElse) + 3 children = 4
    expect(visit(expr, countingVisitor)).toBe(4);
  });

  it('dispatches This, IndexRef, Total (leaf nodes)', () => {
    expect(visit({ kind: 'This' } as Expression, countingVisitor)).toBe(1);
    expect(visit({ kind: 'IndexRef' } as Expression, countingVisitor)).toBe(1);
    expect(visit({ kind: 'Total' } as Expression, countingVisitor)).toBe(1);
  });

  it('dispatches ExternalConstant', () => {
    const expr: Expression = { kind: 'ExternalConstant', name: 'Today' };
    expect(visit(expr, countingVisitor)).toBe(1);
  });

  it('dispatches Interval', () => {
    const expr: Expression = {
      kind: 'Interval',
      lowClosed: true,
      highClosed: true,
      low: lit('1'),
      high: lit('10'),
    };
    expect(visit(expr, countingVisitor)).toBe(3);
  });

  it('dispatches List with elements', () => {
    const expr: Expression = {
      kind: 'List',
      typeSpec: null,
      elements: [lit('1'), lit('2'), lit('3')],
    };
    // 1 (List) + 3 children = 4
    expect(visit(expr, countingVisitor)).toBe(4);
  });

  it('dispatches MemberAccess', () => {
    const expr: Expression = {
      kind: 'MemberAccess',
      source: lit('obj'),
      member: 'field',
    };
    expect(visit(expr, countingVisitor)).toBe(2);
  });

  it('dispatches Timing', () => {
    const expr: Expression = {
      kind: 'Timing',
      left: lit('a'),
      right: lit('b'),
      operator: {
        timingKind: TimingKind.SameAs,
        precision: 'day',
        properly: false,
        before: false,
        after: false,
      },
    };
    expect(visit(expr, countingVisitor)).toBe(3);
  });

  it('dispatches SetAggregate with per', () => {
    const expr: Expression = {
      kind: 'SetAggregate',
      setKind: 'expand',
      operand: lit('intervals'),
      per: lit('1 day'),
    };
    // 1 + 1 (operand) + 1 (per) = 3
    expect(visit(expr, countingVisitor)).toBe(3);
  });

  it('dispatches SetAggregate without per', () => {
    const expr: Expression = {
      kind: 'SetAggregate',
      setKind: 'collapse',
      operand: lit('intervals'),
      per: null,
    };
    expect(visit(expr, countingVisitor)).toBe(2);
  });

  it('dispatches all remaining leaf/simple kinds', () => {
    // Code
    const code: Expression = { kind: 'Code', code: '123', system: 'http://example.com', display: '' };
    expect(visit(code, countingVisitor)).toBe(1);

    // TypeExtent
    const extent: Expression = {
      kind: 'TypeExtent',
      extent: 'minimum',
      type: { specKind: 'NamedType', namespace: 'System', name: 'Integer' },
    };
    expect(visit(extent, countingVisitor)).toBe(1);

    // BooleanTest
    const boolTest: Expression = {
      kind: 'BooleanTest',
      operand: lit('x'),
      testValue: 'true',
      not: false,
    };
    expect(visit(boolTest, countingVisitor)).toBe(2);

    // DurationBetween
    const durBetween: Expression = {
      kind: 'DurationBetween',
      precision: 'day',
      low: lit('a'),
      high: lit('b'),
    };
    expect(visit(durBetween, countingVisitor)).toBe(3);

    // DifferenceBetween
    const diffBetween: Expression = {
      kind: 'DifferenceBetween',
      precision: 'day',
      low: lit('a'),
      high: lit('b'),
    };
    expect(visit(diffBetween, countingVisitor)).toBe(3);

    // DateTimeComponentFrom
    const dtComp: Expression = {
      kind: 'DateTimeComponentFrom',
      component: 'year',
      operand: lit('d'),
    };
    expect(visit(dtComp, countingVisitor)).toBe(2);

    // DurationOf
    const durOf: Expression = {
      kind: 'DurationOf',
      precision: 'day',
      operand: lit('ivl'),
    };
    expect(visit(durOf, countingVisitor)).toBe(2);

    // DifferenceOf
    const diffOf: Expression = {
      kind: 'DifferenceOf',
      precision: 'day',
      operand: lit('ivl'),
    };
    expect(visit(diffOf, countingVisitor)).toBe(2);
  });
});
