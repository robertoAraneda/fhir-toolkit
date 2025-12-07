# @fhir-toolkit/r5-types

TypeScript type definitions for FHIR R5 (5.0.0) resources and data types.

## Installation

```bash
npm install @fhir-toolkit/r5-types
```

## Usage

```typescript
import type { Patient, Observation, Bundle } from '@fhir-toolkit/r5-types';

const patient: Patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: 'male',
  birthDate: '1990-01-01'
};
```

## R5 Specific Features

FHIR R5 introduces several new features:

- New resources (e.g., `ActorDefinition`, `Requirements`, `SubscriptionTopic`)
- Enhanced `Subscription` resource
- Improved `CapabilityStatement`
- New data types

## Features

- Complete type definitions for all FHIR R5 resources
- All data types (primitives, complex types, backbone elements)
- Choice types support (`value[x]`)
- Strict TypeScript typing with proper optionality

## Related Packages

- [@fhir-toolkit/r5-models](https://www.npmjs.com/package/@fhir-toolkit/r5-models) - Models and builders
- [@fhir-toolkit/r5-specs](https://www.npmjs.com/package/@fhir-toolkit/r5-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
