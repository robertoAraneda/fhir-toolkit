/**
 * Narrative Model and Builder Tests
 *
 * Tests for the Narrative datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Narrative, NarrativeBuilder } from '../../../src/index.js';
import type { INarrative } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const narratives = {
  generated: {
    status: 'generated',
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Patient: John Doe</div>',
  } as INarrative,
  extensions: {
    status: 'extensions',
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>Patient information with extensions</p></div>',
  } as INarrative,
  additional: {
    status: 'additional',
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h1>Additional Documentation</h1><p>This content was added by a clinician.</p></div>',
  } as INarrative,
  empty: {
    status: 'empty',
    div: '<div xmlns="http://www.w3.org/1999/xhtml"/>',
  } as INarrative,
  complex: {
    status: 'generated',
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><table><tr><th>Name</th><td>John Doe</td></tr><tr><th>DOB</th><td>1990-01-15</td></tr><tr><th>MRN</th><td>12345</td></tr></table></div>',
  } as INarrative,
};

describe('Narrative', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const narrative = new Narrative({});
        expect(narrative).toBeInstanceOf(Narrative);
      });

      it('should create generated narrative', () => {
        const narrative = new Narrative(narratives.generated);
        expect(narrative.status).toBe('generated');
        expect(narrative.div).toContain('Patient: John Doe');
      });

      it('should create extensions narrative', () => {
        const narrative = new Narrative(narratives.extensions);
        expect(narrative.status).toBe('extensions');
        expect(narrative.div).toContain('extensions');
      });

      it('should create additional narrative', () => {
        const narrative = new Narrative(narratives.additional);
        expect(narrative.status).toBe('additional');
        expect(narrative.div).toContain('Additional Documentation');
      });

      it('should create empty narrative', () => {
        const narrative = new Narrative(narratives.empty);
        expect(narrative.status).toBe('empty');
        expect(narrative.div).toContain('/>');
      });

      it('should create complex narrative with table', () => {
        const narrative = new Narrative(narratives.complex);
        expect(narrative.status).toBe('generated');
        expect(narrative.div).toContain('<table>');
        expect(narrative.div).toContain('John Doe');
        expect(narrative.div).toContain('1990-01-15');
      });

      it('should handle all status types', () => {
        const statusTypes = ['generated', 'extensions', 'additional', 'empty'] as const;
        statusTypes.forEach((status) => {
          const narrative = new Narrative({
            status,
            div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
          });
          expect(narrative.status).toBe(status);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const narrative = new Narrative(narratives.generated);
        const json = narrative.toJSON();

        expect(json.status).toBe('generated');
        expect(json.div).toContain('Patient: John Doe');
      });

      it('should omit undefined properties in JSON', () => {
        const narrative = new Narrative({
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
        });
        const json = narrative.toJSON();

        expect(json.status).toBe('generated');
        expect(json.div).toBeDefined();
        expect(json).not.toHaveProperty('_status');
        expect(json).not.toHaveProperty('_div');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Narrative(narratives.complex);
        expectSerializationRoundtrip(original, Narrative);
      });

      it('should preserve HTML content in div', () => {
        const narrative = new Narrative(narratives.complex);
        const json = narrative.toJSON();

        expect(json.div).toContain('<table>');
        expect(json.div).toContain('</table>');
        expect(json.div).toContain('<tr>');
        expect(json.div).toContain('<th>');
        expect(json.div).toContain('<td>');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: INarrative = {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test narrative</div>',
        };
        const narrative = Narrative.fromJSON(json);

        expect(narrative).toBeInstanceOf(Narrative);
        expect(narrative.status).toBe('generated');
        expect(narrative.div).toContain('Test narrative');
      });

      it('should create identical instance from JSON', () => {
        const original = new Narrative(narratives.complex);
        const json = original.toJSON();
        const restored = Narrative.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Narrative(narratives.generated);
        const updated = original.with({
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Updated content</div>',
        });

        expect(updated).not.toBe(original);
        expect(updated.div).toContain('Updated content');
        expect(original.div).toContain('Patient: John Doe');
      });

      it('should preserve unchanged properties with .with()', () => {
        const original = new Narrative(narratives.generated);
        const updated = original.with({
          status: 'additional',
        });

        expect(updated.status).toBe('additional');
        expect(updated.div).toBe(original.div);
      });

      it('should apply transform function correctly', () => {
        const narrative = new Narrative({
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">test content</div>',
        });
        const transformed = narrative.applyTransform((data) => ({
          div: data.div?.replace('test content', 'TRANSFORMED CONTENT'),
        }));

        expect(transformed.div).toContain('TRANSFORMED CONTENT');
        expect(narrative.div).toContain('test content');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Narrative(narratives.complex);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Narrative(narratives.generated);
        const cloned = original.clone();

        expect(cloned.status).toBe(original.status);
        expect(cloned.div).toBe(original.div);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const narrative = new Narrative(narratives.generated);
        const str = narrative.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Narrative');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _status extension', () => {
        const narrative = new Narrative({
          status: 'generated',
          _status: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'status-info' },
            ],
          },
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
        });

        expect(narrative._status?.extension?.[0]?.valueString).toBe('status-info');
      });

      it('should handle _div extension', () => {
        const narrative = new Narrative({
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
          _div: {
            id: 'div-ext',
          },
        });

        expect(narrative._div?.id).toBe('div-ext');
      });

      it('should serialize extension properties', () => {
        const narrative = new Narrative({
          status: 'generated',
          _status: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
        });
        const json = narrative.toJSON();

        expect(json._status?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const narrative = new Narrative({
          id: 'narr-1',
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
        });

        expect(narrative.id).toBe('narr-1');
      });

      it('should handle extension property', () => {
        const narrative = new Narrative({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
        });

        expect(narrative.extension).toHaveLength(1);
        expect(narrative.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const narrative = new NarrativeBuilder().build();
        expect(narrative).toBeInstanceOf(Narrative);
      });

      it('should build with status only', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('generated')
          .build();

        expect(narrative.status).toBe('generated');
      });

      it('should build with div only', () => {
        const narrative = new NarrativeBuilder()
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Content</div>')
          .build();

        expect(narrative.div).toContain('Content');
      });

      it('should build with all properties', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Complete narrative</div>')
          .build();

        expect(narrative.status).toBe('generated');
        expect(narrative.div).toContain('Complete narrative');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Test</div>');

        expect(builder).toBeInstanceOf(NarrativeBuilder);
      });

      it('should allow overwriting properties', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('generated')
          .setStatus('additional')
          .build();

        expect(narrative.status).toBe('additional');
      });
    });

    describe('Status Types', () => {
      it('should build with generated status', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Auto-generated</div>')
          .build();

        expect(narrative.status).toBe('generated');
      });

      it('should build with extensions status', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('extensions')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">With extensions</div>')
          .build();

        expect(narrative.status).toBe('extensions');
      });

      it('should build with additional status', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('additional')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Added by user</div>')
          .build();

        expect(narrative.status).toBe('additional');
      });

      it('should build with empty status', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('empty')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml"/>')
          .build();

        expect(narrative.status).toBe('empty');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const narrative = new NarrativeBuilder()
          .setId('narr-1')
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Test</div>')
          .build();

        expect(narrative.id).toBe('narr-1');
      });

      it('should add extension from ElementBuilder', () => {
        const narrative = new NarrativeBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Test</div>')
          .build();

        expect(narrative.extension).toHaveLength(1);
        expect(narrative.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const narrative = new NarrativeBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(narrative.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">First</div>');
        const first = builder.build();

        builder.setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Second</div>');
        const second = builder.build();

        expect(first.div).toContain('First');
        expect(second.div).toContain('Second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const narrative = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Valid content</div>')
          .build();

        const json = narrative.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new NarrativeBuilder()
          .setStatus('generated')
          .setDiv('<div xmlns="http://www.w3.org/1999/xhtml">Clonable</div>')
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
    it('should work in patient resource scenario', () => {
      const patientNarrative = new NarrativeBuilder()
        .setStatus('generated')
        .setDiv(`<div xmlns="http://www.w3.org/1999/xhtml">
          <h1>Patient Information</h1>
          <p><b>Name:</b> John Doe</p>
          <p><b>DOB:</b> 1990-01-15</p>
          <p><b>Gender:</b> Male</p>
        </div>`)
        .build();

      expect(patientNarrative.status).toBe('generated');
      expect(patientNarrative.div).toContain('John Doe');
      expect(patientNarrative.div).toContain('1990-01-15');

      const json = patientNarrative.toJSON();
      const restored = Narrative.fromJSON(json);

      expect(restored.status).toBe('generated');
      expect(restored.div).toContain('John Doe');
    });

    it('should work in observation resource scenario', () => {
      const observationNarrative = new Narrative({
        status: 'generated',
        div: `<div xmlns="http://www.w3.org/1999/xhtml">
          <p><b>Blood Pressure</b></p>
          <p>Systolic: 120 mmHg</p>
          <p>Diastolic: 80 mmHg</p>
          <p>Date: 2024-01-15</p>
        </div>`,
      });

      expect(observationNarrative.div).toContain('Blood Pressure');
      expect(observationNarrative.div).toContain('120 mmHg');
    });

    it('should work in medication resource scenario', () => {
      const medicationNarrative = new NarrativeBuilder()
        .setStatus('additional')
        .setDiv(`<div xmlns="http://www.w3.org/1999/xhtml">
          <h2>Medication Instructions</h2>
          <p>Take 1 tablet by mouth twice daily with food.</p>
          <p><em>Note: Avoid grapefruit juice while taking this medication.</em></p>
        </div>`)
        .build();

      expect(medicationNarrative.status).toBe('additional');
      expect(medicationNarrative.div).toContain('Medication Instructions');
      expect(medicationNarrative.div).toContain('grapefruit');
    });

    it('should handle narrative update', () => {
      const original = new Narrative(narratives.generated);

      const updated = original.with({
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Patient: John Doe (Updated)</div>',
      });

      expect(updated.div).toContain('(Updated)');
      expect(original.div).not.toContain('(Updated)');
      expect(updated.status).toBe('generated');
    });

    it('should handle status change for manual edits', () => {
      const autoGenerated = new Narrative(narratives.generated);

      const manuallyEdited = autoGenerated.with({
        status: 'additional',
        div: autoGenerated.div?.replace('John Doe', 'John M. Doe'),
      });

      expect(manuallyEdited.status).toBe('additional');
      expect(manuallyEdited.div).toContain('John M. Doe');
    });

    it('should work with complex HTML tables', () => {
      const tableNarrative = new Narrative({
        status: 'generated',
        div: `<div xmlns="http://www.w3.org/1999/xhtml">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Value</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-01-15</td>
                <td>120</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>2024-01-14</td>
                <td>115</td>
                <td>mg/dL</td>
              </tr>
            </tbody>
          </table>
        </div>`,
      });

      expect(tableNarrative.div).toContain('<thead>');
      expect(tableNarrative.div).toContain('<tbody>');
      expect(tableNarrative.div).toContain('120');
      expect(tableNarrative.div).toContain('mg/dL');
    });

    it('should handle empty narrative for minimal resources', () => {
      const emptyNarrative = new NarrativeBuilder()
        .setStatus('empty')
        .setDiv('<div xmlns="http://www.w3.org/1999/xhtml"/>')
        .build();

      expect(emptyNarrative.status).toBe('empty');

      const json = emptyNarrative.toJSON();
      expect(json.status).toBe('empty');
    });
  });
});
