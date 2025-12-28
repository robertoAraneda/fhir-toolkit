# @fhir-toolkit/r4b-types

## 0.1.1

### Patch Changes

- d449ba3: fix: use correct FHIR version in JSDoc documentation URLs

  The code generator was hardcoding R4 in all `@see` URLs regardless of the actual FHIR version. Now generates correct URLs like `https://hl7.org/fhir/R5/patient.html` for R5 types.

## 0.1.0

### Minor Changes

- Initial release of FHIR R4B packages:
  - @fhir-toolkit/r4b-types: TypeScript interfaces for FHIR R4B resources and datatypes
  - @fhir-toolkit/r4b-models: Model classes with builders and validators for FHIR R4B
  - @fhir-toolkit/r4b-specs: StructureDefinitions, ValueSets, and CodeSystems for FHIR R4B validation
