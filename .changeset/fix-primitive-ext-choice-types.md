---
"@fhir-toolkit/yafv": patch
---

Fix primitive extension validation for choice types

- Skip undefined/null primitive extension values during validation
- Support choice type variants in primitive extension validation (e.g., `_deceasedDateTime` for `deceased[x]`)
