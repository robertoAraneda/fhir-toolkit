# @fhir-toolkit/r5-models

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
