import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

const service = createUcumService()

describe('suggest', () => {
  it('suggests units matching prefix "ki"', () => {
    const results = service.suggest('ki')
    expect(results.length).toBeGreaterThan(0)
    // kg and km both have 'k' prefix — should appear
    expect(results.some((r) => r.code.toLowerCase().startsWith('k'))).toBe(true)
  })

  it('suggests Celsius for prefix "Cel"', () => {
    const results = service.suggest('Cel')
    expect(results.some((r) => r.code === 'Cel')).toBe(true)
  })

  it('returns empty array for unknown prefix', () => {
    const results = service.suggest('zzzzz')
    expect(results).toHaveLength(0)
  })

  it('limits results to 20 by default', () => {
    const results = service.suggest('m')
    expect(results.length).toBeLessThanOrEqual(20)
  })

  it('respects custom limit', () => {
    const results = service.suggest('m', 5)
    expect(results.length).toBeLessThanOrEqual(5)
  })

  it('each result has code and name', () => {
    const results = service.suggest('kg')
    expect(results.length).toBeGreaterThan(0)
    for (const r of results) {
      expect(typeof r.code).toBe('string')
      expect(typeof r.name).toBe('string')
    }
  })
})
