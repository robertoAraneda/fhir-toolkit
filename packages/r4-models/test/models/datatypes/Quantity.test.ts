/**
 * Quantity Model and Builder Tests
 *
 * Tests for the Quantity datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Quantity, QuantityBuilder } from '../../../src/index.js';
import type { IQuantity } from '@fhir-toolkit/r4-types';
import { quantities } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Quantity', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const qty = new Quantity({});
        expect(qty).toBeInstanceOf(Quantity);
        expect(qty.value).toBeUndefined();
        expect(qty.unit).toBeUndefined();
      });

      it('should create instance with value only', () => {
        const qty = new Quantity({ value: 100 });
        expect(qty.value).toBe(100);
        expect(qty.unit).toBeUndefined();
      });

      it('should create instance with value and unit', () => {
        const qty = new Quantity({ value: 75.5, unit: 'kg' });
        expect(qty.value).toBe(75.5);
        expect(qty.unit).toBe('kg');
      });

      it('should create weight quantity', () => {
        const qty = new Quantity(quantities.weight);
        expect(qty.value).toBe(75.5);
        expect(qty.unit).toBe('kg');
        expect(qty.system).toBe('http://unitsofmeasure.org');
        expect(qty.code).toBe('kg');
      });

      it('should create temperature quantity', () => {
        const qty = new Quantity(quantities.temperature);
        expect(qty.value).toBe(37.2);
        expect(qty.unit).toBe('Cel');
        expect(qty.code).toBe('Cel');
      });

      it('should create blood pressure quantity', () => {
        const qty = new Quantity(quantities.bloodPressure);
        expect(qty.value).toBe(120);
        expect(qty.unit).toBe('mmHg');
        expect(qty.code).toBe('mm[Hg]');
      });

      it('should create age quantity', () => {
        const qty = new Quantity(quantities.age);
        expect(qty.value).toBe(45);
        expect(qty.unit).toBe('years');
        expect(qty.code).toBe('a');
      });

      it('should create instance with comparator', () => {
        const qty = new Quantity({
          value: 100,
          comparator: '<',
          unit: 'mg/dL',
        });
        expect(qty.value).toBe(100);
        expect(qty.comparator).toBe('<');
      });
    });

    describe('Comparator Values', () => {
      it.each([
        ['<', '<'],
        ['<=', '<='],
        ['>=', '>='],
        ['>', '>'],
      ] as const)('should handle comparator %s', (input, expected) => {
        const qty = new Quantity({ value: 100, comparator: input });
        expect(qty.comparator).toBe(expected);
      });

      it('should create "less than" quantity', () => {
        const qty = new Quantity({
          value: 50,
          comparator: '<',
          unit: 'mg/dL',
        });
        expect(qty.comparator).toBe('<');
        expect(qty.value).toBe(50);
      });

      it('should create "greater than or equal" quantity', () => {
        const qty = new Quantity({
          value: 100,
          comparator: '>=',
          unit: 'mmHg',
        });
        expect(qty.comparator).toBe('>=');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const qty = new Quantity(quantities.weight);
        const json = qty.toJSON();

        expect(json.value).toBe(75.5);
        expect(json.unit).toBe('kg');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('kg');
      });

      it('should omit undefined properties in JSON', () => {
        const qty = new Quantity({ value: 100 });
        const json = qty.toJSON();

        expect(json.value).toBe(100);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');
        expect(json).not.toHaveProperty('comparator');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Quantity(quantities.weight);
        expectSerializationRoundtrip(original, Quantity);
      });

      it('should preserve numeric precision', () => {
        const qty = new Quantity({ value: 37.25, unit: 'Cel' });
        const json = qty.toJSON();
        expect(json.value).toBe(37.25);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IQuantity = {
          value: 120,
          unit: 'mmHg',
          system: 'http://unitsofmeasure.org',
        };
        const qty = Quantity.fromJSON(json);

        expect(qty).toBeInstanceOf(Quantity);
        expect(qty.value).toBe(120);
        expect(qty.unit).toBe('mmHg');
      });

      it('should create identical instance from JSON', () => {
        const original = new Quantity(quantities.temperature);
        const json = original.toJSON();
        const restored = Quantity.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Quantity({ value: 100, unit: 'kg' });
        const updated = original.with({ value: 110 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(110);
        expect(updated.unit).toBe('kg'); // Preserved from original
        expect(original.value).toBe(100); // Original unchanged
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Quantity({ value: 100, unit: 'kg' });
        const updated = original.with({ value: 220, unit: 'lb' });

        expect(updated.value).toBe(220);
        expect(updated.unit).toBe('lb');
        expect(original.value).toBe(100);
        expect(original.unit).toBe('kg');
      });

      it('should apply transform function correctly', () => {
        const qty = new Quantity({ value: 75.5, unit: 'kg' });
        const transformed = qty.applyTransform((data) => ({
          value: (data.value ?? 0) * 2.205, // Convert to lb
          unit: 'lb',
        }));

        expect(transformed.value).toBeCloseTo(166.48);
        expect(transformed.unit).toBe('lb');
        expect(qty.value).toBe(75.5); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Quantity(quantities.weight);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Quantity({
          value: 100,
          comparator: '<',
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL',
        });
        const cloned = original.clone();

        expect(cloned.value).toBe(original.value);
        expect(cloned.comparator).toBe(original.comparator);
        expect(cloned.unit).toBe(original.unit);
        expect(cloned.system).toBe(original.system);
        expect(cloned.code).toBe(original.code);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const qty = new Quantity({ value: 100 });
        const str = qty.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Quantity');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const qty = new Quantity({
          value: 100,
          _value: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'estimated' },
            ],
          },
        });

        expect(qty._value?.extension?.[0]?.valueString).toBe('estimated');
      });

      it('should serialize extension properties', () => {
        const qty = new Quantity({
          value: 100,
          _value: {
            id: 'value-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = qty.toJSON();

        expect(json._value?.id).toBe('value-ext');
        expect(json._value?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const qty = new QuantityBuilder().build();
        expect(qty).toBeInstanceOf(Quantity);
      });

      it('should build with value only', () => {
        const qty = new QuantityBuilder()
          .setValue(100)
          .build();

        expect(qty.value).toBe(100);
      });

      it('should build with value and unit', () => {
        const qty = new QuantityBuilder()
          .setValue(75.5)
          .setUnit('kg')
          .build();

        expect(qty.value).toBe(75.5);
        expect(qty.unit).toBe('kg');
      });

      it('should build with all properties', () => {
        const qty = new QuantityBuilder()
          .setValue(75.5)
          .setUnit('kg')
          .setSystem('http://unitsofmeasure.org')
          .setCode('kg')
          .build();

        expect(qty.value).toBe(75.5);
        expect(qty.unit).toBe('kg');
        expect(qty.system).toBe('http://unitsofmeasure.org');
        expect(qty.code).toBe('kg');
      });

      it('should build with comparator', () => {
        const qty = new QuantityBuilder()
          .setValue(100)
          .setComparator('<')
          .setUnit('mg/dL')
          .build();

        expect(qty.value).toBe(100);
        expect(qty.comparator).toBe('<');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new QuantityBuilder()
          .setValue(100)
          .setUnit('kg')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(QuantityBuilder);
      });

      it('should allow overwriting properties', () => {
        const qty = new QuantityBuilder()
          .setValue(100)
          .setValue(200)
          .build();

        expect(qty.value).toBe(200);
      });
    });

    describe('Common Quantities', () => {
      it('should build weight quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(75.5)
          .setUnit('kg')
          .setSystem('http://unitsofmeasure.org')
          .setCode('kg')
          .build();

        expect(qty.value).toBe(75.5);
        expect(qty.code).toBe('kg');
      });

      it('should build height quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(175)
          .setUnit('cm')
          .setSystem('http://unitsofmeasure.org')
          .setCode('cm')
          .build();

        expect(qty.value).toBe(175);
        expect(qty.code).toBe('cm');
      });

      it('should build temperature quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(37.2)
          .setUnit('Cel')
          .setSystem('http://unitsofmeasure.org')
          .setCode('Cel')
          .build();

        expect(qty.value).toBe(37.2);
        expect(qty.code).toBe('Cel');
      });

      it('should build blood pressure quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(120)
          .setUnit('mmHg')
          .setSystem('http://unitsofmeasure.org')
          .setCode('mm[Hg]')
          .build();

        expect(qty.value).toBe(120);
        expect(qty.code).toBe('mm[Hg]');
      });

      it('should build age quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(45)
          .setUnit('years')
          .setSystem('http://unitsofmeasure.org')
          .setCode('a')
          .build();

        expect(qty.value).toBe(45);
        expect(qty.code).toBe('a');
      });

      it('should build dosage quantity', () => {
        const qty = new QuantityBuilder()
          .setValue(500)
          .setUnit('mg')
          .setSystem('http://unitsofmeasure.org')
          .setCode('mg')
          .build();

        expect(qty.value).toBe(500);
        expect(qty.code).toBe('mg');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const qty = new QuantityBuilder()
          .setId('qty-1')
          .setValue(100)
          .build();

        expect(qty.id).toBe('qty-1');
      });

      it('should add extension from ElementBuilder', () => {
        const qty = new QuantityBuilder()
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
        const qty = new QuantityBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(qty.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new QuantityBuilder().setValue(100);
        const first = builder.build();

        builder.setValue(200);
        const second = builder.build();

        expect(first.value).toBe(100);
        expect(second.value).toBe(200);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const qty = new QuantityBuilder()
          .setValue(75.5)
          .setUnit('kg')
          .build();

        const json = qty.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new QuantityBuilder()
          .setValue(75.5)
          .setUnit('kg')
          .setSystem('http://unitsofmeasure.org')
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
    it('should work in typical observation scenario', () => {
      // Create vital sign quantity
      const temperatureQty = new QuantityBuilder()
        .setValue(37.5)
        .setUnit('Cel')
        .setSystem('http://unitsofmeasure.org')
        .setCode('Cel')
        .build();

      expect(temperatureQty.value).toBe(37.5);
      expect(temperatureQty.unit).toBe('Cel');

      // Serialize and restore
      const json = temperatureQty.toJSON();
      const restored = Quantity.fromJSON(json);

      expect(restored.value).toBe(37.5);
      expect(restored.code).toBe('Cel');
    });

    it('should handle lab result with comparator', () => {
      // Lab result below detection limit
      const labResult = new Quantity({
        value: 10,
        comparator: '<',
        unit: 'mg/dL',
        system: 'http://unitsofmeasure.org',
        code: 'mg/dL',
      });

      expect(labResult.value).toBe(10);
      expect(labResult.comparator).toBe('<');

      // Update when exact value is determined
      const exactResult = labResult.with({
        value: 8.5,
        comparator: undefined,
      });

      expect(exactResult.value).toBe(8.5);
      expect(exactResult.comparator).toBeUndefined();
      expect(labResult.comparator).toBe('<'); // Original unchanged
    });

    it('should handle medication dosage', () => {
      // Prescribed dosage
      const dosage = new QuantityBuilder()
        .setValue(500)
        .setUnit('mg')
        .setSystem('http://unitsofmeasure.org')
        .setCode('mg')
        .build();

      expect(dosage.value).toBe(500);

      // Convert to different unit
      const dosageInG = dosage.applyTransform((data) => ({
        value: (data.value ?? 0) / 1000,
        unit: 'g',
        code: 'g',
      }));

      expect(dosageInG.value).toBe(0.5);
      expect(dosageInG.unit).toBe('g');
    });

    it('should handle BMI calculation components', () => {
      const weight = new Quantity({
        value: 75,
        unit: 'kg',
        system: 'http://unitsofmeasure.org',
        code: 'kg',
      });

      const height = new Quantity({
        value: 1.75,
        unit: 'm',
        system: 'http://unitsofmeasure.org',
        code: 'm',
      });

      expect(weight.value).toBe(75);
      expect(height.value).toBe(1.75);

      // BMI = weight / height^2
      const bmi = (weight.value ?? 0) / Math.pow(height.value ?? 1, 2);
      expect(bmi).toBeCloseTo(24.49);
    });
  });
});
