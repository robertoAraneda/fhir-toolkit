---
"@fhir-toolkit/cql": patch
---

Fix included library alias defaulting to empty string when the `called` clause is omitted. Per CQL spec, `include FHIRHelpers version '4.0.1'` should register the library under the alias `FHIRHelpers` (the library name), allowing `FHIRHelpers.ToQuantity(...)` calls to resolve correctly.
