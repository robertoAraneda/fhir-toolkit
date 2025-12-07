/**
 * SimpleQuantity Model and Builder Tests
 *
 * Tests for the SimpleQuantity datatype class and its builder.
 * SimpleQuantity is a Quantity where the comparator is not used.
 */

import { describe, it, expect } from 'vitest';
import { SimpleQuantity, SimpleQuantityBuilder } from '../../../src/index.js';
import type { ISimpleQuantity } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const simpleQuantities = {
  basic: {
    value: 100,
    unit: 'mg',
  } as ISimpleQuantity,
  ucumComplete: {
    value: 5.5,
    unit: 'milliliters',
    system: 'http://unitsofmeasure.org',
    code: 'mL',
  } as ISimpleQuantity,
  weight: {
    value: 70,
    unit: 'kg',
    system: 'http://unitsofmeasure.org',
    code: 'kg',
  } as ISimpleQuantity,
  temperature: {
    value: 37.5,
    unit: 'Celsius',
    system: 'http://unitsofmeasure.org',
    code: 'Cel',
  } as ISimpleQuantity,
  heartRate: {
    value: 72,
    unit: 'beats/minute',
    system: 'http://unitsofmeasure.org',
    code: '/min',
  } as ISimpleQuantity,
  bloodPressure: {
    value: 120,
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]',
  } as ISimpleQuantity,
};

describe('SimpleQuantity', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const qty = new SimpleQuantity({});
        expect(qty).toBeInstanceOf(SimpleQuantity);
        expect(qty.value).toBeUndefined();
        expect(qty.unit).toBeUndefined();
      });

      it('should create basic quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.basic);
        expect(qty.value).toBe(100);
        expect(qty.unit).toBe('mg');
      });

      it('should create complete UCUM quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.ucumComplete);
        expect(qty.value).toBe(5.5);
        expect(qty.unit).toBe('milliliters');
        expect(qty.system).toBe('http://unitsofmeasure.org');
        expect(qty.code).toBe('mL');
      });

      it('should create weight quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.weight);
        expect(qty.value).toBe(70);
        expect(qty.code).toBe('kg');
      });

      it('should create temperature quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.temperature);
        expect(qty.value).toBe(37.5);
        expect(qty.code).toBe('Cel');
      });

      it('should create heart rate quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.heartRate);
        expect(qty.value).toBe(72);
        expect(qty.unit).toBe('beats/minute');
      });

      it('should create blood pressure quantity', () => {
        const qty = new SimpleQuantity(simpleQuantities.bloodPressure);
        expect(qty.value).toBe(120);
        expect(qty.code).toBe('mm[Hg]');
      });

      it('should create quantity with value only', () => {
        const qty = new SimpleQuantity({ value: 50 });
        expect(qty.value).toBe(50);
        expect(qty.unit).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const qty = new SimpleQuantity(simpleQuantities.ucumComplete);
        const json = qty.toJSON();

        expect(json.value).toBe(5.5);
        expect(json.unit).toBe('milliliters');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('mL');
      });

      it('should omit undefined properties in JSON', () => {
        const qty = new SimpleQuantity({ value: 100 });
        const json = qty.toJSON();

        expect(json.value).toBe(100);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new SimpleQuantity(simpleQuantities.ucumComplete);
        expectSerializationRoundtrip(original, SimpleQuantity);
      });

      it('should preserve decimal precision in JSON', () => {
        const qty = new SimpleQuantity({ value: 37.5, unit: 'Cel' });
        const json = qty.toJSON();

        expect(json.value).toBe(37.5);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ISimpleQuantity = {
          value: 98.6,
          unit: 'degF',
          system: 'http://unitsofmeasure.org',
          code: '[degF]',
        };
        const qty = SimpleQuantity.fromJSON(json);

        expect(qty).toBeInstanceOf(SimpleQuantity);
        expect(qty.value).toBe(98.6);
        expect(qty.unit).toBe('degF');
      });

      it('should create identical instance from JSON', () => {
        const original = new SimpleQuantity(simpleQuantities.ucumComplete);
        const json = original.toJSON();
        const restored = SimpleQuantity.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new SimpleQuantity({ value: 100, unit: 'mg' });
        const updated = original.with({ value: 200 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(200);
        expect(updated.unit).toBe('mg');
        expect(original.value).toBe(100);
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new SimpleQuantity(simpleQuantities.basic);
        const updated = original.with({
          value: 500,
          unit: 'mcg',
          code: 'ug',
        });

        expect(updated.value).toBe(500);
        expect(updated.unit).toBe('mcg');
        expect(updated.code).toBe('ug');
        expect(original.value).toBe(100);
      });

      it('should apply transform function correctly', () => {
        const qty = new SimpleQuantity({ value: 100, unit: 'mg' });
        const doubled = qty.applyTransform((data) => ({
          value: (data.value ?? 0) * 2,
        }));

        expect(doubled.value).toBe(200);
        expect(qty.value).toBe(100);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new SimpleQuantity(simpleQuantities.ucumComplete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new SimpleQuantity(simpleQuantities.weight);
        const cloned = original.clone();

        expect(cloned.value).toBe(original.value);
        expect(cloned.unit).toBe(original.unit);
        expect(cloned.system).toBe(original.system);
        expect(cloned.code).toBe(original.code);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const qty = new SimpleQuantity(simpleQuantities.basic);
        const str = qty.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('SimpleQuantity');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const qty = new SimpleQuantity({
          value: 100,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 2 },
            ],
          },
        });

        expect(qty._value?.extension?.[0]?.valueInteger).toBe(2);
      });

      it('should serialize extension properties', () => {
        const qty = new SimpleQuantity({
          value: 100,
          unit: 'mg',
          _unit: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = qty.toJSON();

        expect(json._unit?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const qty = new SimpleQuantity({
          id: 'qty-1',
          value: 100,
          unit: 'mg',
        });

        expect(qty.id).toBe('qty-1');
      });

      it('should handle extension property', () => {
        const qty = new SimpleQuantity({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 100,
        });

        expect(qty.extension).toHaveLength(1);
        expect(qty.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const qty = new SimpleQuantityBuilder().build();
        expect(qty).toBeInstanceOf(SimpleQuantity);
      });

      it('should build with value only', () => {
        const qty = new SimpleQuantityBuilder()
          .setValue(100)
          .build();

        expect(qty.value).toBe(100);
      });

      it('should build with all properties', () => {
        const qty = new SimpleQuantityBuilder()
          .setValue(5.5)
          .setUnit('milliliters')
          .setSystem('http://unitsofmeasure.org')
          .setCode('mL')
          .build();

        expect(qty.value).toBe(5.5);
        expect(qty.unit).toBe('milliliters');
        expect(qty.system).toBe('http://unitsofmeasure.org');
        expect(qty.code).toBe('mL');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new SimpleQuantityBuilder()
          .setValue(100)
          .setUnit('mg')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(SimpleQuantityBuilder);
      });

      it('should allow overwriting properties', () => {
        const qty = new SimpleQuantityBuilder()
          .setValue(100)
          .setValue(200)
          .build();

        expect(qty.value).toBe(200);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id', () => {
        const qty = new SimpleQuantityBuilder()
          .setId('qty-1')
          .setValue(100)
          .build();

        expect(qty.id).toBe('qty-1');
      });

      it('should add extension', () => {
        const qty = new SimpleQuantityBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(100)
          .build();

        expect(qty.extension).toHaveLength(1);
        expect(qty.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const qty = new SimpleQuantityBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(qty.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new SimpleQuantityBuilder().setValue(100);
        const first = builder.build();

        builder.setValue(200);
        const second = builder.build();

        expect(first.value).toBe(100);
        expect(second.value).toBe(200);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const qty = new SimpleQuantityBuilder()
          .setValue(37.5)
          .setUnit('Cel')
          .setSystem('http://unitsofmeasure.org')
          .setCode('Cel')
          .build();

        const json = qty.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new SimpleQuantityBuilder()
          .setValue(100)
          .setUnit('mg')
          .build();

        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work in medication dosage scenario', () => {
      const doseQuantity = new SimpleQuantityBuilder()
        .setValue(500)
        .setUnit('mg')
        .setSystem('http://unitsofmeasure.org')
        .setCode('mg')
        .build();

      expect(doseQuantity.value).toBe(500);
      expect(doseQuantity.unit).toBe('mg');

      const json = doseQuantity.toJSON();
      const restored = SimpleQuantity.fromJSON(json);

      expect(restored.value).toBe(500);
    });

    it('should work in vital signs scenario', () => {
      const temperature = new SimpleQuantity({
        value: 37.5,
        unit: 'Celsius',
        system: 'http://unitsofmeasure.org',
        code: 'Cel',
      });

      expect(temperature.value).toBe(37.5);
      expect(temperature.code).toBe('Cel');
    });

    it('should work in lab result scenario', () => {
      const glucoseLevel = new SimpleQuantityBuilder()
        .setValue(95)
        .setUnit('mg/dL')
        .setSystem('http://unitsofmeasure.org')
        .setCode('mg/dL')
        .build();

      expect(glucoseLevel.value).toBe(95);
    });

    it('should handle quantity modification', () => {
      const original = new SimpleQuantity(simpleQuantities.basic);

      const doubled = original.with({
        value: (original.value ?? 0) * 2,
      });

      expect(doubled.value).toBe(200);
      expect(original.value).toBe(100);
    });

    it('should work in body measurement scenario', () => {
      const weight = new SimpleQuantity(simpleQuantities.weight);
      const height = new SimpleQuantity({
        value: 175,
        unit: 'cm',
        system: 'http://unitsofmeasure.org',
        code: 'cm',
      });

      expect(weight.value).toBe(70);
      expect(height.value).toBe(175);
    });

    it('should handle unit conversion scenario', () => {
      const weightKg = new SimpleQuantity(simpleQuantities.weight);

      // Convert to pounds (approximately)
      const weightLb = weightKg.applyTransform((data) => ({
        value: Math.round((data.value ?? 0) * 2.20462),
        unit: 'lb',
        code: '[lb_av]',
      }));

      expect(weightLb.value).toBe(154);
      expect(weightLb.code).toBe('[lb_av]');
    });

    it('should work in infusion rate scenario', () => {
      const infusionRate = new SimpleQuantityBuilder()
        .setValue(100)
        .setUnit('mL/h')
        .setSystem('http://unitsofmeasure.org')
        .setCode('mL/h')
        .build();

      expect(infusionRate.value).toBe(100);
      expect(infusionRate.code).toBe('mL/h');
    });

    it('should handle multiple quantities comparison', () => {
      const vitals = [
        new SimpleQuantity({ value: 120, unit: 'mmHg', code: 'mm[Hg]' }),
        new SimpleQuantity({ value: 80, unit: 'mmHg', code: 'mm[Hg]' }),
        new SimpleQuantity({ value: 72, unit: '/min', code: '/min' }),
        new SimpleQuantity({ value: 37.0, unit: 'Cel', code: 'Cel' }),
      ];

      expect(vitals).toHaveLength(4);
      expect(vitals[0].value).toBe(120); // Systolic
      expect(vitals[1].value).toBe(80);  // Diastolic
      expect(vitals[2].value).toBe(72);  // Heart rate
      expect(vitals[3].value).toBe(37.0); // Temperature
    });
  });
});
