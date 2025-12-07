/**
 * Practitioner Resource Model and Builder Tests
 *
 * Tests for the Practitioner resource class and its builder.
 * Practitioner represents a person who is directly or indirectly involved
 * in the provisioning of healthcare.
 */

import { describe, it, expect } from 'vitest';
import { Practitioner, PractitionerBuilder } from '../../../src/index.js';
import type { IPractitioner } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const practitioners = {
  simple: {
    resourceType: 'Practitioner',
    id: 'example',
    active: true,
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['John'],
        prefix: ['Dr.'],
      },
    ],
    gender: 'male',
  } as IPractitioner,
  complete: {
    resourceType: 'Practitioner',
    id: 'complete-practitioner',
    meta: {
      versionId: '1',
      lastUpdated: '2024-01-15T10:30:00Z',
    },
    identifier: [
      {
        system: 'http://hospital.example.org/practitioners',
        value: 'NPI12345',
      },
      {
        system: 'http://hl7.org/fhir/sid/us-npi',
        value: '1234567890',
      },
    ],
    active: true,
    name: [
      {
        use: 'official',
        family: 'Johnson',
        given: ['Sarah', 'Elizabeth'],
        prefix: ['Dr.'],
        suffix: ['MD', 'PhD'],
      },
    ],
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'work',
      },
      {
        system: 'email',
        value: 'dr.johnson@hospital.example.org',
        use: 'work',
      },
    ],
    address: [
      {
        use: 'work',
        line: ['123 Medical Center Dr'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
      },
    ],
    gender: 'female',
    birthDate: '1975-03-20',
    qualification: [
      {
        identifier: [{ value: 'MD-12345' }],
        code: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
              code: 'MD',
              display: 'Doctor of Medicine',
            },
          ],
        },
        period: {
          start: '2005-06-01',
        },
        issuer: {
          display: 'State Medical Board',
        },
      },
    ],
    communication: [
      {
        coding: [
          {
            system: 'urn:ietf:bcp:47',
            code: 'en',
            display: 'English',
          },
        ],
      },
      {
        coding: [
          {
            system: 'urn:ietf:bcp:47',
            code: 'es',
            display: 'Spanish',
          },
        ],
      },
    ],
  } as IPractitioner,
  withMultipleQualifications: {
    resourceType: 'Practitioner',
    id: 'multi-qual',
    name: [{ family: 'Williams', given: ['Robert'] }],
    qualification: [
      {
        code: {
          coding: [{ code: 'MD', display: 'Doctor of Medicine' }],
        },
      },
      {
        code: {
          coding: [{ code: 'CARDIOLOGY', display: 'Cardiology Board Certification' }],
        },
      },
      {
        code: {
          coding: [{ code: 'BLS', display: 'Basic Life Support' }],
        },
      },
    ],
  } as IPractitioner,
  nurse: {
    resourceType: 'Practitioner',
    id: 'nurse-example',
    active: true,
    name: [
      {
        family: 'Davis',
        given: ['Emily'],
        prefix: ['RN'],
      },
    ],
    gender: 'female',
    qualification: [
      {
        code: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
              code: 'RN',
              display: 'Registered Nurse',
            },
          ],
        },
      },
    ],
  } as IPractitioner,
};

describe('Practitioner', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const practitioner = new Practitioner({});
        expect(practitioner).toBeInstanceOf(Practitioner);
        expect(practitioner.resourceType).toBe('Practitioner');
      });

      it('should create simple practitioner', () => {
        const practitioner = new Practitioner(practitioners.simple);
        expect(practitioner.id).toBe('example');
        expect(practitioner.active).toBe(true);
        expect(practitioner.gender).toBe('male');
        expect(practitioner.name?.[0].family).toBe('Smith');
        expect(practitioner.name?.[0].prefix).toContain('Dr.');
      });

      it('should create complete practitioner', () => {
        const practitioner = new Practitioner(practitioners.complete);
        expect(practitioner.identifier).toHaveLength(2);
        expect(practitioner.telecom).toHaveLength(2);
        expect(practitioner.address).toHaveLength(1);
        expect(practitioner.qualification).toHaveLength(1);
        expect(practitioner.communication).toHaveLength(2);
        expect(practitioner.birthDate).toBe('1975-03-20');
      });

      it('should create practitioner with multiple qualifications', () => {
        const practitioner = new Practitioner(practitioners.withMultipleQualifications);
        expect(practitioner.qualification).toHaveLength(3);
        expect(practitioner.qualification?.[0].code?.coding?.[0].code).toBe('MD');
      });

      it('should create nurse practitioner', () => {
        const practitioner = new Practitioner(practitioners.nurse);
        expect(practitioner.qualification?.[0].code?.coding?.[0].code).toBe('RN');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const practitioner = new Practitioner(practitioners.complete);
        const json = practitioner.toJSON();

        expect(json.resourceType).toBe('Practitioner');
        expect(json.id).toBe('complete-practitioner');
        expect(json.name?.[0].family).toBe('Johnson');
      });

      it('should omit undefined properties in JSON', () => {
        const practitioner = new Practitioner(practitioners.simple);
        const json = practitioner.toJSON();

        expect(json.resourceType).toBeDefined();
        expect(json.name).toBeDefined();
        expect(json).not.toHaveProperty('qualification');
        expect(json).not.toHaveProperty('communication');
        expect(json).not.toHaveProperty('address');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Practitioner(practitioners.complete);
        expectSerializationRoundtrip(original, Practitioner);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IPractitioner = {
          resourceType: 'Practitioner',
          id: 'test',
          active: true,
        };
        const practitioner = Practitioner.fromJSON(json);

        expect(practitioner).toBeInstanceOf(Practitioner);
        expect(practitioner.id).toBe('test');
        expect(practitioner.active).toBe(true);
      });

      it('should create identical instance from JSON', () => {
        const original = new Practitioner(practitioners.complete);
        const json = original.toJSON();
        const restored = Practitioner.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Practitioner(practitioners.simple);
        const updated = original.with({ active: false });

        expect(updated).not.toBe(original);
        expect(updated.active).toBe(false);
        expect(original.active).toBe(true);
      });

      it('should apply transform function correctly', () => {
        const practitioner = new Practitioner(practitioners.simple);
        const transformed = practitioner.applyTransform((data) => ({
          active: !data.active,
        }));

        expect(transformed.active).toBe(false);
        expect(practitioner.active).toBe(true);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Practitioner(practitioners.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned name', () => {
        const original = new Practitioner(practitioners.complete);
        const cloned = original.clone();

        if (cloned.name && cloned.name[0]) {
          cloned.name[0].family = 'Modified';
        }

        expect(original.name?.[0].family).toBe('Johnson');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const practitioner = new Practitioner(practitioners.simple);
        const str = practitioner.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Practitioner');
        expect(str).toContain('example');
      });
    });

    describe('Resource Properties', () => {
      it('should handle meta property', () => {
        const practitioner = new Practitioner({
          resourceType: 'Practitioner',
          meta: {
            versionId: '2',
            profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'],
          },
        });

        expect(practitioner.meta?.versionId).toBe('2');
      });

      it('should handle language', () => {
        const practitioner = new Practitioner({
          resourceType: 'Practitioner',
          language: 'en-US',
        });

        expect(practitioner.language).toBe('en-US');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const practitioner = new PractitionerBuilder().build();
        expect(practitioner).toBeInstanceOf(Practitioner);
        expect(practitioner.resourceType).toBe('Practitioner');
      });

      it('should build with id', () => {
        const practitioner = new PractitionerBuilder()
          .setId('123')
          .build();

        expect(practitioner.id).toBe('123');
      });

      it('should build with active status', () => {
        const practitioner = new PractitionerBuilder()
          .setActive(true)
          .build();

        expect(practitioner.active).toBe(true);
      });

      it('should build with gender', () => {
        const practitioner = new PractitionerBuilder()
          .setGender('female')
          .build();

        expect(practitioner.gender).toBe('female');
      });

      it('should build with birthDate', () => {
        const practitioner = new PractitionerBuilder()
          .setBirthDate('1980-05-15')
          .build();

        expect(practitioner.birthDate).toBe('1980-05-15');
      });
    });

    describe('Array Properties', () => {
      it('should add identifiers', () => {
        const practitioner = new PractitionerBuilder()
          .addIdentifier({ system: 'http://example.org/npi', value: '1234567890' })
          .addIdentifier({ system: 'http://example.org/local', value: 'PRACT001' })
          .build();

        expect(practitioner.identifier).toHaveLength(2);
      });

      it('should add names', () => {
        const practitioner = new PractitionerBuilder()
          .addName({ family: 'Doe', given: ['John'], prefix: ['Dr.'] })
          .build();

        expect(practitioner.name).toHaveLength(1);
        expect(practitioner.name?.[0].prefix).toContain('Dr.');
      });

      it('should add telecom', () => {
        const practitioner = new PractitionerBuilder()
          .addTelecom({ system: 'phone', value: '555-1234', use: 'work' })
          .addTelecom({ system: 'email', value: 'doc@example.com' })
          .build();

        expect(practitioner.telecom).toHaveLength(2);
      });

      it('should add addresses', () => {
        const practitioner = new PractitionerBuilder()
          .addAddress({ city: 'Springfield', state: 'IL' })
          .build();

        expect(practitioner.address).toHaveLength(1);
      });

      it('should add photos', () => {
        const practitioner = new PractitionerBuilder()
          .addPhoto({ contentType: 'image/jpeg', url: 'http://example.org/photo.jpg' })
          .build();

        expect(practitioner.photo).toHaveLength(1);
      });

      it('should add qualifications', () => {
        const practitioner = new PractitionerBuilder()
          .addQualification({
            code: {
              coding: [{ code: 'MD', display: 'Doctor of Medicine' }],
            },
          })
          .addQualification({
            code: {
              coding: [{ code: 'BOARD-CERT', display: 'Board Certified' }],
            },
          })
          .build();

        expect(practitioner.qualification).toHaveLength(2);
      });

      it('should add communications', () => {
        const practitioner = new PractitionerBuilder()
          .addCommunication({
            coding: [{ code: 'en', display: 'English' }],
          })
          .addCommunication({
            coding: [{ code: 'es', display: 'Spanish' }],
          })
          .build();

        expect(practitioner.communication).toHaveLength(2);
      });
    });

    describe('DomainResource Builder Methods', () => {
      it('should set meta', () => {
        const practitioner = new PractitionerBuilder()
          .setMeta({ versionId: '1' })
          .build();

        expect(practitioner.meta?.versionId).toBe('1');
      });

      it('should add extensions', () => {
        const practitioner = new PractitionerBuilder()
          .addExtension({
            url: 'http://example.org/ext',
            valueString: 'test',
          })
          .build();

        expect(practitioner.extension).toHaveLength(1);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new PractitionerBuilder()
          .setId('123')
          .setActive(true)
          .setGender('male')
          .setBirthDate('1980-01-01');

        expect(builder).toBeInstanceOf(PractitionerBuilder);
      });

      it('should allow overwriting properties', () => {
        const practitioner = new PractitionerBuilder()
          .setGender('male')
          .setGender('female')
          .build();

        expect(practitioner.gender).toBe('female');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const practitioner = new PractitionerBuilder()
          .setId('123')
          .setActive(true)
          .addName({ family: 'Doe', prefix: ['Dr.'] })
          .setGender('male')
          .build();

        const json = practitioner.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new PractitionerBuilder()
          .setId('123')
          .addName({ family: 'Doe' })
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
    it('should work in physician registration scenario', () => {
      const physician = new PractitionerBuilder()
        .setId('physician-001')
        .setActive(true)
        .addIdentifier({
          system: 'http://hl7.org/fhir/sid/us-npi',
          value: '1234567890',
        })
        .addName({
          use: 'official',
          family: 'Garcia',
          given: ['Maria', 'Elena'],
          prefix: ['Dr.'],
          suffix: ['MD', 'FACP'],
        })
        .setGender('female')
        .setBirthDate('1970-08-15')
        .addTelecom({
          system: 'phone',
          value: '+1-555-123-4567',
          use: 'work',
        })
        .addQualification({
          code: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
                code: 'MD',
                display: 'Doctor of Medicine',
              },
            ],
          },
          period: { start: '1998-06-01' },
        })
        .build();

      expect(physician.identifier?.[0].value).toBe('1234567890');
      expect(physician.name?.[0].suffix).toContain('FACP');
      expect(physician.qualification?.[0].code?.coding?.[0].code).toBe('MD');

      const json = physician.toJSON();
      const restored = Practitioner.fromJSON(json);

      expect(restored.birthDate).toBe('1970-08-15');
    });

    it('should work in nurse registration scenario', () => {
      const nurse = new PractitionerBuilder()
        .setId('nurse-001')
        .setActive(true)
        .addName({
          family: 'Thompson',
          given: ['Jessica'],
          prefix: ['RN'],
        })
        .setGender('female')
        .addQualification({
          code: {
            coding: [{ code: 'RN', display: 'Registered Nurse' }],
          },
        })
        .addQualification({
          code: {
            coding: [{ code: 'BSN', display: 'Bachelor of Science in Nursing' }],
          },
        })
        .build();

      expect(nurse.qualification).toHaveLength(2);
    });

    it('should work in multilingual practitioner scenario', () => {
      const practitioner = new PractitionerBuilder()
        .setId('multilingual-001')
        .addName({ family: 'Lee' })
        .addCommunication({
          coding: [{ code: 'en', display: 'English' }],
        })
        .addCommunication({
          coding: [{ code: 'zh', display: 'Chinese' }],
        })
        .addCommunication({
          coding: [{ code: 'ko', display: 'Korean' }],
        })
        .build();

      expect(practitioner.communication).toHaveLength(3);
    });

    it('should handle practitioner update', () => {
      const original = new Practitioner(practitioners.simple);

      const updated = original.with({
        telecom: [
          { system: 'phone', value: '555-9999', use: 'work' },
        ],
      });

      expect(updated.telecom?.[0].value).toBe('555-9999');
      expect(original.telecom).toBeUndefined();
    });

    it('should work in specialist with multiple credentials scenario', () => {
      const specialist = new PractitionerBuilder()
        .setId('specialist-001')
        .addName({
          family: 'Wilson',
          given: ['Robert'],
          prefix: ['Dr.'],
          suffix: ['MD', 'PhD', 'FACS'],
        })
        .setGender('male')
        .addQualification({
          code: { coding: [{ code: 'MD' }] },
        })
        .addQualification({
          code: { coding: [{ code: 'PhD' }] },
        })
        .addQualification({
          code: { coding: [{ code: 'SURGERY-BOARD' }] },
        })
        .addQualification({
          code: { coding: [{ code: 'FACS' }] },
        })
        .build();

      expect(specialist.qualification).toHaveLength(4);
      expect(specialist.name?.[0].suffix).toContain('FACS');
    });
  });
});
