/**
 * Range Model and Builder Tests
 *
 * Tests for the Range datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Range, RangeBuilder } from '../../../src/index.js';
import type { IRange } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Range', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const range = new Range({});
        expect(range).toBeInstanceOf(Range);
        expect(range.low).toBeUndefined();
        expect(range.high).toBeUndefined();
      });

      it('should create instance with low only', () => {
        const range = new Range({
          low: { value: 10, unit: 'mg' },
        });
        expect(range.low?.value).toBe(10);
        expect(range.low?.unit).toBe('mg');
        expect(range.high).toBeUndefined();
      });

      it('should create instance with high only', () => {
        const range = new Range({
          high: { value: 100, unit: 'mg' },
        });
        expect(range.low).toBeUndefined();
        expect(range.high?.value).toBe(100);
      });

      it('should create instance with low and high', () => {
        const range = new Range({
          low: { value: 10, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' },
          high: { value: 100, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' },
        });
        expect(range.low?.value).toBe(10);
        expect(range.high?.value).toBe(100);
        expect(range.low?.system).toBe('http://unitsofmeasure.org');
      });

      it('should create dosage range', () => {
        const range = new Range({
          low: { value: 250, unit: 'mg' },
          high: { value: 500, unit: 'mg' },
        });
        expect(range.low?.value).toBe(250);
        expect(range.high?.value).toBe(500);
      });

      it('should create age range', () => {
        const range = new Range({
          low: { value: 18, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
          high: { value: 65, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
        });
        expect(range.low?.value).toBe(18);
        expect(range.high?.value).toBe(65);
        expect(range.low?.code).toBe('a');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const range = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const json = range.toJSON();

        expect(json.low?.value).toBe(10);
        expect(json.high?.value).toBe(100);
      });

      it('should omit undefined properties in JSON', () => {
        const range = new Range({ low: { value: 10 } });
        const json = range.toJSON();

        expect(json.low?.value).toBe(10);
        expect(json).not.toHaveProperty('high');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg', system: 'http://unitsofmeasure.org' },
          high: { value: 100, unit: 'mg', system: 'http://unitsofmeasure.org' },
        });
        expectSerializationRoundtrip(original, Range);
      });

      it('should preserve quantity details in JSON', () => {
        const range = new Range({
          low: {
            value: 10,
            unit: 'mg',
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
        });
        const json = range.toJSON();

        expect(json.low?.value).toBe(10);
        expect(json.low?.unit).toBe('mg');
        expect(json.low?.system).toBe('http://unitsofmeasure.org');
        expect(json.low?.code).toBe('mg');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IRange = {
          low: { value: 5, unit: 'g' },
          high: { value: 10, unit: 'g' },
        };
        const range = Range.fromJSON(json);

        expect(range).toBeInstanceOf(Range);
        expect(range.low?.value).toBe(5);
        expect(range.high?.value).toBe(10);
      });

      it('should create identical instance from JSON', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const json = original.toJSON();
        const restored = Range.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const updated = original.with({ high: { value: 200, unit: 'mg' } });

        expect(updated).not.toBe(original);
        expect(updated.high?.value).toBe(200);
        expect(updated.low?.value).toBe(10);
        expect(original.high?.value).toBe(100);
      });

      it('should allow changing both limits with .with()', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const updated = original.with({
          low: { value: 20, unit: 'mg' },
          high: { value: 200, unit: 'mg' },
        });

        expect(updated.low?.value).toBe(20);
        expect(updated.high?.value).toBe(200);
        expect(original.low?.value).toBe(10);
        expect(original.high?.value).toBe(100);
      });

      it('should apply transform function correctly', () => {
        const range = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const transformed = range.applyTransform((data) => ({
          low: { value: (data.low?.value ?? 0) * 2, unit: data.low?.unit },
          high: { value: (data.high?.value ?? 0) * 2, unit: data.high?.unit },
        }));

        expect(transformed.low?.value).toBe(20);
        expect(transformed.high?.value).toBe(200);
        expect(range.low?.value).toBe(10);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned quantities', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg' },
          high: { value: 100, unit: 'mg' },
        });
        const cloned = original.clone();

        if (cloned.low) {
          cloned.low.value = 999;
        }

        expect(original.low?.value).toBe(10);
      });

      it('should clone all properties', () => {
        const original = new Range({
          low: { value: 10, unit: 'mg', system: 'http://unitsofmeasure.org' },
          high: { value: 100, unit: 'mg', system: 'http://unitsofmeasure.org' },
        });
        const cloned = original.clone();

        expect(cloned.low).toEqual(original.low);
        expect(cloned.high).toEqual(original.high);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const range = new Range({ low: { value: 10 } });
        const str = range.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Range');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const range = new RangeBuilder().build();
        expect(range).toBeInstanceOf(Range);
      });

      it('should build with low only', () => {
        const range = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .build();

        expect(range.low?.value).toBe(10);
        expect(range.high).toBeUndefined();
      });

      it('should build with high only', () => {
        const range = new RangeBuilder()
          .setHigh({ value: 100, unit: 'mg' })
          .build();

        expect(range.low).toBeUndefined();
        expect(range.high?.value).toBe(100);
      });

      it('should build with both low and high', () => {
        const range = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .setHigh({ value: 100, unit: 'mg' })
          .build();

        expect(range.low?.value).toBe(10);
        expect(range.high?.value).toBe(100);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .setHigh({ value: 100, unit: 'mg' });

        expect(builder).toBeInstanceOf(RangeBuilder);
      });

      it('should allow overwriting properties', () => {
        const range = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .setLow({ value: 20, unit: 'mg' })
          .build();

        expect(range.low?.value).toBe(20);
      });
    });

    describe('Common Range Types', () => {
      it('should build medication dosage range', () => {
        const range = new RangeBuilder()
          .setLow({ value: 250, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' })
          .setHigh({ value: 500, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' })
          .build();

        expect(range.low?.value).toBe(250);
        expect(range.high?.value).toBe(500);
      });

      it('should build age range', () => {
        const range = new RangeBuilder()
          .setLow({ value: 18, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' })
          .setHigh({ value: 65, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' })
          .build();

        expect(range.low?.value).toBe(18);
        expect(range.high?.value).toBe(65);
      });

      it('should build weight range', () => {
        const range = new RangeBuilder()
          .setLow({ value: 50, unit: 'kg', system: 'http://unitsofmeasure.org', code: 'kg' })
          .setHigh({ value: 100, unit: 'kg', system: 'http://unitsofmeasure.org', code: 'kg' })
          .build();

        expect(range.low?.value).toBe(50);
        expect(range.high?.value).toBe(100);
      });

      it('should build reference range for lab values', () => {
        const range = new RangeBuilder()
          .setLow({ value: 70, unit: 'mg/dL', system: 'http://unitsofmeasure.org', code: 'mg/dL' })
          .setHigh({ value: 100, unit: 'mg/dL', system: 'http://unitsofmeasure.org', code: 'mg/dL' })
          .build();

        expect(range.low?.value).toBe(70);
        expect(range.high?.value).toBe(100);
        expect(range.low?.unit).toBe('mg/dL');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const range = new RangeBuilder()
          .setId('range-1')
          .setLow({ value: 10 })
          .build();

        expect(range.id).toBe('range-1');
      });

      it('should add extension from ElementBuilder', () => {
        const range = new RangeBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setLow({ value: 10 })
          .build();

        expect(range.extension).toHaveLength(1);
        expect(range.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const range = new RangeBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(range.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new RangeBuilder().setLow({ value: 10 });
        const first = builder.build();

        builder.setLow({ value: 20 });
        const second = builder.build();

        expect(first.low?.value).toBe(10);
        expect(second.low?.value).toBe(20);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const range = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .setHigh({ value: 100, unit: 'mg' })
          .build();

        const json = range.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new RangeBuilder()
          .setLow({ value: 10, unit: 'mg' })
          .setHigh({ value: 100, unit: 'mg' })
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
    it('should work in typical observation reference range', () => {
      // Normal fasting blood glucose range
      const glucoseRange = new RangeBuilder()
        .setLow({ value: 70, unit: 'mg/dL', system: 'http://unitsofmeasure.org', code: 'mg/dL' })
        .setHigh({ value: 100, unit: 'mg/dL', system: 'http://unitsofmeasure.org', code: 'mg/dL' })
        .build();

      expect(glucoseRange.low?.value).toBe(70);
      expect(glucoseRange.high?.value).toBe(100);

      const json = glucoseRange.toJSON();
      const restored = Range.fromJSON(json);

      expect(restored.low?.value).toBe(70);
      expect(restored.high?.value).toBe(100);
    });

    it('should handle medication dosage range', () => {
      const dosageRange = new Range({
        low: { value: 500, unit: 'mg' },
        high: { value: 1000, unit: 'mg' },
      });

      // Increase dosage
      const increasedDosage = dosageRange.with({
        low: { value: 750, unit: 'mg' },
        high: { value: 1500, unit: 'mg' },
      });

      expect(increasedDosage.low?.value).toBe(750);
      expect(increasedDosage.high?.value).toBe(1500);
      expect(dosageRange.low?.value).toBe(500);
    });

    it('should handle pediatric age ranges', () => {
      const infantRange = new Range({
        low: { value: 0, unit: 'years' },
        high: { value: 1, unit: 'years' },
      });

      const toddlerRange = new Range({
        low: { value: 1, unit: 'years' },
        high: { value: 3, unit: 'years' },
      });

      const childRange = new Range({
        low: { value: 3, unit: 'years' },
        high: { value: 12, unit: 'years' },
      });

      expect(infantRange.high?.value).toBe(1);
      expect(toddlerRange.low?.value).toBe(1);
      expect(childRange.high?.value).toBe(12);
    });

    it('should handle temperature ranges', () => {
      // Normal body temperature range
      const normalTemp = new RangeBuilder()
        .setLow({ value: 36.1, unit: 'Cel', system: 'http://unitsofmeasure.org', code: 'Cel' })
        .setHigh({ value: 37.2, unit: 'Cel', system: 'http://unitsofmeasure.org', code: 'Cel' })
        .build();

      expect(normalTemp.low?.value).toBe(36.1);
      expect(normalTemp.high?.value).toBe(37.2);
      expect(normalTemp.low?.code).toBe('Cel');
    });
  });
});
