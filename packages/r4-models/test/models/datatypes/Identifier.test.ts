/**
 * Identifier Model and Builder Tests
 *
 * Tests for the Identifier datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Identifier, IdentifierBuilder } from '../../../src/index.js';
import type { IIdentifier } from '@fhir-toolkit/r4-types';
import { identifiers, periods, codeableConcepts } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Identifier', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const id = new Identifier({});
        expect(id).toBeInstanceOf(Identifier);
        expect(id.value).toBeUndefined();
        expect(id.system).toBeUndefined();
      });

      it('should create minimal instance with value', () => {
        const id = new Identifier(identifiers.minimal);
        expect(id.value).toBe('test-123');
      });

      it('should create instance with all properties', () => {
        const id = new Identifier(identifiers.mrn);
        expect(id.use).toBe('official');
        expect(id.type?.coding?.[0]?.code).toBe('MR');
        expect(id.system).toBe('http://hospital.example.org/mrn');
        expect(id.value).toBe('MRN-123456');
      });

      it('should create instance with period', () => {
        const id = new Identifier(identifiers.withPeriod);
        expect(id.use).toBe('temp');
        expect(id.period?.start).toBe('2024-01-01');
        expect(id.period?.end).toBe('2024-12-31');
      });

      it('should create instance with assigner reference', () => {
        const id = new Identifier({
          value: 'test',
          assigner: { reference: 'Organization/123', display: 'Hospital' },
        });
        expect(id.assigner?.reference).toBe('Organization/123');
        expect(id.assigner?.display).toBe('Hospital');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const id = new Identifier(identifiers.mrn);
        const json = id.toJSON();

        expect(json.use).toBe('official');
        expect(json.system).toBe('http://hospital.example.org/mrn');
        expect(json.value).toBe('MRN-123456');
        expect(json.type?.coding?.[0]?.code).toBe('MR');
      });

      it('should omit undefined properties in JSON', () => {
        const id = new Identifier({ value: 'test' });
        const json = id.toJSON();

        expect(json.value).toBe('test');
        expect(json).not.toHaveProperty('use');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('type');
        expect(json).not.toHaveProperty('period');
        expect(json).not.toHaveProperty('assigner');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Identifier(identifiers.mrn);
        expectSerializationRoundtrip(original, Identifier);
      });

      it('should preserve nested objects in JSON', () => {
        const id = new Identifier({
          value: 'test',
          type: {
            coding: [{ system: 'http://test.org', code: 'TEST' }],
            text: 'Test Type',
          },
        });
        const json = id.toJSON();

        expect(json.type?.coding?.[0]?.system).toBe('http://test.org');
        expect(json.type?.text).toBe('Test Type');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IIdentifier = {
          use: 'official',
          value: 'json-value',
          system: 'http://example.org',
        };
        const id = Identifier.fromJSON(json);

        expect(id).toBeInstanceOf(Identifier);
        expect(id.use).toBe('official');
        expect(id.value).toBe('json-value');
      });

      it('should create identical instance from JSON', () => {
        const original = new Identifier(identifiers.run);
        const json = original.toJSON();
        const restored = Identifier.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Identifier({ value: 'original', use: 'official' });
        const updated = original.with({ value: 'updated' });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe('updated');
        expect(updated.use).toBe('official'); // Preserved from original
        expect(original.value).toBe('original'); // Original unchanged
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Identifier({ value: 'original', use: 'official' });
        const updated = original.with({ value: 'updated', use: 'temp' });

        expect(updated.value).toBe('updated');
        expect(updated.use).toBe('temp');
        expect(original.use).toBe('official');
      });

      it('should apply transform function correctly', () => {
        const id = new Identifier({ value: 'test', system: 'http://example.org' });
        const transformed = id.applyTransform((data) => ({
          value: data.value?.toUpperCase(),
          system: data.system?.replace('http://', 'https://'),
        }));

        expect(transformed.value).toBe('TEST');
        expect(transformed.system).toBe('https://example.org');
        expect(id.value).toBe('test'); // Original unchanged
      });

      it('should handle complex transforms', () => {
        const id = new Identifier({
          value: 'test',
          type: { text: 'Original' },
        });
        const transformed = id.applyTransform((data) => ({
          type: { ...data.type, text: 'Transformed' },
        }));

        expect(transformed.type?.text).toBe('Transformed');
        expect(id.type?.text).toBe('Original');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Identifier(identifiers.mrn);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned nested objects', () => {
        const original = new Identifier({
          value: 'test',
          type: { coding: [{ code: 'MRN', display: 'Medical Record' }] },
        });
        const cloned = original.clone();

        // Modify the clone's nested object
        if (cloned.type?.coding?.[0]) {
          cloned.type.coding[0].code = 'MODIFIED';
        }

        // Original should be unchanged
        expect(original.type?.coding?.[0]?.code).toBe('MRN');
      });

      it('should clone all properties', () => {
        const original = new Identifier({
          use: 'official',
          system: 'http://example.org',
          value: 'test',
          type: { text: 'Test' },
          period: { start: '2024-01-01' },
          assigner: { reference: 'Organization/1' },
        });
        const cloned = original.clone();

        expect(cloned.use).toBe(original.use);
        expect(cloned.system).toBe(original.system);
        expect(cloned.value).toBe(original.value);
        expect(cloned.type).toEqual(original.type);
        expect(cloned.period).toEqual(original.period);
        expect(cloned.assigner).toEqual(original.assigner);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const id = new Identifier({ value: 'test' });
        const str = id.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Identifier');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _use extension', () => {
        const id = new Identifier({
          use: 'official',
          _use: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'extended' },
            ],
          },
        });

        expect(id._use?.extension?.[0]?.valueString).toBe('extended');
      });

      it('should serialize extension properties', () => {
        const id = new Identifier({
          value: 'test',
          _value: {
            id: 'value-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = id.toJSON();

        expect(json._value?.id).toBe('value-ext');
        expect(json._value?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const id = new IdentifierBuilder().build();
        expect(id).toBeInstanceOf(Identifier);
      });

      it('should build with single property', () => {
        const id = new IdentifierBuilder().setValue('test-value').build();

        expect(id.value).toBe('test-value');
      });

      it('should build with all properties', () => {
        const id = new IdentifierBuilder()
          .setUse('official')
          .setSystem('http://example.org')
          .setValue('12345')
          .setType({ text: 'MRN' })
          .setPeriod({ start: '2024-01-01' })
          .setAssigner({ reference: 'Organization/1' })
          .build();

        expect(id.use).toBe('official');
        expect(id.system).toBe('http://example.org');
        expect(id.value).toBe('12345');
        expect(id.type?.text).toBe('MRN');
        expect(id.period?.start).toBe('2024-01-01');
        expect(id.assigner?.reference).toBe('Organization/1');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new IdentifierBuilder()
          .setUse('official')
          .setSystem('http://example.org')
          .setValue('test');

        expect(builder).toBeInstanceOf(IdentifierBuilder);
      });

      it('should allow overwriting properties', () => {
        const id = new IdentifierBuilder()
          .setValue('first')
          .setValue('second')
          .build();

        expect(id.value).toBe('second');
      });
    });

    describe('Use Property', () => {
      it.each([
        ['usual', 'usual'],
        ['official', 'official'],
        ['temp', 'temp'],
        ['secondary', 'secondary'],
        ['old', 'old'],
      ] as const)('should set use to %s', (input, expected) => {
        const id = new IdentifierBuilder()
          .setUse(input)
          .build();

        expect(id.use).toBe(expected);
      });
    });

    describe('Complex Properties', () => {
      it('should set type with coding', () => {
        const id = new IdentifierBuilder()
          .setType({
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
                display: 'Medical Record Number',
              },
            ],
          })
          .build();

        expect(id.type?.coding?.[0]?.code).toBe('MR');
      });

      it('should set period with start and end', () => {
        const id = new IdentifierBuilder()
          .setPeriod({
            start: '2024-01-01T00:00:00Z',
            end: '2024-12-31T23:59:59Z',
          })
          .build();

        expect(id.period?.start).toBe('2024-01-01T00:00:00Z');
        expect(id.period?.end).toBe('2024-12-31T23:59:59Z');
      });

      it('should set assigner with display only', () => {
        const id = new IdentifierBuilder()
          .setAssigner({ display: 'Hospital Name' })
          .build();

        expect(id.assigner?.display).toBe('Hospital Name');
        expect(id.assigner?.reference).toBeUndefined();
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const id = new IdentifierBuilder()
          .setId('identifier-1')
          .setValue('test')
          .build();

        expect(id.id).toBe('identifier-1');
      });

      it('should add extension from ElementBuilder', () => {
        const id = new IdentifierBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue('test')
          .build();

        expect(id.extension).toHaveLength(1);
        expect(id.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const id = new IdentifierBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(id.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new IdentifierBuilder().setValue('first');
        const first = builder.build();

        builder.setValue('second');
        const second = builder.build();

        expect(first.value).toBe('first');
        expect(second.value).toBe('second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const id = new IdentifierBuilder()
          .setUse('official')
          .setValue('test')
          .build();

        const json = id.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new IdentifierBuilder()
          .setUse('official')
          .setValue('test')
          .setType({ text: 'MRN' })
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
    it('should work in typical patient identifier scenario', () => {
      // Create MRN identifier
      const mrn = new IdentifierBuilder()
        .setUse('official')
        .setType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              code: 'MR',
            },
          ],
        })
        .setSystem('http://hospital.example.org/mrn')
        .setValue('MRN-12345')
        .build();

      // Create national ID
      const nationalId = new Identifier({
        use: 'official',
        type: { text: 'RUN' },
        system: 'http://minsal.cl/run',
        value: '12.345.678-9',
      });

      // Both should serialize correctly
      const mrnJson = mrn.toJSON();
      const nationalIdJson = nationalId.toJSON();

      expect(mrnJson.value).toBe('MRN-12345');
      expect(nationalIdJson.value).toBe('12.345.678-9');

      // Both should be restorable
      const restoredMrn = Identifier.fromJSON(mrnJson);
      const restoredNationalId = Identifier.fromJSON(nationalIdJson);

      expect(restoredMrn.value).toBe('MRN-12345');
      expect(restoredNationalId.value).toBe('12.345.678-9');
    });

    it('should handle temporary identifier with period', () => {
      const tempId = new IdentifierBuilder()
        .setUse('temp')
        .setValue('TEMP-001')
        .setPeriod({
          start: '2024-01-01',
          end: '2024-01-31',
        })
        .build();

      expect(tempId.use).toBe('temp');
      expect(tempId.period?.start).toBe('2024-01-01');
      expect(tempId.period?.end).toBe('2024-01-31');

      // Update to permanent
      const permanentId = tempId.with({
        use: 'official',
        period: undefined,
      });

      expect(permanentId.use).toBe('official');
      expect(permanentId.period).toBeUndefined();
      expect(permanentId.value).toBe('TEMP-001'); // Preserved
    });
  });
});
