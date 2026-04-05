import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

describe('UCUM in browser environment', () => {
  it('creates service without error', () => {
    expect(() => createUcumService()).not.toThrow()
  })

  it('validates unit in browser', () => {
    const service = createUcumService()
    expect(() => service.validate('mg/dL')).not.toThrow()
  })

  it('converts km to m in browser', () => {
    const service = createUcumService()
    expect(service.convert(1, 'km', 'm')).toBe(1000)
  })

  it('converts Celsius to Fahrenheit in browser', () => {
    const service = createUcumService()
    const result = service.convert(37, 'Cel', '[degF]')
    expect(Math.abs(result - 98.6)).toBeLessThan(0.01)
  })

  it('analyze() works in browser', () => {
    const service = createUcumService()
    const result = service.analyze('km')
    expect(result.toLowerCase()).toContain('kilo')
  })
})
