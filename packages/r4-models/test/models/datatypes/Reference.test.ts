/**
 * Reference Model and Builder Tests
 *
 * Tests for the Reference datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Reference, ReferenceBuilder } from '../../../src/index.js';
import type { IReference } from '@fhir-toolkit/r4-types';
import { references, identifiers } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Reference', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ref = new Reference({});
        expect(ref).toBeInstanceOf(Reference);
        expect(ref.reference).toBeUndefined();
        expect(ref.display).toBeUndefined();
      });

      it('should create instance with reference only', () => {
        const ref = new Reference({ reference: 'Patient/123' });
        expect(ref.reference).toBe('Patient/123');
        expect(ref.display).toBeUndefined();
      });

      it('should create instance with reference and display', () => {
        const ref = new Reference(references.patient);
        expect(ref.reference).toBe('Patient/123');
        expect(ref.display).toBe('John Smith');
      });

      it('should create instance with type', () => {
        const ref = new Reference(references.practitioner);
        expect(ref.reference).toBe('Practitioner/456');
        expect(ref.type).toBe('Practitioner');
        expect(ref.display).toBe('Dr. Maria Garcia');
      });

      it('should create instance with identifier', () => {
        const ref = new Reference(references.organization);
        expect(ref.reference).toBe('Organization/789');
        expect(ref.identifier?.system).toBe('http://example.org/org-ids');
        expect(ref.identifier?.value).toBe('ORG-001');
        expect(ref.display).toBe('General Hospital');
      });

      it('should create contained reference', () => {
        const ref = new Reference(references.contained);
        expect(ref.reference).toBe('#practitioner-1');
      });

      it('should create absolute URL reference', () => {
        const ref = new Reference({
          reference: 'http://external.org/fhir/Patient/external-123',
          display: 'External Patient',
        });
        expect(ref.reference).toBe('http://external.org/fhir/Patient/external-123');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ref = new Reference(references.patient);
        const json = ref.toJSON();

        expect(json.reference).toBe('Patient/123');
        expect(json.display).toBe('John Smith');
      });

      it('should omit undefined properties in JSON', () => {
        const ref = new Reference({ reference: 'Patient/123' });
        const json = ref.toJSON();

        expect(json.reference).toBe('Patient/123');
        expect(json).not.toHaveProperty('type');
        expect(json).not.toHaveProperty('identifier');
        expect(json).not.toHaveProperty('display');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Reference(references.organization);
        expectSerializationRoundtrip(original, Reference);
      });

      it('should preserve identifier in JSON', () => {
        const ref = new Reference({
          reference: 'Patient/123',
          identifier: {
            system: 'http://example.org/ids',
            value: 'ID-123',
          },
        });
        const json = ref.toJSON();

        expect(json.identifier?.system).toBe('http://example.org/ids');
        expect(json.identifier?.value).toBe('ID-123');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IReference = {
          reference: 'Patient/json-123',
          display: 'JSON Patient',
        };
        const ref = Reference.fromJSON(json);

        expect(ref).toBeInstanceOf(Reference);
        expect(ref.reference).toBe('Patient/json-123');
        expect(ref.display).toBe('JSON Patient');
      });

      it('should create identical instance from JSON', () => {
        const original = new Reference(references.organization);
        const json = original.toJSON();
        const restored = Reference.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Reference({ reference: 'Patient/123', display: 'Original' });
        const updated = original.with({ display: 'Updated' });

        expect(updated).not.toBe(original);
        expect(updated.display).toBe('Updated');
        expect(updated.reference).toBe('Patient/123'); // Preserved from original
        expect(original.display).toBe('Original'); // Original unchanged
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Reference({ reference: 'Patient/123', display: 'Original' });
        const updated = original.with({
          reference: 'Patient/456',
          display: 'Updated',
        });

        expect(updated.reference).toBe('Patient/456');
        expect(updated.display).toBe('Updated');
        expect(original.reference).toBe('Patient/123');
      });

      it('should apply transform function correctly', () => {
        const ref = new Reference({ reference: 'patient/123', display: 'test' });
        const transformed = ref.applyTransform((data) => ({
          reference: data.reference?.replace('patient', 'Patient'),
          display: data.display?.toUpperCase(),
        }));

        expect(transformed.reference).toBe('Patient/123');
        expect(transformed.display).toBe('TEST');
        expect(ref.reference).toBe('patient/123'); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Reference(references.organization);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned identifier', () => {
        const original = new Reference({
          reference: 'Patient/123',
          identifier: { system: 'http://example.org', value: 'ID-123' },
        });
        const cloned = original.clone();

        // Modify the clone's nested object
        if (cloned.identifier) {
          cloned.identifier.value = 'MODIFIED';
        }

        // Original should be unchanged
        expect(original.identifier?.value).toBe('ID-123');
      });

      it('should clone all properties', () => {
        const original = new Reference({
          reference: 'Patient/123',
          type: 'Patient',
          identifier: { value: 'ID-123' },
          display: 'Test Patient',
        });
        const cloned = original.clone();

        expect(cloned.reference).toBe(original.reference);
        expect(cloned.type).toBe(original.type);
        expect(cloned.identifier).toEqual(original.identifier);
        expect(cloned.display).toBe(original.display);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ref = new Reference({ reference: 'Patient/123' });
        const str = ref.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Reference');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _reference extension', () => {
        const ref = new Reference({
          reference: 'Patient/123',
          _reference: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'extended reference' },
            ],
          },
        });

        expect(ref._reference?.extension?.[0]?.valueString).toBe('extended reference');
      });

      it('should serialize extension properties', () => {
        const ref = new Reference({
          display: 'Test',
          _display: {
            id: 'display-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = ref.toJSON();

        expect(json._display?.id).toBe('display-ext');
        expect(json._display?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Reference Formats', () => {
      it('should handle relative reference', () => {
        const ref = new Reference({ reference: 'Patient/123' });
        expect(ref.reference).toBe('Patient/123');
      });

      it('should handle contained reference', () => {
        const ref = new Reference({ reference: '#contained-1' });
        expect(ref.reference).toBe('#contained-1');
      });

      it('should handle absolute URL reference', () => {
        const ref = new Reference({
          reference: 'http://example.org/fhir/Patient/123',
        });
        expect(ref.reference).toBe('http://example.org/fhir/Patient/123');
      });

      it('should handle URN reference', () => {
        const ref = new Reference({
          reference: 'urn:uuid:a1234567-1234-1234-1234-123456789abc',
        });
        expect(ref.reference).toBe('urn:uuid:a1234567-1234-1234-1234-123456789abc');
      });

      it('should handle logical reference (identifier only)', () => {
        const ref = new Reference({
          type: 'Patient',
          identifier: {
            system: 'http://example.org/mrn',
            value: 'MRN-12345',
          },
        });
        expect(ref.reference).toBeUndefined();
        expect(ref.type).toBe('Patient');
        expect(ref.identifier?.value).toBe('MRN-12345');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ref = new ReferenceBuilder().build();
        expect(ref).toBeInstanceOf(Reference);
      });

      it('should build with reference only', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/123')
          .build();

        expect(ref.reference).toBe('Patient/123');
      });

      it('should build with reference and display', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/123')
          .setDisplay('John Smith')
          .build();

        expect(ref.reference).toBe('Patient/123');
        expect(ref.display).toBe('John Smith');
      });

      it('should build with all properties', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/123')
          .setType('Patient')
          .setDisplay('John Smith')
          .setIdentifier({
            system: 'http://example.org/mrn',
            value: 'MRN-123',
          })
          .build();

        expect(ref.reference).toBe('Patient/123');
        expect(ref.type).toBe('Patient');
        expect(ref.display).toBe('John Smith');
        expect(ref.identifier?.value).toBe('MRN-123');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ReferenceBuilder()
          .setReference('Patient/123')
          .setType('Patient')
          .setDisplay('Test');

        expect(builder).toBeInstanceOf(ReferenceBuilder);
      });

      it('should allow overwriting properties', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/first')
          .setReference('Patient/second')
          .build();

        expect(ref.reference).toBe('Patient/second');
      });
    });

    describe('Common Reference Types', () => {
      it('should build Patient reference', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/123')
          .setType('Patient')
          .setDisplay('John Smith')
          .build();

        expect(ref.reference).toBe('Patient/123');
        expect(ref.type).toBe('Patient');
      });

      it('should build Practitioner reference', () => {
        const ref = new ReferenceBuilder()
          .setReference('Practitioner/456')
          .setType('Practitioner')
          .setDisplay('Dr. Jane Doe')
          .build();

        expect(ref.reference).toBe('Practitioner/456');
        expect(ref.type).toBe('Practitioner');
      });

      it('should build Organization reference', () => {
        const ref = new ReferenceBuilder()
          .setReference('Organization/789')
          .setType('Organization')
          .setDisplay('General Hospital')
          .build();

        expect(ref.reference).toBe('Organization/789');
        expect(ref.type).toBe('Organization');
      });

      it('should build Encounter reference', () => {
        const ref = new ReferenceBuilder()
          .setReference('Encounter/enc-001')
          .setType('Encounter')
          .build();

        expect(ref.reference).toBe('Encounter/enc-001');
        expect(ref.type).toBe('Encounter');
      });
    });

    describe('Logical References', () => {
      it('should build logical reference with identifier', () => {
        const ref = new ReferenceBuilder()
          .setType('Patient')
          .setIdentifier({
            system: 'http://hospital.example.org/mrn',
            value: 'MRN-12345',
          })
          .build();

        expect(ref.reference).toBeUndefined();
        expect(ref.type).toBe('Patient');
        expect(ref.identifier?.system).toBe('http://hospital.example.org/mrn');
        expect(ref.identifier?.value).toBe('MRN-12345');
      });

      it('should build logical reference with full identifier', () => {
        const ref = new ReferenceBuilder()
          .setType('Organization')
          .setIdentifier(identifiers.run)
          .setDisplay('Organization identified by RUN')
          .build();

        expect(ref.type).toBe('Organization');
        expect(ref.identifier?.system).toBe('http://minsal.cl/run');
        expect(ref.display).toBe('Organization identified by RUN');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ref = new ReferenceBuilder()
          .setId('ref-1')
          .setReference('Patient/123')
          .build();

        expect(ref.id).toBe('ref-1');
      });

      it('should add extension from ElementBuilder', () => {
        const ref = new ReferenceBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setReference('Patient/123')
          .build();

        expect(ref.extension).toHaveLength(1);
        expect(ref.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const ref = new ReferenceBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(ref.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ReferenceBuilder().setReference('Patient/first');
        const first = builder.build();

        builder.setReference('Patient/second');
        const second = builder.build();

        expect(first.reference).toBe('Patient/first');
        expect(second.reference).toBe('Patient/second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ref = new ReferenceBuilder()
          .setReference('Patient/123')
          .setDisplay('Test')
          .build();

        const json = ref.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ReferenceBuilder()
          .setReference('Patient/123')
          .setDisplay('Test')
          .setIdentifier({ value: 'ID-123' })
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
    it('should work in typical patient subject scenario', () => {
      // Create reference for a subject
      const subjectRef = new ReferenceBuilder()
        .setReference('Patient/123')
        .setDisplay('John Smith')
        .build();

      expect(subjectRef.reference).toBe('Patient/123');
      expect(subjectRef.display).toBe('John Smith');

      // Serialize and restore
      const json = subjectRef.toJSON();
      const restored = Reference.fromJSON(json);

      expect(restored.reference).toBe('Patient/123');
      expect(restored.display).toBe('John Smith');
    });

    it('should handle encounter with multiple references', () => {
      // Subject reference
      const subject = new ReferenceBuilder()
        .setReference('Patient/123')
        .setType('Patient')
        .build();

      // Participant reference
      const participant = new ReferenceBuilder()
        .setReference('Practitioner/456')
        .setType('Practitioner')
        .setDisplay('Dr. Smith')
        .build();

      // Service provider reference
      const serviceProvider = new ReferenceBuilder()
        .setReference('Organization/789')
        .setType('Organization')
        .setDisplay('General Hospital')
        .build();

      expect(subject.type).toBe('Patient');
      expect(participant.type).toBe('Practitioner');
      expect(serviceProvider.type).toBe('Organization');
    });

    it('should update display while preserving reference', () => {
      const original = new Reference({
        reference: 'Patient/123',
        display: 'Original Name',
      });

      const updated = original.with({ display: 'Updated Name' });

      expect(updated.display).toBe('Updated Name');
      expect(updated.reference).toBe('Patient/123');
      expect(original.display).toBe('Original Name');
    });

    it('should handle cross-server reference', () => {
      const externalRef = new Reference({
        reference: 'http://external-hospital.org/fhir/Patient/ext-123',
        type: 'Patient',
        display: 'External Patient',
      });

      expect(externalRef.reference).toBe('http://external-hospital.org/fhir/Patient/ext-123');
      expect(externalRef.type).toBe('Patient');

      const json = externalRef.toJSON();
      expect(json.reference).toContain('http://');
    });
  });
});
