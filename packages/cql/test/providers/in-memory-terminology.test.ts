import { describe, it, expect } from 'vitest'
import { InMemoryTerminologyProvider, CqlCode } from '../../src/index.js'

const provider = new InMemoryTerminologyProvider({
  valueSets: {
    'http://example.org/vs/diabetes': [
      { system: 'http://snomed.info/sct', code: '44054006', display: 'Diabetes mellitus' },
    ],
  },
})

describe('InMemoryTerminologyProvider', () => {
  it('inValueSet returns true for known code', async () => {
    const code = new CqlCode('44054006', 'http://snomed.info/sct', 'Diabetes mellitus')
    const result = await provider.inValueSet(code, 'http://example.org/vs/diabetes')
    expect(result).toBe(true)
  })

  it('inValueSet returns false for unknown code', async () => {
    const code = new CqlCode('99999999', 'http://snomed.info/sct')
    const result = await provider.inValueSet(code, 'http://example.org/vs/diabetes')
    expect(result).toBe(false)
  })

  it('inValueSet returns false for unknown value set', async () => {
    const code = new CqlCode('44054006', 'http://snomed.info/sct')
    const result = await provider.inValueSet(code, 'http://example.org/vs/unknown')
    expect(result).toBe(false)
  })

  it('expand returns all codes in value set', async () => {
    const codes = await provider.expand('http://example.org/vs/diabetes')
    expect(codes).toHaveLength(1)
    expect(codes[0]).toBeInstanceOf(CqlCode)
    expect(codes[0].code).toBe('44054006')
    expect(codes[0].system).toBe('http://snomed.info/sct')
    expect(codes[0].display).toBe('Diabetes mellitus')
  })

  it('expand returns empty array for unknown value set', async () => {
    const codes = await provider.expand('http://example.org/vs/unknown')
    expect(codes).toHaveLength(0)
  })
})
