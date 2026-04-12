import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { CqlEngine, InMemoryDataProvider } from '../../src/index.js'

const fhirHelpers = readFileSync(
  new URL('../../../../test/fixtures/FHIRHelpers-4.0.1.cql', import.meta.url),
  'utf-8',
)

const bundle = {
  resourceType: 'Bundle' as const,
  entry: [{
    resource: {
      resourceType: 'Observation',
      id: 'obs1',
      status: 'final',
      code: { coding: [{ system: 'http://loinc.org', code: '8302-2' }] },
      valueQuantity: { value: 128, unit: 'cm', system: 'http://unitsofmeasure.org', code: 'cm' },
      effectiveDateTime: '2024-01-01',
    },
  }],
}

describe('issue #25: .value on System.Quantity returns null', () => {
  it('CqlQuantity.value returns decimal', async () => {
    const main = `library Test version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1'
context Patient
define ToQty: FHIRHelpers.ToQuantity(Last([Observation]).valueQuantity)
define HeightVal: FHIRHelpers.ToQuantity(Last([Observation]).valueQuantity).value
define HeightUnit: FHIRHelpers.ToQuantity(Last([Observation]).valueQuantity).unit`

    const engine = new CqlEngine({
      dataProvider: new InMemoryDataProvider(bundle),
      libraryResolver: async (name) => {
        if (name === 'FHIRHelpers') return fhirHelpers
        throw new Error(`Library ${name} not found`)
      },
    })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    console.log('ToQty:', result['ToQty']?.toString())
    console.log('HeightVal:', result['HeightVal']?.toString())
    console.log('HeightUnit:', result['HeightUnit']?.toString())
    expect(result['ToQty']?.toString()).toBe('128 cm')
    expect(result['HeightVal']?.toString()).toBe('128')
    expect(result['HeightUnit']?.toString()).toBe('cm')
  })
})
