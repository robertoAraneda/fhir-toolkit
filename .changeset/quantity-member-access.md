---
"@fhir-toolkit/cql": patch
---

Fix member access `.value` and `.unit` on `System.Quantity` (CqlQuantity) returning null. `visitMemberAccess` now handles CqlQuantity, returning CqlDecimal for `.value` and CqlString for `.unit`.
