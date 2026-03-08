---
"@fhir-toolkit/client": patch
---

Allow `operation()` to accept any FHIR resource as body, not just Parameters

The `operation()` method now accepts `IParameters | IResource` as the `body` parameter.
This enables operations like `$validate` that accept the resource directly in the request body
(e.g., `POST /Patient/$validate` with a Patient resource) without requiring a Parameters wrapper.

GET query param extraction only applies when body is a Parameters resource.
