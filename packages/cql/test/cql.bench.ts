/**
 * Benchmark results (Apple M-series, 2026-04-05):
 * compile simple library:                      34,350,126 ops/sec
 * compile complex library (15 definitions):    32,769,895 ops/sec
 * evaluate simple expression (1+1):               485,059 ops/sec
 * evaluate complex library:                        210,813 ops/sec
 * compile + evaluate (cold cache):                   4,804 ops/sec
 */
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
define "Result": ToString(Count(M))`

describe('CQL benchmarks', () => {
  bench('compile simple library', () => {
    engine.compile(simpleLib)
  })

  bench('compile complex library (15 definitions)', () => {
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
