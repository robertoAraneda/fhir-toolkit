import { describe, it, expect } from 'vitest'
import { Decimal } from 'decimal.js'

describe('decimal.js precision for UCUM', () => {
  it.each([
    ['1', 1],
    ['0.001', 0.001],
    ['1e3', 1000],
    ['1e-24', 1e-24],
    ['2.54', 2.54],
    ['1e24', 1e24],
    ['5', 5],
    ['0.0254', 0.0254],
  ])('parses %s to %f', (input, expected) => {
    expect(new Decimal(input).toNumber()).toBe(expected)
  })

  // NOTE: decimal.js uses fixed decimal precision (default 20 digits), not symbolic
  // rational arithmetic like Go's math/big.Rat. So 1/3*3 produces
  // 0.9999999999999999999 rather than exactly 1. We verify the result is within
  // an epsilon tolerance instead of exact equality.
  it('1/3*3 ≈ 1 (within epsilon — decimal.js is not symbolic like Go math/big.Rat)', () => {
    const one = new Decimal(1)
    const three = new Decimal(3)
    const result = one.div(three).mul(three)
    const diff = result.minus(one).abs()
    expect(diff.lessThan(new Decimal('1e-18'))).toBe(true)
  })

  it('5/9 * 9/5 = exactly 1 (Celsius factor round-trip)', () => {
    const five = new Decimal(5)
    const nine = new Decimal(9)
    const result = five.div(nine).mul(nine).div(five)
    expect(result.equals(new Decimal(1))).toBe(true)
  })

  it('2^10 = 1024', () => {
    expect(new Decimal(2).pow(10).toNumber()).toBe(1024)
  })

  it('2^-3 = 0.125', () => {
    expect(new Decimal(2).pow(-3).toNumber()).toBe(0.125)
  })

  it('2^0 = 1', () => {
    expect(new Decimal(2).pow(0).toNumber()).toBe(1)
  })

  it('yocto * yotta = 1 (full prefix range)', () => {
    const yocto = new Decimal('1e-24')
    const yotta = new Decimal('1e24')
    expect(yocto.mul(yotta).equals(new Decimal(1))).toBe(true)
  })

  it('10 + 3 = 13', () => {
    expect(new Decimal(10).add(3).toNumber()).toBe(13)
  })

  it('10 - 3 = 7', () => {
    expect(new Decimal(10).sub(3).toNumber()).toBe(7)
  })

  it('10 * 3 = 30', () => {
    expect(new Decimal(10).mul(3).toNumber()).toBe(30)
  })

  it('0 isZero', () => {
    expect(new Decimal(0).isZero()).toBe(true)
  })
})
