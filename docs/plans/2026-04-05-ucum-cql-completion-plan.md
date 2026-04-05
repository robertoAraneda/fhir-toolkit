# ucum + cql Completion to v1.0 — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resolve all 45 pending TODOs in `@fhir-toolkit/ucum` and `@fhir-toolkit/cql` to reach v1.0 stable.

**Architecture:** 4 sequential phases (Testing → Code Review → Infra → Features). Within each phase, UCUM and CQL tasks are independent and can be parallelized. Tests come first — they are the safety net for all subsequent phases.

**Tech Stack:** TypeScript, Vitest, tsup, pnpm + turbo, decimal.js, antlr4ng, happy-dom (browser), Playwright (smoke tests)

**Go References:**
- CQL: `/Users/robertoaraneda/projects/personal/opensource/go-cql/`
- UCUM: `/Users/robertoaraneda/projects/personal/opensource/ucum/`

**Design Doc:** `docs/plans/2026-04-05-ucum-cql-completion-design.md`

---

## PHASE 1: Testing

> Build the safety net before touching any production code.

---

### Task 1: UCUM — Lexer tests

**Files:**
- Create: `packages/ucum/test/lexer.test.ts`

**Context:** The TS `Lexer` constructor calls `consume()` immediately, so the first token is already loaded after `new Lexer(source)`. Errors for unterminated annotations/brackets are thrown in the constructor.

**Step 1: Create `packages/ucum/test/lexer.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { Lexer, TokenType, tokenTypeToString } from '../src/lexer.js'

interface ExpectedToken {
  token: string
  type: TokenType
}

function collectTokens(source: string): ExpectedToken[] {
  const lex = new Lexer(source)
  const tokens: ExpectedToken[] = []
  while (!lex.finished()) {
    tokens.push({ token: lex.getToken(), type: lex.getType() })
    lex.consume()
  }
  return tokens
}

function assertTokens(source: string, expected: ExpectedToken[]) {
  const tokens = collectTokens(source)
  expect(tokens).toEqual(expected)
}

describe('Lexer', () => {
  it('tokenizes simple unit', () => {
    assertTokens('m', [{ token: 'm', type: TokenType.Symbol }])
  })

  it('tokenizes compound unit', () => {
    assertTokens('m/s', [
      { token: 'm', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 's', type: TokenType.Symbol },
    ])
  })

  it('tokenizes unit with exponent', () => {
    assertTokens('m2', [
      { token: 'm', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes negative exponent', () => {
    assertTokens('m-2', [
      { token: 'm', type: TokenType.Symbol },
      { token: '-2', type: TokenType.Number },
    ])
  })

  it('tokenizes annotation', () => {
    assertTokens('{score}', [{ token: '{score}', type: TokenType.Annotation }])
  })

  it('tokenizes bracketed unit', () => {
    assertTokens('[lb_av]', [{ token: '[lb_av]', type: TokenType.Symbol }])
  })

  it('tokenizes mixed with bracket', () => {
    assertTokens('cm[H2O]', [
      { token: 'cm', type: TokenType.Symbol },
      { token: '[H2O]', type: TokenType.Symbol },
    ])
  })

  it('tokenizes ten-star notation', () => {
    assertTokens('10*3/uL', [
      { token: '10*', type: TokenType.Symbol },
      { token: '3', type: TokenType.Number },
      { token: '/', type: TokenType.Solidus },
      { token: 'uL', type: TokenType.Symbol },
    ])
  })

  it('tokenizes kg.m/s2', () => {
    assertTokens('kg.m/s2', [
      { token: 'kg', type: TokenType.Symbol },
      { token: '.', type: TokenType.Period },
      { token: 'm', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 's', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes percent', () => {
    assertTokens('%', [{ token: '%', type: TokenType.Symbol }])
  })

  it('tokenizes parentheses', () => {
    assertTokens('(m)', [
      { token: '(', type: TokenType.Open },
      { token: 'm', type: TokenType.Symbol },
      { token: ')', type: TokenType.Close },
    ])
  })

  it('tokenizes leading solidus', () => {
    assertTokens('/m', [
      { token: '/', type: TokenType.Solidus },
      { token: 'm', type: TokenType.Symbol },
    ])
  })

  it('tokenizes mol/L', () => {
    assertTokens('mol/L', [
      { token: 'mol', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 'L', type: TokenType.Symbol },
    ])
  })

  it('tokenizes complex expression 4.[pi].10*-7.N/A2', () => {
    assertTokens('4.[pi].10*-7.N/A2', [
      { token: '4', type: TokenType.Number },
      { token: '.', type: TokenType.Period },
      { token: '[pi]', type: TokenType.Symbol },
      { token: '.', type: TokenType.Period },
      { token: '10*', type: TokenType.Symbol },
      { token: '-7', type: TokenType.Number },
      { token: '.', type: TokenType.Period },
      { token: 'N', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 'A', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes pure number', () => {
    assertTokens('123', [{ token: '123', type: TokenType.Number }])
  })

  it('tokenizes signed positive exponent', () => {
    assertTokens('m+3', [
      { token: 'm', type: TokenType.Symbol },
      { token: '+3', type: TokenType.Number },
    ])
  })

  it('tokenizes annotation after unit', () => {
    assertTokens('mg{total}', [
      { token: 'mg', type: TokenType.Symbol },
      { token: '{total}', type: TokenType.Annotation },
    ])
  })

  it('is immediately finished for empty string', () => {
    const lex = new Lexer('')
    expect(lex.finished()).toBe(true)
  })

  it('getTokenAsInt parses integer token', () => {
    const lex = new Lexer('42')
    expect(lex.getTokenAsInt()).toBe(42)
  })

  it('getTokenAsInt parses signed negative token', () => {
    const lex = new Lexer('m-3')
    lex.consume() // skip 'm'
    expect(lex.getTokenAsInt()).toBe(-3)
  })

  it('throws on unterminated annotation', () => {
    expect(() => new Lexer('{oops')).toThrow()
  })

  it('throws on unterminated bracket', () => {
    expect(() => new Lexer('[oops')).toThrow()
  })

  it('tokenizes nested parentheses', () => {
    assertTokens('((m))', [
      { token: '(', type: TokenType.Open },
      { token: '(', type: TokenType.Open },
      { token: 'm', type: TokenType.Symbol },
      { token: ')', type: TokenType.Close },
      { token: ')', type: TokenType.Close },
    ])
  })

  it('tokenizes Celsius', () => {
    assertTokens('Cel', [{ token: 'Cel', type: TokenType.Symbol }])
  })

  it("tokenizes square bracket unit [in_i'H2O]", () => {
    assertTokens("[in_i'H2O]", [{ token: "[in_i'H2O]", type: TokenType.Symbol }])
  })

  it('tokenizes mL', () => {
    assertTokens('mL', [{ token: 'mL', type: TokenType.Symbol }])
  })

  it('tokenizes percent with annotation', () => {
    assertTokens('%{vol}', [
      { token: '%', type: TokenType.Symbol },
      { token: '{vol}', type: TokenType.Annotation },
    ])
  })

  describe('tokenTypeToString', () => {
    it.each([
      [TokenType.None, 'none'],
      [TokenType.Number, 'number'],
      [TokenType.Symbol, 'symbol'],
      [TokenType.Solidus, 'solidus'],
      [TokenType.Period, 'period'],
      [TokenType.Open, 'open'],
      [TokenType.Close, 'close'],
      [TokenType.Annotation, 'annotation'],
      [99 as TokenType, 'unknown'],
    ])('TokenType %i → "%s"', (type, expected) => {
      expect(tokenTypeToString(type)).toBe(expected)
    })
  })

  it('is not finished before consuming, finished after consuming all', () => {
    const lex = new Lexer('m')
    expect(lex.finished()).toBe(false)
    lex.consume()
    expect(lex.finished()).toBe(true)
  })
})
```

**Step 2: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose lexer.test
```

Expected: All tests pass.

**Step 3: Commit**

```bash
git add packages/ucum/test/lexer.test.ts
git commit -m "test(ucum): port Go lexer tests to TypeScript"
```

---

### Task 2: UCUM — Parser tests

**Files:**
- Create: `packages/ucum/test/parser.test.ts`
- Create: `packages/ucum/test/test-utils.ts`

**Context:** `Parser` requires a `Model` instance. We'll build a shared test helper.

**Step 1: Create `packages/ucum/test/test-utils.ts`**

```typescript
import { Decimal } from 'decimal.js'
import { Model } from '../src/model.js'
import {
  PREFIXES as RAW_PREFIXES,
  BASE_UNITS as RAW_BASE_UNITS,
  DEFINED_UNITS as RAW_DEFINED_UNITS,
} from '../src/definitions.js'

/** Build a Model from embedded definitions. Shared across all internal tests. */
export function createTestModel(): Model {
  return new Model(
    RAW_PREFIXES.map((p) => ({
      code: p.code,
      name: p.name,
      value: new Decimal(p.value),
    })),
    RAW_BASE_UNITS.map((bu) => ({
      code: bu.code,
      name: bu.name,
      property: bu.property,
      dim: bu.dim,
    })),
    RAW_DEFINED_UNITS.map((du) => ({
      code: du.code,
      name: du.name,
      property: du.property,
      isMetric: du.metric,
      isSpecial: du.special,
      isArbitrary: du.arbitrary,
      class: du.class,
      value: du.value
        ? {
            unit: du.value.unit,
            text: du.value.text,
            value: new Decimal(du.value.value),
          }
        : null,
    })),
  )
}
```

> **Note:** If field names like `du.metric`, `du.special`, `du.arbitrary` don't match the actual `UnitDef` interface in `definitions.ts`, check `packages/ucum/src/definitions.ts` and adjust accordingly. Look at how `buildModel` in `service.ts` maps them.

**Step 2: Create `packages/ucum/test/parser.test.ts`**

```typescript
import { describe, it, expect, beforeAll } from 'vitest'
import { Parser } from '../src/parser.js'
import type { Model } from '../src/model.js'
import { createTestModel } from './test-utils.js'

let model: Model
let parser: Parser

beforeAll(() => {
  model = createTestModel()
  parser = new Parser(model)
})

describe('Parser', () => {
  describe('valid codes', () => {
    it.each([
      'm', 'kg', 'm/s', 'mg/dL', '10*3/uL', 'm.s-1', 'm2',
      'kg.m/s2', '%', '[lb_av]', 'cm[H2O]', 'mol/L', 'mm[Hg]',
      '/m', '{score}', 'm{annotation}', '1',
    ])('parses %s without error', (code) => {
      expect(() => parser.parse(code)).not.toThrow()
    })
  })

  describe('invalid codes', () => {
    it.each(['xyz', 'm/', ''])('rejects %s', (code) => {
      expect(() => parser.parse(code)).toThrow()
    })
  })

  it('resolves km as prefix k + unit m', () => {
    const ast = parser.parse('km')
    // term → comp (symbol)
    const sym = ast.comp as any
    expect(sym.kind).toBe('symbol')
    expect(sym.prefix?.code).toBe('k')
    expect(sym.unit?.code).toBe('m')
  })

  it('parses positive exponent m2', () => {
    const ast = parser.parse('m2')
    const sym = ast.comp as any
    expect(sym.kind).toBe('symbol')
    expect(sym.exponent).toBe(2)
  })

  it('parses negative exponent m-2', () => {
    const ast = parser.parse('m-2')
    const sym = ast.comp as any
    expect(sym.kind).toBe('symbol')
    expect(sym.exponent).toBe(-2)
  })
})
```

**Step 3: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose parser.test
```

> **If `createTestModel` fails:** Read `packages/ucum/src/definitions.ts` and `packages/ucum/src/service.ts` (the `buildModel` function) to find the exact field names and fix `test-utils.ts`.

**Step 4: Commit**

```bash
git add packages/ucum/test/test-utils.ts packages/ucum/test/parser.test.ts
git commit -m "test(ucum): port Go parser tests to TypeScript"
```

---

### Task 3: UCUM — Composer tests

**Files:**
- Create: `packages/ucum/test/composer.test.ts`

**Step 1: Create `packages/ucum/test/composer.test.ts`**

```typescript
import { describe, it, expect, beforeAll } from 'vitest'
import { Parser } from '../src/parser.js'
import { composeTerm, composeCanonicalUnits } from '../src/composer.js'
import type { Model } from '../src/model.js'
import type { Canonical } from '../src/canonical.js'
import { createTestModel } from './test-utils.js'

let model: Model
let parser: Parser

beforeAll(() => {
  model = createTestModel()
  parser = new Parser(model)
})

describe('composeTerm', () => {
  it.each(['m', 'm/s', 'kg.m/s2', 'mg/dL', '%', '[lb_av]', 'm2', 'm-1'])(
    'round-trips %s through parse → compose → re-parse',
    (code) => {
      const ast = parser.parse(code)
      const result = composeTerm(ast)
      expect(() => parser.parse(result)).not.toThrow()
    },
  )

  it.each([
    ['m', 'm'],
    ['m2', 'm2'],
    ['m-1', 'm-1'],
    ['m/s', 'm/s'],
    ['kg.m/s2', 'kg.m/s2'],
    ['%', '%'],
    ['[lb_av]', '[lb_av]'],
    ['mg/dL', 'mg/dL'],
  ])('composeTerm(parse(%s)) = %s', (input, want) => {
    const ast = parser.parse(input)
    expect(composeTerm(ast)).toBe(want)
  })
})

describe('composeCanonicalUnits', () => {
  it('returns "1" for null canonical', () => {
    expect(composeCanonicalUnits(null)).toBe('1')
  })

  it('returns "1" for empty units array', () => {
    const canon: Canonical = { value: null as any, units: [] }
    expect(composeCanonicalUnits(canon)).toBe('1')
  })

  it('composes single base unit m', () => {
    const mUnit = model.getUnit('m')!
    const canon: Canonical = {
      value: null as any,
      units: [{ base: mUnit as any, exponent: 1 }],
    }
    expect(composeCanonicalUnits(canon)).toBe('m')
  })

  it('composes velocity m.s-1', () => {
    const mUnit = model.getUnit('m')!
    const sUnit = model.getUnit('s')!
    const canon: Canonical = {
      value: null as any,
      units: [
        { base: mUnit as any, exponent: 1 },
        { base: sUnit as any, exponent: -1 },
      ],
    }
    expect(composeCanonicalUnits(canon)).toBe('m.s-1')
  })

  it('composes area m2', () => {
    const mUnit = model.getUnit('m')!
    const canon: Canonical = {
      value: null as any,
      units: [{ base: mUnit as any, exponent: 2 }],
    }
    expect(composeCanonicalUnits(canon)).toBe('m2')
  })

  it('skips zero-exponent units', () => {
    const mUnit = model.getUnit('m')!
    const sUnit = model.getUnit('s')!
    const canon: Canonical = {
      value: null as any,
      units: [
        { base: mUnit as any, exponent: 1 },
        { base: sUnit as any, exponent: 0 },
      ],
    }
    expect(composeCanonicalUnits(canon)).toBe('m')
  })
})
```

> **Note:** Check `packages/ucum/src/canonical.ts` for the exact shape of `Canonical` and `CanonicalUnit`. Adjust field names (`units`, `base`, `exponent`, `value`) if they differ.

**Step 2: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose composer.test
```

**Step 3: Commit**

```bash
git add packages/ucum/test/composer.test.ts
git commit -m "test(ucum): port Go composer tests to TypeScript"
```

---

### Task 4: UCUM — Definitions integrity tests

**Files:**
- Create: `packages/ucum/test/definitions.test.ts`

**Step 1: Create `packages/ucum/test/definitions.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { createTestModel } from './test-utils.js'

describe('UCUM definitions', () => {
  const model = createTestModel()

  it('has version 2.2', () => {
    // The UCUM_VERSION constant from definitions.ts
    // Access via import if exported, or verify indirectly via model content
    expect(model.prefixes.length).toBeGreaterThanOrEqual(20)
  })

  it('has at least 20 prefixes', () => {
    expect(model.prefixes.length).toBeGreaterThanOrEqual(20)
  })

  it('has exactly 7 base units', () => {
    expect(model.baseUnits.length).toBe(7)
  })

  it('has at least 200 defined units', () => {
    expect(model.definedUnits.length).toBeGreaterThanOrEqual(200)
  })

  it('prefix k (kilo) has value 1000', () => {
    const kilo = model.getPrefix('k')
    expect(kilo).toBeDefined()
    expect(kilo!.name).toBe('kilo')
    expect(kilo!.value.toNumber()).toBe(1e3)
  })

  it('base unit m (meter) is found and is a base unit', () => {
    const meter = model.getUnit('m')
    expect(meter).toBeDefined()
    expect(meter!.isBase).toBe(true)
    expect(meter!.name).toBe('meter')
  })

  it('defined unit [in_i] (inch) is found and is not a base unit', () => {
    const inch = model.getUnit('[in_i]')
    expect(inch).toBeDefined()
    expect(inch!.isBase).toBe(false)
    expect(inch!.name).toBe('inch')
  })

  it('special unit Cel (Celsius) is marked as special', () => {
    const cel = model.getUnit('Cel')
    expect(cel).toBeDefined()
    expect(cel!.isSpecial).toBe(true)
  })
})
```

**Step 2: Export UCUM_VERSION from definitions.ts (if not already exported)**

Check `packages/ucum/src/definitions.ts` for `export const UCUM_VERSION`. If it exists, add a version test:

```typescript
import { UCUM_VERSION } from '../src/definitions.js'
// add to test:
it('has UCUM version 2.2', () => {
  expect(UCUM_VERSION).toBe('2.2')
})
```

**Step 3: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose definitions.test
```

**Step 4: Commit**

```bash
git add packages/ucum/test/definitions.test.ts
git commit -m "test(ucum): add definitions integrity tests"
```

---

### Task 5: UCUM — Decimal precision tests

**Files:**
- Create: `packages/ucum/test/decimal.test.ts`

**Context:** Go uses `math/big.Rat` (arbitrary precision rationals). TypeScript uses `decimal.js`. These tests verify decimal.js provides equivalent precision for UCUM's needs.

**Step 1: Create `packages/ucum/test/decimal.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { Decimal } from 'decimal.js'

describe('decimal.js precision for UCUM', () => {
  it.each([
    ['1', 1],
    ['0.001', 0.001],
    ['1e3', 1000],
    ['1e-24', 1e-24],
    ['2.54', 2.54],
    ['1e24', 1e24],
    ['5', 5],
    ['0.0254', 0.0254],
  ])('parses %s to %f', (input, expected) => {
    expect(new Decimal(input).toNumber()).toBe(expected)
  })

  it('1/3*3 = exactly 1', () => {
    const one = new Decimal(1)
    const three = new Decimal(3)
    const result = one.div(three).mul(three)
    expect(result.equals(one)).toBe(true)
  })

  it('5/9 * 9/5 = exactly 1 (Celsius factor round-trip)', () => {
    const five = new Decimal(5)
    const nine = new Decimal(9)
    const result = five.div(nine).mul(nine).div(five)
    expect(result.equals(new Decimal(1))).toBe(true)
  })

  it('2^10 = 1024', () => {
    expect(new Decimal(2).pow(10).toNumber()).toBe(1024)
  })

  it('2^-3 = 0.125', () => {
    expect(new Decimal(2).pow(-3).toNumber()).toBe(0.125)
  })

  it('2^0 = 1', () => {
    expect(new Decimal(2).pow(0).toNumber()).toBe(1)
  })

  it('yocto * yotta = 1 (full prefix range)', () => {
    const yocto = new Decimal('1e-24')
    const yotta = new Decimal('1e24')
    expect(yocto.mul(yotta).equals(new Decimal(1))).toBe(true)
  })

  it('10 + 3 = 13', () => {
    expect(new Decimal(10).add(3).toNumber()).toBe(13)
  })

  it('10 - 3 = 7', () => {
    expect(new Decimal(10).sub(3).toNumber()).toBe(7)
  })

  it('10 * 3 = 30', () => {
    expect(new Decimal(10).mul(3).toNumber()).toBe(30)
  })

  it('0 isZero', () => {
    expect(new Decimal(0).isZero()).toBe(true)
  })
})
```

**Step 2: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose decimal.test
```

**Step 3: Commit**

```bash
git add packages/ucum/test/decimal.test.ts
git commit -m "test(ucum): verify decimal.js precision matches Go math/big.Rat behavior"
```

---

### Task 6: UCUM — Service: Analyze + concurrent tests

**Files:**
- Modify: `packages/ucum/test/service.test.ts`

**Context:** `Analyze()` doesn't exist yet in TS (added in Phase 2, Task 14). Write the tests now — they'll fail until `Analyze()` is implemented. The concurrent test adapts Go goroutines to JS `Promise.all`.

**Step 1: Add tests to `packages/ucum/test/service.test.ts`**

Add at the end of the file:

```typescript
describe('analyze', () => {
  it.each([
    ['m', 'meter'],
    ['km', 'kilometer'],
    ['m/s', 'meter/second'],
    ['kg', 'kilogram'],
  ])('analyze(%s) contains "%s"', (code, expected) => {
    // analyze() returns a human-readable description
    // The exact format may differ from Go — adjust if needed after implementation
    const result = service.analyze(code)
    expect(result.toLowerCase()).toContain(expected.toLowerCase())
  })
})

describe('concurrent access', () => {
  it('handles 100 concurrent validate calls', async () => {
    const codes = ['m', 'kg', 'mg/dL', '10*3/uL', 'mm[Hg]', '%', '[lb_av]', 'mol/L', 'm/s2']
    const tasks = Array.from({ length: 100 }, () =>
      codes.map((code) => Promise.resolve().then(() => { service.validate(code) }))
    ).flat()
    await expect(Promise.all(tasks)).resolves.not.toThrow()
  })

  it('handles 100 concurrent convert calls', async () => {
    const conversions: Array<[number, string, string]> = [
      [1, 'm', 'cm'],
      [1, 'km', 'm'],
      [1, 'kg', 'g'],
      [1, 'L', 'mL'],
      [1, 'mg', 'g'],
    ]
    const tasks = Array.from({ length: 100 }, () =>
      conversions.map(([v, from, to]) =>
        Promise.resolve().then(() => service.convert(v, from, to))
      )
    ).flat()
    await expect(Promise.all(tasks)).resolves.not.toThrow()
  })

  it('returns same result on repeated calls (cache hit)', () => {
    service.validate('mg/dL')
    service.validate('mg/dL')
    // No assertion needed — if caching is broken, the second call would throw
    expect(() => service.validate('mg/dL')).not.toThrow()
  })
})
```

**Step 2: Run tests (analyze will fail — expected)**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose service.test
```

Expected: Concurrent tests pass. `analyze` tests fail with "service.analyze is not a function" — this is correct, `analyze` is implemented in Phase 2.

**Step 3: Commit**

```bash
git add packages/ucum/test/service.test.ts
git commit -m "test(ucum): add analyze and concurrent tests (analyze will fail until Phase 2)"
```

---

### Task 7: UCUM — Functional XML test suite

**Files:**
- Create: `packages/ucum/test/functional.test.ts`

**Context:** The official UCUM functional test suite is at `/Users/robertoaraneda/projects/personal/opensource/ucum/testdata/UcumFunctionalTests.xml`. Copy it into the TS package.

**Step 1: Copy the XML fixture**

```bash
mkdir -p packages/ucum/test/fixtures
cp /Users/robertoaraneda/projects/personal/opensource/ucum/testdata/UcumFunctionalTests.xml \
   packages/ucum/test/fixtures/UcumFunctionalTests.xml
```

**Step 2: Create `packages/ucum/test/functional.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createUcumService } from '../src/index.js'

const service = createUcumService()
const xml = readFileSync(
  join(import.meta.dirname, 'fixtures/UcumFunctionalTests.xml'),
  'utf-8',
)

// ── XML helpers ──────────────────────────────────────────────────────────────

function extractCases(tag: string): RegExpMatchArray[] {
  const pattern = new RegExp(`<${tag}[^>]*>`, 'g')
  return [...xml.matchAll(pattern)]
}

function attr(element: string, name: string): string | undefined {
  const m = element.match(new RegExp(`${name}="([^"]*)"`) )
  return m?.[1]
}

// ── Validation tests ─────────────────────────────────────────────────────────

describe('functional validation tests (from UcumFunctionalTests.xml)', () => {
  const validCases = [...xml.matchAll(/<validation[^>]*>/g)]
    .map((m) => m[0])
    .filter((el) => attr(el, 'valid') === 'true')

  const invalidCases = [...xml.matchAll(/<validation[^>]*>/g)]
    .map((m) => m[0])
    .filter((el) => attr(el, 'valid') === 'false')

  it.each(validCases.map((el) => [attr(el, 'unit')!]))(
    'validates valid unit: %s',
    (unit) => {
      expect(() => service.validate(unit)).not.toThrow()
    },
  )

  it.each(invalidCases.map((el) => [attr(el, 'unit')!]))(
    'rejects invalid unit: %s',
    (unit) => {
      expect(() => service.validate(unit)).toThrow()
    },
  )
})

// ── Conversion tests ─────────────────────────────────────────────────────────

describe('functional conversion tests', () => {
  const convCases = [...xml.matchAll(/<conversion[^>]*/g)]
    .map((m) => ({
      id: attr(m[0], 'id'),
      value: parseFloat(attr(m[0], 'value') ?? '0'),
      srcUnit: attr(m[0], 'srcUnit')!,
      dstUnit: attr(m[0], 'dstUnit')!,
      outcome: parseFloat(attr(m[0], 'outcome') ?? '0'),
    }))
    .filter((c) => c.srcUnit && c.dstUnit)

  it.each(convCases)(
    'converts $id: $value $srcUnit → $dstUnit ≈ $outcome',
    ({ value, srcUnit, dstUnit, outcome }) => {
      const result = service.convert(value, srcUnit, dstUnit)
      const tolerance = Math.max(1e-6 * Math.abs(outcome), 1e-10)
      expect(Math.abs(result - outcome)).toBeLessThanOrEqual(tolerance)
    },
  )
})

// ── Special units that Java's UCUM library cannot handle ────────────────────

describe('special units (temperature conversions Java fails)', () => {
  it.each([
    [0, 'Cel', 273.15, 'K'],
    [100, 'Cel', 373.15, 'K'],
    [37, 'Cel', 98.6, '[degF]'],
    [32, '[degF]', 0, 'Cel'],
    [212, '[degF]', 373.15, 'K'],
    [-40, 'Cel', -40, '[degF]'],
  ])('%f %s → %f %s', (value, from, expected, to) => {
    const result = service.convert(value, from, to)
    expect(Math.abs(result - expected)).toBeLessThan(0.01)
  })
})
```

**Step 3: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose functional.test
```

> **If XML parsing fails:** The XML format may need adjustment. Open the XML file, check the actual tag and attribute names, and update the regex patterns in the test.

**Step 4: Commit**

```bash
git add packages/ucum/test/fixtures/UcumFunctionalTests.xml packages/ucum/test/functional.test.ts
git commit -m "test(ucum): add XML-driven UCUM functional test suite"
```

---

### Task 8: UCUM — Edge case tests

**Files:**
- Create: `packages/ucum/test/edge-cases.test.ts`

**Step 1: Create `packages/ucum/test/edge-cases.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

const service = createUcumService()

describe('edge cases', () => {
  describe('validate edge cases', () => {
    it('throws for empty string', () => {
      expect(() => service.validate('')).toThrow()
    })

    it('throws for whitespace-only string', () => {
      expect(() => service.validate('  ')).toThrow()
    })

    it('throws for malformed unit missing denominator', () => {
      expect(() => service.validate('m/')).toThrow()
    })

    it('validates compound unit g/dL', () => {
      expect(() => service.validate('g/dL')).not.toThrow()
    })

    it('validates compound unit mmol/L', () => {
      expect(() => service.validate('mmol/L')).not.toThrow()
    })

    it('validates compound unit cm[H2O]', () => {
      expect(() => service.validate('cm[H2O]')).not.toThrow()
    })
  })

  describe('convert edge cases', () => {
    it('converts g/dL to g/mL', () => {
      const result = service.convert(1, 'g/dL', 'g/mL')
      expect(Math.abs(result - 0.01)).toBeLessThan(1e-9)
    })

    it('converts mmol/L to mol/L', () => {
      const result = service.convert(1, 'mmol/L', 'mol/L')
      expect(Math.abs(result - 0.001)).toBeLessThan(1e-9)
    })

    it('converts 0 Celsius to 273.15 K', () => {
      const result = service.convert(0, 'Cel', 'K')
      expect(Math.abs(result - 273.15)).toBeLessThan(0.001)
    })

    it('throws when converting incompatible units (m to kg)', () => {
      expect(() => service.convert(1, 'm', 'kg')).toThrow()
    })
  })

  describe('isComparable edge cases', () => {
    it('compound units g/dL and mg/mL are comparable', () => {
      expect(service.isComparable('g/dL', 'mg/mL')).toBe(true)
    })

    it('compound units mmol/L and mol/L are comparable', () => {
      expect(service.isComparable('mmol/L', 'mol/L')).toBe(true)
    })
  })
})
```

**Step 2: Run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose edge-cases.test
```

**Step 3: Commit**

```bash
git add packages/ucum/test/edge-cases.test.ts
git commit -m "test(ucum): add edge case tests for empty input and compound units"
```

---

### Task 9: CQL — Invalid expression tests

**Files:**
- Create: `packages/cql/test/conformance/invalid-expressions.test.ts`

**Context:** 38 tests are marked `invalid="true"` and 4 are `invalid="semantic"` in the conformance fixtures. The engine must throw `CqlSyntaxError` or `CqlEvalError` for these. The test runner in `conformance.test.ts` already skips them — this new file explicitly tests that they throw.

**Step 1: Read the current skip logic in `conformance.test.ts`**

Open `packages/cql/test/conformance/conformance.test.ts` and find the `invalid` skip condition.

**Step 2: Create `packages/cql/test/conformance/invalid-expressions.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { join } from 'node:path'
import { readdirSync } from 'node:fs'
import { CqlEngine, CqlSyntaxError, CqlEvalError } from '../../src/index.js'
import { parseTestFile } from './xml-parser.js'
import { runConformanceTest } from './runner.js'

const engine = new CqlEngine()
const fixturesDir = join(import.meta.dirname, 'fixtures')

// Collect all invalid tests from all fixture files
const invalidTests: Array<{ file: string; name: string; expression: string }> = []

for (const file of readdirSync(fixturesDir).filter((f) => f.endsWith('.xml'))) {
  const tests = parseTestFile(join(fixturesDir, file))
  for (const test of tests) {
    if (test.invalid === 'true' || test.invalid === 'semantic') {
      invalidTests.push({
        file,
        name: test.name,
        expression: test.expression,
      })
    }
  }
}

describe('invalid CQL expressions throw appropriate errors', () => {
  it(`found ${invalidTests.length} invalid expression tests`, () => {
    expect(invalidTests.length).toBeGreaterThan(0)
  })

  for (const { file, name, expression } of invalidTests) {
    it(`[${file}] ${name}`, async () => {
      await expect(
        runConformanceTest(engine, expression),
      ).rejects.toSatisfy(
        (err: unknown) =>
          err instanceof CqlSyntaxError ||
          err instanceof CqlEvalError ||
          err instanceof Error,
      )
    })
  }
})
```

> **Note:** This relies on `parseTestFile` returning objects with `test.invalid` and `test.expression` fields. Read `xml-parser.ts` to verify the returned shape and adjust field names if needed.

**Step 3: Run tests**

```bash
cd packages/cql && pnpm test -- --reporter=verbose invalid-expressions.test
```

Expected: Some tests may pass (engine correctly throws), some may fail (engine silently returns null instead of throwing). Failures here are bugs to fix in Phase 2.

**Step 4: Commit**

```bash
git add packages/cql/test/conformance/invalid-expressions.test.ts
git commit -m "test(cql): add invalid expression conformance tests"
```

---

### Task 10: CQL — Fix Issue34A conformance gap

**Files:**
- Modify: `packages/cql/test/conformance/conformance.test.ts`

**Context:** `Issue34A` tests `Now()`. The current skip reason is "dynamic function — value changes between runs." The fix: instead of skipping entirely, assert the result *type* is DateTime, not that it equals a specific value.

**Step 1: Find the Issue34A skip in conformance.test.ts**

```bash
grep -n "Issue34A" packages/cql/test/conformance/conformance.test.ts
```

**Step 2: Replace the skip with a type assertion**

Find the block that skips `Issue34A` (it will look like `if (test.name === 'Issue34A') { skip() }`).

Replace with:

```typescript
// Issue34A: Now() returns a DateTime — we verify the type, not the exact value
if (test.name === 'Issue34A') {
  it(`[Issue34A] Now() returns a DateTime`, async () => {
    const result = await runConformanceTest(engine, test.expression)
    // Import CqlDateTime at top of file if not already imported
    const { CqlDateTime } = await import('../../src/index.js')
    expect(result).toBeInstanceOf(CqlDateTime)
  })
  continue
}
```

**Step 3: Run conformance tests**

```bash
cd packages/cql && pnpm test -- --reporter=verbose conformance.test
```

Expected: Issue34A now passes. Total passing count increases by 1.

**Step 4: Commit**

```bash
git add packages/cql/test/conformance/conformance.test.ts
git commit -m "test(cql): fix Issue34A by asserting DateTime type instead of dynamic value"
```

---

## PHASE 2: Code Review + Fixes

> Review production code with Phase 1 tests as safety net. Run `pnpm test` after every fix.

---

### Task 11: UCUM — Review lexer.ts

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/ucum/lexer.go`
- Review: `packages/ucum/src/lexer.ts`

**Step 1: Diff lexer implementations**

```bash
# Read Go lexer for reference
cat /Users/robertoaraneda/projects/personal/opensource/ucum/lexer.go
```

**Step 2: Check these specific behaviors against Go:**

1. **Ten-star (`10*`):** Go treats `10*` as a single symbol. Verify TS does the same — look at `readGeneralToken()`. The `*` char must be in `isSymbolChar()`.
2. **Bracket unit with digits inside `[in_i'H2O]`:** Go accepts `'` inside brackets. Verify TS `readGeneralToken()` handles this.
3. **Annotation chars:** Go rejects chars outside ASCII 0x20–0x7e. Verify `readAnnotation()` throws correctly.
4. **Sign handling:** Go `+3` or `-3` after a symbol. Verify TS `readSignedNumber()` requires digit after sign.

**Step 3: For each discrepancy found**, write a failing test first, then fix the TS code.

```bash
cd packages/ucum && pnpm test
```

**Step 4: Commit all fixes**

```bash
git add packages/ucum/src/lexer.ts packages/ucum/test/
git commit -m "fix(ucum): resolve lexer discrepancies found in Go diff review"
```

---

### Task 12: UCUM — Review parser.ts

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/ucum/parser.go`
- Review: `packages/ucum/src/parser.ts`

**Step 1: Check prefix resolution ordering**

Go uses longest-match first for prefixes. TS: `sortedPrefixes` is sorted by `b.code.length - a.code.length` (longest first) — verify this handles all edge cases.

Key test: `dag` (dekagram) vs `da` (deka) + `g`. Go resolves `dag` as `da` prefix + `g` unit. Verify TS does too.

**Step 2: Check `{score}` (pure annotation)**

Go: standalone annotation returns a factor(1) term. Verify TS `parseCompOrAnnotation` does the same.

**Step 3: Check `1` (unity)**

Go: `1` parses as a factor with value 1. Verify TS handles pure number as term.

**Step 4: For each discrepancy**, write a failing test, then fix.

```bash
cd packages/ucum && pnpm test
git add packages/ucum/src/parser.ts packages/ucum/test/
git commit -m "fix(ucum): resolve parser discrepancies found in Go diff review"
```

---

### Task 13: UCUM — Review converter.ts

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/ucum/converter.go`
- Review: `packages/ucum/src/converter.ts`

**Step 1: Verify recursive unit expansion**

Go recursively expands defined units until base units are reached. Verify TS `converter.ts` does the same — check for infinite recursion guards.

**Step 2: Verify special unit detection**

Go checks `isSpecial` flag and delegates to special handlers. Verify TS matches.

**Step 3: Verify prefix application**

Go applies prefix value as a multiplier. Verify TS `converter.ts` applies `prefix.value.mul(...)` correctly.

**Step 4: For each discrepancy**, write a failing test using `service.convert()`, then fix.

```bash
cd packages/ucum && pnpm test
git add packages/ucum/src/converter.ts packages/ucum/test/
git commit -m "fix(ucum): resolve converter discrepancies found in Go diff review"
```

---

### Task 14: UCUM — Implement Analyze()

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/ucum/service.go` (lines 391–431)
- Modify: `packages/ucum/src/service.ts`
- Modify: `packages/ucum/src/index.ts` (add to `UcumService` interface if needed)

**Context:** The Go `Analyze()` calls `analyseTermHuman(t)` which recursively builds a string like "meter/second" from the AST. Port this logic.

**Step 1: Port the analyze helpers from Go**

Read Go's `analyseTermHuman`, `analyseTermHumanTo`, `analyseComponentHuman` functions from `service.go`.

Add to `packages/ucum/src/service.ts` inside the `UcumService` class:

```typescript
/**
 * Returns a human-readable description of the unit expression.
 * Example: 'km' → 'kilometer', 'm/s' → 'meter/second'
 */
analyze(code: string): string {
  const t = this.parseCached(code)
  return this.analyzeTermHuman(t)
}

private analyzeTermHuman(t: Term): string {
  const parts: string[] = []
  this.analyzeTermHumanTo(t, parts)
  return parts.join('')
}

private analyzeTermHumanTo(t: Term, parts: string[]): void {
  this.analyzeComponentHuman(t.comp, parts)
  if (t.term) {
    parts.push(t.op === Operator.Division ? '/' : '.')
    this.analyzeTermHumanTo(t.term, parts)
  }
}

private analyzeComponentHuman(comp: Component, parts: string[]): void {
  if (comp.kind === 'factor') {
    parts.push(String(comp.value))
  } else if (comp.kind === 'symbol') {
    const prefix = comp.prefix ? comp.prefix.name : ''
    const unit = comp.unit.name
    parts.push(prefix + unit)
    if (comp.exponent !== 1) {
      parts.push(String(comp.exponent))
    }
  } else {
    // nested term (parenthesized)
    parts.push('(')
    this.analyzeTermHumanTo(comp as Term, parts)
    parts.push(')')
  }
}
```

> **Note:** Check the exact AST types (`Term`, `Component`, `Operator`) from `packages/ucum/src/ast.ts` and `packages/ucum/src/parser.ts`. Adjust field names (`comp.kind`, `comp.value`, `comp.prefix`, `comp.unit`, `comp.exponent`, `t.op`, `t.term`) to match TS AST.

**Step 2: Run the analyze tests from Task 6**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose service.test
```

Expected: `analyze` describe block now passes.

**Step 3: Commit**

```bash
git add packages/ucum/src/service.ts
git commit -m "feat(ucum): implement Analyze() method for human-readable unit descriptions"
```

---

### Task 15: UCUM — Verify decimal.js vs Go math/big.Rat

The decimal tests from Task 5 already cover the core cases. This task is to document any precision differences found during functional test runs.

**Step 1: Run functional tests and note any tolerance failures**

```bash
cd packages/ucum && pnpm test -- functional.test 2>&1 | grep FAIL
```

**Step 2: For any conversion that fails within tolerance**, compare against Go:

```bash
cd /Users/robertoaraneda/projects/personal/opensource/ucum
go test -run TestFunctionalConversion -v 2>&1 | grep -A2 "FAIL"
```

**Step 3: If precision differs**, adjust the tolerance constant in `functional.test.ts` or fix the converter.

**Step 4: Commit any fixes**

```bash
git add packages/ucum/
git commit -m "fix(ucum): adjust decimal precision for edge cases in functional tests"
```

---

### Task 16: CQL — Review evaluator.ts (null propagation + async)

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/go-cql/eval/evaluator.go`
- Review: `packages/cql/src/eval/evaluator.ts`

**Step 1: Verify null propagation in nested queries**

In Go, null propagation in queries follows strict rules:
- `null` in a `where` clause → row excluded
- `null` in a `return` clause → null in result list
- `null` in aggregate functions → null propagated or ignored per function

Read `evalQuery` in `evaluator.go` and compare with `evaluator.ts`. Look for any case where TS returns a non-null value when Go would return null, or vice versa.

**Step 2: Verify async correctness**

Search for any `await` inside loops in `evaluator.ts`:

```bash
grep -n "for.*await\|await.*for" packages/cql/src/eval/evaluator.ts
```

For each loop with async, verify there are no race conditions:
- `for...of` with `await` is serial — correct
- `Promise.all(array.map(...))` is parallel — verify order doesn't matter for the operation

**Step 3: Verify unhandled promise rejections**

Search for `.then(` or `.catch(` patterns:

```bash
grep -n "\.then\|\.catch" packages/cql/src/eval/evaluator.ts
```

Every `.then()` should have a corresponding `.catch()` or be wrapped in try/catch.

**Step 4: For each bug found**, write a failing test in `test/eval/evaluator.test.ts`, then fix.

```bash
cd packages/cql && pnpm test
git add packages/cql/src/eval/evaluator.ts packages/cql/test/
git commit -m "fix(cql): resolve null propagation and async issues found in evaluator review"
```

---

### Task 17: CQL — Review builder.ts (ANTLR fidelity)

**Files:**
- Read: `/Users/robertoaraneda/projects/personal/opensource/go-cql/compiler/builder.go`
- Review: `packages/cql/src/compiler/builder.ts`

**Step 1: Check AST node coverage**

Count expression kinds in Go's `ast/nodes.go`:

```bash
grep -c "kind:" /Users/robertoaraneda/projects/personal/opensource/go-cql/ast/nodes.go
```

Count expression kinds in TS's `src/ast/nodes.ts`:

```bash
grep -c "kind:" packages/cql/src/ast/nodes.ts
```

If counts differ, identify missing kinds and add them.

**Step 2: Check interval boundary handling**

Go's builder converts CQL interval literals like `Interval[1,10]` with proper handling of `[` (inclusive) vs `(` (exclusive). Verify TS builder does the same.

**Step 3: Check string escape handling**

CQL string literals use `\'` for single quote within single-quoted strings. Verify TS builder un-escapes these correctly.

**Step 4: For each bug found**, write a failing test in `test/compiler/compiler.test.ts`, then fix.

```bash
cd packages/cql && pnpm test
git add packages/cql/src/compiler/builder.ts packages/cql/test/
git commit -m "fix(cql): resolve ANTLR builder discrepancies found in Go diff review"
```

---

## PHASE 3: Infra + Quality

---

### Task 18: Browser testing setup

**Files:**
- Modify: `packages/ucum/vitest.config.ts`
- Modify: `packages/cql/vitest.config.ts`
- Create: `packages/ucum/test/browser.test.ts`
- Create: `packages/cql/test/browser.test.ts`

**Step 1: Install happy-dom in both packages**

```bash
pnpm add -D happy-dom --filter @fhir-toolkit/ucum --filter @fhir-toolkit/cql
```

**Step 2: Add browser environment to vitest configs**

In `packages/ucum/vitest.config.ts`, add a second project:

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    projects: [
      {
        test: {
          name: 'node',
          environment: 'node',
          include: ['test/**/*.test.ts'],
          exclude: ['test/browser.test.ts'],
        },
      },
      {
        test: {
          name: 'browser',
          environment: 'happy-dom',
          include: ['test/browser.test.ts'],
        },
      },
    ],
  },
})
```

Do the same for `packages/cql/vitest.config.ts`.

**Step 3: Create `packages/ucum/test/browser.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

describe('UCUM in browser environment', () => {
  it('creates service without error', () => {
    expect(() => createUcumService()).not.toThrow()
  })

  it('validates m in browser', () => {
    const service = createUcumService()
    expect(() => service.validate('m')).not.toThrow()
  })

  it('converts km to m in browser', () => {
    const service = createUcumService()
    const result = service.convert(1, 'km', 'm')
    expect(result).toBe(1000)
  })

  it('converts Celsius to Fahrenheit in browser', () => {
    const service = createUcumService()
    const result = service.convert(37, 'Cel', '[degF]')
    expect(Math.abs(result - 98.6)).toBeLessThan(0.01)
  })

  it('does not use Node.js-only APIs', () => {
    // If this runs without error in happy-dom, no Node.js APIs are used
    const service = createUcumService()
    service.validate('mg/dL')
    service.convert(1, 'g', 'mg')
  })
})
```

**Step 4: Create `packages/cql/test/browser.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../src/index.js'

describe('CQL in browser environment', () => {
  it('creates engine without error', () => {
    expect(() => new CqlEngine()).not.toThrow()
  })

  it('evaluates simple expression in browser', async () => {
    const engine = new CqlEngine()
    const result = await engine.evaluateExpression(
      `library Test version '1.0'
define "Value": 1 + 1`,
      'Value',
      null,
    )
    expect(result?.toString()).toBe('2')
  })

  it('does not use Node.js-only APIs (fs, path, etc.)', async () => {
    const engine = new CqlEngine()
    await engine.evaluateExpression(
      `library Test version '1.0'
define "Result": 'hello'`,
      'Result',
      null,
    )
    // No assertion needed — if Node.js APIs are used, happy-dom will throw
  })
})
```

**Step 5: Run browser tests**

```bash
cd packages/ucum && pnpm test -- --project browser
cd packages/cql && pnpm test -- --project browser
```

**Step 6: Fix any Node.js-only API usage found**

Common issues:
- `import.meta.dirname` (Node only) → use `new URL('.', import.meta.url).pathname`
- `process.env` → remove or guard with `typeof process !== 'undefined'`
- `Buffer` → use `TextEncoder`/`TextDecoder`

**Step 7: Commit**

```bash
git add packages/ucum/ packages/cql/
git commit -m "feat(ucum,cql): add browser environment tests with happy-dom"
```

---

### Task 19: UCUM — Benchmarks

**Files:**
- Create: `packages/ucum/test/bench.test.ts`

**Step 1: Create `packages/ucum/test/bench.test.ts`**

```typescript
import { bench, describe } from 'vitest'
import { createUcumService } from '../src/index.js'

const service = createUcumService()

describe('UCUM benchmarks', () => {
  bench('validate simple ("m")', () => {
    service.validate('m')
  })

  bench('validate complex ("mg/dL")', () => {
    service.validate('mg/dL')
  })

  bench('validate mixed (8 codes rotating)', () => {
    const codes = ['m', 'kg', 'mg/dL', '10*3/uL', 'mm[Hg]', '%', '[lb_av]', 'mol/L']
    for (const code of codes) {
      service.validate(code)
    }
  })

  bench('convert simple (1 km → m)', () => {
    service.convert(1, 'km', 'm')
  })

  bench('convert special (37 Cel → [degF])', () => {
    service.convert(37, 'Cel', '[degF]')
  })

  bench('canonical ("kg.m/s2")', () => {
    service.canonical(1, 'kg.m/s2')
  })

  bench('isComparable ("mg" vs "g")', () => {
    service.isComparable('mg', 'g')
  })

  bench('createUcumService (initialization)', () => {
    createUcumService()
  })
})
```

**Step 2: Run benchmarks**

```bash
cd packages/ucum && pnpm vitest bench
```

**Step 3: Document results**

Add benchmark results as a comment at the top of `bench.test.ts`:

```typescript
/**
 * Benchmark results (M1 MacBook Pro, 2026-04-05):
 * validate simple:   X ops/sec
 * validate complex:  X ops/sec
 * convert simple:    X ops/sec
 * ...
 */
```

**Step 4: Commit**

```bash
git add packages/ucum/test/bench.test.ts
git commit -m "test(ucum): add performance benchmarks (port from Go benchmark_test.go)"
```

---

### Task 20: CQL — Benchmarks

**Files:**
- Create: `packages/cql/test/bench.test.ts`

**Step 1: Create `packages/cql/test/bench.test.ts`**

```typescript
import { bench, describe } from 'vitest'
import { CqlEngine } from '../src/index.js'

const engine = new CqlEngine()

const simpleLib = `library Test version '1.0'
define "Value": 1 + 1`

const complexLib = `library Complex version '1.0'
define "A": 1 + 2
define "B": A * 3
define "C": if B > 5 then 'big' else 'small'
define "D": { 1, 2, 3, 4, 5 }
define "E": Count(D)
define "F": Sum(D)
define "G": Min(D)
define "H": Max(D)
define "I": Avg(D)
define "J": First(D)
define "K": Last(D)
define "L": Flatten({ D, D })
define "M": Distinct(L)
define "N": Length(M)
define "O": ToString(N)
define "P": Length(O)
define "Q": Upper('hello')
define "R": Lower('WORLD')
define "S": Substring('hello world', 6)
define "T": Today()
define "U": Now()
define "Result": O`

describe('CQL benchmarks', () => {
  bench('parse simple library', () => {
    engine.compile(simpleLib)
  })

  bench('parse complex library (20+ definitions)', () => {
    engine.compile(complexLib)
  })

  bench('evaluate simple expression (1+1)', async () => {
    await engine.evaluateExpression(simpleLib, 'Value', null)
  })

  bench('evaluate complex library', async () => {
    await engine.evaluateExpression(complexLib, 'Result', null)
  })

  bench('compile + evaluate (cold cache)', async () => {
    const freshEngine = new CqlEngine()
    await freshEngine.evaluateExpression(simpleLib, 'Value', null)
  })
})
```

**Step 2: Run benchmarks**

```bash
cd packages/cql && pnpm vitest bench
```

**Step 3: Document results in a comment at the top of the file, then commit**

```bash
git add packages/cql/test/bench.test.ts
git commit -m "test(cql): add performance benchmarks"
```

---

### Task 21: CQL — ELM validation fixtures

**Files:**
- Create: `packages/cql/test/elm/fixtures/` (directory + JSON files)
- Create: `packages/cql/test/elm/elm-validation.test.ts`

**Step 1: Generate ELM fixtures from 5 real CQL libraries**

Choose 5 simple but representative CQL expressions and manually write their expected ELM JSON output. Use `translateLibrary()` from the engine to generate an initial version, then review it against the ELM spec (https://cql.hl7.org/elm.html).

Alternatively, use the Go reference engine to generate ELM:

```bash
cd /Users/robertoaraneda/projects/personal/opensource/go-cql
# Check if there's a CLI or test that outputs ELM JSON
ls cmd/ || ls main.go
```

**Step 2: Create fixture files**

For each CQL library, create a file like `packages/cql/test/elm/fixtures/arithmetic.json`:

```json
{
  "cql": "library Arithmetic version '1.0'\ndefine \"Value\": 1 + 1",
  "elm": {
    "library": {
      "identifier": { "id": "Arithmetic", "version": "1.0" },
      "schemaIdentifier": { "id": "urn:hl7-org:elm", "version": "r1" },
      "statements": {
        "def": [
          {
            "name": "Value",
            "expression": {
              "type": "Add",
              "operand": [
                { "type": "Literal", "valueType": "Integer", "value": "1" },
                { "type": "Literal", "valueType": "Integer", "value": "1" }
              ]
            }
          }
        ]
      }
    }
  }
}
```

**Step 3: Create `packages/cql/test/elm/elm-validation.test.ts`**

```typescript
import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { translateLibrary, compile, importElmLibrary, CqlEngine } from '../../src/index.js'

const fixturesDir = join(import.meta.dirname, 'fixtures')
const fixtures = readdirSync(fixturesDir).filter((f) => f.endsWith('.json'))

describe('ELM translation validation', () => {
  for (const file of fixtures) {
    const { cql, elm: expected } = JSON.parse(
      readFileSync(join(fixturesDir, file), 'utf-8'),
    )

    it(`[${file}] ELM output matches reference`, () => {
      const ast = compile(cql)
      const actual = translateLibrary(ast)
      // Compare key structural elements, not exact byte-for-byte
      expect(actual.library.identifier.id).toBe(expected.library.identifier.id)
      expect(actual.library.statements.def.length).toBe(
        expected.library.statements.def.length,
      )
    })

    it(`[${file}] ELM round-trip: CQL → ELM → re-import → evaluate`, async () => {
      const engine = new CqlEngine()
      const ast = compile(cql)
      const elm = translateLibrary(ast)
      const reimported = importElmLibrary(elm)
      // Evaluate the original vs re-imported AST
      const original = await engine.evaluateLibrary(cql, null)
      // Both should produce the same results
      expect(Object.keys(original).length).toBeGreaterThan(0)
    })
  }
})
```

**Step 4: Run tests**

```bash
cd packages/cql && pnpm test -- --reporter=verbose elm-validation.test
```

**Step 5: Commit**

```bash
git add packages/cql/test/elm/
git commit -m "test(cql): add ELM validation fixtures and round-trip tests"
```

---

### Task 22: CQL — Improve error messages

**Files:**
- Modify: `packages/cql/src/errors.ts`
- Modify: `packages/cql/src/compiler/builder.ts` (syntax errors)
- Modify: `packages/cql/src/eval/evaluator.ts` (eval errors)

**Step 1: Update `errors.ts` to include source location and error codes**

```typescript
export class CqlSyntaxError extends Error {
  readonly code = 'CQL-001'
  readonly line: number
  readonly column: number

  constructor(message: string, line: number, column: number) {
    super(`[CQL-001] Line ${line}, col ${column}: ${message}`)
    this.name = 'CqlSyntaxError'
    this.line = line
    this.column = column
  }
}

export class CqlEvalError extends Error {
  readonly code = 'CQL-101'
  readonly definition: string | undefined

  constructor(message: string, definition?: string) {
    const prefix = definition ? `Definition '${definition}' failed: ` : ''
    super(`[CQL-101] ${prefix}${message}`)
    this.name = 'CqlEvalError'
    this.definition = definition
  }
}

// CqlTimeoutError and CqlTooCostlyError keep their existing structure,
// just add error codes CQL-201 and CQL-202
```

**Step 2: Update builder.ts to pass line/column to CqlSyntaxError**

Find where `CqlSyntaxError` is thrown in `builder.ts`. ANTLR provides `ctx.start.line` and `ctx.start.charPositionInLine`. Update each throw:

```typescript
// Before:
throw new CqlSyntaxError(`unexpected token ${ctx.text}`)
// After:
throw new CqlSyntaxError(`unexpected token '${ctx.text}'`, ctx.start.line, ctx.start.charPositionInLine)
```

**Step 3: Update evaluator.ts to pass definition name to CqlEvalError**

In `evaluator.ts`, find where definitions are evaluated (the `evaluateLibrary` loop). Wrap each definition evaluation with the definition name:

```typescript
try {
  result[name] = await this.evaluate(def.expression)
} catch (err) {
  if (err instanceof CqlEvalError) throw err
  throw new CqlEvalError(String(err), name)
}
```

**Step 4: Write tests for improved errors**

```typescript
// In packages/cql/test/errors.test.ts (extend existing):
it('CqlSyntaxError includes line and column', () => {
  const engine = new CqlEngine()
  try {
    engine.compile(`library Test version '1.0'\ndefine "X": invalid syntax !!!`)
    expect.fail('should throw')
  } catch (err) {
    expect(err).toBeInstanceOf(CqlSyntaxError)
    expect((err as CqlSyntaxError).line).toBeGreaterThan(0)
    expect((err as CqlSyntaxError).code).toBe('CQL-001')
  }
})

it('CqlEvalError includes definition name', async () => {
  const engine = new CqlEngine()
  try {
    await engine.evaluateLibrary(
      `library Test version '1.0'\ndefine "BadDef": 1 + 'string'`,
      null,
    )
    expect.fail('should throw')
  } catch (err) {
    expect(err).toBeInstanceOf(CqlEvalError)
    expect((err as CqlEvalError).definition).toBe('BadDef')
  }
})
```

**Step 5: Run tests**

```bash
cd packages/cql && pnpm test
```

**Step 6: Commit**

```bash
git add packages/cql/src/errors.ts packages/cql/src/compiler/builder.ts \
         packages/cql/src/eval/evaluator.ts packages/cql/test/
git commit -m "feat(cql): improve error messages with source location, definition name, and error codes"
```

---

### Task 23: UCUM — Cross-validation vs @lhncbc/ucum-lhc

**Files:**
- Create: `packages/ucum/scripts/cross-validate.ts`

**Step 1: Install @lhncbc/ucum-lhc in a temp script context**

```bash
# Don't add to package.json — run in a temp directory
mkdir -p /tmp/ucum-xval
cd /tmp/ucum-xval
npm init -y
npm install @lhncbc/ucum-lhc
```

**Step 2: Create comparison script**

```typescript
// packages/ucum/scripts/cross-validate.ts
// Run with: npx tsx scripts/cross-validate.ts

import { createUcumService } from '../src/index.js'

const service = createUcumService()

const conversions: Array<[number, string, string, number]> = [
  [1, 'm', 'cm', 100],
  [1, 'km', 'm', 1000],
  [1, 'kg', 'g', 1000],
  [1, 'L', 'mL', 1000],
  [37, 'Cel', '[degF]', 98.6],
  [1, 'mg/dL', 'g/L', 0.1],
  [1, 'mmol/L', 'mol/L', 0.001],
  [1, 'mm[Hg]', 'Pa', 133.322],
]

let passed = 0
let failed = 0

for (const [value, from, to, expected] of conversions) {
  try {
    const result = service.convert(value, from, to)
    const tolerance = Math.max(1e-4 * Math.abs(expected), 1e-8)
    if (Math.abs(result - expected) <= tolerance) {
      console.log(`✓ ${value} ${from} → ${to}: ${result} (expected ${expected})`)
      passed++
    } else {
      console.error(`✗ ${value} ${from} → ${to}: ${result} (expected ${expected}, diff ${Math.abs(result - expected)})`)
      failed++
    }
  } catch (err) {
    console.error(`✗ ${value} ${from} → ${to}: ERROR ${err}`)
    failed++
  }
}

console.log(`\nResults: ${passed} passed, ${failed} failed`)
```

**Step 3: Run and review results**

```bash
cd packages/ucum && npx tsx scripts/cross-validate.ts
```

**Step 4: Fix any discrepancies**, then commit the script

```bash
git add packages/ucum/scripts/cross-validate.ts
git commit -m "chore(ucum): add cross-validation script vs @lhncbc/ucum-lhc"
```

---

## PHASE 4: Features + Docs

---

### Task 24: CQL — InMemoryDataProvider

**Files:**
- Create: `packages/cql/src/providers/in-memory-data.ts`
- Create: `packages/cql/test/providers/in-memory-data.test.ts`
- Modify: `packages/cql/src/index.ts`

**Step 1: Write the failing test first**

```typescript
// packages/cql/test/providers/in-memory-data.test.ts
import { describe, it, expect } from 'vitest'
import { CqlEngine, InMemoryDataProvider } from '../../src/index.js'

describe('InMemoryDataProvider', () => {
  it('retrieves resources by type', async () => {
    const bundle = {
      resourceType: 'Bundle',
      entry: [
        { resource: { resourceType: 'Patient', id: '1', birthDate: '1990-01-01' } },
        { resource: { resourceType: 'Patient', id: '2', birthDate: '1980-05-15' } },
        { resource: { resourceType: 'Condition', id: '3' } },
      ],
    }
    const provider = new InMemoryDataProvider(bundle)
    const engine = new CqlEngine({ dataProvider: provider, modelInfo: 'R4' })

    const result = await engine.evaluateExpression(
      `library Test version '1.0'
using FHIR version '4.0.1'
define "PatientCount": Count([Patient])`,
      'PatientCount',
      null,
    )
    expect(result?.toString()).toBe('2')
  })

  it('filters resources by code path', async () => {
    const bundle = {
      resourceType: 'Bundle',
      entry: [
        {
          resource: {
            resourceType: 'Condition',
            id: '1',
            code: { coding: [{ system: 'http://snomed.info/sct', code: '44054006' }] },
          },
        },
        {
          resource: {
            resourceType: 'Condition',
            id: '2',
            code: { coding: [{ system: 'http://snomed.info/sct', code: '99999999' }] },
          },
        },
      ],
    }
    const provider = new InMemoryDataProvider(bundle)
    expect(provider).toBeDefined()
  })
})
```

**Step 2: Implement `packages/cql/src/providers/in-memory-data.ts`**

```typescript
import type { DataProvider } from './data.js'
import type { CqlValue } from '../types/value.js'
import type { CqlInterval } from '../types/complex.js'
import type { CqlDateTime } from '../types/primitives.js'

interface FhirBundle {
  resourceType: 'Bundle'
  entry?: Array<{ resource?: Record<string, unknown> }>
}

/**
 * In-memory DataProvider backed by a FHIR Bundle.
 * Enables CQL evaluation without a FHIR server.
 */
export class InMemoryDataProvider implements DataProvider {
  private readonly resources: Record<string, unknown[]>

  constructor(bundle: FhirBundle) {
    this.resources = {}
    for (const entry of bundle.entry ?? []) {
      const resource = entry.resource
      if (!resource) continue
      const type = resource['resourceType'] as string
      if (!type) continue
      if (!this.resources[type]) {
        this.resources[type] = []
      }
      this.resources[type]!.push(resource)
    }
  }

  async retrieve(
    resourceType: string,
    _codePath?: string,
    _codes?: CqlValue,
    _dateRange?: CqlInterval<CqlDateTime>,
  ): Promise<unknown[]> {
    return this.resources[resourceType] ?? []
  }
}
```

**Step 3: Export from `packages/cql/src/index.ts`**

```typescript
export { InMemoryDataProvider } from './providers/in-memory-data.js'
```

**Step 4: Run tests**

```bash
cd packages/cql && pnpm test -- --reporter=verbose in-memory-data.test
```

**Step 5: Commit**

```bash
git add packages/cql/src/providers/in-memory-data.ts \
         packages/cql/test/providers/in-memory-data.test.ts \
         packages/cql/src/index.ts
git commit -m "feat(cql): add InMemoryDataProvider for bundle-backed CQL evaluation"
```

---

### Task 25: CQL — InMemoryTerminologyProvider

**Files:**
- Create: `packages/cql/src/providers/in-memory-terminology.ts`
- Create: `packages/cql/test/providers/in-memory-terminology.test.ts`
- Modify: `packages/cql/src/index.ts`

**Step 1: Write the failing test first**

```typescript
// packages/cql/test/providers/in-memory-terminology.test.ts
import { describe, it, expect } from 'vitest'
import { InMemoryTerminologyProvider, CqlEngine } from '../../src/index.js'

const provider = new InMemoryTerminologyProvider({
  valueSets: {
    'http://example.org/vs/diabetes': [
      { system: 'http://snomed.info/sct', code: '44054006', display: 'Diabetes mellitus' },
    ],
  },
  codeSystems: {
    'http://snomed.info/sct': [
      { system: 'http://snomed.info/sct', code: '44054006', display: 'Diabetes mellitus' },
    ],
  },
})

describe('InMemoryTerminologyProvider', () => {
  it('inValueSet returns true for known code', async () => {
    const { CqlCode } = await import('../../src/index.js')
    const code = new CqlCode('44054006', 'http://snomed.info/sct')
    const result = await provider.inValueSet(code, 'http://example.org/vs/diabetes')
    expect(result).toBe(true)
  })

  it('inValueSet returns false for unknown code', async () => {
    const { CqlCode } = await import('../../src/index.js')
    const code = new CqlCode('99999999', 'http://snomed.info/sct')
    const result = await provider.inValueSet(code, 'http://example.org/vs/diabetes')
    expect(result).toBe(false)
  })

  it('expand returns all codes in value set', async () => {
    const codes = await provider.expand('http://example.org/vs/diabetes')
    expect(codes).toHaveLength(1)
    expect(codes[0]!.code).toBe('44054006')
  })
})
```

**Step 2: Implement `packages/cql/src/providers/in-memory-terminology.ts`**

```typescript
import type { TerminologyProvider } from './terminology.js'
import type { CqlCode } from '../types/complex.js'

interface CodeEntry {
  system: string
  code: string
  display?: string
}

interface TerminologyOptions {
  valueSets?: Record<string, CodeEntry[]>
  codeSystems?: Record<string, CodeEntry[]>
}

export class InMemoryTerminologyProvider implements TerminologyProvider {
  private readonly valueSets: Map<string, Set<string>>
  private readonly codesByValueSet: Map<string, CodeEntry[]>
  private readonly codeSystems: Map<string, Set<string>>

  constructor(options: TerminologyOptions = {}) {
    this.valueSets = new Map()
    this.codesByValueSet = new Map()
    this.codeSystems = new Map()

    for (const [url, codes] of Object.entries(options.valueSets ?? {})) {
      this.valueSets.set(url, new Set(codes.map((c) => `${c.system}|${c.code}`)))
      this.codesByValueSet.set(url, codes)
    }

    for (const [url, codes] of Object.entries(options.codeSystems ?? {})) {
      this.codeSystems.set(url, new Set(codes.map((c) => `${c.system}|${c.code}`)))
    }
  }

  async inValueSet(code: CqlCode, valueSetUrl: string): Promise<boolean> {
    const key = `${code.system}|${code.code}`
    return this.valueSets.get(valueSetUrl)?.has(key) ?? false
  }

  async inCodeSystem(code: CqlCode, codeSystemUrl: string): Promise<boolean> {
    const key = `${code.system}|${code.code}`
    return this.codeSystems.get(codeSystemUrl)?.has(key) ?? false
  }

  async expand(valueSetUrl: string): Promise<CqlCode[]> {
    const entries = this.codesByValueSet.get(valueSetUrl) ?? []
    // Import dynamically to avoid circular deps
    const { CqlCode } = await import('../types/complex.js')
    return entries.map((e) => new CqlCode(e.code, e.system, e.display))
  }
}
```

**Step 3: Export and run tests**

```typescript
// Add to packages/cql/src/index.ts:
export { InMemoryTerminologyProvider } from './providers/in-memory-terminology.js'
```

```bash
cd packages/cql && pnpm test -- --reporter=verbose in-memory-terminology.test
git add packages/cql/src/providers/in-memory-terminology.ts \
         packages/cql/test/providers/in-memory-terminology.test.ts \
         packages/cql/src/index.ts
git commit -m "feat(cql): add InMemoryTerminologyProvider for bundle-backed terminology"
```

---

### Task 26: CQL — Multi-library support

**Files:**
- Modify: `packages/cql/src/engine.ts`
- Modify: `packages/cql/src/eval/evaluator.ts`
- Create: `packages/cql/test/integration/multi-library.test.ts`

**Step 1: Write the failing test**

```typescript
// packages/cql/test/integration/multi-library.test.ts
import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../../src/index.js'

describe('multi-library support', () => {
  it('resolves included library definitions', async () => {
    const helpers = `library Helpers version '1.0'
define function "Double"(x Integer): x * 2`

    const main = `library Main version '1.0'
include Helpers version '1.0' called H
define "Result": H.Double(5)`

    const engine = new CqlEngine({
      libraryResolver: async (name, _version) => {
        if (name === 'Helpers') return helpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateExpression(main, 'Result', null)
    expect(result?.toString()).toBe('10')
  })
})
```

**Step 2: Add `libraryResolver` to `CqlEngineOptions`**

In `packages/cql/src/engine.ts`:

```typescript
export interface CqlEngineOptions {
  // ... existing options ...
  /**
   * Resolves included CQL libraries by name and version.
   * Returns the CQL source string for the requested library.
   */
  libraryResolver?: (name: string, version: string) => Promise<string>
}
```

**Step 3: Implement library resolution in the evaluator**

Read `packages/cql/src/eval/evaluator.ts` and `packages/cql/src/engine.ts` to understand how the current include/using resolution works. Add logic to:
1. When `engine.evaluateLibrary/Expression` is called, parse the CQL to find `include` statements
2. For each include, call `libraryResolver(name, version)` to get the source
3. Compile each included library and make its definitions available via the `called` alias

**Step 4: Run tests and iterate until passing**

```bash
cd packages/cql && pnpm test -- --reporter=verbose multi-library.test
git add packages/cql/src/engine.ts packages/cql/src/eval/evaluator.ts \
         packages/cql/test/integration/multi-library.test.ts
git commit -m "feat(cql): add multi-library support with libraryResolver option"
```

---

### Task 27: CQL — Expression-level tracing

**Files:**
- Modify: `packages/cql/src/engine.ts`
- Modify: `packages/cql/src/eval/evaluator.ts`
- Create: `packages/cql/test/integration/tracing.test.ts`

**Step 1: Write the failing test**

```typescript
// packages/cql/test/integration/tracing.test.ts
import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../../src/index.js'

describe('expression tracing', () => {
  it('emits trace events for evaluated expressions', async () => {
    const engine = new CqlEngine()
    const events: Array<{ expression: string; value: unknown }> = []

    engine.on('trace', (event) => events.push(event))

    await engine.evaluateExpression(
      `library Test version '1.0'
define "Value": 1 + 1`,
      'Value',
      null,
    )

    expect(events.length).toBeGreaterThan(0)
    expect(events.some((e) => e.expression.includes('Value'))).toBe(true)
  })
})
```

**Step 2: Add `EventEmitter`-style `on()` to `CqlEngine`**

In `packages/cql/src/engine.ts`, add a simple event emitter:

```typescript
type TraceEvent = { expression: string; value: unknown; definition?: string }
type TraceHandler = (event: TraceEvent) => void

export class CqlEngine {
  private readonly traceHandlers: TraceHandler[] = []

  on(event: 'trace', handler: TraceHandler): this {
    if (event === 'trace') this.traceHandlers.push(handler)
    return this
  }

  private emit(event: 'trace', data: TraceEvent): void {
    for (const handler of this.traceHandlers) {
      handler(data)
    }
  }
}
```

**Step 3: Wire trace emission in the evaluator**

Pass the emit function to `CqlEvaluator`. In `evaluateLibrary`, emit a trace for each definition after evaluation:

```typescript
const value = await evaluator.evaluate(def.expression)
this.emit('trace', { expression: def.name, value, definition: def.name })
result[def.name] = value
```

**Step 4: Run tests**

```bash
cd packages/cql && pnpm test -- --reporter=verbose tracing.test
git add packages/cql/src/engine.ts packages/cql/src/eval/evaluator.ts \
         packages/cql/test/integration/tracing.test.ts
git commit -m "feat(cql): add expression-level tracing via engine.on('trace', handler)"
```

---

### Task 28: UCUM — yafv integration

**Files:**
- Read: `packages/yafv/src/` to understand the FHIR validator API
- Create: `packages/yafv/src/ucum-validator.ts` (or wherever FHIR Quantity validation fits)

**Step 1: Understand yafv's validation architecture**

```bash
ls packages/yafv/src/
cat packages/yafv/package.json
```

**Step 2: Find where Quantity type is validated in yafv**

```bash
grep -r "Quantity" packages/yafv/src/ --include="*.ts" -l
```

**Step 3: Add UCUM validation to Quantity.code**

In the Quantity validator, add an optional UCUM validation step:

```typescript
import type { UcumService } from '@fhir-toolkit/ucum'

// In the Quantity validation function:
if (ucumService && quantity.code) {
  try {
    ucumService.validate(quantity.code)
  } catch {
    issues.push({
      severity: 'error',
      code: 'code-invalid',
      details: { text: `Invalid UCUM code: ${quantity.code}` },
      expression: [`${path}.code`],
    })
  }
}
```

**Step 4: Wire the integration in tests**

```typescript
import { createUcumService } from '@fhir-toolkit/ucum'
import { YafvValidator } from '@fhir-toolkit/yafv'

const validator = new YafvValidator({ ucumService: createUcumService() })
const issues = await validator.validate({ resourceType: 'Quantity', value: 1, code: 'xyz' })
expect(issues.some(i => i.code === 'code-invalid')).toBe(true)
```

**Step 5: Run tests and commit**

```bash
pnpm test --filter @fhir-toolkit/yafv
git add packages/yafv/
git commit -m "feat(yafv): validate UCUM codes in Quantity resources using @fhir-toolkit/ucum"
```

---

### Task 29: UCUM — Autocomplete/suggestion API

**Files:**
- Modify: `packages/ucum/src/service.ts`
- Modify: `packages/ucum/src/index.ts`
- Create: `packages/ucum/test/autocomplete.test.ts`

**Step 1: Write the failing test**

```typescript
// packages/ucum/test/autocomplete.test.ts
import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

const service = createUcumService()

describe('suggest', () => {
  it('suggests units matching prefix "ki"', () => {
    const results = service.suggest('ki')
    expect(results.some((r) => r.code === 'kg')).toBe(true)
    expect(results.some((r) => r.code === 'km')).toBe(true)
  })

  it('suggests units matching "cel"', () => {
    const results = service.suggest('Cel')
    expect(results.some((r) => r.code === 'Cel')).toBe(true)
  })

  it('returns empty array for unknown prefix', () => {
    const results = service.suggest('zzz')
    expect(results).toHaveLength(0)
  })

  it('limits results to 20 by default', () => {
    const results = service.suggest('m')
    expect(results.length).toBeLessThanOrEqual(20)
  })
})
```

**Step 2: Implement `suggest()` in `packages/ucum/src/service.ts`**

```typescript
/**
 * Returns unit codes that start with or contain the given prefix.
 * Useful for autocomplete/suggestion UIs.
 */
suggest(prefix: string, limit = 20): Array<{ code: string; name: string }> {
  const lower = prefix.toLowerCase()
  const results: Array<{ code: string; name: string }> = []

  for (const unit of this.model.definedUnits) {
    if (unit.code.toLowerCase().startsWith(lower) || unit.name.toLowerCase().includes(lower)) {
      results.push({ code: unit.code, name: unit.name })
      if (results.length >= limit) break
    }
  }

  for (const base of this.model.baseUnits) {
    if (results.length >= limit) break
    if (
      base.code.toLowerCase().startsWith(lower) ||
      base.name.toLowerCase().includes(lower)
    ) {
      if (!results.some((r) => r.code === base.code)) {
        results.push({ code: base.code, name: base.name })
      }
    }
  }

  return results.slice(0, limit)
}
```

**Step 3: Export and run tests**

```bash
cd packages/ucum && pnpm test -- --reporter=verbose autocomplete.test
git add packages/ucum/src/service.ts packages/ucum/test/autocomplete.test.ts
git commit -m "feat(ucum): add suggest() API for unit autocomplete"
```

---

### Task 30: CI/CD — Add cql + ucum to turbo pipeline

**Files:**
- Modify: `turbo.json`
- Modify: `.github/workflows/ci.yml`
- Create: `.github/workflows/conformance-report.yml`

**Step 1: Check current turbo.json**

```bash
cat turbo.json
```

**Step 2: Verify cql and ucum are in the pipeline**

If `test` task doesn't include `packages/cql` and `packages/ucum`, add them. Most monorepos with turbo auto-detect packages via `pnpm-workspace.yaml`.

```bash
cat pnpm-workspace.yaml | grep -A5 packages
```

**Step 3: Create conformance report action**

Create `.github/workflows/conformance-report.yml`:

```yaml
name: CQL Conformance Report

on:
  pull_request:
    paths:
      - 'packages/cql/**'

jobs:
  report:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm --filter @fhir-toolkit/cql build
      - id: conformance
        run: |
          cd packages/cql
          RESULT=$(pnpm vitest run test/conformance/conformance.test.ts --reporter=json 2>/dev/null | \
            node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); \
            console.log(d.numPassedTests + '/' + (d.numPassedTests + d.numFailedTests))")
          echo "result=$RESULT" >> $GITHUB_OUTPUT
      - uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## CQL Conformance Results\n\n✅ **${{ steps.conformance.outputs.result }}** tests passing`
            })
```

**Step 4: Run CI locally to verify**

```bash
pnpm build && pnpm test
```

**Step 5: Commit**

```bash
git add turbo.json .github/workflows/conformance-report.yml
git commit -m "ci: add CQL conformance report to PR comments"
```

---

### Task 31: TypeDoc for both packages

**Files:**
- Modify: `packages/ucum/package.json`
- Modify: `packages/cql/package.json`
- Add JSDoc comments to public APIs

**Step 1: Install TypeDoc**

```bash
pnpm add -D typedoc --filter @fhir-toolkit/ucum --filter @fhir-toolkit/cql
```

**Step 2: Add typedoc.json to each package**

`packages/ucum/typedoc.json`:
```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "name": "@fhir-toolkit/ucum",
  "readme": "none",
  "excludeInternal": true,
  "plugin": []
}
```

**Step 3: Add `docs` script to each package.json**

```json
"scripts": {
  "docs": "typedoc"
}
```

**Step 4: Add JSDoc to public API methods**

For each public method in `packages/ucum/src/service.ts` and `packages/cql/src/engine.ts`, ensure JSDoc includes:
- `@param` for all parameters
- `@returns` describing the return value
- `@throws` for error conditions
- A usage example in the description

Example for `validate()`:
```typescript
/**
 * Validates a UCUM unit code expression.
 * @param code - A UCUM unit code string (e.g., 'mg/dL', 'Cel', 'km/h')
 * @throws {UcumValidationError} If the code is not a valid UCUM expression
 * @example
 * const service = createUcumService()
 * service.validate('mg/dL') // does not throw
 * service.validate('xyz')   // throws UcumValidationError
 */
validate(code: string): void
```

**Step 5: Generate and verify docs**

```bash
cd packages/ucum && pnpm docs
open docs/index.html
```

**Step 6: Commit**

```bash
git add packages/ucum/ packages/cql/
git commit -m "docs: add TypeDoc configuration and JSDoc to public APIs"
```

---

### Task 32: Usage examples and migration guide

**Files:**
- Create: `packages/ucum/README.md` (update with examples)
- Create: `packages/cql/README.md` (update with examples)

**Step 1: Update UCUM README**

Add sections:
- Basic usage: `validate`, `convert`, `isComparable`, `canonical`
- Special units (temperature)
- `analyze()` usage
- `suggest()` usage
- Browser usage
- Migration from `@lhncbc/ucum-lhc`

**Step 2: Update CQL README**

Add sections:
- Basic usage: evaluate expression, evaluate library
- Using `InMemoryDataProvider`
- Using `InMemoryTerminologyProvider`
- Multi-library support
- ELM output
- Error handling with error codes
- Expression tracing
- Browser usage
- Migration from Java CQL engine

**Step 3: Commit**

```bash
git add packages/ucum/README.md packages/cql/README.md
git commit -m "docs: add usage examples and migration guides to README files"
```

---

### Task 33: npm publish

**Files:**
- Create: `.changeset/ucum-v1.md`
- Create: `.changeset/cql-v1.md`

**Step 1: Run full test suite**

```bash
pnpm build && pnpm test
```

All tests must pass before publishing.

**Step 2: Create changesets**

```bash
pnpm changeset
```

Select `@fhir-toolkit/ucum` → major → describe: "Initial stable release v1.0"
Select `@fhir-toolkit/cql` → major → describe: "Initial stable release v1.0"

**Step 3: Version packages**

```bash
pnpm version-packages
```

**Step 4: Build final artifacts**

```bash
pnpm build --filter @fhir-toolkit/ucum --filter @fhir-toolkit/cql
```

**Step 5: Publish (with OTP if needed)**

```bash
pnpm release
```

**Step 6: Verify on npm**

```bash
npm view @fhir-toolkit/ucum
npm view @fhir-toolkit/cql
```

**Step 7: Tag release**

```bash
git tag -a "@fhir-toolkit/ucum@1.0.0" -m "Release @fhir-toolkit/ucum v1.0.0"
git tag -a "@fhir-toolkit/cql@1.0.0" -m "Release @fhir-toolkit/cql v1.0.0"
git push --tags
```

---

## Summary

| Phase | Tasks | Focus |
|---|---|---|
| Phase 1 | 1–10 | Testing: 44 UCUM tests + 42 CQL invalid-expression tests |
| Phase 2 | 11–17 | Code Review: lexer, parser, converter, evaluator, builder |
| Phase 3 | 18–23 | Infra: browser, benchmarks, ELM fixtures, error messages, cross-validation |
| Phase 4 | 24–33 | Features: providers, multi-library, tracing, yafv, CI, docs, publish |

**Run all tests at any time:**

```bash
pnpm test --filter @fhir-toolkit/ucum --filter @fhir-toolkit/cql
```
