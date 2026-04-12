import { describe, it, expect } from 'vitest'
import { CqlEngine, InMemoryDataProvider } from '../../src/index.js'

describe('issue #21: included library functions with FHIR type params', () => {
  const bundle = {
    resourceType: 'Bundle' as const,
    entry: [
      {
        resource: {
          resourceType: 'Observation',
          id: 'obs1',
          status: 'final',
          code: { coding: [{ system: 'http://loinc.org', code: '8302-2' }] },
          valueQuantity: { value: 128, unit: 'cm', system: 'http://unitsofmeasure.org', code: 'cm' },
        },
      },
    ],
  }

  const fhirHelpers = `library FHIRHelpers version '4.0.1'
using FHIR version '4.0.1'

define function ToDecimal(value FHIR.decimal): value.value
define function ToDecimal(value FHIR.integer): value.value
define function ToDecimal(value FHIR.unsignedInt): value.value
define function ToDecimal(value FHIR.positiveInt): value.value

define function ToString(value FHIR.string): value.value
define function ToString(value FHIR.uri): value.value
define function ToString(value FHIR.code): value.value
define function ToString(value FHIR.boolean): if value.value then 'true' else 'false'

define function ToQuantity(quantity FHIR.Quantity):
  if quantity is null then null
  else System.Quantity {
    value: ToDecimal(quantity.value),
    unit: ToString(quantity.unit)
  }

define function ToCode(coding FHIR.Coding):
  if coding is null then null
  else Code {
    code: ToString(coding.code),
    system: ToString(coding.system),
    display: ToString(coding.display)
  }`

  it('FHIRHelpers.ToQuantity selects correct ToString overload for FHIR.string', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define Obs: First([Observation])
define Qty: Obs.value as FHIR.Quantity
define ToQty: FHIRHelpers.ToQuantity(Qty)`

    const engine = new CqlEngine({
      dataProvider: new InMemoryDataProvider(bundle),
      libraryResolver: async (name: string) => {
        if (name === 'FHIRHelpers') return fhirHelpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    expect(result['ToQty']?.toString()).toBe('128 cm')
  })

  it('FHIRHelpers.ToCode selects correct ToString overload for FHIR.code', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
include FHIRHelpers version '4.0.1' called FHIRHelpers
context Patient
define Obs: First([Observation])
define ObsCoding: Obs.code.coding[0]
define ObsCode: FHIRHelpers.ToCode(ObsCoding)`

    const engine = new CqlEngine({
      dataProvider: new InMemoryDataProvider(bundle),
      libraryResolver: async (name: string) => {
        if (name === 'FHIRHelpers') return fhirHelpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    expect(result['ObsCode']).not.toBeNull()
    expect(result['ObsCode']?.toString()).toContain('8302-2')
  })

  it('overload resolution works for local functions too', async () => {
    const main = `library Main version '1.0'
using FHIR version '4.0.1'
context Patient
define Obs: First([Observation])
define Qty: Obs.value as FHIR.Quantity
define function GetVal(v FHIR.decimal): v.value
define function GetVal(v FHIR.string): v.value
define function GetVal(v FHIR.boolean): if v.value then 'true' else 'false'
define DecVal: GetVal(Qty.value)
define StrVal: GetVal(Qty.unit)`

    const engine = new CqlEngine({ dataProvider: new InMemoryDataProvider(bundle) })
    const result = await engine.evaluateLibrary(main, { resourceType: 'Patient', id: 'p1' })
    expect(result['DecVal']?.toString()).toBe('128')
    expect(result['StrVal']?.toString()).toBe('cm')
  })
})
