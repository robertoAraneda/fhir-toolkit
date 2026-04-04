/**
 * ELM (Expression Logic Model) JSON type definitions.
 *
 * These TypeScript interfaces match the HL7 ELM JSON schema used for
 * machine-processable interchange of CQL expressions.
 *
 * Reference: https://cql.hl7.org/elm.html
 */

// ---------------------------------------------------------------------------
// Library (root container)
// ---------------------------------------------------------------------------

/** Root ELM element representing a complete CQL library. */
export interface ElmLibrary {
  identifier?: ElmIdentifier;
  schemaIdentifier?: ElmIdentifier;
  usings?: { def: ElmUsingDef[] };
  includes?: { def: ElmIncludeDef[] };
  parameters?: { def: ElmParameterDef[] };
  codeSystems?: { def: ElmCodeSystemDef[] };
  valueSets?: { def: ElmValueSetDef[] };
  codes?: { def: ElmCodeDef[] };
  concepts?: { def: ElmConceptDef[] };
  contexts?: { def: ElmContextDef[] };
  statements?: { def: ElmExpressionDef[] };
}

/** Identifies a library by name and version. */
export interface ElmIdentifier {
  id: string;
  system?: string;
  version?: string;
}

// ---------------------------------------------------------------------------
// Definition containers
// ---------------------------------------------------------------------------

/** Model usage declaration. */
export interface ElmUsingDef {
  localIdentifier?: string;
  uri?: string;
  version?: string;
}

/** Library include declaration. */
export interface ElmIncludeDef {
  localIdentifier?: string;
  path?: string;
  version?: string;
}

/** Library parameter. */
export interface ElmParameterDef {
  name?: string;
  accessLevel?: string;
  parameterTypeSpecifier?: ElmTypeSpecifier;
  default?: ElmExpression;
}

/** Code system definition. */
export interface ElmCodeSystemDef {
  name?: string;
  id?: string;
  version?: string;
  accessLevel?: string;
}

/** Value set definition. */
export interface ElmValueSetDef {
  name?: string;
  id?: string;
  version?: string;
  accessLevel?: string;
  codeSystem?: string[];
}

/** Code definition. */
export interface ElmCodeDef {
  name?: string;
  id?: string;
  display?: string;
  accessLevel?: string;
  codeSystem?: ElmCodeSystemRef;
}

/** Concept definition. */
export interface ElmConceptDef {
  name?: string;
  display?: string;
  accessLevel?: string;
  code?: ElmCodeRef[];
}

/** Context definition. */
export interface ElmContextDef {
  name?: string;
}

/** Named expression definition. */
export interface ElmExpressionDef {
  name?: string;
  context?: string;
  accessLevel?: string;
  expression?: ElmExpression;
}

// ---------------------------------------------------------------------------
// Type specifiers
// ---------------------------------------------------------------------------

/** ELM type specifier with a discriminator. */
export interface ElmTypeSpecifier {
  type: string; // NamedTypeSpecifier, ListTypeSpecifier, etc.
  namespace?: string;
  name?: string;
  elementType?: ElmTypeSpecifier;
  pointType?: ElmTypeSpecifier;
  element?: ElmTupleElement[];
  choice?: ElmTypeSpecifier[];
}

/** Single element in a tuple type specifier. */
export interface ElmTupleElement {
  name?: string;
  elementType?: ElmTypeSpecifier;
}

// ---------------------------------------------------------------------------
// References
// ---------------------------------------------------------------------------

/** References a code system by name. */
export interface ElmCodeSystemRef {
  name?: string;
  libraryName?: string;
}

/** References a code definition by name. */
export interface ElmCodeRef {
  name?: string;
  libraryName?: string;
}

// ---------------------------------------------------------------------------
// Expression node (polymorphic via "type" discriminator)
// ---------------------------------------------------------------------------

/**
 * Universal expression container used in ELM JSON.
 *
 * The `type` field acts as a discriminator to determine which fields are active.
 * This mirrors the HL7 ELM JSON representation where each expression node
 * carries a "type" field (e.g., "Literal", "Retrieve", "Equal", "And").
 */
export interface ElmExpression {
  /** Discriminator -- determines which fields below are populated. */
  type: string;

  // -- Shared metadata --
  resultTypeName?: string;
  resultTypeSpecifier?: ElmTypeSpecifier;

  // -- Literal --
  valueType?: string; // e.g. "{urn:hl7-org:elm-types:r1}Integer"
  value?: string;

  // -- IdentifierRef / ExpressionRef / ParameterRef --
  name?: string;
  libraryName?: string;

  // -- Property (member access) --
  path?: string;
  source?: ElmExpression;
  scope?: string;

  // -- Retrieve --
  dataType?: string;
  templateId?: string;
  codeProperty?: string;
  codeComparator?: string;
  codes?: ElmExpression;
  dateProperty?: string;
  dateRange?: ElmExpression;

  // -- Unary / Binary operands --
  operand?: ElmExpression | ElmExpression[];

  // -- If/Then/Else --
  condition?: ElmExpression;
  then?: ElmExpression;
  else?: ElmExpression;

  // -- Case --
  comparand?: ElmExpression;
  caseItem?: ElmCaseItem[];

  // -- Query --
  sourceClause?: ElmAliasedQuerySource[];
  let?: ElmLetClause[];
  relationship?: ElmRelationshipClause[];
  where?: ElmExpression;
  return?: ElmReturnClause;
  sort?: ElmSortClause;
  aggregate?: ElmAggregateClause;

  // -- Interval --
  low?: ElmExpression;
  high?: ElmExpression;
  lowClosed?: boolean;
  highClosed?: boolean;

  // -- List --
  element?: ElmExpression[];

  // -- Tuple / Instance --
  classType?: string;

  // -- FunctionRef --
  functionName?: string;

  // -- Code/Concept constructors --
  code?: string;
  system?: ElmExpression;
  display?: string;

  // -- Type operations --
  isTypeSpecifier?: ElmTypeSpecifier;
  asTypeSpecifier?: ElmTypeSpecifier;
  strict?: boolean;
  toTypeSpecifier?: ElmTypeSpecifier;

  // -- DateTime component --
  precision?: string;

  // -- External constant --
  externalName?: string;

  // -- SetAggregate --
  per?: ElmExpression;

  // -- TypeExtent --
  extent?: string;
}

// ---------------------------------------------------------------------------
// Query sub-types
// ---------------------------------------------------------------------------

/** When-then pair in a Case expression. */
export interface ElmCaseItem {
  when?: ElmExpression;
  then?: ElmExpression;
}

/** Query source with an alias. */
export interface ElmAliasedQuerySource {
  expression?: ElmExpression;
  alias?: string;
}

/** Let binding in a query. */
export interface ElmLetClause {
  identifier?: string;
  expression?: ElmExpression;
}

/** With/without clause in a query. */
export interface ElmRelationshipClause {
  type: string; // "With" or "Without"
  expression?: ElmExpression;
  alias?: string;
  suchThat?: ElmExpression;
}

/** Specifies what a query returns. */
export interface ElmReturnClause {
  expression?: ElmExpression;
  distinct?: boolean;
}

/** Specifies query result ordering. */
export interface ElmSortClause {
  by?: ElmSortByItem[];
}

/** Individual sort key. */
export interface ElmSortByItem {
  direction?: string; // "asc" or "desc"
  type?: string; // "ByExpression" or "ByDirection"
  expression?: ElmExpression;
}

/** Aggregate clause in a query. */
export interface ElmAggregateClause {
  identifier?: string;
  distinct?: boolean;
  starting?: ElmExpression;
  expression?: ElmExpression;
}
