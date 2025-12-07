# @fhir-toolkit/r4b-types

TypeScript type definitions for FHIR R4B (4.3.0) resources and data types.

## Installation

```bash
npm install @fhir-toolkit/r4b-types
```

## Usage

```typescript
import type { Patient, Observation, Bundle } from '@fhir-toolkit/r4b-types';

const patient: Patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: 'male',
  birthDate: '1990-01-01'
};
```

## Features

- Complete type definitions for all FHIR R4B resources
- All data types (primitives, complex types, backbone elements)
- Choice types support (`value[x]`)
- Strict TypeScript typing with proper optionality

## Related Packages

- [@fhir-toolkit/r4b-models](https://www.npmjs.com/package/@fhir-toolkit/r4b-models) - Models and builders
- [@fhir-toolkit/r4b-specs](https://www.npmjs.com/package/@fhir-toolkit/r4b-specs) - StructureDefinitions for validation
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
