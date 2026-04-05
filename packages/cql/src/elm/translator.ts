/**
 * AST -> ELM JSON translator.
 *
 * Converts internal CQL AST structures into HL7 ELM JSON for interchange.
 * Uses the ExpressionVisitor pattern to dispatch on expression kinds.
 */

import type {
  ElmLibrary,
  ElmExpression,
  ElmTypeSpecifier,
  ElmCaseItem,
  ElmAliasedQuerySource,
  ElmLetClause,
  ElmRelationshipClause,
  ElmReturnClause,
  ElmSortClause,
  ElmSortByItem,
  ElmAggregateClause,
} from './types.js';

import type {
  Expression,
  TypeSpecifier,
  LiteralExpr,
  IdentifierRefExpr,
  BinaryExpr,
  UnaryExpr,
  IfThenElseExpr,
  CaseExpr,
  IsExpr,
  AsExpr,
  CastExpr,
  ConvertExpr,
  BooleanTestExpr,
  FunctionCallExpr,
  MemberAccessExpr,
  IndexAccessExpr,
  RetrieveExpr,
  QueryExpr,
  IntervalExpr,
  TupleExpr,
  ListExpr,
  InstanceExpr,
  CodeExpr,
  ConceptExpr,
  ExternalConstantExpr,
  ThisExpr,
  IndexRefExpr,
  TotalExpr,
  MembershipExpr,
  BetweenExpr,
  DurationBetweenExpr,
  DifferenceBetweenExpr,
  DateTimeComponentFromExpr,
  DurationOfExpr,
  DifferenceOfExpr,
  TypeExtentExpr,
  TimingExpr,
  SetAggregateExpr,
} from '../ast/nodes.js';

import {
  LiteralType,
  BinaryOp,
  UnaryOp,
  AccessLevel,
  SortDirection,
  TimingKind,
} from '../ast/nodes.js';

import type { ExpressionVisitor } from '../eval/visitor.js';
import { visit } from '../eval/visitor.js';

import type { Library } from '../ast/library.js';

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Convert an AST Library into an ELM Library for JSON serialization. */
export function translateLibrary(lib: Library): ElmLibrary {
  const out: ElmLibrary = {
    schemaIdentifier: { id: 'urn:hl7-org:elm', version: 'r1' },
  };

  if (lib.identifier) {
    out.identifier = { id: lib.identifier.name, version: lib.identifier.version };
  }

  if (lib.usings.length > 0) {
    out.usings = {
      def: lib.usings.map(d => ({
        localIdentifier: d.alias || d.name,
        version: d.version,
      })),
    };
  }

  if (lib.includes.length > 0) {
    out.includes = {
      def: lib.includes.map(d => ({
        localIdentifier: d.alias,
        path: d.name,
        version: d.version,
      })),
    };
  }

  if (lib.parameters.length > 0) {
    out.parameters = {
      def: lib.parameters.map(d => ({
        name: d.name,
        accessLevel: translateAccessLevel(d.accessLevel),
        ...(d.type ? { parameterTypeSpecifier: translateTypeSpecifier(d.type) } : {}),
        ...(d.default ? { default: translateExpression(d.default) } : {}),
      })),
    };
  }

  if (lib.codeSystems.length > 0) {
    out.codeSystems = {
      def: lib.codeSystems.map(d => ({
        name: d.name,
        id: d.id,
        version: d.version,
        accessLevel: translateAccessLevel(d.accessLevel),
      })),
    };
  }

  if (lib.valueSets.length > 0) {
    out.valueSets = {
      def: lib.valueSets.map(d => ({
        name: d.name,
        id: d.id,
        version: d.version,
        accessLevel: translateAccessLevel(d.accessLevel),
        codeSystem: d.codeSystems,
      })),
    };
  }

  if (lib.codes.length > 0) {
    out.codes = {
      def: lib.codes.map(d => ({
        name: d.name,
        id: d.id,
        display: d.display,
        accessLevel: translateAccessLevel(d.accessLevel),
        ...(d.system ? { codeSystem: { name: d.system } } : {}),
      })),
    };
  }

  if (lib.concepts.length > 0) {
    out.concepts = {
      def: lib.concepts.map(d => ({
        name: d.name,
        display: d.display,
        accessLevel: translateAccessLevel(d.accessLevel),
        code: d.codes.map(c => ({ name: c })),
      })),
    };
  }

  if (lib.contexts.length > 0) {
    out.contexts = {
      def: lib.contexts.map(d => ({ name: d.name })),
    };
  }

  if (lib.statements.length > 0 || lib.functions.length > 0) {
    const defs: Array<{ name: string; context?: string; accessLevel: string; expression?: ElmExpression }> =
      lib.statements.map(e => ({
        name: e.name,
        context: e.context,
        accessLevel: translateAccessLevel(e.accessLevel),
        expression: translateExpression(e.expression),
      }));
    for (const f of lib.functions) {
      defs.push({
        name: f.name,
        context: '',
        accessLevel: translateAccessLevel(f.accessLevel),
        expression: f.body ? translateExpression(f.body) : undefined,
      });
    }
    out.statements = { def: defs };
  }

  return out;
}

/** Convert a single AST expression to an ELM expression node. */
export function translateExpression(expr: Expression): ElmExpression {
  return visit(expr, translator);
}

// ---------------------------------------------------------------------------
// Type specifiers
// ---------------------------------------------------------------------------

function translateTypeSpecifier(ts: TypeSpecifier): ElmTypeSpecifier | undefined {
  switch (ts.specKind) {
    case 'NamedType':
      return { type: 'NamedTypeSpecifier', namespace: ts.namespace, name: ts.name };
    case 'ListType':
      return { type: 'ListTypeSpecifier', elementType: translateTypeSpecifier(ts.elementType) };
    case 'IntervalType':
      return { type: 'IntervalTypeSpecifier', pointType: translateTypeSpecifier(ts.pointType) };
    case 'TupleType':
      return {
        type: 'TupleTypeSpecifier',
        element: ts.elements.map(e => ({
          name: e.name,
          elementType: translateTypeSpecifier(e.type),
        })),
      };
    case 'ChoiceType':
      return {
        type: 'ChoiceTypeSpecifier',
        choice: ts.types.map(t => translateTypeSpecifier(t)!),
      };
  }
}

function translateAccessLevel(al: AccessLevel): string {
  return al === AccessLevel.Private ? 'Private' : 'Public';
}

// ---------------------------------------------------------------------------
// Binary / Unary operator name maps
// ---------------------------------------------------------------------------

const binaryOpNames: Record<number, string> = {
  [BinaryOp.Add]: 'Add',
  [BinaryOp.Subtract]: 'Subtract',
  [BinaryOp.Multiply]: 'Multiply',
  [BinaryOp.Divide]: 'Divide',
  [BinaryOp.Div]: 'TruncatedDivide',
  [BinaryOp.Mod]: 'Modulo',
  [BinaryOp.Power]: 'Power',
  [BinaryOp.Concatenate]: 'Concatenate',
  [BinaryOp.Equal]: 'Equal',
  [BinaryOp.NotEqual]: 'NotEqual',
  [BinaryOp.Equivalent]: 'Equivalent',
  [BinaryOp.NotEquivalent]: 'NotEquivalent',
  [BinaryOp.Less]: 'Less',
  [BinaryOp.LessOrEqual]: 'LessOrEqual',
  [BinaryOp.Greater]: 'Greater',
  [BinaryOp.GreaterOrEqual]: 'GreaterOrEqual',
  [BinaryOp.And]: 'And',
  [BinaryOp.Or]: 'Or',
  [BinaryOp.Xor]: 'Xor',
  [BinaryOp.Implies]: 'Implies',
  [BinaryOp.Union]: 'Union',
  [BinaryOp.Intersect]: 'Intersect',
  [BinaryOp.Except]: 'Except',
  [BinaryOp.In]: 'In',
  [BinaryOp.Contains]: 'Contains',
};

const unaryOpNames: Record<number, string> = {
  [UnaryOp.Not]: 'Not',
  [UnaryOp.Exists]: 'Exists',
  [UnaryOp.Positive]: 'Abs',
  [UnaryOp.Negate]: 'Negate',
  [UnaryOp.Distinct]: 'Distinct',
  [UnaryOp.Flatten]: 'Flatten',
  [UnaryOp.SingletonFrom]: 'SingletonFrom',
  [UnaryOp.PointFrom]: 'PointFrom',
  [UnaryOp.StartOf]: 'Start',
  [UnaryOp.EndOf]: 'End',
  [UnaryOp.WidthOf]: 'Width',
  [UnaryOp.SuccessorOf]: 'Successor',
  [UnaryOp.PredecessorOf]: 'Predecessor',
};

// ---------------------------------------------------------------------------
// Timing kind names
// ---------------------------------------------------------------------------

const timingKindNames: Record<number, string> = {
  [TimingKind.SameAs]: 'SameAs',
  [TimingKind.Includes]: 'Includes',
  [TimingKind.IncludedIn]: 'IncludedIn',
  [TimingKind.During]: 'IncludedIn',
  [TimingKind.BeforeOrAfter]: 'Before',
  [TimingKind.Within]: 'In',
  [TimingKind.Meets]: 'Meets',
  [TimingKind.Overlaps]: 'Overlaps',
  [TimingKind.Starts]: 'Starts',
  [TimingKind.Ends]: 'Ends',
};

// ---------------------------------------------------------------------------
// Visitor implementation
// ---------------------------------------------------------------------------

function fhirModelURI(ns: string): string {
  return ns === 'FHIR' ? 'http://hl7.org/fhir' : ns;
}

function capitalizeFirst(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const translator: ExpressionVisitor<ElmExpression> = {
  visitLiteral(expr: LiteralExpr): ElmExpression {
    if (expr.valueType === LiteralType.Null) {
      return { type: 'Null' };
    }
    const node: ElmExpression = { type: 'Literal', value: expr.value };
    switch (expr.valueType) {
      case LiteralType.Boolean:
        node.valueType = '{urn:hl7-org:elm-types:r1}Boolean'; break;
      case LiteralType.String:
        node.valueType = '{urn:hl7-org:elm-types:r1}String'; break;
      case LiteralType.Integer:
        node.valueType = '{urn:hl7-org:elm-types:r1}Integer'; break;
      case LiteralType.Long:
        node.valueType = '{urn:hl7-org:elm-types:r1}Long'; break;
      case LiteralType.Decimal:
        node.valueType = '{urn:hl7-org:elm-types:r1}Decimal'; break;
      case LiteralType.Date:
        node.valueType = '{urn:hl7-org:elm-types:r1}Date'; break;
      case LiteralType.DateTime:
        node.valueType = '{urn:hl7-org:elm-types:r1}DateTime'; break;
      case LiteralType.Time:
        node.valueType = '{urn:hl7-org:elm-types:r1}Time'; break;
      case LiteralType.Quantity:
        node.valueType = '{urn:hl7-org:elm-types:r1}Quantity'; break;
      case LiteralType.Ratio:
        node.valueType = '{urn:hl7-org:elm-types:r1}Ratio'; break;
    }
    return node;
  },

  visitIdentifierRef(expr: IdentifierRefExpr): ElmExpression {
    return { type: 'ExpressionRef', name: expr.name, libraryName: expr.library };
  },

  visitBinary(expr: BinaryExpr): ElmExpression {
    const name = binaryOpNames[expr.operator] ?? 'Unknown';
    return {
      type: name,
      operand: [translateExpression(expr.left), translateExpression(expr.right)],
    };
  },

  visitUnary(expr: UnaryExpr): ElmExpression {
    const name = unaryOpNames[expr.operator] ?? 'Unknown';
    return { type: name, operand: translateExpression(expr.operand) };
  },

  visitIfThenElse(expr: IfThenElseExpr): ElmExpression {
    return {
      type: 'If',
      condition: translateExpression(expr.condition),
      then: translateExpression(expr.then),
      else: translateExpression(expr.else),
    };
  },

  visitCase(expr: CaseExpr): ElmExpression {
    return {
      type: 'Case',
      comparand: expr.comparand ? translateExpression(expr.comparand) : undefined,
      caseItem: expr.items.map(item => ({
        when: translateExpression(item.when),
        then: translateExpression(item.then),
      })),
      else: translateExpression(expr.else),
    };
  },

  visitIs(expr: IsExpr): ElmExpression {
    return {
      type: 'Is',
      operand: translateExpression(expr.operand),
      isTypeSpecifier: translateTypeSpecifier(expr.type),
    };
  },

  visitAs(expr: AsExpr): ElmExpression {
    return {
      type: 'As',
      operand: translateExpression(expr.operand),
      asTypeSpecifier: translateTypeSpecifier(expr.type),
    };
  },

  visitCast(expr: CastExpr): ElmExpression {
    return {
      type: 'As',
      operand: translateExpression(expr.operand),
      asTypeSpecifier: translateTypeSpecifier(expr.type),
      strict: true,
    };
  },

  visitConvert(expr: ConvertExpr): ElmExpression {
    return {
      type: 'Convert',
      operand: translateExpression(expr.operand),
      ...(expr.toType ? { toTypeSpecifier: translateTypeSpecifier(expr.toType) } : {}),
    };
  },

  visitBooleanTest(expr: BooleanTestExpr): ElmExpression {
    switch (expr.testValue) {
      case 'null':
        if (expr.not) {
          return { type: 'Not', operand: { type: 'IsNull', operand: translateExpression(expr.operand) } };
        }
        return { type: 'IsNull', operand: translateExpression(expr.operand) };
      case 'true':
        if (expr.not) {
          return { type: 'IsFalse', operand: translateExpression(expr.operand) };
        }
        return { type: 'IsTrue', operand: translateExpression(expr.operand) };
      case 'false':
        if (expr.not) {
          return { type: 'IsTrue', operand: translateExpression(expr.operand) };
        }
        return { type: 'IsFalse', operand: translateExpression(expr.operand) };
      default:
        return { type: 'Unknown' };
    }
  },

  visitFunctionCall(expr: FunctionCallExpr): ElmExpression {
    const node: ElmExpression = {
      type: 'FunctionRef',
      name: expr.name,
      libraryName: expr.library,
    };
    if (expr.operands.length > 0) {
      node.operand = expr.operands.map(op => translateExpression(op));
    }
    return node;
  },

  visitMemberAccess(expr: MemberAccessExpr): ElmExpression {
    return {
      type: 'Property',
      path: expr.member,
      source: translateExpression(expr.source),
    };
  },

  visitIndexAccess(expr: IndexAccessExpr): ElmExpression {
    return {
      type: 'Indexer',
      operand: [translateExpression(expr.source), translateExpression(expr.index)],
    };
  },

  visitRetrieve(expr: RetrieveExpr): ElmExpression {
    const node: ElmExpression = {
      type: 'Retrieve',
      codeProperty: expr.codePath,
      codeComparator: expr.codeComparator,
      dateProperty: expr.datePath,
    };
    if (expr.resourceType) {
      if (expr.resourceType.namespace) {
        node.dataType = `{${fhirModelURI(expr.resourceType.namespace)}}${expr.resourceType.name}`;
      } else {
        node.dataType = expr.resourceType.name;
      }
    }
    if (expr.codes) node.codes = translateExpression(expr.codes);
    if (expr.dateRange) node.dateRange = translateExpression(expr.dateRange);
    return node;
  },

  visitQuery(expr: QueryExpr): ElmExpression {
    const node: ElmExpression = { type: 'Query' };

    if (expr.sources.length > 0) {
      node.sourceClause = expr.sources.map(s => ({
        expression: translateExpression(s.source),
        alias: s.alias,
      }));
    }

    if (expr.let.length > 0) {
      node.let = expr.let.map(l => ({
        identifier: l.identifier,
        expression: translateExpression(l.expression),
      }));
    }

    const relationships: ElmRelationshipClause[] = [];
    for (const w of expr.with) {
      relationships.push({
        type: 'With',
        expression: translateExpression(w.source.source),
        alias: w.source.alias,
        suchThat: translateExpression(w.condition),
      });
    }
    for (const w of expr.without) {
      relationships.push({
        type: 'Without',
        expression: translateExpression(w.source.source),
        alias: w.source.alias,
        suchThat: translateExpression(w.condition),
      });
    }
    if (relationships.length > 0) node.relationship = relationships;

    if (expr.where) node.where = translateExpression(expr.where);

    if (expr.return) {
      node.return = {
        expression: translateExpression(expr.return.expression),
        distinct: expr.return.distinct,
      };
    }

    if (expr.sort) {
      node.sort = {
        by: expr.sort.byItems.map(item => ({
          direction: item.direction === SortDirection.Desc ? 'desc' : 'asc',
          type: 'ByExpression',
          expression: translateExpression(item.expression),
        })),
      };
    }

    if (expr.aggregate) {
      node.aggregate = {
        identifier: expr.aggregate.identifier,
        distinct: expr.aggregate.distinct,
        ...(expr.aggregate.starting ? { starting: translateExpression(expr.aggregate.starting) } : {}),
        expression: translateExpression(expr.aggregate.expression),
      };
    }

    return node;
  },

  visitInterval(expr: IntervalExpr): ElmExpression {
    return {
      type: 'Interval',
      low: translateExpression(expr.low),
      high: translateExpression(expr.high),
      lowClosed: expr.lowClosed,
      highClosed: expr.highClosed,
    };
  },

  visitTuple(expr: TupleExpr): ElmExpression {
    return {
      type: 'Tuple',
      element: expr.elements.map(e => ({
        type: 'TupleElement',
        name: e.name,
        source: translateExpression(e.expression),
      })),
    };
  },

  visitList(expr: ListExpr): ElmExpression {
    return {
      type: 'List',
      element: expr.elements.map(e => translateExpression(e)),
    };
  },

  visitInstance(expr: InstanceExpr): ElmExpression {
    const node: ElmExpression = { type: 'Instance' };
    if (expr.type) {
      if (expr.type.namespace) {
        node.classType = `{${fhirModelURI(expr.type.namespace)}}${expr.type.name}`;
      } else {
        node.classType = expr.type.name;
      }
    }
    node.element = expr.elements.map(e => ({
      type: 'InstanceElement',
      name: e.name,
      source: translateExpression(e.expression),
    }));
    return node;
  },

  visitCode(expr: CodeExpr): ElmExpression {
    return {
      type: 'Code',
      code: expr.code,
      system: { type: 'CodeSystemRef', name: expr.system },
      display: expr.display,
    };
  },

  visitConcept(expr: ConceptExpr): ElmExpression {
    return {
      type: 'Concept',
      display: expr.display,
      element: expr.codes.map(code => ({
        type: 'Code',
        code: code.code,
        system: { type: 'CodeSystemRef', name: code.system },
        display: code.display,
      })),
    };
  },

  visitExternalConstant(expr: ExternalConstantExpr): ElmExpression {
    return { type: 'ParameterRef', name: expr.name };
  },

  visitThis(_expr: ThisExpr): ElmExpression {
    return { type: 'This' };
  },

  visitIndexRef(_expr: IndexRefExpr): ElmExpression {
    return { type: 'IterationIndex' };
  },

  visitTotal(_expr: TotalExpr): ElmExpression {
    return { type: 'Total' };
  },

  visitMembership(expr: MembershipExpr): ElmExpression {
    const typeName = expr.operator === 'contains' ? 'Contains' : 'In';
    const node: ElmExpression = {
      type: typeName,
      operand: [translateExpression(expr.left), translateExpression(expr.right)],
    };
    if (expr.precision) node.precision = expr.precision;
    return node;
  },

  visitBetween(expr: BetweenExpr): ElmExpression {
    const typeName = expr.properly ? 'ProperIncludedIn' : 'IncludedIn';
    return {
      type: typeName,
      operand: [
        translateExpression(expr.operand),
        {
          type: 'Interval',
          low: translateExpression(expr.low),
          high: translateExpression(expr.high),
          lowClosed: true,
          highClosed: true,
        },
      ],
    };
  },

  visitDurationBetween(expr: DurationBetweenExpr): ElmExpression {
    return {
      type: 'DurationBetween',
      precision: expr.precision,
      operand: [translateExpression(expr.low), translateExpression(expr.high)],
    };
  },

  visitDifferenceBetween(expr: DifferenceBetweenExpr): ElmExpression {
    return {
      type: 'DifferenceBetween',
      precision: expr.precision,
      operand: [translateExpression(expr.low), translateExpression(expr.high)],
    };
  },

  visitDateTimeComponentFrom(expr: DateTimeComponentFromExpr): ElmExpression {
    return {
      type: 'DateTimeComponentFrom',
      precision: expr.component,
      operand: translateExpression(expr.operand),
    };
  },

  visitDurationOf(expr: DurationOfExpr): ElmExpression {
    return {
      type: 'DurationOf',
      precision: expr.precision,
      operand: translateExpression(expr.operand),
    };
  },

  visitDifferenceOf(expr: DifferenceOfExpr): ElmExpression {
    return {
      type: 'DifferenceOf',
      precision: expr.precision,
      operand: translateExpression(expr.operand),
    };
  },

  visitTypeExtent(expr: TypeExtentExpr): ElmExpression {
    return {
      type: capitalizeFirst(expr.extent),
      operand: { type: 'NamedTypeSpecifier', name: expr.type.name, libraryName: expr.type.namespace },
    };
  },

  visitTiming(expr: TimingExpr): ElmExpression {
    let name = timingKindNames[expr.operator.timingKind] ?? 'Unknown';

    if (expr.operator.properly) {
      name = 'Proper' + name;
    }

    if (expr.operator.timingKind === TimingKind.BeforeOrAfter) {
      if (expr.operator.after) {
        name = 'After';
      } else {
        name = 'Before';
      }
      if (expr.operator.properly) {
        name = expr.operator.after ? 'SameOrAfter' : 'SameOrBefore';
      }
    }

    const node: ElmExpression = {
      type: name,
      operand: [translateExpression(expr.left), translateExpression(expr.right)],
    };
    if (expr.operator.precision) node.precision = expr.operator.precision;
    return node;
  },

  visitSetAggregate(expr: SetAggregateExpr): ElmExpression {
    return {
      type: capitalizeFirst(expr.setKind),
      operand: translateExpression(expr.operand),
      ...(expr.per ? { per: translateExpression(expr.per) } : {}),
    };
  },
};
