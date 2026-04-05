# @fhir-toolkit/cql

## 1.0.0

### Minor Changes

- Add `InMemoryDataProvider` for CQL evaluation from a FHIR Bundle, `InMemoryTerminologyProvider` for in-memory ValueSet/CodeSystem lookup, multi-library support via `libraryResolver` option, expression-level tracing via `engine.on('trace', handler)`, improved error messages with structured error codes (CQL-001, CQL-101), ELM round-trip validation, and browser compatibility. Passes 2493/2543 HL7 CQL conformance tests (99.88% pass rate, 6 aspirational decimal precision tests pending upstream spec clarification).

### Patch Changes

- Updated dependencies
  - @fhir-toolkit/ucum@0.2.0
