/**
 * Attachment Model and Builder Tests
 *
 * Tests for the Attachment datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Attachment, AttachmentBuilder } from '../../../src/index.js';
import type { IAttachment } from '@fhir-toolkit/r4-types';
import { attachments } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Attachment', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const att = new Attachment({});
        expect(att).toBeInstanceOf(Attachment);
        expect(att.contentType).toBeUndefined();
        expect(att.url).toBeUndefined();
      });

      it('should create instance with contentType only', () => {
        const att = new Attachment({ contentType: 'image/jpeg' });
        expect(att.contentType).toBe('image/jpeg');
      });

      it('should create xray attachment', () => {
        const att = new Attachment(attachments.xray);
        expect(att.contentType).toBe('image/jpeg');
        expect(att.url).toBe('http://hospital.example.org/images/xray-12345.jpg');
        expect(att.title).toBe('Chest X-Ray');
        expect(att.size).toBe(2048576);
        expect(att.creation).toBe('2024-01-15');
      });

      it('should create pdf attachment', () => {
        const att = new Attachment(attachments.pdf);
        expect(att.contentType).toBe('application/pdf');
        expect(att.data).toBe('JVBERi0xLjQK...');
        expect(att.title).toBe('Lab Report');
      });

      it('should create attachment with all properties', () => {
        const att = new Attachment({
          contentType: 'image/png',
          language: 'en',
          data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          url: 'http://example.org/image.png',
          size: 1024,
          hash: 'aGFzaHZhbHVl',
          title: 'Test Image',
          creation: '2024-01-15T10:30:00Z',
        });
        expect(att.contentType).toBe('image/png');
        expect(att.language).toBe('en');
        expect(att.data).toBeDefined();
        expect(att.url).toBe('http://example.org/image.png');
        expect(att.size).toBe(1024);
        expect(att.hash).toBe('aGFzaHZhbHVl');
        expect(att.title).toBe('Test Image');
        expect(att.creation).toBe('2024-01-15T10:30:00Z');
      });
    });

    describe('Content Types', () => {
      it.each([
        ['image/jpeg', 'image/jpeg'],
        ['image/png', 'image/png'],
        ['application/pdf', 'application/pdf'],
        ['text/plain', 'text/plain'],
        ['application/dicom', 'application/dicom'],
        ['video/mp4', 'video/mp4'],
      ])('should handle content type %s', (input, expected) => {
        const att = new Attachment({ contentType: input });
        expect(att.contentType).toBe(expected);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const att = new Attachment(attachments.xray);
        const json = att.toJSON();

        expect(json.contentType).toBe('image/jpeg');
        expect(json.url).toBe('http://hospital.example.org/images/xray-12345.jpg');
        expect(json.title).toBe('Chest X-Ray');
        expect(json.size).toBe(2048576);
      });

      it('should omit undefined properties in JSON', () => {
        const att = new Attachment({ contentType: 'image/jpeg' });
        const json = att.toJSON();

        expect(json.contentType).toBe('image/jpeg');
        expect(json).not.toHaveProperty('language');
        expect(json).not.toHaveProperty('data');
        expect(json).not.toHaveProperty('url');
        expect(json).not.toHaveProperty('size');
        expect(json).not.toHaveProperty('hash');
        expect(json).not.toHaveProperty('title');
        expect(json).not.toHaveProperty('creation');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Attachment(attachments.xray);
        expectSerializationRoundtrip(original, Attachment);
      });

      it('should preserve size as number', () => {
        const att = new Attachment({ size: 1024 });
        const json = att.toJSON();
        expect(json.size).toBe(1024);
        expect(typeof json.size).toBe('number');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IAttachment = {
          contentType: 'application/pdf',
          title: 'Test Document',
          size: 2048,
        };
        const att = Attachment.fromJSON(json);

        expect(att).toBeInstanceOf(Attachment);
        expect(att.contentType).toBe('application/pdf');
        expect(att.title).toBe('Test Document');
      });

      it('should create identical instance from JSON', () => {
        const original = new Attachment(attachments.xray);
        const json = original.toJSON();
        const restored = Attachment.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Attachment({ contentType: 'image/jpeg', title: 'Original' });
        const updated = original.with({ title: 'Updated' });

        expect(updated).not.toBe(original);
        expect(updated.title).toBe('Updated');
        expect(updated.contentType).toBe('image/jpeg');
        expect(original.title).toBe('Original');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Attachment({ contentType: 'image/jpeg', size: 1024 });
        const updated = original.with({ contentType: 'image/png', size: 2048 });

        expect(updated.contentType).toBe('image/png');
        expect(updated.size).toBe(2048);
        expect(original.contentType).toBe('image/jpeg');
        expect(original.size).toBe(1024);
      });

      it('should apply transform function correctly', () => {
        const att = new Attachment({ title: 'test document' });
        const transformed = att.applyTransform((data) => ({
          title: data.title?.toUpperCase(),
        }));

        expect(transformed.title).toBe('TEST DOCUMENT');
        expect(att.title).toBe('test document');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Attachment(attachments.xray);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Attachment({
          contentType: 'image/jpeg',
          language: 'en',
          url: 'http://example.org/image.jpg',
          size: 1024,
          hash: 'abc123',
          title: 'Test',
          creation: '2024-01-15',
        });
        const cloned = original.clone();

        expect(cloned.contentType).toBe(original.contentType);
        expect(cloned.language).toBe(original.language);
        expect(cloned.url).toBe(original.url);
        expect(cloned.size).toBe(original.size);
        expect(cloned.hash).toBe(original.hash);
        expect(cloned.title).toBe(original.title);
        expect(cloned.creation).toBe(original.creation);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const att = new Attachment({ contentType: 'image/jpeg' });
        const str = att.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Attachment');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _title extension', () => {
        const att = new Attachment({
          title: 'Document',
          _title: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'translated title' },
            ],
          },
        });

        expect(att._title?.extension?.[0]?.valueString).toBe('translated title');
      });

      it('should serialize extension properties', () => {
        const att = new Attachment({
          title: 'Document',
          _title: {
            id: 'title-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = att.toJSON();

        expect(json._title?.id).toBe('title-ext');
        expect(json._title?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const att = new AttachmentBuilder().build();
        expect(att).toBeInstanceOf(Attachment);
      });

      it('should build with contentType only', () => {
        const att = new AttachmentBuilder()
          .setContentType('image/jpeg')
          .build();

        expect(att.contentType).toBe('image/jpeg');
      });

      it('should build with all properties', () => {
        const att = new AttachmentBuilder()
          .setContentType('image/png')
          .setLanguage('en')
          .setData('base64data')
          .setUrl('http://example.org/image.png')
          .setSize(1024)
          .setHash('hashvalue')
          .setTitle('Test Image')
          .setCreation('2024-01-15')
          .build();

        expect(att.contentType).toBe('image/png');
        expect(att.language).toBe('en');
        expect(att.data).toBe('base64data');
        expect(att.url).toBe('http://example.org/image.png');
        expect(att.size).toBe(1024);
        expect(att.hash).toBe('hashvalue');
        expect(att.title).toBe('Test Image');
        expect(att.creation).toBe('2024-01-15');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new AttachmentBuilder()
          .setContentType('image/jpeg')
          .setTitle('Test')
          .setSize(1024);

        expect(builder).toBeInstanceOf(AttachmentBuilder);
      });

      it('should allow overwriting properties', () => {
        const att = new AttachmentBuilder()
          .setTitle('First')
          .setTitle('Second')
          .build();

        expect(att.title).toBe('Second');
      });
    });

    describe('Common Attachment Types', () => {
      it('should build image attachment', () => {
        const att = new AttachmentBuilder()
          .setContentType('image/jpeg')
          .setUrl('http://example.org/photo.jpg')
          .setTitle('Patient Photo')
          .setSize(102400)
          .build();

        expect(att.contentType).toBe('image/jpeg');
        expect(att.url).toContain('photo.jpg');
      });

      it('should build PDF document', () => {
        const att = new AttachmentBuilder()
          .setContentType('application/pdf')
          .setUrl('http://example.org/report.pdf')
          .setTitle('Lab Report')
          .setCreation('2024-01-15')
          .build();

        expect(att.contentType).toBe('application/pdf');
        expect(att.title).toBe('Lab Report');
      });

      it('should build inline base64 attachment', () => {
        const att = new AttachmentBuilder()
          .setContentType('text/plain')
          .setData('SGVsbG8gV29ybGQ=')
          .setTitle('Text Note')
          .build();

        expect(att.contentType).toBe('text/plain');
        expect(att.data).toBe('SGVsbG8gV29ybGQ=');
      });

      it('should build DICOM image', () => {
        const att = new AttachmentBuilder()
          .setContentType('application/dicom')
          .setUrl('http://pacs.hospital.org/studies/12345')
          .setTitle('CT Scan')
          .setSize(52428800)
          .build();

        expect(att.contentType).toBe('application/dicom');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const att = new AttachmentBuilder()
          .setId('att-1')
          .setContentType('image/jpeg')
          .build();

        expect(att.id).toBe('att-1');
      });

      it('should add extension from ElementBuilder', () => {
        const att = new AttachmentBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setContentType('image/jpeg')
          .build();

        expect(att.extension).toHaveLength(1);
        expect(att.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const att = new AttachmentBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(att.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new AttachmentBuilder().setTitle('First');
        const first = builder.build();

        builder.setTitle('Second');
        const second = builder.build();

        expect(first.title).toBe('First');
        expect(second.title).toBe('Second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const att = new AttachmentBuilder()
          .setContentType('image/jpeg')
          .setUrl('http://example.org/image.jpg')
          .setTitle('Test')
          .build();

        const json = att.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new AttachmentBuilder()
          .setContentType('image/jpeg')
          .setTitle('Test')
          .setSize(1024)
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
    it('should work in typical DiagnosticReport scenario', () => {
      const reportPdf = new AttachmentBuilder()
        .setContentType('application/pdf')
        .setUrl('http://hospital.example.org/reports/lab-12345.pdf')
        .setTitle('Complete Blood Count Report')
        .setSize(51200)
        .setCreation('2024-01-15T14:30:00Z')
        .build();

      expect(reportPdf.contentType).toBe('application/pdf');
      expect(reportPdf.title).toBe('Complete Blood Count Report');

      const json = reportPdf.toJSON();
      const restored = Attachment.fromJSON(json);

      expect(restored.contentType).toBe('application/pdf');
      expect(restored.creation).toBe('2024-01-15T14:30:00Z');
    });

    it('should handle patient photo', () => {
      const photo = new Attachment({
        contentType: 'image/jpeg',
        url: 'http://hospital.example.org/photos/patient-123.jpg',
        title: 'Patient Photo',
        size: 204800,
        creation: '2024-01-10',
      });

      expect(photo.contentType).toBe('image/jpeg');

      // Update photo
      const updatedPhoto = photo.with({
        url: 'http://hospital.example.org/photos/patient-123-v2.jpg',
        creation: '2024-06-15',
      });

      expect(updatedPhoto.url).toContain('v2.jpg');
      expect(photo.url).toContain('patient-123.jpg');
    });

    it('should handle document with hash verification', () => {
      const document = new AttachmentBuilder()
        .setContentType('application/pdf')
        .setUrl('http://example.org/doc.pdf')
        .setSize(102400)
        .setHash('2jmj7l5rSw0yVb/vlWAYkK/YBwk=')
        .setTitle('Signed Document')
        .build();

      expect(document.hash).toBe('2jmj7l5rSw0yVb/vlWAYkK/YBwk=');
      expect(document.size).toBe(102400);
    });

    it('should handle multilingual attachment', () => {
      const attachment = new Attachment({
        contentType: 'text/plain; charset=utf-8',
        language: 'es-CL',
        data: 'Q29udGVuaWRvIGVuIGVzcGHDsW9s',
        title: 'Documento en Espanol',
      });

      expect(attachment.language).toBe('es-CL');
      expect(attachment.contentType).toContain('charset=utf-8');
    });
  });
});
