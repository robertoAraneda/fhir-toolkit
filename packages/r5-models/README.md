# @fhir-toolkit/r5-models

Immutable models and fluent builders for FHIR R5 (5.0.0) resources.

## Installation

```bash
npm install @fhir-toolkit/r5-models
```

## Usage

### Builders

```typescript
import { PatientBuilder, ObservationBuilder, ServiceRequestBuilder } from '@fhir-toolkit/r5-models';

const patient = new PatientBuilder()
  .setId('123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender('male')
  .setBirthDate('1990-01-01')
  .build();

const serviceRequest = new ServiceRequestBuilder()
  .setStatus('active')
  .setIntent('order')
  .setSubject({ reference: 'Patient/123' })
  .build();
```

### Models

```typescript
import { Patient } from '@fhir-toolkit/r5-models';

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
import { isPatient, isServiceRequest } from '@fhir-toolkit/r5-models';

if (isPatient(resource)) {
  console.log(resource.name);
}
```

## R5 Specific Features

Includes builders and models for R5-specific resources:
- `ActorDefinition`
- `Requirements`
- `SubscriptionTopic`
- Enhanced `Subscription`

## Features

- Fluent builder pattern for all resources
- Immutable model classes with `clone()` and `toJSON()`
- Choice types support (`value[x]`)
- Type guards for runtime type checking

## Related Packages

- [@fhir-toolkit/r5-types](https://www.npmjs.com/package/@fhir-toolkit/r5-types) - Type definitions
- [@fhir-toolkit/r5-specs](https://www.npmjs.com/package/@fhir-toolkit/r5-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
