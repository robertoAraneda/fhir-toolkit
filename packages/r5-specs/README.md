# @fhir-toolkit/r5-specs

FHIR R5 (5.0.0) StructureDefinitions, ValueSets, and CodeSystems for validation.

## Installation

```bash
npm install @fhir-toolkit/r5-specs
```

## Usage

```typescript
import { specsPath, FHIR_VERSION } from '@fhir-toolkit/r5-specs';

console.log(FHIR_VERSION);  // 'R5'
console.log(specsPath);     // Path to specs directory
```

### With yafv validator

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';
import { specsPath } from '@fhir-toolkit/r5-specs';

const validator = new FhirValidator({
  fhirVersion: 'R5',
  specsPath: specsPath
});

const result = await validator.validate(patient);
```

## Contents

- **StructureDefinitions**: All R5 resource and datatype definitions
- **ValueSets**: Standard FHIR value sets
- **CodeSystems**: Standard FHIR code systems

## Related Packages

- [@fhir-toolkit/r5-types](https://www.npmjs.com/package/@fhir-toolkit/r5-types) - Type definitions
- [@fhir-toolkit/r5-models](https://www.npmjs.com/package/@fhir-toolkit/r5-models) - Models and builders
- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator

## License

MIT
