/**
 * Visitor pattern infrastructure for CQL Expression AST nodes.
 *
 * The {@link ExpressionVisitor} interface declares one `visit*` method per
 * expression kind, and the {@link visit} function dispatches via an exhaustive
 * switch so TypeScript will error at compile time if a variant is missed.
 */

import type {
  Expression,
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

/**
 * Visitor interface with one method per Expression kind.
 *
 * Implementations return a value of type `T`, making the visitor useful for
 * both evaluation (T = CqlValue) and analysis (T = number, string, etc.).
 */
export interface ExpressionVisitor<T> {
  visitLiteral(expr: LiteralExpr): T;
  visitIdentifierRef(expr: IdentifierRefExpr): T;
  visitBinary(expr: BinaryExpr): T;
  visitUnary(expr: UnaryExpr): T;
  visitIfThenElse(expr: IfThenElseExpr): T;
  visitCase(expr: CaseExpr): T;
  visitIs(expr: IsExpr): T;
  visitAs(expr: AsExpr): T;
  visitCast(expr: CastExpr): T;
  visitConvert(expr: ConvertExpr): T;
  visitBooleanTest(expr: BooleanTestExpr): T;
  visitFunctionCall(expr: FunctionCallExpr): T;
  visitMemberAccess(expr: MemberAccessExpr): T;
  visitIndexAccess(expr: IndexAccessExpr): T;
  visitRetrieve(expr: RetrieveExpr): T;
  visitQuery(expr: QueryExpr): T;
  visitInterval(expr: IntervalExpr): T;
  visitTuple(expr: TupleExpr): T;
  visitList(expr: ListExpr): T;
  visitInstance(expr: InstanceExpr): T;
  visitCode(expr: CodeExpr): T;
  visitConcept(expr: ConceptExpr): T;
  visitExternalConstant(expr: ExternalConstantExpr): T;
  visitThis(expr: ThisExpr): T;
  visitIndexRef(expr: IndexRefExpr): T;
  visitTotal(expr: TotalExpr): T;
  visitMembership(expr: MembershipExpr): T;
  visitBetween(expr: BetweenExpr): T;
  visitDurationBetween(expr: DurationBetweenExpr): T;
  visitDifferenceBetween(expr: DifferenceBetweenExpr): T;
  visitDateTimeComponentFrom(expr: DateTimeComponentFromExpr): T;
  visitDurationOf(expr: DurationOfExpr): T;
  visitDifferenceOf(expr: DifferenceOfExpr): T;
  visitTypeExtent(expr: TypeExtentExpr): T;
  visitTiming(expr: TimingExpr): T;
  visitSetAggregate(expr: SetAggregateExpr): T;
}

/**
 * Dispatch an expression to the appropriate visitor method.
 *
 * The switch is exhaustive: TypeScript will emit a compile error if a new
 * Expression kind is added to the union but not handled here.
 */
export function visit<T>(expr: Expression, visitor: ExpressionVisitor<T>): T {
  switch (expr.kind) {
    case 'Literal':
      return visitor.visitLiteral(expr);
    case 'IdentifierRef':
      return visitor.visitIdentifierRef(expr);
    case 'Binary':
      return visitor.visitBinary(expr);
    case 'Unary':
      return visitor.visitUnary(expr);
    case 'IfThenElse':
      return visitor.visitIfThenElse(expr);
    case 'Case':
      return visitor.visitCase(expr);
    case 'Is':
      return visitor.visitIs(expr);
    case 'As':
      return visitor.visitAs(expr);
    case 'Cast':
      return visitor.visitCast(expr);
    case 'Convert':
      return visitor.visitConvert(expr);
    case 'BooleanTest':
      return visitor.visitBooleanTest(expr);
    case 'FunctionCall':
      return visitor.visitFunctionCall(expr);
    case 'MemberAccess':
      return visitor.visitMemberAccess(expr);
    case 'IndexAccess':
      return visitor.visitIndexAccess(expr);
    case 'Retrieve':
      return visitor.visitRetrieve(expr);
    case 'Query':
      return visitor.visitQuery(expr);
    case 'Interval':
      return visitor.visitInterval(expr);
    case 'Tuple':
      return visitor.visitTuple(expr);
    case 'List':
      return visitor.visitList(expr);
    case 'Instance':
      return visitor.visitInstance(expr);
    case 'Code':
      return visitor.visitCode(expr);
    case 'Concept':
      return visitor.visitConcept(expr);
    case 'ExternalConstant':
      return visitor.visitExternalConstant(expr);
    case 'This':
      return visitor.visitThis(expr);
    case 'IndexRef':
      return visitor.visitIndexRef(expr);
    case 'Total':
      return visitor.visitTotal(expr);
    case 'Membership':
      return visitor.visitMembership(expr);
    case 'Between':
      return visitor.visitBetween(expr);
    case 'DurationBetween':
      return visitor.visitDurationBetween(expr);
    case 'DifferenceBetween':
      return visitor.visitDifferenceBetween(expr);
    case 'DateTimeComponentFrom':
      return visitor.visitDateTimeComponentFrom(expr);
    case 'DurationOf':
      return visitor.visitDurationOf(expr);
    case 'DifferenceOf':
      return visitor.visitDifferenceOf(expr);
    case 'TypeExtent':
      return visitor.visitTypeExtent(expr);
    case 'Timing':
      return visitor.visitTiming(expr);
    case 'SetAggregate':
      return visitor.visitSetAggregate(expr);
  }

  // Exhaustiveness guard — should be unreachable.
  const _exhaustive: never = expr;
  throw new Error(`Unknown expression kind: ${(_exhaustive as Expression).kind}`);
}
