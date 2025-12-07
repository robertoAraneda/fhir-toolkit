/**
 * Signature Model and Builder Tests
 *
 * Tests for the Signature datatype class and its builder.
 * Signature represents a digital or other signature along with supporting context.
 */

import { describe, it, expect } from 'vitest';
import { Signature, SignatureBuilder } from '../../../src/index.js';
import type { ISignature } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const signatures = {
  simple: {
    type: [
      {
        system: 'urn:iso-astm:E1762-95:2013',
        code: '1.2.840.10065.1.12.1.1',
        display: 'Author\'s Signature',
      },
    ],
    when: '2024-01-15T10:30:00Z',
    who: {
      reference: 'Practitioner/123',
      display: 'Dr. John Smith',
    },
  } as ISignature,
  complete: {
    type: [
      {
        system: 'urn:iso-astm:E1762-95:2013',
        code: '1.2.840.10065.1.12.1.1',
        display: 'Author\'s Signature',
      },
    ],
    when: '2024-01-15T10:30:00Z',
    who: {
      reference: 'Practitioner/123',
      display: 'Dr. John Smith',
    },
    onBehalfOf: {
      reference: 'Organization/hospital-1',
      display: 'General Hospital',
    },
    targetFormat: 'application/fhir+xml',
    sigFormat: 'application/signature+xml',
    data: 'SGVsbG8gV29ybGQ=',
  } as ISignature,
  witness: {
    type: [
      {
        system: 'urn:iso-astm:E1762-95:2013',
        code: '1.2.840.10065.1.12.1.5',
        display: 'Verification Signature',
      },
    ],
    when: '2024-01-15T11:00:00Z',
    who: {
      reference: 'Practitioner/456',
      display: 'Nurse Jane Doe',
    },
  } as ISignature,
  patient: {
    type: [
      {
        system: 'urn:iso-astm:E1762-95:2013',
        code: '1.2.840.10065.1.12.1.7',
        display: 'Consent Signature',
      },
    ],
    when: '2024-01-15T09:00:00Z',
    who: {
      reference: 'Patient/789',
      display: 'John Doe',
    },
  } as ISignature,
};

describe('Signature', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const sig = new Signature({});
        expect(sig).toBeInstanceOf(Signature);
      });

      it('should create simple signature', () => {
        const sig = new Signature(signatures.simple);
        expect(sig.type).toHaveLength(1);
        expect(sig.type[0].code).toBe('1.2.840.10065.1.12.1.1');
        expect(sig.when).toBe('2024-01-15T10:30:00Z');
        expect(sig.who.reference).toBe('Practitioner/123');
      });

      it('should create complete signature', () => {
        const sig = new Signature(signatures.complete);
        expect(sig.type).toHaveLength(1);
        expect(sig.when).toBe('2024-01-15T10:30:00Z');
        expect(sig.who.reference).toBe('Practitioner/123');
        expect(sig.onBehalfOf?.reference).toBe('Organization/hospital-1');
        expect(sig.targetFormat).toBe('application/fhir+xml');
        expect(sig.sigFormat).toBe('application/signature+xml');
        expect(sig.data).toBe('SGVsbG8gV29ybGQ=');
      });

      it('should create witness signature', () => {
        const sig = new Signature(signatures.witness);
        expect(sig.type[0].display).toBe('Verification Signature');
      });

      it('should create patient consent signature', () => {
        const sig = new Signature(signatures.patient);
        expect(sig.type[0].display).toBe('Consent Signature');
        expect(sig.who.reference).toBe('Patient/789');
      });

      it('should create signature with multiple types', () => {
        const sig = new Signature({
          type: [
            {
              system: 'urn:iso-astm:E1762-95:2013',
              code: '1.2.840.10065.1.12.1.1',
              display: 'Author\'s Signature',
            },
            {
              system: 'urn:iso-astm:E1762-95:2013',
              code: '1.2.840.10065.1.12.1.5',
              display: 'Verification Signature',
            },
          ],
          when: '2024-01-15T10:30:00Z',
          who: { reference: 'Practitioner/123' },
        });
        expect(sig.type).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const sig = new Signature(signatures.complete);
        const json = sig.toJSON();

        expect(json.type).toHaveLength(1);
        expect(json.when).toBe('2024-01-15T10:30:00Z');
        expect(json.who.reference).toBe('Practitioner/123');
        expect(json.data).toBe('SGVsbG8gV29ybGQ=');
      });

      it('should omit undefined properties in JSON', () => {
        const sig = new Signature(signatures.simple);
        const json = sig.toJSON();

        expect(json.type).toBeDefined();
        expect(json.when).toBeDefined();
        expect(json.who).toBeDefined();
        expect(json).not.toHaveProperty('onBehalfOf');
        expect(json).not.toHaveProperty('targetFormat');
        expect(json).not.toHaveProperty('sigFormat');
        expect(json).not.toHaveProperty('data');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Signature(signatures.complete);
        expectSerializationRoundtrip(original, Signature);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ISignature = {
          type: [{ code: 'test' }],
          when: '2024-01-15T10:00:00Z',
          who: { reference: 'Practitioner/test' },
        };
        const sig = Signature.fromJSON(json);

        expect(sig).toBeInstanceOf(Signature);
        expect(sig.type[0].code).toBe('test');
      });

      it('should create identical instance from JSON', () => {
        const original = new Signature(signatures.complete);
        const json = original.toJSON();
        const restored = Signature.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Signature(signatures.simple);
        const updated = original.with({
          data: 'bmV3IGRhdGE=',
        });

        expect(updated).not.toBe(original);
        expect(updated.data).toBe('bmV3IGRhdGE=');
        expect(original.data).toBeUndefined();
      });

      it('should preserve unchanged properties with .with()', () => {
        const original = new Signature(signatures.complete);
        const updated = original.with({
          data: 'dXBkYXRlZA==',
        });

        expect(updated.type).toEqual(original.type);
        expect(updated.when).toBe(original.when);
        expect(updated.who).toEqual(original.who);
      });

      it('should apply transform function correctly', () => {
        const sig = new Signature(signatures.simple);
        const transformed = sig.applyTransform((data) => ({
          sigFormat: 'application/pkcs7-signature',
        }));

        expect(transformed.sigFormat).toBe('application/pkcs7-signature');
        expect(sig.sigFormat).toBeUndefined();
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Signature(signatures.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned nested object', () => {
        const original = new Signature(signatures.complete);
        const cloned = original.clone();

        if (cloned.type?.[0]) {
          cloned.type[0].code = 'modified';
        }

        expect(original.type[0].code).toBe('1.2.840.10065.1.12.1.1');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const sig = new Signature(signatures.simple);
        const str = sig.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Signature');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _when extension', () => {
        const sig = new Signature({
          ...signatures.simple,
          _when: {
            extension: [
              { url: 'http://example.org/timezone', valueString: 'America/New_York' },
            ],
          },
        });

        expect(sig._when?.extension?.[0]?.valueString).toBe('America/New_York');
      });

      it('should handle _data extension', () => {
        const sig = new Signature({
          ...signatures.complete,
          _data: {
            id: 'data-ext',
          },
        });

        expect(sig._data?.id).toBe('data-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const sig = new Signature({
          id: 'sig-1',
          ...signatures.simple,
        });

        expect(sig.id).toBe('sig-1');
      });

      it('should handle extension property', () => {
        const sig = new Signature({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          ...signatures.simple,
        });

        expect(sig.extension).toHaveLength(1);
        expect(sig.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const sig = new SignatureBuilder().build();
        expect(sig).toBeInstanceOf(Signature);
      });

      it('should build with required properties', () => {
        const sig = new SignatureBuilder()
          .addType({
            system: 'urn:iso-astm:E1762-95:2013',
            code: '1.2.840.10065.1.12.1.1',
          })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .build();

        expect(sig.type).toHaveLength(1);
        expect(sig.when).toBe('2024-01-15T10:30:00Z');
        expect(sig.who.reference).toBe('Practitioner/123');
      });

      it('should build with all properties', () => {
        const sig = new SignatureBuilder()
          .addType({
            system: 'urn:iso-astm:E1762-95:2013',
            code: '1.2.840.10065.1.12.1.1',
          })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .setOnBehalfOf({ reference: 'Organization/hospital-1' })
          .setTargetFormat('application/fhir+xml')
          .setSigFormat('application/signature+xml')
          .setData('SGVsbG8gV29ybGQ=')
          .build();

        expect(sig.type).toHaveLength(1);
        expect(sig.onBehalfOf?.reference).toBe('Organization/hospital-1');
        expect(sig.targetFormat).toBe('application/fhir+xml');
        expect(sig.sigFormat).toBe('application/signature+xml');
        expect(sig.data).toBe('SGVsbG8gV29ybGQ=');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new SignatureBuilder()
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' });

        expect(builder).toBeInstanceOf(SignatureBuilder);
      });

      it('should allow adding multiple types', () => {
        const sig = new SignatureBuilder()
          .addType({ code: 'type1' })
          .addType({ code: 'type2' })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .build();

        expect(sig.type).toHaveLength(2);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const sig = new SignatureBuilder()
          .setId('sig-1')
          .addType({ code: 'test' })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .build();

        expect(sig.id).toBe('sig-1');
      });

      it('should add extension from ElementBuilder', () => {
        const sig = new SignatureBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .addType({ code: 'test' })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .build();

        expect(sig.extension).toHaveLength(1);
        expect(sig.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new SignatureBuilder()
          .setWhen('2024-01-15T10:00:00Z')
          .setWho({ reference: 'Practitioner/1' });
        const first = builder.build();

        builder.setWhen('2024-01-15T11:00:00Z');
        const second = builder.build();

        expect(first.when).toBe('2024-01-15T10:00:00Z');
        expect(second.when).toBe('2024-01-15T11:00:00Z');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const sig = new SignatureBuilder()
          .addType({ code: '1.2.840.10065.1.12.1.1' })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
          .build();

        const json = sig.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new SignatureBuilder()
          .addType({ code: 'test' })
          .setWhen('2024-01-15T10:30:00Z')
          .setWho({ reference: 'Practitioner/123' })
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
    it('should work in document signing scenario', () => {
      const documentSignature = new SignatureBuilder()
        .addType({
          system: 'urn:iso-astm:E1762-95:2013',
          code: '1.2.840.10065.1.12.1.1',
          display: 'Author\'s Signature',
        })
        .setWhen('2024-01-15T10:30:00Z')
        .setWho({
          reference: 'Practitioner/dr-smith',
          display: 'Dr. Smith',
        })
        .setTargetFormat('application/fhir+json')
        .setSigFormat('application/jose')
        .setData('ZXlKaGJHY2lPaUpTVXpJMU5pSjkuLi4=')
        .build();

      expect(documentSignature.type[0].display).toBe('Author\'s Signature');
      expect(documentSignature.sigFormat).toBe('application/jose');

      const json = documentSignature.toJSON();
      const restored = Signature.fromJSON(json);

      expect(restored.who.reference).toBe('Practitioner/dr-smith');
    });

    it('should work in consent signing scenario', () => {
      const consentSignature = new Signature({
        type: [
          {
            system: 'urn:iso-astm:E1762-95:2013',
            code: '1.2.840.10065.1.12.1.7',
            display: 'Consent Signature',
          },
        ],
        when: '2024-01-15T09:00:00Z',
        who: {
          reference: 'Patient/john-doe',
          display: 'John Doe',
        },
      });

      expect(consentSignature.type[0].display).toBe('Consent Signature');
      expect(consentSignature.who.reference).toBe('Patient/john-doe');
    });

    it('should work in witness signature scenario', () => {
      const witnessSignature = new SignatureBuilder()
        .addType({
          system: 'urn:iso-astm:E1762-95:2013',
          code: '1.2.840.10065.1.12.1.5',
          display: 'Verification Signature',
        })
        .setWhen('2024-01-15T09:05:00Z')
        .setWho({
          reference: 'Practitioner/nurse-jane',
          display: 'Nurse Jane',
        })
        .build();

      expect(witnessSignature.type[0].display).toBe('Verification Signature');
    });

    it('should handle signature on behalf of organization', () => {
      const sig = new Signature(signatures.complete);

      expect(sig.who.reference).toBe('Practitioner/123');
      expect(sig.onBehalfOf?.reference).toBe('Organization/hospital-1');
    });

    it('should handle signature update', () => {
      const original = new Signature(signatures.simple);

      const updated = original.with({
        data: 'dXBkYXRlZCBzaWduYXR1cmU=',
        sigFormat: 'application/pkcs7-signature',
      });

      expect(updated.data).toBe('dXBkYXRlZCBzaWduYXR1cmU=');
      expect(updated.sigFormat).toBe('application/pkcs7-signature');
      expect(original.data).toBeUndefined();
    });
  });
});
