/**
 * Ratio Model and Builder Tests
 *
 * Tests for the Ratio datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Ratio, RatioBuilder } from '../../../src/index.js';
import type { IRatio } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const ratios = {
  simple: {
    numerator: { value: 1 },
    denominator: { value: 1 },
  } as IRatio,
  medicationDose: {
    numerator: {
      value: 500,
      unit: 'mg',
      system: 'http://unitsofmeasure.org',
      code: 'mg',
    },
    denominator: {
      value: 1,
      unit: 'tablet',
      system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
      code: 'TAB',
    },
  } as IRatio,
  concentration: {
    numerator: {
      value: 10,
      unit: 'mg',
      system: 'http://unitsofmeasure.org',
      code: 'mg',
    },
    denominator: {
      value: 1,
      unit: 'mL',
      system: 'http://unitsofmeasure.org',
      code: 'mL',
    },
  } as IRatio,
  titratable: {
    numerator: {
      value: 2,
      unit: 'mcg',
      system: 'http://unitsofmeasure.org',
      code: 'ug',
    },
    denominator: {
      value: 1,
      unit: 'kg/min',
      system: 'http://unitsofmeasure.org',
      code: 'kg/min',
    },
  } as IRatio,
};

describe('Ratio', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ratio = new Ratio({});
        expect(ratio).toBeInstanceOf(Ratio);
        expect(ratio.numerator).toBeUndefined();
        expect(ratio.denominator).toBeUndefined();
      });

      it('should create simple ratio', () => {
        const ratio = new Ratio(ratios.simple);
        expect(ratio.numerator?.value).toBe(1);
        expect(ratio.denominator?.value).toBe(1);
      });

      it('should create medication dose ratio', () => {
        const ratio = new Ratio(ratios.medicationDose);
        expect(ratio.numerator?.value).toBe(500);
        expect(ratio.numerator?.unit).toBe('mg');
        expect(ratio.denominator?.value).toBe(1);
        expect(ratio.denominator?.unit).toBe('tablet');
      });

      it('should create concentration ratio', () => {
        const ratio = new Ratio(ratios.concentration);
        expect(ratio.numerator?.value).toBe(10);
        expect(ratio.numerator?.code).toBe('mg');
        expect(ratio.denominator?.value).toBe(1);
        expect(ratio.denominator?.code).toBe('mL');
      });

      it('should create titratable infusion ratio', () => {
        const ratio = new Ratio(ratios.titratable);
        expect(ratio.numerator?.unit).toBe('mcg');
        expect(ratio.denominator?.unit).toBe('kg/min');
      });

      it('should create ratio with only numerator', () => {
        const ratio = new Ratio({
          numerator: { value: 100, unit: 'mg' },
        });
        expect(ratio.numerator?.value).toBe(100);
        expect(ratio.denominator).toBeUndefined();
      });

      it('should create ratio with only denominator', () => {
        const ratio = new Ratio({
          denominator: { value: 1, unit: 'mL' },
        });
        expect(ratio.numerator).toBeUndefined();
        expect(ratio.denominator?.value).toBe(1);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ratio = new Ratio(ratios.medicationDose);
        const json = ratio.toJSON();

        expect(json.numerator?.value).toBe(500);
        expect(json.numerator?.unit).toBe('mg');
        expect(json.denominator?.value).toBe(1);
        expect(json.denominator?.unit).toBe('tablet');
      });

      it('should omit undefined properties in JSON', () => {
        const ratio = new Ratio({ numerator: { value: 5 } });
        const json = ratio.toJSON();

        expect(json.numerator).toBeDefined();
        expect(json).not.toHaveProperty('denominator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Ratio(ratios.concentration);
        expectSerializationRoundtrip(original, Ratio);
      });

      it('should preserve nested quantity properties', () => {
        const ratio = new Ratio(ratios.medicationDose);
        const json = ratio.toJSON();

        expect(json.numerator?.system).toBe('http://unitsofmeasure.org');
        expect(json.numerator?.code).toBe('mg');
        expect(json.denominator?.system).toBe('http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm');
        expect(json.denominator?.code).toBe('TAB');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IRatio = {
          numerator: { value: 250, unit: 'mg' },
          denominator: { value: 5, unit: 'mL' },
        };
        const ratio = Ratio.fromJSON(json);

        expect(ratio).toBeInstanceOf(Ratio);
        expect(ratio.numerator?.value).toBe(250);
        expect(ratio.denominator?.value).toBe(5);
      });

      it('should create identical instance from JSON', () => {
        const original = new Ratio(ratios.concentration);
        const json = original.toJSON();
        const restored = Ratio.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Ratio(ratios.simple);
        const updated = original.with({
          numerator: { value: 2 },
        });

        expect(updated).not.toBe(original);
        expect(updated.numerator?.value).toBe(2);
        expect(original.numerator?.value).toBe(1);
      });

      it('should preserve unchanged properties with .with()', () => {
        const original = new Ratio(ratios.medicationDose);
        const updated = original.with({
          numerator: { value: 1000, unit: 'mg' },
        });

        expect(updated.numerator?.value).toBe(1000);
        expect(updated.denominator?.value).toBe(1);
        expect(updated.denominator?.unit).toBe('tablet');
      });

      it('should apply transform function correctly', () => {
        const ratio = new Ratio(ratios.concentration);
        const doubled = ratio.applyTransform((data) => ({
          numerator: { ...data.numerator, value: (data.numerator?.value ?? 0) * 2 },
        }));

        expect(doubled.numerator?.value).toBe(20);
        expect(ratio.numerator?.value).toBe(10);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Ratio(ratios.medicationDose);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned nested object', () => {
        const original = new Ratio(ratios.concentration);
        const cloned = original.clone();

        if (cloned.numerator) {
          cloned.numerator.value = 999;
        }

        expect(original.numerator?.value).toBe(10);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ratio = new Ratio(ratios.simple);
        const str = ratio.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Ratio');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const ratio = new Ratio({
          id: 'ratio-1',
          numerator: { value: 1 },
          denominator: { value: 1 },
        });

        expect(ratio.id).toBe('ratio-1');
      });

      it('should handle extension property', () => {
        const ratio = new Ratio({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          numerator: { value: 1 },
        });

        expect(ratio.extension).toHaveLength(1);
        expect(ratio.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ratio = new RatioBuilder().build();
        expect(ratio).toBeInstanceOf(Ratio);
      });

      it('should build with numerator only', () => {
        const ratio = new RatioBuilder()
          .setNumerator({ value: 100, unit: 'mg' })
          .build();

        expect(ratio.numerator?.value).toBe(100);
        expect(ratio.numerator?.unit).toBe('mg');
      });

      it('should build with denominator only', () => {
        const ratio = new RatioBuilder()
          .setDenominator({ value: 1, unit: 'mL' })
          .build();

        expect(ratio.denominator?.value).toBe(1);
        expect(ratio.denominator?.unit).toBe('mL');
      });

      it('should build with all properties', () => {
        const ratio = new RatioBuilder()
          .setNumerator({
            value: 500,
            unit: 'mg',
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          })
          .setDenominator({
            value: 1,
            unit: 'tablet',
          })
          .build();

        expect(ratio.numerator?.value).toBe(500);
        expect(ratio.denominator?.value).toBe(1);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new RatioBuilder()
          .setNumerator({ value: 10 })
          .setDenominator({ value: 1 });

        expect(builder).toBeInstanceOf(RatioBuilder);
      });

      it('should allow overwriting properties', () => {
        const ratio = new RatioBuilder()
          .setNumerator({ value: 5 })
          .setNumerator({ value: 10 })
          .build();

        expect(ratio.numerator?.value).toBe(10);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ratio = new RatioBuilder()
          .setId('ratio-1')
          .setNumerator({ value: 1 })
          .build();

        expect(ratio.id).toBe('ratio-1');
      });

      it('should add extension from ElementBuilder', () => {
        const ratio = new RatioBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setNumerator({ value: 1 })
          .build();

        expect(ratio.extension).toHaveLength(1);
        expect(ratio.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const ratio = new RatioBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(ratio.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new RatioBuilder().setNumerator({ value: 5 });
        const first = builder.build();

        builder.setNumerator({ value: 10 });
        const second = builder.build();

        expect(first.numerator?.value).toBe(5);
        expect(second.numerator?.value).toBe(10);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ratio = new RatioBuilder()
          .setNumerator({ value: 250, unit: 'mg' })
          .setDenominator({ value: 5, unit: 'mL' })
          .build();

        const json = ratio.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new RatioBuilder()
          .setNumerator({ value: 10, unit: 'mg' })
          .setDenominator({ value: 1, unit: 'mL' })
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
    it('should work in medication dose scenario', () => {
      const doseRatio = new RatioBuilder()
        .setNumerator({
          value: 500,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        })
        .setDenominator({
          value: 1,
          unit: 'tablet',
        })
        .build();

      expect(doseRatio.numerator?.value).toBe(500);
      expect(doseRatio.numerator?.unit).toBe('mg');
      expect(doseRatio.denominator?.value).toBe(1);

      const json = doseRatio.toJSON();
      const restored = Ratio.fromJSON(json);

      expect(restored.numerator?.value).toBe(500);
    });

    it('should work in concentration scenario', () => {
      const concentration = new Ratio({
        numerator: {
          value: 10,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
        denominator: {
          value: 1,
          unit: 'mL',
          system: 'http://unitsofmeasure.org',
          code: 'mL',
        },
      });

      expect(concentration.numerator?.value).toBe(10);
      expect(concentration.denominator?.value).toBe(1);
    });

    it('should work in IV infusion rate scenario', () => {
      const infusionRate = new RatioBuilder()
        .setNumerator({
          value: 100,
          unit: 'mL',
          system: 'http://unitsofmeasure.org',
          code: 'mL',
        })
        .setDenominator({
          value: 1,
          unit: 'h',
          system: 'http://unitsofmeasure.org',
          code: 'h',
        })
        .build();

      expect(infusionRate.numerator?.value).toBe(100);
      expect(infusionRate.numerator?.unit).toBe('mL');
      expect(infusionRate.denominator?.unit).toBe('h');
    });

    it('should handle ratio modification for dose adjustment', () => {
      const originalDose = new Ratio(ratios.medicationDose);

      const adjustedDose = originalDose.with({
        numerator: {
          ...originalDose.numerator,
          value: 250, // Reduced dose
        },
      });

      expect(adjustedDose.numerator?.value).toBe(250);
      expect(originalDose.numerator?.value).toBe(500);
      expect(adjustedDose.denominator?.value).toBe(1);
    });

    it('should handle unit conversion scenario', () => {
      const ratioInMg = new Ratio({
        numerator: { value: 1000, unit: 'mg' },
        denominator: { value: 1, unit: 'tablet' },
      });

      const ratioInG = ratioInMg.applyTransform((data) => ({
        numerator: {
          value: (data.numerator?.value ?? 0) / 1000,
          unit: 'g',
          system: 'http://unitsofmeasure.org',
          code: 'g',
        },
      }));

      expect(ratioInG.numerator?.value).toBe(1);
      expect(ratioInG.numerator?.unit).toBe('g');
    });
  });
});
