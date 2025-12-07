# FHIR Toolkit

A comprehensive TypeScript toolkit for building and validating FHIR R4 resources.

## Packages

| Package | Description |
|---------|-------------|
| [@fhir-toolkit/r4-types](./packages/r4-types) | TypeScript type definitions for FHIR R4 |
| [@fhir-toolkit/r4-models](./packages/r4-models) | Model classes and fluent builders |
| [@fhir-toolkit/yafv](./packages/yafv) | FHIR validator with FHIRPath and terminology support |
| [@fhir-toolkit/r4-specs](./packages/r4-specs) | Bundled FHIR R4 specifications |
| [@fhir-toolkit/cli](./packages/cli) | Command-line interface |

## Installation

```bash
# Types only (zero dependencies)
npm install @fhir-toolkit/r4-types

# Models and builders
npm install @fhir-toolkit/r4-models

# Validator
npm install @fhir-toolkit/yafv
```

## Quick Start

### Creating Resources with Builders

```typescript
import { PatientBuilder } from '@fhir-toolkit/r4-models';

const patient = new PatientBuilder()
  .setId('patient-123')
  .setActive(true)
  .addName({
    use: 'official',
    family: 'Smith',
    given: ['John'],
  })
  .setGender('male')
  .setBirthDate('1980-01-15')
  .build();

console.log(patient.toJSON());
```

### Validating Resources

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';

const validator = new FhirValidator({ fhirVersion: 'R4' });
await validator.initialize();

const result = await validator.validate(patient.toJSON());

if (!result.isValid) {
  result.operationOutcome.issue.forEach(issue => {
    console.log(`[${issue.severity}] ${issue.diagnostics}`);
  });
}
```

### Using Type Guards

```typescript
import { isPatient, isObservation } from '@fhir-toolkit/r4-models';

if (isPatient(resource)) {
  console.log(`Patient: ${resource.name?.[0]?.family}`);
}
```

## Features

- Complete TypeScript types for all FHIR R4 resources
- Fluent builder pattern for ergonomic resource construction
- Comprehensive validation (structure, FHIRPath constraints, terminology)
- Support for custom profiles and Implementation Guides
- Zero-dependency types package for frontend use
- CLI for command-line validation

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Format code
pnpm format
```

## License

MIT
