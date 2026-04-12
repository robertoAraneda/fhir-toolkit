# @fhir-toolkit/cql

## 1.2.1

### Patch Changes

- bfd8645: Add implicit coercion from FHIR primitives to System types at operator boundaries. Fixes regression where `obs.status = 'final'` and string concatenation broke after FHIR primitive wrapping in v1.2.0.

## 1.2.0

### Minor Changes

- 955dd75: Wrap FHIR primitives as typed tuples and register all FHIR complex types in ModelInfo. Enables FHIRHelpers 4.0.1 compatibility where patterns like `quantity.value.value` resolve correctly through FHIR primitive wrappers.

## 1.1.0

### Minor Changes

- 89f86a2: Resolve FHIR value[x] polymorphic fields in CQL evaluation. Standard CQL patterns like `obs.value as FHIR.Quantity` now work correctly against FHIR Bundles. Added typed FHIR wrapping via `wrapFhirResource` that uses ModelInfo to recursively assign types and resolve choice type aliases.

## 1.0.1

### Patch Changes

- Achieve 100% CQL conformance — 2536/2536 HL7 CQL spec tests passing. Validates decimal precision limits (max 28 integer digits, 8 fractional digits per spec).

## 1.0.0

### Minor Changes

- Add `InMemoryDataProvider` for CQL evaluation from a FHIR Bundle, `InMemoryTerminologyProvider` for in-memory ValueSet/CodeSystem lookup, multi-library support via `libraryResolver` option, expression-level tracing via `engine.on('trace', handler)`, improved error messages with structured error codes (CQL-001, CQL-101), ELM round-trip validation, and browser compatibility. Passes 2493/2543 HL7 CQL conformance tests (99.88% pass rate, 6 aspirational decimal precision tests pending upstream spec clarification).

### Patch Changes

- Updated dependencies
  - @fhir-toolkit/ucum@0.2.0
