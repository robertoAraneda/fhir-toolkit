# @fhir-toolkit/r4-models

Immutable models and fluent builders for FHIR R4 (4.0.1) resources.

## Installation

```bash
npm install @fhir-toolkit/r4-models
```

## Usage

### Builders

```typescript
import { PatientBuilder, ObservationBuilder } from '@fhir-toolkit/r4-models';

const patient = new PatientBuilder()
  .setId('123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender('male')
  .setBirthDate('1990-01-01')
  .build();

const observation = new ObservationBuilder()
  .setStatus('final')
  .setCode({
    coding: [{ system: 'http://loinc.org', code: '8867-4', display: 'Heart rate' }]
  })
  .setValue('Quantity', { value: 72, unit: 'beats/min' })
  .build();
```

### Models

```typescript
import { Patient, Observation } from '@fhir-toolkit/r4-models';

// Create from JSON
const patient = new Patient({
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }]
});

// Immutable updates
const updated = patient.clone({ gender: 'male' });

// Serialize
const json = patient.toJSON();
```

### Type Guards

```typescript
import { isPatient, isObservation } from '@fhir-toolkit/r4-models';

if (isPatient(resource)) {
  console.log(resource.name);
}
```

## Features

- Fluent builder pattern for all resources
- Immutable model classes with `clone()` and `toJSON()`
- Choice types support (`value[x]`)
- Type guards for runtime type checking
- Full TypeScript support

## Related Packages

- [@fhir-toolkit/r4-types](https://www.npmjs.com/package/@fhir-toolkit/r4-types) - Type definitions
- [@fhir-toolkit/r4-specs](https://www.npmjs.com/package/@fhir-toolkit/r4-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
