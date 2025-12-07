/**
 * Extension Model and Builder Tests
 *
 * Tests for the Extension datatype class and its builder.
 * Extension is an optional element found in all FHIR resources.
 */

import { describe, it, expect } from 'vitest';
import { Extension, ExtensionBuilder } from '../../../src/index.js';
import type { IExtension } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const extensions = {
  stringValue: {
    url: 'http://example.org/fhir/StructureDefinition/nickname',
    valueString: 'Johnny',
  } as IExtension,
  booleanValue: {
    url: 'http://example.org/fhir/StructureDefinition/active-flag',
    valueBoolean: true,
  } as IExtension,
  integerValue: {
    url: 'http://example.org/fhir/StructureDefinition/priority',
    valueInteger: 5,
  } as IExtension,
  codeValue: {
    url: 'http://hl7.org/fhir/StructureDefinition/patient-religion',
    valueCode: 'CHR',
  } as IExtension,
  dateValue: {
    url: 'http://example.org/fhir/StructureDefinition/admission-date',
    valueDate: '2024-01-15',
  } as IExtension,
  dateTimeValue: {
    url: 'http://example.org/fhir/StructureDefinition/created-at',
    valueDateTime: '2024-01-15T10:30:00Z',
  } as IExtension,
  codingValue: {
    url: 'http://hl7.org/fhir/StructureDefinition/patient-importance',
    valueCoding: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-PatientImportance',
      code: 'VIP',
      display: 'Very Important Person',
    },
  } as IExtension,
  codeableConceptValue: {
    url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
    valueCodeableConcept: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'US',
          display: 'United States of America',
        },
      ],
      text: 'US Citizen',
    },
  } as IExtension,
  referenceValue: {
    url: 'http://example.org/fhir/StructureDefinition/related-person',
    valueReference: {
      reference: 'RelatedPerson/123',
      display: 'Jane Doe',
    },
  } as IExtension,
  quantityValue: {
    url: 'http://example.org/fhir/StructureDefinition/weight',
    valueQuantity: {
      value: 70,
      unit: 'kg',
      system: 'http://unitsofmeasure.org',
      code: 'kg',
    },
  } as IExtension,
};

describe('Extension', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ext = new Extension({});
        expect(ext).toBeInstanceOf(Extension);
      });

      it('should create extension with string value', () => {
        const ext = new Extension(extensions.stringValue);
        expect(ext.url).toBe('http://example.org/fhir/StructureDefinition/nickname');
        expect(ext.valueString).toBe('Johnny');
      });

      it('should create extension with boolean value', () => {
        const ext = new Extension(extensions.booleanValue);
        expect(ext.valueBoolean).toBe(true);
      });

      it('should create extension with integer value', () => {
        const ext = new Extension(extensions.integerValue);
        expect(ext.valueInteger).toBe(5);
      });

      it('should create extension with code value', () => {
        const ext = new Extension(extensions.codeValue);
        expect(ext.valueCode).toBe('CHR');
      });

      it('should create extension with date value', () => {
        const ext = new Extension(extensions.dateValue);
        expect(ext.valueDate).toBe('2024-01-15');
      });

      it('should create extension with dateTime value', () => {
        const ext = new Extension(extensions.dateTimeValue);
        expect(ext.valueDateTime).toBe('2024-01-15T10:30:00Z');
      });

      it('should create extension with coding value', () => {
        const ext = new Extension(extensions.codingValue);
        expect(ext.valueCoding?.code).toBe('VIP');
      });

      it('should create extension with codeableConcept value', () => {
        const ext = new Extension(extensions.codeableConceptValue);
        expect(ext.valueCodeableConcept?.coding?.[0].code).toBe('US');
      });

      it('should create extension with reference value', () => {
        const ext = new Extension(extensions.referenceValue);
        expect(ext.valueReference?.reference).toBe('RelatedPerson/123');
      });

      it('should create extension with quantity value', () => {
        const ext = new Extension(extensions.quantityValue);
        expect(ext.valueQuantity?.value).toBe(70);
        expect(ext.valueQuantity?.unit).toBe('kg');
      });

      it('should create extension with url only', () => {
        const ext = new Extension({
          url: 'http://example.org/extension',
        });
        expect(ext.url).toBe('http://example.org/extension');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON with string value', () => {
        const ext = new Extension(extensions.stringValue);
        const json = ext.toJSON();

        expect(json.url).toBe('http://example.org/fhir/StructureDefinition/nickname');
        expect(json.valueString).toBe('Johnny');
      });

      it('should omit undefined properties in JSON', () => {
        const ext = new Extension(extensions.stringValue);
        const json = ext.toJSON();

        expect(json.url).toBeDefined();
        expect(json.valueString).toBeDefined();
        expect(json).not.toHaveProperty('valueBoolean');
        expect(json).not.toHaveProperty('valueInteger');
        expect(json).not.toHaveProperty('valueCoding');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Extension(extensions.codingValue);
        expectSerializationRoundtrip(original, Extension);
      });

      it('should preserve complex value types', () => {
        const ext = new Extension(extensions.codeableConceptValue);
        const json = ext.toJSON();

        expect(json.valueCodeableConcept?.coding?.[0].system).toBe('urn:iso:std:iso:3166');
        expect(json.valueCodeableConcept?.text).toBe('US Citizen');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IExtension = {
          url: 'http://test.org/ext',
          valueString: 'test value',
        };
        const ext = Extension.fromJSON(json);

        expect(ext).toBeInstanceOf(Extension);
        expect(ext.url).toBe('http://test.org/ext');
        expect(ext.valueString).toBe('test value');
      });

      it('should create identical instance from JSON', () => {
        const original = new Extension(extensions.quantityValue);
        const json = original.toJSON();
        const restored = Extension.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Extension(extensions.stringValue);
        const updated = original.with({ valueString: 'Jimmy' });

        expect(updated).not.toBe(original);
        expect(updated.valueString).toBe('Jimmy');
        expect(original.valueString).toBe('Johnny');
      });

      it('should preserve url when changing value', () => {
        const original = new Extension(extensions.integerValue);
        const updated = original.with({ valueInteger: 10 });

        expect(updated.url).toBe(original.url);
        expect(updated.valueInteger).toBe(10);
      });

      it('should apply transform function correctly', () => {
        const ext = new Extension(extensions.stringValue);
        const transformed = ext.applyTransform((data) => ({
          valueString: data.valueString?.toUpperCase(),
        }));

        expect(transformed.valueString).toBe('JOHNNY');
        expect(ext.valueString).toBe('Johnny');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Extension(extensions.codeableConceptValue);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned complex value', () => {
        const original = new Extension(extensions.codingValue);
        const cloned = original.clone();

        if (cloned.valueCoding) {
          cloned.valueCoding.code = 'MODIFIED';
        }

        expect(original.valueCoding?.code).toBe('VIP');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ext = new Extension(extensions.stringValue);
        const str = ext.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Extension');
      });
    });

    describe('Nested Extensions', () => {
      it('should handle nested extensions', () => {
        const ext = new Extension({
          url: 'http://example.org/complex-extension',
          extension: [
            { url: 'part1', valueString: 'value1' },
            { url: 'part2', valueInteger: 42 },
          ],
        });

        expect(ext.extension).toHaveLength(2);
        expect(ext.extension?.[0].valueString).toBe('value1');
        expect(ext.extension?.[1].valueInteger).toBe(42);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const ext = new Extension({
          id: 'ext-1',
          url: 'http://example.org/ext',
          valueString: 'test',
        });

        expect(ext.id).toBe('ext-1');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ext = new ExtensionBuilder().build();
        expect(ext).toBeInstanceOf(Extension);
      });

      it('should build with url only', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .build();

        expect(ext.url).toBe('http://example.org/ext');
      });

      it('should build with string value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('String', 'test value')
          .build();

        expect(ext.valueString).toBe('test value');
      });

      it('should build with boolean value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('Boolean', true)
          .build();

        expect(ext.valueBoolean).toBe(true);
      });

      it('should build with integer value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('Integer', 42)
          .build();

        expect(ext.valueInteger).toBe(42);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('String', 'test');

        expect(builder).toBeInstanceOf(ExtensionBuilder);
      });

      it('should allow overwriting value type', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('String', 'first')
          .setValue('Integer', 42)
          .build();

        expect(ext.valueInteger).toBe(42);
        // Previous value type should be cleared
        expect(ext.valueString).toBeUndefined();
      });
    });

    describe('Specialized Value Setters', () => {
      it('should set positive int value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('PositiveInt', 5)
          .build();

        expect(ext.valuePositiveInt).toBe(5);
      });

      it('should set unsigned int value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('UnsignedInt', 100)
          .build();

        expect(ext.valueUnsignedInt).toBe(100);
      });

      it('should set uuid value', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('Uuid', 'urn:uuid:12345678-1234-1234-1234-123456789012')
          .build();

        expect(ext.valueUuid).toBe('urn:uuid:12345678-1234-1234-1234-123456789012');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ext = new ExtensionBuilder()
          .setId('ext-1')
          .setUrl('http://example.org/ext')
          .build();

        expect(ext.id).toBe('ext-1');
      });

      it('should add nested extension', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/complex')
          .addExtension({
            url: 'nested',
            valueString: 'nested value',
          })
          .build();

        expect(ext.extension).toHaveLength(1);
        expect(ext.extension?.[0].valueString).toBe('nested value');
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('String', 'first');
        const first = builder.build();

        builder.setValue('String', 'second');
        const second = builder.build();

        expect(first.valueString).toBe('first');
        expect(second.valueString).toBe('second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ext = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('String', 'test')
          .build();

        const json = ext.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ExtensionBuilder()
          .setUrl('http://example.org/ext')
          .setValue('Integer', 42)
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
    it('should work in patient extension scenario', () => {
      const birthPlaceExt = new ExtensionBuilder()
        .setUrl('http://hl7.org/fhir/StructureDefinition/patient-birthPlace')
        .setValue('Address', {
          city: 'Boston',
          state: 'MA',
          country: 'USA',
        } as any)
        .build();

      expect(birthPlaceExt.url).toContain('patient-birthPlace');

      const json = birthPlaceExt.toJSON();
      const restored = Extension.fromJSON(json);

      expect(restored.url).toContain('patient-birthPlace');
    });

    it('should work in race extension scenario', () => {
      const raceExt = new Extension({
        url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
        extension: [
          {
            url: 'ombCategory',
            valueCoding: {
              system: 'urn:oid:2.16.840.1.113883.6.238',
              code: '2106-3',
              display: 'White',
            },
          },
          {
            url: 'text',
            valueString: 'White',
          },
        ],
      });

      expect(raceExt.extension).toHaveLength(2);
      expect(raceExt.extension?.[0].valueCoding?.code).toBe('2106-3');
    });

    it('should work in medication extension scenario', () => {
      const strengthExt = new Extension({
        url: 'http://example.org/fhir/StructureDefinition/medication-strength',
        valueQuantity: {
          value: 500,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      });

      expect(strengthExt.valueQuantity?.value).toBe(500);
    });

    it('should handle extension update', () => {
      const original = new Extension(extensions.integerValue);

      const updated = original.with({
        valueInteger: 10,
      });

      expect(updated.valueInteger).toBe(10);
      expect(original.valueInteger).toBe(5);
    });

    it('should handle multiple value types', () => {
      const stringExt = new Extension({ url: 'http://test.org/s', valueString: 'text' });
      const boolExt = new Extension({ url: 'http://test.org/b', valueBoolean: false });
      const intExt = new Extension({ url: 'http://test.org/i', valueInteger: 0 });

      expect(stringExt.valueString).toBe('text');
      expect(boolExt.valueBoolean).toBe(false);
      expect(intExt.valueInteger).toBe(0);
    });

    it('should work with period value', () => {
      const ext = new Extension({
        url: 'http://example.org/fhir/StructureDefinition/validity-period',
        valuePeriod: {
          start: '2024-01-01',
          end: '2024-12-31',
        },
      });

      expect(ext.valuePeriod?.start).toBe('2024-01-01');
      expect(ext.valuePeriod?.end).toBe('2024-12-31');
    });
  });
});
