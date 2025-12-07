/**
 * Patient Resource Model and Builder Tests
 *
 * Tests for the Patient resource class and its builder.
 * Patient represents demographics and other administrative information
 * about an individual or animal receiving care.
 */

import { describe, it, expect } from 'vitest';
import { Patient, PatientBuilder } from '../../../src/index.js';
import type { IPatient } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const patients = {
  simple: {
    resourceType: 'Patient',
    id: 'example',
    active: true,
    name: [
      {
        use: 'official',
        family: 'Doe',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '1970-01-01',
  } as IPatient,
  complete: {
    resourceType: 'Patient',
    id: 'complete-patient',
    meta: {
      versionId: '1',
      lastUpdated: '2024-01-15T10:30:00Z',
    },
    identifier: [
      {
        system: 'http://hospital.example.org/patients',
        value: 'MRN12345',
      },
    ],
    active: true,
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['Jane', 'Marie'],
        prefix: ['Mrs.'],
      },
      {
        use: 'maiden',
        family: 'Johnson',
      },
    ],
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'home',
      },
      {
        system: 'email',
        value: 'jane.smith@example.com',
        use: 'work',
      },
    ],
    gender: 'female',
    birthDate: '1985-06-15',
    address: [
      {
        use: 'home',
        type: 'physical',
        line: ['123 Main Street', 'Apt 4B'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
        country: 'USA',
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
          code: 'M',
          display: 'Married',
        },
      ],
    },
    managingOrganization: {
      reference: 'Organization/hospital-1',
      display: 'Springfield General Hospital',
    },
  } as IPatient,
  deceased: {
    resourceType: 'Patient',
    id: 'deceased-patient',
    name: [{ family: 'Wilson' }],
    gender: 'male',
    deceasedDateTime: '2023-12-01T14:30:00Z',
  } as IPatient,
  deceasedBoolean: {
    resourceType: 'Patient',
    id: 'deceased-patient-bool',
    name: [{ family: 'Brown' }],
    gender: 'female',
    deceasedBoolean: true,
  } as IPatient,
  multipleBirth: {
    resourceType: 'Patient',
    id: 'twin-patient',
    name: [{ family: 'Taylor', given: ['Alex'] }],
    gender: 'male',
    multipleBirthInteger: 2,
  } as IPatient,
  withContact: {
    resourceType: 'Patient',
    id: 'patient-with-contact',
    name: [{ family: 'Anderson' }],
    contact: [
      {
        relationship: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                code: 'N',
                display: 'Next-of-Kin',
              },
            ],
          },
        ],
        name: {
          family: 'Anderson',
          given: ['Sarah'],
        },
        telecom: [
          {
            system: 'phone',
            value: '+1-555-987-6543',
          },
        ],
      },
    ],
  } as IPatient,
  withCommunication: {
    resourceType: 'Patient',
    id: 'multilingual-patient',
    name: [{ family: 'Garcia' }],
    communication: [
      {
        language: {
          coding: [
            {
              system: 'urn:ietf:bcp:47',
              code: 'en',
              display: 'English',
            },
          ],
        },
        preferred: true,
      },
      {
        language: {
          coding: [
            {
              system: 'urn:ietf:bcp:47',
              code: 'es',
              display: 'Spanish',
            },
          ],
        },
      },
    ],
  } as IPatient,
  withLink: {
    resourceType: 'Patient',
    id: 'linked-patient',
    name: [{ family: 'Davis' }],
    link: [
      {
        other: {
          reference: 'Patient/old-patient-record',
        },
        type: 'replaces',
      },
    ],
  } as IPatient,
};

describe('Patient', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const patient = new Patient({});
        expect(patient).toBeInstanceOf(Patient);
        expect(patient.resourceType).toBe('Patient');
      });

      it('should create simple patient', () => {
        const patient = new Patient(patients.simple);
        expect(patient.id).toBe('example');
        expect(patient.active).toBe(true);
        expect(patient.gender).toBe('male');
        expect(patient.birthDate).toBe('1970-01-01');
        expect(patient.name?.[0].family).toBe('Doe');
      });

      it('should create complete patient', () => {
        const patient = new Patient(patients.complete);
        expect(patient.identifier).toHaveLength(1);
        expect(patient.name).toHaveLength(2);
        expect(patient.telecom).toHaveLength(2);
        expect(patient.address).toHaveLength(1);
        expect(patient.maritalStatus?.coding?.[0].code).toBe('M');
        expect(patient.managingOrganization?.reference).toBe('Organization/hospital-1');
      });

      it('should create deceased patient with DateTime', () => {
        const patient = new Patient(patients.deceased);
        expect(patient.deceasedDateTime).toBe('2023-12-01T14:30:00Z');
      });

      it('should create deceased patient with Boolean', () => {
        const patient = new Patient(patients.deceasedBoolean);
        expect(patient.deceasedBoolean).toBe(true);
      });

      it('should create multiple birth patient', () => {
        const patient = new Patient(patients.multipleBirth);
        expect(patient.multipleBirthInteger).toBe(2);
      });

      it('should create patient with contact', () => {
        const patient = new Patient(patients.withContact);
        expect(patient.contact).toHaveLength(1);
        expect(patient.contact?.[0].name?.family).toBe('Anderson');
      });

      it('should create patient with communication preferences', () => {
        const patient = new Patient(patients.withCommunication);
        expect(patient.communication).toHaveLength(2);
        expect(patient.communication?.[0].preferred).toBe(true);
      });

      it('should create patient with link', () => {
        const patient = new Patient(patients.withLink);
        expect(patient.link).toHaveLength(1);
        expect(patient.link?.[0].type).toBe('replaces');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const patient = new Patient(patients.complete);
        const json = patient.toJSON();

        expect(json.resourceType).toBe('Patient');
        expect(json.id).toBe('complete-patient');
        expect(json.name?.[0].family).toBe('Smith');
      });

      it('should omit undefined properties in JSON', () => {
        const patient = new Patient(patients.simple);
        const json = patient.toJSON();

        expect(json.resourceType).toBeDefined();
        expect(json.name).toBeDefined();
        expect(json).not.toHaveProperty('identifier');
        expect(json).not.toHaveProperty('contact');
        expect(json).not.toHaveProperty('communication');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Patient(patients.complete);
        expectSerializationRoundtrip(original, Patient);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IPatient = {
          resourceType: 'Patient',
          id: 'test',
          active: true,
        };
        const patient = Patient.fromJSON(json);

        expect(patient).toBeInstanceOf(Patient);
        expect(patient.id).toBe('test');
        expect(patient.active).toBe(true);
      });

      it('should create identical instance from JSON', () => {
        const original = new Patient(patients.complete);
        const json = original.toJSON();
        const restored = Patient.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Patient(patients.simple);
        const updated = original.with({ active: false });

        expect(updated).not.toBe(original);
        expect(updated.active).toBe(false);
        expect(original.active).toBe(true);
      });

      it('should apply transform function correctly', () => {
        const patient = new Patient(patients.simple);
        const transformed = patient.applyTransform((data) => ({
          active: !data.active,
        }));

        expect(transformed.active).toBe(false);
        expect(patient.active).toBe(true);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Patient(patients.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned name', () => {
        const original = new Patient(patients.complete);
        const cloned = original.clone();

        if (cloned.name && cloned.name[0]) {
          cloned.name[0].family = 'Modified';
        }

        expect(original.name?.[0].family).toBe('Smith');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const patient = new Patient(patients.simple);
        const str = patient.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Patient');
        expect(str).toContain('example');
      });
    });

    describe('DomainResource Properties', () => {
      it('should handle text property', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">John Doe</div>',
          },
        });

        expect(patient.text?.status).toBe('generated');
      });

      it('should handle contained resources', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          contained: [
            {
              resourceType: 'Organization',
              id: 'org1',
              name: 'Test Org',
            },
          ],
        });

        expect(patient.contained).toHaveLength(1);
      });

      it('should handle modifierExtension', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          modifierExtension: [
            { url: 'http://example.org/modifier', valueBoolean: true },
          ],
        });

        expect(patient.modifierExtension).toHaveLength(1);
      });
    });

    describe('Resource Properties', () => {
      it('should handle meta property', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          meta: {
            versionId: '2',
            profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'],
          },
        });

        expect(patient.meta?.versionId).toBe('2');
        expect(patient.meta?.profile).toHaveLength(1);
      });

      it('should handle implicitRules', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          implicitRules: 'http://example.org/rules',
        });

        expect(patient.implicitRules).toBe('http://example.org/rules');
      });

      it('should handle language', () => {
        const patient = new Patient({
          resourceType: 'Patient',
          language: 'en-US',
        });

        expect(patient.language).toBe('en-US');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const patient = new PatientBuilder().build();
        expect(patient).toBeInstanceOf(Patient);
        expect(patient.resourceType).toBe('Patient');
      });

      it('should build with id', () => {
        const patient = new PatientBuilder()
          .setId('123')
          .build();

        expect(patient.id).toBe('123');
      });

      it('should build with active status', () => {
        const patient = new PatientBuilder()
          .setActive(true)
          .build();

        expect(patient.active).toBe(true);
      });

      it('should build with gender', () => {
        const patient = new PatientBuilder()
          .setGender('female')
          .build();

        expect(patient.gender).toBe('female');
      });

      it('should build with birthDate', () => {
        const patient = new PatientBuilder()
          .setBirthDate('1990-05-20')
          .build();

        expect(patient.birthDate).toBe('1990-05-20');
      });

      it('should build with maritalStatus', () => {
        const patient = new PatientBuilder()
          .setMaritalStatus({
            coding: [{ code: 'S', display: 'Single' }],
          })
          .build();

        expect(patient.maritalStatus?.coding?.[0].code).toBe('S');
      });

      it('should build with managingOrganization', () => {
        const patient = new PatientBuilder()
          .setManagingOrganization({ reference: 'Organization/1' })
          .build();

        expect(patient.managingOrganization?.reference).toBe('Organization/1');
      });
    });

    describe('Choice Types', () => {
      it('should set deceasedBoolean', () => {
        const patient = new PatientBuilder()
          .setDeceased('Boolean', true)
          .build();

        expect(patient.deceasedBoolean).toBe(true);
        expect(patient.deceasedDateTime).toBeUndefined();
      });

      it('should set deceasedDateTime', () => {
        const patient = new PatientBuilder()
          .setDeceased('DateTime', '2023-01-01')
          .build();

        expect(patient.deceasedDateTime).toBe('2023-01-01');
        expect(patient.deceasedBoolean).toBeUndefined();
      });

      it('should set multipleBirthBoolean', () => {
        const patient = new PatientBuilder()
          .setMultipleBirth('Boolean', true)
          .build();

        expect(patient.multipleBirthBoolean).toBe(true);
        expect(patient.multipleBirthInteger).toBeUndefined();
      });

      it('should set multipleBirthInteger', () => {
        const patient = new PatientBuilder()
          .setMultipleBirth('Integer', 3)
          .build();

        expect(patient.multipleBirthInteger).toBe(3);
        expect(patient.multipleBirthBoolean).toBeUndefined();
      });
    });

    describe('Array Properties', () => {
      it('should add identifiers', () => {
        const patient = new PatientBuilder()
          .addIdentifier({ system: 'http://example.org', value: '123' })
          .addIdentifier({ system: 'http://example.org', value: '456' })
          .build();

        expect(patient.identifier).toHaveLength(2);
      });

      it('should add names', () => {
        const patient = new PatientBuilder()
          .addName({ family: 'Doe', given: ['John'] })
          .addName({ use: 'nickname', given: ['Johnny'] })
          .build();

        expect(patient.name).toHaveLength(2);
      });

      it('should add telecom', () => {
        const patient = new PatientBuilder()
          .addTelecom({ system: 'phone', value: '555-1234' })
          .addTelecom({ system: 'email', value: 'test@example.com' })
          .build();

        expect(patient.telecom).toHaveLength(2);
      });

      it('should add addresses', () => {
        const patient = new PatientBuilder()
          .addAddress({ city: 'Springfield' })
          .build();

        expect(patient.address).toHaveLength(1);
      });

      it('should add photos', () => {
        const patient = new PatientBuilder()
          .addPhoto({ contentType: 'image/jpeg', url: 'http://example.org/photo.jpg' })
          .build();

        expect(patient.photo).toHaveLength(1);
      });

      it('should add contacts', () => {
        const patient = new PatientBuilder()
          .addContact({ name: { family: 'Smith' } })
          .build();

        expect(patient.contact).toHaveLength(1);
      });

      it('should add communications', () => {
        const patient = new PatientBuilder()
          .addCommunication({
            language: { coding: [{ code: 'en' }] },
            preferred: true,
          })
          .build();

        expect(patient.communication).toHaveLength(1);
      });

      it('should add general practitioners', () => {
        const patient = new PatientBuilder()
          .addGeneralPractitioner({ reference: 'Practitioner/1' })
          .build();

        expect(patient.generalPractitioner).toHaveLength(1);
      });

      it('should add links', () => {
        const patient = new PatientBuilder()
          .addLink({ other: { reference: 'Patient/old' }, type: 'replaces' })
          .build();

        expect(patient.link).toHaveLength(1);
      });
    });

    describe('DomainResource Builder Methods', () => {
      it('should set meta', () => {
        const patient = new PatientBuilder()
          .setMeta({ versionId: '1' })
          .build();

        expect(patient.meta?.versionId).toBe('1');
      });

      it('should set text', () => {
        const patient = new PatientBuilder()
          .setText({
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">Test</div>',
          })
          .build();

        expect(patient.text?.status).toBe('generated');
      });

      it('should add contained resources', () => {
        const patient = new PatientBuilder()
          .addContained({
            resourceType: 'Organization',
            id: 'org1',
          })
          .build();

        expect(patient.contained).toHaveLength(1);
      });

      it('should add extensions', () => {
        const patient = new PatientBuilder()
          .addExtension({
            url: 'http://example.org/ext',
            valueString: 'test',
          })
          .build();

        expect(patient.extension).toHaveLength(1);
      });

      it('should add modifier extensions', () => {
        const patient = new PatientBuilder()
          .addModifierExtension({
            url: 'http://example.org/modifier',
            valueBoolean: true,
          })
          .build();

        expect(patient.modifierExtension).toHaveLength(1);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new PatientBuilder()
          .setId('123')
          .setActive(true)
          .setGender('male')
          .setBirthDate('1990-01-01');

        expect(builder).toBeInstanceOf(PatientBuilder);
      });

      it('should allow overwriting properties', () => {
        const patient = new PatientBuilder()
          .setGender('male')
          .setGender('female')
          .build();

        expect(patient.gender).toBe('female');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const patient = new PatientBuilder()
          .setId('123')
          .setActive(true)
          .addName({ family: 'Doe' })
          .setGender('male')
          .setBirthDate('1990-01-01')
          .build();

        const json = patient.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new PatientBuilder()
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
    it('should work in patient registration scenario', () => {
      const patient = new PatientBuilder()
        .setId('new-patient-001')
        .setActive(true)
        .addIdentifier({
          system: 'http://hospital.example.org/mrn',
          value: 'MRN123456',
        })
        .addName({
          use: 'official',
          family: 'Johnson',
          given: ['Robert', 'James'],
          prefix: ['Mr.'],
        })
        .setGender('male')
        .setBirthDate('1985-03-15')
        .addTelecom({
          system: 'phone',
          value: '+1-555-123-4567',
          use: 'mobile',
        })
        .addTelecom({
          system: 'email',
          value: 'robert.johnson@example.com',
        })
        .addAddress({
          use: 'home',
          line: ['456 Oak Avenue'],
          city: 'Riverside',
          state: 'CA',
          postalCode: '92501',
        })
        .build();

      expect(patient.identifier?.[0].value).toBe('MRN123456');
      expect(patient.name?.[0].given).toContain('Robert');
      expect(patient.telecom).toHaveLength(2);

      const json = patient.toJSON();
      const restored = Patient.fromJSON(json);

      expect(restored.birthDate).toBe('1985-03-15');
    });

    it('should work in deceased patient scenario', () => {
      const patient = new PatientBuilder()
        .setId('deceased-001')
        .addName({ family: 'Smith' })
        .setGender('female')
        .setBirthDate('1940-08-20')
        .setDeceased('DateTime', '2024-01-10T08:30:00Z')
        .build();

      expect(patient.deceasedDateTime).toBe('2024-01-10T08:30:00Z');
      expect(patient.deceasedBoolean).toBeUndefined();
    });

    it('should work in pediatric twin scenario', () => {
      const twin1 = new PatientBuilder()
        .setId('twin-001')
        .addName({ family: 'Williams', given: ['Emma'] })
        .setGender('female')
        .setBirthDate('2023-06-15')
        .setMultipleBirth('Integer', 1)
        .build();

      const twin2 = new PatientBuilder()
        .setId('twin-002')
        .addName({ family: 'Williams', given: ['Olivia'] })
        .setGender('female')
        .setBirthDate('2023-06-15')
        .setMultipleBirth('Integer', 2)
        .addLink({
          other: { reference: 'Patient/twin-001' },
          type: 'seealso',
        })
        .build();

      expect(twin1.multipleBirthInteger).toBe(1);
      expect(twin2.multipleBirthInteger).toBe(2);
      expect(twin2.link?.[0].other?.reference).toBe('Patient/twin-001');
    });

    it('should handle patient update', () => {
      const original = new Patient(patients.simple);

      const updated = original.with({
        telecom: [
          { system: 'phone', value: '555-9999' },
        ],
      });

      expect(updated.telecom?.[0].value).toBe('555-9999');
      expect(original.telecom).toBeUndefined();
    });

    it('should work in patient with emergency contact scenario', () => {
      const patient = new PatientBuilder()
        .setId('emergency-contact-patient')
        .addName({ family: 'Martinez' })
        .addContact({
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'C',
                  display: 'Emergency Contact',
                },
              ],
            },
          ],
          name: { family: 'Martinez', given: ['Carlos'] },
          telecom: [
            { system: 'phone', value: '+1-555-EMERGENCY' },
          ],
        })
        .build();

      expect(patient.contact?.[0].relationship?.[0].coding?.[0].code).toBe('C');
    });

    it('should work in multilingual patient scenario', () => {
      const patient = new PatientBuilder()
        .setId('multilingual-patient')
        .addName({ family: 'Chen' })
        .addCommunication({
          language: {
            coding: [{ system: 'urn:ietf:bcp:47', code: 'zh' }],
            text: 'Chinese',
          },
          preferred: true,
        })
        .addCommunication({
          language: {
            coding: [{ system: 'urn:ietf:bcp:47', code: 'en' }],
            text: 'English',
          },
        })
        .build();

      expect(patient.communication).toHaveLength(2);
      expect(patient.communication?.[0].preferred).toBe(true);
    });

    it('should work in patient merge scenario', () => {
      const mergedPatient = new PatientBuilder()
        .setId('merged-patient')
        .setActive(true)
        .addName({ family: 'Thompson' })
        .addLink({
          other: { reference: 'Patient/old-record-1' },
          type: 'replaces',
        })
        .addLink({
          other: { reference: 'Patient/old-record-2' },
          type: 'replaces',
        })
        .build();

      expect(mergedPatient.link).toHaveLength(2);
      expect(mergedPatient.link?.[0].type).toBe('replaces');
    });
  });
});
