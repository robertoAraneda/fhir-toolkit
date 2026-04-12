import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { CqlEngine, InMemoryDataProvider } from '../../src/index.js'

const fhirHelpers = readFileSync(
  new URL('../../../../test/fixtures/FHIRHelpers-4.0.1.cql', import.meta.url),
  'utf-8',
)

const bundle = {
  resourceType: 'Bundle' as const,
  entry: [
    {
      resource: {
        resourceType: 'Observation',
        id: 'obs1',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8302-2', display: 'Body height' }],
        },
        valueQuantity: {
          value: 128,
          unit: 'cm',
          system: 'http://unitsofmeasure.org',
          code: 'cm',
        },
        effectiveDateTime: '2024-01-01',
      },
    },
  ],
}

const libraryResolver = async (name: string) => {
  if (name === 'FHIRHelpers') return fhirHelpers
  throw new Error(`Library ${name} not found`)
}

describe('issue #23: FHIRHelpers.ToQuantity with real FHIRHelpers-4.0.1.cql', () => {
  it('FHIRHelpers.ToQuantity via valueQuantity (simple retrieve)', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define vq: Last([Observation]).valueQuantity
define ToQty: FHIRHelpers.ToQuantity(vq)`

    const engine = new CqlEngine({ dataProvider: new InMemoryDataProvider(bundle), libraryResolver })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    console.log('vq:', result['vq']?.toString())
    console.log('ToQty:', result['ToQty']?.toString())
    expect(result['vq']).not.toBeNull()
    expect(result['ToQty']).not.toBeNull()
    expect(result['ToQty']?.toString()).toBe('128 cm')
  })

  it('FHIRHelpers.ToQuantity — no "called" alias (matches issue reproduction)', async () => {
    // Issue uses: include FHIRHelpers version '4.0.1' without "called"
    const main = `library Test version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1'
codesystem LOINC: 'http://loinc.org'
code "Body Height": '8302-2' from LOINC
context Patient
define "vq": Last([Observation: "Body Height"] O where O.status = 'final').valueQuantity
define "ToQty": FHIRHelpers.ToQuantity("vq")`

    const engine = new CqlEngine({ dataProvider: new InMemoryDataProvider(bundle), libraryResolver })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    console.log('vq (no alias):', result['vq']?.toString())
    console.log('ToQty (no alias):', result['ToQty']?.toString())
    expect(result['vq']).not.toBeNull()
    expect(result['ToQty']).not.toBeNull()
    expect(result['ToQty']?.toString()).toBe('128 cm')
  })

  it('local equivalent MyToQty works (baseline)', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
context Patient
define vq: Last([Observation]).value as FHIR.Quantity
define function MyToQty(quantity FHIR.Quantity):
  case
    when quantity is null then null
    when quantity.value is null then null
    when quantity.comparator is not null then null
    when quantity.system is null or quantity.system.value = 'http://unitsofmeasure.org' then
      System.Quantity { value: quantity.value.value, unit: quantity.unit.value }
    else null
  end
define MyToQtyResult: MyToQty(vq)`

    const engine = new CqlEngine({ dataProvider: new InMemoryDataProvider(bundle) })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    console.log('MyToQtyResult:', result['MyToQtyResult']?.toString())
    expect(result['MyToQtyResult']?.toString()).toBe('128 cm')
  })
})
