---
"@fhir-toolkit/yafv": minor
---

feat(yafv): add FHIR spec compliance features

- FHIRPath resolve() for Bundle and contained resource resolution
- FHIRPath memberOf() for inline terminology validation
- Extension context validation
- Bundle fullUrl/id consistency checks
- Reference aggregation mode validation
- FHIRPath constraint timeout safety limits
- Dynamic regex extraction from StructureDefinitions
- JSON source location mapping (line/column in errors)
- History version reference support (/_history/{versionId})
- External profile resolver callback
- Extension context merging across packages
- maxLength validation for string elements
- minValue[x]/maxValue[x] bounds validation
- contentReference resolution for recursive structures
- XHTML subset validation (allowed elements/attributes)
