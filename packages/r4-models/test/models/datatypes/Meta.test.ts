/**
 * Meta Model and Builder Tests
 *
 * Tests for the Meta datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Meta, MetaBuilder } from '../../../src/index.js';
import type { IMeta } from '@fhir-toolkit/r4-types';
import { metas } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Meta', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const meta = new Meta({});
        expect(meta).toBeInstanceOf(Meta);
        expect(meta.versionId).toBeUndefined();
        expect(meta.lastUpdated).toBeUndefined();
      });

      it('should create instance with versionId only', () => {
        const meta = new Meta({ versionId: '1' });
        expect(meta.versionId).toBe('1');
      });

      it('should create simple meta', () => {
        const meta = new Meta(metas.simple);
        expect(meta.versionId).toBe('1');
        expect(meta.lastUpdated).toBe('2024-01-15T10:30:00Z');
      });

      it('should create complete meta', () => {
        const meta = new Meta(metas.complete);
        expect(meta.versionId).toBe('3');
        expect(meta.lastUpdated).toBe('2024-01-15T15:00:00Z');
        expect(meta.source).toBe('http://hospital.example.org/fhir');
        expect(meta.profile).toHaveLength(1);
        expect(meta.profile?.[0]).toBe('http://hl7.org/fhir/StructureDefinition/Patient');
        expect(meta.security).toHaveLength(1);
        expect(meta.security?.[0]?.code).toBe('R');
        expect(meta.tag).toHaveLength(1);
        expect(meta.tag?.[0]?.code).toBe('reviewed');
      });

      it('should create meta with multiple profiles', () => {
        const meta = new Meta({
          profile: [
            'http://hl7.org/fhir/StructureDefinition/Patient',
            'http://example.org/fhir/StructureDefinition/CustomPatient',
          ],
        });
        expect(meta.profile).toHaveLength(2);
      });

      it('should create meta with multiple security labels', () => {
        const meta = new Meta({
          security: [
            { system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality', code: 'R' },
            { system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', code: 'ETH' },
          ],
        });
        expect(meta.security).toHaveLength(2);
      });

      it('should create meta with multiple tags', () => {
        const meta = new Meta({
          tag: [
            { system: 'http://example.org/tags', code: 'reviewed' },
            { system: 'http://example.org/tags', code: 'approved' },
          ],
        });
        expect(meta.tag).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const meta = new Meta(metas.complete);
        const json = meta.toJSON();

        expect(json.versionId).toBe('3');
        expect(json.lastUpdated).toBe('2024-01-15T15:00:00Z');
        expect(json.source).toBe('http://hospital.example.org/fhir');
        expect(json.profile?.[0]).toBe('http://hl7.org/fhir/StructureDefinition/Patient');
      });

      it('should omit undefined properties in JSON', () => {
        const meta = new Meta({ versionId: '1' });
        const json = meta.toJSON();

        expect(json.versionId).toBe('1');
        expect(json).not.toHaveProperty('lastUpdated');
        expect(json).not.toHaveProperty('source');
        expect(json).not.toHaveProperty('profile');
        expect(json).not.toHaveProperty('security');
        expect(json).not.toHaveProperty('tag');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Meta(metas.complete);
        expectSerializationRoundtrip(original, Meta);
      });

      it('should preserve arrays in JSON', () => {
        const meta = new Meta({
          profile: ['profile1', 'profile2'],
          security: [{ code: 'R' }, { code: 'N' }],
          tag: [{ code: 'tag1' }, { code: 'tag2' }],
        });
        const json = meta.toJSON();

        expect(json.profile).toHaveLength(2);
        expect(json.security).toHaveLength(2);
        expect(json.tag).toHaveLength(2);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IMeta = {
          versionId: '2',
          lastUpdated: '2024-01-15T12:00:00Z',
        };
        const meta = Meta.fromJSON(json);

        expect(meta).toBeInstanceOf(Meta);
        expect(meta.versionId).toBe('2');
        expect(meta.lastUpdated).toBe('2024-01-15T12:00:00Z');
      });

      it('should create identical instance from JSON', () => {
        const original = new Meta(metas.complete);
        const json = original.toJSON();
        const restored = Meta.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Meta({ versionId: '1', lastUpdated: '2024-01-01T00:00:00Z' });
        const updated = original.with({ versionId: '2' });

        expect(updated).not.toBe(original);
        expect(updated.versionId).toBe('2');
        expect(updated.lastUpdated).toBe('2024-01-01T00:00:00Z');
        expect(original.versionId).toBe('1');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Meta({ versionId: '1', source: 'http://old.org' });
        const updated = original.with({
          versionId: '2',
          source: 'http://new.org',
        });

        expect(updated.versionId).toBe('2');
        expect(updated.source).toBe('http://new.org');
        expect(original.versionId).toBe('1');
        expect(original.source).toBe('http://old.org');
      });

      it('should apply transform function correctly', () => {
        const meta = new Meta({ versionId: '1' });
        const transformed = meta.applyTransform((data) => ({
          versionId: String(Number(data.versionId) + 1),
        }));

        expect(transformed.versionId).toBe('2');
        expect(meta.versionId).toBe('1');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Meta(metas.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned arrays', () => {
        const original = new Meta({
          profile: ['http://example.org/profile'],
          security: [{ code: 'R' }],
        });
        const cloned = original.clone();

        if (cloned.profile) {
          cloned.profile[0] = 'MODIFIED';
        }
        if (cloned.security) {
          cloned.security[0].code = 'MODIFIED';
        }

        expect(original.profile?.[0]).toBe('http://example.org/profile');
        expect(original.security?.[0]?.code).toBe('R');
      });

      it('should clone all properties', () => {
        const original = new Meta({
          versionId: '1',
          lastUpdated: '2024-01-01T00:00:00Z',
          source: 'http://example.org',
          profile: ['http://example.org/profile'],
          security: [{ code: 'R' }],
          tag: [{ code: 'test' }],
        });
        const cloned = original.clone();

        expect(cloned.versionId).toBe(original.versionId);
        expect(cloned.lastUpdated).toBe(original.lastUpdated);
        expect(cloned.source).toBe(original.source);
        expect(cloned.profile).toEqual(original.profile);
        expect(cloned.security).toEqual(original.security);
        expect(cloned.tag).toEqual(original.tag);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const meta = new Meta({ versionId: '1' });
        const str = meta.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Meta');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _versionId extension', () => {
        const meta = new Meta({
          versionId: '1',
          _versionId: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'extended' },
            ],
          },
        });

        expect(meta._versionId?.extension?.[0]?.valueString).toBe('extended');
      });

      it('should serialize extension properties', () => {
        const meta = new Meta({
          versionId: '1',
          _versionId: {
            id: 'version-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = meta.toJSON();

        expect(json._versionId?.id).toBe('version-ext');
        expect(json._versionId?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const meta = new MetaBuilder().build();
        expect(meta).toBeInstanceOf(Meta);
      });

      it('should build with versionId only', () => {
        const meta = new MetaBuilder()
          .setVersionId('1')
          .build();

        expect(meta.versionId).toBe('1');
      });

      it('should build with all scalar properties', () => {
        const meta = new MetaBuilder()
          .setVersionId('1')
          .setLastUpdated('2024-01-15T10:30:00Z')
          .setSource('http://example.org/fhir')
          .build();

        expect(meta.versionId).toBe('1');
        expect(meta.lastUpdated).toBe('2024-01-15T10:30:00Z');
        expect(meta.source).toBe('http://example.org/fhir');
      });

      it('should build with profiles', () => {
        const meta = new MetaBuilder()
          .addProfile('http://hl7.org/fhir/StructureDefinition/Patient')
          .addProfile('http://example.org/fhir/StructureDefinition/CustomPatient')
          .build();

        expect(meta.profile).toHaveLength(2);
      });

      it('should build with security labels', () => {
        const meta = new MetaBuilder()
          .addSecurity({
            system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
            code: 'R',
            display: 'Restricted',
          })
          .build();

        expect(meta.security).toHaveLength(1);
        expect(meta.security?.[0]?.code).toBe('R');
      });

      it('should build with tags', () => {
        const meta = new MetaBuilder()
          .addTag({
            system: 'http://example.org/tags',
            code: 'reviewed',
            display: 'Reviewed',
          })
          .build();

        expect(meta.tag).toHaveLength(1);
        expect(meta.tag?.[0]?.code).toBe('reviewed');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new MetaBuilder()
          .setVersionId('1')
          .setLastUpdated('2024-01-15T10:30:00Z')
          .addProfile('http://example.org/profile');

        expect(builder).toBeInstanceOf(MetaBuilder);
      });

      it('should allow overwriting scalar properties', () => {
        const meta = new MetaBuilder()
          .setVersionId('1')
          .setVersionId('2')
          .build();

        expect(meta.versionId).toBe('2');
      });

      it('should accumulate profiles', () => {
        const meta = new MetaBuilder()
          .addProfile('profile1')
          .addProfile('profile2')
          .addProfile('profile3')
          .build();

        expect(meta.profile).toHaveLength(3);
      });

      it('should accumulate security labels', () => {
        const meta = new MetaBuilder()
          .addSecurity({ code: 'R' })
          .addSecurity({ code: 'N' })
          .build();

        expect(meta.security).toHaveLength(2);
      });

      it('should accumulate tags', () => {
        const meta = new MetaBuilder()
          .addTag({ code: 'tag1' })
          .addTag({ code: 'tag2' })
          .addTag({ code: 'tag3' })
          .build();

        expect(meta.tag).toHaveLength(3);
      });
    });

    describe('Common Security Labels', () => {
      it('should build with confidentiality code R (Restricted)', () => {
        const meta = new MetaBuilder()
          .addSecurity({
            system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
            code: 'R',
            display: 'Restricted',
          })
          .build();

        expect(meta.security?.[0]?.code).toBe('R');
      });

      it('should build with confidentiality code V (Very Restricted)', () => {
        const meta = new MetaBuilder()
          .addSecurity({
            system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
            code: 'V',
            display: 'Very Restricted',
          })
          .build();

        expect(meta.security?.[0]?.code).toBe('V');
      });

      it('should build with ETH (Substance Abuse) label', () => {
        const meta = new MetaBuilder()
          .addSecurity({
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
            code: 'ETH',
            display: 'Substance Abuse Information',
          })
          .build();

        expect(meta.security?.[0]?.code).toBe('ETH');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const meta = new MetaBuilder()
          .setId('meta-1')
          .setVersionId('1')
          .build();

        expect(meta.id).toBe('meta-1');
      });

      it('should add extension from ElementBuilder', () => {
        const meta = new MetaBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setVersionId('1')
          .build();

        expect(meta.extension).toHaveLength(1);
        expect(meta.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const meta = new MetaBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(meta.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new MetaBuilder().setVersionId('1');
        const first = builder.build();

        builder.setVersionId('2');
        const second = builder.build();

        expect(first.versionId).toBe('1');
        expect(second.versionId).toBe('2');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const meta = new MetaBuilder()
          .setVersionId('1')
          .setLastUpdated('2024-01-15T10:30:00Z')
          .addProfile('http://example.org/profile')
          .build();

        const json = meta.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new MetaBuilder()
          .setVersionId('1')
          .addProfile('http://example.org/profile')
          .addSecurity({ code: 'R' })
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
    it('should work in typical resource meta scenario', () => {
      const resourceMeta = new MetaBuilder()
        .setVersionId('1')
        .setLastUpdated('2024-01-15T10:30:00Z')
        .setSource('http://hospital.example.org/fhir')
        .addProfile('http://hl7.org/fhir/StructureDefinition/Patient')
        .addSecurity({
          system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
          code: 'R',
        })
        .addTag({
          system: 'http://example.org/tags',
          code: 'reviewed',
        })
        .build();

      expect(resourceMeta.versionId).toBe('1');
      expect(resourceMeta.profile).toHaveLength(1);
      expect(resourceMeta.security).toHaveLength(1);
      expect(resourceMeta.tag).toHaveLength(1);

      const json = resourceMeta.toJSON();
      const restored = Meta.fromJSON(json);

      expect(restored.versionId).toBe('1');
      expect(restored.security?.[0]?.code).toBe('R');
    });

    it('should handle version increment scenario', () => {
      const version1 = new Meta({
        versionId: '1',
        lastUpdated: '2024-01-01T00:00:00Z',
      });

      const version2 = version1.with({
        versionId: '2',
        lastUpdated: '2024-01-15T12:00:00Z',
      });

      expect(version1.versionId).toBe('1');
      expect(version2.versionId).toBe('2');
      expect(version2.lastUpdated).toBe('2024-01-15T12:00:00Z');
    });

    it('should handle profile addition', () => {
      const original = new Meta({
        profile: ['http://hl7.org/fhir/StructureDefinition/Patient'],
      });

      const updated = original.with({
        profile: [
          ...original.profile!,
          'http://example.org/fhir/StructureDefinition/CustomPatient',
        ],
      });

      expect(original.profile).toHaveLength(1);
      expect(updated.profile).toHaveLength(2);
    });

    it('should handle sensitive data with security labels', () => {
      const sensitiveMeta = new MetaBuilder()
        .setVersionId('1')
        .addSecurity({
          system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
          code: 'V',
          display: 'Very Restricted',
        })
        .addSecurity({
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'PSY',
          display: 'Psychiatry Information',
        })
        .build();

      expect(sensitiveMeta.security).toHaveLength(2);
      expect(sensitiveMeta.security?.[0]?.code).toBe('V');
      expect(sensitiveMeta.security?.[1]?.code).toBe('PSY');
    });
  });
});
