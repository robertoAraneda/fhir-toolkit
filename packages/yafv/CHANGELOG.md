# @fhir-toolkit/yafv

## 1.1.1

### Patch Changes

- b8d2bce: Fix workspace protocol dependencies for npm compatibility
- Updated dependencies [9439d95]
  - @fhir-toolkit/r5-specs@0.1.0

## 1.1.0

### Minor Changes

- Add FHIR R4B validation support:
  - Support for R4B version via `fhirVersion: 'R4B'` option
  - Auto-loading of @fhir-toolkit/r4b-specs when available
  - Fixed constraint evaluation on nested elements (e.g., Bundle.entry)
  - Skip ele-1 constraint in FHIRPath evaluation (handled by invariant-validator)
  - Reorganized tests into version-specific folders (test/r4/, test/r4b/)

### Patch Changes

- Updated dependencies
  - @fhir-toolkit/r4b-specs@0.1.0

## 1.0.0

### Minor Changes

- e58e1da: Initial release of FHIR Toolkit - TypeScript types, models, builders, and validator for FHIR R4

### Patch Changes

- Updated dependencies [e58e1da]
  - @fhir-toolkit/r4-specs@0.1.0
