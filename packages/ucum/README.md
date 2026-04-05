# @fhir-toolkit/ucum

UCUM (Unified Code for Units of Measure) validator, converter, and analyzer for Node.js and browsers.

## Installation

```bash
pnpm add @fhir-toolkit/ucum
# or
npm install @fhir-toolkit/ucum
```

## Basic usage

```typescript
import { createUcumService } from '@fhir-toolkit/ucum'

const service = createUcumService()
```

### Validate

```typescript
service.validate('mg/dL') // returns void — valid

service.validate('xyz')   // throws UcumValidationError
```

### Convert

```typescript
const mg = service.convert(1, 'g', 'mg')
console.log(mg) // 1000

const celsius = service.convert(37, 'Cel', '[degF]')
console.log(celsius) // 98.6

// Throws UcumConversionError if units are not comparable
service.convert(1, 'mg', 'Cel')
```

### Check comparability

```typescript
service.isComparable('mg', 'g')    // true — same dimension (mass)
service.isComparable('mg', 'Cel')  // false — different dimensions
service.isComparable('kg.m/s2', 'N') // true — both resolve to force
```

### Canonical form

```typescript
// Returns the value and base-unit code
const result = service.canonical(1, 'kg.m/s2')
// { value: 1, code: 'g.m.s-2' }

const result2 = service.canonical(1, 'mg/dL')
// { value: 0.01, code: 'g.l-1' }
```

### Multiply and divide

```typescript
const speed = service.multiply(
  { value: 100, code: 'm' },
  { value: 1,   code: 's-1' },
)
// { value: 100, code: 'm.s-1' }

const ratio = service.divide(
  { value: 10, code: 'g' },
  { value: 5,  code: 'L' },
)
// { value: 2, code: 'g.L-1' }
```

## analyze()

Returns a human-readable description of a UCUM expression:

```typescript
service.analyze('mg/dL')   // 'milligram per deciliter'
service.analyze('kg.m/s2') // 'kilogrammetersecond-2'
service.analyze('Cel')     // 'degree Celsius'
```

## suggest()

Autocomplete-style unit search by code prefix or name substring:

```typescript
service.suggest('ki')    // [{ code: 'kg', name: 'kilogram' }, ...]
service.suggest('Cel')   // [{ code: 'Cel', name: 'degree Celsius' }, ...]

// Limit results (default: 20)
service.suggest('m', 5)  // at most 5 results
```

## Error handling

```typescript
import { UcumValidationError, UcumConversionError } from '@fhir-toolkit/ucum'

try {
  service.validate('bad~code')
} catch (err) {
  if (err instanceof UcumValidationError) {
    console.error(err.message) // invalid UCUM code "bad~code": ...
  }
}

try {
  service.convert(1, 'mg', 'Cel')
} catch (err) {
  if (err instanceof UcumConversionError) {
    console.error(`${err.from} → ${err.to}: ${err.message}`)
  }
}
```

## Browser usage

Works in any modern browser — no special bundler configuration required:

```typescript
import { createUcumService } from '@fhir-toolkit/ucum'
const service = createUcumService()
```

## Migration from `@lhncbc/ucum-lhc`

| `@lhncbc/ucum-lhc`                      | `@fhir-toolkit/ucum`                          |
|------------------------------------------|-----------------------------------------------|
| `UcumLhcUtils.getInstance().validateUnitString(code)` | `service.validate(code)` (throws on error) |
| `UcumLhcUtils.getInstance().convertUnitTo(value, from, to)` | `service.convert(value, from, to)` |
| `UcumLhcUtils.getInstance().commensurableTest(code1, code2)` | `service.isComparable(code1, code2)` |
| Manual string matching                   | `service.suggest(prefix, limit)`              |

Key differences:
- `validate()` throws `UcumValidationError` instead of returning a status object.
- `convert()` returns a plain `number` instead of a result object.
- `canonical()` accepts `(value, code)` and returns `{ value, code }`.
