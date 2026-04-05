# @fhir-toolkit/cql

A Clinical Quality Language (CQL) expression engine for Node.js and browsers. Evaluates CQL 1.5 expressions against FHIR R4/R4B/R5 resources.

## Installation

```bash
pnpm add @fhir-toolkit/cql
# or
npm install @fhir-toolkit/cql
```

## Basic evaluation

```typescript
import { CqlEngine } from '@fhir-toolkit/cql'

const engine = new CqlEngine()

const result = await engine.evaluateExpression(
  `library Test version '1.0'
define "Result": 2 + 2`,
  'Result',
  null,
)
console.log(result?.toString()) // '4'
```

## Evaluate all expressions in a library

```typescript
const results = await engine.evaluateLibrary(
  `library Demo version '1.0'
define "A": 1 + 1
define "B": 'hello'`,
  null,
)
// { A: CqlInteger(2), B: CqlString('hello') }
```

## InMemoryDataProvider

Load a FHIR Bundle as in-memory data:

```typescript
import { CqlEngine, InMemoryDataProvider } from '@fhir-toolkit/cql'

const bundle = {
  resourceType: 'Bundle' as const,
  entry: [
    { resource: { resourceType: 'Patient', id: 'p1', gender: 'female' } },
    { resource: { resourceType: 'Observation', id: 'o1', status: 'final' } },
  ],
}

const engine = new CqlEngine({
  dataProvider: new InMemoryDataProvider(bundle),
})

const result = await engine.evaluateExpression(
  `library Demo version '1.0'
context Patient
define "Patients": [Patient]`,
  'Patients',
  null,
)
```

## InMemoryTerminologyProvider

Supply value sets for membership checks:

```typescript
import { CqlEngine, InMemoryTerminologyProvider } from '@fhir-toolkit/cql'

const engine = new CqlEngine({
  terminologyProvider: new InMemoryTerminologyProvider({
    valueSets: {
      'http://example.org/vs/diabetes': [
        { system: 'http://snomed.info/sct', code: '44054006', display: 'Diabetes mellitus' },
      ],
    },
    codeSystems: {
      'http://snomed.info/sct': [
        { system: 'http://snomed.info/sct', code: '44054006' },
      ],
    },
  }),
})
```

## Multi-library support

Resolve included CQL libraries at runtime:

```typescript
import { CqlEngine } from '@fhir-toolkit/cql'

const engine = new CqlEngine({
  libraryResolver: async (name, version) => {
    const response = await fetch(`/libraries/${name}-${version}.cql`)
    return response.text()
  },
})

// A library that includes another:
const result = await engine.evaluateExpression(
  `library Main version '1.0'
include Helpers version '1.0' called H
define "Value": H.SomeHelper()`,
  'Value',
  null,
)
```

## Expression tracing

Receive a callback after each expression definition is evaluated:

```typescript
engine.on('trace', (event) => {
  console.log(`${event.expression} = ${JSON.stringify(event.value)}`)
})
```

`on()` returns `this` so calls can be chained:

```typescript
const engine = new CqlEngine()
  .on('trace', (e) => console.log(e.expression, e.value))
```

## UCUM unit support

Plug in `@fhir-toolkit/ucum` for Quantity arithmetic:

```typescript
import { CqlEngine } from '@fhir-toolkit/cql'
import { createUcumService } from '@fhir-toolkit/ucum'

const engine = new CqlEngine({
  ucumService: createUcumService(),
})
```

## Compile to AST

`compile()` parses CQL source and returns a cached `Library` AST (ELM-compatible):

```typescript
import { CqlEngine } from '@fhir-toolkit/cql'

const engine = new CqlEngine()
const lib = engine.compile(`library Test version '1.0'
define "X": 42`)

console.log(lib.name)    // 'Test'
console.log(lib.version) // '1.0'
```

## ELM import/export

```typescript
import { translateLibrary, importElmLibrary } from '@fhir-toolkit/cql'

// CQL source → ELM JSON
const elm = translateLibrary(`library Test version '1.0'
define "X": 1 + 1`)

// ELM JSON → Library AST
const lib = importElmLibrary(elm)
```

## Error handling

```typescript
import {
  CqlSyntaxError,
  CqlEvalError,
  CqlTimeoutError,
  CqlTooCostlyError,
} from '@fhir-toolkit/cql'

try {
  await engine.evaluateExpression(source, 'Result', null)
} catch (err) {
  if (err instanceof CqlSyntaxError) {
    // err.code === 'CQL-001'
    // err.line, err.column available
    console.error(`Syntax error at ${err.line}:${err.column}`)
  } else if (err instanceof CqlEvalError) {
    // err.code === 'CQL-101'
    // err.definition — name of the failing define
    console.error(`Eval error in '${err.definition}'`)
  } else if (err instanceof CqlTimeoutError) {
    // err.code === 'CQL-201'
    console.error(`Timed out after ${err.timeoutMs}ms`)
  } else if (err instanceof CqlTooCostlyError) {
    // err.code === 'CQL-202'
    console.error('CQL source exceeds maximum allowed length')
  }
}
```

## Engine options

```typescript
const engine = new CqlEngine({
  modelInfo: 'R4',            // 'R4' | 'R4B' | 'R5' (default: 'R4')
  timeout: 5_000,             // ms per evaluation (default: 30 000)
  maxExpressionLen: 50_000,   // max CQL source length (default: 102 400)
  maxDepth: 50,               // max recursion depth (default: 100)
  dataProvider: ...,
  terminologyProvider: ...,
  ucumService: ...,
  libraryResolver: ...,
})
```

## Browser usage

Works in any modern browser with no special bundler configuration:

```typescript
import { CqlEngine } from '@fhir-toolkit/cql'
const engine = new CqlEngine()
```

## Migration from the Java CQL engine

| Java CQL engine                           | `@fhir-toolkit/cql`                                      |
|-------------------------------------------|----------------------------------------------------------|
| `CqlEngine.evaluate(library, context)`    | `engine.evaluateLibrary(source, context)`                |
| `CqlEngine.evaluate(library, context, expressionNames)` | `engine.evaluateExpression(source, name, context)` |
| `LibraryLoader` interface                 | `libraryResolver: (name, version) => Promise<string>`    |
| `DataProvider` interface                  | `DataProvider` interface / `InMemoryDataProvider`        |
| `TerminologyProvider` interface           | `TerminologyProvider` interface / `InMemoryTerminologyProvider` |
| ELM JSON                                  | `translateLibrary(source)` / `importElmLibrary(elm)`     |

Key differences:
- Evaluation is async (`Promise`-based) rather than synchronous.
- Libraries are supplied as CQL source strings; the engine compiles and caches them internally.
- Result values are typed (`CqlInteger`, `CqlString`, `CqlQuantity`, etc.) with a `.toString()` method.
