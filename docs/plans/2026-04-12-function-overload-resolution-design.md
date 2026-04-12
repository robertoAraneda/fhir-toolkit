# Design: Function Overload Resolution for Included Libraries

**Issue:** #21
**Date:** 2026-04-12
**Goal:** Fix included library functions with FHIR type parameters returning wrong results by implementing type-scored overload resolution.

## Problem

`userFunctions: Map<string, FunctionDef>` stores only ONE function per name. FHIRHelpers 4.0.1 defines multiple overloads of the same function (e.g., `ToString(FHIR.string)`, `ToString(FHIR.boolean)`, `ToString(FHIR.uri)`). The last-stored overload wins — so `ToString(FHIR.boolean)` gets called for all types, returning `'false'` for string arguments.

**Reproduction:**

```cql
-- FHIRHelpers defines:
define function ToString(value FHIR.string): value.value
define function ToString(value FHIR.boolean): if value.value then 'true' else 'false'

-- Calling ToString on a FHIR.string wrapper uses the boolean overload (last stored):
-- ToString(CqlTuple{value: CqlString('cm'), instanceType: 'string'})
-- → evaluates 'if CqlString("cm") then "true" else "false"' → returns 'false'
```

## Solution: Type-scored overload resolution

### Data structure change

```typescript
// Before:
private readonly userFunctions: Map<string, FunctionDef>;

// After:
private readonly userFunctions: Map<string, FunctionDef[]>;
```

### Resolution algorithm — `resolveOverload(name, argVals)`

1. Get `FunctionDef[]` for name. If only one overload, return it (fast path).
2. Filter by arity: discard overloads where `operands.length !== argVals.length`.
3. Score each remaining overload by summing per-argument match scores:
   - **Score 2 (exact):** argument's `instanceType` matches param type name (case-insensitive). E.g., `CqlTuple{instanceType:'decimal'}` matches `FHIR.decimal`.
   - **Score 2 (exact):** argument's CQL type matches param type name. E.g., `CqlString.type='string'` matches `String`.
   - **Score 1 (subtype):** FHIR type hierarchy match (e.g., `SimpleQuantity` → `Quantity`).
   - **Score 0:** no match info available.
4. Return the highest-scoring overload. Ties broken by declaration order.

### Type matching table

| Argument | instanceType | CQL type | Matches param |
|---|---|---|---|
| `CqlTuple{instanceType:'decimal'}` | `'decimal'` | `'tuple'` | `FHIR.decimal` ✓ |
| `CqlTuple{instanceType:'Quantity'}` | `'Quantity'` | `'tuple'` | `FHIR.Quantity` ✓ |
| `CqlString` | none | `'string'` | `String` ✓ |
| `CqlInteger` | none | `'integer'` | `Integer` ✓ |
| `CqlDecimal` | none | `'decimal'` | `Decimal` ✓ |

### Affected call sites — 4 locations in evaluator.ts

- **Constructor:** `set(fn.name, fn)` → push into array
- **`withContext`:** copy arrays, not single entries
- **`visitFunctionCall` library path:** call `resolveOverload` instead of `.get()`
- **`visitFunctionCall` local path:** same

No changes needed to `evalUserFunction` or `evalUserFunctionWithValues` — they receive a resolved `FunctionDef`.

### Impact on existing tests

None expected — existing tests use single-overload functions. The fast path (single overload → return immediately) preserves existing behavior.

## Files to modify

| File | Change |
|---|---|
| `src/eval/evaluator.ts` | Change Map type, add `resolveOverload()`, update 4 call sites |
| `test/integration/issue21.test.ts` | New: overloaded FHIRHelpers-style tests |
