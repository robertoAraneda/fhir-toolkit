/**
 * CodeableConcept Datatype Model and Builder Tests for FHIR R4B
 *
 * Tests for the CodeableConcept datatype class and its builder.
 * CodeableConcept represents a concept that may be defined by multiple coding systems.
 */

import { describe, it, expect } from 'vitest';
import { CodeableConcept, CodeableConceptBuilder } from '../../../src/index.js';
import type { ICodeableConcept } from '@fhir-toolkit/r4b-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const codeableConcepts = {
  multiCoded: {
    coding: [
      {
        system: 'http://snomed.info/sct',
        code: '27113001',
        display: 'Body weight',
      },
      {
        system: 'http://loinc.org',
        code: '29463-7',
        display: 'Body Weight',
      },
    ],
    text: 'Body weight measurement',
  } as ICodeableConcept,
  singleCoded: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
        code: 'active',
        display: 'Active',
      },
    ],
  } as ICodeableConcept,
  textOnly: {
    text: 'Custom description without codes',
  } as ICodeableConcept,
};

describe('CodeableConcept (R4B)', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const cc = new CodeableConcept({});
        expect(cc).toBeInstanceOf(CodeableConcept);
      });

      it('should create multi-coded concept', () => {
        const cc = new CodeableConcept(codeableConcepts.multiCoded);
        expect(cc.coding).toHaveLength(2);
        expect(cc.coding?.[0].system).toBe('http://snomed.info/sct');
        expect(cc.coding?.[1].system).toBe('http://loinc.org');
        expect(cc.text).toBe('Body weight measurement');
      });

      it('should create single-coded concept', () => {
        const cc = new CodeableConcept(codeableConcepts.singleCoded);
        expect(cc.coding).toHaveLength(1);
        expect(cc.coding?.[0].code).toBe('active');
      });

      it('should create text-only concept', () => {
        const cc = new CodeableConcept(codeableConcepts.textOnly);
        expect(cc.text).toBe('Custom description without codes');
        expect(cc.coding).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const cc = new CodeableConcept(codeableConcepts.multiCoded);
        const json = cc.toJSON();

        expect(json.coding).toHaveLength(2);
        expect(json.text).toBe('Body weight measurement');
      });

      it('should omit undefined properties in JSON', () => {
        const cc = new CodeableConcept(codeableConcepts.singleCoded);
        const json = cc.toJSON();

        expectNoUndefinedInJSON(json);
        expect(json).not.toHaveProperty('text');
      });

      it('should round-trip through JSON correctly', () => {
        const original = new CodeableConcept(codeableConcepts.multiCoded);
        expectSerializationRoundtrip(original, CodeableConcept);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const cc = CodeableConcept.fromJSON(codeableConcepts.singleCoded);

        expect(cc).toBeInstanceOf(CodeableConcept);
        expect(cc.coding?.[0].code).toBe('active');
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new CodeableConcept(codeableConcepts.multiCoded);
        const updated = original.with({ text: 'Updated text' });

        expect(updated).not.toBe(original);
        expect(updated.text).toBe('Updated text');
        expect(original.text).toBe('Body weight measurement');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new CodeableConcept(codeableConcepts.multiCoded);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned coding', () => {
        const original = new CodeableConcept(codeableConcepts.multiCoded);
        const cloned = original.clone();

        if (cloned.coding && cloned.coding[0]) {
          cloned.coding[0].code = 'modified';
        }

        expect(original.coding?.[0].code).toBe('27113001');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const cc = new CodeableConceptBuilder().build();
        expect(cc).toBeInstanceOf(CodeableConcept);
      });

      it('should build with text', () => {
        const cc = new CodeableConceptBuilder()
          .setText('Custom text')
          .build();

        expect(cc.text).toBe('Custom text');
      });

      it('should add coding', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Test Code',
          })
          .build();

        expect(cc.coding).toHaveLength(1);
        expect(cc.coding?.[0].code).toBe('12345-6');
      });

      it('should add multiple codings', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({ system: 'http://snomed.info/sct', code: '12345' })
          .addCoding({ system: 'http://loinc.org', code: '67890-1' })
          .build();

        expect(cc.coding).toHaveLength(2);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({
            system: 'http://snomed.info/sct',
            code: '27113001',
            display: 'Body weight',
          })
          .addCoding({
            system: 'http://loinc.org',
            code: '29463-7',
            display: 'Body Weight',
          })
          .setText('Body weight')
          .build();

        expect(cc.coding).toHaveLength(2);
        expect(cc.text).toBe('Body weight');
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work for condition clinical status', () => {
      const cc = new CodeableConceptBuilder()
        .addCoding({
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
          display: 'Active',
        })
        .build();

      const json = cc.toJSON();
      const restored = CodeableConcept.fromJSON(json);

      expect(restored.coding?.[0].code).toBe('active');
    });

    it('should work for observation category', () => {
      const cc = new CodeableConceptBuilder()
        .addCoding({
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
          code: 'vital-signs',
          display: 'Vital Signs',
        })
        .setText('Vital Signs Measurement')
        .build();

      expect(cc.coding?.[0].system).toBe('http://terminology.hl7.org/CodeSystem/observation-category');
      expect(cc.text).toBe('Vital Signs Measurement');
    });

    it('should work for medication code with multiple codings', () => {
      const cc = new CodeableConceptBuilder()
        .addCoding({
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '197361',
          display: 'Acetaminophen 325 MG Oral Tablet',
        })
        .addCoding({
          system: 'http://snomed.info/sct',
          code: '322236009',
          display: 'Paracetamol 325mg tablet',
        })
        .setText('Tylenol 325mg')
        .build();

      expect(cc.coding).toHaveLength(2);
      expect(cc.text).toBe('Tylenol 325mg');
    });
  });
});
