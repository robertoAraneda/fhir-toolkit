/**
 * AST node types for CQL expressions.
 *
 * Uses TypeScript discriminated unions with a `kind` string literal field
 * instead of Go's interface+struct pattern. Every expression variant carries
 * a unique `kind` tag so the compiler can narrow the union in switch/if blocks.
 */

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export enum LiteralType {
  Null,
  Boolean,
  String,
  Integer,
  Long,
  Decimal,
  Date,
  DateTime,
  Time,
  Quantity,
  Ratio,
}

export enum BinaryOp {
  // Arithmetic
  Add,
  Subtract,
  Multiply,
  Divide,
  Div,
  Mod,
  Power,
  Concatenate,
  // Comparison
  Equal,
  NotEqual,
  Equivalent,
  NotEquivalent,
  Less,
  LessOrEqual,
  Greater,
  GreaterOrEqual,
  // Logical
  And,
  Or,
  Xor,
  Implies,
  // Set
  Union,
  Intersect,
  Except,
  // Membership
  In,
  Contains,
}

export enum UnaryOp {
  Not,
  Exists,
  Positive,
  Negate,
  Distinct,
  Flatten,
  SingletonFrom,
  PointFrom,
  StartOf,
  EndOf,
  WidthOf,
  SuccessorOf,
  PredecessorOf,
}

export enum SortDirection {
  Asc,
  Desc,
}

export enum TimingKind {
  SameAs,
  Includes,
  IncludedIn,
  During,
  BeforeOrAfter,
  Within,
  Meets,
  Overlaps,
  Starts,
  Ends,
}

export enum AccessLevel {
  Public,
  Private,
}

// ---------------------------------------------------------------------------
// Type Specifiers (discriminated union on `specKind`)
// ---------------------------------------------------------------------------

export interface NamedType {
  readonly specKind: 'NamedType';
  readonly namespace: string;
  readonly name: string;
}

export interface ListType {
  readonly specKind: 'ListType';
  readonly elementType: TypeSpecifier;
}

export interface IntervalType {
  readonly specKind: 'IntervalType';
  readonly pointType: TypeSpecifier;
}

export interface TupleElementDef {
  readonly name: string;
  readonly type: TypeSpecifier;
}

export interface TupleType {
  readonly specKind: 'TupleType';
  readonly elements: TupleElementDef[];
}

export interface ChoiceType {
  readonly specKind: 'ChoiceType';
  readonly types: TypeSpecifier[];
}

export type TypeSpecifier =
  | NamedType
  | ListType
  | IntervalType
  | TupleType
  | ChoiceType;

// ---------------------------------------------------------------------------
// Expression types (discriminated union on `kind`)
// ---------------------------------------------------------------------------

/** Literal constant value. */
export interface LiteralExpr {
  readonly kind: 'Literal';
  readonly valueType: LiteralType;
  readonly value: string;
}

/** Reference to a named expression, alias, or identifier. */
export interface IdentifierRefExpr {
  readonly kind: 'IdentifierRef';
  readonly library: string;
  readonly name: string;
}

/** Infix binary operator. */
export interface BinaryExpr {
  readonly kind: 'Binary';
  readonly operator: BinaryOp;
  readonly left: Expression;
  readonly right: Expression;
}

/** Prefix unary operator. */
export interface UnaryExpr {
  readonly kind: 'Unary';
  readonly operator: UnaryOp;
  readonly operand: Expression;
}

/** if ... then ... else ... */
export interface IfThenElseExpr {
  readonly kind: 'IfThenElse';
  readonly condition: Expression;
  readonly then: Expression;
  readonly else: Expression;
}

/** case ... when ... then ... else ... end */
export interface CaseExpr {
  readonly kind: 'Case';
  readonly comparand: Expression | null;
  readonly items: CaseItem[];
  readonly else: Expression;
}

/** 'expression is TypeSpec' */
export interface IsExpr {
  readonly kind: 'Is';
  readonly operand: Expression;
  readonly type: TypeSpecifier;
}

/** 'expression as TypeSpec' */
export interface AsExpr {
  readonly kind: 'As';
  readonly operand: Expression;
  readonly type: TypeSpecifier;
}

/** 'cast expression as TypeSpec' */
export interface CastExpr {
  readonly kind: 'Cast';
  readonly operand: Expression;
  readonly type: TypeSpecifier;
}

/** 'convert expression to TypeSpec/unit' */
export interface ConvertExpr {
  readonly kind: 'Convert';
  readonly operand: Expression;
  readonly toType: TypeSpecifier | null;
  readonly toUnit: string;
}

/** 'expression is [not] (null|true|false)' */
export interface BooleanTestExpr {
  readonly kind: 'BooleanTest';
  readonly operand: Expression;
  readonly testValue: string;
  readonly not: boolean;
}

/** Function invocation: expr.func(args...) or func(args...) */
export interface FunctionCallExpr {
  readonly kind: 'FunctionCall';
  readonly source: Expression | null;
  readonly name: string;
  readonly library: string;
  readonly operands: Expression[];
}

/** Dot-notation member access: expression.member */
export interface MemberAccessExpr {
  readonly kind: 'MemberAccess';
  readonly source: Expression;
  readonly member: string;
}

/** expression[index] */
export interface IndexAccessExpr {
  readonly kind: 'IndexAccess';
  readonly source: Expression;
  readonly index: Expression;
}

/** Data access: [Condition: code in "ValSet"] */
export interface RetrieveExpr {
  readonly kind: 'Retrieve';
  readonly resourceType: NamedType;
  readonly codePath: string;
  readonly codeComparator: string;
  readonly codes: Expression | null;
  readonly context: Expression | null;
  readonly datePath: string;
  readonly dateRange: Expression | null;
}

/** CQL query: from ... let ... with/without ... where ... return ... sort */
export interface QueryExpr {
  readonly kind: 'Query';
  readonly sources: AliasedSource[];
  readonly let: LetClause[];
  readonly with: WithClause[];
  readonly without: WithoutClause[];
  readonly where: Expression | null;
  readonly return: ReturnClause | null;
  readonly aggregate: AggregateClause | null;
  readonly sort: SortClause | null;
}

/** Interval[low, high] or Interval(low, high) */
export interface IntervalExpr {
  readonly kind: 'Interval';
  readonly lowClosed: boolean;
  readonly highClosed: boolean;
  readonly low: Expression;
  readonly high: Expression;
}

/** Tuple { field: expr, ... } */
export interface TupleExpr {
  readonly kind: 'Tuple';
  readonly elements: TupleElement[];
}

/** List expression: { expr, ... } or List<Type> { ... } */
export interface ListExpr {
  readonly kind: 'List';
  readonly typeSpec: TypeSpecifier | null;
  readonly elements: Expression[];
}

/** TypeName { field: expr, ... } */
export interface InstanceExpr {
  readonly kind: 'Instance';
  readonly type: NamedType;
  readonly elements: TupleElement[];
}

/** Code "code" from CodeSystem display "text" */
export interface CodeExpr {
  readonly kind: 'Code';
  readonly code: string;
  readonly system: string;
  readonly display: string;
}

/** Concept { Code ... } display "text" */
export interface ConceptExpr {
  readonly kind: 'Concept';
  readonly codes: CodeExpr[];
  readonly display: string;
}

/** %name or %"name" (external parameter reference) */
export interface ExternalConstantExpr {
  readonly kind: 'ExternalConstant';
  readonly name: string;
}

/** $this in iteration context */
export interface ThisExpr {
  readonly kind: 'This';
}

/** $index in iteration context */
export interface IndexRefExpr {
  readonly kind: 'IndexRef';
}

/** $total in aggregate context */
export interface TotalExpr {
  readonly kind: 'Total';
}

/** 'expression (in|contains) [precision of] expression' with optional precision */
export interface MembershipExpr {
  readonly kind: 'Membership';
  readonly left: Expression;
  readonly right: Expression;
  readonly operator: string;
  readonly precision: string;
}

/** 'expression [properly] between low and high' */
export interface BetweenExpr {
  readonly kind: 'Between';
  readonly operand: Expression;
  readonly low: Expression;
  readonly high: Expression;
  readonly properly: boolean;
}

/** 'duration in <precision> between x and y' */
export interface DurationBetweenExpr {
  readonly kind: 'DurationBetween';
  readonly precision: string;
  readonly low: Expression;
  readonly high: Expression;
}

/** 'difference in <precision> between x and y' */
export interface DifferenceBetweenExpr {
  readonly kind: 'DifferenceBetween';
  readonly precision: string;
  readonly low: Expression;
  readonly high: Expression;
}

/** '<component> from expression' */
export interface DateTimeComponentFromExpr {
  readonly kind: 'DateTimeComponentFrom';
  readonly component: string;
  readonly operand: Expression;
}

/** 'duration in <precision> of expression' */
export interface DurationOfExpr {
  readonly kind: 'DurationOf';
  readonly precision: string;
  readonly operand: Expression;
}

/** 'difference in <precision> of expression' */
export interface DifferenceOfExpr {
  readonly kind: 'DifferenceOf';
  readonly precision: string;
  readonly operand: Expression;
}

/** 'minimum TypeSpec' or 'maximum TypeSpec' */
export interface TypeExtentExpr {
  readonly kind: 'TypeExtent';
  readonly extent: string;
  readonly type: NamedType;
}

/** CQL interval timing operators (starts, ends, meets, overlaps, etc.) */
export interface TimingExpr {
  readonly kind: 'Timing';
  readonly left: Expression;
  readonly right: Expression;
  readonly operator: TimingOp;
}

/** 'expand expr per ...' or 'collapse expr per ...' */
export interface SetAggregateExpr {
  readonly kind: 'SetAggregate';
  readonly setKind: string;
  readonly operand: Expression;
  readonly per: Expression | null;
}

// ---------------------------------------------------------------------------
// Expression union
// ---------------------------------------------------------------------------

export type Expression =
  | LiteralExpr
  | IdentifierRefExpr
  | BinaryExpr
  | UnaryExpr
  | IfThenElseExpr
  | CaseExpr
  | IsExpr
  | AsExpr
  | CastExpr
  | ConvertExpr
  | BooleanTestExpr
  | FunctionCallExpr
  | MemberAccessExpr
  | IndexAccessExpr
  | RetrieveExpr
  | QueryExpr
  | IntervalExpr
  | TupleExpr
  | ListExpr
  | InstanceExpr
  | CodeExpr
  | ConceptExpr
  | ExternalConstantExpr
  | ThisExpr
  | IndexRefExpr
  | TotalExpr
  | MembershipExpr
  | BetweenExpr
  | DurationBetweenExpr
  | DifferenceBetweenExpr
  | DateTimeComponentFromExpr
  | DurationOfExpr
  | DifferenceOfExpr
  | TypeExtentExpr
  | TimingExpr
  | SetAggregateExpr;

// ---------------------------------------------------------------------------
// Supporting types (no `kind` discriminant)
// ---------------------------------------------------------------------------

/** Query source with an alias. */
export interface AliasedSource {
  readonly source: Expression;
  readonly alias: string;
}

/** 'let' binding in a query. */
export interface LetClause {
  readonly identifier: string;
  readonly expression: Expression;
}

/** 'with ... such that' inclusion filter. */
export interface WithClause {
  readonly source: AliasedSource;
  readonly condition: Expression;
}

/** 'without ... such that' exclusion filter. */
export interface WithoutClause {
  readonly source: AliasedSource;
  readonly condition: Expression;
}

/** Specifies what a query returns. */
export interface ReturnClause {
  readonly distinct: boolean;
  readonly all: boolean;
  readonly expression: Expression;
}

/** 'aggregate' clause in a query. */
export interface AggregateClause {
  readonly identifier: string;
  readonly distinct: boolean;
  readonly all: boolean;
  readonly starting: Expression | null;
  readonly expression: Expression;
}

/** Query result ordering. */
export interface SortClause {
  readonly byItems: SortByItem[];
  readonly direction: SortDirection;
}

/** Individual sort key. */
export interface SortByItem {
  readonly expression: Expression;
  readonly direction: SortDirection;
}

/** Single when-then pair in a case expression. */
export interface CaseItem {
  readonly when: Expression;
  readonly then: Expression;
}

/** Rich CQL interval timing operator descriptor. */
export interface TimingOp {
  readonly timingKind: TimingKind;
  readonly precision: string;
  readonly properly: boolean;
  readonly before: boolean;
  readonly after: boolean;
}

/** Field in a tuple or instance constructor. */
export interface TupleElement {
  readonly name: string;
  readonly expression: Expression;
}
