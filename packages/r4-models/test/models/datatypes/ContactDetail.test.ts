/**
 * ContactDetail Model and Builder Tests
 *
 * Tests for the ContactDetail datatype class and its builder.
 * ContactDetail specifies contact information for a person or organization.
 */

import { describe, it, expect } from 'vitest';
import { ContactDetail, ContactDetailBuilder } from '../../../src/index.js';
import type { IContactDetail } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const contactDetails = {
  simple: {
    name: 'John Smith',
  } as IContactDetail,
  withEmail: {
    name: 'Dr. Jane Doe',
    telecom: [
      {
        system: 'email',
        value: 'jane.doe@hospital.org',
        use: 'work',
      },
    ],
  } as IContactDetail,
  complete: {
    name: 'Support Team',
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'work',
      },
      {
        system: 'email',
        value: 'support@healthcare.org',
        use: 'work',
      },
      {
        system: 'url',
        value: 'https://healthcare.org/support',
      },
    ],
  } as IContactDetail,
  publisher: {
    name: 'HL7 International - FHIR Infrastructure',
    telecom: [
      {
        system: 'url',
        value: 'http://hl7.org/fhir',
      },
    ],
  } as IContactDetail,
  maintainer: {
    name: 'System Administrator',
    telecom: [
      {
        system: 'email',
        value: 'admin@example.org',
        use: 'work',
        rank: 1,
      },
      {
        system: 'phone',
        value: '+1-555-999-0000',
        use: 'work',
        rank: 2,
      },
    ],
  } as IContactDetail,
};

describe('ContactDetail', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const contact = new ContactDetail({});
        expect(contact).toBeInstanceOf(ContactDetail);
        expect(contact.name).toBeUndefined();
        expect(contact.telecom).toBeUndefined();
      });

      it('should create simple contact', () => {
        const contact = new ContactDetail(contactDetails.simple);
        expect(contact.name).toBe('John Smith');
      });

      it('should create contact with email', () => {
        const contact = new ContactDetail(contactDetails.withEmail);
        expect(contact.name).toBe('Dr. Jane Doe');
        expect(contact.telecom).toHaveLength(1);
        expect(contact.telecom?.[0].value).toBe('jane.doe@hospital.org');
      });

      it('should create complete contact', () => {
        const contact = new ContactDetail(contactDetails.complete);
        expect(contact.name).toBe('Support Team');
        expect(contact.telecom).toHaveLength(3);
      });

      it('should create publisher contact', () => {
        const contact = new ContactDetail(contactDetails.publisher);
        expect(contact.name).toContain('HL7');
        expect(contact.telecom?.[0].system).toBe('url');
      });

      it('should create contact with ranked telecom', () => {
        const contact = new ContactDetail(contactDetails.maintainer);
        expect(contact.telecom?.[0].rank).toBe(1);
        expect(contact.telecom?.[1].rank).toBe(2);
      });

      it('should create contact with name only', () => {
        const contact = new ContactDetail({ name: 'Anonymous' });
        expect(contact.name).toBe('Anonymous');
        expect(contact.telecom).toBeUndefined();
      });

      it('should create contact with telecom only', () => {
        const contact = new ContactDetail({
          telecom: [{ system: 'email', value: 'test@example.org' }],
        });
        expect(contact.name).toBeUndefined();
        expect(contact.telecom).toHaveLength(1);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const contact = new ContactDetail(contactDetails.complete);
        const json = contact.toJSON();

        expect(json.name).toBe('Support Team');
        expect(json.telecom).toHaveLength(3);
        expect(json.telecom?.[0].system).toBe('phone');
      });

      it('should omit undefined properties in JSON', () => {
        const contact = new ContactDetail(contactDetails.simple);
        const json = contact.toJSON();

        expect(json.name).toBe('John Smith');
        expect(json).not.toHaveProperty('telecom');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ContactDetail(contactDetails.complete);
        expectSerializationRoundtrip(original, ContactDetail);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IContactDetail = {
          name: 'Test Contact',
          telecom: [{ system: 'phone', value: '555-1234' }],
        };
        const contact = ContactDetail.fromJSON(json);

        expect(contact).toBeInstanceOf(ContactDetail);
        expect(contact.name).toBe('Test Contact');
      });

      it('should create identical instance from JSON', () => {
        const original = new ContactDetail(contactDetails.complete);
        const json = original.toJSON();
        const restored = ContactDetail.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ContactDetail(contactDetails.simple);
        const updated = original.with({ name: 'Jane Doe' });

        expect(updated).not.toBe(original);
        expect(updated.name).toBe('Jane Doe');
        expect(original.name).toBe('John Smith');
      });

      it('should allow adding telecom with .with()', () => {
        const original = new ContactDetail(contactDetails.simple);
        const updated = original.with({
          telecom: [{ system: 'email', value: 'john@example.org' }],
        });

        expect(updated.telecom).toHaveLength(1);
        expect(original.telecom).toBeUndefined();
      });

      it('should apply transform function correctly', () => {
        const contact = new ContactDetail({ name: 'john doe' });
        const transformed = contact.applyTransform((data) => ({
          name: data.name?.toUpperCase(),
        }));

        expect(transformed.name).toBe('JOHN DOE');
        expect(contact.name).toBe('john doe');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ContactDetail(contactDetails.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned telecom', () => {
        const original = new ContactDetail(contactDetails.withEmail);
        const cloned = original.clone();

        if (cloned.telecom?.[0]) {
          cloned.telecom[0].value = 'modified@example.org';
        }

        expect(original.telecom?.[0].value).toBe('jane.doe@hospital.org');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const contact = new ContactDetail(contactDetails.simple);
        const str = contact.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ContactDetail');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _name extension', () => {
        const contact = new ContactDetail({
          name: 'John',
          _name: {
            extension: [
              { url: 'http://example.org/nickname', valueString: 'Johnny' },
            ],
          },
        });

        expect(contact._name?.extension?.[0]?.valueString).toBe('Johnny');
      });

      it('should serialize extension properties', () => {
        const contact = new ContactDetail({
          name: 'Test',
          _name: {
            id: 'name-ext',
          },
        });
        const json = contact.toJSON();

        expect(json._name?.id).toBe('name-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const contact = new ContactDetail({
          id: 'contact-1',
          name: 'Test',
        });

        expect(contact.id).toBe('contact-1');
      });

      it('should handle extension property', () => {
        const contact = new ContactDetail({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          name: 'Test',
        });

        expect(contact.extension).toHaveLength(1);
        expect(contact.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const contact = new ContactDetailBuilder().build();
        expect(contact).toBeInstanceOf(ContactDetail);
      });

      it('should build with name only', () => {
        const contact = new ContactDetailBuilder()
          .setName('John Smith')
          .build();

        expect(contact.name).toBe('John Smith');
      });

      it('should build with telecom', () => {
        const contact = new ContactDetailBuilder()
          .setName('Support')
          .addTelecom({
            system: 'email',
            value: 'support@example.org',
          })
          .build();

        expect(contact.name).toBe('Support');
        expect(contact.telecom).toHaveLength(1);
      });

      it('should build with multiple telecoms', () => {
        const contact = new ContactDetailBuilder()
          .setName('Contact Center')
          .addTelecom({ system: 'phone', value: '555-1234' })
          .addTelecom({ system: 'email', value: 'contact@example.org' })
          .addTelecom({ system: 'url', value: 'https://example.org' })
          .build();

        expect(contact.telecom).toHaveLength(3);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ContactDetailBuilder()
          .setName('Test')
          .addTelecom({ system: 'email', value: 'test@example.org' });

        expect(builder).toBeInstanceOf(ContactDetailBuilder);
      });

      it('should allow overwriting name', () => {
        const contact = new ContactDetailBuilder()
          .setName('First')
          .setName('Second')
          .build();

        expect(contact.name).toBe('Second');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const contact = new ContactDetailBuilder()
          .setId('contact-1')
          .setName('Test')
          .build();

        expect(contact.id).toBe('contact-1');
      });

      it('should add extension from ElementBuilder', () => {
        const contact = new ContactDetailBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setName('Test')
          .build();

        expect(contact.extension).toHaveLength(1);
        expect(contact.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ContactDetailBuilder().setName('First');
        const first = builder.build();

        builder.setName('Second');
        const second = builder.build();

        expect(first.name).toBe('First');
        expect(second.name).toBe('Second');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const contact = new ContactDetailBuilder()
          .setName('Test Contact')
          .addTelecom({ system: 'email', value: 'test@example.org' })
          .build();

        const json = contact.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ContactDetailBuilder()
          .setName('Test')
          .addTelecom({ system: 'phone', value: '555-1234' })
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
    it('should work in resource publisher scenario', () => {
      const publisher = new ContactDetailBuilder()
        .setName('HL7 International - FHIR Infrastructure')
        .addTelecom({
          system: 'url',
          value: 'http://hl7.org/fhir',
        })
        .build();

      expect(publisher.name).toContain('HL7');
      expect(publisher.telecom?.[0].value).toBe('http://hl7.org/fhir');

      const json = publisher.toJSON();
      const restored = ContactDetail.fromJSON(json);

      expect(restored.name).toContain('HL7');
    });

    it('should work in library author scenario', () => {
      const author = new ContactDetail({
        name: 'Dr. Medical Informatics',
        telecom: [
          { system: 'email', value: 'informatics@hospital.org' },
        ],
      });

      expect(author.name).toContain('Informatics');
    });

    it('should work in support contact scenario', () => {
      const support = new ContactDetailBuilder()
        .setName('Technical Support')
        .addTelecom({
          system: 'phone',
          value: '+1-800-555-HELP',
          use: 'work',
        })
        .addTelecom({
          system: 'email',
          value: 'support@healthcare.org',
          use: 'work',
        })
        .build();

      expect(support.telecom).toHaveLength(2);
      expect(support.telecom?.[0].use).toBe('work');
    });

    it('should handle contact update', () => {
      const original = new ContactDetail(contactDetails.simple);

      const updated = original.with({
        telecom: [{ system: 'email', value: 'john.smith@example.org' }],
      });

      expect(updated.name).toBe('John Smith');
      expect(updated.telecom).toHaveLength(1);
      expect(original.telecom).toBeUndefined();
    });

    it('should handle multiple contacts scenario', () => {
      const contacts = [
        new ContactDetail({
          name: 'Primary Contact',
          telecom: [{ system: 'email', value: 'primary@example.org', rank: 1 }],
        }),
        new ContactDetail({
          name: 'Secondary Contact',
          telecom: [{ system: 'email', value: 'secondary@example.org', rank: 2 }],
        }),
      ];

      expect(contacts).toHaveLength(2);
      expect(contacts[0].name).toBe('Primary Contact');
      expect(contacts[1].name).toBe('Secondary Contact');
    });

    it('should work in measure steward scenario', () => {
      const steward = new ContactDetail({
        name: 'National Quality Forum',
        telecom: [
          { system: 'url', value: 'https://www.qualityforum.org' },
          { system: 'email', value: 'info@qualityforum.org' },
        ],
      });

      expect(steward.name).toBe('National Quality Forum');
      expect(steward.telecom).toHaveLength(2);
    });
  });
});
