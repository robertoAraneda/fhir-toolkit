# @fhir-toolkit/cql — Pending Work for v1.0

## Status: v0.1.0-alpha (99.88% CQL spec conformance)

---

## P0 — Must do before any production use

### Code Review
- [ ] Full line-by-line review of `src/eval/evaluator.ts` (~900 lines, written by agents)
- [ ] Full review of `src/compiler/builder.ts` (~1050 lines, ANTLR visitor)
- [ ] Review null propagation logic — conformance tests cover most cases, but edge cases in nested queries may be wrong
- [ ] Review async evaluator — confirm no race conditions or unhandled promise rejections

### ELM Validation
- [ ] Compare ELM output against Java reference compiler (`cqframework/clinical_quality_language`)
- [ ] Take 5-10 real CQL libraries, compile with both engines, diff the ELM JSON
- [ ] Verify ELM round-trip: CQL → AST → ELM → AST → evaluate — confirm results match direct evaluation

### Real-world CQL Testing
- [ ] Test with real eCQM (electronic Clinical Quality Measure) CQL from [ecqi.healthit.gov](https://ecqi.healthit.gov/)
- [ ] Test with CDS Hooks CQL (clinical decision support)
- [ ] Test with FHIR Questionnaire population CQL
- [ ] Verify against CQL from the [cqf-measures](https://github.com/cqframework/cqf-measures) IG

### Browser Testing
- [ ] Verify `@fhir-toolkit/cql` works in browser (ANTLR4ng + decimal.js should work, but unverified)
- [ ] Test bundle size with tree-shaking (current unminified: ~830KB ESM)
- [ ] Check if `@fhir-toolkit/ucum` definitions.ts impacts load time
- [ ] Test in Chrome, Firefox, Safari

---

## P1 — Should do before v1.0

### Performance
- [ ] Add benchmarks: parse time, evaluation time, memory usage
- [ ] Profile with a complex CQL library (20+ definitions)
- [ ] Consider compiled expression caching (Go version has this with FNV-64a hash)
- [ ] Evaluate if the ANTLR parser is the bottleneck or the evaluator

### UCUM Coverage
- [ ] Port remaining ~60 Go UCUM tests (90 total, only 29 ported)
- [ ] Validate against UCUM test suite if one exists
- [ ] Test compound unit operations thoroughly (g/dL, mmol/L, etc.)

### Conformance Gaps
- [ ] 2 remaining failures:
  - `Issue34A`: Now() as expected output — test framework limitation, not engine bug
  - `IntegerIntervalProperlyIncludedInNullBoundaries`: spec contradiction
- [ ] 42 skipped invalid-expression tests — verify our engine throws appropriate errors for these

### Error Messages
- [ ] Improve CqlSyntaxError messages with source location context
- [ ] Add expression path to CqlEvalError (which definition failed?)
- [ ] Structured error codes for programmatic handling

---

## P2 — Nice to have

### Documentation
- [ ] API reference docs (JSDoc → TypeDoc)
- [ ] Usage examples: evaluate CQL, compile to ELM, custom functions, custom providers
- [ ] Migration guide from Java CQL engine

### Features
- [ ] DataProvider reference implementation (in-memory FHIR bundle)
- [ ] TerminologyProvider reference implementation (in-memory ValueSets)
- [ ] Multi-library support (include/import across CQL files)
- [ ] Expression-level tracing (like Go's TraceListener)
- [ ] Source maps in error messages (line/column in original CQL)

### CI/CD
- [ ] Add to monorepo CI pipeline
- [ ] Conformance test report in PR comments
- [ ] Publish to npm as `@fhir-toolkit/cql@0.1.0-alpha`
