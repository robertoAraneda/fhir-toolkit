/**
 * HumanName Datatype Model and Builder Tests for FHIR R4B
 *
 * Tests for the HumanName datatype class and its builder.
 * HumanName represents a human's name with parts and usage.
 */

import { describe, it, expect } from 'vitest';
import { HumanName, HumanNameBuilder } from '../../../src/index.js';
import type { IHumanName } from '@fhir-toolkit/r4b-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const humanNames = {
  complete: {
    use: 'official',
    text: 'Dr. John Robert Smith Jr.',
    family: 'Smith',
    given: ['John', 'Robert'],
    prefix: ['Dr.'],
    suffix: ['Jr.'],
    period: {
      start: '2000-01-01',
    },
  } as IHumanName,
  simple: {
    family: 'Doe',
    given: ['Jane'],
  } as IHumanName,
  maiden: {
    use: 'maiden',
    family: 'Johnson',
    period: {
      end: '1990-06-15',
    },
  } as IHumanName,
  nickname: {
    use: 'nickname',
    given: ['Johnny'],
  } as IHumanName,
};

describe('HumanName (R4B)', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const name = new HumanName({});
        expect(name).toBeInstanceOf(HumanName);
      });

      it('should create complete name', () => {
        const name = new HumanName(humanNames.complete);
        expect(name.use).toBe('official');
        expect(name.text).toBe('Dr. John Robert Smith Jr.');
        expect(name.family).toBe('Smith');
        expect(name.given).toEqual(['John', 'Robert']);
        expect(name.prefix).toEqual(['Dr.']);
        expect(name.suffix).toEqual(['Jr.']);
        expect(name.period?.start).toBe('2000-01-01');
      });

      it('should create simple name', () => {
        const name = new HumanName(humanNames.simple);
        expect(name.family).toBe('Doe');
        expect(name.given).toEqual(['Jane']);
      });

      it('should create maiden name', () => {
        const name = new HumanName(humanNames.maiden);
        expect(name.use).toBe('maiden');
        expect(name.family).toBe('Johnson');
        expect(name.period?.end).toBe('1990-06-15');
      });

      it('should create nickname', () => {
        const name = new HumanName(humanNames.nickname);
        expect(name.use).toBe('nickname');
        expect(name.given).toEqual(['Johnny']);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const name = new HumanName(humanNames.complete);
        const json = name.toJSON();

        expect(json.use).toBe('official');
        expect(json.family).toBe('Smith');
        expect(json.given).toEqual(['John', 'Robert']);
      });

      it('should omit undefined properties in JSON', () => {
        const name = new HumanName(humanNames.simple);
        const json = name.toJSON();

        expectNoUndefinedInJSON(json);
        expect(json).not.toHaveProperty('use');
        expect(json).not.toHaveProperty('prefix');
        expect(json).not.toHaveProperty('suffix');
      });

      it('should round-trip through JSON correctly', () => {
        const original = new HumanName(humanNames.complete);
        expectSerializationRoundtrip(original, HumanName);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const name = HumanName.fromJSON(humanNames.complete);

        expect(name).toBeInstanceOf(HumanName);
        expect(name.family).toBe('Smith');
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new HumanName(humanNames.simple);
        const updated = original.with({ use: 'official' });

        expect(updated).not.toBe(original);
        expect(updated.use).toBe('official');
        expect(original.use).toBeUndefined();
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new HumanName(humanNames.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned given', () => {
        const original = new HumanName(humanNames.complete);
        const cloned = original.clone();

        if (cloned.given) {
          cloned.given[0] = 'Modified';
        }

        expect(original.given?.[0]).toBe('John');
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

      it('should build with use', () => {
        const name = new HumanNameBuilder()
          .setUse('official')
          .build();

        expect(name.use).toBe('official');
      });

      it('should build with family', () => {
        const name = new HumanNameBuilder()
          .setFamily('Smith')
          .build();

        expect(name.family).toBe('Smith');
      });

      it('should build with text', () => {
        const name = new HumanNameBuilder()
          .setText('John Smith')
          .build();

        expect(name.text).toBe('John Smith');
      });

      it('should add given names', () => {
        const name = new HumanNameBuilder()
          .addGiven('John')
          .addGiven('Robert')
          .build();

        expect(name.given).toEqual(['John', 'Robert']);
      });

      it('should add prefixes', () => {
        const name = new HumanNameBuilder()
          .addPrefix('Dr.')
          .addPrefix('Prof.')
          .build();

        expect(name.prefix).toEqual(['Dr.', 'Prof.']);
      });

      it('should add suffixes', () => {
        const name = new HumanNameBuilder()
          .addSuffix('Jr.')
          .addSuffix('MD')
          .build();

        expect(name.suffix).toEqual(['Jr.', 'MD']);
      });

      it('should build with period', () => {
        const name = new HumanNameBuilder()
          .setPeriod({ start: '2000-01-01', end: '2020-12-31' })
          .build();

        expect(name.period?.start).toBe('2000-01-01');
        expect(name.period?.end).toBe('2020-12-31');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const name = new HumanNameBuilder()
          .setUse('official')
          .setFamily('Smith')
          .addGiven('John')
          .addGiven('Robert')
          .addPrefix('Dr.')
          .addSuffix('Jr.')
          .setText('Dr. John Robert Smith Jr.')
          .build();

        expect(name.use).toBe('official');
        expect(name.family).toBe('Smith');
        expect(name.given).toHaveLength(2);
        expect(name.prefix).toHaveLength(1);
        expect(name.suffix).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work for patient official name', () => {
      const name = new HumanNameBuilder()
        .setUse('official')
        .setFamily('Johnson')
        .addGiven('Mary')
        .addGiven('Elizabeth')
        .addPrefix('Mrs.')
        .build();

      const json = name.toJSON();
      const restored = HumanName.fromJSON(json);

      expect(restored.family).toBe('Johnson');
      expect(restored.given).toEqual(['Mary', 'Elizabeth']);
    });

    it('should work for practitioner name with credentials', () => {
      const name = new HumanNameBuilder()
        .setUse('official')
        .setFamily('Williams')
        .addGiven('James')
        .addPrefix('Dr.')
        .addSuffix('MD')
        .addSuffix('PhD')
        .setText('Dr. James Williams, MD, PhD')
        .build();

      expect(name.suffix).toEqual(['MD', 'PhD']);
      expect(name.text).toBe('Dr. James Williams, MD, PhD');
    });

    it('should work for name history with maiden name', () => {
      const maidenName = new HumanNameBuilder()
        .setUse('maiden')
        .setFamily('Anderson')
        .setPeriod({ end: '2015-06-20' })
        .build();

      const marriedName = new HumanNameBuilder()
        .setUse('official')
        .setFamily('Thompson')
        .addGiven('Sarah')
        .setPeriod({ start: '2015-06-20' })
        .build();

      expect(maidenName.use).toBe('maiden');
      expect(maidenName.period?.end).toBe('2015-06-20');
      expect(marriedName.use).toBe('official');
      expect(marriedName.period?.start).toBe('2015-06-20');
    });

    it('should handle name update', () => {
      const original = new HumanName(humanNames.simple);
      const updated = original.with({
        use: 'official',
        prefix: ['Mrs.'],
      });

      expect(updated.use).toBe('official');
      expect(updated.prefix).toEqual(['Mrs.']);
      expect(updated.family).toBe('Doe');
    });
  });
});
