# @fhir-toolkit/yafv

Yet Another FHIR Validator - A comprehensive FHIR validator with FHIRPath, terminology, and profile support.

## Installation

```bash
npm install @fhir-toolkit/yafv

# Install specs for your FHIR version (at least one required)
npm install @fhir-toolkit/r4-specs   # For R4
npm install @fhir-toolkit/r4b-specs  # For R4B
npm install @fhir-toolkit/r5-specs   # For R5
```

## Usage

### Basic Validation

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';
import { specsPath } from '@fhir-toolkit/r4-specs';

const validator = new FhirValidator({
  fhirVersion: 'R4',
  specsPath: specsPath
});

const patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }]
};

const result = await validator.validate(patient);

if (result.valid) {
  console.log('Resource is valid!');
} else {
  console.log('Validation errors:', result.issues);
}
```

### Profile Validation

```typescript
const result = await validator.validate(patient, {
  profile: 'http://hl7.org/fhir/StructureDefinition/Patient'
});
```

### With Implementation Guide

```typescript
const validator = new FhirValidator({
  fhirVersion: 'R4',
  specsPath: specsPath,
  implementationGuides: ['/path/to/ig/package']
});
```

## CLI Usage

```bash
# Validate a file
npx fhir-validate --version R4 patient.json

# Validate against a profile
npx fhir-validate --version R4 --profile http://example.org/Profile patient.json

# Validate multiple files
npx fhir-validate --version R4 *.json
```

## Features

- Multi-version support (R4, R4B, R5)
- FHIRPath constraint evaluation
- Terminology validation (ValueSets, CodeSystems)
- Profile/StructureDefinition validation
- Slicing validation
- Extension validation
- Reference validation
- Implementation Guide support
- CLI tool included

## Validation Output

```typescript
interface ValidationResult {
  valid: boolean;
  issues: OperationOutcomeIssue[];
}
```

Each issue contains:
- `severity`: `error` | `warning` | `information`
- `code`: Issue type code
- `diagnostics`: Human-readable description
- `expression`: FHIRPath to the element

## Related Packages

- [@fhir-toolkit/r4-specs](https://www.npmjs.com/package/@fhir-toolkit/r4-specs) - R4 specifications
- [@fhir-toolkit/r4b-specs](https://www.npmjs.com/package/@fhir-toolkit/r4b-specs) - R4B specifications
- [@fhir-toolkit/r5-specs](https://www.npmjs.com/package/@fhir-toolkit/r5-specs) - R5 specifications

## License

MIT
