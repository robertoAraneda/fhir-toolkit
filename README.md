# FHIR Toolkit

<p align="center">
  <strong>A comprehensive TypeScript toolkit for working with HL7 FHIR resources</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#packages">Packages</a> •
  <a href="#cql-engine">CQL Engine</a> •
  <a href="#ucum">UCUM</a> •
  <a href="#quick-start">Quick Start</a> •
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
- **CQL Engine** - Native Clinical Quality Language engine with 99.88% spec conformance
- **UCUM Support** - Unit of measure parsing, validation, and conversion
- **Immutable Models** - Functional programming patterns with immutable operations
- **Tree Shakeable** - Only import what you need

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
| **Clinical Quality** | | |
| [@fhir-toolkit/cql](./packages/cql) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/cql) | CQL engine — parse, evaluate, and translate to ELM |
| [@fhir-toolkit/ucum](./packages/ucum) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/ucum) | UCUM unit parser, validator, and converter |
| **Tools** | | |
| [@fhir-toolkit/yafv](./packages/yafv) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/yafv) | FHIR Validator with FHIRPath support |
| [@fhir-toolkit/client](./packages/client) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/client) | FHIR REST client |
| [@fhir-toolkit/smart-auth](./packages/smart-auth) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/smart-auth) | SMART on FHIR authentication |
| [@fhir-toolkit/react](./packages/react) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/react) | React hooks for FHIR |
| [@fhir-toolkit/cli](./packages/cli) | ![npm](https://img.shields.io/npm/v/@fhir-toolkit/cli) | Command-line interface |

## Installation

```bash
# FHIR Resources (choose your version)
pnpm add @fhir-toolkit/r4-types @fhir-toolkit/r4-models

# Validator
pnpm add @fhir-toolkit/yafv @fhir-toolkit/r4-specs

# CQL Engine
pnpm add @fhir-toolkit/cql

# CQL + UCUM unit conversion
pnpm add @fhir-toolkit/cql @fhir-toolkit/ucum
```

---

## CQL Engine

The first native [Clinical Quality Language](https://cql.hl7.org/) engine for TypeScript. Parses CQL, evaluates expressions against FHIR resources, and translates to/from ELM — all without Java.

**99.88% conformance** against the [official HL7 CQL spec test suite](https://github.com/cqframework/cql-tests) (1,670/1,672 tests).

### Parse and evaluate CQL

```typescript
import { CqlEngine } from '@fhir-toolkit/cql';

const engine = new CqlEngine({ modelInfo: 'R4' });

const results = await engine.evaluateLibrary(`
  library Example version '1.0'
  using FHIR version '4.0.1'
  context Patient
  define IsAdult: AgeInYears() >= 18
  define HasDiabetes: exists([Condition: "Diabetes"])
`, {
  resourceType: 'Patient',
  birthDate: '1990-01-15',
});

console.log(results['IsAdult']);  // true
```

### Compile CQL to ELM

```typescript
import { compile, translateLibrary } from '@fhir-toolkit/cql';

const cqlSource = `
  library MeasureLogic version '1.0'
  using FHIR version '4.0.1'
  context Patient
  define InDenominator: AgeInYears() >= 18
  define InNumerator: exists([Condition: "Hypertension"])
`;

// CQL text -> AST -> ELM JSON (no Java needed)
const ast = compile(cqlSource);
const elm = translateLibrary(ast);

console.log(JSON.stringify(elm, null, 2));
```

### Import ELM back to AST

```typescript
import { importElmLibrary, translateLibrary, compile } from '@fhir-toolkit/cql';

// Round-trip: CQL -> AST -> ELM -> AST
const ast = compile(cqlSource);
const elm = translateLibrary(ast);
const astAgain = importElmLibrary(elm);
```

### Evaluate single expressions

```typescript
import { CqlEngine, CqlInteger } from '@fhir-toolkit/cql';

const engine = new CqlEngine();

// Arithmetic
const sum = await engine.evaluateExpression(
  `library T version '1.0'\ndefine X: 2 + 3 * 4`,
  'X', null,
);
console.log(sum?.toString()); // '14'

// With parameters
const check = await engine.evaluateExpression(
  `library T version '1.0'
   parameter Threshold Integer default 10
   define Over: Threshold > 5`,
  'Over', null,
  { Threshold: new CqlInteger(20) },
);
console.log(check?.toString()); // 'true'
```

### With UCUM unit conversion

```typescript
import { CqlEngine } from '@fhir-toolkit/cql';
import { createUcumService } from '@fhir-toolkit/ucum';

const engine = new CqlEngine({
  modelInfo: 'R4',
  ucumService: createUcumService(),
});

// Now quantity comparisons across units work:
// 1'm' > 1'cm' -> true
// 1'cm' = 0.01'm' -> true
// 1.0'cm' * 2.0'cm' -> 2.0'cm2'
```

### Custom functions

```typescript
import { CqlEngine, CqlInteger } from '@fhir-toolkit/cql';

const engine = new CqlEngine();

engine.functions.register('Double', ([v]) => {
  if (!v || v.type !== 'Integer') return null;
  return new CqlInteger((v as CqlInteger).value * 2);
});
```

### Engine options

```typescript
const engine = new CqlEngine({
  modelInfo: 'R4',              // 'R4' | 'R4B' | 'R5' | custom ModelInfo
  dataProvider: myProvider,     // for [Retrieve] expressions
  terminologyProvider: myTP,    // for ValueSet/CodeSystem operations
  ucumService: ucumService,     // for unit conversion (optional)
  timeout: 30000,               // evaluation timeout in ms (default: 30s)
  maxExpressionLen: 102400,     // max CQL source length (default: 100KB)
  maxRetrieveSize: 10000,       // max resources per retrieve
  maxDepth: 100,                // max recursion depth
});
```

### What's supported

| Feature | Status |
|---------|--------|
| All CQL types (Integer, Decimal, String, Boolean, DateTime, Time, Quantity, Code, Concept, Interval, List, Tuple) | Supported |
| Arithmetic, comparison, logical, set operators | Supported |
| Queries (from/let/with/without/where/return/sort/aggregate) | Supported |
| Retrieve expressions | Supported |
| If/then/else, case expressions | Supported |
| 80+ built-in functions (string, math, clinical, datetime, interval, list, aggregate) | Supported |
| Three-valued logic (null propagation) | Supported |
| ELM import/export with round-trip | Supported |
| User-defined functions | Supported |
| FHIR R4, R4B, R5 model info | Supported |
| UCUM unit conversion (with @fhir-toolkit/ucum) | Supported |
| Pluggable DataProvider and TerminologyProvider | Supported |

---

## UCUM

Native [UCUM](https://ucum.org/) (Unified Code for Units of Measure) parser and converter. Zero external dependencies.

```typescript
import { createUcumService } from '@fhir-toolkit/ucum';

const ucum = createUcumService();

// Validate unit codes
ucum.validate('mg/dL');     // ok
ucum.validate('invalid');   // throws UcumValidationError

// Convert between units
ucum.convert(1, 'm', 'cm');      // 100
ucum.convert(98.6, '[degF]', 'Cel');  // 37 (Fahrenheit to Celsius)
ucum.convert(1, 'kg', 'g');      // 1000

// Check if units are comparable
ucum.isComparable('m', 'cm');    // true (both are length)
ucum.isComparable('m', 'kg');    // false (length vs mass)

// Get canonical form (base units)
ucum.canonical(5, 'km');  // { value: 5000, code: 'm' }

// Multiply quantities (compose units)
ucum.multiply(
  { value: 2, code: 'cm' },
  { value: 3, code: 'cm' },
);  // { value: 6, code: 'cm2' }
```

Supports all 305 UCUM defined units, 24 SI prefixes, and special units (temperature, logarithmic, trigonometric).

---

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
    family: 'Garcia',
    given: ['Maria', 'Jose'],
  })
  .setGender('female')
  .setBirthDate('1985-03-15')
  .addAddress({
    use: 'home',
    city: 'Santiago',
    country: 'Chile',
  })
  .build();

console.log(JSON.stringify(patient.toJSON(), null, 2));
```

### Creating Observations

```typescript
import { ObservationBuilder } from '@fhir-toolkit/r4-models';

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
  .build();
```

### Validating Resources

```typescript
import { FhirValidator } from '@fhir-toolkit/yafv';

const validator = new FhirValidator({
  fhirVersion: 'R4',
  validateConstraints: true,
});
await validator.initialize();

const result = await validator.validate(patient.toJSON());

if (result.isValid) {
  console.log('Resource is valid');
} else {
  result.issues.forEach(issue => {
    console.log(`[${issue.severity}] ${issue.path}: ${issue.message}`);
  });
}
```

## Examples

### Immutable Updates

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

```typescript
import { ObservationBuilder } from '@fhir-toolkit/r4-models';

const obs = new ObservationBuilder()
  .setStatus('final')
  .setCode({ text: 'Weight' })
  .setValue('Quantity', { value: 70, unit: 'kg' })
  .build();
```

### Type-safe ValueSets

```typescript
import type {
  AdministrativeGenderType,
  ObservationStatusType,
} from '@fhir-toolkit/r4-types';

const gender: AdministrativeGenderType = 'female'; // ok
const status: ObservationStatusType = 'final';     // ok
```

## Architecture

```
fhir-toolkit/
├── packages/
│   ├── r4-types/        # R4 TypeScript interfaces (0 deps)
│   ├── r4-models/       # R4 model classes and builders
│   ├── r4-specs/        # R4 StructureDefinitions
│   ├── r4b-types/       # R4B TypeScript interfaces
│   ├── r4b-models/      # R4B model classes and builders
│   ├── r4b-specs/       # R4B StructureDefinitions
│   ├── r5-types/        # R5 TypeScript interfaces
│   ├── r5-models/       # R5 model classes and builders
│   ├── r5-specs/        # R5 StructureDefinitions
│   ├── cql/             # CQL engine (parser, evaluator, ELM)
│   ├── ucum/            # UCUM unit parser and converter
│   ├── yafv/            # FHIR Validator
│   ├── client/          # FHIR REST client
│   ├── smart-auth/      # SMART on FHIR authentication
│   ├── react/           # React hooks for FHIR
│   ├── react-ui/        # React UI components
│   ├── cli/             # Command-line interface
│   └── codegen/         # Code generation tools
├── examples/            # Usage examples
└── docs/                # Documentation
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

# Format code
pnpm format
```

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Related Projects

- [HL7 FHIR](https://hl7.org/fhir/) - Official FHIR specification
- [CQL Specification](https://cql.hl7.org/) - Clinical Quality Language
- [UCUM](https://ucum.org/) - Unified Code for Units of Measure
- [fhirpath.js](https://github.com/HL7/fhirpath.js) - FHIRPath implementation
- [cqframework/cql-tests](https://github.com/cqframework/cql-tests) - Official CQL conformance tests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Roberto Araneda** - [@robertoAraneda](https://github.com/robertoAraneda)

Made with ❤️ in Chile 🇨🇱
