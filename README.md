# FHIR Toolkit

<p align="center">
  <strong>A comprehensive TypeScript toolkit for working with HL7 FHIR resources</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#packages">Packages</a> •
  <a href="#examples">Examples</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/FHIR-R4%20|%20R4B%20|%20R5-blue" alt="FHIR Versions">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/Made%20in-Chile%20🇨🇱-red" alt="Made in Chile">
</p>

---

## Features

- **Multi-version Support** - Full support for FHIR R4, R4B, and R5 specifications
- **Complete Type Safety** - TypeScript interfaces for all resources, datatypes, and backbones
- **Fluent Builders** - Ergonomic builder pattern for constructing FHIR resources
- **Comprehensive Validation** - Structure validation, FHIRPath constraints, and terminology binding
- **Immutable Models** - Functional programming patterns with immutable operations
- **Zero Dependencies** - Types packages have no runtime dependencies
- **Tree Shakeable** - Only import what you need

## Installation

```bash
# Using npm
npm install @fhir-toolkit/r4-types @fhir-toolkit/r4-models

# Using pnpm
pnpm add @fhir-toolkit/r4-types @fhir-toolkit/r4-models

# Using yarn
yarn add @fhir-toolkit/r4-types @fhir-toolkit/r4-models
```

### Choose Your FHIR Version

```bash
# FHIR R4 (most common)
npm install @fhir-toolkit/r4-types @fhir-toolkit/r4-models

# FHIR R4B
npm install @fhir-toolkit/r4b-types @fhir-toolkit/r4b-models

# FHIR R5
npm install @fhir-toolkit/r5-types @fhir-toolkit/r5-models

# Validator (supports all versions)
npm install @fhir-toolkit/yafv @fhir-toolkit/r4-specs
```

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| **FHIR R4** | | |
| [@fhir-toolkit/r4-types](./packages/r4-types) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4-types) | TypeScript interfaces for FHIR R4 |
| [@fhir-toolkit/r4-models](./packages/r4-models) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4-models) | Model classes and builders for R4 |
| [@fhir-toolkit/r4-specs](./packages/r4-specs) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4-specs) | R4 StructureDefinitions for validation |
| **FHIR R4B** | | |
| [@fhir-toolkit/r4b-types](./packages/r4b-types) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4b-types) | TypeScript interfaces for FHIR R4B |
| [@fhir-toolkit/r4b-models](./packages/r4b-models) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4b-models) | Model classes and builders for R4B |
| [@fhir-toolkit/r4b-specs](./packages/r4b-specs) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r4b-specs) | R4B StructureDefinitions for validation |
| **FHIR R5** | | |
| [@fhir-toolkit/r5-types](./packages/r5-types) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r5-types) | TypeScript interfaces for FHIR R5 |
| [@fhir-toolkit/r5-models](./packages/r5-models) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r5-models) | Model classes and builders for R5 |
| [@fhir-toolkit/r5-specs](./packages/r5-specs) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/r5-specs) | R5 StructureDefinitions for validation |
| **Tools** | | |
| [@fhir-toolkit/yafv](./packages/yafv) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/yafv) | FHIR Validator with FHIRPath support |
| [@fhir-toolkit/cli](./packages/cli) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/cli) | Command-line interface |

## Quick Start

### Creating Resources with Builders

```typescript
import { PatientBuilder, ObservationBuilder } from '@fhir-toolkit/r4-models';

// Create a Patient
const patient = new PatientBuilder()
  .setId('patient-123')
  .setActive(true)
  .addName({
    use: 'official',
    family: 'García',
    given: ['María', 'José'],
  })
  .setGender('female')
  .setBirthDate('1985-03-15')
  .addAddress({
    use: 'home',
    city: 'Santiago',
    country: 'Chile',
  })
  .addTelecom({
    system: 'phone',
    value: '+56 9 1234 5678',
    use: 'mobile',
  })
  .build();

console.log(JSON.stringify(patient.toJSON(), null, 2));
```

### Creating Observations

```typescript
import { ObservationBuilder } from '@fhir-toolkit/r4-models';

// Blood Pressure Observation
const bloodPressure = new ObservationBuilder()
  .setId('bp-001')
  .setStatus('final')
  .setCode({
    coding: [{
      system: 'http://loinc.org',
      code: '85354-9',
      display: 'Blood pressure panel',
    }],
  })
  .setSubject({ reference: 'Patient/patient-123' })
  .setEffective('DateTime', '2024-01-15T10:30:00Z')
  .addComponent({
    code: {
      coding: [{
        system: 'http://loinc.org',
        code: '8480-6',
        display: 'Systolic blood pressure',
      }],
    },
    valueQuantity: {
      value: 120,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
  })
  .addComponent({
    code: {
      coding: [{
        system: 'http://loinc.org',
        code: '8462-4',
        display: 'Diastolic blood pressure',
      }],
    },
    valueQuantity: {
      value: 80,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
  })
  .build();
```

### Working with Bundles

```typescript
import { BundleBuilder } from '@fhir-toolkit/r4-models';

// Transaction Bundle
const bundle = new BundleBuilder()
  .setType('transaction')
  .addEntry({
    fullUrl: 'urn:uuid:patient-1',
    resource: patient.toJSON(),
    request: {
      method: 'POST',
      url: 'Patient',
    },
  })
  .addEntry({
    fullUrl: 'urn:uuid:observation-1',
    resource: bloodPressure.toJSON(),
    request: {
      method: 'POST',
      url: 'Observation',
    },
  })
  .build();
```

### Validating Resources

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';

// Initialize validator
const validator = new FhirValidator({ fhirVersion: 'R4' });
await validator.initialize();

// Validate a resource
const result = await validator.validate(patient.toJSON());

if (result.isValid) {
  console.log('✓ Resource is valid');
} else {
  console.log('✗ Validation errors:');
  result.issues.forEach(issue => {
    console.log(`  [${issue.severity}] ${issue.path}: ${issue.message}`);
  });
}
```

## Examples

### Immutable Updates

Models support immutable operations for functional programming patterns:

```typescript
import { Patient } from '@fhir-toolkit/r4-models';

const patient = new Patient({
  resourceType: 'Patient',
  id: '123',
  active: true,
});

// Create a new instance with changes (original unchanged)
const updated = patient.with({ active: false });

console.log(patient.active);  // true (original)
console.log(updated.active);  // false (new instance)

// Transform with a function
const withMeta = patient.applyTransform(data => ({
  ...data,
  meta: { tag: [{ code: 'reviewed' }] },
}));
```

### Deep Cloning

```typescript
const original = new Patient({
  resourceType: 'Patient',
  name: [{ family: 'Smith', given: ['John'] }],
});

const cloned = original.clone();
cloned.name![0].family = 'Doe';

console.log(original.name![0].family); // 'Smith' (unchanged)
console.log(cloned.name![0].family);   // 'Doe'
```

### Type Guards

```typescript
import { isPatient, isObservation } from '@fhir-toolkit/r4-models';
import type { IResource } from '@fhir-toolkit/r4-types';

function processResource(resource: IResource) {
  if (isPatient(resource)) {
    console.log(`Patient: ${resource.name?.[0]?.family}`);
  } else if (isObservation(resource)) {
    console.log(`Observation: ${resource.code.coding?.[0]?.display}`);
  }
}
```

### Choice Types (value[x])

FHIR choice types are fully supported with type-safe setters:

```typescript
import { ObservationBuilder } from '@fhir-toolkit/r4-models';

// Set value as Quantity
const obs1 = new ObservationBuilder()
  .setStatus('final')
  .setCode({ text: 'Weight' })
  .setValue('Quantity', { value: 70, unit: 'kg' })
  .build();

// Set value as CodeableConcept
const obs2 = new ObservationBuilder()
  .setStatus('final')
  .setCode({ text: 'Blood Type' })
  .setValue('CodeableConcept', {
    coding: [{ system: 'http://example.org', code: 'A+' }],
  })
  .build();

// Set value as String
const obs3 = new ObservationBuilder()
  .setStatus('final')
  .setCode({ text: 'Note' })
  .setValue('String', 'Patient feeling better')
  .build();
```

### Generic References

Type-safe references with allowed resource types:

```typescript
import type { IReference } from '@fhir-toolkit/r4-types';

// Reference only allows specific resource types
interface IObservation {
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location'>;
  performer?: IReference<'Practitioner' | 'Organization'>[];
}
```

### Working with ValueSets

```typescript
import type {
  AdministrativeGenderType,
  ObservationStatusType
} from '@fhir-toolkit/r4-types';

// Type-safe enum values
const gender: AdministrativeGenderType = 'female'; // ✓
const status: ObservationStatusType = 'final';     // ✓

// TypeScript error: Type '"invalid"' is not assignable
// const invalid: AdministrativeGenderType = 'invalid'; // ✗
```

### ServiceRequest Example (R5)

```typescript
import { ServiceRequestBuilder } from '@fhir-toolkit/r5-models';

const labOrder = new ServiceRequestBuilder()
  .setId('lab-order-001')
  .setStatus('active')
  .setIntent('order')
  .setPriority('urgent')
  .setSubject({ reference: 'Patient/patient-123' })
  .setRequester({ reference: 'Practitioner/dr-smith' })
  .setCode({
    concept: {
      coding: [{
        system: 'http://loinc.org',
        code: '58410-2',
        display: 'Complete blood count',
      }],
    },
  })
  .setOccurrence('DateTime', '2024-01-20T08:00:00Z')
  .addReason({
    concept: {
      coding: [{
        system: 'http://snomed.info/sct',
        code: '271737000',
        display: 'Anemia',
      }],
    },
  })
  .addNote({ text: 'Fasting required' })
  .build();
```

### ActivityDefinition Example (R5)

```typescript
import { ActivityDefinitionBuilder } from '@fhir-toolkit/r5-models';

const protocol = new ActivityDefinitionBuilder()
  .setUrl('http://example.org/ActivityDefinition/vitals-protocol')
  .setVersion('1.0.0')
  .setName('VitalsProtocol')
  .setTitle('Vital Signs Measurement Protocol')
  .setStatus('active')
  .setKind('ServiceRequest')
  .setIntent('order')
  .setCode({
    coding: [{
      system: 'http://snomed.info/sct',
      code: '61746007',
      display: 'Taking patient vital signs',
    }],
  })
  .setTiming('Timing', {
    repeat: {
      frequency: 1,
      period: 4,
      periodUnit: 'h',
    },
  })
  .addParticipant({
    type: 'practitioner',
    role: {
      coding: [{ code: 'nurse', display: 'Nurse' }],
    },
  })
  .build();
```

## Validation

### Basic Validation

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';

const validator = new FhirValidator({
  fhirVersion: 'R4',
  validateConstraints: true,  // FHIRPath constraints
  validateTerminology: false, // Terminology bindings
});

await validator.initialize();

const result = await validator.validate({
  resourceType: 'Patient',
  gender: 'invalid-gender', // This will fail
});

// result.isValid === false
// result.issues contains validation errors
```

### Validation with Profiles

```typescript
const validator = new FhirValidator({ fhirVersion: 'R4' });
await validator.initialize();

// Load a custom profile
await validator.loadProfile(myCustomProfile);

// Validate against the profile
const result = await validator.validate(resource, {
  profile: 'http://example.org/StructureDefinition/MyProfile',
});
```

### CLI Validation

```bash
# Validate a single file
npx @fhir-toolkit/yafv validate patient.json

# Validate with specific FHIR version
npx @fhir-toolkit/yafv validate --fhir-version R5 observation.json

# Validate multiple files
npx @fhir-toolkit/yafv validate resources/*.json
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        @fhir-toolkit                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  r4-types   │  │  r4b-types  │  │  r5-types   │  Types       │
│  │  (0 deps)   │  │  (0 deps)   │  │  (0 deps)   │  Layer       │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐              │
│  │  r4-models  │  │ r4b-models  │  │  r5-models  │  Models      │
│  │  (builders) │  │  (builders) │  │  (builders) │  Layer       │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐              │
│  │  r4-specs   │  │  r4b-specs  │  │  r5-specs   │  Specs       │
│  │ (StructDef) │  │ (StructDef) │  │ (StructDef) │  Layer       │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│         └────────────────┼────────────────┘                      │
│                          │                                       │
│                   ┌──────▼──────┐                                │
│                   │    yafv     │  Validator                     │
│                   │ (FHIRPath)  │                                │
│                   └─────────────┘                                │
└─────────────────────────────────────────────────────────────────┘
```

## API Reference

### Model Methods

All resource models include these methods:

| Method | Description |
|--------|-------------|
| `toJSON()` | Convert to plain JSON object |
| `clone()` | Create a deep copy |
| `with(changes)` | Create new instance with changes (immutable) |
| `applyTransform(fn)` | Transform with a function (immutable) |
| `toString()` | String representation |
| `static fromJSON(json)` | Create instance from JSON |

### Builder Methods

All builders include these common methods:

| Method | Description |
|--------|-------------|
| `setId(id)` | Set resource ID |
| `setMeta(meta)` | Set resource metadata |
| `setLanguage(lang)` | Set language |
| `setText(narrative)` | Set narrative text |
| `addExtension(ext)` | Add an extension |
| `addModifierExtension(ext)` | Add a modifier extension |
| `build()` | Build the resource instance |

### Validator Options

```typescript
interface FhirValidatorOptions {
  fhirVersion: 'R4' | 'R4B' | 'R5';
  validateConstraints?: boolean;  // FHIRPath constraints (default: true)
  validateTerminology?: boolean;  // Terminology bindings (default: false)
  errorOnWarning?: boolean;       // Treat warnings as errors (default: false)
}
```

## Development

```bash
# Clone the repository
git clone https://github.com/robertoAraneda/fhir-toolkit.git
cd fhir-toolkit

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Run tests with coverage
pnpm test -- --coverage

# Format code
pnpm format

# Lint
pnpm lint
```

### Project Structure

```
fhir-toolkit/
├── packages/
│   ├── r4-types/      # R4 TypeScript interfaces
│   ├── r4-models/     # R4 model classes and builders
│   ├── r4-specs/      # R4 StructureDefinitions
│   ├── r4b-types/     # R4B TypeScript interfaces
│   ├── r4b-models/    # R4B model classes and builders
│   ├── r4b-specs/     # R4B StructureDefinitions
│   ├── r5-types/      # R5 TypeScript interfaces
│   ├── r5-models/     # R5 model classes and builders
│   ├── r5-specs/      # R5 StructureDefinitions
│   ├── yafv/          # FHIR Validator
│   ├── cli/           # Command-line interface
│   └── codegen/       # Code generation tools
├── examples/          # Usage examples
└── docs/              # Documentation
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Related Projects

- [HL7 FHIR](https://hl7.org/fhir/) - Official FHIR specification
- [fhirpath.js](https://github.com/HL7/fhirpath.js) - FHIRPath implementation
- [HAPI FHIR](https://hapifhir.io/) - Java FHIR library

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Roberto Araneda** - [@robertoAraneda](https://github.com/robertoAraneda)

Made with ❤️ in Chile 🇨🇱

---

<p align="center">
  <sub>If you find this project useful, please consider giving it a ⭐️</sub>
</p>
