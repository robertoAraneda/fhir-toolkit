/**
 * Contributor Model and Builder Tests
 *
 * Tests for the Contributor datatype class and its builder.
 * Contributor represents a contributor to a knowledge asset.
 */

import { describe, it, expect } from 'vitest';
import { Contributor, ContributorBuilder } from '../../../src/index.js';
import type { IContributor } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const contributors = {
  author: {
    type: 'author',
    name: 'Dr. Jane Smith',
  } as IContributor,
  editor: {
    type: 'editor',
    name: 'John Doe',
    contact: [
      {
        name: 'John Doe',
        telecom: [
          { system: 'email', value: 'john.doe@example.org' },
        ],
      },
    ],
  } as IContributor,
  reviewer: {
    type: 'reviewer',
    name: 'Clinical Review Board',
    contact: [
      {
        name: 'Review Coordinator',
        telecom: [
          { system: 'email', value: 'review@hospital.org' },
          { system: 'phone', value: '+1-555-123-4567' },
        ],
      },
    ],
  } as IContributor,
  endorser: {
    type: 'endorser',
    name: 'National Quality Organization',
    contact: [
      {
        telecom: [
          { system: 'url', value: 'https://quality.org' },
        ],
      },
    ],
  } as IContributor,
  multipleContacts: {
    type: 'author',
    name: 'Research Team',
    contact: [
      {
        name: 'Primary Author',
        telecom: [{ system: 'email', value: 'primary@example.org' }],
      },
      {
        name: 'Co-Author',
        telecom: [{ system: 'email', value: 'coauthor@example.org' }],
      },
      {
        name: 'Research Assistant',
        telecom: [{ system: 'email', value: 'assistant@example.org' }],
      },
    ],
  } as IContributor,
};

describe('Contributor', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const contrib = new Contributor({});
        expect(contrib).toBeInstanceOf(Contributor);
      });

      it('should create author contributor', () => {
        const contrib = new Contributor(contributors.author);
        expect(contrib.type).toBe('author');
        expect(contrib.name).toBe('Dr. Jane Smith');
      });

      it('should create editor contributor', () => {
        const contrib = new Contributor(contributors.editor);
        expect(contrib.type).toBe('editor');
        expect(contrib.name).toBe('John Doe');
        expect(contrib.contact).toHaveLength(1);
      });

      it('should create reviewer contributor', () => {
        const contrib = new Contributor(contributors.reviewer);
        expect(contrib.type).toBe('reviewer');
        expect(contrib.contact?.[0].telecom).toHaveLength(2);
      });

      it('should create endorser contributor', () => {
        const contrib = new Contributor(contributors.endorser);
        expect(contrib.type).toBe('endorser');
        expect(contrib.contact?.[0].telecom?.[0].system).toBe('url');
      });

      it('should create contributor with multiple contacts', () => {
        const contrib = new Contributor(contributors.multipleContacts);
        expect(contrib.contact).toHaveLength(3);
        expect(contrib.contact?.[0].name).toBe('Primary Author');
        expect(contrib.contact?.[1].name).toBe('Co-Author');
      });

      it('should handle all contributor types', () => {
        const types = ['author', 'editor', 'reviewer', 'endorser'] as const;
        types.forEach((type) => {
          const contrib = new Contributor({ type, name: 'Test' });
          expect(contrib.type).toBe(type);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const contrib = new Contributor(contributors.editor);
        const json = contrib.toJSON();

        expect(json.type).toBe('editor');
        expect(json.name).toBe('John Doe');
        expect(json.contact?.[0].telecom?.[0].value).toBe('john.doe@example.org');
      });

      it('should omit undefined properties in JSON', () => {
        const contrib = new Contributor(contributors.author);
        const json = contrib.toJSON();

        expect(json.type).toBe('author');
        expect(json.name).toBe('Dr. Jane Smith');
        expect(json).not.toHaveProperty('contact');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Contributor(contributors.reviewer);
        expectSerializationRoundtrip(original, Contributor);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IContributor = {
          type: 'author',
          name: 'Test Author',
        };
        const contrib = Contributor.fromJSON(json);

        expect(contrib).toBeInstanceOf(Contributor);
        expect(contrib.type).toBe('author');
        expect(contrib.name).toBe('Test Author');
      });

      it('should create identical instance from JSON', () => {
        const original = new Contributor(contributors.multipleContacts);
        const json = original.toJSON();
        const restored = Contributor.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Contributor(contributors.author);
        const updated = original.with({ name: 'Dr. John Smith' });

        expect(updated).not.toBe(original);
        expect(updated.name).toBe('Dr. John Smith');
        expect(original.name).toBe('Dr. Jane Smith');
      });

      it('should preserve type when changing name', () => {
        const original = new Contributor(contributors.author);
        const updated = original.with({ name: 'New Author' });

        expect(updated.type).toBe('author');
        expect(updated.name).toBe('New Author');
      });

      it('should apply transform function correctly', () => {
        const contrib = new Contributor(contributors.author);
        const transformed = contrib.applyTransform((data) => ({
          name: data.name?.toUpperCase(),
        }));

        expect(transformed.name).toBe('DR. JANE SMITH');
        expect(contrib.name).toBe('Dr. Jane Smith');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Contributor(contributors.reviewer);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned contact', () => {
        const original = new Contributor(contributors.editor);
        const cloned = original.clone();

        if (cloned.contact?.[0]) {
          cloned.contact[0].name = 'Modified Name';
        }

        expect(original.contact?.[0].name).toBe('John Doe');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const contrib = new Contributor(contributors.author);
        const str = contrib.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Contributor');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _type extension', () => {
        const contrib = new Contributor({
          type: 'author',
          _type: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'type-info' },
            ],
          },
          name: 'Test',
        });

        expect(contrib._type?.extension?.[0]?.valueString).toBe('type-info');
      });

      it('should handle _name extension', () => {
        const contrib = new Contributor({
          type: 'author',
          name: 'Test',
          _name: {
            id: 'name-ext',
          },
        });

        expect(contrib._name?.id).toBe('name-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const contrib = new Contributor({
          id: 'contrib-1',
          type: 'author',
          name: 'Test',
        });

        expect(contrib.id).toBe('contrib-1');
      });

      it('should handle extension property', () => {
        const contrib = new Contributor({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          type: 'author',
          name: 'Test',
        });

        expect(contrib.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const contrib = new ContributorBuilder().build();
        expect(contrib).toBeInstanceOf(Contributor);
      });

      it('should build with type and name', () => {
        const contrib = new ContributorBuilder()
          .setType('author')
          .setName('Dr. Jane Smith')
          .build();

        expect(contrib.type).toBe('author');
        expect(contrib.name).toBe('Dr. Jane Smith');
      });

      it('should build with contact', () => {
        const contrib = new ContributorBuilder()
          .setType('editor')
          .setName('John Doe')
          .addContact({
            name: 'John Doe',
            telecom: [{ system: 'email', value: 'john@example.org' }],
          })
          .build();

        expect(contrib.contact).toHaveLength(1);
        expect(contrib.contact?.[0].telecom?.[0].value).toBe('john@example.org');
      });

      it('should build with multiple contacts', () => {
        const contrib = new ContributorBuilder()
          .setType('author')
          .setName('Research Team')
          .addContact({ name: 'Author 1' })
          .addContact({ name: 'Author 2' })
          .addContact({ name: 'Author 3' })
          .build();

        expect(contrib.contact).toHaveLength(3);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ContributorBuilder()
          .setType('author')
          .setName('Test')
          .addContact({ name: 'Contact' });

        expect(builder).toBeInstanceOf(ContributorBuilder);
      });

      it('should allow overwriting properties', () => {
        const contrib = new ContributorBuilder()
          .setType('author')
          .setType('editor')
          .build();

        expect(contrib.type).toBe('editor');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const contrib = new ContributorBuilder()
          .setId('contrib-1')
          .setType('author')
          .setName('Test')
          .build();

        expect(contrib.id).toBe('contrib-1');
      });

      it('should add extension from ElementBuilder', () => {
        const contrib = new ContributorBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setType('author')
          .setName('Test')
          .build();

        expect(contrib.extension).toHaveLength(1);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ContributorBuilder()
          .setType('author')
          .setName('First');
        const first = builder.build();

        builder.setName('Second');
        const second = builder.build();

        expect(first.name).toBe('First');
        expect(second.name).toBe('Second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const contrib = new ContributorBuilder()
          .setType('author')
          .setName('Test Author')
          .addContact({ telecom: [{ system: 'email', value: 'test@example.org' }] })
          .build();

        const json = contrib.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ContributorBuilder()
          .setType('reviewer')
          .setName('Review Board')
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
    it('should work in library authorship scenario', () => {
      const libraryContributors = [
        new ContributorBuilder()
          .setType('author')
          .setName('Clinical Informatics Team')
          .addContact({
            name: 'Lead Developer',
            telecom: [{ system: 'email', value: 'dev@hospital.org' }],
          })
          .build(),
        new ContributorBuilder()
          .setType('reviewer')
          .setName('Medical Director')
          .build(),
        new ContributorBuilder()
          .setType('endorser')
          .setName('Quality Committee')
          .build(),
      ];

      expect(libraryContributors).toHaveLength(3);
      expect(libraryContributors[0].type).toBe('author');
      expect(libraryContributors[1].type).toBe('reviewer');
      expect(libraryContributors[2].type).toBe('endorser');
    });

    it('should work in measure development scenario', () => {
      const measureDevelopers = new Contributor(contributors.multipleContacts);

      expect(measureDevelopers.contact).toHaveLength(3);

      const json = measureDevelopers.toJSON();
      const restored = Contributor.fromJSON(json);

      expect(restored.contact?.[0].name).toBe('Primary Author');
    });

    it('should work in clinical guideline scenario', () => {
      const guidelineContributor = new Contributor({
        type: 'author',
        name: 'Clinical Guidelines Committee',
        contact: [
          {
            name: 'Committee Chair',
            telecom: [
              { system: 'email', value: 'chair@guidelines.org' },
              { system: 'phone', value: '+1-800-GUIDELINE' },
            ],
          },
        ],
      });

      expect(guidelineContributor.type).toBe('author');
      expect(guidelineContributor.contact?.[0].telecom).toHaveLength(2);
    });

    it('should handle contributor update', () => {
      const original = new Contributor(contributors.author);

      const updated = original.with({
        contact: [
          { telecom: [{ system: 'email', value: 'jane.smith@neworg.org' }] },
        ],
      });

      expect(updated.contact).toHaveLength(1);
      expect(original.contact).toBeUndefined();
    });

    it('should work in endorsement scenario', () => {
      const endorser = new ContributorBuilder()
        .setType('endorser')
        .setName('National Committee on Quality Assurance')
        .addContact({
          telecom: [
            { system: 'url', value: 'https://ncqa.org' },
          ],
        })
        .build();

      expect(endorser.type).toBe('endorser');
      expect(endorser.contact?.[0].telecom?.[0].system).toBe('url');
    });

    it('should handle role change', () => {
      const original = new Contributor(contributors.editor);

      const promoted = original.with({
        type: 'author',
      });

      expect(promoted.type).toBe('author');
      expect(promoted.name).toBe('John Doe');
      expect(original.type).toBe('editor');
    });
  });
});
