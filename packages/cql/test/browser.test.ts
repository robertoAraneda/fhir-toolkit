import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../src/index.js'

describe('CQL in browser environment', () => {
  it('creates engine without error', () => {
    expect(() => new CqlEngine()).not.toThrow()
  })

  it('evaluates simple expression in browser', async () => {
    const engine = new CqlEngine()
    const result = await engine.evaluateExpression(
      `library Test version '1.0'\ndefine "Value": 1 + 1`,
      'Value',
      null,
    )
    expect(result?.toString()).toBe('2')
  })

  it('evaluates string expression in browser', async () => {
    const engine = new CqlEngine()
    const result = await engine.evaluateExpression(
      `library Test version '1.0'\ndefine "Result": 'hello'`,
      'Result',
      null,
    )
    expect(result?.toString()).toBe('hello')
  })
})
