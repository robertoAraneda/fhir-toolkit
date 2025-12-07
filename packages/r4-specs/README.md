# @fhir-toolkit/r4-specs

FHIR R4 (4.0.1) StructureDefinitions, ValueSets, and CodeSystems for validation.

## Installation

```bash
npm install @fhir-toolkit/r4-specs
```

## Usage

```typescript
import { specsPath, FHIR_VERSION } from '@fhir-toolkit/r4-specs';

console.log(FHIR_VERSION);  // 'R4'
console.log(specsPath);     // Path to specs directory
```

### With yafv validator

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';
import { specsPath } from '@fhir-toolkit/r4-specs';

const validator = new FhirValidator({
  fhirVersion: 'R4',
  specsPath: specsPath
});

const result = await validator.validate(patient);
```

## Contents

- **StructureDefinitions**: All R4 resource and datatype definitions
- **ValueSets**: Standard FHIR value sets
- **CodeSystems**: Standard FHIR code systems

## Related Packages

- [@fhir-toolkit/r4-types](https://www.npmjs.com/package/@fhir-toolkit/r4-types) - Type definitions
- [@fhir-toolkit/r4-models](https://www.npmjs.com/package/@fhir-toolkit/r4-models) - Models and builders
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
