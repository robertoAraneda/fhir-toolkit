/**
 * ELM JSON -> AST importer.
 *
 * Converts HL7 ELM JSON structures into the internal CQL AST representation.
 */

import type {
  ElmLibrary,
  ElmExpression,
  ElmTypeSpecifier,
  ElmTupleElement,
} from './types.js';

import type {
  Expression,
  TypeSpecifier,
  NamedType,
  BinaryOp,
  UnaryOp,
} from '../ast/nodes.js';

import {
  LiteralType,
  BinaryOp as BinaryOpEnum,
  UnaryOp as UnaryOpEnum,
  AccessLevel,
  SortDirection,
  TimingKind,
} from '../ast/nodes.js';

import type {
  Library,
  UsingDef,
  IncludeDef,
  ParameterDef,
  CodeSystemDef,
  ValueSetDef,
  CodeDef,
  ConceptDef,
  ContextDef,
  ExpressionDef,
} from '../ast/library.js';

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Convert an ELM Library into an AST Library. */
export function importElmLibrary(elm: ElmLibrary): Library {
  return {
    identifier: elm.identifier
      ? { name: elm.identifier.id, version: elm.identifier.version ?? '' }
      : null,
    usings: importUsings(elm.usings),
    includes: importIncludes(elm.includes),
    parameters: importParameters(elm.parameters),
    codeSystems: importCodeSystems(elm.codeSystems),
    valueSets: importValueSets(elm.valueSets),
    codes: importCodes(elm.codes),
    concepts: importConcepts(elm.concepts),
    contexts: importContexts(elm.contexts),
    statements: importStatements(elm.statements),
    functions: [],
  };
}

/** Convert a single ELM expression node to an AST Expression. */
export function importExpression(node: ElmExpression | undefined): Expression {
  if (!node) {
    return { kind: 'Literal', valueType: LiteralType.Null, value: '' };
  }

  switch (node.type) {
    // Literals
    case 'Null':
      return { kind: 'Literal', valueType: LiteralType.Null, value: '' };
    case 'Literal':
      return importLiteral(node);

    // References
    case 'ExpressionRef':
      return { kind: 'IdentifierRef', name: node.name ?? '', library: node.libraryName ?? '' };
    case 'ParameterRef':
      return { kind: 'ExternalConstant', name: node.name ?? '' };

    // Property (member access)
    case 'Property':
      return {
        kind: 'MemberAccess',
        source: importExpression(node.source),
        member: node.path ?? '',
      };

    // Retrieve
    case 'Retrieve':
      return importRetrieve(node);

    // Query
    case 'Query':
      return importQuery(node);

    // Binary operators
    case 'Add': case 'Subtract': case 'Multiply': case 'Divide':
    case 'TruncatedDivide': case 'Modulo': case 'Power': case 'Concatenate':
    case 'Equal': case 'NotEqual': case 'Equivalent': case 'NotEquivalent':
    case 'Less': case 'LessOrEqual': case 'Greater': case 'GreaterOrEqual':
    case 'And': case 'Or': case 'Xor': case 'Implies':
    case 'Union': case 'Intersect': case 'Except': case 'In': case 'Contains':
      return importBinary(node);

    // Unary operators
    case 'Not': case 'Exists': case 'Abs': case 'Negate':
    case 'Distinct': case 'Flatten': case 'SingletonFrom': case 'PointFrom':
    case 'Start': case 'End': case 'Width': case 'Successor': case 'Predecessor':
      return importUnary(node);

    // Boolean tests
    case 'IsNull':
      return { kind: 'BooleanTest', operand: importSingleOperand(node), testValue: 'null', not: false };
    case 'IsTrue':
      return { kind: 'BooleanTest', operand: importSingleOperand(node), testValue: 'true', not: false };
    case 'IsFalse':
      return { kind: 'BooleanTest', operand: importSingleOperand(node), testValue: 'false', not: false };

    // Type operations
    case 'Is':
      return {
        kind: 'Is',
        operand: importSingleOperand(node),
        type: importTypeSpecifier(node.isTypeSpecifier) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
      };
    case 'As':
      if (node.strict) {
        return {
          kind: 'Cast',
          operand: importSingleOperand(node),
          type: importTypeSpecifier(node.asTypeSpecifier) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
        };
      }
      return {
        kind: 'As',
        operand: importSingleOperand(node),
        type: importTypeSpecifier(node.asTypeSpecifier) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
      };
    case 'Convert':
      return {
        kind: 'Convert',
        operand: importSingleOperand(node),
        toType: importTypeSpecifier(node.toTypeSpecifier) ?? null,
        toUnit: '',
      };

    // Conditional
    case 'If':
      return {
        kind: 'IfThenElse',
        condition: importExpression(node.condition),
        then: importExpression(node.then),
        else: importExpression(node.else),
      };
    case 'Case':
      return importCase(node);

    // Duration/Difference
    case 'DurationBetween': {
      const ops = importOperandSlice(node);
      return {
        kind: 'DurationBetween',
        precision: node.precision ?? '',
        low: ops[0] ?? nullLiteral(),
        high: ops[1] ?? nullLiteral(),
      };
    }
    case 'DifferenceBetween': {
      const ops = importOperandSlice(node);
      return {
        kind: 'DifferenceBetween',
        precision: node.precision ?? '',
        low: ops[0] ?? nullLiteral(),
        high: ops[1] ?? nullLiteral(),
      };
    }

    // DateTime extraction
    case 'DateTimeComponentFrom':
      return {
        kind: 'DateTimeComponentFrom',
        component: node.precision ?? '',
        operand: importSingleOperand(node),
      };
    case 'DurationOf':
      return {
        kind: 'DurationOf',
        precision: node.precision ?? '',
        operand: importSingleOperand(node),
      };
    case 'DifferenceOf':
      return {
        kind: 'DifferenceOf',
        precision: node.precision ?? '',
        operand: importSingleOperand(node),
      };

    // Timing operators
    case 'SameAs': case 'Includes': case 'IncludedIn': case 'Before': case 'After':
    case 'SameOrBefore': case 'SameOrAfter': case 'Meets': case 'MeetsBefore':
    case 'MeetsAfter': case 'Overlaps': case 'OverlapsBefore': case 'OverlapsAfter':
    case 'Starts': case 'Ends': case 'ProperIncludes': case 'ProperIncludedIn':
      return importTiming(node);

    // Interval
    case 'Interval':
      return importInterval(node);

    // List
    case 'List':
      return importList(node);

    // Tuple
    case 'Tuple':
      return importTupleExpr(node);

    // Instance
    case 'Instance':
      return importInstanceExpr(node);

    // Code/Concept
    case 'Code':
      return importCodeExpr(node);
    case 'Concept':
      return importConceptExpr(node);

    // Function call
    case 'FunctionRef':
      return importFunctionCall(node);

    // Indexer
    case 'Indexer': {
      const ops = importOperandSlice(node);
      return {
        kind: 'IndexAccess',
        source: ops[0] ?? nullLiteral(),
        index: ops[1] ?? nullLiteral(),
      };
    }

    // Special tokens
    case 'This':
      return { kind: 'This' };
    case 'IterationIndex':
      return { kind: 'IndexRef' };
    case 'Total':
      return { kind: 'Total' };

    // Set aggregate
    case 'Expand':
    case 'Collapse':
      return {
        kind: 'SetAggregate',
        setKind: node.type.toLowerCase(),
        operand: importSingleOperand(node),
        per: node.per ? importExpression(node.per) : null,
      };

    // Minimum/Maximum
    case 'Minimum':
    case 'Maximum':
      return {
        kind: 'TypeExtent',
        extent: node.type.toLowerCase(),
        type: importTypeExtentTarget(node),
      };

    default:
      return { kind: 'Literal', valueType: LiteralType.Null, value: '' };
  }
}

// ---------------------------------------------------------------------------
// Definition helpers
// ---------------------------------------------------------------------------

function importUsings(defs?: { def: { localIdentifier?: string; uri?: string; version?: string }[] }): UsingDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.localIdentifier ?? '',
    version: d.version ?? '',
    alias: '',
  }));
}

function importIncludes(defs?: { def: { localIdentifier?: string; path?: string; version?: string }[] }): IncludeDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.path ?? '',
    version: d.version ?? '',
    alias: d.localIdentifier ?? '',
  }));
}

function importParameters(defs?: { def: { name?: string; accessLevel?: string; parameterTypeSpecifier?: ElmTypeSpecifier; default?: ElmExpression }[] }): ParameterDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.name ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
    type: d.parameterTypeSpecifier ? importTypeSpecifier(d.parameterTypeSpecifier) ?? null : null,
    default: d.default ? importExpression(d.default) : null,
  }));
}

function importCodeSystems(defs?: { def: { name?: string; id?: string; version?: string; accessLevel?: string }[] }): CodeSystemDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.name ?? '',
    id: d.id ?? '',
    version: d.version ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
  }));
}

function importValueSets(defs?: { def: { name?: string; id?: string; version?: string; accessLevel?: string; codeSystem?: string[] }[] }): ValueSetDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.name ?? '',
    id: d.id ?? '',
    version: d.version ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
    codeSystems: d.codeSystem ?? [],
  }));
}

function importCodes(defs?: { def: { name?: string; id?: string; display?: string; accessLevel?: string; codeSystem?: { name?: string } }[] }): CodeDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.name ?? '',
    id: d.id ?? '',
    display: d.display ?? '',
    system: d.codeSystem?.name ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
  }));
}

function importConcepts(defs?: { def: { name?: string; display?: string; accessLevel?: string; code?: { name?: string }[] }[] }): ConceptDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({
    name: d.name ?? '',
    display: d.display ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
    codes: (d.code ?? []).map(c => c.name ?? ''),
  }));
}

function importContexts(defs?: { def: { name?: string }[] }): ContextDef[] {
  if (!defs) return [];
  return defs.def.map(d => ({ model: '', name: d.name ?? '' }));
}

function importStatements(stmts?: { def: { name?: string; context?: string; accessLevel?: string; expression?: ElmExpression }[] }): ExpressionDef[] {
  if (!stmts) return [];
  return stmts.def.map(d => ({
    name: d.name ?? '',
    context: d.context ?? '',
    accessLevel: importAccessLevel(d.accessLevel),
    expression: importExpression(d.expression),
  }));
}

// ---------------------------------------------------------------------------
// Type specifiers
// ---------------------------------------------------------------------------

function importTypeSpecifier(ts: ElmTypeSpecifier | undefined): TypeSpecifier | null {
  if (!ts) return null;
  switch (ts.type) {
    case 'NamedTypeSpecifier':
      return { specKind: 'NamedType', namespace: ts.namespace ?? '', name: ts.name ?? '' };
    case 'ListTypeSpecifier':
      return {
        specKind: 'ListType',
        elementType: importTypeSpecifier(ts.elementType) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
      };
    case 'IntervalTypeSpecifier':
      return {
        specKind: 'IntervalType',
        pointType: importTypeSpecifier(ts.pointType) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
      };
    case 'TupleTypeSpecifier':
      return {
        specKind: 'TupleType',
        elements: (ts.element ?? []).map(e => ({
          name: e.name ?? '',
          type: importTypeSpecifier(e.elementType) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' },
        })),
      };
    case 'ChoiceTypeSpecifier':
      return {
        specKind: 'ChoiceType',
        types: (ts.choice ?? []).map(c => importTypeSpecifier(c) ?? { specKind: 'NamedType', namespace: '', name: 'Unknown' }),
      };
    default:
      return { specKind: 'NamedType', namespace: '', name: ts.type };
  }
}

function importAccessLevel(s?: string): AccessLevel {
  if (s && s.toLowerCase() === 'private') return AccessLevel.Private;
  return AccessLevel.Public;
}

// ---------------------------------------------------------------------------
// Expression helpers
// ---------------------------------------------------------------------------

function nullLiteral(): Expression {
  return { kind: 'Literal', valueType: LiteralType.Null, value: '' };
}

function importLiteral(node: ElmExpression): Expression {
  let lt = LiteralType.String;
  const vt = node.valueType ?? '';
  if (vt.endsWith('}Boolean')) lt = LiteralType.Boolean;
  else if (vt.endsWith('}Integer')) lt = LiteralType.Integer;
  else if (vt.endsWith('}Long')) lt = LiteralType.Long;
  else if (vt.endsWith('}Decimal')) lt = LiteralType.Decimal;
  else if (vt.endsWith('}String')) lt = LiteralType.String;
  else if (vt.endsWith('}Date')) lt = LiteralType.Date;
  else if (vt.endsWith('}DateTime')) lt = LiteralType.DateTime;
  else if (vt.endsWith('}Time')) lt = LiteralType.Time;
  else if (vt.endsWith('}Quantity')) lt = LiteralType.Quantity;
  else if (vt.endsWith('}Ratio')) lt = LiteralType.Ratio;
  return { kind: 'Literal', valueType: lt, value: node.value ?? '' };
}

function importRetrieve(node: ElmExpression): Expression {
  const rt = parseDataType(node.dataType ?? '');
  return {
    kind: 'Retrieve',
    resourceType: rt,
    codePath: node.codeProperty ?? '',
    codeComparator: node.codeComparator ?? '',
    codes: node.codes ? importExpression(node.codes) : null,
    context: null,
    datePath: node.dateProperty ?? '',
    dateRange: node.dateRange ? importExpression(node.dateRange) : null,
  };
}

function parseDataType(dt: string): NamedType {
  const idx = dt.lastIndexOf('}');
  if (idx >= 0 && dt.startsWith('{')) {
    let ns = dt.substring(1, idx);
    const name = dt.substring(idx + 1);
    if (ns === 'http://hl7.org/fhir') ns = 'FHIR';
    return { specKind: 'NamedType', namespace: ns, name };
  }
  return { specKind: 'NamedType', namespace: '', name: dt };
}

const elmBinaryOps: Record<string, BinaryOp> = {
  Add: BinaryOpEnum.Add,
  Subtract: BinaryOpEnum.Subtract,
  Multiply: BinaryOpEnum.Multiply,
  Divide: BinaryOpEnum.Divide,
  TruncatedDivide: BinaryOpEnum.Div,
  Modulo: BinaryOpEnum.Mod,
  Power: BinaryOpEnum.Power,
  Concatenate: BinaryOpEnum.Concatenate,
  Equal: BinaryOpEnum.Equal,
  NotEqual: BinaryOpEnum.NotEqual,
  Equivalent: BinaryOpEnum.Equivalent,
  NotEquivalent: BinaryOpEnum.NotEquivalent,
  Less: BinaryOpEnum.Less,
  LessOrEqual: BinaryOpEnum.LessOrEqual,
  Greater: BinaryOpEnum.Greater,
  GreaterOrEqual: BinaryOpEnum.GreaterOrEqual,
  And: BinaryOpEnum.And,
  Or: BinaryOpEnum.Or,
  Xor: BinaryOpEnum.Xor,
  Implies: BinaryOpEnum.Implies,
  Union: BinaryOpEnum.Union,
  Intersect: BinaryOpEnum.Intersect,
  Except: BinaryOpEnum.Except,
  In: BinaryOpEnum.In,
  Contains: BinaryOpEnum.Contains,
};

function importBinary(node: ElmExpression): Expression {
  const op = elmBinaryOps[node.type];
  if (op === undefined) return nullLiteral();
  const ops = importOperandSlice(node);
  return {
    kind: 'Binary',
    operator: op,
    left: ops[0] ?? nullLiteral(),
    right: ops[1] ?? nullLiteral(),
  };
}

const elmUnaryOps: Record<string, UnaryOp> = {
  Not: UnaryOpEnum.Not,
  Exists: UnaryOpEnum.Exists,
  Abs: UnaryOpEnum.Positive,
  Negate: UnaryOpEnum.Negate,
  Distinct: UnaryOpEnum.Distinct,
  Flatten: UnaryOpEnum.Flatten,
  SingletonFrom: UnaryOpEnum.SingletonFrom,
  PointFrom: UnaryOpEnum.PointFrom,
  Start: UnaryOpEnum.StartOf,
  End: UnaryOpEnum.EndOf,
  Width: UnaryOpEnum.WidthOf,
  Successor: UnaryOpEnum.SuccessorOf,
  Predecessor: UnaryOpEnum.PredecessorOf,
};

function importUnary(node: ElmExpression): Expression {
  const op = elmUnaryOps[node.type];
  if (op === undefined) return nullLiteral();
  return {
    kind: 'Unary',
    operator: op,
    operand: importSingleOperand(node),
  };
}

function importCase(node: ElmExpression): Expression {
  return {
    kind: 'Case',
    comparand: node.comparand ? importExpression(node.comparand) : null,
    items: (node.caseItem ?? []).map(item => ({
      when: importExpression(item.when),
      then: importExpression(item.then),
    })),
    else: importExpression(node.else),
  };
}

const elmTimingKinds: Record<string, { timingKind: TimingKind; properly: boolean; before: boolean; after: boolean }> = {
  SameAs:           { timingKind: TimingKind.SameAs, properly: false, before: false, after: false },
  Includes:         { timingKind: TimingKind.Includes, properly: false, before: false, after: false },
  IncludedIn:       { timingKind: TimingKind.IncludedIn, properly: false, before: false, after: false },
  Before:           { timingKind: TimingKind.BeforeOrAfter, properly: false, before: true, after: false },
  After:            { timingKind: TimingKind.BeforeOrAfter, properly: false, before: false, after: true },
  SameOrBefore:     { timingKind: TimingKind.BeforeOrAfter, properly: true, before: true, after: false },
  SameOrAfter:      { timingKind: TimingKind.BeforeOrAfter, properly: true, before: false, after: true },
  Meets:            { timingKind: TimingKind.Meets, properly: false, before: false, after: false },
  MeetsBefore:      { timingKind: TimingKind.Meets, properly: false, before: true, after: false },
  MeetsAfter:       { timingKind: TimingKind.Meets, properly: false, before: false, after: true },
  Overlaps:         { timingKind: TimingKind.Overlaps, properly: false, before: false, after: false },
  OverlapsBefore:   { timingKind: TimingKind.Overlaps, properly: false, before: true, after: false },
  OverlapsAfter:    { timingKind: TimingKind.Overlaps, properly: false, before: false, after: true },
  Starts:           { timingKind: TimingKind.Starts, properly: false, before: false, after: false },
  Ends:             { timingKind: TimingKind.Ends, properly: false, before: false, after: false },
  ProperIncludes:   { timingKind: TimingKind.Includes, properly: true, before: false, after: false },
  ProperIncludedIn: { timingKind: TimingKind.IncludedIn, properly: true, before: false, after: false },
};

function importTiming(node: ElmExpression): Expression {
  const info = elmTimingKinds[node.type];
  if (!info) return nullLiteral();
  const ops = importOperandSlice(node);
  return {
    kind: 'Timing',
    left: ops[0] ?? nullLiteral(),
    right: ops[1] ?? nullLiteral(),
    operator: {
      timingKind: info.timingKind,
      precision: node.precision ?? '',
      properly: info.properly,
      before: info.before,
      after: info.after,
    },
  };
}

function importInterval(node: ElmExpression): Expression {
  return {
    kind: 'Interval',
    low: importExpression(node.low),
    high: importExpression(node.high),
    lowClosed: node.lowClosed ?? true,
    highClosed: node.highClosed ?? true,
  };
}

function importList(node: ElmExpression): Expression {
  return {
    kind: 'List',
    typeSpec: null,
    elements: (node.element ?? []).map(e => importExpression(e)),
  };
}

function importTupleExpr(node: ElmExpression): Expression {
  return {
    kind: 'Tuple',
    elements: (node.element ?? []).map(e => ({
      name: e.name ?? '',
      expression: importExpression(e.source),
    })),
  };
}

function importInstanceExpr(node: ElmExpression): Expression {
  return {
    kind: 'Instance',
    type: parseDataType(node.classType ?? ''),
    elements: (node.element ?? []).map(e => ({
      name: e.name ?? '',
      expression: importExpression(e.source),
    })),
  };
}

function importCodeExpr(node: ElmExpression): Expression {
  return {
    kind: 'Code',
    code: node.code ?? '',
    system: node.system?.name ?? '',
    display: node.display ?? '',
  };
}

function importConceptExpr(node: ElmExpression): Expression {
  const codes = (node.element ?? [])
    .filter(e => e.type === 'Code')
    .map(e => ({
      kind: 'Code' as const,
      code: e.code ?? '',
      system: e.system?.name ?? '',
      display: e.display ?? '',
    }));
  return {
    kind: 'Concept',
    codes,
    display: node.display ?? '',
  };
}

function importFunctionCall(node: ElmExpression): Expression {
  return {
    kind: 'FunctionCall',
    source: null,
    name: node.name ?? '',
    library: node.libraryName ?? '',
    operands: importOperandSlice(node),
  };
}

function importQuery(node: ElmExpression): Expression {
  const sources = (node.sourceClause ?? []).map(s => ({
    source: importExpression(s.expression),
    alias: s.alias ?? '',
  }));

  const letClauses = (node.let ?? []).map(l => ({
    identifier: l.identifier ?? '',
    expression: importExpression(l.expression),
  }));

  const withClauses = (node.relationship ?? [])
    .filter(r => r.type !== 'Without')
    .map(r => ({
      source: { source: importExpression(r.expression), alias: r.alias ?? '' },
      condition: importExpression(r.suchThat),
    }));

  const withoutClauses = (node.relationship ?? [])
    .filter(r => r.type === 'Without')
    .map(r => ({
      source: { source: importExpression(r.expression), alias: r.alias ?? '' },
      condition: importExpression(r.suchThat),
    }));

  let returnClause = null;
  if (node.return) {
    returnClause = {
      expression: importExpression(node.return.expression),
      distinct: node.return.distinct ?? false,
      all: false,
    };
  }

  let sortClause = null;
  if (node.sort?.by && node.sort.by.length > 0) {
    sortClause = {
      direction: SortDirection.Asc,
      byItems: node.sort.by.map(item => ({
        direction: item.direction === 'desc' ? SortDirection.Desc : SortDirection.Asc,
        expression: importExpression(item.expression),
      })),
    };
  }

  let aggregateClause = null;
  if (node.aggregate) {
    aggregateClause = {
      identifier: node.aggregate.identifier ?? '',
      distinct: node.aggregate.distinct ?? false,
      all: false,
      starting: node.aggregate.starting ? importExpression(node.aggregate.starting) : null,
      expression: importExpression(node.aggregate.expression),
    };
  }

  return {
    kind: 'Query',
    sources,
    let: letClauses,
    with: withClauses,
    without: withoutClauses,
    where: node.where ? importExpression(node.where) : null,
    return: returnClause,
    sort: sortClause,
    aggregate: aggregateClause,
  };
}

// ---------------------------------------------------------------------------
// Operand extraction
// ---------------------------------------------------------------------------

function importSingleOperand(node: ElmExpression): Expression {
  if (!node.operand) return nullLiteral();
  if (Array.isArray(node.operand)) {
    return node.operand.length > 0 ? importExpression(node.operand[0]) : nullLiteral();
  }
  return importExpression(node.operand);
}

function importOperandSlice(node: ElmExpression): Expression[] {
  if (!node.operand) return [];
  if (Array.isArray(node.operand)) {
    return node.operand.map(op => importExpression(op));
  }
  return [importExpression(node.operand)];
}

function importTypeExtentTarget(node: ElmExpression): NamedType {
  if (node.operand && !Array.isArray(node.operand) && node.operand.name) {
    return {
      specKind: 'NamedType',
      namespace: node.operand.libraryName ?? '',
      name: node.operand.name,
    };
  }
  return { specKind: 'NamedType', namespace: '', name: 'Unknown' };
}
