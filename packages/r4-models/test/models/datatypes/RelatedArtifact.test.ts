/**
 * RelatedArtifact Model and Builder Tests
 *
 * Tests for the RelatedArtifact datatype class and its builder.
 * RelatedArtifact represents related artifacts such as documentation, citations, or bibliographic references.
 */

import { describe, it, expect } from 'vitest';
import { RelatedArtifact, RelatedArtifactBuilder } from '../../../src/index.js';
import type { IRelatedArtifact } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const relatedArtifacts = {
  documentation: {
    type: 'documentation',
    label: 'User Guide',
    display: 'Implementation Guide for this measure',
    url: 'http://example.org/fhir/ig/measure-guide',
  } as IRelatedArtifact,
  citation: {
    type: 'citation',
    label: 'Reference 1',
    citation: 'Smith J, et al. Clinical Study of Treatment Efficacy. J Med. 2024;15(2):100-110.',
    url: 'https://doi.org/10.1234/example',
  } as IRelatedArtifact,
  predecessor: {
    type: 'predecessor',
    display: 'Previous version of this measure',
    resource: 'Measure/measure-v1',
  } as IRelatedArtifact,
  successor: {
    type: 'successor',
    display: 'Next version of this measure',
    resource: 'Measure/measure-v3',
  } as IRelatedArtifact,
  derivedFrom: {
    type: 'derived-from',
    display: 'Based on original guideline',
    resource: 'Library/original-guideline',
  } as IRelatedArtifact,
  dependsOn: {
    type: 'depends-on',
    label: 'Required Library',
    display: 'CQL Library containing measure logic',
    resource: 'Library/measure-logic',
  } as IRelatedArtifact,
  composedOf: {
    type: 'composed-of',
    display: 'Component measure',
    resource: 'Measure/component-1',
  } as IRelatedArtifact,
  withDocument: {
    type: 'documentation',
    label: 'PDF Guide',
    document: {
      contentType: 'application/pdf',
      url: 'http://example.org/guides/implementation.pdf',
      title: 'Implementation Guide',
    },
  } as IRelatedArtifact,
};

describe('RelatedArtifact', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ra = new RelatedArtifact({});
        expect(ra).toBeInstanceOf(RelatedArtifact);
      });

      it('should create documentation artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.documentation);
        expect(ra.type).toBe('documentation');
        expect(ra.label).toBe('User Guide');
        expect(ra.display).toBe('Implementation Guide for this measure');
        expect(ra.url).toBe('http://example.org/fhir/ig/measure-guide');
      });

      it('should create citation artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.citation);
        expect(ra.type).toBe('citation');
        expect(ra.citation).toContain('Smith J');
        expect(ra.url).toContain('doi.org');
      });

      it('should create predecessor artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.predecessor);
        expect(ra.type).toBe('predecessor');
        expect(ra.resource).toBe('Measure/measure-v1');
      });

      it('should create successor artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.successor);
        expect(ra.type).toBe('successor');
        expect(ra.resource).toBe('Measure/measure-v3');
      });

      it('should create derived-from artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.derivedFrom);
        expect(ra.type).toBe('derived-from');
      });

      it('should create depends-on artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.dependsOn);
        expect(ra.type).toBe('depends-on');
        expect(ra.resource).toBe('Library/measure-logic');
      });

      it('should create composed-of artifact', () => {
        const ra = new RelatedArtifact(relatedArtifacts.composedOf);
        expect(ra.type).toBe('composed-of');
      });

      it('should create artifact with document attachment', () => {
        const ra = new RelatedArtifact(relatedArtifacts.withDocument);
        expect(ra.document?.contentType).toBe('application/pdf');
        expect(ra.document?.title).toBe('Implementation Guide');
      });

      it('should handle all type values', () => {
        const types = ['documentation', 'justification', 'citation', 'predecessor', 'successor', 'derived-from', 'depends-on', 'composed-of'] as const;
        types.forEach((type) => {
          const ra = new RelatedArtifact({ type });
          expect(ra.type).toBe(type);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ra = new RelatedArtifact(relatedArtifacts.documentation);
        const json = ra.toJSON();

        expect(json.type).toBe('documentation');
        expect(json.label).toBe('User Guide');
        expect(json.url).toBe('http://example.org/fhir/ig/measure-guide');
      });

      it('should omit undefined properties in JSON', () => {
        const ra = new RelatedArtifact(relatedArtifacts.predecessor);
        const json = ra.toJSON();

        expect(json.type).toBe('predecessor');
        expect(json.resource).toBeDefined();
        expect(json).not.toHaveProperty('citation');
        expect(json).not.toHaveProperty('document');
        expect(json).not.toHaveProperty('url');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new RelatedArtifact(relatedArtifacts.citation);
        expectSerializationRoundtrip(original, RelatedArtifact);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IRelatedArtifact = {
          type: 'documentation',
          display: 'Test documentation',
        };
        const ra = RelatedArtifact.fromJSON(json);

        expect(ra).toBeInstanceOf(RelatedArtifact);
        expect(ra.type).toBe('documentation');
      });

      it('should create identical instance from JSON', () => {
        const original = new RelatedArtifact(relatedArtifacts.withDocument);
        const json = original.toJSON();
        const restored = RelatedArtifact.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new RelatedArtifact(relatedArtifacts.documentation);
        const updated = original.with({ label: 'Updated Guide' });

        expect(updated).not.toBe(original);
        expect(updated.label).toBe('Updated Guide');
        expect(original.label).toBe('User Guide');
      });

      it('should apply transform function correctly', () => {
        const ra = new RelatedArtifact(relatedArtifacts.documentation);
        const transformed = ra.applyTransform((data) => ({
          display: data.display?.toUpperCase(),
        }));

        expect(transformed.display).toBe('IMPLEMENTATION GUIDE FOR THIS MEASURE');
        expect(ra.display).toBe('Implementation Guide for this measure');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new RelatedArtifact(relatedArtifacts.withDocument);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned document', () => {
        const original = new RelatedArtifact(relatedArtifacts.withDocument);
        const cloned = original.clone();

        if (cloned.document) {
          cloned.document.title = 'Modified Title';
        }

        expect(original.document?.title).toBe('Implementation Guide');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ra = new RelatedArtifact(relatedArtifacts.documentation);
        const str = ra.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('RelatedArtifact');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _type extension', () => {
        const ra = new RelatedArtifact({
          type: 'documentation',
          _type: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'type-info' },
            ],
          },
        });

        expect(ra._type?.extension?.[0]?.valueString).toBe('type-info');
      });

      it('should handle _citation extension', () => {
        const ra = new RelatedArtifact({
          type: 'citation',
          citation: 'Test citation',
          _citation: {
            id: 'citation-ext',
          },
        });

        expect(ra._citation?.id).toBe('citation-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const ra = new RelatedArtifact({
          id: 'ra-1',
          type: 'documentation',
        });

        expect(ra.id).toBe('ra-1');
      });

      it('should handle extension property', () => {
        const ra = new RelatedArtifact({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          type: 'documentation',
        });

        expect(ra.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ra = new RelatedArtifactBuilder().build();
        expect(ra).toBeInstanceOf(RelatedArtifact);
      });

      it('should build with type only', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('documentation')
          .build();

        expect(ra.type).toBe('documentation');
      });

      it('should build with all properties', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('citation')
          .setLabel('Reference 1')
          .setDisplay('Clinical study reference')
          .setCitation('Smith J, et al. Study. 2024.')
          .setUrl('https://doi.org/10.1234/example')
          .build();

        expect(ra.type).toBe('citation');
        expect(ra.label).toBe('Reference 1');
        expect(ra.citation).toContain('Smith J');
        expect(ra.url).toContain('doi.org');
      });

      it('should build with resource reference', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('depends-on')
          .setDisplay('Required library')
          .setResource('Library/my-library')
          .build();

        expect(ra.resource).toBe('Library/my-library');
      });

      it('should build with document attachment', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('documentation')
          .setDocument({
            contentType: 'application/pdf',
            url: 'http://example.org/doc.pdf',
          })
          .build();

        expect(ra.document?.contentType).toBe('application/pdf');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new RelatedArtifactBuilder()
          .setType('documentation')
          .setLabel('Guide')
          .setUrl('http://example.org');

        expect(builder).toBeInstanceOf(RelatedArtifactBuilder);
      });

      it('should allow overwriting properties', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('documentation')
          .setType('citation')
          .build();

        expect(ra.type).toBe('citation');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ra = new RelatedArtifactBuilder()
          .setId('ra-1')
          .setType('documentation')
          .build();

        expect(ra.id).toBe('ra-1');
      });

      it('should add extension from ElementBuilder', () => {
        const ra = new RelatedArtifactBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setType('documentation')
          .build();

        expect(ra.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ra = new RelatedArtifactBuilder()
          .setType('documentation')
          .setLabel('Guide')
          .setUrl('http://example.org')
          .build();

        const json = ra.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new RelatedArtifactBuilder()
          .setType('citation')
          .setCitation('Test citation')
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
    it('should work in measure definition scenario', () => {
      const measureRelatedArtifacts = [
        new RelatedArtifactBuilder()
          .setType('documentation')
          .setLabel('Measure Specification')
          .setUrl('http://example.org/measures/spec.pdf')
          .build(),
        new RelatedArtifactBuilder()
          .setType('depends-on')
          .setDisplay('Value Set - Diagnosis Codes')
          .setResource('ValueSet/diagnosis-codes')
          .build(),
        new RelatedArtifactBuilder()
          .setType('depends-on')
          .setDisplay('CQL Logic Library')
          .setResource('Library/measure-logic')
          .build(),
      ];

      expect(measureRelatedArtifacts).toHaveLength(3);
      expect(measureRelatedArtifacts[0].type).toBe('documentation');
      expect(measureRelatedArtifacts[1].type).toBe('depends-on');
    });

    it('should work in guideline citation scenario', () => {
      const citation = new RelatedArtifact(relatedArtifacts.citation);

      expect(citation.type).toBe('citation');
      expect(citation.citation).toContain('2024');

      const json = citation.toJSON();
      const restored = RelatedArtifact.fromJSON(json);

      expect(restored.citation).toContain('Smith J');
    });

    it('should work in versioning scenario', () => {
      const versionRelationships = [
        new RelatedArtifact({
          type: 'predecessor',
          display: 'Version 1.0',
          resource: 'Measure/measure-v1',
        }),
        new RelatedArtifact({
          type: 'successor',
          display: 'Version 3.0',
          resource: 'Measure/measure-v3',
        }),
      ];

      expect(versionRelationships[0].type).toBe('predecessor');
      expect(versionRelationships[1].type).toBe('successor');
    });

    it('should handle artifact update', () => {
      const original = new RelatedArtifact(relatedArtifacts.documentation);

      const updated = original.with({
        label: 'Updated User Guide',
        url: 'http://example.org/fhir/ig/measure-guide-v2',
      });

      expect(updated.label).toBe('Updated User Guide');
      expect(original.label).toBe('User Guide');
    });

    it('should work in library composition scenario', () => {
      const composedArtifacts = [
        new RelatedArtifactBuilder()
          .setType('composed-of')
          .setDisplay('Common Functions')
          .setResource('Library/common-functions')
          .build(),
        new RelatedArtifactBuilder()
          .setType('composed-of')
          .setDisplay('Terminology Helpers')
          .setResource('Library/terminology-helpers')
          .build(),
      ];

      expect(composedArtifacts).toHaveLength(2);
      composedArtifacts.forEach((a) => expect(a.type).toBe('composed-of'));
    });
  });
});
