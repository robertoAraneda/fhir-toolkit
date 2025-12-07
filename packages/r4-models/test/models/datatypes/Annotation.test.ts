/**
 * Annotation Model and Builder Tests
 *
 * Tests for the Annotation datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Annotation, AnnotationBuilder } from '../../../src/index.js';
import type { IAnnotation } from '@fhir-toolkit/r4-types';
import { annotations } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Annotation', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ann = new Annotation({});
        expect(ann).toBeInstanceOf(Annotation);
        expect(ann.text).toBeUndefined();
      });

      it('should create instance with text only', () => {
        const ann = new Annotation({ text: 'Simple note' });
        expect(ann.text).toBe('Simple note');
      });

      it('should create simple annotation', () => {
        const ann = new Annotation(annotations.simple);
        expect(ann.text).toBe('Simple note');
      });

      it('should create complete annotation', () => {
        const ann = new Annotation(annotations.complete);
        expect(ann.authorString).toBe('Dr. García');
        expect(ann.time).toBe('2024-01-15T11:00:00Z');
        expect(ann.text).toBe('Patient shows significant improvement. Continue current treatment.');
      });

      it('should create annotation with authorReference', () => {
        const ann = new Annotation({
          authorReference: {
            reference: 'Practitioner/123',
            display: 'Dr. Smith',
          },
          time: '2024-01-15T10:00:00Z',
          text: 'Clinical note',
        });
        expect(ann.authorReference?.reference).toBe('Practitioner/123');
        expect(ann.authorReference?.display).toBe('Dr. Smith');
      });

      it('should create annotation with authorString', () => {
        const ann = new Annotation({
          authorString: 'Unknown Nurse',
          text: 'Vitals recorded',
        });
        expect(ann.authorString).toBe('Unknown Nurse');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ann = new Annotation(annotations.complete);
        const json = ann.toJSON();

        expect(json.authorString).toBe('Dr. García');
        expect(json.time).toBe('2024-01-15T11:00:00Z');
        expect(json.text).toBe('Patient shows significant improvement. Continue current treatment.');
      });

      it('should omit undefined properties in JSON', () => {
        const ann = new Annotation({ text: 'Note' });
        const json = ann.toJSON();

        expect(json.text).toBe('Note');
        expect(json).not.toHaveProperty('authorReference');
        expect(json).not.toHaveProperty('authorString');
        expect(json).not.toHaveProperty('time');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Annotation(annotations.complete);
        expectSerializationRoundtrip(original, Annotation);
      });

      it('should preserve authorReference in JSON', () => {
        const ann = new Annotation({
          authorReference: {
            reference: 'Practitioner/123',
            display: 'Dr. Smith',
          },
          text: 'Note',
        });
        const json = ann.toJSON();

        expect(json.authorReference?.reference).toBe('Practitioner/123');
        expect(json.authorReference?.display).toBe('Dr. Smith');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IAnnotation = {
          authorString: 'Test Author',
          time: '2024-01-15T12:00:00Z',
          text: 'Test note',
        };
        const ann = Annotation.fromJSON(json);

        expect(ann).toBeInstanceOf(Annotation);
        expect(ann.authorString).toBe('Test Author');
        expect(ann.text).toBe('Test note');
      });

      it('should create identical instance from JSON', () => {
        const original = new Annotation(annotations.complete);
        const json = original.toJSON();
        const restored = Annotation.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Annotation({ text: 'Original', authorString: 'Author' });
        const updated = original.with({ text: 'Updated' });

        expect(updated).not.toBe(original);
        expect(updated.text).toBe('Updated');
        expect(updated.authorString).toBe('Author');
        expect(original.text).toBe('Original');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Annotation({ text: 'Original', time: '2024-01-01T00:00:00Z' });
        const updated = original.with({
          text: 'Updated',
          time: '2024-06-15T12:00:00Z',
        });

        expect(updated.text).toBe('Updated');
        expect(updated.time).toBe('2024-06-15T12:00:00Z');
        expect(original.text).toBe('Original');
      });

      it('should apply transform function correctly', () => {
        const ann = new Annotation({ text: 'test note' });
        const transformed = ann.applyTransform((data) => ({
          text: data.text?.toUpperCase(),
        }));

        expect(transformed.text).toBe('TEST NOTE');
        expect(ann.text).toBe('test note');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Annotation(annotations.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned reference', () => {
        const original = new Annotation({
          authorReference: { reference: 'Practitioner/123' },
          text: 'Note',
        });
        const cloned = original.clone();

        if (cloned.authorReference) {
          cloned.authorReference.reference = 'Practitioner/456';
        }

        expect(original.authorReference?.reference).toBe('Practitioner/123');
      });

      it('should clone all properties', () => {
        const original = new Annotation({
          authorString: 'Author',
          time: '2024-01-15T10:00:00Z',
          text: 'Note text',
        });
        const cloned = original.clone();

        expect(cloned.authorString).toBe(original.authorString);
        expect(cloned.time).toBe(original.time);
        expect(cloned.text).toBe(original.text);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ann = new Annotation({ text: 'Note' });
        const str = ann.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Annotation');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _text extension', () => {
        const ann = new Annotation({
          text: 'Note',
          _text: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'markdown' },
            ],
          },
        });

        expect(ann._text?.extension?.[0]?.valueString).toBe('markdown');
      });

      it('should serialize extension properties', () => {
        const ann = new Annotation({
          text: 'Note',
          _text: {
            id: 'text-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = ann.toJSON();

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
        const ann = new AnnotationBuilder().build();
        expect(ann).toBeInstanceOf(Annotation);
      });

      it('should build with text only', () => {
        const ann = new AnnotationBuilder()
          .setText('Simple note')
          .build();

        expect(ann.text).toBe('Simple note');
      });

      it('should build with all properties', () => {
        const ann = new AnnotationBuilder()
          .setAuthor('String', 'Dr. Smith')
          .setTime('2024-01-15T10:00:00Z')
          .setText('Clinical observation')
          .build();

        expect(ann.authorString).toBe('Dr. Smith');
        expect(ann.time).toBe('2024-01-15T10:00:00Z');
        expect(ann.text).toBe('Clinical observation');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new AnnotationBuilder()
          .setText('Note')
          .setTime('2024-01-15T10:00:00Z');

        expect(builder).toBeInstanceOf(AnnotationBuilder);
      });

      it('should allow overwriting properties', () => {
        const ann = new AnnotationBuilder()
          .setText('First')
          .setText('Second')
          .build();

        expect(ann.text).toBe('Second');
      });
    });

    describe('Choice Type - Author', () => {
      it('should set authorString', () => {
        const ann = new AnnotationBuilder()
          .setAuthor('String', 'Dr. Smith')
          .setText('Note')
          .build();

        expect(ann.authorString).toBe('Dr. Smith');
        expect(ann.authorReference).toBeUndefined();
      });

      it('should clear other author variants when setting new type', () => {
        const ann = new AnnotationBuilder()
          .setAuthor('String', 'First Author')
          .setAuthor('String', 'Second Author')
          .setText('Note')
          .build();

        expect(ann.authorString).toBe('Second Author');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ann = new AnnotationBuilder()
          .setId('ann-1')
          .setText('Note')
          .build();

        expect(ann.id).toBe('ann-1');
      });

      it('should add extension from ElementBuilder', () => {
        const ann = new AnnotationBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setText('Note')
          .build();

        expect(ann.extension).toHaveLength(1);
        expect(ann.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const ann = new AnnotationBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(ann.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new AnnotationBuilder().setText('First');
        const first = builder.build();

        builder.setText('Second');
        const second = builder.build();

        expect(first.text).toBe('First');
        expect(second.text).toBe('Second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ann = new AnnotationBuilder()
          .setAuthor('String', 'Author')
          .setText('Note')
          .setTime('2024-01-15T10:00:00Z')
          .build();

        const json = ann.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new AnnotationBuilder()
          .setText('Note')
          .setTime('2024-01-15T10:00:00Z')
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
    it('should work in typical clinical note scenario', () => {
      const clinicalNote = new AnnotationBuilder()
        .setAuthor('String', 'Dr. García')
        .setTime('2024-01-15T11:00:00Z')
        .setText('Patient shows significant improvement. Continue current treatment.')
        .build();

      expect(clinicalNote.authorString).toBe('Dr. García');
      expect(clinicalNote.text).toContain('improvement');

      const json = clinicalNote.toJSON();
      const restored = Annotation.fromJSON(json);

      expect(restored.authorString).toBe('Dr. García');
      expect(restored.time).toBe('2024-01-15T11:00:00Z');
    });

    it('should handle annotation with practitioner reference', () => {
      const annotation = new Annotation({
        authorReference: {
          reference: 'Practitioner/dr-smith',
          display: 'Dr. Jane Smith, MD',
        },
        time: '2024-01-15T09:30:00Z',
        text: 'Initial assessment completed. Patient stable.',
      });

      expect(annotation.authorReference?.reference).toBe('Practitioner/dr-smith');
      expect(annotation.text).toContain('Initial assessment');
    });

    it('should handle progress notes', () => {
      const notes = [
        new Annotation({
          authorString: 'Nurse Johnson',
          time: '2024-01-15T08:00:00Z',
          text: 'Morning vitals recorded. BP: 120/80',
        }),
        new Annotation({
          authorString: 'Dr. Williams',
          time: '2024-01-15T10:00:00Z',
          text: 'Patient examined. No acute findings.',
        }),
        new Annotation({
          authorString: 'Nurse Johnson',
          time: '2024-01-15T14:00:00Z',
          text: 'Afternoon vitals recorded. BP: 118/78',
        }),
      ];

      expect(notes).toHaveLength(3);
      expect(notes[0].authorString).toBe('Nurse Johnson');
      expect(notes[1].authorString).toBe('Dr. Williams');
    });

    it('should update annotation text while preserving author', () => {
      const original = new Annotation({
        authorString: 'Author',
        time: '2024-01-15T10:00:00Z',
        text: 'Original note',
      });

      const updated = original.with({
        text: 'Updated note with corrections',
        time: '2024-01-15T11:00:00Z',
      });

      expect(updated.text).toBe('Updated note with corrections');
      expect(updated.authorString).toBe('Author');
      expect(original.text).toBe('Original note');
    });
  });
});
