import { describe, it, expect } from 'vitest'
import { InMemoryDataProvider } from '../../src/index.js'

describe('InMemoryDataProvider', () => {
  it('retrieves resources by type', async () => {
    const bundle = {
      resourceType: 'Bundle' as const,
      entry: [
        { resource: { resourceType: 'Patient', id: '1', birthDate: '1990-01-01' } },
        { resource: { resourceType: 'Patient', id: '2', birthDate: '1980-05-15' } },
        { resource: { resourceType: 'Condition', id: '3' } },
      ],
    }
    const provider = new InMemoryDataProvider(bundle)
    const patients = await provider.retrieve('Patient')
    expect(patients).toHaveLength(2)
  })

  it('returns empty array for missing resource type', async () => {
    const bundle = { resourceType: 'Bundle' as const, entry: [] }
    const provider = new InMemoryDataProvider(bundle)
    const results = await provider.retrieve('Observation')
    expect(results).toHaveLength(0)
  })

  it('handles bundle with no entries', async () => {
    const bundle = { resourceType: 'Bundle' as const }
    const provider = new InMemoryDataProvider(bundle)
    const results = await provider.retrieve('Patient')
    expect(results).toHaveLength(0)
  })

  it('handles entries with missing resource', async () => {
    const bundle = {
      resourceType: 'Bundle' as const,
      entry: [
        { resource: { resourceType: 'Patient', id: '1' } },
        {}, // entry without resource
      ],
    }
    const provider = new InMemoryDataProvider(bundle)
    const patients = await provider.retrieve('Patient')
    expect(patients).toHaveLength(1)
  })
})
