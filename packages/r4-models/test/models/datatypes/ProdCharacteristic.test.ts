/**
 * ProdCharacteristic Model and Builder Tests
 *
 * Tests for the ProdCharacteristic datatype class and its builder.
 * ProdCharacteristic describes the physical characteristics of a medicinal product.
 */

import { describe, it, expect } from 'vitest';
import { ProdCharacteristic, ProdCharacteristicBuilder } from '../../../src/index.js';
import type { IProdCharacteristic } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const prodCharacteristics = {
  tablet: {
    height: { value: 8, unit: 'mm', system: 'http://unitsofmeasure.org', code: 'mm' },
    width: { value: 8, unit: 'mm', system: 'http://unitsofmeasure.org', code: 'mm' },
    depth: { value: 4, unit: 'mm', system: 'http://unitsofmeasure.org', code: 'mm' },
    weight: { value: 500, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' },
    shape: 'round',
    color: ['white'],
  } as IProdCharacteristic,
  capsule: {
    height: { value: 20, unit: 'mm' },
    width: { value: 7, unit: 'mm' },
    weight: { value: 750, unit: 'mg' },
    shape: 'oblong',
    color: ['blue', 'white'],
    imprint: ['500', 'ABC'],
  } as IProdCharacteristic,
  vial: {
    height: { value: 50, unit: 'mm' },
    externalDiameter: { value: 20, unit: 'mm' },
    nominalVolume: { value: 10, unit: 'mL', system: 'http://unitsofmeasure.org', code: 'mL' },
    color: ['clear'],
  } as IProdCharacteristic,
  withImage: {
    shape: 'oval',
    color: ['pink'],
    image: [
      {
        contentType: 'image/png',
        url: 'http://example.org/images/tablet.png',
        title: 'Tablet image',
      },
    ],
  } as IProdCharacteristic,
  withScoring: {
    shape: 'round',
    color: ['white'],
    scoring: {
      coding: [
        {
          system: 'http://example.org/scoring',
          code: 'cross',
          display: 'Cross scored',
        },
      ],
      text: 'Tablet can be divided into quarters',
    },
  } as IProdCharacteristic,
  complete: {
    height: { value: 10, unit: 'mm' },
    width: { value: 10, unit: 'mm' },
    depth: { value: 5, unit: 'mm' },
    weight: { value: 400, unit: 'mg' },
    nominalVolume: { value: 0.2, unit: 'mL' },
    externalDiameter: { value: 10, unit: 'mm' },
    shape: 'round',
    color: ['yellow', 'white'],
    imprint: ['100', 'PHARMA'],
    scoring: {
      coding: [{ code: 'bisect' }],
    },
  } as IProdCharacteristic,
};

describe('ProdCharacteristic', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const pc = new ProdCharacteristic({});
        expect(pc).toBeInstanceOf(ProdCharacteristic);
      });

      it('should create tablet characteristics', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.tablet);
        expect(pc.height?.value).toBe(8);
        expect(pc.width?.value).toBe(8);
        expect(pc.shape).toBe('round');
        expect(pc.color).toContain('white');
      });

      it('should create capsule characteristics', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.capsule);
        expect(pc.shape).toBe('oblong');
        expect(pc.color).toHaveLength(2);
        expect(pc.imprint).toHaveLength(2);
      });

      it('should create vial characteristics', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.vial);
        expect(pc.externalDiameter?.value).toBe(20);
        expect(pc.nominalVolume?.value).toBe(10);
      });

      it('should create characteristics with image', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.withImage);
        expect(pc.image).toHaveLength(1);
        expect(pc.image?.[0].contentType).toBe('image/png');
      });

      it('should create characteristics with scoring', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.withScoring);
        expect(pc.scoring?.coding?.[0].code).toBe('cross');
      });

      it('should create complete characteristics', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.complete);
        expect(pc.height?.value).toBe(10);
        expect(pc.color).toHaveLength(2);
        expect(pc.imprint).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.tablet);
        const json = pc.toJSON();

        expect(json.height?.value).toBe(8);
        expect(json.shape).toBe('round');
      });

      it('should omit undefined properties in JSON', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.tablet);
        const json = pc.toJSON();

        expect(json.height).toBeDefined();
        expect(json.shape).toBeDefined();
        expect(json).not.toHaveProperty('nominalVolume');
        expect(json).not.toHaveProperty('externalDiameter');
        expect(json).not.toHaveProperty('image');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ProdCharacteristic(prodCharacteristics.complete);
        expectSerializationRoundtrip(original, ProdCharacteristic);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IProdCharacteristic = {
          shape: 'oval',
          color: ['green'],
        };
        const pc = ProdCharacteristic.fromJSON(json);

        expect(pc).toBeInstanceOf(ProdCharacteristic);
        expect(pc.shape).toBe('oval');
      });

      it('should create identical instance from JSON', () => {
        const original = new ProdCharacteristic(prodCharacteristics.complete);
        const json = original.toJSON();
        const restored = ProdCharacteristic.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ProdCharacteristic(prodCharacteristics.tablet);
        const updated = original.with({ shape: 'oval' });

        expect(updated).not.toBe(original);
        expect(updated.shape).toBe('oval');
        expect(original.shape).toBe('round');
      });

      it('should apply transform function correctly', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.tablet);
        const transformed = pc.applyTransform((data) => ({
          shape: data.shape?.toUpperCase(),
        }));

        expect(transformed.shape).toBe('ROUND');
        expect(pc.shape).toBe('round');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ProdCharacteristic(prodCharacteristics.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned height', () => {
        const original = new ProdCharacteristic(prodCharacteristics.tablet);
        const cloned = original.clone();

        if (cloned.height) {
          cloned.height.value = 100;
        }

        expect(original.height?.value).toBe(8);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const pc = new ProdCharacteristic(prodCharacteristics.tablet);
        const str = pc.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ProdCharacteristic');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _shape extension', () => {
        const pc = new ProdCharacteristic({
          shape: 'round',
          _shape: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'shape-info' },
            ],
          },
        });

        expect(pc._shape?.extension?.[0]?.valueString).toBe('shape-info');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const pc = new ProdCharacteristic({
          id: 'pc-1',
          shape: 'round',
        });

        expect(pc.id).toBe('pc-1');
      });

      it('should handle extension property', () => {
        const pc = new ProdCharacteristic({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          shape: 'round',
        });

        expect(pc.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const pc = new ProdCharacteristicBuilder().build();
        expect(pc).toBeInstanceOf(ProdCharacteristic);
      });

      it('should build with dimensions', () => {
        const pc = new ProdCharacteristicBuilder()
          .setHeight({ value: 10, unit: 'mm' })
          .setWidth({ value: 10, unit: 'mm' })
          .setDepth({ value: 5, unit: 'mm' })
          .build();

        expect(pc.height?.value).toBe(10);
        expect(pc.width?.value).toBe(10);
        expect(pc.depth?.value).toBe(5);
      });

      it('should build with weight', () => {
        const pc = new ProdCharacteristicBuilder()
          .setWeight({ value: 500, unit: 'mg' })
          .build();

        expect(pc.weight?.value).toBe(500);
      });

      it('should build with volume properties', () => {
        const pc = new ProdCharacteristicBuilder()
          .setNominalVolume({ value: 10, unit: 'mL' })
          .setExternalDiameter({ value: 20, unit: 'mm' })
          .build();

        expect(pc.nominalVolume?.value).toBe(10);
        expect(pc.externalDiameter?.value).toBe(20);
      });

      it('should build with shape', () => {
        const pc = new ProdCharacteristicBuilder()
          .setShape('round')
          .build();

        expect(pc.shape).toBe('round');
      });

      it('should build with scoring', () => {
        const pc = new ProdCharacteristicBuilder()
          .setScoring({ coding: [{ code: 'bisect' }] })
          .build();

        expect(pc.scoring?.coding?.[0].code).toBe('bisect');
      });
    });

    describe('Array Properties', () => {
      it('should add colors', () => {
        const pc = new ProdCharacteristicBuilder()
          .addColor('white')
          .addColor('blue')
          .build();

        expect(pc.color).toHaveLength(2);
        expect(pc.color).toContain('white');
        expect(pc.color).toContain('blue');
      });

      it('should add imprints', () => {
        const pc = new ProdCharacteristicBuilder()
          .addImprint('500')
          .addImprint('PHARMA')
          .build();

        expect(pc.imprint).toHaveLength(2);
      });

      it('should add images', () => {
        const pc = new ProdCharacteristicBuilder()
          .addImage({ contentType: 'image/png', url: 'http://example.org/img1.png' })
          .addImage({ contentType: 'image/png', url: 'http://example.org/img2.png' })
          .build();

        expect(pc.image).toHaveLength(2);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ProdCharacteristicBuilder()
          .setShape('round')
          .addColor('white')
          .setWeight({ value: 500, unit: 'mg' });

        expect(builder).toBeInstanceOf(ProdCharacteristicBuilder);
      });

      it('should allow overwriting properties', () => {
        const pc = new ProdCharacteristicBuilder()
          .setShape('round')
          .setShape('oval')
          .build();

        expect(pc.shape).toBe('oval');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const pc = new ProdCharacteristicBuilder()
          .setId('pc-1')
          .setShape('round')
          .build();

        expect(pc.id).toBe('pc-1');
      });

      it('should add extension from ElementBuilder', () => {
        const pc = new ProdCharacteristicBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .build();

        expect(pc.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const pc = new ProdCharacteristicBuilder()
          .setShape('round')
          .addColor('white')
          .setWeight({ value: 500, unit: 'mg' })
          .build();

        const json = pc.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ProdCharacteristicBuilder()
          .setShape('round')
          .addColor('white')
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
    it('should work in medicinal product description scenario', () => {
      const tabletCharacteristics = new ProdCharacteristicBuilder()
        .setHeight({ value: 8, unit: 'mm' })
        .setWidth({ value: 8, unit: 'mm' })
        .setDepth({ value: 4, unit: 'mm' })
        .setWeight({ value: 500, unit: 'mg' })
        .setShape('round')
        .addColor('white')
        .setScoring({ coding: [{ code: 'bisect' }] })
        .build();

      expect(tabletCharacteristics.shape).toBe('round');
      expect(tabletCharacteristics.scoring?.coding?.[0].code).toBe('bisect');

      const json = tabletCharacteristics.toJSON();
      const restored = ProdCharacteristic.fromJSON(json);

      expect(restored.weight?.value).toBe(500);
    });

    it('should work in capsule description scenario', () => {
      const capsuleChar = new ProdCharacteristic(prodCharacteristics.capsule);

      expect(capsuleChar.shape).toBe('oblong');
      expect(capsuleChar.color).toContain('blue');
      expect(capsuleChar.imprint).toContain('500');
    });

    it('should work in injectable vial scenario', () => {
      const vialChar = new ProdCharacteristic(prodCharacteristics.vial);

      expect(vialChar.nominalVolume?.value).toBe(10);
      expect(vialChar.externalDiameter?.value).toBe(20);
    });

    it('should handle characteristic update', () => {
      const original = new ProdCharacteristic(prodCharacteristics.tablet);

      const updated = original.with({
        color: ['yellow'],
      });

      expect(updated.color).toContain('yellow');
      expect(original.color).toContain('white');
    });

    it('should work in product identification scenario', () => {
      const identificationChar = new ProdCharacteristicBuilder()
        .setShape('oval')
        .addColor('pink')
        .addImprint('100')
        .addImprint('BRAND')
        .addImage({
          contentType: 'image/jpeg',
          url: 'http://example.org/product.jpg',
        })
        .build();

      expect(identificationChar.imprint).toHaveLength(2);
      expect(identificationChar.image).toHaveLength(1);
    });

    it('should work in divisible tablet scenario', () => {
      const divisibleTablet = new ProdCharacteristic(prodCharacteristics.withScoring);

      expect(divisibleTablet.scoring?.text).toContain('quarters');
    });
  });
});
