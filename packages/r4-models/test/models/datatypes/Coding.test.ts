/**
 * Coding Model and Builder Tests
 *
 * Tests for the Coding datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Coding, CodingBuilder } from '../../../src/index.js';
import type { ICoding } from '@fhir-toolkit/r4-types';
import { codings } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Coding', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const coding = new Coding({});
        expect(coding).toBeInstanceOf(Coding);
        expect(coding.system).toBeUndefined();
        expect(coding.code).toBeUndefined();
        expect(coding.display).toBeUndefined();
      });

      it('should create instance with code only', () => {
        const coding = new Coding({ code: 'TEST' });
        expect(coding.code).toBe('TEST');
        expect(coding.system).toBeUndefined();
      });

      it('should create instance with system and code', () => {
        const coding = new Coding(codings.snomed);
        expect(coding.system).toBe('http://snomed.info/sct');
        expect(coding.code).toBe('38341003');
        expect(coding.display).toBe('Hypertensive disorder, systemic arterial');
      });

      it('should create instance with all properties', () => {
        const coding = new Coding({
          system: 'http://example.org',
          version: '2024-01',
          code: 'TEST',
          display: 'Test Code',
          userSelected: true,
        });
        expect(coding.system).toBe('http://example.org');
        expect(coding.version).toBe('2024-01');
        expect(coding.code).toBe('TEST');
        expect(coding.display).toBe('Test Code');
        expect(coding.userSelected).toBe(true);
      });

      it('should create LOINC coding', () => {
        const coding = new Coding(codings.loinc);
        expect(coding.system).toBe('http://loinc.org');
        expect(coding.code).toBe('8310-5');
        expect(coding.display).toBe('Body temperature');
      });

      it('should create ICD-10 coding', () => {
        const coding = new Coding(codings.icd10);
        expect(coding.system).toBe('http://hl7.org/fhir/sid/icd-10');
        expect(coding.code).toBe('I10');
        expect(coding.display).toBe('Essential (primary) hypertension');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const coding = new Coding(codings.snomed);
        const json = coding.toJSON();

        expect(json.system).toBe('http://snomed.info/sct');
        expect(json.code).toBe('38341003');
        expect(json.display).toBe('Hypertensive disorder, systemic arterial');
      });

      it('should omit undefined properties in JSON', () => {
        const coding = new Coding({ code: 'TEST' });
        const json = coding.toJSON();

        expect(json.code).toBe('TEST');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('version');
        expect(json).not.toHaveProperty('display');
        expect(json).not.toHaveProperty('userSelected');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Coding(codings.snomed);
        expectSerializationRoundtrip(original, Coding);
      });

      it('should preserve all properties in JSON', () => {
        const coding = new Coding({
          system: 'http://example.org',
          version: '1.0',
          code: 'TEST',
          display: 'Test',
          userSelected: true,
        });
        const json = coding.toJSON();

        expect(json.system).toBe('http://example.org');
        expect(json.version).toBe('1.0');
        expect(json.code).toBe('TEST');
        expect(json.display).toBe('Test');
        expect(json.userSelected).toBe(true);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ICoding = {
          system: 'http://example.org',
          code: 'json-code',
          display: 'JSON Code',
        };
        const coding = Coding.fromJSON(json);

        expect(coding).toBeInstanceOf(Coding);
        expect(coding.system).toBe('http://example.org');
        expect(coding.code).toBe('json-code');
      });

      it('should create identical instance from JSON', () => {
        const original = new Coding(codings.loinc);
        const json = original.toJSON();
        const restored = Coding.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Coding({ code: 'original', system: 'http://example.org' });
        const updated = original.with({ code: 'updated' });

        expect(updated).not.toBe(original);
        expect(updated.code).toBe('updated');
        expect(updated.system).toBe('http://example.org'); // Preserved from original
        expect(original.code).toBe('original'); // Original unchanged
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Coding({ code: 'original', display: 'Original' });
        const updated = original.with({ code: 'updated', display: 'Updated' });

        expect(updated.code).toBe('updated');
        expect(updated.display).toBe('Updated');
        expect(original.code).toBe('original');
        expect(original.display).toBe('Original');
      });

      it('should apply transform function correctly', () => {
        const coding = new Coding({ code: 'test', display: 'test display' });
        const transformed = coding.applyTransform((data) => ({
          code: data.code?.toUpperCase(),
          display: data.display?.toUpperCase(),
        }));

        expect(transformed.code).toBe('TEST');
        expect(transformed.display).toBe('TEST DISPLAY');
        expect(coding.code).toBe('test'); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Coding(codings.snomed);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Coding({
          system: 'http://example.org',
          version: '1.0',
          code: 'TEST',
          display: 'Test',
          userSelected: true,
        });
        const cloned = original.clone();

        expect(cloned.system).toBe(original.system);
        expect(cloned.version).toBe(original.version);
        expect(cloned.code).toBe(original.code);
        expect(cloned.display).toBe(original.display);
        expect(cloned.userSelected).toBe(original.userSelected);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const coding = new Coding({ code: 'TEST' });
        const str = coding.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Coding');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _code extension', () => {
        const coding = new Coding({
          code: 'TEST',
          _code: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'extended code' },
            ],
          },
        });

        expect(coding._code?.extension?.[0]?.valueString).toBe('extended code');
      });

      it('should serialize extension properties', () => {
        const coding = new Coding({
          code: 'TEST',
          _display: {
            id: 'display-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = coding.toJSON();

        expect(json._display?.id).toBe('display-ext');
        expect(json._display?.extension?.[0]?.valueBoolean).toBe(true);
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

      it('should build with code only', () => {
        const coding = new CodingBuilder()
          .setCode('TEST')
          .build();

        expect(coding.code).toBe('TEST');
      });

      it('should build with system and code', () => {
        const coding = new CodingBuilder()
          .setSystem('http://example.org')
          .setCode('TEST')
          .build();

        expect(coding.system).toBe('http://example.org');
        expect(coding.code).toBe('TEST');
      });

      it('should build with all properties', () => {
        const coding = new CodingBuilder()
          .setSystem('http://example.org')
          .setVersion('2024-01')
          .setCode('TEST')
          .setDisplay('Test Code')
          .setUserSelected(true)
          .build();

        expect(coding.system).toBe('http://example.org');
        expect(coding.version).toBe('2024-01');
        expect(coding.code).toBe('TEST');
        expect(coding.display).toBe('Test Code');
        expect(coding.userSelected).toBe(true);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new CodingBuilder()
          .setSystem('http://example.org')
          .setCode('TEST')
          .setDisplay('Test');

        expect(builder).toBeInstanceOf(CodingBuilder);
      });

      it('should allow overwriting properties', () => {
        const coding = new CodingBuilder()
          .setCode('first')
          .setCode('second')
          .build();

        expect(coding.code).toBe('second');
      });
    });

    describe('Common Coding Systems', () => {
      it('should build SNOMED CT coding', () => {
        const coding = new CodingBuilder()
          .setSystem('http://snomed.info/sct')
          .setCode('38341003')
          .setDisplay('Hypertensive disorder, systemic arterial')
          .build();

        expect(coding.system).toBe('http://snomed.info/sct');
        expect(coding.code).toBe('38341003');
      });

      it('should build LOINC coding', () => {
        const coding = new CodingBuilder()
          .setSystem('http://loinc.org')
          .setCode('8310-5')
          .setDisplay('Body temperature')
          .build();

        expect(coding.system).toBe('http://loinc.org');
        expect(coding.code).toBe('8310-5');
      });

      it('should build ICD-10 coding', () => {
        const coding = new CodingBuilder()
          .setSystem('http://hl7.org/fhir/sid/icd-10')
          .setCode('I10')
          .setDisplay('Essential (primary) hypertension')
          .build();

        expect(coding.system).toBe('http://hl7.org/fhir/sid/icd-10');
        expect(coding.code).toBe('I10');
      });

      it('should build RxNorm coding', () => {
        const coding = new CodingBuilder()
          .setSystem('http://www.nlm.nih.gov/research/umls/rxnorm')
          .setCode('313782')
          .setDisplay('Acetaminophen 325 MG Oral Tablet')
          .build();

        expect(coding.system).toBe('http://www.nlm.nih.gov/research/umls/rxnorm');
        expect(coding.code).toBe('313782');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const coding = new CodingBuilder()
          .setId('coding-1')
          .setCode('TEST')
          .build();

        expect(coding.id).toBe('coding-1');
      });

      it('should add extension from ElementBuilder', () => {
        const coding = new CodingBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setCode('TEST')
          .build();

        expect(coding.extension).toHaveLength(1);
        expect(coding.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const coding = new CodingBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(coding.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new CodingBuilder().setCode('first');
        const first = builder.build();

        builder.setCode('second');
        const second = builder.build();

        expect(first.code).toBe('first');
        expect(second.code).toBe('second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const coding = new CodingBuilder()
          .setSystem('http://example.org')
          .setCode('TEST')
          .build();

        const json = coding.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new CodingBuilder()
          .setSystem('http://example.org')
          .setCode('TEST')
          .setDisplay('Test')
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
    it('should work in typical diagnosis scenario', () => {
      // Create SNOMED coding for diagnosis
      const diagnosisCoding = new CodingBuilder()
        .setSystem('http://snomed.info/sct')
        .setCode('44054006')
        .setDisplay('Type 2 diabetes mellitus')
        .build();

      expect(diagnosisCoding.system).toBe('http://snomed.info/sct');
      expect(diagnosisCoding.code).toBe('44054006');

      // Serialize and restore
      const json = diagnosisCoding.toJSON();
      const restored = Coding.fromJSON(json);

      expect(restored.code).toBe('44054006');
      expect(restored.display).toBe('Type 2 diabetes mellitus');
    });

    it('should handle user-selected coding', () => {
      const coding = new CodingBuilder()
        .setSystem('http://snomed.info/sct')
        .setCode('38341003')
        .setDisplay('Hypertensive disorder')
        .setUserSelected(true)
        .build();

      expect(coding.userSelected).toBe(true);

      // Change selection status
      const updated = coding.with({ userSelected: false });

      expect(updated.userSelected).toBe(false);
      expect(updated.code).toBe('38341003'); // Preserved
      expect(coding.userSelected).toBe(true); // Original unchanged
    });

    it('should handle versioned coding system', () => {
      const coding = new Coding({
        system: 'http://hl7.org/fhir/ValueSet/condition-clinical',
        version: '4.0.1',
        code: 'active',
        display: 'Active',
      });

      expect(coding.version).toBe('4.0.1');

      const json = coding.toJSON();
      expect(json.version).toBe('4.0.1');
    });
  });
});
