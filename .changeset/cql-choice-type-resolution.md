---
"@fhir-toolkit/cql": minor
---

Resolve FHIR value[x] polymorphic fields in CQL evaluation. Standard CQL patterns like `obs.value as FHIR.Quantity` now work correctly against FHIR Bundles. Added typed FHIR wrapping via `wrapFhirResource` that uses ModelInfo to recursively assign types and resolve choice type aliases.
