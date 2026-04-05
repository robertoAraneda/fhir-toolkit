# Design: @fhir-toolkit/cql

**Date**: 2026-04-04
**Status**: Approved
**Author**: Roberto Araneda

## Summary

Port the existing Go CQL engine ([go-cql](https://github.com/gofhir/cql)) to TypeScript as `@fhir-toolkit/cql` within the fhir-toolkit monorepo. This will be the first native CQL engine available in the JS/TS ecosystem.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Package location | `packages/cql/` in fhir-toolkit monorepo | Consistent with existing packages |
| Package name | `@fhir-toolkit/cql` | Short, matches monorepo naming |
| Dependencies | Self-contained, no internal deps | Portable, any dev can use standalone |
| ANTLR4 runtime | `antlr4ng` | Active fork, ESM native, TS-first, matches ANTLR 4.13 |
| Decimal library | `decimal.js` | Full precision arithmetic, covers pow/sqrt for StdDev |
| FHIRPath types | Own type system (no fhirpath dep) | Decoupled, cleaner TS modeling |
| Architecture | Idiomatic TS redesign | Discriminated unions, visitor pattern, generics |
| FHIR versions | R4, R4B, R5 model-info embedded | Multi-version without external deps |

## Architecture

### AST: Discriminated Unions

All expression nodes share a `kind` discriminant for exhaustive pattern matching:

```ts
type Expression =
  | LiteralExpr
  | IdentifierRefExpr
  | BinaryExpr
  | UnaryExpr
  | QueryExpr
  | RetrieveExpr
  | IfThenElseExpr
  | CaseExpr
  | FunctionCallExpr
  | MemberAccessExpr
  | IndexAccessExpr
  | IntervalExpr
  | ListExpr
  | TupleExpr
  | InstanceExpr
  | CodeExpr
  | ConceptExpr
  | IsExpr
  | AsExpr
  | CastExpr
  | ConvertExpr
  | BooleanTestExpr
  | BetweenExpr
  | DurationBetweenExpr
  | DifferenceBetweenExpr
  | DateTimeComponentFromExpr
  | TimingExpr
  | MembershipExpr
  | ExternalConstantExpr
  | ThisExpr
  | IndexRefExpr
  | TotalExpr
  | SetAggregateExpr
  | DurationOfExpr
  | DifferenceOfExpr
  | TypeExtentExpr

interface LiteralExpr {
  kind: 'Literal'
  valueType: LiteralType
  value: string
}

interface BinaryExpr {
  kind: 'Binary'
  operator: BinaryOp
  left: Expression
  right: Expression
}

// ... each variant follows the same pattern
```

Benefits over Go: exhaustive checking at compile time, automatic narrowing, JSON-serializable.

### Type System: Classes with CqlValue interface

```ts
interface CqlValue {
  readonly type: CqlType
  equals(other: CqlValue): boolean
  equivalent(other: CqlValue): boolean
  toString(): string
}

interface CqlComparable extends CqlValue {
  compareTo(other: CqlValue): number
}
```

**Primitive types**: `CqlInteger`, `CqlLong`, `CqlDecimal` (backed by decimal.js), `CqlString`, `CqlBoolean`, `CqlDate`, `CqlDateTime`, `CqlTime`, `CqlQuantity`.

**Complex types**: `CqlInterval<T extends CqlComparable>` (generic), `CqlList`, `CqlTuple` (Map-backed), `CqlCode`, `CqlConcept`, `CqlRatio`.

Key differences from Go:
- Generics on `CqlInterval<T>` (Go uses interface{})
- `Map<string, CqlValue>` for Tuple (O(1) lookup vs linear scan)
- `null` represents CQL null (no wrapper class needed)

### Evaluator: Visitor Pattern

```ts
interface ExpressionVisitor<T> {
  visitLiteral(expr: LiteralExpr): T
  visitBinary(expr: BinaryExpr): T
  visitUnary(expr: UnaryExpr): T
  visitQuery(expr: QueryExpr): T
  // ... one method per Expression kind
}

function visit<T>(expr: Expression, visitor: ExpressionVisitor<T>): T {
  switch (expr.kind) {
    case 'Literal': return visitor.visitLiteral(expr)
    case 'Binary':  return visitor.visitBinary(expr)
    // ... exhaustive — TS error if a kind is missing
  }
}
```

`CqlEvaluator` implements `ExpressionVisitor<Promise<CqlValue | null>>`. Async because DataProvider and TerminologyProvider typically call FHIR servers over HTTP.

The same visitor pattern is reused for:
- `ElmTranslator` (AST -> ELM JSON)
- Future: `PrettyPrinter`, `TypeChecker`

### Functions: Extensible Registry

```ts
type CqlFunction = (args: (CqlValue | null)[], ctx: EvalContext) => CqlValue | null

class FunctionRegistry {
  register(name: string, fn: CqlFunction): void
  resolve(name: string): CqlFunction | undefined
}
```

Built-in functions grouped by domain: string, aggregate, clinical, datetime, interval, list, type. Users can register custom functions via the engine.

### ELM Support

- **Importer**: ELM JSON -> AST (function, not a visitor)
- **Translator**: AST -> ELM JSON (visitor implementing `ExpressionVisitor<ElmExpression>`)
- Full round-trip: CQL -> AST -> ELM -> AST

### Providers

```ts
interface DataProvider {
  retrieve(
    resourceType: string,
    codePath?: string,
    codes?: CqlValue,
    dateRange?: CqlInterval<CqlDateTime>,
  ): Promise<unknown[]>
}

interface TerminologyProvider {
  inValueSet(code: CqlCode, valueSetUrl: string): Promise<boolean>
  inCodeSystem(code: CqlCode, codeSystemUrl: string): Promise<boolean>
  expand(valueSetUrl: string): Promise<CqlCode[]>
}
```

Async interfaces — compatible with browser fetch and Node.js HTTP clients.

### Model Info

Embedded metadata for R4, R4B, and R5. Each defines:
- Resource types and their properties
- Primary code paths per resource
- Context mappings (Patient, Practitioner, Encounter)
- Choice type detection

Selected at engine construction time: `modelInfo: 'R4' | 'R4B' | 'R5' | ModelInfo`.

### Public API

```ts
class CqlEngine {
  constructor(options?: CqlEngineOptions)
  evaluateLibrary(source: string, context: unknown, params?: Record<string, unknown>): Promise<Record<string, CqlValue | null>>
  evaluateExpression(source: string, name: string, context: unknown, params?: Record<string, unknown>): Promise<CqlValue | null>
  compile(source: string): Library
}

interface CqlEngineOptions {
  dataProvider?: DataProvider
  terminologyProvider?: TerminologyProvider
  modelInfo?: 'R4' | 'R4B' | 'R5' | ModelInfo
  timeout?: number          // ms, default 30000
  maxExpressionLen?: number // default 102400
  maxRetrieveSize?: number  // default 10000
  maxDepth?: number         // default 100
}
```

### Error Types

```ts
class CqlSyntaxError extends Error { ... }    // Parse failures
class CqlEvalError extends Error { ... }      // Runtime evaluation errors
class CqlTimeoutError extends Error { ... }   // Exceeded timeout
class CqlTooCostlyError extends Error { ... } // Exceeded size limits
```

## Package Structure

```
packages/cql/
  src/
    ast/
      nodes.ts              # Discriminated unions (~35 expression kinds)
      library.ts            # Library, UsingDef, IncludeDef, etc.
    compiler/
      compiler.ts           # CQL text -> AST (public entry)
      builder.ts            # ANTLR parse tree -> AST nodes
    elm/
      types.ts              # ELM JSON type definitions
      importer.ts           # ELM -> AST
      translator.ts         # AST -> ELM (visitor)
    eval/
      visitor.ts            # ExpressionVisitor<T> + visit() dispatcher
      evaluator.ts          # CqlEvaluator
      context.ts            # EvalContext (scopes, aliases, bindings)
    funcs/
      registry.ts           # FunctionRegistry class
      builtins.ts           # registerBuiltins()
      string.ts             # Upper, Lower, Substring, Matches, etc.
      aggregate.ts          # Count, Sum, Avg, Min, Max, Variance, StdDev, etc.
      clinical.ts           # AgeInYears, AgeInMonths, etc.
      datetime.ts           # DurationBetween, DateTimeComponentFrom, etc.
      interval.ts           # Contains, Includes, Width, etc.
      list.ts               # Flatten, Distinct, First, Last, Take, Skip, etc.
      type.ts               # Type conversions
    grammar/
      cql.g4                # CQL grammar (from go-cql)
      fhirpath.g4           # FHIRPath grammar (from go-cql)
      generated/            # antlr4ng output (gitignored)
    model/
      model-info.ts         # ModelInfo interface + TypeInfo
      r4.ts                 # FHIR R4 resource metadata
      r4b.ts                # FHIR R4B resource metadata
      r5.ts                 # FHIR R5 resource metadata
    providers/
      data.ts               # DataProvider interface
      terminology.ts        # TerminologyProvider interface
    types/
      value.ts              # CqlValue, CqlComparable, CqlType
      primitives.ts         # CqlInteger, CqlDecimal, CqlString, CqlBoolean, CqlDate, CqlDateTime, CqlTime, CqlQuantity
      complex.ts            # CqlInterval<T>, CqlList, CqlTuple, CqlCode, CqlConcept, CqlRatio
    errors.ts               # Typed error classes
    index.ts                # CqlEngine + public re-exports
  package.json
  tsconfig.json
  tsup.config.ts
```

## Dependencies

- `antlr4ng` — ANTLR4 TypeScript runtime (parser generation)
- `decimal.js` — Arbitrary precision decimal arithmetic

Zero internal `@fhir-toolkit/*` dependencies.

## Source Reference

Every module maps to its Go counterpart in [go-cql](https://github.com/gofhir/cql):

| TypeScript | Go | Lines (Go) |
|---|---|---|
| `ast/nodes.ts` | `ast/nodes.go` | 708 |
| `compiler/builder.ts` | `compiler/builder.go` | 1573 |
| `eval/evaluator.ts` | `eval/evaluator.go` | 2096 |
| `funcs/*.ts` | `funcs/*.go` | ~1400 |
| `types/*.ts` | `types/*.go` | ~680 |
| `elm/*.ts` | `elm/*.go` | ~1920 |
| `model/*.ts` | `model/modelinfo.go` | 243 |
| **Total** | | **~8620** |
