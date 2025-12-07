# @fhir-toolkit/r4-types

TypeScript type definitions for FHIR R4 (4.0.1) resources and data types.

## Installation

```bash
npm install @fhir-toolkit/r4-types
```

## Usage

```typescript
import type { Patient, Observation, Bundle } from '@fhir-toolkit/r4-types';

const patient: Patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: 'male',
  birthDate: '1990-01-01'
};

const observation: Observation = {
  resourceType: 'Observation',
  status: 'final',
  code: {
    coding: [{ system: 'http://loinc.org', code: '8867-4' }]
  }
};
```

## Features

- Complete type definitions for all FHIR R4 resources
- All data types (primitives, complex types, backbone elements)
- Choice types support (`value[x]`)
- Strict TypeScript typing with proper optionality

## Related Packages

- [@fhir-toolkit/r4-models](https://www.npmjs.com/package/@fhir-toolkit/r4-models) - Models and builders
- [@fhir-toolkit/r4-specs](https://www.npmjs.com/package/@fhir-toolkit/r4-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
