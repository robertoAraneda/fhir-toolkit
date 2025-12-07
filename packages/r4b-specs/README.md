# @fhir-toolkit/r4b-specs

FHIR R4B (4.3.0) StructureDefinitions, ValueSets, and CodeSystems for validation.

## Installation

```bash
npm install @fhir-toolkit/r4b-specs
```

## Usage

```typescript
import { specsPath, FHIR_VERSION } from '@fhir-toolkit/r4b-specs';

console.log(FHIR_VERSION);  // 'R4B'
console.log(specsPath);     // Path to specs directory
```

### With yafv validator

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';
import { specsPath } from '@fhir-toolkit/r4b-specs';

const validator = new FhirValidator({
  fhirVersion: 'R4B',
  specsPath: specsPath
});

const result = await validator.validate(patient);
```

## Contents

- **StructureDefinitions**: All R4B resource and datatype definitions
- **ValueSets**: Standard FHIR value sets
- **CodeSystems**: Standard FHIR code systems

## Related Packages

- [@fhir-toolkit/r4b-types](https://www.npmjs.com/package/@fhir-toolkit/r4b-types) - Type definitions
- [@fhir-toolkit/r4b-models](https://www.npmjs.com/package/@fhir-toolkit/r4b-models) - Models and builders
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
