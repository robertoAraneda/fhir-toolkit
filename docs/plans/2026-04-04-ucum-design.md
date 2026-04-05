# Design: @fhir-toolkit/ucum

**Date**: 2026-04-04
**Status**: Approved

## Summary

Port the Go UCUM library (github.com/gofhir/ucum) to TypeScript as `@fhir-toolkit/ucum`. Integrate with `@fhir-toolkit/cql` to resolve 70 skipped UCUM conformance tests.

## Decisions

| Decision | Choice |
|----------|--------|
| Package location | `packages/ucum/` |
| Package name | `@fhir-toolkit/ucum` |
| Data embedding | TypeScript const arrays (pre-generated from ucum-essence.xml) |
| Decimal library | `decimal.js` (shared with CQL) |
| CQL integration | Optional peer dependency, injected via `CqlEngineOptions.ucumService` |

## Architecture

Direct port of Go pipeline: Lexer → Parser → AST → Converter → Service.

### Public API

```ts
interface UcumService {
  validate(code: string): void;
  convert(value: number, from: string, to: string): number;
  canonical(value: number, code: string): { value: number; code: string };
  isComparable(code1: string, code2: string): boolean;
}
```

### Package Structure

```
packages/ucum/src/
  model.ts        — Unit, Prefix, BaseUnit types
  definitions.ts  — Pre-generated data from ucum-essence.xml
  lexer.ts        — Hand-written tokenizer
  ast.ts          — term, symbol, factor nodes
  parser.ts       — Recursive descent parser
  converter.ts    — AST → canonical form
  special.ts      — Temperature, logarithmic handlers
  service.ts      — UcumService implementation
  errors.ts       — ValidationError, ConversionError
  index.ts        — Public exports
```

### CQL Integration

```ts
// @fhir-toolkit/cql adds optional peer dep
const engine = new CqlEngine({
  ucumService: createUcumService(),
});
// Now: 1'm' > 1'cm' → true (instead of null)
```

## Source Reference

| TypeScript | Go | Lines |
|---|---|---|
| lexer.ts | lexer.go | 278 |
| parser.ts | parser.go | 329 |
| converter.ts | converter.go | 234 |
| service.ts | service.go | 457 |
| special.ts | special.go | 120 |
| model.ts | model.go | 98 |
| definitions.ts | definitions.go + XML | ~500 |
| **Total** | | **~1900** |
