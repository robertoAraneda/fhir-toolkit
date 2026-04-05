import { describe, it, expect } from 'vitest';
import { translateLibrary, translateExpression } from '../../src/elm/translator.js';
import { importElmLibrary, importExpression } from '../../src/elm/importer.js';
import { LiteralType, BinaryOp, UnaryOp, AccessLevel, SortDirection, TimingKind } from '../../src/ast/nodes.js';
import type { Library } from '../../src/ast/library.js';
import type { Expression } from '../../src/ast/nodes.js';

describe('translateLibrary', () => {
  it('translates a library with identifier', () => {
    const lib: Library = {
      identifier: { name: 'TestLib', version: '1.0.0' },
      usings: [],
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      concepts: [],
      parameters: [],
      contexts: [],
      statements: [],
      functions: [],
    };
    const elm = translateLibrary(lib);
    expect(elm.identifier).toEqual({ id: 'TestLib', version: '1.0.0' });
    expect(elm.schemaIdentifier).toEqual({ id: 'urn:hl7-org:elm', version: 'r1' });
  });

  it('translates usings and contexts', () => {
    const lib: Library = {
      identifier: null,
      usings: [{ name: 'FHIR', version: '4.0.1', alias: '' }],
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      concepts: [],
      parameters: [],
      contexts: [{ model: '', name: 'Patient' }],
      statements: [],
      functions: [],
    };
    const elm = translateLibrary(lib);
    expect(elm.usings!.def[0].localIdentifier).toBe('FHIR');
    expect(elm.contexts!.def[0].name).toBe('Patient');
  });

  it('translates statements with expressions', () => {
    const lib: Library = {
      identifier: null,
      usings: [],
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      concepts: [],
      parameters: [],
      contexts: [],
      statements: [{
        name: 'Answer',
        context: 'Patient',
        accessLevel: AccessLevel.Public,
        expression: { kind: 'Literal', valueType: LiteralType.Integer, value: '42' },
      }],
      functions: [],
    };
    const elm = translateLibrary(lib);
    expect(elm.statements!.def[0].name).toBe('Answer');
    expect(elm.statements!.def[0].expression).toEqual({
      type: 'Literal',
      value: '42',
      valueType: '{urn:hl7-org:elm-types:r1}Integer',
    });
  });

  it('translates code systems and codes', () => {
    const lib: Library = {
      identifier: null,
      usings: [],
      includes: [],
      codeSystems: [{ name: 'LOINC', id: 'http://loinc.org', version: '', accessLevel: AccessLevel.Public }],
      valueSets: [],
      codes: [{ name: 'BP', id: '85354-9', system: 'LOINC', display: 'Blood Pressure', accessLevel: AccessLevel.Public }],
      concepts: [],
      parameters: [],
      contexts: [],
      statements: [],
      functions: [],
    };
    const elm = translateLibrary(lib);
    expect(elm.codeSystems!.def[0].name).toBe('LOINC');
    expect(elm.codes!.def[0].codeSystem).toEqual({ name: 'LOINC' });
  });
});

describe('translateExpression', () => {
  it('translates null literal', () => {
    const result = translateExpression({ kind: 'Literal', valueType: LiteralType.Null, value: '' });
    expect(result.type).toBe('Null');
  });

  it('translates integer literal', () => {
    const result = translateExpression({ kind: 'Literal', valueType: LiteralType.Integer, value: '42' });
    expect(result).toEqual({ type: 'Literal', value: '42', valueType: '{urn:hl7-org:elm-types:r1}Integer' });
  });

  it('translates string literal', () => {
    const result = translateExpression({ kind: 'Literal', valueType: LiteralType.String, value: 'hello' });
    expect(result.type).toBe('Literal');
    expect(result.valueType).toBe('{urn:hl7-org:elm-types:r1}String');
  });

  it('translates binary Add', () => {
    const result = translateExpression({
      kind: 'Binary',
      operator: BinaryOp.Add,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    });
    expect(result.type).toBe('Add');
    expect(Array.isArray(result.operand)).toBe(true);
    const ops = result.operand as any[];
    expect(ops).toHaveLength(2);
  });

  it('translates binary Equal', () => {
    const result = translateExpression({
      kind: 'Binary',
      operator: BinaryOp.Equal,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
    });
    expect(result.type).toBe('Equal');
  });

  it('translates unary Not', () => {
    const result = translateExpression({
      kind: 'Unary',
      operator: UnaryOp.Not,
      operand: { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' },
    });
    expect(result.type).toBe('Not');
  });

  it('translates IdentifierRef to ExpressionRef', () => {
    const result = translateExpression({ kind: 'IdentifierRef', name: 'MyDef', library: '' });
    expect(result.type).toBe('ExpressionRef');
    expect(result.name).toBe('MyDef');
  });

  it('translates IfThenElse', () => {
    const result = translateExpression({
      kind: 'IfThenElse',
      condition: { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' },
      then: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      else: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    });
    expect(result.type).toBe('If');
    expect(result.condition).toBeDefined();
    expect(result.then).toBeDefined();
    expect(result.else).toBeDefined();
  });

  it('translates Retrieve', () => {
    const result = translateExpression({
      kind: 'Retrieve',
      resourceType: { specKind: 'NamedType', namespace: 'FHIR', name: 'Condition' },
      codePath: 'code',
      codeComparator: '',
      codes: null,
      context: null,
      datePath: '',
      dateRange: null,
    });
    expect(result.type).toBe('Retrieve');
    expect(result.dataType).toBe('{http://hl7.org/fhir}Condition');
  });

  it('translates ExternalConstant to ParameterRef', () => {
    const result = translateExpression({ kind: 'ExternalConstant', name: 'MeasurePeriod' });
    expect(result.type).toBe('ParameterRef');
    expect(result.name).toBe('MeasurePeriod');
  });

  it('translates Interval', () => {
    const result = translateExpression({
      kind: 'Interval',
      low: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      high: { kind: 'Literal', valueType: LiteralType.Integer, value: '10' },
      lowClosed: true,
      highClosed: false,
    });
    expect(result.type).toBe('Interval');
    expect(result.lowClosed).toBe(true);
    expect(result.highClosed).toBe(false);
  });

  it('translates List', () => {
    const result = translateExpression({
      kind: 'List',
      typeSpec: null,
      elements: [
        { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
        { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
      ],
    });
    expect(result.type).toBe('List');
    expect(result.element).toHaveLength(2);
  });

  it('translates BooleanTest IsNull', () => {
    const result = translateExpression({
      kind: 'BooleanTest',
      operand: { kind: 'IdentifierRef', name: 'X', library: '' },
      testValue: 'null',
      not: false,
    });
    expect(result.type).toBe('IsNull');
  });

  it('translates special tokens', () => {
    expect(translateExpression({ kind: 'This' }).type).toBe('This');
    expect(translateExpression({ kind: 'IndexRef' }).type).toBe('IterationIndex');
    expect(translateExpression({ kind: 'Total' }).type).toBe('Total');
  });
});

describe('round-trip: AST -> ELM -> AST', () => {
  it('round-trips a literal expression', () => {
    const original: Expression = { kind: 'Literal', valueType: LiteralType.Integer, value: '42' };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips a binary Add', () => {
    const original: Expression = {
      kind: 'Binary',
      operator: BinaryOp.Add,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips IdentifierRef', () => {
    const original: Expression = { kind: 'IdentifierRef', name: 'MyDef', library: '' };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips IfThenElse', () => {
    const original: Expression = {
      kind: 'IfThenElse',
      condition: { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' },
      then: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      else: { kind: 'Literal', valueType: LiteralType.Integer, value: '0' },
    };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips a nested binary expression', () => {
    const original: Expression = {
      kind: 'Binary',
      operator: BinaryOp.And,
      left: {
        kind: 'Binary',
        operator: BinaryOp.Greater,
        left: { kind: 'Literal', valueType: LiteralType.Integer, value: '5' },
        right: { kind: 'Literal', valueType: LiteralType.Integer, value: '3' },
      },
      right: {
        kind: 'Binary',
        operator: BinaryOp.Less,
        left: { kind: 'Literal', valueType: LiteralType.Integer, value: '10' },
        right: { kind: 'Literal', valueType: LiteralType.Integer, value: '20' },
      },
    };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips ExternalConstant', () => {
    const original: Expression = { kind: 'ExternalConstant', name: 'MeasurePeriod' };
    const elm = translateExpression(original);
    const result = importExpression(elm);
    expect(result).toEqual(original);
  });

  it('round-trips special tokens', () => {
    expect(importExpression(translateExpression({ kind: 'This' }))).toEqual({ kind: 'This' });
    expect(importExpression(translateExpression({ kind: 'IndexRef' }))).toEqual({ kind: 'IndexRef' });
    expect(importExpression(translateExpression({ kind: 'Total' }))).toEqual({ kind: 'Total' });
  });
});

describe('round-trip: ELM -> AST -> ELM', () => {
  it('round-trips a simple ELM library', () => {
    const originalElm = {
      identifier: { id: 'TestLib', version: '1.0.0' },
      schemaIdentifier: { id: 'urn:hl7-org:elm', version: 'r1' },
      statements: {
        def: [{
          name: 'Answer',
          context: 'Patient',
          accessLevel: 'Public',
          expression: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '42' },
        }],
      },
    };
    const ast = importElmLibrary(originalElm);
    const elm = translateLibrary(ast);
    expect(elm.identifier).toEqual(originalElm.identifier);
    expect(elm.statements!.def[0].name).toBe('Answer');
    expect(elm.statements!.def[0].expression).toEqual(originalElm.statements.def[0].expression);
  });

  it('round-trips an Add expression through ELM', () => {
    const originalElm = {
      type: 'Add',
      operand: [
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '3' },
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '4' },
      ],
    };
    const ast = importExpression(originalElm);
    const elm = translateExpression(ast);
    expect(elm.type).toBe('Add');
    const ops = elm.operand as any[];
    expect(ops[0]).toEqual(originalElm.operand[0]);
    expect(ops[1]).toEqual(originalElm.operand[1]);
  });
});
