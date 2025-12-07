# @fhir-toolkit/r4b-models

Immutable models and fluent builders for FHIR R4B (4.3.0) resources.

## Installation

```bash
npm install @fhir-toolkit/r4b-models
```

## Usage

### Builders

```typescript
import { PatientBuilder, ObservationBuilder } from '@fhir-toolkit/r4b-models';

const patient = new PatientBuilder()
  .setId('123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender('male')
  .setBirthDate('1990-01-01')
  .build();
```

### Models

```typescript
import { Patient } from '@fhir-toolkit/r4b-models';

const patient = new Patient({
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }]
});

// Immutable updates
const updated = patient.clone({ gender: 'male' });
```

### Type Guards

```typescript
import { isPatient } from '@fhir-toolkit/r4b-models';

if (isPatient(resource)) {
  console.log(resource.name);
}
```

## Features

- Fluent builder pattern for all resources
- Immutable model classes with `clone()` and `toJSON()`
- Choice types support (`value[x]`)
- Type guards for runtime type checking

## Related Packages

- [@fhir-toolkit/r4b-types](https://www.npmjs.com/package/@fhir-toolkit/r4b-types) - Type definitions
- [@fhir-toolkit/r4b-specs](https://www.npmjs.com/package/@fhir-toolkit/r4b-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
