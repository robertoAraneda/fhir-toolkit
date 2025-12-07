---
"@fhir-toolkit/r4-models": minor
"@fhir-toolkit/r4b-models": minor
"@fhir-toolkit/r5-models": minor
---

Omit resourceType from model constructor parameters

The constructor for resource models now uses `Omit<Partial<IResource>, 'resourceType'>`
so that `resourceType` is no longer suggested as a parameter when creating instances.
The `resourceType` is automatically set by the class.

```typescript
// Before: resourceType appeared in autocomplete suggestions
const patient = new Patient({ resourceType: 'Patient', id: '123' });

// After: resourceType is not suggested, automatically set
const patient = new Patient({ id: '123' });
patient.resourceType; // 'Patient' (readonly, auto-assigned)
```
