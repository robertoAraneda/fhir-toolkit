import { describe, it, expect } from 'vitest';
import { UcumService, UcumValidationError, UcumConversionError } from '../src/index.js';

function createService(): UcumService {
  return new UcumService();
}

describe('UcumService', () => {
  describe('validate', () => {
    it('should accept valid UCUM codes', () => {
      const svc = createService();
      const valid = [
        'm', 'kg', 'cm', 'km', 'mg', 'g', 'L', 'mL', 'dL',
        'm/s', 'mg/dL', 'kg.m/s2', '10*3/uL', 'mm[Hg]',
        '[lb_av]', 'mol/L', '%', '1', 'm2', 'm-2',
        'Cel', '[degF]', 'K',
      ];
      for (const code of valid) {
        expect(() => svc.validate(code), `validate("${code}") should not throw`).not.toThrow();
      }
    });

    it('should reject invalid UCUM codes', () => {
      const svc = createService();
      const invalid = ['xyz', 'invalid_unit', '', 'm/'];
      for (const code of invalid) {
        expect(
          () => svc.validate(code),
          `validate("${code}") should throw`,
        ).toThrow(UcumValidationError);
      }
    });
  });

  describe('convert - metric units', () => {
    const svc = createService();

    const cases: Array<{ value: number; from: string; to: string; want: number; tol: number }> = [
      { value: 1, from: 'm', to: 'cm', want: 100, tol: 1e-9 },
      { value: 1, from: 'km', to: 'm', want: 1000, tol: 1e-9 },
      { value: 1, from: '[lb_av]', to: 'g', want: 453.59237, tol: 1e-4 },
      { value: 1000, from: 'mg', to: 'g', want: 1, tol: 1e-9 },
      { value: 1, from: 'L', to: 'mL', want: 1000, tol: 1e-9 },
      { value: 1, from: 'kg', to: 'g', want: 1000, tol: 1e-9 },
    ];

    for (const tc of cases) {
      it(`should convert ${tc.value} ${tc.from} to ${tc.want} ${tc.to}`, () => {
        const got = svc.convert(tc.value, tc.from, tc.to);
        expect(Math.abs(got - tc.want)).toBeLessThanOrEqual(tc.tol);
      });
    }
  });

  describe('convert - special units (temperature)', () => {
    const svc = createService();

    const cases: Array<{ value: number; from: string; to: string; want: number; tol: number }> = [
      // Celsius to Fahrenheit: 37C = 98.6F
      { value: 37, from: 'Cel', to: '[degF]', want: 98.6, tol: 0.1 },
      // Celsius to Kelvin: 100C = 373.15 K
      { value: 100, from: 'Cel', to: 'K', want: 373.15, tol: 0.01 },
      // Fahrenheit to Celsius: 212F = 100C
      { value: 212, from: '[degF]', to: 'Cel', want: 100, tol: 0.1 },
      // Kelvin to Celsius: 273.15 K = 0C
      { value: 273.15, from: 'K', to: 'Cel', want: 0, tol: 0.01 },
      // Freezing point: 0C = 32F
      { value: 0, from: 'Cel', to: '[degF]', want: 32, tol: 0.1 },
      // 0C = 273.15K
      { value: 0, from: 'Cel', to: 'K', want: 273.15, tol: 0.01 },
      // -40 is the same in both Celsius and Fahrenheit
      { value: -40, from: 'Cel', to: '[degF]', want: -40, tol: 0.1 },
      // 212F to K
      { value: 212, from: '[degF]', to: 'K', want: 373.15, tol: 0.1 },
      // 32F to Celsius
      { value: 32, from: '[degF]', to: 'Cel', want: 0, tol: 0.1 },
    ];

    for (const tc of cases) {
      it(`should convert ${tc.value} ${tc.from} to ${tc.want} ${tc.to}`, () => {
        const got = svc.convert(tc.value, tc.from, tc.to);
        expect(Math.abs(got - tc.want)).toBeLessThanOrEqual(tc.tol);
      });
    }
  });

  describe('convert - incompatible units', () => {
    it('should throw UcumConversionError for incompatible units', () => {
      const svc = createService();
      expect(() => svc.convert(1, 'm', 'kg')).toThrow(UcumConversionError);
    });
  });

  describe('isComparable', () => {
    const svc = createService();

    const cases: Array<{ code1: string; code2: string; want: boolean }> = [
      { code1: 'mg', code2: 'g', want: true },
      { code1: 'km', code2: 'm', want: true },
      { code1: 'mg', code2: 'mL', want: false },
      { code1: 'm', code2: 'kg', want: false },
      { code1: 'Cel', code2: 'K', want: true },
      { code1: 'Cel', code2: '[degF]', want: true },
    ];

    for (const tc of cases) {
      it(`isComparable("${tc.code1}", "${tc.code2}") should be ${tc.want}`, () => {
        expect(svc.isComparable(tc.code1, tc.code2)).toBe(tc.want);
      });
    }
  });

  describe('canonical', () => {
    it('should return canonical form of km', () => {
      const svc = createService();
      const p = svc.canonical(1, 'km');
      expect(Math.abs(p.value - 1000)).toBeLessThanOrEqual(1e-9);
      expect(p.code).toBe('m');
    });

    it('should return canonical form of kg', () => {
      const svc = createService();
      const p = svc.canonical(1, 'kg');
      expect(Math.abs(p.value - 1000)).toBeLessThanOrEqual(1e-9);
      expect(p.code).toBe('g');
    });

    it('should return canonical form of L', () => {
      const svc = createService();
      const p = svc.canonical(1, 'L');
      // 1 L = 0.001 m3
      expect(Math.abs(p.value - 0.001)).toBeLessThanOrEqual(1e-9);
      expect(p.code).toBe('m3');
    });

    it('should return canonical form of percent', () => {
      const svc = createService();
      const p = svc.canonical(50, '%');
      expect(Math.abs(p.value - 0.5)).toBeLessThanOrEqual(1e-9);
      expect(p.code).toBe('1');
    });
  });

  describe('multiply', () => {
    it('should multiply 2m * 3m = 6 m2', () => {
      const svc = createService();
      const result = svc.multiply({ value: 2, code: 'm' }, { value: 3, code: 'm' });
      expect(Math.abs(result.value - 6)).toBeLessThanOrEqual(1e-9);
      expect(result.code).toBe('m2');
    });
  });
});
