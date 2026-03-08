# @fhir-toolkit/client

## 0.2.1

### Patch Changes

- 149ee45: Allow `operation()` to accept any FHIR resource as body, not just Parameters

  The `operation()` method now accepts `IParameters | IResource` as the `body` parameter.
  This enables operations like `$validate` that accept the resource directly in the request body
  (e.g., `POST /Patient/$validate` with a Patient resource) without requiring a Parameters wrapper.

  GET query param extraction only applies when body is a Parameters resource.

## 0.2.0

### Minor Changes

- d89b7bb: feat(client): add FHIR client package for REST API interactions
