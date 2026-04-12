---
"@fhir-toolkit/cql": patch
---

Add implicit coercion from FHIR primitives to System types at operator boundaries. Fixes regression where `obs.status = 'final'` and string concatenation broke after FHIR primitive wrapping in v1.2.0.
