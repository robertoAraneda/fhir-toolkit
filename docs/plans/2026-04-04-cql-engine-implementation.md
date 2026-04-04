# @fhir-toolkit/cql Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Port the Go CQL engine to TypeScript as `@fhir-toolkit/cql` — the first native CQL engine in JS/TS.

**Architecture:** Idiomatic TypeScript redesign with discriminated unions for AST, visitor pattern for evaluation, own type system with classes. Async evaluator for browser/Node compatibility. Self-contained with embedded FHIR R4/R4B/R5 model-info.

**Tech Stack:** antlr4ng (parser), decimal.js (precision math), tsup (build), vitest (test), pnpm + turbo (monorepo)

**Go Reference:** `/Users/robertoaraneda/projects/personal/opensource/go-cql/`
**Design Doc:** `docs/plans/2026-04-04-cql-engine-design.md`

---

## Task 1: Package Scaffold

**Files:**
- Create: `packages/cql/package.json`
- Create: `packages/cql/tsconfig.json`
- Create: `packages/cql/tsup.config.ts`
- Create: `packages/cql/vitest.config.ts`
- Create: `packages/cql/src/index.ts`

**Step 1: Create package.json**

```json
{
  "name": "@fhir-toolkit/cql",
  "version": "0.1.0",
  "description": "Native Clinical Quality Language (CQL) engine for TypeScript",
  "keywords": ["cql", "fhir", "hl7", "clinical-quality-language", "elm", "healthcare"],
  "author": "Roberto Araneda <robaraneda@gmail.com>",
  "license": "MIT",
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf dist",
    "generate:parser": "antlr4ng -Dlanguage=TypeScript -visitor -no-listener -o src/grammar/generated src/grammar/cql.g4 src/grammar/fhirpath.g4"
  },
  "dependencies": {
    "antlr4ng": "^3.0.4",
    "decimal.js": "^10.4.3"
  },
  "devDependencies": {
    "antlr4ng-cli": "^2.0.0",
    "tsup": "^8.0.2",
    "typescript": "^5.4.0",
    "vitest": "^1.4.0"
  },
  "engines": {
    "node": ">=18"
  },
  "sideEffects": false,
  "repository": {
    "type": "git",
    "url": "git+https://github.com/robertoAraneda/fhir-toolkit.git",
    "directory": "packages/cql"
  }
}
```

**Step 2: Create tsconfig.json**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "noUncheckedIndexedAccess": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

**Step 3: Create tsup.config.ts**

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: 'es2022',
});
```

**Step 4: Create vitest.config.ts**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.test.ts'],
    testTimeout: 30000,
  },
});
```

**Step 5: Create placeholder src/index.ts**

```ts
export const VERSION = '0.1.0';
```

**Step 6: Install dependencies and verify build**

Run: `cd packages/cql && pnpm install && pnpm build`
Expected: Build succeeds, dist/ created with index.js, index.cjs, index.d.ts

**Step 7: Commit**

```bash
git add packages/cql/
git commit -m "feat(cql): scaffold @fhir-toolkit/cql package"
```

---

## Task 2: Error Types

**Files:**
- Create: `packages/cql/src/errors.ts`
- Create: `packages/cql/test/errors.test.ts`

**Step 1: Write the failing test**

```ts
// test/errors.test.ts
import { describe, it, expect } from 'vitest';
import {
  CqlSyntaxError,
  CqlEvalError,
  CqlTimeoutError,
  CqlTooCostlyError,
} from '../src/errors.js';

describe('CqlSyntaxError', () => {
  it('has correct name and message', () => {
    const err = new CqlSyntaxError('unexpected token', 3, 10);
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlSyntaxError');
    expect(err.message).toBe('unexpected token');
    expect(err.line).toBe(3);
    expect(err.column).toBe(10);
  });
});

describe('CqlEvalError', () => {
  it('has correct name and message', () => {
    const err = new CqlEvalError('division by zero');
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('CqlEvalError');
  });
});

describe('CqlTimeoutError', () => {
  it('has correct name', () => {
    const err = new CqlTimeoutError(30000);
    expect(err.name).toBe('CqlTimeoutError');
    expect(err.timeoutMs).toBe(30000);
  });
});

describe('CqlTooCostlyError', () => {
  it('has correct name', () => {
    const err = new CqlTooCostlyError('expression too large');
    expect(err.name).toBe('CqlTooCostlyError');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `cd packages/cql && pnpm test`
Expected: FAIL — module not found

**Step 3: Implement errors.ts**

```ts
// src/errors.ts
export class CqlSyntaxError extends Error {
  readonly name = 'CqlSyntaxError' as const;
  constructor(
    message: string,
    readonly line?: number,
    readonly column?: number,
  ) {
    super(message);
  }
}

export class CqlEvalError extends Error {
  readonly name = 'CqlEvalError' as const;
  constructor(message: string) {
    super(message);
  }
}

export class CqlTimeoutError extends Error {
  readonly name = 'CqlTimeoutError' as const;
  constructor(readonly timeoutMs: number) {
    super(`evaluation exceeded timeout of ${timeoutMs}ms`);
  }
}

export class CqlTooCostlyError extends Error {
  readonly name = 'CqlTooCostlyError' as const;
  constructor(message: string) {
    super(message);
  }
}
```

**Step 4: Run test to verify it passes**

Run: `cd packages/cql && pnpm test`
Expected: PASS (4 tests)

**Step 5: Commit**

```bash
git add packages/cql/src/errors.ts packages/cql/test/errors.test.ts
git commit -m "feat(cql): add typed error classes"
```

---

## Task 3: CQL Type System — Value Interface & Primitives

**Files:**
- Create: `packages/cql/src/types/value.ts`
- Create: `packages/cql/src/types/primitives.ts`
- Create: `packages/cql/test/types/primitives.test.ts`

**Go reference:** `types/*.go` + `fhirpath/types` (Value, Comparable interfaces)

**Step 1: Write the failing test**

```ts
// test/types/primitives.test.ts
import { describe, it, expect } from 'vitest';
import {
  CqlInteger,
  CqlDecimal,
  CqlString,
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
  CqlLong,
} from '../../src/types/primitives.js';

describe('CqlInteger', () => {
  it('stores value and has correct type', () => {
    const v = new CqlInteger(42);
    expect(v.type).toBe('Integer');
    expect(v.value).toBe(42);
  });

  it('equals another integer with same value', () => {
    expect(new CqlInteger(5).equals(new CqlInteger(5))).toBe(true);
    expect(new CqlInteger(5).equals(new CqlInteger(6))).toBe(false);
  });

  it('compares correctly', () => {
    expect(new CqlInteger(3).compareTo(new CqlInteger(5))).toBeLessThan(0);
    expect(new CqlInteger(5).compareTo(new CqlInteger(5))).toBe(0);
    expect(new CqlInteger(7).compareTo(new CqlInteger(5))).toBeGreaterThan(0);
  });

  it('is equivalent to a decimal with same value', () => {
    expect(new CqlInteger(5).equivalent(new CqlDecimal('5.0'))).toBe(true);
  });

  it('toString returns string representation', () => {
    expect(new CqlInteger(42).toString()).toBe('42');
  });
});

describe('CqlDecimal', () => {
  it('stores value with precision', () => {
    const v = new CqlDecimal('3.14');
    expect(v.type).toBe('Decimal');
    expect(v.value.toNumber()).toBeCloseTo(3.14);
  });

  it('compares correctly', () => {
    expect(new CqlDecimal('1.5').compareTo(new CqlDecimal('2.5'))).toBeLessThan(0);
  });

  it('equals with exact precision', () => {
    expect(new CqlDecimal('1.0').equals(new CqlDecimal('1.0'))).toBe(true);
    expect(new CqlDecimal('1.0').equals(new CqlDecimal('1.00'))).toBe(true);
  });
});

describe('CqlString', () => {
  it('stores value and compares', () => {
    const v = new CqlString('hello');
    expect(v.type).toBe('String');
    expect(v.value).toBe('hello');
    expect(v.compareTo(new CqlString('world'))).toBeLessThan(0);
  });

  it('equals is case-sensitive', () => {
    expect(new CqlString('abc').equals(new CqlString('abc'))).toBe(true);
    expect(new CqlString('abc').equals(new CqlString('ABC'))).toBe(false);
  });
});

describe('CqlBoolean', () => {
  it('uses singletons', () => {
    expect(CqlBoolean.TRUE.value).toBe(true);
    expect(CqlBoolean.FALSE.value).toBe(false);
    expect(CqlBoolean.of(true)).toBe(CqlBoolean.TRUE);
  });

  it('equals correctly', () => {
    expect(CqlBoolean.TRUE.equals(CqlBoolean.TRUE)).toBe(true);
    expect(CqlBoolean.TRUE.equals(CqlBoolean.FALSE)).toBe(false);
  });
});

describe('CqlDate', () => {
  it('parses and compares dates', () => {
    const d1 = new CqlDate('2024-01-15');
    const d2 = new CqlDate('2024-06-20');
    expect(d1.type).toBe('Date');
    expect(d1.compareTo(d2)).toBeLessThan(0);
  });
});

describe('CqlDateTime', () => {
  it('parses and stores with precision', () => {
    const dt = new CqlDateTime('2024-01-15T10:30:00');
    expect(dt.type).toBe('DateTime');
  });
});

describe('CqlQuantity', () => {
  it('stores value and unit', () => {
    const q = new CqlQuantity('10.5', 'mg');
    expect(q.type).toBe('Quantity');
    expect(q.unit).toBe('mg');
  });

  it('compares quantities with same unit', () => {
    const q1 = new CqlQuantity('5', 'mg');
    const q2 = new CqlQuantity('10', 'mg');
    expect(q1.compareTo(q2)).toBeLessThan(0);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `cd packages/cql && pnpm test`
Expected: FAIL

**Step 3: Implement value.ts**

```ts
// src/types/value.ts
export type CqlType =
  | 'Boolean' | 'Integer' | 'Long' | 'Decimal' | 'String'
  | 'Date' | 'DateTime' | 'Time' | 'Quantity' | 'Ratio'
  | 'Code' | 'Concept' | 'Interval' | 'List' | 'Tuple';

export interface CqlValue {
  readonly type: CqlType;
  equals(other: CqlValue): boolean;
  equivalent(other: CqlValue): boolean;
  toString(): string;
}

export interface CqlComparable extends CqlValue {
  compareTo(other: CqlValue): number;
}
```

**Step 4: Implement primitives.ts**

Port from Go `types/*.go` and `fhirpath/types`. Use `decimal.js` for CqlDecimal.
Each class implements CqlComparable with proper null semantics.

Key patterns:
- `CqlBoolean` uses singletons (TRUE/FALSE) with `of(b: boolean)` factory
- `CqlDecimal` wraps `Decimal` from decimal.js
- `CqlDate` / `CqlDateTime` / `CqlTime` store raw string + parsed components for precision-aware comparison (matching Go's `fptypes.DateTime` behavior)
- `CqlQuantity` stores Decimal value + string unit
- `CqlLong` for 64-bit integers (uses BigInt)

Reference: Go `eval/evaluator.go:toDecimal()` for cross-type numeric comparison.

**Step 5: Run tests**

Run: `cd packages/cql && pnpm test`
Expected: ALL PASS

**Step 6: Commit**

```bash
git add packages/cql/src/types/ packages/cql/test/types/
git commit -m "feat(cql): add CqlValue interface and primitive types"
```

---

## Task 4: CQL Type System — Complex Types

**Files:**
- Create: `packages/cql/src/types/complex.ts`
- Create: `packages/cql/src/types/index.ts`
- Create: `packages/cql/test/types/complex.test.ts`

**Go reference:** `types/interval.go`, `types/list.go`, `types/tuple.go`, `types/clinical.go`, `types/ratio.go`

**Step 1: Write the failing test**

```ts
// test/types/complex.test.ts
import { describe, it, expect } from 'vitest';
import { CqlInterval, CqlList, CqlTuple, CqlCode, CqlConcept, CqlRatio } from '../../src/types/complex.js';
import { CqlInteger, CqlString, CqlDecimal } from '../../src/types/primitives.js';

describe('CqlInterval', () => {
  it('creates a closed interval', () => {
    const iv = new CqlInterval(new CqlInteger(1), new CqlInteger(10), true, true);
    expect(iv.type).toBe('Interval');
    expect(iv.lowClosed).toBe(true);
    expect(iv.highClosed).toBe(true);
  });

  it('contains a point inside', () => {
    const iv = new CqlInterval(new CqlInteger(1), new CqlInteger(10), true, true);
    expect(iv.contains(new CqlInteger(5))).toBe(true);
    expect(iv.contains(new CqlInteger(11))).toBe(false);
  });

  it('handles open boundaries', () => {
    const iv = new CqlInterval(new CqlInteger(1), new CqlInteger(10), false, false);
    expect(iv.contains(new CqlInteger(1))).toBe(false);
    expect(iv.contains(new CqlInteger(2))).toBe(true);
  });

  it('includes another interval', () => {
    const outer = new CqlInterval(new CqlInteger(1), new CqlInteger(10), true, true);
    const inner = new CqlInterval(new CqlInteger(3), new CqlInteger(7), true, true);
    expect(outer.includes(inner)).toBe(true);
  });

  it('equals another interval with same bounds', () => {
    const a = new CqlInterval(new CqlInteger(1), new CqlInteger(5), true, true);
    const b = new CqlInterval(new CqlInteger(1), new CqlInteger(5), true, true);
    expect(a.equals(b)).toBe(true);
  });
});

describe('CqlList', () => {
  it('stores values and reports count', () => {
    const list = new CqlList([new CqlInteger(1), new CqlInteger(2)]);
    expect(list.type).toBe('List');
    expect(list.count()).toBe(2);
  });

  it('distinct removes duplicates', () => {
    const list = new CqlList([new CqlInteger(1), new CqlInteger(1), new CqlInteger(2)]);
    expect(list.distinct().count()).toBe(2);
  });

  it('empty list', () => {
    const list = new CqlList([]);
    expect(list.isEmpty()).toBe(true);
  });
});

describe('CqlTuple', () => {
  it('stores and retrieves fields', () => {
    const tuple = new CqlTuple(new Map([
      ['name', new CqlString('Alice')],
      ['age', new CqlInteger(30)],
    ]));
    expect(tuple.type).toBe('Tuple');
    expect(tuple.get('name')).toEqual(new CqlString('Alice'));
    expect(tuple.get('missing')).toBeNull();
  });

  it('equals another tuple with same fields', () => {
    const a = new CqlTuple(new Map([['x', new CqlInteger(1)]]));
    const b = new CqlTuple(new Map([['x', new CqlInteger(1)]]));
    expect(a.equals(b)).toBe(true);
  });
});

describe('CqlCode', () => {
  it('stores system and code', () => {
    const code = new CqlCode('123', 'http://loinc.org', 'Test');
    expect(code.type).toBe('Code');
    expect(code.code).toBe('123');
    expect(code.system).toBe('http://loinc.org');
  });

  it('equals by system+code', () => {
    const a = new CqlCode('123', 'http://loinc.org');
    const b = new CqlCode('123', 'http://loinc.org');
    expect(a.equals(b)).toBe(true);
  });
});

describe('CqlConcept', () => {
  it('stores multiple codes', () => {
    const concept = new CqlConcept(
      [new CqlCode('123', 'http://loinc.org')],
      'My Concept',
    );
    expect(concept.type).toBe('Concept');
    expect(concept.codes).toHaveLength(1);
  });
});

describe('CqlRatio', () => {
  it('stores numerator and denominator', () => {
    const ratio = new CqlRatio(
      new CqlQuantity('5', 'mg'),
      new CqlQuantity('1', 'mL'),
    );
    expect(ratio.type).toBe('Ratio');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `cd packages/cql && pnpm test`

**Step 3: Implement complex.ts**

Port from Go `types/`:
- `CqlInterval<T extends CqlComparable>` — generic, with `contains()`, `includes()`, `overlaps()`, `isEmpty()`. Reference: `types/interval.go`
- `CqlList` — wraps `CqlValue[]`, with `distinct()`, `count()`, `isEmpty()`, `first()`, `last()`. Reference: `types/list.go`
- `CqlTuple` — wraps `Map<string, CqlValue | null>`, with `get()`, `keys()`. Reference: `types/tuple.go`
- `CqlCode` — code, system, display, version. Reference: `types/clinical.go`
- `CqlConcept` — codes[], display. Reference: `types/clinical.go`
- `CqlRatio` — numerator/denominator as CqlQuantity. Reference: `types/ratio.go`

**Step 4: Create types/index.ts barrel**

```ts
export * from './value.js';
export * from './primitives.js';
export * from './complex.js';
```

**Step 5: Run tests**

Expected: ALL PASS

**Step 6: Commit**

```bash
git add packages/cql/src/types/ packages/cql/test/types/
git commit -m "feat(cql): add complex types (Interval, List, Tuple, Code, Concept, Ratio)"
```

---

## Task 5: AST Nodes — Discriminated Unions

**Files:**
- Create: `packages/cql/src/ast/nodes.ts`
- Create: `packages/cql/src/ast/library.ts`
- Create: `packages/cql/src/ast/index.ts`
- Create: `packages/cql/test/ast/nodes.test.ts`

**Go reference:** `ast/nodes.go` (708 lines — ALL enums and structs)

**Step 1: Write the failing test**

```ts
// test/ast/nodes.test.ts
import { describe, it, expect } from 'vitest';
import type { Expression, LiteralExpr, BinaryExpr, QueryExpr } from '../../src/ast/nodes.js';
import { BinaryOp, LiteralType, UnaryOp, SortDirection } from '../../src/ast/nodes.js';

describe('AST Expression discriminated union', () => {
  it('LiteralExpr narrowing works', () => {
    const expr: Expression = {
      kind: 'Literal',
      valueType: LiteralType.Integer,
      value: '42',
    };
    if (expr.kind === 'Literal') {
      expect(expr.valueType).toBe(LiteralType.Integer);
      expect(expr.value).toBe('42');
    }
  });

  it('BinaryExpr narrowing works', () => {
    const expr: Expression = {
      kind: 'Binary',
      operator: BinaryOp.Add,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    };
    if (expr.kind === 'Binary') {
      expect(expr.operator).toBe(BinaryOp.Add);
    }
  });

  it('QueryExpr with sort clause', () => {
    const expr: QueryExpr = {
      kind: 'Query',
      sources: [{ source: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' }, alias: 'X' }],
      let: [],
      with: [],
      without: [],
      where: null,
      return: null,
      aggregate: null,
      sort: {
        byItems: [{ expression: { kind: 'IdentifierRef', library: null, name: 'X' }, direction: SortDirection.Asc }],
        direction: SortDirection.Asc,
      },
    };
    expect(expr.sort).not.toBeNull();
  });

  it('all BinaryOp values exist', () => {
    expect(BinaryOp.Add).toBeDefined();
    expect(BinaryOp.Subtract).toBeDefined();
    expect(BinaryOp.And).toBeDefined();
    expect(BinaryOp.Or).toBeDefined();
    expect(BinaryOp.Equal).toBeDefined();
    expect(BinaryOp.Union).toBeDefined();
    expect(BinaryOp.In).toBeDefined();
    expect(BinaryOp.Contains).toBeDefined();
  });

  it('all UnaryOp values exist', () => {
    expect(UnaryOp.Not).toBeDefined();
    expect(UnaryOp.Exists).toBeDefined();
    expect(UnaryOp.Flatten).toBeDefined();
    expect(UnaryOp.StartOf).toBeDefined();
    expect(UnaryOp.SuccessorOf).toBeDefined();
  });
});
```

**Step 2: Run test to verify it fails**

**Step 3: Implement ast/nodes.ts**

Port ALL types from `ast/nodes.go`. This file defines:

**Enums** (use const enum for zero runtime cost):
- `LiteralType` — Null, Boolean, String, Integer, Long, Decimal, Date, DateTime, Time, Quantity, Ratio
- `BinaryOp` — Add, Subtract, Multiply, Divide, Div, Mod, Power, Concatenate, Equal, NotEqual, Equivalent, NotEquivalent, Less, LessOrEqual, Greater, GreaterOrEqual, And, Or, Xor, Implies, Union, Intersect, Except, In, Contains
- `UnaryOp` — Not, Exists, Positive, Negate, Distinct, Flatten, SingletonFrom, PointFrom, StartOf, EndOf, WidthOf, SuccessorOf, PredecessorOf
- `SortDirection` — Asc, Desc
- `TimingKind` — SameAs, Includes, IncludedIn, During, BeforeOrAfter, Within, Meets, Overlaps, Starts, Ends
- `AccessLevel` — Public, Private

**Expression union** (35 kinds — each an interface with `kind` discriminant):
`Literal`, `IdentifierRef`, `Binary`, `Unary`, `IfThenElse`, `Case`, `Is`, `As`, `Cast`, `Convert`, `BooleanTest`, `FunctionCall`, `MemberAccess`, `IndexAccess`, `Retrieve`, `Query`, `Interval`, `Tuple`, `List`, `Instance`, `Code`, `Concept`, `ExternalConstant`, `This`, `IndexRef`, `Total`, `Membership`, `Between`, `DurationBetween`, `DifferenceBetween`, `DateTimeComponentFrom`, `DurationOf`, `DifferenceOf`, `TypeExtent`, `Timing`, `SetAggregate`

**Supporting types** (plain interfaces):
`AliasedSource`, `LetClause`, `WithClause`, `WithoutClause`, `ReturnClause`, `AggregateClause`, `SortClause`, `SortByItem`, `CaseItem`, `TimingOp`

**TypeSpecifier union** (5 kinds):
`NamedType`, `ListType`, `IntervalType`, `TupleType`, `ChoiceType`

**Step 4: Implement ast/library.ts**

```ts
// Library structure — top-level AST root
export interface Library {
  identifier: LibraryIdentifier | null;
  usings: UsingDef[];
  includes: IncludeDef[];
  codeSystems: CodeSystemDef[];
  valueSets: ValueSetDef[];
  codes: CodeDef[];
  concepts: ConceptDef[];
  parameters: ParameterDef[];
  contexts: ContextDef[];
  statements: ExpressionDef[];
  functions: FunctionDef[];
}
// ... plus all Def interfaces (port from Go ast/nodes.go lines 14-131)
```

**Step 5: Create ast/index.ts barrel**

**Step 6: Run tests, commit**

```bash
git commit -m "feat(cql): add AST nodes with discriminated unions"
```

---

## Task 6: Visitor Pattern Infrastructure

**Files:**
- Create: `packages/cql/src/eval/visitor.ts`
- Create: `packages/cql/test/eval/visitor.test.ts`

**Step 1: Write the failing test**

```ts
// test/eval/visitor.test.ts
import { describe, it, expect } from 'vitest';
import { visit } from '../../src/eval/visitor.js';
import type { ExpressionVisitor } from '../../src/eval/visitor.js';
import type { Expression } from '../../src/ast/nodes.js';
import { LiteralType, BinaryOp } from '../../src/ast/nodes.js';

// A simple visitor that counts expression nodes
class NodeCounter implements ExpressionVisitor<number> {
  visitLiteral(): number { return 1; }
  visitBinary(expr: BinaryExpr): number {
    return 1 + visit(expr.left, this) + visit(expr.right, this);
  }
  // ... all other visit methods return 1
}

describe('visit()', () => {
  it('dispatches Literal to visitLiteral', () => {
    const counter = new NodeCounter();
    const expr: Expression = { kind: 'Literal', valueType: LiteralType.Integer, value: '42' };
    expect(visit(expr, counter)).toBe(1);
  });

  it('dispatches Binary recursively', () => {
    const counter = new NodeCounter();
    const expr: Expression = {
      kind: 'Binary',
      operator: BinaryOp.Add,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    };
    expect(visit(expr, counter)).toBe(3);
  });
});
```

**Step 2: Run test to verify it fails**

**Step 3: Implement visitor.ts**

```ts
// src/eval/visitor.ts
import type { /* all expression interfaces */ } from '../ast/nodes.js';

export interface ExpressionVisitor<T> {
  visitLiteral(expr: LiteralExpr): T;
  visitIdentifierRef(expr: IdentifierRefExpr): T;
  visitBinary(expr: BinaryExpr): T;
  visitUnary(expr: UnaryExpr): T;
  visitIfThenElse(expr: IfThenElseExpr): T;
  visitCase(expr: CaseExpr): T;
  visitIs(expr: IsExpr): T;
  visitAs(expr: AsExpr): T;
  visitCast(expr: CastExpr): T;
  visitConvert(expr: ConvertExpr): T;
  visitBooleanTest(expr: BooleanTestExpr): T;
  visitFunctionCall(expr: FunctionCallExpr): T;
  visitMemberAccess(expr: MemberAccessExpr): T;
  visitIndexAccess(expr: IndexAccessExpr): T;
  visitRetrieve(expr: RetrieveExpr): T;
  visitQuery(expr: QueryExpr): T;
  visitInterval(expr: IntervalExpr): T;
  visitTuple(expr: TupleExpr): T;
  visitList(expr: ListExpr): T;
  visitInstance(expr: InstanceExpr): T;
  visitCode(expr: CodeExpr): T;
  visitConcept(expr: ConceptExpr): T;
  visitExternalConstant(expr: ExternalConstantExpr): T;
  visitThis(expr: ThisExpr): T;
  visitIndexRef(expr: IndexRefExpr): T;
  visitTotal(expr: TotalExpr): T;
  visitMembership(expr: MembershipExpr): T;
  visitBetween(expr: BetweenExpr): T;
  visitDurationBetween(expr: DurationBetweenExpr): T;
  visitDifferenceBetween(expr: DifferenceBetweenExpr): T;
  visitDateTimeComponentFrom(expr: DateTimeComponentFromExpr): T;
  visitDurationOf(expr: DurationOfExpr): T;
  visitDifferenceOf(expr: DifferenceOfExpr): T;
  visitTypeExtent(expr: TypeExtentExpr): T;
  visitTiming(expr: TimingExpr): T;
  visitSetAggregate(expr: SetAggregateExpr): T;
}

export function visit<T>(expr: Expression, visitor: ExpressionVisitor<T>): T {
  switch (expr.kind) {
    case 'Literal': return visitor.visitLiteral(expr);
    case 'IdentifierRef': return visitor.visitIdentifierRef(expr);
    case 'Binary': return visitor.visitBinary(expr);
    // ... exhaustive switch for all 35 kinds
    // TypeScript will error if a kind is missing
  }
}
```

**Step 4: Run tests, commit**

```bash
git commit -m "feat(cql): add ExpressionVisitor interface and visit() dispatcher"
```

---

## Task 7: Evaluation Context

**Files:**
- Create: `packages/cql/src/eval/context.ts`
- Create: `packages/cql/test/eval/context.test.ts`

**Go reference:** `eval/context.go` — Context struct, ChildScope(), ResolveIdentifier()

**Step 1: Write the failing test**

Test: context creation, child scoping, alias resolution chain (child -> parent), let binding resolution, definition resolution.

**Step 2: Implement context.ts**

```ts
export class EvalContext {
  readonly aliases = new Map<string, CqlValue | null>();
  readonly letBindings = new Map<string, CqlValue | null>();
  readonly definitions = new Map<string, CqlValue | null>();
  readonly parameters = new Map<string, CqlValue | null>();
  readonly codeSystems = new Map<string, CqlCode>();
  readonly valueSets = new Map<string, string>();
  thisValue: CqlValue | null = null;
  indexValue = 0;
  totalValue: CqlValue | null = null;

  constructor(
    readonly library: Library | null,
    readonly contextResource: unknown,
    readonly dataProvider: DataProvider | null,
    readonly terminologyProvider: TerminologyProvider | null,
    private parent: EvalContext | null = null,
  ) {}

  childScope(): EvalContext { /* inherits parent lookups */ }
  resolveIdentifier(name: string): CqlValue | null { /* alias -> let -> def -> param -> parent */ }
  resolveValueSetUrl(name: string): string | null { ... }
}
```

**Step 3: Run tests, commit**

```bash
git commit -m "feat(cql): add EvalContext with scope chaining"
```

---

## Task 8: Provider Interfaces

**Files:**
- Create: `packages/cql/src/providers/data.ts`
- Create: `packages/cql/src/providers/terminology.ts`
- Create: `packages/cql/src/providers/index.ts`

**Go reference:** `eval/context.go` — DataProvider, TerminologyProvider interfaces

**Step 1: Implement provider interfaces**

These are types-only files (interfaces), no test needed beyond typecheck.

```ts
// src/providers/data.ts
export interface DataProvider {
  retrieve(
    resourceType: string,
    codePath?: string,
    codeComparator?: string,
    codes?: CqlValue | null,
    dateRange?: CqlValue | null,
  ): Promise<unknown[]>;
}

// src/providers/terminology.ts
export interface TerminologyProvider {
  inValueSet(code: CqlCode, valueSetUrl: string): Promise<boolean>;
  inCodeSystem(code: CqlCode, codeSystemUrl: string): Promise<boolean>;
  expand(valueSetUrl: string): Promise<CqlCode[]>;
}
```

**Step 2: Verify typecheck**

Run: `cd packages/cql && pnpm typecheck`

**Step 3: Commit**

```bash
git commit -m "feat(cql): add DataProvider and TerminologyProvider interfaces"
```

---

## Task 9: Model Info

**Files:**
- Create: `packages/cql/src/model/model-info.ts`
- Create: `packages/cql/src/model/r4.ts`
- Create: `packages/cql/src/model/r4b.ts`
- Create: `packages/cql/src/model/r5.ts`
- Create: `packages/cql/src/model/index.ts`
- Create: `packages/cql/test/model/model-info.test.ts`

**Go reference:** `model/modelinfo.go` — ModelInfo interface, StaticModelInfo, DefaultR4ModelInfo()

**Step 1: Write failing test**

Test: R4 model info returns correct TypeInfo for Patient, Condition, Observation. Primary code paths resolve correctly. Context type mapping works.

**Step 2: Implement model-info.ts**

```ts
export interface ModelInfo {
  typeInfo(typeName: string): TypeInfo | null;
  elementType(path: string): string | null;
  isChoiceType(path: string): boolean;
  contextType(contextName: string): string;
  primaryCodePath(resourceType: string): string;
  version(): string;
}

export interface TypeInfo {
  name: string;
  namespace: string;
  baseName: string;
  elements: ElementInfo[];
  primaryKey: string;
}

export interface ElementInfo {
  name: string;
  type: string;
  isList: boolean;
  isChoice: boolean;
  choiceTypes: string[];
}
```

**Step 3: Implement r4.ts, r4b.ts, r5.ts**

Port `DefaultR4ModelInfo()` from Go. Each exports a `createModelInfo()` function.
R4B and R5 extend R4 with version-specific differences.

Resources to include (from Go): Patient, Condition, Procedure, Observation, Medication, DiagnosticReport, Encounter, AllergyIntolerance, Immunization, ServiceRequest.

**Step 4: Run tests, commit**

```bash
git commit -m "feat(cql): add ModelInfo with R4/R4B/R5 metadata"
```

---

## Task 10: ANTLR4 Grammar & Parser Generation

**Files:**
- Create: `packages/cql/src/grammar/cql.g4` (copy from go-cql)
- Create: `packages/cql/src/grammar/fhirpath.g4` (copy from go-cql)
- Generated: `packages/cql/src/grammar/generated/` (gitignored)

**Step 1: Copy grammar files**

```bash
cp /Users/robertoaraneda/projects/personal/opensource/go-cql/grammar/cql.g4 packages/cql/src/grammar/
cp /Users/robertoaraneda/projects/personal/opensource/go-cql/grammar/fhirpath.g4 packages/cql/src/grammar/
```

**Step 2: Install antlr4ng-cli globally or use npx**

Run: `cd packages/cql && npx antlr4ng -Dlanguage=TypeScript -visitor -no-listener -o src/grammar/generated src/grammar/cql.g4`

Note: If the grammar imports fhirpath.g4, both files need to be in the same directory. The ANTLR tool resolves imports from the grammar file's directory.

**Step 3: Verify generated files compile**

Run: `cd packages/cql && pnpm typecheck`

If the grammar needs adjustments for the TypeScript target (e.g., embedded actions that use Go syntax), remove or adapt them. The CQL grammar from go-cql should be action-free since Go uses a visitor pattern.

**Step 4: Add .gitignore for generated files** (optional — some projects commit generated parsers)

**Step 5: Commit**

```bash
git add packages/cql/src/grammar/
git commit -m "feat(cql): add CQL/FHIRPath ANTLR4 grammars and generate TypeScript parser"
```

---

## Task 11: Compiler (CQL text -> AST)

**Files:**
- Create: `packages/cql/src/compiler/compiler.ts`
- Create: `packages/cql/src/compiler/builder.ts`
- Create: `packages/cql/src/compiler/index.ts`
- Create: `packages/cql/test/compiler/compiler.test.ts`

**Go reference:** `compiler/compiler.go` (52 lines) + `compiler/builder.go` (1573 lines)

This is the **largest single task**. The builder visits every ANTLR parse tree node and constructs AST nodes.

**Step 1: Write the failing test**

```ts
// test/compiler/compiler.test.ts
import { describe, it, expect } from 'vitest';
import { compile } from '../../src/compiler/compiler.js';

describe('compile()', () => {
  it('parses a minimal library', () => {
    const lib = compile(`library Test version '1.0'`);
    expect(lib.identifier?.name).toBe('Test');
    expect(lib.identifier?.version).toBe('1.0');
  });

  it('parses using definition', () => {
    const lib = compile(`
      library Test version '1.0'
      using FHIR version '4.0.1'
    `);
    expect(lib.usings).toHaveLength(1);
    expect(lib.usings[0].name).toBe('FHIR');
    expect(lib.usings[0].version).toBe('4.0.1');
  });

  it('parses expression definition with literal', () => {
    const lib = compile(`
      library Test version '1.0'
      define X: 42
    `);
    expect(lib.statements).toHaveLength(1);
    expect(lib.statements[0].name).toBe('X');
    expect(lib.statements[0].expression.kind).toBe('Literal');
  });

  it('parses binary expression', () => {
    const lib = compile(`
      library Test version '1.0'
      define Sum: 1 + 2
    `);
    const expr = lib.statements[0].expression;
    expect(expr.kind).toBe('Binary');
  });

  it('parses query with where and sort', () => {
    const lib = compile(`
      library Test version '1.0'
      define Adults:
        from { 1, 2, 3 } X
        where X > 1
        sort asc
    `);
    const expr = lib.statements[0].expression;
    expect(expr.kind).toBe('Query');
  });

  it('throws CqlSyntaxError on invalid input', () => {
    expect(() => compile('define :')).toThrow();
  });
});
```

**Step 2: Run test to verify it fails**

**Step 3: Implement compiler.ts**

```ts
// src/compiler/compiler.ts
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { cqlLexer } from '../grammar/generated/cqlLexer.js';
import { cqlParser } from '../grammar/generated/cqlParser.js';
import { CqlBuilder } from './builder.js';
import { CqlSyntaxError } from '../errors.js';
import type { Library } from '../ast/library.js';

export function compile(source: string): Library {
  const input = CharStream.fromString(source);
  const lexer = new cqlLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new cqlParser(tokens);

  // Custom error listener that throws CqlSyntaxError
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());

  const tree = parser.library();
  const builder = new CqlBuilder();
  return builder.visitLibrary(tree);
}
```

**Step 4: Implement builder.ts**

This is a direct port of `compiler/builder.go` (1573 lines). The builder extends the generated ANTLR visitor.

Key methods to port (in order of dependency):
1. `visitLibrary` — root
2. `visitUsingDefinition`, `visitIncludeDefinition`, `visitCodesystemDefinition`, `visitValuesetDefinition`, `visitCodeDefinition`, `visitConceptDefinition`, `visitParameterDefinition`
3. `visitContextDefinition`, `visitExpressionDefinition`, `visitFunctionDefinition`
4. `visitExpression` — dispatches to term types
5. `visitExpressionTerm` — the big one, handles all operator precedence
6. `visitQuery`, `visitRetrieve` — complex data access
7. `visitTypeSpecifier` — Named, List, Interval, Tuple, Choice

Port method by method from Go, matching the ANTLR visitor interface generated by antlr4ng. Test incrementally — add tests as each group of visitor methods is implemented.

**Step 5: Run tests, commit**

```bash
git commit -m "feat(cql): add CQL compiler (CQL text -> AST)"
```

---

## Task 12: Function Registry & Built-in Functions

**Files:**
- Create: `packages/cql/src/funcs/registry.ts`
- Create: `packages/cql/src/funcs/builtins.ts`
- Create: `packages/cql/src/funcs/string.ts`
- Create: `packages/cql/src/funcs/aggregate.ts`
- Create: `packages/cql/src/funcs/clinical.ts`
- Create: `packages/cql/src/funcs/datetime.ts`
- Create: `packages/cql/src/funcs/interval.ts`
- Create: `packages/cql/src/funcs/list.ts`
- Create: `packages/cql/src/funcs/type.ts`
- Create: `packages/cql/src/funcs/index.ts`
- Create: `packages/cql/test/funcs/string.test.ts`
- Create: `packages/cql/test/funcs/aggregate.test.ts`
- Create: `packages/cql/test/funcs/clinical.test.ts`
- Create: `packages/cql/test/funcs/datetime.test.ts`
- Create: `packages/cql/test/funcs/interval.test.ts`
- Create: `packages/cql/test/funcs/list.test.ts`

**Go reference:** `funcs/*.go` (~1400 lines total)

Split this into sub-steps per function group. Each group: write test -> implement -> verify.

**Step 1: Implement registry.ts**

```ts
export type CqlFunction = (
  args: (CqlValue | null)[],
  ctx: EvalContext,
) => Promise<CqlValue | null> | CqlValue | null;

export class FunctionRegistry {
  private readonly fns = new Map<string, CqlFunction>();

  register(name: string, fn: CqlFunction): void {
    this.fns.set(name.toLowerCase(), fn);
  }

  resolve(name: string): CqlFunction | undefined {
    return this.fns.get(name.toLowerCase());
  }

  has(name: string): boolean {
    return this.fns.has(name.toLowerCase());
  }
}
```

**Step 2: Implement string functions**

Port from `funcs/string_ops.go`: Upper, Lower, Length, StartsWith, EndsWith, Substring, IndexOf, PositionOf, LastPositionOf, Matches, ReplaceMatches, Combine, Split.

Test each function with: normal case, null input, empty string, edge cases.

**Step 3: Implement aggregate functions**

Port from `funcs/aggregate.go`: Count, Sum, Avg, Min, Max, AllTrue, AnyTrue, PopulationVariance, PopulationStdDev, Variance, StdDev.

Use decimal.js for Sum/Avg/Variance/StdDev.

**Step 4: Implement clinical functions**

Port from `funcs/clinical.go`: AgeInYears, AgeInMonths, AgeInWeeks, AgeInDays, AgeInYearsAt, AgeInMonthsAt, CalculateAgeIn*.

**Step 5: Implement datetime functions**

Port from `funcs/temporal.go` + `funcs/datetime_advanced.go`: DurationBetween, DifferenceBetween, DateTimeComponentFrom, DateConstructor, DateTimeConstructor, TimeConstructor, Now, Today, TimeOfDay.

**Step 6: Implement interval functions**

Port from `funcs/interval.go` + `funcs/interval_set.go` + `funcs/timing_advanced.go`: Contains, Includes, IncludedIn, Overlaps, Before, After, Meets, Width, Size, expand, collapse.

**Step 7: Implement list functions**

Port from `funcs/list_advanced.go`: Flatten, Distinct, Mode, Median, GeometricMean, First, Last, SingletonFrom, Exists, Take, Skip, Tail.

**Step 8: Implement type conversion functions**

Port from `funcs/type_ops.go`: toString, toInteger, toDecimal, toBoolean, toDate, toDateTime.

**Step 9: Create builtins.ts that wires all registrations**

**Step 10: Run all function tests, commit**

```bash
git commit -m "feat(cql): add function registry with all built-in functions"
```

---

## Task 13: CQL Evaluator

**Files:**
- Create: `packages/cql/src/eval/evaluator.ts`
- Create: `packages/cql/src/eval/index.ts`
- Create: `packages/cql/test/eval/evaluator.test.ts`

**Go reference:** `eval/evaluator.go` (2096 lines — the core)

The evaluator implements `ExpressionVisitor<Promise<CqlValue | null>>`.

**Step 1: Write the failing test**

```ts
// test/eval/evaluator.test.ts — start with literals and basic operators
describe('CqlEvaluator', () => {
  it('evaluates integer literal', async () => {
    const result = await evalExpr({ kind: 'Literal', valueType: LiteralType.Integer, value: '42' });
    expect(result).toEqual(new CqlInteger(42));
  });

  it('evaluates addition', async () => {
    const result = await evalExpr({
      kind: 'Binary',
      operator: BinaryOp.Add,
      left: { kind: 'Literal', valueType: LiteralType.Integer, value: '1' },
      right: { kind: 'Literal', valueType: LiteralType.Integer, value: '2' },
    });
    expect(result).toEqual(new CqlInteger(3));
  });

  // ... more tests per visitor method
});
```

**Step 2: Implement evaluator incrementally**

Port from `eval/evaluator.go` in this order (each group = a commit):

1. **Literals** — visitLiteral: Null, Boolean, String, Integer, Long, Decimal, Date, DateTime, Time, Quantity, Ratio
2. **Binary operators** — visitBinary: arithmetic (Add/Sub/Mul/Div/Div/Mod/Power), comparison (Eq/NotEq/Lt/Gt/etc), logical (And/Or/Xor/Implies with short-circuit), set ops (Union/Intersect/Except), membership (In/Contains), concatenation
3. **Unary operators** — visitUnary: Not, Exists, Negate, Positive, Distinct, Flatten, SingletonFrom, PointFrom, StartOf, EndOf, WidthOf, SuccessorOf, PredecessorOf
4. **Control flow** — visitIfThenElse, visitCase
5. **Type operations** — visitIs, visitAs, visitCast, visitConvert, visitBooleanTest
6. **Identifiers & access** — visitIdentifierRef (lazy eval), visitMemberAccess, visitIndexAccess, visitExternalConstant
7. **Constructors** — visitInterval, visitTuple, visitList, visitInstance, visitCode, visitConcept
8. **Special tokens** — visitThis, visitIndexRef, visitTotal
9. **Query** — visitQuery (sources, let, with, without, where, return, distinct, sort, aggregate)
10. **Retrieve** — visitRetrieve (data provider integration)
11. **Built-in functions** — visitFunctionCall (dispatch to registry + user-defined functions)
12. **DateTime ops** — visitDurationBetween, visitDifferenceBetween, visitDateTimeComponentFrom, visitDurationOf, visitDifferenceOf
13. **Timing** — visitTiming (SameAs, Includes, IncludedIn, During, BeforeOrAfter, Within, Meets, Overlaps, Starts, Ends)
14. **Membership** — visitMembership (In/Contains with optional precision)
15. **Between** — visitBetween
16. **TypeExtent** — visitTypeExtent (minimum/maximum of type)
17. **SetAggregate** — visitSetAggregate (expand/collapse)

**Null propagation rule** (from Go): most operators return null if any operand is null, EXCEPT: Equivalent/NotEquivalent, Union, Concatenate, And (false AND null = false), Or (true OR null = true), Implies.

**Step 3: Run full evaluator tests after each group, commit per group**

```bash
git commit -m "feat(cql): add evaluator — literals and binary operators"
git commit -m "feat(cql): add evaluator — unary, control flow, type ops"
git commit -m "feat(cql): add evaluator — queries, retrieve, functions"
git commit -m "feat(cql): add evaluator — datetime, timing, membership"
```

---

## Task 14: ELM Import & Export

**Files:**
- Create: `packages/cql/src/elm/types.ts`
- Create: `packages/cql/src/elm/importer.ts`
- Create: `packages/cql/src/elm/translator.ts`
- Create: `packages/cql/src/elm/index.ts`
- Create: `packages/cql/test/elm/importer.test.ts`
- Create: `packages/cql/test/elm/translator.test.ts`

**Go reference:** `elm/types.go` (376 lines), `elm/importer.go` (844 lines), `elm/translator.go` (861 lines)

**Step 1: Implement elm/types.ts**

Port ELM JSON type definitions from `elm/types.go`. These are interfaces matching the ELM JSON schema:
- `ElmLibrary`, `ElmIdentifier`, `ElmUsingDef`, `ElmIncludeDef`, etc.
- `ElmExpression` — polymorphic via `type` field (maps to CQL AST `kind`)

**Step 2: Write failing importer test**

```ts
// test/elm/importer.test.ts
describe('importElmLibrary', () => {
  it('imports a simple ELM library', () => {
    const elm: ElmLibrary = {
      identifier: { id: 'Test', version: '1.0' },
      usings: { def: [{ localIdentifier: 'FHIR', uri: '...', version: '4.0.1' }] },
      statements: { def: [{ name: 'X', expression: { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '42' } }] },
    };
    const lib = importElmLibrary(elm);
    expect(lib.identifier?.name).toBe('Test');
    expect(lib.statements[0].expression.kind).toBe('Literal');
  });
});
```

**Step 3: Implement importer.ts** — ELM JSON -> AST. Port from `elm/importer.go`.

**Step 4: Write failing translator test**

```ts
// test/elm/translator.test.ts
describe('translateLibrary', () => {
  it('round-trips CQL -> AST -> ELM -> AST', () => {
    const lib = compile(`library Test version '1.0'\ndefine X: 42`);
    const elm = translateLibrary(lib);
    const lib2 = importElmLibrary(elm);
    expect(lib2.statements[0].name).toBe('X');
  });
});
```

**Step 5: Implement translator.ts** — AST -> ELM. Uses `ExpressionVisitor<ElmExpression>`.

**Step 6: Run tests, commit**

```bash
git commit -m "feat(cql): add ELM import/export with round-trip support"
```

---

## Task 15: CqlEngine — Public API

**Files:**
- Create: `packages/cql/src/engine.ts`
- Modify: `packages/cql/src/index.ts`
- Create: `packages/cql/test/engine.test.ts`

**Go reference:** `engine.go` — Engine struct, NewEngine(), EvaluateLibrary(), EvaluateExpression(), Compile()

**Step 1: Write the failing test**

```ts
// test/engine.test.ts
import { describe, it, expect } from 'vitest';
import { CqlEngine } from '../src/index.js';

describe('CqlEngine', () => {
  it('evaluates a simple expression', async () => {
    const engine = new CqlEngine();
    const results = await engine.evaluateLibrary(
      `library Test version '1.0'\ndefine X: 1 + 2`,
      null,
    );
    expect(results['X']?.toString()).toBe('3');
  });

  it('evaluates a single named expression', async () => {
    const engine = new CqlEngine();
    const result = await engine.evaluateExpression(
      `library Test version '1.0'\ndefine X: 42`,
      'X',
      null,
    );
    expect(result?.toString()).toBe('42');
  });

  it('compile validates syntax', () => {
    const engine = new CqlEngine();
    expect(() => engine.compile(`library Test version '1.0'\ndefine X: 1`)).not.toThrow();
    expect(() => engine.compile('invalid cql !!!')).toThrow();
  });

  it('respects timeout', async () => {
    const engine = new CqlEngine({ timeout: 1 }); // 1ms
    // A complex expression that might timeout
    await expect(
      engine.evaluateLibrary(`library T version '1.0'\ndefine X: 1`, null),
    ).resolves.toBeDefined(); // simple expr should still work
  });

  it('caches compiled libraries', async () => {
    const engine = new CqlEngine();
    const source = `library T version '1.0'\ndefine X: 1`;
    await engine.evaluateLibrary(source, null);
    await engine.evaluateLibrary(source, null); // should hit cache
    // No assertion needed — just verify no error
  });

  it('accepts model info option', () => {
    const engine = new CqlEngine({ modelInfo: 'R4' });
    expect(engine).toBeDefined();
  });

  it('evaluates with patient context', async () => {
    const engine = new CqlEngine({ modelInfo: 'R4' });
    const patient = { resourceType: 'Patient', birthDate: '1990-01-15' };
    const results = await engine.evaluateLibrary(
      `library T version '1.0'
       using FHIR version '4.0.1'
       context Patient
       define IsAdult: AgeInYears() >= 18`,
      patient,
    );
    expect(results['IsAdult']?.toString()).toBe('true');
  });
});
```

**Step 2: Implement engine.ts**

```ts
export class CqlEngine {
  private readonly cache = new Map<string, Library>();
  private readonly dataProvider: DataProvider | null;
  private readonly terminologyProvider: TerminologyProvider | null;
  private readonly modelInfo: ModelInfo;
  private readonly functionRegistry: FunctionRegistry;
  private readonly timeout: number;
  private readonly maxExpressionLen: number;
  private readonly maxRetrieveSize: number;
  private readonly maxDepth: number;

  constructor(options?: CqlEngineOptions) {
    this.timeout = options?.timeout ?? 30000;
    this.maxExpressionLen = options?.maxExpressionLen ?? 102400;
    this.maxRetrieveSize = options?.maxRetrieveSize ?? 10000;
    this.maxDepth = options?.maxDepth ?? 100;
    this.modelInfo = resolveModelInfo(options?.modelInfo ?? 'R4');
    this.dataProvider = options?.dataProvider ?? null;
    this.terminologyProvider = options?.terminologyProvider ?? null;
    this.functionRegistry = new FunctionRegistry();
    registerBuiltins(this.functionRegistry);
  }

  compile(source: string): Library { /* validate + parse + cache */ }

  async evaluateLibrary(
    source: string,
    context: unknown,
    params?: Record<string, unknown>,
  ): Promise<Record<string, CqlValue | null>> { /* compile + eval all defs */ }

  async evaluateExpression(
    source: string,
    name: string,
    context: unknown,
    params?: Record<string, unknown>,
  ): Promise<CqlValue | null> { /* compile + eval single */ }
}
```

**Step 3: Update src/index.ts with all public exports**

```ts
// src/index.ts
export { CqlEngine } from './engine.js';
export type { CqlEngineOptions } from './engine.js';
export type { DataProvider } from './providers/data.js';
export type { TerminologyProvider } from './providers/terminology.js';
export type { CqlValue, CqlComparable, CqlType } from './types/value.js';
export { CqlInteger, CqlDecimal, CqlString, CqlBoolean, CqlDate, CqlDateTime, CqlTime, CqlQuantity, CqlLong } from './types/primitives.js';
export { CqlInterval, CqlList, CqlTuple, CqlCode, CqlConcept, CqlRatio } from './types/complex.js';
export { CqlSyntaxError, CqlEvalError, CqlTimeoutError, CqlTooCostlyError } from './errors.js';
export { compile } from './compiler/compiler.js';
export { importElmLibrary } from './elm/importer.js';
export { translateLibrary } from './elm/translator.js';
export type { Library } from './ast/library.js';
export type { Expression } from './ast/nodes.js';
export type { ModelInfo } from './model/model-info.js';
```

**Step 4: Run tests, commit**

```bash
git commit -m "feat(cql): add CqlEngine public API with caching and timeout"
```

---

## Task 16: Integration Tests

**Files:**
- Create: `packages/cql/test/integration/cql-eval.test.ts`

**Step 1: Write end-to-end tests using CQL source strings**

```ts
describe('CQL end-to-end evaluation', () => {
  const engine = new CqlEngine({ modelInfo: 'R4' });

  it('arithmetic', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: 2 + 3 * 4`, 'X', null,
    );
    expect(r?.toString()).toBe('14');
  });

  it('string operations', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: Upper('hello')`, 'X', null,
    );
    expect(r?.toString()).toBe('HELLO');
  });

  it('list operations', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: Count({1, 2, 3, 4, 5})`, 'X', null,
    );
    expect(r?.toString()).toBe('5');
  });

  it('query with where and sort', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'
       define X: from {5, 3, 1, 4, 2} N where N > 2 sort asc`,
      'X', null,
    );
    // Should be {3, 4, 5}
  });

  it('interval contains', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: 5 in Interval[1, 10]`, 'X', null,
    );
    expect(r?.toString()).toBe('true');
  });

  it('if-then-else', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: if 1 > 2 then 'yes' else 'no'`, 'X', null,
    );
    expect(r?.toString()).toBe('no');
  });

  it('null handling — three-valued logic', async () => {
    const r = await engine.evaluateExpression(
      `library T version '1.0'\ndefine X: null and false`, 'X', null,
    );
    expect(r?.toString()).toBe('false');
  });

  it('clinical: AgeInYears with patient context', async () => {
    const patient = { resourceType: 'Patient', birthDate: '1990-06-15' };
    const r = await engine.evaluateExpression(
      `library T version '1.0'
       using FHIR version '4.0.1'
       context Patient
       define Age: AgeInYears()`,
      'Age', patient,
    );
    // Should return age based on current date
    expect(Number(r?.toString())).toBeGreaterThanOrEqual(35);
  });

  it('ELM round-trip preserves semantics', async () => {
    const source = `library T version '1.0'\ndefine X: 1 + 2`;
    const lib = engine.compile(source);
    const elm = translateLibrary(lib);
    const lib2 = importElmLibrary(elm);
    // Evaluate from re-imported AST
    // ...verify result is still 3
  });
});
```

**Step 2: Run integration tests**

Run: `cd packages/cql && pnpm test`
Expected: ALL PASS

**Step 3: Commit**

```bash
git commit -m "test(cql): add integration tests for end-to-end CQL evaluation"
```

---

## Task 17: Build & Publish Readiness

**Files:**
- Modify: `packages/cql/src/index.ts` (final exports)
- Verify: `packages/cql/package.json`

**Step 1: Full build**

Run: `cd packages/cql && pnpm build`
Expected: dist/ with index.js, index.cjs, index.d.ts

**Step 2: Run all tests**

Run: `cd packages/cql && pnpm test`
Expected: ALL PASS

**Step 3: Typecheck**

Run: `cd packages/cql && pnpm typecheck`
Expected: No errors

**Step 4: Verify from monorepo root**

Run: `pnpm build && pnpm test`
Expected: All packages build and test successfully

**Step 5: Final commit**

```bash
git commit -m "feat(cql): @fhir-toolkit/cql v0.1.0 — native CQL engine for TypeScript"
```

---

## Execution Order Summary

| Task | What | Est. Effort | Dependencies |
|------|------|-------------|--------------|
| 1 | Package scaffold | 15 min | None |
| 2 | Error types | 15 min | Task 1 |
| 3 | Primitive types | 2-3 hrs | Task 2 |
| 4 | Complex types | 2-3 hrs | Task 3 |
| 5 | AST nodes | 2-3 hrs | None (types-only) |
| 6 | Visitor pattern | 1 hr | Task 5 |
| 7 | Eval context | 1-2 hrs | Tasks 3, 4, 5 |
| 8 | Provider interfaces | 30 min | Tasks 3, 4 |
| 9 | Model info | 2-3 hrs | None |
| 10 | Grammar + parser gen | 1-2 hrs | Task 1 |
| 11 | Compiler (CQL->AST) | 8-12 hrs | Tasks 5, 10 |
| 12 | Function registry | 6-8 hrs | Tasks 3, 4, 7 |
| 13 | Evaluator | 10-15 hrs | Tasks 5, 6, 7, 12 |
| 14 | ELM import/export | 6-8 hrs | Tasks 5, 11 |
| 15 | CqlEngine API | 3-4 hrs | Tasks 7, 11, 12, 13 |
| 16 | Integration tests | 2-3 hrs | Task 15 |
| 17 | Build & publish | 1 hr | All |

**Total estimated: ~50-70 hours of focused work (~6-8 weeks part-time)**

**Critical path:** Tasks 1→5→10→11→13→15→16→17

**Parallelizable:** Tasks 3+5+9+10 can be worked on simultaneously. Tasks 12+14 can be done in parallel after their dependencies are met.
