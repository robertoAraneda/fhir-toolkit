---
"@fhir-toolkit/r4-models": patch
"@fhir-toolkit/r4b-models": patch
"@fhir-toolkit/r5-models": patch
---

Move yafv to optional peerDependency

The `@fhir-toolkit/yafv` package is now an optional peer dependency instead of a dev dependency.
This makes it clear that validation features (`validateOrThrow()`) require yafv to be installed,
while basic model/builder functionality works without it.
