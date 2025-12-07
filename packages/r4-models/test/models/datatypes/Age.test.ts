/**
 * Age Model and Builder Tests
 *
 * Tests for the Age datatype class and its builder.
 * Age is a specialization of Quantity representing a duration of time during which an organism has existed.
 */

import { describe, it, expect } from 'vitest';
import { Age, AgeBuilder } from '../../../src/index.js';
import type { IAge } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const ages = {
  simple: {
    value: 35,
    unit: 'years',
  } as IAge,
  ucumComplete: {
    value: 6,
    unit: 'months',
    system: 'http://unitsofmeasure.org',
    code: 'mo',
  } as IAge,
  infant: {
    value: 3,
    unit: 'weeks',
    system: 'http://unitsofmeasure.org',
    code: 'wk',
  } as IAge,
  pediatric: {
    value: 5,
    unit: 'years',
    system: 'http://unitsofmeasure.org',
    code: 'a',
  } as IAge,
  geriatric: {
    value: 85,
    unit: 'years',
    system: 'http://unitsofmeasure.org',
    code: 'a',
  } as IAge,
  lessThan: {
    value: 1,
    comparator: '<',
    unit: 'year',
    system: 'http://unitsofmeasure.org',
    code: 'a',
  } as IAge,
};

describe('Age', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const age = new Age({});
        expect(age).toBeInstanceOf(Age);
        expect(age.value).toBeUndefined();
        expect(age.unit).toBeUndefined();
      });

      it('should create simple age', () => {
        const age = new Age(ages.simple);
        expect(age.value).toBe(35);
        expect(age.unit).toBe('years');
      });

      it('should create complete UCUM age', () => {
        const age = new Age(ages.ucumComplete);
        expect(age.value).toBe(6);
        expect(age.unit).toBe('months');
        expect(age.system).toBe('http://unitsofmeasure.org');
        expect(age.code).toBe('mo');
      });

      it('should create infant age in weeks', () => {
        const age = new Age(ages.infant);
        expect(age.value).toBe(3);
        expect(age.code).toBe('wk');
      });

      it('should create pediatric age', () => {
        const age = new Age(ages.pediatric);
        expect(age.value).toBe(5);
        expect(age.code).toBe('a');
      });

      it('should create geriatric age', () => {
        const age = new Age(ages.geriatric);
        expect(age.value).toBe(85);
      });

      it('should create age with comparator', () => {
        const age = new Age(ages.lessThan);
        expect(age.value).toBe(1);
        expect(age.comparator).toBe('<');
      });

      it('should handle all comparator types', () => {
        const comparators = ['<', '<=', '>=', '>'] as const;
        comparators.forEach((comparator) => {
          const age = new Age({
            value: 30,
            comparator,
            unit: 'years',
          });
          expect(age.comparator).toBe(comparator);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const age = new Age(ages.ucumComplete);
        const json = age.toJSON();

        expect(json.value).toBe(6);
        expect(json.unit).toBe('months');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('mo');
      });

      it('should omit undefined properties in JSON', () => {
        const age = new Age({ value: 35 });
        const json = age.toJSON();

        expect(json.value).toBe(35);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');
        expect(json).not.toHaveProperty('comparator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Age(ages.ucumComplete);
        expectSerializationRoundtrip(original, Age);
      });

      it('should preserve comparator in JSON', () => {
        const age = new Age(ages.lessThan);
        const json = age.toJSON();

        expect(json.comparator).toBe('<');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IAge = {
          value: 42,
          unit: 'years',
          system: 'http://unitsofmeasure.org',
          code: 'a',
        };
        const age = Age.fromJSON(json);

        expect(age).toBeInstanceOf(Age);
        expect(age.value).toBe(42);
        expect(age.unit).toBe('years');
      });

      it('should create identical instance from JSON', () => {
        const original = new Age(ages.ucumComplete);
        const json = original.toJSON();
        const restored = Age.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Age({ value: 30, unit: 'years' });
        const updated = original.with({ value: 31 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(31);
        expect(updated.unit).toBe('years');
        expect(original.value).toBe(30);
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Age(ages.simple);
        const updated = original.with({
          value: 36,
          unit: 'y',
          code: 'a',
        });

        expect(updated.value).toBe(36);
        expect(updated.unit).toBe('y');
        expect(updated.code).toBe('a');
        expect(original.value).toBe(35);
      });

      it('should apply transform function correctly', () => {
        const age = new Age({ value: 30, unit: 'years' });
        const incremented = age.applyTransform((data) => ({
          value: (data.value ?? 0) + 1,
        }));

        expect(incremented.value).toBe(31);
        expect(age.value).toBe(30);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Age(ages.ucumComplete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Age(ages.lessThan);
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
        const age = new Age(ages.simple);
        const str = age.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Age');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const age = new Age({
          value: 30,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 2 },
            ],
          },
        });

        expect(age._value?.extension?.[0]?.valueInteger).toBe(2);
      });

      it('should serialize extension properties', () => {
        const age = new Age({
          value: 30,
          unit: 'years',
          _unit: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = age.toJSON();

        expect(json._unit?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const age = new Age({
          id: 'age-1',
          value: 30,
          unit: 'years',
        });

        expect(age.id).toBe('age-1');
      });

      it('should handle extension property', () => {
        const age = new Age({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 30,
        });

        expect(age.extension).toHaveLength(1);
        expect(age.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const age = new AgeBuilder().build();
        expect(age).toBeInstanceOf(Age);
      });

      it('should build with value only', () => {
        const age = new AgeBuilder()
          .setValue(35)
          .build();

        expect(age.value).toBe(35);
      });

      it('should build with all properties', () => {
        const age = new AgeBuilder()
          .setValue(6)
          .setUnit('months')
          .setSystem('http://unitsofmeasure.org')
          .setCode('mo')
          .build();

        expect(age.value).toBe(6);
        expect(age.unit).toBe('months');
        expect(age.system).toBe('http://unitsofmeasure.org');
        expect(age.code).toBe('mo');
      });

      it('should build with comparator', () => {
        const age = new AgeBuilder()
          .setValue(1)
          .setComparator('<')
          .setUnit('year')
          .build();

        expect(age.value).toBe(1);
        expect(age.comparator).toBe('<');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new AgeBuilder()
          .setValue(30)
          .setUnit('years')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(AgeBuilder);
      });

      it('should allow overwriting properties', () => {
        const age = new AgeBuilder()
          .setValue(30)
          .setValue(35)
          .build();

        expect(age.value).toBe(35);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const age = new AgeBuilder()
          .setId('age-1')
          .setValue(30)
          .build();

        expect(age.id).toBe('age-1');
      });

      it('should add extension from ElementBuilder', () => {
        const age = new AgeBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(30)
          .build();

        expect(age.extension).toHaveLength(1);
        expect(age.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const age = new AgeBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(age.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new AgeBuilder().setValue(30);
        const first = builder.build();

        builder.setValue(35);
        const second = builder.build();

        expect(first.value).toBe(30);
        expect(second.value).toBe(35);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const age = new AgeBuilder()
          .setValue(42)
          .setUnit('years')
          .setSystem('http://unitsofmeasure.org')
          .setCode('a')
          .build();

        const json = age.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new AgeBuilder()
          .setValue(30)
          .setUnit('years')
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
    it('should work in patient age scenario', () => {
      const patientAge = new AgeBuilder()
        .setValue(42)
        .setUnit('years')
        .setSystem('http://unitsofmeasure.org')
        .setCode('a')
        .build();

      expect(patientAge.value).toBe(42);
      expect(patientAge.unit).toBe('years');

      const json = patientAge.toJSON();
      const restored = Age.fromJSON(json);

      expect(restored.value).toBe(42);
      expect(restored.code).toBe('a');
    });

    it('should work in infant age scenario', () => {
      const infantAge = new Age({
        value: 6,
        unit: 'months',
        system: 'http://unitsofmeasure.org',
        code: 'mo',
      });

      expect(infantAge.value).toBe(6);
      expect(infantAge.code).toBe('mo');
    });

    it('should work in newborn age scenario', () => {
      const newbornAge = new AgeBuilder()
        .setValue(3)
        .setUnit('days')
        .setSystem('http://unitsofmeasure.org')
        .setCode('d')
        .build();

      expect(newbornAge.value).toBe(3);
      expect(newbornAge.code).toBe('d');
    });

    it('should handle birthday increment', () => {
      const currentAge = new Age(ages.simple);

      const nextBirthday = currentAge.with({
        value: (currentAge.value ?? 0) + 1,
      });

      expect(nextBirthday.value).toBe(36);
      expect(currentAge.value).toBe(35);
    });

    it('should handle age range with comparators', () => {
      const minAge = new AgeBuilder()
        .setValue(18)
        .setComparator('>=')
        .setUnit('years')
        .build();

      const maxAge = new AgeBuilder()
        .setValue(65)
        .setComparator('<=')
        .setUnit('years')
        .build();

      expect(minAge.comparator).toBe('>=');
      expect(minAge.value).toBe(18);
      expect(maxAge.comparator).toBe('<=');
      expect(maxAge.value).toBe(65);
    });

    it('should work in gestational age scenario', () => {
      const gestationalAge = new Age({
        value: 38,
        unit: 'weeks',
        system: 'http://unitsofmeasure.org',
        code: 'wk',
      });

      expect(gestationalAge.value).toBe(38);
      expect(gestationalAge.code).toBe('wk');
    });

    it('should handle age conversion scenario', () => {
      const ageInMonths = new Age({
        value: 18,
        unit: 'months',
        system: 'http://unitsofmeasure.org',
        code: 'mo',
      });

      // Convert to years (approximately)
      const ageInYears = ageInMonths.applyTransform((data) => ({
        value: Math.floor((data.value ?? 0) / 12),
        unit: 'years',
        code: 'a',
      }));

      expect(ageInYears.value).toBe(1);
      expect(ageInYears.code).toBe('a');
    });
  });
});
