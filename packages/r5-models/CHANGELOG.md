# @fhir-toolkit/r5-models

## 0.2.2

### Patch Changes

- d449ba3: fix: use correct FHIR version in JSDoc documentation URLs

  The code generator was hardcoding R4 in all `@see` URLs regardless of the actual FHIR version. Now generates correct URLs like `https://hl7.org/fhir/R5/patient.html` for R5 types.

- Updated dependencies [d449ba3]
  - @fhir-toolkit/r5-types@0.1.1

## 0.2.1

### Patch Changes

- 1da3c4d: Move yafv to optional peerDependency

  The `@fhir-toolkit/yafv` package is now an optional peer dependency instead of a dev dependency.
  This makes it clear that validation features (`validateOrThrow()`) require yafv to be installed,
  while basic model/builder functionality works without it.

## 0.2.0

### Minor Changes

- 203f529: Omit resourceType from model constructor parameters

  The constructor for resource models now uses `Omit<Partial<IResource>, 'resourceType'>`
  so that `resourceType` is no longer suggested as a parameter when creating instances.
  The `resourceType` is automatically set by the class.

  ```typescript
  // Before: resourceType appeared in autocomplete suggestions
  const patient = new Patient({ resourceType: 'Patient', id: '123' });

  // After: resourceType is not suggested, automatically set
  const patient = new Patient({ id: '123' });
  patient.resourceType; // 'Patient' (readonly, auto-assigned)
  ```

## 0.1.0

### Minor Changes

- 9439d95: Initial stable release of FHIR R5 support with full types, models, and builders

### Patch Changes

- b8d2bce: Fix workspace protocol dependencies for npm compatibility
- Updated dependencies [9439d95]
  - @fhir-toolkit/r5-types@0.1.0
