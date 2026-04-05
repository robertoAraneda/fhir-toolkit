/**
 * Converter review tests — Task 13
 *
 * Systematically exercises the six behaviors identified in the Go vs TS
 * converter diff review. All assertions verify that the live code path
 * (service.ts → canonicalizeTerm/canonicalizeSymbol) matches the Go
 * reference implementation in converter.go / service.go.
 *
 * Note: The standalone `Converter` class in converter.ts is dead code (not
 * imported by any production module). The service uses its own inline
 * canonicalization which is what these tests exercise.
 */

import { describe, it, expect } from 'vitest';
import { createUcumService } from '../src/index.js';

const service = createUcumService();

// ---------------------------------------------------------------------------
// 1. Recursive unit expansion
//    Defined units expand through their definitions recursively until only
//    base units remain. Pa → N/m2 → kg.m/s2 / m2 → g.m-1.s-2
// ---------------------------------------------------------------------------
describe('1. Recursive unit expansion', () => {
  it('Pa expands recursively to base units g.m-1.s-2', () => {
    const p = service.canonical(1, 'Pa');
    expect(p.code).toBe('g.m-1.s-2');
  });

  it('J expands recursively to base units g.m2.s-2', () => {
    const p = service.canonical(1, 'J');
    expect(p.code).toBe('g.m2.s-2');
  });

  it('W expands recursively to base units g.m2.s-3', () => {
    const p = service.canonical(1, 'W');
    expect(p.code).toBe('g.m2.s-3');
  });

  it('N expands to g.m.s-2', () => {
    const p = service.canonical(1, 'N');
    expect(p.code).toBe('g.m.s-2');
  });

  it('mol expands to dimensionless quantity (10^23 scale)', () => {
    // mol = 6.02214076 * 10^23 — no base units (it IS a defined unit over 10^23)
    const p = service.canonical(1, 'mol');
    // mol definition: unit = "10*23", value = "6.02214076" — 10* is dimensionless
    expect(p.code).toBe('1');
  });
});

// ---------------------------------------------------------------------------
// 2. Prefix multiplication — prefix.value raised to the symbol exponent
//    km2 → (1000)^2 * m^2 = 1e6 m2
// ---------------------------------------------------------------------------
describe('2. Prefix multiplication with exponent', () => {
  it('km has prefix value 1000', () => {
    const p = service.canonical(1, 'km');
    expect(p.value).toBeCloseTo(1000, 9);
    expect(p.code).toBe('m');
  });

  it('km2 → prefix raised to exponent 2: 1000^2 = 1e6', () => {
    const p = service.canonical(1, 'km2');
    expect(p.value).toBeCloseTo(1e6, 3);
    expect(p.code).toBe('m2');
  });

  it('convert 1 km2 to m2 gives 1e6', () => {
    const result = service.convert(1, 'km2', 'm2');
    expect(result).toBeCloseTo(1e6, 3);
  });

  it('mg canonical value is 0.001 g', () => {
    const p = service.canonical(1, 'mg');
    expect(p.value).toBeCloseTo(0.001, 12);
    expect(p.code).toBe('g');
  });

  it('mmol canonical has correct scale', () => {
    // mmol = milli * mol = 0.001 * mol-value
    const mmol = service.canonical(1, 'mmol');
    const mol = service.canonical(1, 'mol');
    expect(mmol.value).toBeCloseTo(mol.value * 0.001, 5);
  });
});

// ---------------------------------------------------------------------------
// 3. Special unit detection — isSpecial routes to SPECIAL_HANDLERS
// ---------------------------------------------------------------------------
describe('3. Special unit detection', () => {
  it('Celsius is recognized as special and converts correctly', () => {
    expect(service.convert(0, 'Cel', 'K')).toBeCloseTo(273.15, 6);
    expect(service.convert(100, 'Cel', 'K')).toBeCloseTo(373.15, 6);
  });

  it('[degF] is recognized as special and converts correctly', () => {
    expect(service.convert(32, '[degF]', 'Cel')).toBeCloseTo(0, 6);
    expect(service.convert(212, '[degF]', 'Cel')).toBeCloseTo(100, 6);
  });

  it('Cel and K are comparable (same base dimension)', () => {
    expect(service.isComparable('Cel', 'K')).toBe(true);
  });

  it('Cel and [degF] are comparable', () => {
    expect(service.isComparable('Cel', '[degF]')).toBe(true);
  });

  it('no handler for non-special unit does not trigger special path', () => {
    // m is a base unit, not special — should work fine
    expect(() => service.canonical(1, 'm')).not.toThrow();
  });

  it('special unit Np (neper, logarithmic) is recognized', () => {
    // Np is special, should be comparable to 1 (dimensionless)
    expect(service.isComparable('Np', 'B')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// 4. Exponent application — value raised to power, unit exponents multiplied
// ---------------------------------------------------------------------------
describe('4. Exponent application', () => {
  it('m2 has exponent 2 on the m base unit', () => {
    const p = service.canonical(1, 'm2');
    expect(p.code).toBe('m2');
    expect(p.value).toBeCloseTo(1, 9);
  });

  it('m-1 has exponent -1 on the m base unit', () => {
    const p = service.canonical(1, 'm-1');
    expect(p.code).toBe('m-1');
  });

  it('m3 canonical is itself with value 1', () => {
    const p = service.canonical(1, 'm3');
    expect(p.code).toBe('m3');
    expect(p.value).toBeCloseTo(1, 9);
  });

  it('km-1 → prefix raised to exponent -1: 1000^-1 = 0.001', () => {
    const p = service.canonical(1, 'km-1');
    expect(p.value).toBeCloseTo(0.001, 12);
    expect(p.code).toBe('m-1');
  });

  it('cm2 canonical value is 0.0001 m2', () => {
    const p = service.canonical(1, 'cm2');
    // c = 0.01, (0.01)^2 = 0.0001
    expect(p.value).toBeCloseTo(0.0001, 12);
    expect(p.code).toBe('m2');
  });
});

// ---------------------------------------------------------------------------
// 5. Division handling — operator Division inverts right-hand exponents
// ---------------------------------------------------------------------------
describe('5. Division handling', () => {
  it('m/s canonical is m.s-1', () => {
    const p = service.canonical(1, 'm/s');
    expect(p.code).toBe('m.s-1');
  });

  it('m/s2 canonical is m.s-2', () => {
    const p = service.canonical(1, 'm/s2');
    expect(p.code).toBe('m.s-2');
  });

  it('m2/s2 canonical is m2.s-2', () => {
    const p = service.canonical(1, 'm2/s2');
    expect(p.code).toBe('m2.s-2');
  });

  it('m/m is dimensionless', () => {
    const p = service.canonical(1, 'm/m');
    expect(p.code).toBe('1');
  });

  it('convert 1 m/s to cm/s gives 100', () => {
    expect(service.convert(1, 'm/s', 'cm/s')).toBeCloseTo(100, 9);
  });

  it('convert 1 km/h to m/s gives ~0.2778', () => {
    expect(service.convert(1, 'km/h', 'm/s')).toBeCloseTo(1 / 3.6, 6);
  });

  it('g/dL and g/mL are comparable', () => {
    expect(service.isComparable('g/dL', 'g/mL')).toBe(true);
  });

  it('convert 1 g/dL to g/mL is 0.01', () => {
    expect(service.convert(1, 'g/dL', 'g/mL')).toBeCloseTo(0.01, 9);
  });
});

// ---------------------------------------------------------------------------
// 6. Error on unconvertible unit
// ---------------------------------------------------------------------------
describe('6. Error on unconvertible/incompatible unit', () => {
  it('throws on unknown unit', () => {
    expect(() => service.convert(1, 'XYZZY', 'kg')).toThrow();
  });

  it('throws on incompatible units m vs kg', () => {
    expect(() => service.convert(1, 'm', 'kg')).toThrow();
  });

  it('throws on incompatible units m/s vs m', () => {
    expect(() => service.convert(1, 'm/s', 'm')).toThrow();
  });

  it('throws on incompatible units Cel vs kg', () => {
    expect(() => service.convert(1, 'Cel', 'kg')).toThrow();
  });

  it('validate throws for completely unknown unit', () => {
    expect(() => service.validate('XYZZY')).toThrow();
  });

  it('validate throws for malformed expression', () => {
    expect(() => service.validate('m/')).toThrow();
  });
});
