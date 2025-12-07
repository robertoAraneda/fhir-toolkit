/**
 * HumanName Model and Builder Tests
 *
 * Tests for the HumanName datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { HumanName, HumanNameBuilder } from '../../../src/index.js';
import type { IHumanName } from '@fhir-toolkit/r4-types';
import { humanNames, periods } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('HumanName', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const name = new HumanName({});
        expect(name).toBeInstanceOf(HumanName);
        expect(name.family).toBeUndefined();
        expect(name.given).toBeUndefined();
      });

      it('should create instance with family only', () => {
        const name = new HumanName({ family: 'Smith' });
        expect(name.family).toBe('Smith');
        expect(name.given).toBeUndefined();
      });

      it('should create simple name', () => {
        const name = new HumanName(humanNames.simple);
        expect(name.family).toBe('Smith');
        expect(name.given).toEqual(['John']);
      });

      it('should create complete name', () => {
        const name = new HumanName(humanNames.complete);
        expect(name.use).toBe('official');
        expect(name.text).toBe('Dr. Juan Carlos García López');
        expect(name.family).toBe('García López');
        expect(name.given).toEqual(['Juan', 'Carlos']);
        expect(name.prefix).toEqual(['Dr.']);
        expect(name.suffix).toEqual(['MD', 'PhD']);
        expect(name.period).toBeDefined();
      });

      it('should create maiden name', () => {
        const name = new HumanName(humanNames.maiden);
        expect(name.use).toBe('maiden');
        expect(name.family).toBe('Rodríguez');
      });

      it('should create name with multiple given names', () => {
        const name = new HumanName({
          family: 'Doe',
          given: ['John', 'William', 'James'],
        });
        expect(name.given).toHaveLength(3);
        expect(name.given).toEqual(['John', 'William', 'James']);
      });
    });

    describe('Use Property', () => {
      it.each([
        ['usual', 'usual'],
        ['official', 'official'],
        ['temp', 'temp'],
        ['nickname', 'nickname'],
        ['anonymous', 'anonymous'],
        ['old', 'old'],
        ['maiden', 'maiden'],
      ] as const)('should handle use value %s', (input, expected) => {
        const name = new HumanName({ use: input, family: 'Test' });
        expect(name.use).toBe(expected);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const name = new HumanName(humanNames.complete);
        const json = name.toJSON();

        expect(json.use).toBe('official');
        expect(json.family).toBe('García López');
        expect(json.given).toEqual(['Juan', 'Carlos']);
        expect(json.prefix).toEqual(['Dr.']);
        expect(json.suffix).toEqual(['MD', 'PhD']);
      });

      it('should omit undefined properties in JSON', () => {
        const name = new HumanName({ family: 'Smith' });
        const json = name.toJSON();

        expect(json.family).toBe('Smith');
        expect(json).not.toHaveProperty('use');
        expect(json).not.toHaveProperty('text');
        expect(json).not.toHaveProperty('given');
        expect(json).not.toHaveProperty('prefix');
        expect(json).not.toHaveProperty('suffix');
        expect(json).not.toHaveProperty('period');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new HumanName(humanNames.complete);
        expectSerializationRoundtrip(original, HumanName);
      });

      it('should preserve arrays in JSON', () => {
        const name = new HumanName({
          given: ['John', 'William'],
          prefix: ['Mr.', 'Dr.'],
          suffix: ['Jr.', 'MD'],
        });
        const json = name.toJSON();

        expect(json.given).toEqual(['John', 'William']);
        expect(json.prefix).toEqual(['Mr.', 'Dr.']);
        expect(json.suffix).toEqual(['Jr.', 'MD']);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IHumanName = {
          use: 'official',
          family: 'Doe',
          given: ['Jane'],
        };
        const name = HumanName.fromJSON(json);

        expect(name).toBeInstanceOf(HumanName);
        expect(name.use).toBe('official');
        expect(name.family).toBe('Doe');
        expect(name.given).toEqual(['Jane']);
      });

      it('should create identical instance from JSON', () => {
        const original = new HumanName(humanNames.complete);
        const json = original.toJSON();
        const restored = HumanName.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new HumanName({ family: 'Smith', given: ['John'] });
        const updated = original.with({ family: 'Johnson' });

        expect(updated).not.toBe(original);
        expect(updated.family).toBe('Johnson');
        expect(updated.given).toEqual(['John']); // Preserved from original
        expect(original.family).toBe('Smith'); // Original unchanged
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new HumanName({ family: 'Smith', use: 'official' });
        const updated = original.with({
          family: 'Johnson',
          use: 'maiden',
        });

        expect(updated.family).toBe('Johnson');
        expect(updated.use).toBe('maiden');
        expect(original.family).toBe('Smith');
        expect(original.use).toBe('official');
      });

      it('should apply transform function correctly', () => {
        const name = new HumanName({ family: 'smith', given: ['john'] });
        const transformed = name.applyTransform((data) => ({
          family: data.family?.toUpperCase(),
          given: data.given?.map((g) => g.charAt(0).toUpperCase() + g.slice(1)),
        }));

        expect(transformed.family).toBe('SMITH');
        expect(transformed.given).toEqual(['John']);
        expect(name.family).toBe('smith'); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new HumanName(humanNames.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned arrays', () => {
        const original = new HumanName({
          family: 'Smith',
          given: ['John', 'William'],
        });
        const cloned = original.clone();

        // Modify the clone's array
        if (cloned.given) {
          cloned.given[0] = 'MODIFIED';
        }

        // Original should be unchanged
        expect(original.given?.[0]).toBe('John');
      });

      it('should clone nested period', () => {
        const original = new HumanName({
          family: 'Smith',
          period: { start: '2020-01-01', end: '2024-12-31' },
        });
        const cloned = original.clone();

        expect(cloned.period?.start).toBe('2020-01-01');
        expect(cloned.period?.end).toBe('2024-12-31');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const name = new HumanName({ family: 'Smith' });
        const str = name.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('HumanName');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _family extension', () => {
        const name = new HumanName({
          family: 'Smith',
          _family: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'original: Smythe' },
            ],
          },
        });

        expect(name._family?.extension?.[0]?.valueString).toBe('original: Smythe');
      });

      it('should serialize extension properties', () => {
        const name = new HumanName({
          family: 'Smith',
          _family: {
            id: 'family-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = name.toJSON();

        expect(json._family?.id).toBe('family-ext');
        expect(json._family?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const name = new HumanNameBuilder().build();
        expect(name).toBeInstanceOf(HumanName);
      });

      it('should build with family only', () => {
        const name = new HumanNameBuilder()
          .setFamily('Smith')
          .build();

        expect(name.family).toBe('Smith');
      });

      it('should build with family and given', () => {
        const name = new HumanNameBuilder()
          .setFamily('Smith')
          .addGiven('John')
          .build();

        expect(name.family).toBe('Smith');
        expect(name.given).toEqual(['John']);
      });

      it('should build with all properties', () => {
        const name = new HumanNameBuilder()
          .setUse('official')
          .setText('Dr. John Smith, MD')
          .setFamily('Smith')
          .addGiven('John')
          .addGiven('William')
          .addPrefix('Dr.')
          .addSuffix('MD')
          .setPeriod({ start: '2020-01-01' })
          .build();

        expect(name.use).toBe('official');
        expect(name.text).toBe('Dr. John Smith, MD');
        expect(name.family).toBe('Smith');
        expect(name.given).toEqual(['John', 'William']);
        expect(name.prefix).toEqual(['Dr.']);
        expect(name.suffix).toEqual(['MD']);
        expect(name.period?.start).toBe('2020-01-01');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new HumanNameBuilder()
          .setUse('official')
          .setFamily('Smith')
          .addGiven('John');

        expect(builder).toBeInstanceOf(HumanNameBuilder);
      });

      it('should allow overwriting scalar properties', () => {
        const name = new HumanNameBuilder()
          .setFamily('Smith')
          .setFamily('Johnson')
          .build();

        expect(name.family).toBe('Johnson');
      });

      it('should accumulate given names', () => {
        const name = new HumanNameBuilder()
          .addGiven('John')
          .addGiven('William')
          .addGiven('James')
          .build();

        expect(name.given).toHaveLength(3);
        expect(name.given).toEqual(['John', 'William', 'James']);
      });

      it('should accumulate prefixes', () => {
        const name = new HumanNameBuilder()
          .addPrefix('Dr.')
          .addPrefix('Prof.')
          .build();

        expect(name.prefix).toHaveLength(2);
        expect(name.prefix).toEqual(['Dr.', 'Prof.']);
      });

      it('should accumulate suffixes', () => {
        const name = new HumanNameBuilder()
          .addSuffix('Jr.')
          .addSuffix('MD')
          .addSuffix('PhD')
          .build();

        expect(name.suffix).toHaveLength(3);
        expect(name.suffix).toEqual(['Jr.', 'MD', 'PhD']);
      });
    });

    describe('Use Property', () => {
      it.each([
        ['usual', 'usual'],
        ['official', 'official'],
        ['temp', 'temp'],
        ['nickname', 'nickname'],
        ['anonymous', 'anonymous'],
        ['old', 'old'],
        ['maiden', 'maiden'],
      ] as const)('should set use to %s', (input, expected) => {
        const name = new HumanNameBuilder()
          .setUse(input)
          .build();

        expect(name.use).toBe(expected);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const name = new HumanNameBuilder()
          .setId('name-1')
          .setFamily('Smith')
          .build();

        expect(name.id).toBe('name-1');
      });

      it('should add extension from ElementBuilder', () => {
        const name = new HumanNameBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setFamily('Smith')
          .build();

        expect(name.extension).toHaveLength(1);
        expect(name.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const name = new HumanNameBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(name.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new HumanNameBuilder().setFamily('Smith');
        const first = builder.build();

        builder.setFamily('Johnson');
        const second = builder.build();

        expect(first.family).toBe('Smith');
        expect(second.family).toBe('Johnson');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const name = new HumanNameBuilder()
          .setUse('official')
          .setFamily('Smith')
          .addGiven('John')
          .build();

        const json = name.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new HumanNameBuilder()
          .setFamily('Smith')
          .addGiven('John')
          .addPrefix('Dr.')
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
    it('should work in typical patient name scenario', () => {
      // Create official name
      const officialName = new HumanNameBuilder()
        .setUse('official')
        .setText('Juan Carlos García López')
        .setFamily('García López')
        .addGiven('Juan')
        .addGiven('Carlos')
        .build();

      expect(officialName.use).toBe('official');
      expect(officialName.family).toBe('García López');
      expect(officialName.given).toHaveLength(2);

      // Serialize and restore
      const json = officialName.toJSON();
      const restored = HumanName.fromJSON(json);

      expect(restored.family).toBe('García López');
      expect(restored.given).toEqual(['Juan', 'Carlos']);
    });

    it('should handle practitioner with credentials', () => {
      const practitionerName = new HumanNameBuilder()
        .setUse('official')
        .addPrefix('Dr.')
        .setFamily('Smith')
        .addGiven('Jane')
        .addSuffix('MD')
        .addSuffix('PhD')
        .setText('Dr. Jane Smith, MD, PhD')
        .build();

      expect(practitionerName.prefix).toEqual(['Dr.']);
      expect(practitionerName.suffix).toEqual(['MD', 'PhD']);
      expect(practitionerName.text).toBe('Dr. Jane Smith, MD, PhD');
    });

    it('should handle name change scenario', () => {
      // Original name
      const maidenName = new HumanName({
        use: 'maiden',
        family: 'Johnson',
        given: ['Mary'],
        period: { end: '2020-06-15' },
      });

      // Married name
      const marriedName = new HumanName({
        use: 'official',
        family: 'Smith',
        given: ['Mary'],
        period: { start: '2020-06-15' },
      });

      expect(maidenName.use).toBe('maiden');
      expect(maidenName.period?.end).toBe('2020-06-15');
      expect(marriedName.use).toBe('official');
      expect(marriedName.period?.start).toBe('2020-06-15');
    });

    it('should update family while preserving given names', () => {
      const original = new HumanName({
        family: 'Smith',
        given: ['John', 'William'],
      });

      const updated = original.with({ family: 'Johnson' });

      expect(updated.family).toBe('Johnson');
      expect(updated.given).toEqual(['John', 'William']);
      expect(original.family).toBe('Smith');
    });

    it('should handle nickname', () => {
      const nickname = new HumanNameBuilder()
        .setUse('nickname')
        .addGiven('Johnny')
        .build();

      expect(nickname.use).toBe('nickname');
      expect(nickname.given).toEqual(['Johnny']);
      expect(nickname.family).toBeUndefined();
    });
  });
});
