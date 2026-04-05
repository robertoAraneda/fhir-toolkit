/**
 * Benchmark results (Apple M-series, 2026-04-05):
 * validate simple ("m"):               33,934,676 ops/sec
 * validate complex ("mg/dL"):          29,804,763 ops/sec
 * validate mixed (8 codes rotating):   16,791,559 ops/sec
 * analyze ("km"):                      13,470,539 ops/sec
 * isComparable ("mg" vs "g"):           1,534,961 ops/sec
 * convert simple (1 km → m):            1,327,413 ops/sec
 * convert special (37 Cel → [degF]):      739,841 ops/sec
 * canonical ("kg.m/s2"):                  688,063 ops/sec
 * createUcumService (initialization):      19,659 ops/sec
 */
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

  bench('analyze ("km")', () => {
    service.analyze('km')
  })
})
