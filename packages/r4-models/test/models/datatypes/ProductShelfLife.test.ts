/**
 * ProductShelfLife Model and Builder Tests
 *
 * Tests for the ProductShelfLife datatype class and its builder.
 * ProductShelfLife describes shelf-life and storage information for a medicinal product.
 */

import { describe, it, expect } from 'vitest';
import { ProductShelfLife, ProductShelfLifeBuilder } from '../../../src/index.js';
import type { IProductShelfLife } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const productShelfLifes = {
  simple: {
    type: {
      coding: [
        {
          system: 'http://example.org/shelf-life-type',
          code: 'packaged',
          display: 'Shelf life of the packaged product',
        },
      ],
    },
    period: {
      value: 36,
      unit: 'months',
      system: 'http://unitsofmeasure.org',
      code: 'mo',
    },
  } as IProductShelfLife,
  afterOpening: {
    type: {
      coding: [
        {
          system: 'http://example.org/shelf-life-type',
          code: 'after-opening',
          display: 'Shelf life after first opening',
        },
      ],
    },
    period: {
      value: 28,
      unit: 'days',
      system: 'http://unitsofmeasure.org',
      code: 'd',
    },
  } as IProductShelfLife,
  withIdentifier: {
    identifier: {
      system: 'http://example.org/shelf-life-identifiers',
      value: 'SL-001',
    },
    type: {
      coding: [{ code: 'packaged' }],
    },
    period: {
      value: 24,
      unit: 'months',
    },
  } as IProductShelfLife,
  withStoragePrecautions: {
    type: {
      coding: [
        {
          code: 'packaged',
          display: 'Packaged shelf life',
        },
      ],
    },
    period: {
      value: 18,
      unit: 'months',
    },
    specialPrecautionsForStorage: [
      {
        coding: [
          {
            system: 'http://example.org/storage-conditions',
            code: 'refrigerate',
            display: 'Store in refrigerator (2-8°C)',
          },
        ],
      },
      {
        coding: [
          {
            system: 'http://example.org/storage-conditions',
            code: 'protect-light',
            display: 'Protect from light',
          },
        ],
      },
    ],
  } as IProductShelfLife,
  reconstituted: {
    type: {
      coding: [
        {
          code: 'reconstituted',
          display: 'Shelf life after reconstitution',
        },
      ],
    },
    period: {
      value: 24,
      unit: 'hours',
      system: 'http://unitsofmeasure.org',
      code: 'h',
    },
    specialPrecautionsForStorage: [
      {
        coding: [
          {
            code: 'refrigerate',
            display: 'Store in refrigerator',
          },
        ],
      },
    ],
  } as IProductShelfLife,
  diluted: {
    type: {
      coding: [
        {
          code: 'diluted',
          display: 'Shelf life after dilution',
        },
      ],
    },
    period: {
      value: 4,
      unit: 'hours',
    },
    specialPrecautionsForStorage: [
      {
        coding: [{ code: 'room-temp', display: 'Store at room temperature' }],
      },
      {
        coding: [{ code: 'protect-light', display: 'Protect from light' }],
      },
      {
        coding: [{ code: 'use-immediately', display: 'Use immediately after preparation' }],
      },
    ],
  } as IProductShelfLife,
};

describe('ProductShelfLife', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const psl = new ProductShelfLife({});
        expect(psl).toBeInstanceOf(ProductShelfLife);
      });

      it('should create simple shelf life', () => {
        const psl = new ProductShelfLife(productShelfLifes.simple);
        expect(psl.type.coding?.[0].code).toBe('packaged');
        expect(psl.period.value).toBe(36);
        expect(psl.period.unit).toBe('months');
      });

      it('should create after opening shelf life', () => {
        const psl = new ProductShelfLife(productShelfLifes.afterOpening);
        expect(psl.type.coding?.[0].code).toBe('after-opening');
        expect(psl.period.value).toBe(28);
        expect(psl.period.unit).toBe('days');
      });

      it('should create shelf life with identifier', () => {
        const psl = new ProductShelfLife(productShelfLifes.withIdentifier);
        expect(psl.identifier?.value).toBe('SL-001');
      });

      it('should create shelf life with storage precautions', () => {
        const psl = new ProductShelfLife(productShelfLifes.withStoragePrecautions);
        expect(psl.specialPrecautionsForStorage).toHaveLength(2);
        expect(psl.specialPrecautionsForStorage?.[0].coding?.[0].code).toBe('refrigerate');
      });

      it('should create reconstituted shelf life', () => {
        const psl = new ProductShelfLife(productShelfLifes.reconstituted);
        expect(psl.type.coding?.[0].code).toBe('reconstituted');
        expect(psl.period.value).toBe(24);
        expect(psl.period.unit).toBe('hours');
      });

      it('should create diluted shelf life', () => {
        const psl = new ProductShelfLife(productShelfLifes.diluted);
        expect(psl.specialPrecautionsForStorage).toHaveLength(3);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const psl = new ProductShelfLife(productShelfLifes.withStoragePrecautions);
        const json = psl.toJSON();

        expect(json.type.coding?.[0].code).toBe('packaged');
        expect(json.specialPrecautionsForStorage).toHaveLength(2);
      });

      it('should omit undefined properties in JSON', () => {
        const psl = new ProductShelfLife(productShelfLifes.simple);
        const json = psl.toJSON();

        expect(json.type).toBeDefined();
        expect(json.period).toBeDefined();
        expect(json).not.toHaveProperty('identifier');
        expect(json).not.toHaveProperty('specialPrecautionsForStorage');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ProductShelfLife(productShelfLifes.withStoragePrecautions);
        expectSerializationRoundtrip(original, ProductShelfLife);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IProductShelfLife = {
          type: { coding: [{ code: 'packaged' }] },
          period: { value: 12, unit: 'months' },
        };
        const psl = ProductShelfLife.fromJSON(json);

        expect(psl).toBeInstanceOf(ProductShelfLife);
        expect(psl.period.value).toBe(12);
      });

      it('should create identical instance from JSON', () => {
        const original = new ProductShelfLife(productShelfLifes.withStoragePrecautions);
        const json = original.toJSON();
        const restored = ProductShelfLife.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ProductShelfLife(productShelfLifes.simple);
        const updated = original.with({ period: { value: 48, unit: 'months' } });

        expect(updated).not.toBe(original);
        expect(updated.period.value).toBe(48);
        expect(original.period.value).toBe(36);
      });

      it('should apply transform function correctly', () => {
        const psl = new ProductShelfLife(productShelfLifes.simple);
        const transformed = psl.applyTransform((data) => ({
          period: {
            ...data.period,
            value: (data.period.value || 0) * 2,
          },
        }));

        expect(transformed.period.value).toBe(72);
        expect(psl.period.value).toBe(36);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ProductShelfLife(productShelfLifes.withStoragePrecautions);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned period', () => {
        const original = new ProductShelfLife(productShelfLifes.simple);
        const cloned = original.clone();

        cloned.period.value = 100;

        expect(original.period.value).toBe(36);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const psl = new ProductShelfLife(productShelfLifes.simple);
        const str = psl.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ProductShelfLife');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const psl = new ProductShelfLife({
          id: 'psl-1',
          type: { coding: [{ code: 'packaged' }] },
          period: { value: 24, unit: 'months' },
        });

        expect(psl.id).toBe('psl-1');
      });

      it('should handle extension property', () => {
        const psl = new ProductShelfLife({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          type: { coding: [{ code: 'packaged' }] },
          period: { value: 24, unit: 'months' },
        });

        expect(psl.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const psl = new ProductShelfLifeBuilder().build();
        expect(psl).toBeInstanceOf(ProductShelfLife);
      });

      it('should build with type', () => {
        const psl = new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .build();

        expect(psl.type.coding?.[0].code).toBe('packaged');
      });

      it('should build with period', () => {
        const psl = new ProductShelfLifeBuilder()
          .setPeriod({ value: 24, unit: 'months' })
          .build();

        expect(psl.period.value).toBe(24);
      });

      it('should build with identifier', () => {
        const psl = new ProductShelfLifeBuilder()
          .setIdentifier({ value: 'SL-002' })
          .build();

        expect(psl.identifier?.value).toBe('SL-002');
      });

      it('should build complete shelf life', () => {
        const psl = new ProductShelfLifeBuilder()
          .setIdentifier({ system: 'http://example.org', value: 'SL-003' })
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 36, unit: 'months' })
          .addSpecialPrecautionsForStorage({ coding: [{ code: 'refrigerate' }] })
          .build();

        expect(psl.identifier?.value).toBe('SL-003');
        expect(psl.type.coding?.[0].code).toBe('packaged');
        expect(psl.period.value).toBe(36);
        expect(psl.specialPrecautionsForStorage).toHaveLength(1);
      });
    });

    describe('Array Properties', () => {
      it('should add storage precautions', () => {
        const psl = new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 18, unit: 'months' })
          .addSpecialPrecautionsForStorage({ coding: [{ code: 'refrigerate' }] })
          .addSpecialPrecautionsForStorage({ coding: [{ code: 'protect-light' }] })
          .build();

        expect(psl.specialPrecautionsForStorage).toHaveLength(2);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' });

        expect(builder).toBeInstanceOf(ProductShelfLifeBuilder);
      });

      it('should allow overwriting properties', () => {
        const psl = new ProductShelfLifeBuilder()
          .setPeriod({ value: 12, unit: 'months' })
          .setPeriod({ value: 24, unit: 'months' })
          .build();

        expect(psl.period.value).toBe(24);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const psl = new ProductShelfLifeBuilder()
          .setId('psl-1')
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' })
          .build();

        expect(psl.id).toBe('psl-1');
      });

      it('should add extension from ElementBuilder', () => {
        const psl = new ProductShelfLifeBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' })
          .build();

        expect(psl.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const psl = new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' })
          .build();

        const json = psl.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' })
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
    it('should work in medicinal product packaging scenario', () => {
      const packagingShelfLife = new ProductShelfLifeBuilder()
        .setType({
          coding: [{ code: 'packaged', display: 'Shelf life of packaged product' }],
        })
        .setPeriod({ value: 36, unit: 'months', system: 'http://unitsofmeasure.org', code: 'mo' })
        .addSpecialPrecautionsForStorage({
          coding: [{ code: 'room-temp', display: 'Store at room temperature' }],
        })
        .build();

      expect(packagingShelfLife.period.value).toBe(36);
      expect(packagingShelfLife.specialPrecautionsForStorage).toHaveLength(1);

      const json = packagingShelfLife.toJSON();
      const restored = ProductShelfLife.fromJSON(json);

      expect(restored.type.coding?.[0].code).toBe('packaged');
    });

    it('should work in vaccine storage scenario', () => {
      const vaccineShelfLife = new ProductShelfLife(productShelfLifes.withStoragePrecautions);

      expect(vaccineShelfLife.period.value).toBe(18);
      expect(vaccineShelfLife.specialPrecautionsForStorage?.[0].coding?.[0].code).toBe('refrigerate');
    });

    it('should work in reconstituted product scenario', () => {
      const reconstitutedLife = new ProductShelfLife(productShelfLifes.reconstituted);

      expect(reconstitutedLife.type.coding?.[0].code).toBe('reconstituted');
      expect(reconstitutedLife.period.value).toBe(24);
      expect(reconstitutedLife.period.unit).toBe('hours');
    });

    it('should handle shelf life update', () => {
      const original = new ProductShelfLife(productShelfLifes.simple);

      const updated = original.with({
        period: { value: 48, unit: 'months' },
      });

      expect(updated.period.value).toBe(48);
      expect(original.period.value).toBe(36);
    });

    it('should work in IV solution scenario', () => {
      const ivSolutionLife = new ProductShelfLife(productShelfLifes.diluted);

      expect(ivSolutionLife.period.value).toBe(4);
      expect(ivSolutionLife.period.unit).toBe('hours');
      expect(ivSolutionLife.specialPrecautionsForStorage).toHaveLength(3);
    });

    it('should work in multi-shelf-life product scenario', () => {
      const shelfLives = [
        new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'packaged' }] })
          .setPeriod({ value: 24, unit: 'months' })
          .build(),
        new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'after-opening' }] })
          .setPeriod({ value: 28, unit: 'days' })
          .build(),
        new ProductShelfLifeBuilder()
          .setType({ coding: [{ code: 'reconstituted' }] })
          .setPeriod({ value: 8, unit: 'hours' })
          .build(),
      ];

      expect(shelfLives).toHaveLength(3);
      expect(shelfLives.map((s) => s.type.coding?.[0].code)).toEqual(['packaged', 'after-opening', 'reconstituted']);
    });
  });
});
