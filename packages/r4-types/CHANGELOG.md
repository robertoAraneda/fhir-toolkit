# @fhir-toolkit/r4-types

## 0.1.1

### Patch Changes

- d449ba3: fix: use correct FHIR version in JSDoc documentation URLs

  The code generator was hardcoding R4 in all `@see` URLs regardless of the actual FHIR version. Now generates correct URLs like `https://hl7.org/fhir/R5/patient.html` for R5 types.

## 0.1.0

### Minor Changes

- e58e1da: Initial release of FHIR Toolkit - TypeScript types, models, builders, and validator for FHIR R4
