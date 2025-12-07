/**
 * CodeableConcept Model and Builder Tests
 *
 * Tests for the CodeableConcept datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { CodeableConcept, CodeableConceptBuilder } from '../../../src/index.js';
import type { ICodeableConcept } from '@fhir-toolkit/r4-types';
import { codeableConcepts, codings } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('CodeableConcept', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const cc = new CodeableConcept({});
        expect(cc).toBeInstanceOf(CodeableConcept);
        expect(cc.text).toBeUndefined();
        expect(cc.coding).toBeUndefined();
      });

      it('should create instance with text only', () => {
        const cc = new CodeableConcept({ text: 'Test concept' });
        expect(cc.text).toBe('Test concept');
        expect(cc.coding).toBeUndefined();
      });

      it('should create instance with single coding', () => {
        const cc = new CodeableConcept(codeableConcepts.maritalStatusSingle);
        expect(cc.coding).toHaveLength(1);
        expect(cc.coding?.[0]?.code).toBe('S');
        expect(cc.coding?.[0]?.display).toBe('Never Married');
      });

      it('should create instance with multiple codings', () => {
        const cc = new CodeableConcept({
          coding: [
            { system: 'http://snomed.info/sct', code: '12345', display: 'SNOMED Code' },
            { system: 'http://hl7.org/fhir/sid/icd-10', code: 'A00', display: 'ICD-10 Code' },
          ],
          text: 'Multiple coding example',
        });
        expect(cc.coding).toHaveLength(2);
        expect(cc.coding?.[0]?.system).toBe('http://snomed.info/sct');
        expect(cc.coding?.[1]?.system).toBe('http://hl7.org/fhir/sid/icd-10');
        expect(cc.text).toBe('Multiple coding example');
      });

      it('should create instance with text and coding', () => {
        const cc = new CodeableConcept(codeableConcepts.conditionActive);
        expect(cc.coding).toBeDefined();
        expect(cc.text).toBe('Active');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const cc = new CodeableConcept(codeableConcepts.conditionActive);
        const json = cc.toJSON();

        expect(json.text).toBe('Active');
        expect(json.coding?.[0]?.code).toBe('active');
      });

      it('should omit undefined properties in JSON', () => {
        const cc = new CodeableConcept({ text: 'Test' });
        const json = cc.toJSON();

        expect(json.text).toBe('Test');
        expect(json).not.toHaveProperty('coding');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new CodeableConcept(codeableConcepts.maritalStatusSingle);
        expectSerializationRoundtrip(original, CodeableConcept);
      });

      it('should preserve nested coding objects in JSON', () => {
        const cc = new CodeableConcept({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
              code: 'M',
              display: 'Married',
              version: '2020-01',
              userSelected: true,
            },
          ],
          text: 'Married',
        });
        const json = cc.toJSON();

        expect(json.coding?.[0]?.system).toBe('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus');
        expect(json.coding?.[0]?.version).toBe('2020-01');
        expect(json.coding?.[0]?.userSelected).toBe(true);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ICodeableConcept = {
          text: 'JSON CodeableConcept',
          coding: [{ system: 'http://example.org', code: 'TEST' }],
        };
        const cc = CodeableConcept.fromJSON(json);

        expect(cc).toBeInstanceOf(CodeableConcept);
        expect(cc.text).toBe('JSON CodeableConcept');
        expect(cc.coding?.[0]?.code).toBe('TEST');
      });

      it('should create identical instance from JSON', () => {
        const original = new CodeableConcept(codeableConcepts.conditionActive);
        const json = original.toJSON();
        const restored = CodeableConcept.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new CodeableConcept({ text: 'Original' });
        const updated = original.with({ text: 'Updated' });

        expect(updated).not.toBe(original);
        expect(updated.text).toBe('Updated');
        expect(original.text).toBe('Original');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new CodeableConcept({
          text: 'Original',
          coding: [{ code: 'A' }],
        });
        const updated = original.with({
          text: 'Updated',
          coding: [{ code: 'B' }],
        });

        expect(updated.text).toBe('Updated');
        expect(updated.coding?.[0]?.code).toBe('B');
        expect(original.text).toBe('Original');
        expect(original.coding?.[0]?.code).toBe('A');
      });

      it('should apply transform function correctly', () => {
        const cc = new CodeableConcept({
          text: 'test',
          coding: [{ code: 'abc' }],
        });
        const transformed = cc.applyTransform((data) => ({
          text: data.text?.toUpperCase(),
        }));

        expect(transformed.text).toBe('TEST');
        expect(cc.text).toBe('test'); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new CodeableConcept(codeableConcepts.maritalStatusSingle);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned nested objects', () => {
        const original = new CodeableConcept({
          text: 'Test',
          coding: [{ system: 'http://example.org', code: 'TEST' }],
        });
        const cloned = original.clone();

        // Modify the clone's nested object
        if (cloned.coding?.[0]) {
          cloned.coding[0].code = 'MODIFIED';
        }

        // Original should be unchanged
        expect(original.coding?.[0]?.code).toBe('TEST');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const cc = new CodeableConcept({ text: 'Test' });
        const str = cc.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('CodeableConcept');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _text extension', () => {
        const cc = new CodeableConcept({
          text: 'Test',
          _text: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'extended' },
            ],
          },
        });

        expect(cc._text?.extension?.[0]?.valueString).toBe('extended');
      });

      it('should serialize extension properties', () => {
        const cc = new CodeableConcept({
          text: 'Test',
          _text: {
            id: 'text-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = cc.toJSON();

        expect(json._text?.id).toBe('text-ext');
        expect(json._text?.extension?.[0]?.valueBoolean).toBe(true);
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

      it('should build with text only', () => {
        const cc = new CodeableConceptBuilder()
          .setText('Test concept')
          .build();

        expect(cc.text).toBe('Test concept');
      });

      it('should build with single coding', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({
            system: 'http://example.org',
            code: 'TEST',
            display: 'Test Code',
          })
          .build();

        expect(cc.coding).toHaveLength(1);
        expect(cc.coding?.[0]?.code).toBe('TEST');
      });

      it('should build with text and codings', () => {
        const cc = new CodeableConceptBuilder()
          .setText('Married')
          .addCoding({
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M',
            display: 'Married',
          })
          .build();

        expect(cc.text).toBe('Married');
        expect(cc.coding?.[0]?.code).toBe('M');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new CodeableConceptBuilder()
          .setText('Test')
          .addCoding({ code: 'A' })
          .addCoding({ code: 'B' });

        expect(builder).toBeInstanceOf(CodeableConceptBuilder);
      });

      it('should allow overwriting text', () => {
        const cc = new CodeableConceptBuilder()
          .setText('first')
          .setText('second')
          .build();

        expect(cc.text).toBe('second');
      });

      it('should accumulate codings', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({ code: 'A' })
          .addCoding({ code: 'B' })
          .addCoding({ code: 'C' })
          .build();

        expect(cc.coding).toHaveLength(3);
        expect(cc.coding?.map((c) => c.code)).toEqual(['A', 'B', 'C']);
      });
    });

    describe('Complex Properties', () => {
      it('should build with full coding objects', () => {
        const cc = new CodeableConceptBuilder()
          .addCoding({
            system: 'http://snomed.info/sct',
            code: '386661006',
            display: 'Fever',
            version: '2023-01',
            userSelected: true,
          })
          .build();

        const coding = cc.coding?.[0];
        expect(coding?.system).toBe('http://snomed.info/sct');
        expect(coding?.code).toBe('386661006');
        expect(coding?.display).toBe('Fever');
        expect(coding?.version).toBe('2023-01');
        expect(coding?.userSelected).toBe(true);
      });

      it('should build typical marital status', () => {
        const cc = new CodeableConceptBuilder()
          .setText('Married')
          .addCoding({
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M',
            display: 'Married',
          })
          .build();

        expect(cc.text).toBe('Married');
        expect(cc.coding?.[0]?.code).toBe('M');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const cc = new CodeableConceptBuilder()
          .setId('cc-1')
          .setText('Test')
          .build();

        expect(cc.id).toBe('cc-1');
      });

      it('should add extension from ElementBuilder', () => {
        const cc = new CodeableConceptBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setText('Test')
          .build();

        expect(cc.extension).toHaveLength(1);
        expect(cc.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const cc = new CodeableConceptBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(cc.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new CodeableConceptBuilder().setText('first');
        const first = builder.build();

        builder.setText('second');
        const second = builder.build();

        expect(first.text).toBe('first');
        expect(second.text).toBe('second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const cc = new CodeableConceptBuilder()
          .setText('Test')
          .addCoding({ code: 'TEST' })
          .build();

        const json = cc.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new CodeableConceptBuilder()
          .setText('Test')
          .addCoding({ system: 'http://example.org', code: 'TEST' })
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
    it('should work in typical condition code scenario', () => {
      // Create condition code
      const conditionCode = new CodeableConceptBuilder()
        .setText('Type 2 diabetes mellitus')
        .addCoding({
          system: 'http://snomed.info/sct',
          code: '44054006',
          display: 'Type 2 diabetes mellitus',
        })
        .addCoding({
          system: 'http://hl7.org/fhir/sid/icd-10',
          code: 'E11',
          display: 'Type 2 diabetes mellitus',
        })
        .build();

      expect(conditionCode.coding).toHaveLength(2);
      expect(conditionCode.text).toBe('Type 2 diabetes mellitus');

      // Serialize and restore
      const json = conditionCode.toJSON();
      const restored = CodeableConcept.fromJSON(json);

      expect(restored.coding).toHaveLength(2);
      expect(restored.coding?.[0]?.system).toBe('http://snomed.info/sct');
      expect(restored.coding?.[1]?.system).toBe('http://hl7.org/fhir/sid/icd-10');
    });

    it('should handle medication code with RxNorm', () => {
      const medicationCode = new CodeableConcept({
        coding: [
          {
            system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
            code: '313782',
            display: 'Acetaminophen 325 MG Oral Tablet',
          },
        ],
        text: 'Tylenol 325mg tablet',
      });

      expect(medicationCode.coding?.[0]?.code).toBe('313782');
      expect(medicationCode.text).toBe('Tylenol 325mg tablet');
    });

    it('should update text while preserving codings', () => {
      const original = new CodeableConcept({
        text: 'Original text',
        coding: [{ system: 'http://example.org', code: 'TEST' }],
      });

      const updated = original.with({ text: 'Updated text' });

      expect(updated.text).toBe('Updated text');
      expect(updated.coding?.[0]?.code).toBe('TEST');
      expect(original.text).toBe('Original text');
    });
  });
});
