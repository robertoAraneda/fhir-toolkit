import { describe, it, expect } from 'vitest'
import { CqlEngine } from '../../src/index.js'

describe('expression tracing', () => {
  it('emits trace events for evaluated expressions', async () => {
    const engine = new CqlEngine()
    const events: Array<{ expression: string; value: unknown }> = []

    engine.on('trace', (event) => events.push(event))

    await engine.evaluateExpression(
      `library Test version '1.0'
define "Value": 1 + 1`,
      'Value',
      null,
    )

    expect(events.length).toBeGreaterThan(0)
    expect(events.some((e) => e.expression === 'Value')).toBe(true)
  })

  it('trace handler receives the evaluated value', async () => {
    const engine = new CqlEngine()
    const events: Array<{ expression: string; value: unknown }> = []

    engine.on('trace', (event) => events.push(event))

    await engine.evaluateExpression(
      `library Test version '1.0'
define "Answer": 42`,
      'Answer',
      null,
    )

    const answerEvent = events.find((e) => e.expression === 'Answer')
    expect(answerEvent).toBeDefined()
    expect(answerEvent?.value?.toString()).toBe('42')
  })

  it('on() returns the engine for chaining', () => {
    const engine = new CqlEngine()
    const result = engine.on('trace', () => {})
    expect(result).toBe(engine)
  })

  it('multiple trace handlers all receive events', async () => {
    const engine = new CqlEngine()
    let count1 = 0
    let count2 = 0

    engine.on('trace', () => { count1++ })
    engine.on('trace', () => { count2++ })

    await engine.evaluateExpression(
      `library Test version '1.0'
define "X": 1`,
      'X',
      null,
    )

    expect(count1).toBeGreaterThan(0)
    expect(count2).toBe(count1)
  })
})
