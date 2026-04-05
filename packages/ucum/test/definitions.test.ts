import { describe, it, expect } from 'vitest';
import { UCUM_VERSION, PREFIXES, BASE_UNITS, DEFINED_UNITS } from '../src/definitions.js';
import { createTestModel } from './test-utils.js';

describe('UCUM definitions integrity', () => {
  it('version is "2.2"', () => {
    expect(UCUM_VERSION).toBe('2.2');
  });

  it('has at least 20 prefixes', () => {
    const model = createTestModel();
    expect(model.prefixes.length).toBeGreaterThanOrEqual(20);
  });

  it('has exactly 7 base units', () => {
    const model = createTestModel();
    expect(model.baseUnits.length).toBe(7);
  });

  it('has at least 200 defined units', () => {
    const model = createTestModel();
    expect(model.definedUnits.length).toBeGreaterThanOrEqual(200);
  });

  it('prefix "k" (kilo) has name "kilo" and value 1000', () => {
    const model = createTestModel();
    const kilo = model.getPrefix('k');
    expect(kilo).toBeDefined();
    expect(kilo!.name).toBe('kilo');
    expect(kilo!.value.toNumber()).toBe(1000);
  });

  it('base unit "m" is named "meter" and isBase is true', () => {
    const model = createTestModel();
    const meter = model.getUnit('m');
    expect(meter).toBeDefined();
    expect(meter!.name).toBe('meter');
    expect(meter!.isBase).toBe(true);
  });

  it('defined unit "[in_i]" is named "inch" and isBase is false', () => {
    const model = createTestModel();
    const inch = model.getUnit('[in_i]');
    expect(inch).toBeDefined();
    expect(inch!.name).toBe('inch');
    expect(inch!.isBase).toBe(false);
  });

  it('special unit "Cel" has isSpecial true', () => {
    const model = createTestModel();
    const cel = model.getUnit('Cel');
    expect(cel).toBeDefined();
    expect(cel!.isSpecial).toBe(true);
  });
});
