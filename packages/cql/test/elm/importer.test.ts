import { describe, it, expect } from 'vitest';
import { importElmLibrary, importExpression } from '../../src/elm/importer.js';
import { LiteralType, BinaryOp, UnaryOp, AccessLevel, TimingKind, SortDirection } from '../../src/ast/nodes.js';
import type { ElmLibrary, ElmExpression } from '../../src/elm/types.js';

describe('importElmLibrary', () => {
  it('imports a simple library with identifier', () => {
    const elm: ElmLibrary = {
      identifier: { id: 'TestLib', version: '1.0.0' },
      schemaIdentifier: { id: 'urn:hl7-org:elm', version: 'r1' },
    };
    const lib = importElmLibrary(elm);
    expect(lib.identifier).toEqual({ name: 'TestLib', version: '1.0.0' });
    expect(lib.usings).toEqual([]);
    expect(lib.statements).toEqual([]);
  });

  it('imports usings and contexts', () => {
    const elm: ElmLibrary = {
      usings: { def: [{ localIdentifier: 'FHIR', version: '4.0.1' }] },
      contexts: { def: [{ name: 'Patient' }] },
    };
    const lib = importElmLibrary(elm);
    expect(lib.usings).toHaveLength(1);
    expect(lib.usings[0].name).toBe('FHIR');
    expect(lib.usings[0].version).toBe('4.0.1');
    expect(lib.contexts).toHaveLength(1);
    expect(lib.contexts[0].name).toBe('Patient');
  });

  it('imports code systems, value sets, codes, and concepts', () => {
    const elm: ElmLibrary = {
      codeSystems: { def: [{ name: 'LOINC', id: 'http://loinc.org', accessLevel: 'Public' }] },
      valueSets: { def: [{ name: 'Diabetes', id: 'http://example.com/vs/diabetes' }] },
      codes: { def: [{ name: 'BP', id: '85354-9', codeSystem: { name: 'LOINC' } }] },
      concepts: { def: [{ name: 'BPConcept', code: [{ name: 'BP' }], display: 'Blood Pressure' }] },
    };
    const lib = importElmLibrary(elm);
    expect(lib.codeSystems[0].name).toBe('LOINC');
    expect(lib.valueSets[0].name).toBe('Diabetes');
    expect(lib.codes[0].system).toBe('LOINC');
    expect(lib.concepts[0].display).toBe('Blood Pressure');
    expect(lib.concepts[0].codes).toEqual(['BP']);
  });

  it('imports includes', () => {
    const elm: ElmLibrary = {
      includes: { def: [{ localIdentifier: 'FHIRHelpers', path: 'FHIRHelpers', version: '4.0.1' }] },
    };
    const lib = importElmLibrary(elm);
    expect(lib.includes[0]).toEqual({ name: 'FHIRHelpers', version: '4.0.1', alias: 'FHIRHelpers' });
  });

  it('imports parameters with default values', () => {
    const elm: ElmLibrary = {
      parameters: {
        def: [{
          name: 'MeasurePeriod',
          accessLevel: 'Public',
          parameterTypeSpecifier: { type: 'NamedTypeSpecifier', namespace: '', name: 'Integer' },
          default: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '42' },
        }],
      },
    };
    const lib = importElmLibrary(elm);
    expect(lib.parameters[0].name).toBe('MeasurePeriod');
    expect(lib.parameters[0].default).toEqual({
      kind: 'Literal', valueType: LiteralType.Integer, value: '42',
    });
  });

  it('imports expression definitions with literal expressions', () => {
    const elm: ElmLibrary = {
      statements: {
        def: [{
          name: 'Answer',
          context: 'Patient',
          accessLevel: 'Public',
          expression: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '42' },
        }],
      },
    };
    const lib = importElmLibrary(elm);
    expect(lib.statements).toHaveLength(1);
    expect(lib.statements[0].name).toBe('Answer');
    expect(lib.statements[0].expression).toEqual({
      kind: 'Literal', valueType: LiteralType.Integer, value: '42',
    });
  });

  it('imports private access level', () => {
    const elm: ElmLibrary = {
      statements: {
        def: [{ name: 'Secret', accessLevel: 'Private', expression: { type: 'Null' } }],
      },
    };
    const lib = importElmLibrary(elm);
    expect(lib.statements[0].accessLevel).toBe(AccessLevel.Private);
  });
});

describe('importExpression', () => {
  it('imports null', () => {
    const result = importExpression({ type: 'Null' });
    expect(result).toEqual({ kind: 'Literal', valueType: LiteralType.Null, value: '' });
  });

  it('imports string literal', () => {
    const result = importExpression({
      type: 'Literal',
      valueType: '{urn:hl7-org:elm-types:r1}String',
      value: 'hello',
    });
    expect(result).toEqual({ kind: 'Literal', valueType: LiteralType.String, value: 'hello' });
  });

  it('imports boolean literal', () => {
    const result = importExpression({
      type: 'Literal',
      valueType: '{urn:hl7-org:elm-types:r1}Boolean',
      value: 'true',
    });
    expect(result).toEqual({ kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' });
  });

  it('imports decimal literal', () => {
    const result = importExpression({
      type: 'Literal',
      valueType: '{urn:hl7-org:elm-types:r1}Decimal',
      value: '3.14',
    });
    expect(result).toEqual({ kind: 'Literal', valueType: LiteralType.Decimal, value: '3.14' });
  });

  it('imports binary Add operation', () => {
    const result = importExpression({
      type: 'Add',
      operand: [
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '2' },
      ],
    });
    expect(result.kind).toBe('Binary');
    if (result.kind === 'Binary') {
      expect(result.operator).toBe(BinaryOp.Add);
      expect(result.left).toEqual({ kind: 'Literal', valueType: LiteralType.Integer, value: '1' });
      expect(result.right).toEqual({ kind: 'Literal', valueType: LiteralType.Integer, value: '2' });
    }
  });

  it('imports binary And operation', () => {
    const result = importExpression({
      type: 'And',
      operand: [
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' },
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'false' },
      ],
    });
    expect(result.kind).toBe('Binary');
    if (result.kind === 'Binary') {
      expect(result.operator).toBe(BinaryOp.And);
    }
  });

  it('imports unary Not operation', () => {
    const result = importExpression({
      type: 'Not',
      operand: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' },
    });
    expect(result.kind).toBe('Unary');
    if (result.kind === 'Unary') {
      expect(result.operator).toBe(UnaryOp.Not);
    }
  });

  it('imports ExpressionRef', () => {
    const result = importExpression({ type: 'ExpressionRef', name: 'MyDef', libraryName: 'Lib' });
    expect(result).toEqual({ kind: 'IdentifierRef', name: 'MyDef', library: 'Lib' });
  });

  it('imports ParameterRef as ExternalConstant', () => {
    const result = importExpression({ type: 'ParameterRef', name: 'MeasurePeriod' });
    expect(result).toEqual({ kind: 'ExternalConstant', name: 'MeasurePeriod' });
  });

  it('imports Property (member access)', () => {
    const result = importExpression({
      type: 'Property',
      path: 'value',
      source: { type: 'ExpressionRef', name: 'X' },
    });
    expect(result.kind).toBe('MemberAccess');
    if (result.kind === 'MemberAccess') {
      expect(result.member).toBe('value');
    }
  });

  it('imports Retrieve', () => {
    const result = importExpression({
      type: 'Retrieve',
      dataType: '{http://hl7.org/fhir}Condition',
      codeProperty: 'code',
    });
    expect(result.kind).toBe('Retrieve');
    if (result.kind === 'Retrieve') {
      expect(result.resourceType.name).toBe('Condition');
      expect(result.resourceType.namespace).toBe('FHIR');
      expect(result.codePath).toBe('code');
    }
  });

  it('imports If/Then/Else', () => {
    const result = importExpression({
      type: 'If',
      condition: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' },
      then: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
      else: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '2' },
    });
    expect(result.kind).toBe('IfThenElse');
  });

  it('imports Query with sources and where', () => {
    const result = importExpression({
      type: 'Query',
      sourceClause: [{
        expression: { type: 'Retrieve', dataType: '{http://hl7.org/fhir}Condition' },
        alias: 'C',
      }],
      where: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' },
    });
    expect(result.kind).toBe('Query');
    if (result.kind === 'Query') {
      expect(result.sources).toHaveLength(1);
      expect(result.sources[0].alias).toBe('C');
      expect(result.where).not.toBeNull();
    }
  });

  it('imports Query with return and sort', () => {
    const result = importExpression({
      type: 'Query',
      sourceClause: [{ expression: { type: 'Retrieve', dataType: 'Observation' }, alias: 'O' }],
      return: { expression: { type: 'Property', path: 'value', source: { type: 'ExpressionRef', name: 'O' } } },
      sort: { by: [{ direction: 'desc', expression: { type: 'Property', path: 'date' } }] },
    });
    if (result.kind === 'Query') {
      expect(result.return).not.toBeNull();
      expect(result.sort).not.toBeNull();
      expect(result.sort!.byItems[0].direction).toBe(SortDirection.Desc);
    }
  });

  it('imports Query with with/without relationships', () => {
    const result = importExpression({
      type: 'Query',
      sourceClause: [{ expression: { type: 'Retrieve', dataType: 'Encounter' }, alias: 'E' }],
      relationship: [
        { type: 'With', expression: { type: 'Retrieve', dataType: 'Condition' }, alias: 'C', suchThat: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' } },
        { type: 'Without', expression: { type: 'Retrieve', dataType: 'Procedure' }, alias: 'P', suchThat: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Boolean', value: 'true' } },
      ],
    });
    if (result.kind === 'Query') {
      expect(result.with).toHaveLength(1);
      expect(result.without).toHaveLength(1);
    }
  });

  it('imports Interval', () => {
    const result = importExpression({
      type: 'Interval',
      low: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
      high: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '10' },
      lowClosed: true,
      highClosed: false,
    });
    expect(result.kind).toBe('Interval');
    if (result.kind === 'Interval') {
      expect(result.lowClosed).toBe(true);
      expect(result.highClosed).toBe(false);
    }
  });

  it('imports List', () => {
    const result = importExpression({
      type: 'List',
      element: [
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
        { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '2' },
      ],
    });
    expect(result.kind).toBe('List');
    if (result.kind === 'List') {
      expect(result.elements).toHaveLength(2);
    }
  });

  it('imports Tuple', () => {
    const result = importExpression({
      type: 'Tuple',
      element: [{
        type: 'TupleElement',
        name: 'x',
        source: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
      }],
    });
    expect(result.kind).toBe('Tuple');
    if (result.kind === 'Tuple') {
      expect(result.elements[0].name).toBe('x');
    }
  });

  it('imports FunctionRef', () => {
    const result = importExpression({
      type: 'FunctionRef',
      name: 'ToInteger',
      libraryName: 'FHIRHelpers',
      operand: [{ type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}String', value: '42' }],
    });
    expect(result.kind).toBe('FunctionCall');
    if (result.kind === 'FunctionCall') {
      expect(result.name).toBe('ToInteger');
      expect(result.library).toBe('FHIRHelpers');
      expect(result.operands).toHaveLength(1);
    }
  });

  it('imports IsNull boolean test', () => {
    const result = importExpression({
      type: 'IsNull',
      operand: { type: 'ExpressionRef', name: 'X' },
    });
    expect(result.kind).toBe('BooleanTest');
    if (result.kind === 'BooleanTest') {
      expect(result.testValue).toBe('null');
    }
  });

  it('imports timing operator Before', () => {
    const result = importExpression({
      type: 'Before',
      operand: [
        { type: 'ExpressionRef', name: 'A' },
        { type: 'ExpressionRef', name: 'B' },
      ],
      precision: 'Day',
    });
    expect(result.kind).toBe('Timing');
    if (result.kind === 'Timing') {
      expect(result.operator.timingKind).toBe(TimingKind.BeforeOrAfter);
      expect(result.operator.before).toBe(true);
      expect(result.operator.precision).toBe('Day');
    }
  });

  it('imports special tokens (This, IterationIndex, Total)', () => {
    expect(importExpression({ type: 'This' })).toEqual({ kind: 'This' });
    expect(importExpression({ type: 'IterationIndex' })).toEqual({ kind: 'IndexRef' });
    expect(importExpression({ type: 'Total' })).toEqual({ kind: 'Total' });
  });

  it('imports DurationBetween', () => {
    const result = importExpression({
      type: 'DurationBetween',
      precision: 'Year',
      operand: [
        { type: 'ExpressionRef', name: 'A' },
        { type: 'ExpressionRef', name: 'B' },
      ],
    });
    expect(result.kind).toBe('DurationBetween');
    if (result.kind === 'DurationBetween') {
      expect(result.precision).toBe('Year');
    }
  });

  it('imports Code expression', () => {
    const result = importExpression({
      type: 'Code',
      code: '85354-9',
      system: { type: 'CodeSystemRef', name: 'LOINC' },
      display: 'Blood Pressure',
    });
    expect(result.kind).toBe('Code');
    if (result.kind === 'Code') {
      expect(result.code).toBe('85354-9');
      expect(result.system).toBe('LOINC');
    }
  });

  it('returns null literal for unknown type', () => {
    const result = importExpression({ type: 'SomeUnknownType' });
    expect(result).toEqual({ kind: 'Literal', valueType: LiteralType.Null, value: '' });
  });
});
