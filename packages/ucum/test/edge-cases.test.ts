import { describe, it, expect } from 'vitest'
import { createUcumService } from '../src/index.js'

const service = createUcumService()

describe('edge cases', () => {
  describe('validate edge cases', () => {
    it('throws for empty string', () => {
      expect(() => service.validate('')).toThrow()
    })

    it('throws for whitespace-only string', () => {
      expect(() => service.validate('  ')).toThrow()
    })

    it('throws for malformed unit missing denominator', () => {
      expect(() => service.validate('m/')).toThrow()
    })

    it('validates compound unit g/dL', () => {
      expect(() => service.validate('g/dL')).not.toThrow()
    })

    it('validates compound unit mmol/L', () => {
      expect(() => service.validate('mmol/L')).not.toThrow()
    })

    it('validates compound unit cm[H2O]', () => {
      expect(() => service.validate('cm[H2O]')).not.toThrow()
    })
  })

  describe('convert edge cases', () => {
    it('converts g/dL to g/mL', () => {
      const result = service.convert(1, 'g/dL', 'g/mL')
      expect(Math.abs(result - 0.01)).toBeLessThan(1e-9)
    })

    it('converts mmol/L to mol/L', () => {
      const result = service.convert(1, 'mmol/L', 'mol/L')
      expect(Math.abs(result - 0.001)).toBeLessThan(1e-9)
    })

    it('converts 0 Celsius to 273.15 K', () => {
      const result = service.convert(0, 'Cel', 'K')
      expect(Math.abs(result - 273.15)).toBeLessThan(0.001)
    })

    it('throws when converting incompatible units (m to kg)', () => {
      expect(() => service.convert(1, 'm', 'kg')).toThrow()
    })
  })

  describe('isComparable edge cases', () => {
    it('compound units g/dL and mg/mL are comparable', () => {
      expect(service.isComparable('g/dL', 'mg/mL')).toBe(true)
    })

    it('compound units mmol/L and mol/L are comparable', () => {
      expect(service.isComparable('mmol/L', 'mol/L')).toBe(true)
    })
  })
})
