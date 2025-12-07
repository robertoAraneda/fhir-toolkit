/**
 * Patient Resource Model and Builder Tests for FHIR R4B
 *
 * Tests for the Patient resource class and its builder.
 * Patient represents demographics and other administrative information
 * about an individual or animal receiving care.
 */

import { describe, it, expect } from 'vitest';
import { Patient, PatientBuilder } from '../../../src/index.js';
import type { IPatient } from '@fhir-toolkit/r4b-types';
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
};

describe('Patient (R4B)', () => {
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
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Patient(patients.simple);
        const updated = original.with({ active: false });

        expect(updated).not.toBe(original);
        expect(updated.active).toBe(false);
        expect(original.active).toBe(true);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Patient(patients.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
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
      expect(patient.telecom).toHaveLength(1);

      const json = patient.toJSON();
      const restored = Patient.fromJSON(json);

      expect(restored.birthDate).toBe('1985-03-15');
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
  });
});
