# Design: @fhir-toolkit/ucum + @fhir-toolkit/cql — Completion to v1.0

**Date**: 2026-04-05
**Status**: Approved
**Author**: Roberto Araneda

## Summary

Resolve all pending TODOs in `@fhir-toolkit/ucum` and `@fhir-toolkit/cql` to reach v1.0 stable. Work is organized in 4 sequential phases with parallel streams per package within each phase.

## Scope

- **@fhir-toolkit/ucum**: 17 pending tasks (P0 + P1 + P2)
- **@fhir-toolkit/cql**: 28 pending tasks (P0 + P1 + P2)
- **Total**: 45 tasks across 4 phases

## Approach: Parallel Streams with Sequential Phases

Within each phase, UCUM and CQL work is independent and can be parallelized via git worktrees. Phases are sequential — each phase builds on the previous.

```
Phase 1: Testing     → Build safety net before touching production code
Phase 2: Code Review → Review + fix with tests in place
Phase 3: Infra       → Browser, benchmarks, ELM validation, error messages
Phase 4: Features    → New features, docs, CI/CD, npm publish
```

---

## Phase 1: Testing

**Goal**: Complete test coverage before any production code changes.

### UCUM — 44 missing tests (port from Go)

Source: `/Users/robertoaraneda/projects/personal/opensource/ucum/`

| Go File | Test Count | New TS File | Coverage |
|---|---|---|---|
| `lexer_test.go` | 29 | `test/lexer.test.ts` | Tokenization: simple, compound, brackets, annotations, errors |
| `parser_test.go` | 4 | `test/parser.test.ts` | Validation, symbol resolution, exponents |
| `composer_test.go` | 3 | `test/composer.test.ts` | Round-trip, exact output, canonical composition |
| `definitions_test.go` | 1 | `test/definitions.test.ts` | definitions.ts integrity (counts, lookups, properties) |
| `decimal_test.go` | 6 | `test/decimal.test.ts` | Exact decimal arithmetic precision |
| `service_concurrent_test.go` | 4 | extend `test/service.test.ts` | Concurrency adapted to JS async + cache |
| `functional_test.go` | 4 | `test/functional.test.ts` | XML-driven official UCUM test suite (100+ cases) |
| `service_test.go` → Analyze | 1 | extend `test/service.test.ts` | Human-readable unit descriptions |

**Additional edge cases** (not in Go): empty string, whitespace, malformed units, compound units (g/dL, mmol/L, mg/kg/min, cm[H2O]).

**Note on functional_test.go**: Requires `UcumFunctionalTests.xml` from the official UCUM test suite. Must verify availability in Go repo or download from ucum.org.

### CQL — Invalid expression tests

**Goal**: Verify engine throws appropriate errors for 42 skipped tests.

| Category | Count | Expected error |
|---|---|---|
| `invalid="true"` | 38 | `CqlSyntaxError` or `CqlEvalError` |
| `invalid="semantic"` | 4 | `CqlSyntaxError` (translation-level) |

New file: `test/conformance/invalid-expressions.test.ts`
- For each invalid test: run expression → assert throws `CqlSyntaxError` or `CqlEvalError`

### CQL — Conformance gaps (2 known failures)

| Test | Issue | Resolution |
|---|---|---|
| `Issue34A` (Now()) | Dynamic function — value changes between runs | Fix: compare result type (DateTime) not value |
| `IntegerIntervalProperlyIncludedInNullBoundaries` | Spec contradiction | Keep skip, add comment documenting the contradiction |

---

## Phase 2: Code Review + Fixes

**Goal**: Review production code with Phase 1 tests as safety net.

### UCUM — Review against Go reference

| TS File | Go File | Review Focus |
|---|---|---|
| `lexer.ts` (226 lines) | `lexer.go` | Bracket unit handling, annotation parsing, ten-star notation |
| `parser.ts` (211 lines) | `parser.go` | Prefix resolution, longest-match ordering, parentheses |
| `converter.ts` (149 lines) | `converter.go` | Recursive unit expansion, special unit handling |
| `service.ts` (391 lines) | `service.go` | Missing `Analyze()` method — needs implementation |
| decimal behavior | `decimal.go` | Verify decimal.js matches Go math/big.Rat behavior |

**Output**: Bugs found → fix with regression test. Implement `Analyze()`.

### CQL — Diff-oriented review against Go

**Strategy**: Function-by-function diff vs Go reference, not blind line-by-line.

| TS File | Go File | Review Focus |
|---|---|---|
| `eval/evaluator.ts` (3,781 lines) | `eval/evaluator.go` | Null propagation in nested queries, async race conditions, unhandled rejections |
| `compiler/builder.ts` (1,721 lines) | `compiler/builder.go` | ANTLR visitor fidelity, edge cases in parsing |

**Output**:
- Documented intentional deviations (TS improvements) vs potential bugs
- Bugs found → fix with regression test
- Null propagation in nested queries verified
- Async evaluator confirmed race-condition free

---

## Phase 3: Infra + Quality

**Goal**: Browser compatibility, performance baselines, ELM validation, error message quality.

### Browser Testing (both packages)

**Tool**: Vitest with `environment: 'happy-dom'` for unit tests + Playwright headless for smoke tests.

| Task | Target |
|---|---|
| UCUM in browser | definitions.ts (60KB) loads, all conversions work |
| CQL in browser | ANTLR4ng + decimal.js work, no Node.js-only APIs |
| Bundle size CQL | <500KB minified (currently ~830KB unminified). Analyze with rollup-plugin-visualizer |
| Bundle size UCUM | <80KB (definitions.ts 60KB + core ~20KB) |
| Cross-browser smoke | Chrome, Firefox, Safari via Playwright headless |

### Performance Benchmarks (both packages)

**Tool**: Vitest bench (`vitest.bench.ts`)

**UCUM benchmarks** (port from `benchmark_test.go`):
- `validate`: simple ("m"), complex ("mg/dL"), mixed (8 codes rotating)
- `convert`: simple (km→m), special (Cel→[degF])
- `canonical`: "kg.m/s2"
- `isComparable`: "mg" ↔ "g"
- `new UcumService()`: initialization cost

**CQL benchmarks** (new):
- Parse time: simple expression vs 20+ definition library
- Evaluation time: literal, arithmetic, query, retrieve
- Memory: heap usage with complex library
- Cache: hot vs cold

### ELM Validation (CQL only, P0)

**Strategy**: Pre-generated fixtures (no Java runtime in CI).

1. Take 5-10 real CQL libraries from `cqf-measures` IG
2. Generate expected ELM once using Java compiler (manually, locally)
3. Save as fixtures in `test/elm/fixtures/*.json`
4. Automated test: compile with our engine → diff against fixture

**Round-trip test**: CQL → AST → ELM → re-import → evaluate → same result.

### Error Messages (CQL only, P1)

| Error Type | Before | After |
|---|---|---|
| `CqlSyntaxError` | "Syntax error near token X" | "Line 3, col 12: unexpected 'end' after expression" |
| `CqlEvalError` | "Cannot evaluate Add" | "Definition 'InAgeCohort' failed: Cannot add Integer and String" |
| Error codes | None | `CQL-001` (syntax), `CQL-101` (type mismatch), structured codes |

### UCUM Cross-validation (P1)

Compare our engine against `@lhncbc/ucum-lhc` for the same conversions. Script-based, not CI test. Discrepancies indicate bugs.

---

## Phase 4: Features + Docs

**Goal**: New features, documentation, CI/CD pipeline, npm publish.

### UCUM Features

| Feature | Source | Complexity |
|---|---|---|
| `Analyze()` method | Port from `service.go` | Low |
| Integration with `@fhir-toolkit/yafv` | New | Medium — validate `Quantity.code` in FHIR resources |
| Unit suggestion/autocomplete API | New | Medium — given prefix "ki", suggest "kg", "km" |

### CQL Features

**InMemoryDataProvider**:
```ts
const engine = new CqlEngine({
  dataProvider: new InMemoryDataProvider(fhirBundle)
})
```
Enables CQL evaluation without a FHIR server.

**InMemoryTerminologyProvider**:
```ts
const engine = new CqlEngine({
  terminologyProvider: new InMemoryTerminologyProvider({ valueSets, codeSystems })
})
```

**Multi-library support**:
```cql
include "FHIRHelpers" version '4.0.1' called FHIRHelpers
```
Requires `libraryResolver` in `CqlEngineOptions`.

**Expression-level tracing**:
```ts
engine.on('trace', (event) => console.log(event.expression, event.value))
```

**Source maps**: Line/column in errors pointing to original CQL.

### CI/CD

| Task | Description |
|---|---|
| Add cql + ucum to turbo pipeline | Currently not included in CI |
| Conformance report in PR comments | GitHub Action commenting X/1743 passing |
| Publish `@fhir-toolkit/cql@0.1.0-alpha` | Changeset + npm publish |
| Publish `@fhir-toolkit/ucum@0.1.0-alpha` | Changeset + npm publish |

### Documentation

- **API reference**: JSDoc → TypeDoc for both packages
- **Usage examples**: evaluate CQL, compile to ELM, custom providers, UCUM conversions
- **Migration guide**: from Java CQL engine / @lhncbc/ucum-lhc

---

## Go Reference Repositories

| Repo | Local Path | Used for |
|---|---|---|
| go-cql | `/Users/robertoaraneda/projects/personal/opensource/go-cql/` | CQL evaluator.ts + builder.ts review |
| ucum (Go) | `/Users/robertoaraneda/projects/personal/opensource/ucum/` | UCUM test porting + Analyze() implementation |

---

## Success Criteria

| Package | Criteria |
|---|---|
| `@fhir-toolkit/ucum` | 90+ tests passing, Analyze() implemented, browser verified, benchmarks documented, yafv integrated |
| `@fhir-toolkit/cql` | 1,743 conformance tests (42 invalid-expression verified), ELM fixtures validated, browser verified, InMemoryDataProvider + TerminologyProvider shipped, multi-library support |
| Both | Published to npm, CI pipeline green, TypeDoc generated |
