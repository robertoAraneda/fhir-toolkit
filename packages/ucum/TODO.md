# @fhir-toolkit/ucum — Pending Work for v1.0

## Status: v0.1.0-alpha (29 tests, ported from Go)

---

## P0 — Must do before production use

### Test Coverage
- [ ] Port remaining ~60 Go tests (lexer: 29, special: 28, converter, parser, composer)
- [ ] Add edge case tests: empty string, whitespace, malformed units
- [ ] Test all 21 special unit handlers (temperature, logarithmic, trigonometric)
- [ ] Test compound units: g/dL, mmol/L, mg/kg/min, cm[H2O]

### Code Review
- [ ] Review lexer.ts against Go lexer.go — bracket unit handling, annotation parsing
- [ ] Review parser.ts — prefix resolution longest-match ordering
- [ ] Review converter.ts — recursive unit expansion, special unit handling
- [ ] Review decimal precision — verify decimal.js matches Go's math/big.Rat behavior

### Browser Testing
- [ ] Verify works in browser (definitions.ts is ~370 lines, should be fine)
- [ ] Check bundle size

---

## P1 — Should do before v1.0

### Performance
- [ ] Port benchmark_test.go from Go
- [ ] Measure parse + convert latency for common units
- [ ] Cache effectiveness — profile hit rate

### Validation
- [ ] Cross-validate against @lhncbc/ucum-lhc for the same conversions
- [ ] Test with FHIR Quantity values from real clinical data
- [ ] Verify ucum-essence.xml coverage — are all 305 defined units working?

### Missing from Go
- [ ] Concurrent access test (less relevant in JS but good to have)
- [ ] Composer tests (serialize canonical back to UCUM string)
- [ ] Analyze() method — human-readable unit description

---

## P2 — Nice to have

- [ ] UCUM validation in FHIR resource validators
- [ ] Integration with @fhir-toolkit/yafv for Quantity validation
- [ ] Unit suggestion/autocomplete API
