import { describe, it, expect } from 'vitest';
import { compile } from '../../src/compiler/compiler.js';
import { CqlSyntaxError } from '../../src/errors.js';
import {
  LiteralType,
  BinaryOp,
  UnaryOp,
  SortDirection,
  AccessLevel,
} from '../../src/ast/nodes.js';
import type { Expression, LiteralExpr, BinaryExpr, UnaryExpr } from '../../src/ast/nodes.js';

// Helper to compile a single expression definition and return the expression
function compileExpr(exprBody: string): Expression {
  const lib = compile(`library Test\ndefine X: ${exprBody}`);
  return lib.statements[0].expression;
}

describe('compile()', () => {
  // -------------------------------------------------------------------------
  // Library
  // -------------------------------------------------------------------------
  describe('library-level definitions', () => {
    it('parses minimal library', () => {
      const lib = compile('library MyLib');
      expect(lib.identifier).toEqual({ name: 'MyLib', version: '' });
      expect(lib.usings).toHaveLength(0);
      expect(lib.statements).toHaveLength(0);
    });

    it('parses library with version', () => {
      const lib = compile("library MyLib version '1.0.0'");
      expect(lib.identifier).toEqual({ name: 'MyLib', version: '1.0.0' });
    });

    it('parses using definition', () => {
      const lib = compile("library Test\nusing FHIR version '4.0.1'");
      expect(lib.usings).toHaveLength(1);
      expect(lib.usings[0].name).toBe('FHIR');
      expect(lib.usings[0].version).toBe('4.0.1');
    });

    it('parses include definition', () => {
      const lib = compile("library Test\ninclude FHIRHelpers version '4.0.1' called FH");
      expect(lib.includes).toHaveLength(1);
      expect(lib.includes[0].name).toBe('FHIRHelpers');
      expect(lib.includes[0].version).toBe('4.0.1');
      expect(lib.includes[0].alias).toBe('FH');
    });

    it('parses codesystem definition', () => {
      const lib = compile("library Test\ncodesystem CS: 'http://example.org/cs'");
      expect(lib.codeSystems).toHaveLength(1);
      expect(lib.codeSystems[0].name).toBe('CS');
      expect(lib.codeSystems[0].id).toBe('http://example.org/cs');
    });

    it('parses valueset definition', () => {
      const lib = compile("library Test\nvalueset VS: 'http://example.org/vs'");
      expect(lib.valueSets).toHaveLength(1);
      expect(lib.valueSets[0].name).toBe('VS');
      expect(lib.valueSets[0].id).toBe('http://example.org/vs');
    });

    it('parses code definition', () => {
      const lib = compile(
        "library Test\ncodesystem CS: 'http://loinc.org'\ncode BP: '85354-9' from CS display 'Blood pressure'",
      );
      expect(lib.codes).toHaveLength(1);
      expect(lib.codes[0].name).toBe('BP');
      expect(lib.codes[0].id).toBe('85354-9');
      expect(lib.codes[0].system).toBe('CS');
      expect(lib.codes[0].display).toBe('Blood pressure');
    });

    it('parses concept definition', () => {
      const lib = compile(
        "library Test\ncodesystem CS: 'http://loinc.org'\ncode A: '1' from CS\ncode B: '2' from CS\nconcept C: { A, B } display 'Both'",
      );
      expect(lib.concepts).toHaveLength(1);
      expect(lib.concepts[0].name).toBe('C');
      expect(lib.concepts[0].codes).toHaveLength(2);
      expect(lib.concepts[0].display).toBe('Both');
    });

    it('parses parameter definition', () => {
      const lib = compile('library Test\nparameter MeasurementPeriod default 42');
      expect(lib.parameters).toHaveLength(1);
      expect(lib.parameters[0].name).toBe('MeasurementPeriod');
      const def = lib.parameters[0].default as LiteralExpr;
      expect(def.kind).toBe('Literal');
      expect(def.value).toBe('42');
    });

    it('parses context definition', () => {
      const lib = compile('library Test\ncontext Patient\ndefine X: 1');
      expect(lib.contexts).toHaveLength(1);
      expect(lib.contexts[0].name).toBe('Patient');
      expect(lib.statements[0].context).toBe('Patient');
    });
  });

  // -------------------------------------------------------------------------
  // Literals
  // -------------------------------------------------------------------------
  describe('literals', () => {
    it('parses integer literal', () => {
      const expr = compileExpr('42') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Integer);
      expect(expr.value).toBe('42');
    });

    it('parses decimal literal', () => {
      const expr = compileExpr('3.14') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Decimal);
      expect(expr.value).toBe('3.14');
    });

    it('parses string literal', () => {
      const expr = compileExpr("'hello'") as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.String);
      expect(expr.value).toBe('hello');
    });

    it('parses boolean literal true', () => {
      const expr = compileExpr('true') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Boolean);
      expect(expr.value).toBe('true');
    });

    it('parses boolean literal false', () => {
      const expr = compileExpr('false') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Boolean);
      expect(expr.value).toBe('false');
    });

    it('parses null literal', () => {
      const expr = compileExpr('null') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Null);
      expect(expr.value).toBe('null');
    });

    it('parses date literal', () => {
      const expr = compileExpr('@2024-01-15') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Date);
      expect(expr.value).toBe('2024-01-15');
    });

    it('parses datetime literal', () => {
      const expr = compileExpr('@2024-01-15T10:30:00') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.DateTime);
      expect(expr.value).toBe('2024-01-15T10:30:00');
    });

    it('parses time literal', () => {
      const expr = compileExpr('@T10:30:00') as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Time);
      expect(expr.value).toBe('10:30:00');
    });

    it('parses quantity literal', () => {
      const expr = compileExpr("5 'mg'") as LiteralExpr;
      expect(expr.kind).toBe('Literal');
      expect(expr.valueType).toBe(LiteralType.Quantity);
    });
  });

  // -------------------------------------------------------------------------
  // Operators
  // -------------------------------------------------------------------------
  describe('operators', () => {
    it('parses arithmetic: 1 + 2', () => {
      const expr = compileExpr('1 + 2') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Add);
      expect((expr.left as LiteralExpr).value).toBe('1');
      expect((expr.right as LiteralExpr).value).toBe('2');
    });

    it('parses subtraction: 5 - 3', () => {
      const expr = compileExpr('5 - 3') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Subtract);
    });

    it('parses multiplication: 2 * 3', () => {
      const expr = compileExpr('2 * 3') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Multiply);
    });

    it('parses division: 6 / 2', () => {
      const expr = compileExpr('6 / 2') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Divide);
    });

    it('parses power: 2 ^ 3', () => {
      const expr = compileExpr('2 ^ 3') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Power);
    });

    it('parses string concat: a & b', () => {
      const expr = compileExpr("'a' & 'b'") as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Concatenate);
    });

    it('parses comparison: x > 3', () => {
      const lib = compile('library Test\ndefine X: 5 > 3');
      const expr = lib.statements[0].expression as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.Greater);
    });

    it('parses comparison: x <= 3', () => {
      const expr = compileExpr('5 <= 3') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.LessOrEqual);
    });

    it('parses equality: x = y', () => {
      const expr = compileExpr('1 = 2') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Equal);
    });

    it('parses inequality: x != y', () => {
      const expr = compileExpr('1 != 2') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.NotEqual);
    });

    it('parses equivalence: x ~ y', () => {
      const expr = compileExpr('1 ~ 2') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Equivalent);
    });

    it('parses logical: true and false', () => {
      const expr = compileExpr('true and false') as BinaryExpr;
      expect(expr.kind).toBe('Binary');
      expect(expr.operator).toBe(BinaryOp.And);
    });

    it('parses logical: true or false', () => {
      const expr = compileExpr('true or false') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Or);
    });

    it('parses logical: true xor false', () => {
      const expr = compileExpr('true xor false') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Xor);
    });

    it('parses logical: true implies false', () => {
      const expr = compileExpr('true implies false') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Implies);
    });

    it('parses unary: not true', () => {
      const expr = compileExpr('not true') as UnaryExpr;
      expect(expr.kind).toBe('Unary');
      expect(expr.operator).toBe(UnaryOp.Not);
    });

    it('parses unary: exists X', () => {
      const expr = compileExpr('exists ({ 1 })');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.Exists);
    });

    it('parses set operations: union', () => {
      const expr = compileExpr('{ 1 } union { 2 }') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Union);
    });

    it('parses set operations: intersect', () => {
      const expr = compileExpr('{ 1 } intersect { 2 }') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Intersect);
    });

    it('parses set operations: except', () => {
      const expr = compileExpr('{ 1 } except { 2 }') as BinaryExpr;
      expect(expr.operator).toBe(BinaryOp.Except);
    });
  });

  // -------------------------------------------------------------------------
  // Query
  // -------------------------------------------------------------------------
  describe('query', () => {
    it('parses query with where', () => {
      const expr = compileExpr('({ 1, 2, 3 }) X where X > 1');
      expect(expr.kind).toBe('Query');
      if (expr.kind === 'Query') {
        expect(expr.sources).toHaveLength(1);
        expect(expr.sources[0].alias).toBe('X');
        expect(expr.where).not.toBeNull();
      }
    });

    it('parses query with return', () => {
      const expr = compileExpr('({ 1, 2, 3 }) X return X + 1');
      expect(expr.kind).toBe('Query');
      if (expr.kind === 'Query') {
        expect(expr.return).not.toBeNull();
        expect(expr.return!.expression.kind).toBe('Binary');
      }
    });

    it('parses query with sort', () => {
      const expr = compileExpr('({ 3, 1, 2 }) X sort asc');
      expect(expr.kind).toBe('Query');
      if (expr.kind === 'Query') {
        expect(expr.sort).not.toBeNull();
        expect(expr.sort!.direction).toBe(SortDirection.Asc);
      }
    });

    it('parses query with let', () => {
      const expr = compileExpr('({ 1, 2, 3 }) X let Y: X + 1 return Y');
      expect(expr.kind).toBe('Query');
      if (expr.kind === 'Query') {
        expect(expr.let).toHaveLength(1);
        expect(expr.let[0].identifier).toBe('Y');
      }
    });
  });

  // -------------------------------------------------------------------------
  // Retrieve
  // -------------------------------------------------------------------------
  describe('retrieve', () => {
    it('parses retrieve: [Condition]', () => {
      const expr = compileExpr('[Condition]');
      expect(expr.kind).toBe('Retrieve');
      if (expr.kind === 'Retrieve') {
        expect(expr.resourceType.name).toBe('Condition');
      }
    });

    it('parses retrieve with code filter', () => {
      const lib = compile(
        "library Test\nvalueset VS: 'http://example.org/vs'\ndefine X: [Condition: VS]",
      );
      const expr = lib.statements[0].expression;
      expect(expr.kind).toBe('Retrieve');
      if (expr.kind === 'Retrieve') {
        expect(expr.resourceType.name).toBe('Condition');
        expect(expr.codes).not.toBeNull();
      }
    });
  });

  // -------------------------------------------------------------------------
  // Control flow
  // -------------------------------------------------------------------------
  describe('control flow', () => {
    it('parses if/then/else', () => {
      const expr = compileExpr('if true then 1 else 2');
      expect(expr.kind).toBe('IfThenElse');
      if (expr.kind === 'IfThenElse') {
        expect(expr.condition.kind).toBe('Literal');
        expect((expr.then as LiteralExpr).value).toBe('1');
        expect((expr.else as LiteralExpr).value).toBe('2');
      }
    });

    it('parses case expression', () => {
      const expr = compileExpr('case when true then 1 when false then 2 else 3 end');
      expect(expr.kind).toBe('Case');
      if (expr.kind === 'Case') {
        expect(expr.items).toHaveLength(2);
        expect(expr.comparand).toBeNull();
      }
    });
  });

  // -------------------------------------------------------------------------
  // Constructors
  // -------------------------------------------------------------------------
  describe('constructors', () => {
    it('parses interval expression', () => {
      const expr = compileExpr('Interval[1, 10]');
      expect(expr.kind).toBe('Interval');
      if (expr.kind === 'Interval') {
        expect(expr.lowClosed).toBe(true);
        expect(expr.highClosed).toBe(true);
        expect((expr.low as LiteralExpr).value).toBe('1');
        expect((expr.high as LiteralExpr).value).toBe('10');
      }
    });

    it('parses open interval', () => {
      const expr = compileExpr('Interval(1, 10)');
      expect(expr.kind).toBe('Interval');
      if (expr.kind === 'Interval') {
        expect(expr.lowClosed).toBe(false);
        expect(expr.highClosed).toBe(false);
      }
    });

    it('parses list expression', () => {
      const expr = compileExpr('{ 1, 2, 3 }');
      expect(expr.kind).toBe('List');
      if (expr.kind === 'List') {
        expect(expr.elements).toHaveLength(3);
      }
    });

    it('parses tuple expression', () => {
      const expr = compileExpr("Tuple { name: 'John', age: 30 }");
      expect(expr.kind).toBe('Tuple');
      if (expr.kind === 'Tuple') {
        expect(expr.elements).toHaveLength(2);
        expect(expr.elements[0].name).toBe('name');
        expect(expr.elements[1].name).toBe('age');
      }
    });
  });

  // -------------------------------------------------------------------------
  // Type operations
  // -------------------------------------------------------------------------
  describe('type operations', () => {
    it('parses is expression', () => {
      const expr = compileExpr('42 is Integer');
      expect(expr.kind).toBe('Is');
      if (expr.kind === 'Is') {
        expect(expr.type.specKind).toBe('NamedType');
      }
    });

    it('parses as expression', () => {
      const expr = compileExpr('42 as Integer');
      expect(expr.kind).toBe('As');
      if (expr.kind === 'As') {
        expect(expr.type.specKind).toBe('NamedType');
      }
    });

    it('parses cast expression', () => {
      const expr = compileExpr('cast 42 as Integer');
      expect(expr.kind).toBe('Cast');
      if (expr.kind === 'Cast') {
        expect(expr.type.specKind).toBe('NamedType');
      }
    });
  });

  // -------------------------------------------------------------------------
  // Functions
  // -------------------------------------------------------------------------
  describe('functions and member access', () => {
    it('parses function call', () => {
      const expr = compileExpr('AgeInYears()');
      expect(expr.kind).toBe('FunctionCall');
      if (expr.kind === 'FunctionCall') {
        expect(expr.name).toBe('AgeInYears');
        expect(expr.operands).toHaveLength(0);
      }
    });

    it('parses function call with arguments', () => {
      const expr = compileExpr('Abs(-5)');
      expect(expr.kind).toBe('FunctionCall');
      if (expr.kind === 'FunctionCall') {
        expect(expr.name).toBe('Abs');
        expect(expr.operands).toHaveLength(1);
      }
    });

    it('parses member access', () => {
      const expr = compileExpr("'hello'.length");
      expect(expr.kind).toBe('MemberAccess');
      if (expr.kind === 'MemberAccess') {
        expect(expr.member).toBe('length');
      }
    });

    it('parses chained member access', () => {
      const expr = compileExpr("'hello'.length.toString()");
      expect(expr.kind).toBe('FunctionCall');
      if (expr.kind === 'FunctionCall') {
        expect(expr.name).toBe('toString');
        expect(expr.source).not.toBeNull();
        expect(expr.source!.kind).toBe('MemberAccess');
      }
    });

    it('parses function definition', () => {
      const lib = compile(
        'library Test\ndefine function Add(a Integer, b Integer) returns Integer:\n  a + b',
      );
      expect(lib.functions).toHaveLength(1);
      expect(lib.functions[0].name).toBe('Add');
      expect(lib.functions[0].operands).toHaveLength(2);
      expect(lib.functions[0].operands[0].name).toBe('a');
      expect(lib.functions[0].body).not.toBeNull();
    });
  });

  // -------------------------------------------------------------------------
  // Unary operators
  // -------------------------------------------------------------------------
  describe('unary operators', () => {
    it('parses successor of', () => {
      const expr = compileExpr('successor of 5');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.SuccessorOf);
    });

    it('parses predecessor of', () => {
      const expr = compileExpr('predecessor of 5');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.PredecessorOf);
    });

    it('parses width of', () => {
      const expr = compileExpr('width of Interval[1, 10]');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.WidthOf);
    });

    it('parses start of', () => {
      const expr = compileExpr('start of Interval[1, 10]');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.StartOf);
    });

    it('parses end of', () => {
      const expr = compileExpr('end of Interval[1, 10]');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.EndOf);
    });

    it('parses negate', () => {
      const expr = compileExpr('-5');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.Negate);
    });

    it('parses distinct', () => {
      const expr = compileExpr('distinct { 1, 1, 2 }');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.Distinct);
    });

    it('parses flatten', () => {
      const expr = compileExpr('flatten { { 1 }, { 2 } }');
      expect(expr.kind).toBe('Unary');
      expect((expr as UnaryExpr).operator).toBe(UnaryOp.Flatten);
    });
  });

  // -------------------------------------------------------------------------
  // Between
  // -------------------------------------------------------------------------
  describe('between', () => {
    it('parses between expression', () => {
      const expr = compileExpr('5 between 1 and 10');
      expect(expr.kind).toBe('Between');
      if (expr.kind === 'Between') {
        expect((expr.operand as LiteralExpr).value).toBe('5');
        expect((expr.low as LiteralExpr).value).toBe('1');
        expect((expr.high as LiteralExpr).value).toBe('10');
        expect(expr.properly).toBe(false);
      }
    });

    it('parses duration between', () => {
      const expr = compileExpr('duration in years between @2020-01-01 and @2024-01-01');
      expect(expr.kind).toBe('DurationBetween');
      if (expr.kind === 'DurationBetween') {
        expect(expr.precision).toBe('years');
      }
    });

    it('parses difference between', () => {
      const expr = compileExpr('difference in months between @2020-01-01 and @2024-01-01');
      expect(expr.kind).toBe('DifferenceBetween');
      if (expr.kind === 'DifferenceBetween') {
        expect(expr.precision).toBe('months');
      }
    });
  });

  // -------------------------------------------------------------------------
  // Special expressions
  // -------------------------------------------------------------------------
  describe('special expressions', () => {
    it('parses external constant', () => {
      const expr = compileExpr('%param');
      expect(expr.kind).toBe('ExternalConstant');
      if (expr.kind === 'ExternalConstant') {
        expect(expr.name).toBe('param');
      }
    });

    it('parses boolean test: is null', () => {
      const expr = compileExpr('42 is null');
      expect(expr.kind).toBe('BooleanTest');
      if (expr.kind === 'BooleanTest') {
        expect(expr.testValue).toBe('null');
        expect(expr.not).toBe(false);
      }
    });

    it('parses boolean test: is not null', () => {
      const expr = compileExpr('42 is not null');
      expect(expr.kind).toBe('BooleanTest');
      if (expr.kind === 'BooleanTest') {
        expect(expr.testValue).toBe('null');
        expect(expr.not).toBe(true);
      }
    });

    it('parses type extent: minimum', () => {
      const expr = compileExpr('minimum Integer');
      expect(expr.kind).toBe('TypeExtent');
      if (expr.kind === 'TypeExtent') {
        expect(expr.extent).toBe('minimum');
      }
    });

    it('parses type extent: maximum', () => {
      const expr = compileExpr('maximum Integer');
      expect(expr.kind).toBe('TypeExtent');
      if (expr.kind === 'TypeExtent') {
        expect(expr.extent).toBe('maximum');
      }
    });

    it('parses convert expression', () => {
      const expr = compileExpr("convert 42 to 'mg'");
      expect(expr.kind).toBe('Convert');
    });

    it('parses membership: in', () => {
      const expr = compileExpr('1 in { 1, 2, 3 }');
      expect(expr.kind).toBe('Membership');
      if (expr.kind === 'Membership') {
        expect(expr.operator).toBe('in');
      }
    });

    it('parses membership: contains', () => {
      const expr = compileExpr('{ 1, 2, 3 } contains 1');
      expect(expr.kind).toBe('Membership');
      if (expr.kind === 'Membership') {
        expect(expr.operator).toBe('contains');
      }
    });
  });

  // -------------------------------------------------------------------------
  // Error handling
  // -------------------------------------------------------------------------
  describe('error handling', () => {
    it('throws CqlSyntaxError on invalid input', () => {
      expect(() => compile('this is not valid cql @@@')).toThrow(CqlSyntaxError);
    });

    it('CqlSyntaxError contains line info', () => {
      try {
        compile('library Test\ndefine X: @@@');
        expect.fail('should have thrown');
      } catch (e) {
        expect(e).toBeInstanceOf(CqlSyntaxError);
        const err = e as CqlSyntaxError;
        expect(err.line).toBeDefined();
      }
    });
  });
});
