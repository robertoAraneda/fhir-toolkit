---
"@fhir-toolkit/codegen": patch
"@fhir-toolkit/r4-types": patch
"@fhir-toolkit/r4b-types": patch
"@fhir-toolkit/r5-types": patch
"@fhir-toolkit/r4-models": patch
"@fhir-toolkit/r4b-models": patch
"@fhir-toolkit/r5-models": patch
---

fix: use correct FHIR version in JSDoc documentation URLs

The code generator was hardcoding R4 in all `@see` URLs regardless of the actual FHIR version. Now generates correct URLs like `https://hl7.org/fhir/R5/patient.html` for R5 types.
