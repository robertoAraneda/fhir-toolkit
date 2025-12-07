/**
 * Distance Model and Builder Tests
 *
 * Tests for the Distance datatype class and its builder.
 * Distance represents a length - a value with a unit that is a physical distance.
 */

import { describe, it, expect } from 'vitest';
import { Distance, DistanceBuilder } from '../../../src/index.js';
import type { IDistance } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const distances = {
  simple: {
    value: 10,
    unit: 'km',
  } as IDistance,
  ucumComplete: {
    value: 5.5,
    unit: 'kilometers',
    system: 'http://unitsofmeasure.org',
    code: 'km',
  } as IDistance,
  meters: {
    value: 100,
    unit: 'm',
    system: 'http://unitsofmeasure.org',
    code: 'm',
  } as IDistance,
  miles: {
    value: 3.2,
    unit: 'miles',
    system: 'http://unitsofmeasure.org',
    code: '[mi_i]',
  } as IDistance,
  centimeters: {
    value: 175,
    unit: 'cm',
    system: 'http://unitsofmeasure.org',
    code: 'cm',
  } as IDistance,
  lessThan: {
    value: 50,
    comparator: '<',
    unit: 'km',
    system: 'http://unitsofmeasure.org',
    code: 'km',
  } as IDistance,
};

describe('Distance', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const distance = new Distance({});
        expect(distance).toBeInstanceOf(Distance);
        expect(distance.value).toBeUndefined();
        expect(distance.unit).toBeUndefined();
      });

      it('should create simple distance', () => {
        const distance = new Distance(distances.simple);
        expect(distance.value).toBe(10);
        expect(distance.unit).toBe('km');
      });

      it('should create complete UCUM distance', () => {
        const distance = new Distance(distances.ucumComplete);
        expect(distance.value).toBe(5.5);
        expect(distance.unit).toBe('kilometers');
        expect(distance.system).toBe('http://unitsofmeasure.org');
        expect(distance.code).toBe('km');
      });

      it('should create distance in meters', () => {
        const distance = new Distance(distances.meters);
        expect(distance.value).toBe(100);
        expect(distance.code).toBe('m');
      });

      it('should create distance in miles', () => {
        const distance = new Distance(distances.miles);
        expect(distance.value).toBe(3.2);
        expect(distance.code).toBe('[mi_i]');
      });

      it('should create distance in centimeters', () => {
        const distance = new Distance(distances.centimeters);
        expect(distance.value).toBe(175);
        expect(distance.code).toBe('cm');
      });

      it('should create distance with comparator', () => {
        const distance = new Distance(distances.lessThan);
        expect(distance.value).toBe(50);
        expect(distance.comparator).toBe('<');
      });

      it('should handle all comparator types', () => {
        const comparators = ['<', '<=', '>=', '>'] as const;
        comparators.forEach((comparator) => {
          const distance = new Distance({
            value: 10,
            comparator,
            unit: 'km',
          });
          expect(distance.comparator).toBe(comparator);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const distance = new Distance(distances.ucumComplete);
        const json = distance.toJSON();

        expect(json.value).toBe(5.5);
        expect(json.unit).toBe('kilometers');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('km');
      });

      it('should omit undefined properties in JSON', () => {
        const distance = new Distance({ value: 10 });
        const json = distance.toJSON();

        expect(json.value).toBe(10);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');
        expect(json).not.toHaveProperty('comparator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Distance(distances.ucumComplete);
        expectSerializationRoundtrip(original, Distance);
      });

      it('should preserve comparator in JSON', () => {
        const distance = new Distance(distances.lessThan);
        const json = distance.toJSON();

        expect(json.comparator).toBe('<');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IDistance = {
          value: 42,
          unit: 'km',
          system: 'http://unitsofmeasure.org',
          code: 'km',
        };
        const distance = Distance.fromJSON(json);

        expect(distance).toBeInstanceOf(Distance);
        expect(distance.value).toBe(42);
        expect(distance.unit).toBe('km');
      });

      it('should create identical instance from JSON', () => {
        const original = new Distance(distances.ucumComplete);
        const json = original.toJSON();
        const restored = Distance.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Distance({ value: 10, unit: 'km' });
        const updated = original.with({ value: 20 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(20);
        expect(updated.unit).toBe('km');
        expect(original.value).toBe(10);
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Distance(distances.simple);
        const updated = original.with({
          value: 10000,
          unit: 'm',
          code: 'm',
        });

        expect(updated.value).toBe(10000);
        expect(updated.unit).toBe('m');
        expect(updated.code).toBe('m');
        expect(original.value).toBe(10);
      });

      it('should apply transform function correctly', () => {
        const distance = new Distance({ value: 5, unit: 'km' });
        const doubled = distance.applyTransform((data) => ({
          value: (data.value ?? 0) * 2,
        }));

        expect(doubled.value).toBe(10);
        expect(distance.value).toBe(5);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Distance(distances.ucumComplete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Distance(distances.lessThan);
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
        const distance = new Distance(distances.simple);
        const str = distance.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Distance');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const distance = new Distance({
          value: 10,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 1 },
            ],
          },
        });

        expect(distance._value?.extension?.[0]?.valueInteger).toBe(1);
      });

      it('should serialize extension properties', () => {
        const distance = new Distance({
          value: 10,
          unit: 'km',
          _unit: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = distance.toJSON();

        expect(json._unit?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const distance = new Distance({
          id: 'dist-1',
          value: 10,
          unit: 'km',
        });

        expect(distance.id).toBe('dist-1');
      });

      it('should handle extension property', () => {
        const distance = new Distance({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 10,
        });

        expect(distance.extension).toHaveLength(1);
        expect(distance.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const distance = new DistanceBuilder().build();
        expect(distance).toBeInstanceOf(Distance);
      });

      it('should build with value only', () => {
        const distance = new DistanceBuilder()
          .setValue(10)
          .build();

        expect(distance.value).toBe(10);
      });

      it('should build with all properties', () => {
        const distance = new DistanceBuilder()
          .setValue(5.5)
          .setUnit('kilometers')
          .setSystem('http://unitsofmeasure.org')
          .setCode('km')
          .build();

        expect(distance.value).toBe(5.5);
        expect(distance.unit).toBe('kilometers');
        expect(distance.system).toBe('http://unitsofmeasure.org');
        expect(distance.code).toBe('km');
      });

      it('should build with comparator', () => {
        const distance = new DistanceBuilder()
          .setValue(50)
          .setComparator('<')
          .setUnit('km')
          .build();

        expect(distance.value).toBe(50);
        expect(distance.comparator).toBe('<');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new DistanceBuilder()
          .setValue(10)
          .setUnit('km')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(DistanceBuilder);
      });

      it('should allow overwriting properties', () => {
        const distance = new DistanceBuilder()
          .setValue(10)
          .setValue(20)
          .build();

        expect(distance.value).toBe(20);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const distance = new DistanceBuilder()
          .setId('dist-1')
          .setValue(10)
          .build();

        expect(distance.id).toBe('dist-1');
      });

      it('should add extension from ElementBuilder', () => {
        const distance = new DistanceBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(10)
          .build();

        expect(distance.extension).toHaveLength(1);
        expect(distance.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const distance = new DistanceBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(distance.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new DistanceBuilder().setValue(10);
        const first = builder.build();

        builder.setValue(20);
        const second = builder.build();

        expect(first.value).toBe(10);
        expect(second.value).toBe(20);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const distance = new DistanceBuilder()
          .setValue(42.5)
          .setUnit('km')
          .setSystem('http://unitsofmeasure.org')
          .setCode('km')
          .build();

        const json = distance.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new DistanceBuilder()
          .setValue(10)
          .setUnit('km')
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
    it('should work in location distance scenario', () => {
      const locationDistance = new DistanceBuilder()
        .setValue(15.5)
        .setUnit('km')
        .setSystem('http://unitsofmeasure.org')
        .setCode('km')
        .build();

      expect(locationDistance.value).toBe(15.5);
      expect(locationDistance.unit).toBe('km');

      const json = locationDistance.toJSON();
      const restored = Distance.fromJSON(json);

      expect(restored.value).toBe(15.5);
    });

    it('should work in patient height scenario', () => {
      const height = new Distance({
        value: 175,
        unit: 'cm',
        system: 'http://unitsofmeasure.org',
        code: 'cm',
      });

      expect(height.value).toBe(175);
      expect(height.code).toBe('cm');
    });

    it('should work in travel distance scenario', () => {
      const travelDistance = new DistanceBuilder()
        .setValue(250)
        .setUnit('miles')
        .setSystem('http://unitsofmeasure.org')
        .setCode('[mi_i]')
        .build();

      expect(travelDistance.value).toBe(250);
    });

    it('should handle unit conversion scenario', () => {
      const distanceInKm = new Distance(distances.ucumComplete);

      // Convert km to meters
      const distanceInM = distanceInKm.applyTransform((data) => ({
        value: (data.value ?? 0) * 1000,
        unit: 'm',
        code: 'm',
      }));

      expect(distanceInM.value).toBe(5500);
      expect(distanceInM.code).toBe('m');
      expect(distanceInKm.value).toBe(5.5);
    });

    it('should handle maximum distance constraint', () => {
      const maxRadius = new DistanceBuilder()
        .setValue(100)
        .setComparator('<=')
        .setUnit('km')
        .build();

      expect(maxRadius.comparator).toBe('<=');
      expect(maxRadius.value).toBe(100);
    });

    it('should handle minimum distance constraint', () => {
      const minRadius = new DistanceBuilder()
        .setValue(5)
        .setComparator('>=')
        .setUnit('km')
        .build();

      expect(minRadius.comparator).toBe('>=');
      expect(minRadius.value).toBe(5);
    });

    it('should work in service area definition', () => {
      const serviceRadius = new Distance({
        value: 50,
        unit: 'km',
        system: 'http://unitsofmeasure.org',
        code: 'km',
      });

      expect(serviceRadius.value).toBe(50);
    });

    it('should handle distance modification', () => {
      const original = new Distance(distances.simple);

      const extended = original.with({
        value: (original.value ?? 0) + 5,
      });

      expect(extended.value).toBe(15);
      expect(original.value).toBe(10);
    });
  });
});
