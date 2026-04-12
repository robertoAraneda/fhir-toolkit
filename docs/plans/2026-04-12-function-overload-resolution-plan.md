# Function Overload Resolution Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix included library functions (FHIRHelpers) returning wrong results when multiple overloads exist, by implementing type-scored overload resolution.

**Architecture:** Change `userFunctions` from `Map<string, FunctionDef>` to `Map<string, FunctionDef[]>` storing all overloads per name. Add a `resolveOverload(name, argVals)` method that scores each overload by argument-type match and returns the best fit. Update all call sites (constructor, withContext, visitFunctionCall library+local paths).

**Tech Stack:** TypeScript, Vitest, CQL AST (`FunctionDef`, `OperandDef`, `NamedType`)

---

### Task 1: Write failing integration test for overloaded library functions

**Files:**
- Create: `packages/cql/test/integration/issue21.test.ts`

**Step 1: Write the failing test**

```typescript
import { describe, it, expect } from 'vitest'
import { CqlEngine, InMemoryDataProvider } from '../../src/index.js'

describe('issue #21: included library functions with FHIR type params', () => {
  const bundle = {
    resourceType: 'Bundle' as const,
    entry: [
      {
        resource: {
          resourceType: 'Observation',
          id: 'obs1',
          status: 'final',
          code: { coding: [{ system: 'http://loinc.org', code: '8302-2' }] },
          valueQuantity: { value: 128, unit: 'cm', system: 'http://unitsofmeasure.org', code: 'cm' },
        },
      },
    ],
  }

  // Mimics FHIRHelpers 4.0.1 overloads: ToString has multiple variants
  const fhirHelpers = `library FHIRHelpers version '4.0.1'
using FHIR version '4.0.1'

define function ToDecimal(value FHIR.decimal): value.value
define function ToDecimal(value FHIR.integer): value.value
define function ToDecimal(value FHIR.unsignedInt): value.value
define function ToDecimal(value FHIR.positiveInt): value.value

define function ToString(value FHIR.string): value.value
define function ToString(value FHIR.uri): value.value
define function ToString(value FHIR.code): value.value
define function ToString(value FHIR.boolean): if value.value then 'true' else 'false'

define function ToQuantity(quantity FHIR.Quantity):
  if quantity is null then null
  else System.Quantity {
    value: ToDecimal(quantity.value),
    unit: ToString(quantity.unit)
  }

define function ToCode(coding FHIR.Coding):
  if coding is null then null
  else Code {
    code: ToString(coding.code),
    system: ToString(coding.system),
    display: ToString(coding.display)
  }`

  it('FHIRHelpers.ToQuantity selects correct ToString overload for FHIR.string', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define Obs: First([Observation])
define Qty: Obs.value as FHIR.Quantity
define ToQty: FHIRHelpers.ToQuantity(Qty)`

    const engine = new CqlEngine({
      dataProvider: new InMemoryDataProvider(bundle),
      libraryResolver: async (name: string) => {
        if (name === 'FHIRHelpers') return fhirHelpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    // Without overload resolution, ToString(FHIR.boolean) is called for
    // the FHIR.string unit arg, returning 'false' instead of 'cm'
    expect(result['ToQty']?.toString()).toBe('128 cm')
  })

  it('FHIRHelpers.ToCode selects correct ToString overload for FHIR.code', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define Obs: First([Observation])
define ObsCoding: Obs.code.coding[0]
define ObsCode: FHIRHelpers.ToCode(ObsCoding)`

    const engine = new CqlEngine({
      dataProvider: new InMemoryDataProvider(bundle),
      libraryResolver: async (name: string) => {
        if (name === 'FHIRHelpers') return fhirHelpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    expect(result['ObsCode']).not.toBeNull()
    expect(result['ObsCode']?.toString()).toContain('8302-2')
  })

  it('overload resolution works for local functions too', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
context Patient
define Obs: First([Observation])
define Qty: Obs.value as FHIR.Quantity
define function GetVal(v FHIR.decimal): v.value
define function GetVal(v FHIR.string): v.value
define function GetVal(v FHIR.boolean): if v.value then 'true' else 'false'
define DecVal: GetVal(Qty.value)
define StrVal: GetVal(Qty.unit)`

    const engine = new CqlEngine({ dataProvider: new InMemoryDataProvider(bundle) })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    expect(result['DecVal']?.toString()).toBe('128')
    expect(result['StrVal']?.toString()).toBe('cm')
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run packages/cql/test/integration/issue21.test.ts`
Expected: FAIL — `ToQty` returns `'128 false'` instead of `'128 cm'`

**Step 3: Commit**

```bash
git add packages/cql/test/integration/issue21.test.ts
git commit -m "test: add failing tests for function overload resolution (issue #21)"
```

---

### Task 2: Change userFunctions to store arrays of overloads

**Files:**
- Modify: `packages/cql/src/eval/evaluator.ts:466-501`

**Step 1: Change the Map type and constructor initialization**

At line 466, change:
```typescript
  private readonly userFunctions: Map<string, FunctionDef>;
```
to:
```typescript
  private readonly userFunctions: Map<string, FunctionDef[]>;
```

At lines 476-481, change:
```typescript
    this.userFunctions = new Map();
    if (ctx.library) {
      for (const fn of ctx.library.functions) {
        this.userFunctions.set(fn.name, fn);
      }
    }
```
to:
```typescript
    this.userFunctions = new Map();
    if (ctx.library) {
      for (const fn of ctx.library.functions) {
        const existing = this.userFunctions.get(fn.name);
        if (existing) {
          existing.push(fn);
        } else {
          this.userFunctions.set(fn.name, [fn]);
        }
      }
    }
```

**Step 2: Update `withContext` to copy arrays correctly**

At lines 496-503, change:
```typescript
  private withContext(ctx: EvalContext): CqlEvaluator {
    const e = new CqlEvaluator(ctx, this.registry);
    // Share user functions map (avoid re-building)
    for (const [k, v] of this.userFunctions) {
      e.userFunctions.set(k, v);
    }
    return e;
  }
```
to:
```typescript
  private withContext(ctx: EvalContext): CqlEvaluator {
    const e = new CqlEvaluator(ctx, this.registry);
    // Share user functions (merge, don't overwrite — constructor already loaded ctx.library.functions)
    for (const [k, v] of this.userFunctions) {
      const existing = e.userFunctions.get(k);
      if (existing) {
        // Add overloads not already present
        for (const fn of v) {
          if (!existing.includes(fn)) existing.push(fn);
        }
      } else {
        e.userFunctions.set(k, [...v]);
      }
    }
    return e;
  }
```

**Step 3: Run ALL existing tests to make sure nothing compiles / breaks**

Run: `npx vitest run packages/cql/test`
Expected: FAIL — the call sites at lines 1076 and 1091 still use `.get()` expecting a single `FunctionDef`, now they get `FunctionDef[]`. TypeScript compiler errors. That's expected — we fix those in Task 3.

---

### Task 3: Add resolveOverload method and update call sites

**Files:**
- Modify: `packages/cql/src/eval/evaluator.ts:488-490` (after registerIncludedLibrary)
- Modify: `packages/cql/src/eval/evaluator.ts:1076` (library path)
- Modify: `packages/cql/src/eval/evaluator.ts:1091-1093` (local path)

**Step 1: Add the `resolveOverload` method**

Insert after `registerIncludedLibrary` (after line 490), before `withContext`:

```typescript
  /**
   * Resolve the best-matching overload for a function call.
   * Scores each overload by argument-type match; returns the highest scorer.
   */
  private resolveOverload(
    overloads: FunctionDef[],
    argVals: CqlResult[],
  ): FunctionDef {
    if (overloads.length === 1) return overloads[0];

    let bestFn = overloads[0];
    let bestScore = -1;

    for (const fn of overloads) {
      // Arity mismatch: skip
      if (fn.operands.length !== argVals.length) continue;

      let score = 0;
      for (let i = 0; i < fn.operands.length; i++) {
        score += this.scoreArgMatch(argVals[i], fn.operands[i].type);
      }

      if (score > bestScore) {
        bestScore = score;
        bestFn = fn;
      }
    }

    return bestFn;
  }

  /**
   * Score how well a runtime argument matches a declared parameter type.
   * 2 = exact match, 1 = subtype, 0 = unknown/no match.
   */
  private scoreArgMatch(arg: CqlResult, paramType: TypeSpecifier): number {
    if (arg === null) return 0;
    if (paramType.specKind !== 'NamedType') return 0;
    const paramName = paramType.name.toLowerCase();

    // Check CqlTuple instanceType (FHIR typed tuples)
    if (arg instanceof CqlTuple && arg.instanceType) {
      if (arg.instanceType.toLowerCase() === paramName) return 2;
      // Subtype: SimpleQuantity/Age/Distance/Duration/Count → Quantity
      const quantitySubtypes = ['simplequantity', 'age', 'count', 'distance', 'duration', 'moneyquantity'];
      if (paramName === 'quantity' && quantitySubtypes.includes(arg.instanceType.toLowerCase())) return 1;
      return 0;
    }

    // Check CQL primitive type name
    if (arg.type.toLowerCase() === paramName) return 2;

    return 0;
  }
```

Note: `CqlTuple` and `TypeSpecifier` are already imported in the file. `CqlTuple` is from `../types/index.js` (check existing imports at the top of evaluator.ts).

**Step 2: Update the library path in visitFunctionCall (line ~1076)**

Change:
```typescript
        const libFn = libEvaluator.userFunctions.get(expr.name);
        if (libFn) {
          // Evaluate operands in the current (caller) context, then invoke the function
          // in the included library's context with the pre-evaluated values.
          const argVals: CqlResult[] = [];
          for (const op of expr.operands) {
            argVals.push(await this.evaluate(op));
          }
          return libEvaluator.evalUserFunctionWithValues(libFn, argVals);
        }
        throw new Error(`function '${expr.name}' not found in library '${libAlias}'`);
```
to:
```typescript
        const libOverloads = libEvaluator.userFunctions.get(expr.name);
        if (libOverloads && libOverloads.length > 0) {
          // Evaluate operands in the current (caller) context, then invoke the function
          // in the included library's context with the pre-evaluated values.
          const argVals: CqlResult[] = [];
          for (const op of expr.operands) {
            argVals.push(await this.evaluate(op));
          }
          const libFn = libEvaluator.resolveOverload(libOverloads, argVals);
          return libEvaluator.evalUserFunctionWithValues(libFn, argVals);
        }
        throw new Error(`function '${expr.name}' not found in library '${libAlias}'`);
```

**Step 3: Update the local path in visitFunctionCall (line ~1091)**

Change:
```typescript
    // Check user-defined functions first
    const userFn = this.userFunctions.get(expr.name);
    if (userFn) {
      return this.evalUserFunction(userFn, expr.operands);
    }
```
to:
```typescript
    // Check user-defined functions first
    const userOverloads = this.userFunctions.get(expr.name);
    if (userOverloads && userOverloads.length > 0) {
      // For local calls, evaluate args first to enable overload resolution
      const argVals: CqlResult[] = [];
      for (const op of expr.operands) {
        argVals.push(await this.evaluate(op));
      }
      const userFn = this.resolveOverload(userOverloads, argVals);
      return this.evalUserFunctionWithValues(userFn, argVals);
    }
```

Note: The local path now also uses `evalUserFunctionWithValues` (with pre-evaluated args) instead of `evalUserFunction` — this is required because overload resolution needs the runtime argument values. `evalUserFunction` evaluates args internally and cannot do overload resolution.

**Step 4: Run the issue #21 tests**

Run: `npx vitest run packages/cql/test/integration/issue21.test.ts`
Expected: PASS — all 3 tests pass

**Step 5: Run ALL tests**

Run: `npx vitest run packages/cql/test`
Expected: PASS — all existing tests still pass

**Step 6: Commit**

```bash
git add packages/cql/src/eval/evaluator.ts
git commit -m "feat(cql): implement type-scored function overload resolution (issue #21)"
```

---

### Task 4: Add changeset and final verification

**Files:**
- Create: `.changeset/function-overload-resolution.md`

**Step 1: Create changeset**

```markdown
---
"@fhir-toolkit/cql": minor
---

Implement type-scored function overload resolution for user-defined functions. Fixes included library functions (e.g., FHIRHelpers) selecting the wrong overload when multiple functions share the same name with different FHIR type parameters.
```

**Step 2: Run full test suite**

Run: `npx vitest run packages/cql/test`
Expected: ALL PASS

**Step 3: Commit**

```bash
git add .changeset/function-overload-resolution.md
git commit -m "chore(cql): add changeset for function overload resolution"
```
