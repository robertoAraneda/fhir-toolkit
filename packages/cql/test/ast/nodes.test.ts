import { describe, it, expect } from 'vitest';
import {
  // Enums
  LiteralType,
  BinaryOp,
  UnaryOp,
  SortDirection,
  TimingKind,
  AccessLevel,
  // Expression types
  type Expression,
  type LiteralExpr,
  type IdentifierRefExpr,
  type BinaryExpr,
  type UnaryExpr,
  type IfThenElseExpr,
  type CaseExpr,
  type IsExpr,
  type AsExpr,
  type CastExpr,
  type ConvertExpr,
  type BooleanTestExpr,
  type FunctionCallExpr,
  type MemberAccessExpr,
  type IndexAccessExpr,
  type RetrieveExpr,
  type QueryExpr,
  type IntervalExpr,
  type TupleExpr,
  type ListExpr,
  type InstanceExpr,
  type CodeExpr,
  type ConceptExpr,
  type ExternalConstantExpr,
  type ThisExpr,
  type IndexRefExpr,
  type TotalExpr,
  type MembershipExpr,
  type BetweenExpr,
  type DurationBetweenExpr,
  type DifferenceBetweenExpr,
  type DateTimeComponentFromExpr,
  type DurationOfExpr,
  type DifferenceOfExpr,
  type TypeExtentExpr,
  type TimingExpr,
  type SetAggregateExpr,
  // Type specifiers
  type TypeSpecifier,
  type NamedType,
  type ListType,
  type IntervalType,
  type TupleType,
  type ChoiceType,
  // Supporting types
  type AliasedSource,
  type SortByItem,
  type TimingOp,
  type TupleElement,
} from '../../src/ast/index.js';
import type {
  Library,
  LibraryIdentifier,
  ExpressionDef,
  FunctionDef,
  OperandDef,
  UsingDef,
  ParameterDef,
} from '../../src/ast/index.js';

// ---------------------------------------------------------------------------
// Enum values
// ---------------------------------------------------------------------------

describe('Enums', () => {
  it('LiteralType has all 11 variants', () => {
    expect(LiteralType.Null).toBe(0);
    expect(LiteralType.Boolean).toBe(1);
    expect(LiteralType.String).toBe(2);
    expect(LiteralType.Integer).toBe(3);
    expect(LiteralType.Long).toBe(4);
    expect(LiteralType.Decimal).toBe(5);
    expect(LiteralType.Date).toBe(6);
    expect(LiteralType.DateTime).toBe(7);
    expect(LiteralType.Time).toBe(8);
    expect(LiteralType.Quantity).toBe(9);
    expect(LiteralType.Ratio).toBe(10);
  });

  it('BinaryOp has all 25 variants', () => {
    expect(BinaryOp.Add).toBe(0);
    expect(BinaryOp.Contains).toBe(24);
    // Spot-check a few in the middle
    expect(BinaryOp.Equal).toBe(8);
    expect(BinaryOp.And).toBe(16);
    expect(BinaryOp.Union).toBe(20);
  });

  it('UnaryOp has all 13 variants', () => {
    expect(UnaryOp.Not).toBe(0);
    expect(UnaryOp.PredecessorOf).toBe(12);
  });

  it('SortDirection has Asc and Desc', () => {
    expect(SortDirection.Asc).toBe(0);
    expect(SortDirection.Desc).toBe(1);
  });

  it('TimingKind has all 10 variants', () => {
    expect(TimingKind.SameAs).toBe(0);
    expect(TimingKind.Ends).toBe(9);
  });

  it('AccessLevel has Public and Private', () => {
    expect(AccessLevel.Public).toBe(0);
    expect(AccessLevel.Private).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Expression creation and kind narrowing
// ---------------------------------------------------------------------------

describe('Expression discriminated union', () => {
  it('creates a Literal and narrows via kind', () => {
    const lit: LiteralExpr = {
      kind: 'Literal',
      valueType: LiteralType.Integer,
      value: '42',
    };
    const expr: Expression = lit;
    expect(expr.kind).toBe('Literal');
    if (expr.kind === 'Literal') {
      expect(expr.valueType).toBe(LiteralType.Integer);
      expect(expr.value).toBe('42');
    }
  });

  it('creates an IdentifierRef', () => {
    const ref: IdentifierRefExpr = {
      kind: 'IdentifierRef',
      library: 'Common',
      name: 'InpatientEncounter',
    };
    expect(ref.kind).toBe('IdentifierRef');
    expect(ref.library).toBe('Common');
  });

  it('creates a Binary expression', () => {
    const left: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '1' };
    const right: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '2' };
    const bin: BinaryExpr = {
      kind: 'Binary',
      operator: BinaryOp.Add,
      left,
      right,
    };
    expect(bin.kind).toBe('Binary');
    expect(bin.operator).toBe(BinaryOp.Add);
  });

  it('creates a Unary expression', () => {
    const operand: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' };
    const unary: UnaryExpr = {
      kind: 'Unary',
      operator: UnaryOp.Not,
      operand,
    };
    expect(unary.kind).toBe('Unary');
  });

  it('creates IfThenElse', () => {
    const cond: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' };
    const then: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '1' };
    const else_: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '0' };
    const expr: IfThenElseExpr = { kind: 'IfThenElse', condition: cond, then, else: else_ };
    expect(expr.kind).toBe('IfThenElse');
  });

  it('creates Case expression', () => {
    const when: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Boolean, value: 'true' };
    const then: LiteralExpr = { kind: 'Literal', valueType: LiteralType.String, value: 'yes' };
    const else_: LiteralExpr = { kind: 'Literal', valueType: LiteralType.String, value: 'no' };
    const expr: CaseExpr = {
      kind: 'Case',
      comparand: null,
      items: [{ when, then }],
      else: else_,
    };
    expect(expr.kind).toBe('Case');
    expect(expr.items).toHaveLength(1);
  });

  it('creates type expressions (Is, As, Cast, Convert)', () => {
    const operand: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Null, value: '' };
    const namedType: NamedType = { specKind: 'NamedType', namespace: 'FHIR', name: 'Patient' };

    const isExpr: IsExpr = { kind: 'Is', operand, type: namedType };
    const asExpr: AsExpr = { kind: 'As', operand, type: namedType };
    const castExpr: CastExpr = { kind: 'Cast', operand, type: namedType };
    const convertExpr: ConvertExpr = { kind: 'Convert', operand, toType: namedType, toUnit: '' };

    expect(isExpr.kind).toBe('Is');
    expect(asExpr.kind).toBe('As');
    expect(castExpr.kind).toBe('Cast');
    expect(convertExpr.kind).toBe('Convert');
  });

  it('creates BooleanTest', () => {
    const operand: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Null, value: '' };
    const expr: BooleanTestExpr = {
      kind: 'BooleanTest',
      operand,
      testValue: 'null',
      not: false,
    };
    expect(expr.kind).toBe('BooleanTest');
  });

  it('creates FunctionCall', () => {
    const arg: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '5' };
    const fc: FunctionCallExpr = {
      kind: 'FunctionCall',
      source: null,
      name: 'Abs',
      library: '',
      operands: [arg],
    };
    expect(fc.kind).toBe('FunctionCall');
    expect(fc.operands).toHaveLength(1);
  });

  it('creates MemberAccess and IndexAccess', () => {
    const source: IdentifierRefExpr = { kind: 'IdentifierRef', library: '', name: 'Patient' };
    const ma: MemberAccessExpr = { kind: 'MemberAccess', source, member: 'name' };
    const idx: IndexAccessExpr = {
      kind: 'IndexAccess',
      source,
      index: { kind: 'Literal', valueType: LiteralType.Integer, value: '0' },
    };
    expect(ma.kind).toBe('MemberAccess');
    expect(idx.kind).toBe('IndexAccess');
  });

  it('creates Retrieve', () => {
    const rt: NamedType = { specKind: 'NamedType', namespace: 'FHIR', name: 'Condition' };
    const retrieve: RetrieveExpr = {
      kind: 'Retrieve',
      resourceType: rt,
      codePath: 'code',
      codeComparator: 'in',
      codes: null,
      context: null,
      datePath: '',
      dateRange: null,
    };
    expect(retrieve.kind).toBe('Retrieve');
  });

  it('creates Interval, Tuple, List, Instance', () => {
    const low: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '1' };
    const high: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '10' };

    const interval: IntervalExpr = { kind: 'Interval', lowClosed: true, highClosed: true, low, high };
    const tuple: TupleExpr = {
      kind: 'Tuple',
      elements: [{ name: 'x', expression: low }],
    };
    const list: ListExpr = { kind: 'List', typeSpec: null, elements: [low, high] };
    const instance: InstanceExpr = {
      kind: 'Instance',
      type: { specKind: 'NamedType', namespace: 'FHIR', name: 'Quantity' },
      elements: [{ name: 'value', expression: low }],
    };

    expect(interval.kind).toBe('Interval');
    expect(tuple.kind).toBe('Tuple');
    expect(list.kind).toBe('List');
    expect(instance.kind).toBe('Instance');
  });

  it('creates Code and Concept', () => {
    const code: CodeExpr = { kind: 'Code', code: '428361000124107', system: 'SNOMED', display: 'Test' };
    const concept: ConceptExpr = { kind: 'Concept', codes: [code], display: 'Test concept' };
    expect(code.kind).toBe('Code');
    expect(concept.kind).toBe('Concept');
  });

  it('creates ExternalConstant, This, IndexRef, Total', () => {
    const ext: ExternalConstantExpr = { kind: 'ExternalConstant', name: 'context' };
    const thisExpr: ThisExpr = { kind: 'This' };
    const indexRef: IndexRefExpr = { kind: 'IndexRef' };
    const total: TotalExpr = { kind: 'Total' };

    expect(ext.kind).toBe('ExternalConstant');
    expect(thisExpr.kind).toBe('This');
    expect(indexRef.kind).toBe('IndexRef');
    expect(total.kind).toBe('Total');
  });

  it('creates Membership and Between', () => {
    const left: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '5' };
    const right: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Integer, value: '10' };

    const membership: MembershipExpr = {
      kind: 'Membership',
      left,
      right,
      operator: 'in',
      precision: 'day',
    };
    const between: BetweenExpr = {
      kind: 'Between',
      operand: left,
      low: left,
      high: right,
      properly: false,
    };

    expect(membership.kind).toBe('Membership');
    expect(between.kind).toBe('Between');
  });

  it('creates duration/difference expressions', () => {
    const low: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Date, value: '2024-01-01' };
    const high: LiteralExpr = { kind: 'Literal', valueType: LiteralType.Date, value: '2024-12-31' };

    const durBetween: DurationBetweenExpr = { kind: 'DurationBetween', precision: 'days', low, high };
    const diffBetween: DifferenceBetweenExpr = { kind: 'DifferenceBetween', precision: 'months', low, high };
    const dtComp: DateTimeComponentFromExpr = { kind: 'DateTimeComponentFrom', component: 'year', operand: low };
    const durOf: DurationOfExpr = { kind: 'DurationOf', precision: 'days', operand: low };
    const diffOf: DifferenceOfExpr = { kind: 'DifferenceOf', precision: 'months', operand: low };

    expect(durBetween.kind).toBe('DurationBetween');
    expect(diffBetween.kind).toBe('DifferenceBetween');
    expect(dtComp.kind).toBe('DateTimeComponentFrom');
    expect(durOf.kind).toBe('DurationOf');
    expect(diffOf.kind).toBe('DifferenceOf');
  });

  it('creates TypeExtent', () => {
    const te: TypeExtentExpr = {
      kind: 'TypeExtent',
      extent: 'minimum',
      type: { specKind: 'NamedType', namespace: 'System', name: 'Integer' },
    };
    expect(te.kind).toBe('TypeExtent');
  });

  it('creates Timing expression', () => {
    const left: IdentifierRefExpr = { kind: 'IdentifierRef', library: '', name: 'A' };
    const right: IdentifierRefExpr = { kind: 'IdentifierRef', library: '', name: 'B' };
    const op: TimingOp = {
      timingKind: TimingKind.Overlaps,
      precision: 'day',
      properly: false,
      before: false,
      after: false,
    };
    const timing: TimingExpr = { kind: 'Timing', left, right, operator: op };
    expect(timing.kind).toBe('Timing');
    expect(timing.operator.timingKind).toBe(TimingKind.Overlaps);
  });

  it('creates SetAggregate', () => {
    const operand: IdentifierRefExpr = { kind: 'IdentifierRef', library: '', name: 'intervals' };
    const sa: SetAggregateExpr = { kind: 'SetAggregate', setKind: 'expand', operand, per: null };
    expect(sa.kind).toBe('SetAggregate');
  });

  it('narrows Expression union in a switch', () => {
    const expr: Expression = { kind: 'This' };
    let found = false;
    switch (expr.kind) {
      case 'This':
        found = true;
        break;
      case 'Literal':
        // TypeScript would narrow to LiteralExpr here
        break;
    }
    expect(found).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// TypeSpecifier discriminated union
// ---------------------------------------------------------------------------

describe('TypeSpecifier discriminated union', () => {
  it('creates NamedType', () => {
    const ts: TypeSpecifier = { specKind: 'NamedType', namespace: 'FHIR', name: 'Patient' };
    expect(ts.specKind).toBe('NamedType');
    if (ts.specKind === 'NamedType') {
      expect(ts.name).toBe('Patient');
    }
  });

  it('creates ListType', () => {
    const inner: NamedType = { specKind: 'NamedType', namespace: 'System', name: 'String' };
    const ts: ListType = { specKind: 'ListType', elementType: inner };
    expect(ts.specKind).toBe('ListType');
  });

  it('creates IntervalType', () => {
    const inner: NamedType = { specKind: 'NamedType', namespace: 'System', name: 'Integer' };
    const ts: IntervalType = { specKind: 'IntervalType', pointType: inner };
    expect(ts.specKind).toBe('IntervalType');
  });

  it('creates TupleType', () => {
    const ts: TupleType = {
      specKind: 'TupleType',
      elements: [
        { name: 'name', type: { specKind: 'NamedType', namespace: 'System', name: 'String' } },
        { name: 'age', type: { specKind: 'NamedType', namespace: 'System', name: 'Integer' } },
      ],
    };
    expect(ts.specKind).toBe('TupleType');
    expect(ts.elements).toHaveLength(2);
  });

  it('creates ChoiceType', () => {
    const ts: ChoiceType = {
      specKind: 'ChoiceType',
      types: [
        { specKind: 'NamedType', namespace: 'System', name: 'String' },
        { specKind: 'NamedType', namespace: 'System', name: 'Integer' },
      ],
    };
    expect(ts.specKind).toBe('ChoiceType');
    expect(ts.types).toHaveLength(2);
  });

  it('narrows TypeSpecifier in a switch', () => {
    const ts: TypeSpecifier = { specKind: 'ListType', elementType: { specKind: 'NamedType', namespace: '', name: 'Any' } };
    let narrowed = false;
    switch (ts.specKind) {
      case 'ListType':
        narrowed = ts.elementType.specKind === 'NamedType';
        break;
    }
    expect(narrowed).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Library structure
// ---------------------------------------------------------------------------

describe('Library', () => {
  it('type-checks a complete Library', () => {
    const lib: Library = {
      identifier: { name: 'CMS.Common', version: '1.0.0' },
      usings: [{ name: 'FHIR', version: '4.0.1', alias: '' }],
      includes: [{ name: 'FHIRHelpers', version: '4.0.1', alias: 'FHIRHelpers' }],
      codeSystems: [{ name: 'LOINC', id: 'http://loinc.org', version: '', accessLevel: AccessLevel.Public }],
      valueSets: [{ name: 'MyVS', id: 'http://example.org/vs', version: '', codeSystems: [], accessLevel: AccessLevel.Public }],
      codes: [{ name: 'MyCode', id: '12345', system: 'LOINC', display: 'Test', accessLevel: AccessLevel.Public }],
      concepts: [{ name: 'MyConcept', codes: ['MyCode'], display: 'Concept', accessLevel: AccessLevel.Public }],
      parameters: [{
        name: 'MeasurementPeriod',
        type: {
          specKind: 'IntervalType',
          pointType: { specKind: 'NamedType', namespace: 'System', name: 'DateTime' },
        },
        default: null,
        accessLevel: AccessLevel.Public,
      }],
      contexts: [{ model: '', name: 'Patient' }],
      statements: [{
        name: 'InpatientEncounter',
        expression: {
          kind: 'Retrieve',
          resourceType: { specKind: 'NamedType', namespace: 'FHIR', name: 'Encounter' },
          codePath: '',
          codeComparator: '',
          codes: null,
          context: null,
          datePath: '',
          dateRange: null,
        },
        accessLevel: AccessLevel.Public,
        context: 'Patient',
      }],
      functions: [{
        name: 'Normalize',
        operands: [{ name: 'value', type: { specKind: 'NamedType', namespace: 'System', name: 'Any' } }],
        returnType: { specKind: 'NamedType', namespace: 'System', name: 'Any' },
        body: { kind: 'IdentifierRef', library: '', name: 'value' },
        external: false,
        fluent: false,
        accessLevel: AccessLevel.Public,
      }],
    };

    expect(lib.identifier?.name).toBe('CMS.Common');
    expect(lib.usings).toHaveLength(1);
    expect(lib.statements).toHaveLength(1);
    expect(lib.functions).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------
// Complex nested expression
// ---------------------------------------------------------------------------

describe('Complex nested expressions', () => {
  it('builds a Query with where, sort, and nested binary', () => {
    // from [Encounter] E where E.status = 'finished' sort by start asc
    const source: AliasedSource = {
      source: {
        kind: 'Retrieve',
        resourceType: { specKind: 'NamedType', namespace: 'FHIR', name: 'Encounter' },
        codePath: '',
        codeComparator: '',
        codes: null,
        context: null,
        datePath: '',
        dateRange: null,
      },
      alias: 'E',
    };

    const where: BinaryExpr = {
      kind: 'Binary',
      operator: BinaryOp.Equal,
      left: {
        kind: 'MemberAccess',
        source: { kind: 'IdentifierRef', library: '', name: 'E' },
        member: 'status',
      },
      right: { kind: 'Literal', valueType: LiteralType.String, value: 'finished' },
    };

    const sortBy: SortByItem = {
      expression: { kind: 'IdentifierRef', library: '', name: 'start' },
      direction: SortDirection.Asc,
    };

    const query: QueryExpr = {
      kind: 'Query',
      sources: [source],
      let: [],
      with: [],
      without: [],
      where,
      return: null,
      aggregate: null,
      sort: { byItems: [sortBy], direction: SortDirection.Asc },
    };

    expect(query.kind).toBe('Query');
    expect(query.sources).toHaveLength(1);
    expect(query.sources[0].alias).toBe('E');
    expect(query.where?.kind).toBe('Binary');
    expect(query.sort?.byItems).toHaveLength(1);

    // Verify deep narrowing
    const expr: Expression = query;
    if (expr.kind === 'Query' && expr.where?.kind === 'Binary') {
      expect(expr.where.operator).toBe(BinaryOp.Equal);
      if (expr.where.left.kind === 'MemberAccess') {
        expect(expr.where.left.member).toBe('status');
      }
    }
  });

  it('builds a Query with aggregate clause', () => {
    const query: QueryExpr = {
      kind: 'Query',
      sources: [{
        source: {
          kind: 'Retrieve',
          resourceType: { specKind: 'NamedType', namespace: 'FHIR', name: 'Observation' },
          codePath: '',
          codeComparator: '',
          codes: null,
          context: null,
          datePath: '',
          dateRange: null,
        },
        alias: 'O',
      }],
      let: [],
      with: [],
      without: [],
      where: null,
      return: null,
      aggregate: {
        identifier: 'total',
        distinct: false,
        all: false,
        starting: { kind: 'Literal', valueType: LiteralType.Integer, value: '0' },
        expression: {
          kind: 'Binary',
          operator: BinaryOp.Add,
          left: { kind: 'Total' },
          right: {
            kind: 'MemberAccess',
            source: { kind: 'IdentifierRef', library: '', name: 'O' },
            member: 'value',
          },
        },
      },
      sort: null,
    };

    expect(query.aggregate?.identifier).toBe('total');
    expect(query.aggregate?.expression.kind).toBe('Binary');
  });
});
