import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../../src/index.js'

describe('multi-library support', () => {
  it('resolves included library definitions', async () => {
    const helpers = `library Helpers version '1.0'
define function "Double"(x Integer): x * 2`

    const main = `library Main version '1.0'
include Helpers version '1.0' called H
define "Result": H.Double(5)`

    const engine = new CqlEngine({
      libraryResolver: async (name: string, _version: string) => {
        if (name === 'Helpers') return helpers
        throw new Error(`Library ${name} not found`)
      },
    })

    const result = await engine.evaluateExpression(main, 'Result', null)
    expect(result?.toString()).toBe('10')
  })

  it('throws when libraryResolver is not provided and include is used', async () => {
    const main = `library Main version '1.0'
include Missing version '1.0' called M
define "Result": M.Something()`

    const engine = new CqlEngine()
    await expect(engine.evaluateExpression(main, 'Result', null)).rejects.toThrow()
  })
})
