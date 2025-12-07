/**
 * SubstanceAmount Model and Builder Tests
 *
 * Tests for the SubstanceAmount datatype class and its builder.
 * SubstanceAmount describes the quantity of a chemical substance.
 */

import { describe, it, expect } from 'vitest';
import { SubstanceAmount, SubstanceAmountBuilder } from '../../../src/index.js';
import type { ISubstanceAmount } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const substanceAmounts = {
  withQuantity: {
    amountQuantity: {
      value: 500,
      unit: 'mg',
      system: 'http://unitsofmeasure.org',
      code: 'mg',
    },
    amountType: {
      coding: [
        {
          system: 'http://example.org/amount-type',
          code: 'weight',
          display: 'Weight',
        },
      ],
    },
  } as ISubstanceAmount,
  withRange: {
    amountRange: {
      low: { value: 450, unit: 'mg' },
      high: { value: 550, unit: 'mg' },
    },
    amountType: {
      coding: [
        {
          code: 'weight-range',
          display: 'Weight Range',
        },
      ],
    },
  } as ISubstanceAmount,
  withString: {
    amountString: 'approximately 500 mg',
    amountType: {
      coding: [{ code: 'approximate' }],
    },
  } as ISubstanceAmount,
  withText: {
    amountQuantity: {
      value: 100,
      unit: '%',
    },
    amountType: {
      coding: [{ code: 'percentage' }],
    },
    amountText: 'Active ingredient concentration',
  } as ISubstanceAmount,
  withReferenceRange: {
    amountQuantity: {
      value: 95,
      unit: '%',
    },
    amountType: {
      coding: [{ code: 'purity' }],
    },
    referenceRange: {
      lowLimit: { value: 90, unit: '%' },
      highLimit: { value: 110, unit: '%' },
    },
  } as ISubstanceAmount,
  moleRatio: {
    amountQuantity: {
      value: 1.5,
      unit: 'mol/mol',
    },
    amountType: {
      coding: [
        {
          code: 'mole-ratio',
          display: 'Mole Ratio',
        },
      ],
    },
    amountText: 'Ratio of ingredient A to ingredient B',
  } as ISubstanceAmount,
  concentration: {
    amountQuantity: {
      value: 10,
      unit: 'mg/mL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/mL',
    },
    amountType: {
      coding: [{ code: 'concentration' }],
    },
  } as ISubstanceAmount,
};

describe('SubstanceAmount', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const sa = new SubstanceAmount({});
        expect(sa).toBeInstanceOf(SubstanceAmount);
      });

      it('should create substance amount with quantity', () => {
        const sa = new SubstanceAmount(substanceAmounts.withQuantity);
        expect(sa.amountQuantity?.value).toBe(500);
        expect(sa.amountQuantity?.unit).toBe('mg');
        expect(sa.amountType?.coding?.[0].code).toBe('weight');
      });

      it('should create substance amount with range', () => {
        const sa = new SubstanceAmount(substanceAmounts.withRange);
        expect(sa.amountRange?.low?.value).toBe(450);
        expect(sa.amountRange?.high?.value).toBe(550);
      });

      it('should create substance amount with string', () => {
        const sa = new SubstanceAmount(substanceAmounts.withString);
        expect(sa.amountString).toBe('approximately 500 mg');
      });

      it('should create substance amount with text', () => {
        const sa = new SubstanceAmount(substanceAmounts.withText);
        expect(sa.amountText).toBe('Active ingredient concentration');
      });

      it('should create substance amount with reference range', () => {
        const sa = new SubstanceAmount(substanceAmounts.withReferenceRange);
        expect(sa.referenceRange?.lowLimit?.value).toBe(90);
        expect(sa.referenceRange?.highLimit?.value).toBe(110);
      });

      it('should create mole ratio amount', () => {
        const sa = new SubstanceAmount(substanceAmounts.moleRatio);
        expect(sa.amountQuantity?.unit).toBe('mol/mol');
        expect(sa.amountType?.coding?.[0].code).toBe('mole-ratio');
      });

      it('should create concentration amount', () => {
        const sa = new SubstanceAmount(substanceAmounts.concentration);
        expect(sa.amountQuantity?.unit).toBe('mg/mL');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const sa = new SubstanceAmount(substanceAmounts.withQuantity);
        const json = sa.toJSON();

        expect(json.amountQuantity?.value).toBe(500);
        expect(json.amountType?.coding?.[0].code).toBe('weight');
      });

      it('should omit undefined properties in JSON', () => {
        const sa = new SubstanceAmount(substanceAmounts.withQuantity);
        const json = sa.toJSON();

        expect(json.amountQuantity).toBeDefined();
        expect(json).not.toHaveProperty('amountRange');
        expect(json).not.toHaveProperty('amountString');
        expect(json).not.toHaveProperty('referenceRange');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new SubstanceAmount(substanceAmounts.withReferenceRange);
        expectSerializationRoundtrip(original, SubstanceAmount);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ISubstanceAmount = {
          amountQuantity: { value: 250, unit: 'mg' },
        };
        const sa = SubstanceAmount.fromJSON(json);

        expect(sa).toBeInstanceOf(SubstanceAmount);
        expect(sa.amountQuantity?.value).toBe(250);
      });

      it('should create identical instance from JSON', () => {
        const original = new SubstanceAmount(substanceAmounts.withReferenceRange);
        const json = original.toJSON();
        const restored = SubstanceAmount.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new SubstanceAmount(substanceAmounts.withQuantity);
        const updated = original.with({
          amountQuantity: { value: 750, unit: 'mg' },
        });

        expect(updated).not.toBe(original);
        expect(updated.amountQuantity?.value).toBe(750);
        expect(original.amountQuantity?.value).toBe(500);
      });

      it('should apply transform function correctly', () => {
        const sa = new SubstanceAmount(substanceAmounts.withQuantity);
        const transformed = sa.applyTransform((data) => ({
          amountQuantity: {
            ...data.amountQuantity,
            value: (data.amountQuantity?.value || 0) * 2,
          },
        }));

        expect(transformed.amountQuantity?.value).toBe(1000);
        expect(sa.amountQuantity?.value).toBe(500);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new SubstanceAmount(substanceAmounts.withReferenceRange);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned quantity', () => {
        const original = new SubstanceAmount(substanceAmounts.withQuantity);
        const cloned = original.clone();

        if (cloned.amountQuantity) {
          cloned.amountQuantity.value = 999;
        }

        expect(original.amountQuantity?.value).toBe(500);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const sa = new SubstanceAmount(substanceAmounts.withQuantity);
        const str = sa.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('SubstanceAmount');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _amountString extension', () => {
        const sa = new SubstanceAmount({
          amountString: 'test',
          _amountString: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'string-info' },
            ],
          },
        });

        expect(sa._amountString?.extension?.[0]?.valueString).toBe('string-info');
      });

      it('should handle _amountText extension', () => {
        const sa = new SubstanceAmount({
          amountText: 'test',
          _amountText: {
            id: 'text-ext',
          },
        });

        expect(sa._amountText?.id).toBe('text-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const sa = new SubstanceAmount({
          id: 'sa-1',
          amountQuantity: { value: 100 },
        });

        expect(sa.id).toBe('sa-1');
      });

      it('should handle extension property', () => {
        const sa = new SubstanceAmount({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          amountQuantity: { value: 100 },
        });

        expect(sa.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const sa = new SubstanceAmountBuilder().build();
        expect(sa).toBeInstanceOf(SubstanceAmount);
      });

      it('should build with amount type', () => {
        const sa = new SubstanceAmountBuilder()
          .setAmountType({ coding: [{ code: 'weight' }] })
          .build();

        expect(sa.amountType?.coding?.[0].code).toBe('weight');
      });

      it('should build with amount text', () => {
        const sa = new SubstanceAmountBuilder()
          .setAmountText('Active ingredient amount')
          .build();

        expect(sa.amountText).toBe('Active ingredient amount');
      });

      it('should build with reference range', () => {
        const sa = new SubstanceAmountBuilder()
          .setReferenceRange({
            lowLimit: { value: 90, unit: '%' },
            highLimit: { value: 110, unit: '%' },
          })
          .build();

        expect(sa.referenceRange?.lowLimit?.value).toBe(90);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new SubstanceAmountBuilder()
          .setAmountType({ coding: [{ code: 'weight' }] })
          .setAmountText('Test');

        expect(builder).toBeInstanceOf(SubstanceAmountBuilder);
      });

      it('should allow overwriting properties', () => {
        const sa = new SubstanceAmountBuilder()
          .setAmountText('First')
          .setAmountText('Second')
          .build();

        expect(sa.amountText).toBe('Second');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const sa = new SubstanceAmountBuilder()
          .setId('sa-1')
          .setAmountType({ coding: [{ code: 'weight' }] })
          .build();

        expect(sa.id).toBe('sa-1');
      });

      it('should add extension from ElementBuilder', () => {
        const sa = new SubstanceAmountBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .build();

        expect(sa.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const sa = new SubstanceAmountBuilder()
          .setAmountType({ coding: [{ code: 'weight' }] })
          .setAmountText('Test amount')
          .build();

        const json = sa.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new SubstanceAmountBuilder()
          .setAmountType({ coding: [{ code: 'weight' }] })
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
    it('should work in drug substance specification scenario', () => {
      const activeIngredient = new SubstanceAmountBuilder()
        .setAmountType({
          coding: [{ code: 'weight', display: 'Weight' }],
        })
        .setAmountText('Active pharmaceutical ingredient')
        .setReferenceRange({
          lowLimit: { value: 95, unit: '%' },
          highLimit: { value: 105, unit: '%' },
        })
        .build();

      expect(activeIngredient.amountType?.coding?.[0].code).toBe('weight');
      expect(activeIngredient.referenceRange?.lowLimit?.value).toBe(95);
    });

    it('should work in substance definition scenario', () => {
      const substanceDef = new SubstanceAmount(substanceAmounts.withQuantity);

      expect(substanceDef.amountQuantity?.value).toBe(500);
      expect(substanceDef.amountType?.coding?.[0].code).toBe('weight');

      const json = substanceDef.toJSON();
      const restored = SubstanceAmount.fromJSON(json);

      expect(restored.amountQuantity?.unit).toBe('mg');
    });

    it('should work in impurity specification scenario', () => {
      const impurity = new SubstanceAmount({
        amountQuantity: {
          value: 0.1,
          unit: '%',
          comparator: '<',
        },
        amountType: {
          coding: [{ code: 'limit', display: 'Upper limit' }],
        },
        amountText: 'Maximum allowed impurity level',
      });

      expect(impurity.amountQuantity?.comparator).toBe('<');
    });

    it('should handle substance amount update', () => {
      const original = new SubstanceAmount(substanceAmounts.withQuantity);

      const updated = original.with({
        amountQuantity: { value: 600, unit: 'mg' },
      });

      expect(updated.amountQuantity?.value).toBe(600);
      expect(original.amountQuantity?.value).toBe(500);
    });

    it('should work in molar ratio scenario', () => {
      const molarRatio = new SubstanceAmount(substanceAmounts.moleRatio);

      expect(molarRatio.amountQuantity?.value).toBe(1.5);
      expect(molarRatio.amountType?.coding?.[0].code).toBe('mole-ratio');
    });

    it('should work in concentration specification scenario', () => {
      const concentration = new SubstanceAmount(substanceAmounts.concentration);

      expect(concentration.amountQuantity?.value).toBe(10);
      expect(concentration.amountQuantity?.unit).toBe('mg/mL');
    });

    it('should work in range-based specification scenario', () => {
      const rangeAmount = new SubstanceAmount(substanceAmounts.withRange);

      expect(rangeAmount.amountRange?.low?.value).toBe(450);
      expect(rangeAmount.amountRange?.high?.value).toBe(550);
    });
  });
});
