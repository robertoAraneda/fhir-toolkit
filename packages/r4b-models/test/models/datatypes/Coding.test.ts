/**
 * Coding Datatype Model and Builder Tests for FHIR R4B
 *
 * Tests for the Coding datatype class and its builder.
 * Coding represents a reference to a code defined by a terminology system.
 */

import { describe, it, expect } from 'vitest';
import { Coding, CodingBuilder } from '../../../src/index.js';
import type { ICoding } from '@fhir-toolkit/r4b-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const codings = {
  loinc: {
    system: 'http://loinc.org',
    version: '2.74',
    code: '29463-7',
    display: 'Body Weight',
    userSelected: true,
  } as ICoding,
  snomed: {
    system: 'http://snomed.info/sct',
    code: '27113001',
    display: 'Body weight',
  } as ICoding,
  simple: {
    code: 'ABC123',
  } as ICoding,
};

describe('Coding (R4B)', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const coding = new Coding({});
        expect(coding).toBeInstanceOf(Coding);
      });

      it('should create LOINC coding', () => {
        const coding = new Coding(codings.loinc);
        expect(coding.system).toBe('http://loinc.org');
        expect(coding.version).toBe('2.74');
        expect(coding.code).toBe('29463-7');
        expect(coding.display).toBe('Body Weight');
        expect(coding.userSelected).toBe(true);
      });

      it('should create SNOMED coding', () => {
        const coding = new Coding(codings.snomed);
        expect(coding.system).toBe('http://snomed.info/sct');
        expect(coding.code).toBe('27113001');
      });

      it('should create simple coding', () => {
        const coding = new Coding(codings.simple);
        expect(coding.code).toBe('ABC123');
        expect(coding.system).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const coding = new Coding(codings.loinc);
        const json = coding.toJSON();

        expect(json.system).toBe('http://loinc.org');
        expect(json.code).toBe('29463-7');
      });

      it('should omit undefined properties in JSON', () => {
        const coding = new Coding(codings.simple);
        const json = coding.toJSON();

        expectNoUndefinedInJSON(json);
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('version');
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Coding(codings.loinc);
        expectSerializationRoundtrip(original, Coding);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const coding = Coding.fromJSON(codings.snomed);

        expect(coding).toBeInstanceOf(Coding);
        expect(coding.system).toBe('http://snomed.info/sct');
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Coding(codings.loinc);
        const updated = original.with({ display: 'Modified Display' });

        expect(updated).not.toBe(original);
        expect(updated.display).toBe('Modified Display');
        expect(original.display).toBe('Body Weight');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Coding(codings.loinc);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const coding = new CodingBuilder().build();
        expect(coding).toBeInstanceOf(Coding);
      });

      it('should build with system', () => {
        const coding = new CodingBuilder()
          .setSystem('http://loinc.org')
          .build();

        expect(coding.system).toBe('http://loinc.org');
      });

      it('should build with code', () => {
        const coding = new CodingBuilder()
          .setCode('12345-6')
          .build();

        expect(coding.code).toBe('12345-6');
      });

      it('should build with display', () => {
        const coding = new CodingBuilder()
          .setDisplay('Test Display')
          .build();

        expect(coding.display).toBe('Test Display');
      });

      it('should build with version', () => {
        const coding = new CodingBuilder()
          .setVersion('2.74')
          .build();

        expect(coding.version).toBe('2.74');
      });

      it('should build with userSelected', () => {
        const coding = new CodingBuilder()
          .setUserSelected(true)
          .build();

        expect(coding.userSelected).toBe(true);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const coding = new CodingBuilder()
          .setSystem('http://loinc.org')
          .setCode('29463-7')
          .setDisplay('Body Weight')
          .setVersion('2.74')
          .setUserSelected(false)
          .build();

        expect(coding.system).toBe('http://loinc.org');
        expect(coding.code).toBe('29463-7');
        expect(coding.display).toBe('Body Weight');
        expect(coding.version).toBe('2.74');
        expect(coding.userSelected).toBe(false);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work for LOINC code creation', () => {
      const coding = new CodingBuilder()
        .setSystem('http://loinc.org')
        .setCode('8867-4')
        .setDisplay('Heart rate')
        .build();

      const json = coding.toJSON();
      const restored = Coding.fromJSON(json);

      expect(restored.system).toBe('http://loinc.org');
      expect(restored.code).toBe('8867-4');
    });

    it('should work for SNOMED CT code creation', () => {
      const coding = new CodingBuilder()
        .setSystem('http://snomed.info/sct')
        .setCode('386661006')
        .setDisplay('Fever')
        .build();

      expect(coding.system).toBe('http://snomed.info/sct');
      expect(coding.code).toBe('386661006');
    });
  });
});
