import { describe, it, expect } from 'vitest';
import { RelatedPerson } from '../../../src/models/resources/RelatedPerson.js';
import { RelatedPersonBuilder } from '../../../src/builders/resources/RelatedPersonBuilder.js';
import type { IRelatedPerson } from '@fhir-toolkit/r4-types';

describe('RelatedPerson', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(relatedPerson: RelatedPerson): void {
    const json = relatedPerson.toJSON();
    const deserialized = RelatedPerson.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(relatedPerson: RelatedPerson): void {
    const cloned = relatedPerson.clone();
    expect(cloned).not.toBe(relatedPerson);
    expect(cloned.toJSON()).toEqual(relatedPerson.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: IRelatedPerson): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create RelatedPerson with minimal required properties', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
      });

      expect(relatedPerson.resourceType).toBe('RelatedPerson');
      expect(relatedPerson.patient.reference).toBe('Patient/123');
    });

    it('should create RelatedPerson with all properties', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        id: 'rel-1',
        identifier: [{ system: 'http://hospital.org', value: 'REL-001' }],
        active: true,
        patient: { reference: 'Patient/123' },
        relationship: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
                code: 'MTH',
                display: 'Mother',
              },
            ],
          },
        ],
        name: [
          {
            use: 'official',
            family: 'Doe',
            given: ['Jane'],
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: '555-1234',
            use: 'home',
          },
        ],
        gender: 'female',
        birthDate: '1980-05-15',
        address: [
          {
            use: 'home',
            line: ['123 Main St'],
            city: 'Springfield',
            state: 'IL',
            postalCode: '62701',
          },
        ],
        period: { start: '2020-01-01' },
        communication: [
          {
            language: {
              coding: [{ code: 'en', display: 'English' }],
            },
            preferred: true,
          },
        ],
      });

      expect(relatedPerson.resourceType).toBe('RelatedPerson');
      expect(relatedPerson.id).toBe('rel-1');
      expect(relatedPerson.active).toBe(true);
      expect(relatedPerson.gender).toBe('female');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should handle empty constructor', () => {
      const relatedPerson = new RelatedPerson();
      expect(relatedPerson.resourceType).toBe('RelatedPerson');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        active: true,
      });

      const json = relatedPerson.toJSON();
      expect(json.resourceType).toBe('RelatedPerson');
      expect(json.active).toBe(true);
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        id: 'rel-1',
        meta: { versionId: '1' },
        patient: { reference: 'Patient/123' },
        name: [{ family: 'Smith' }],
      });

      const json = relatedPerson.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.name?.[0]?.family).toBe('Smith');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create RelatedPerson from JSON', () => {
      const json: IRelatedPerson = {
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        name: [{ family: 'Johnson', given: ['Bob'] }],
      };

      const relatedPerson = RelatedPerson.fromJSON(json);
      expect(relatedPerson.patient.reference).toBe('Patient/123');
      expect(relatedPerson.name?.[0]?.family).toBe('Johnson');
    });

    it('should handle complex JSON structure', () => {
      const json: IRelatedPerson = {
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        relationship: [
          {
            coding: [{ code: 'CHILD', display: 'Child' }],
          },
        ],
        communication: [
          {
            language: { coding: [{ code: 'es', display: 'Spanish' }] },
            preferred: true,
          },
        ],
      };

      const relatedPerson = RelatedPerson.fromJSON(json);
      expect(relatedPerson.relationship?.[0]?.coding?.[0]?.code).toBe('CHILD');
      expect(relatedPerson.communication?.[0]?.preferred).toBe(true);
      expectSerializationRoundtrip(relatedPerson);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        active: true,
      });

      const modified = original.with({ active: false });

      expect(original.active).toBe(true);
      expect(modified.active).toBe(false);
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        gender: 'female',
      });

      const transformed = relatedPerson.applyTransform((data) => ({
        ...data,
        active: false,
        period: { end: '2024-01-15' },
      }));

      expect(transformed.active).toBe(false);
      expect(transformed.period?.end).toBe('2024-01-15');
      expect(relatedPerson.active).toBeUndefined();
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
        name: [{ family: 'Williams', given: ['Sarah'] }],
        telecom: [{ system: 'phone', value: '555-9876' }],
      });

      expectDeepClone(relatedPerson);
    });

    it('should clone with all properties', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        id: 'rel-1',
        patient: { reference: 'Patient/123' },
        relationship: [{ coding: [{ code: 'FTH' }] }],
      });

      const cloned = relatedPerson.clone();
      expect(cloned.toJSON()).toEqual(relatedPerson.toJSON());
      expect(cloned.relationship?.[0]?.coding?.[0]?.code).toBe('FTH');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        patient: { reference: 'Patient/123' },
      });

      expect(relatedPerson.toString()).toBe('RelatedPerson');
    });

    it('should return string representation with id', () => {
      const relatedPerson = new RelatedPerson({
        resourceType: 'RelatedPerson',
        id: 'rel-123',
        patient: { reference: 'Patient/123' },
      });

      expect(relatedPerson.toString()).toBe('RelatedPerson, id=rel-123');
    });
  });

  // ============================================================
  // Gender Tests
  // ============================================================

  describe('Gender', () => {
    const validGenders = ['male', 'female', 'other', 'unknown'];

    validGenders.forEach((gender) => {
      it(`should accept gender: ${gender}`, () => {
        const relatedPerson = new RelatedPerson({
          resourceType: 'RelatedPerson',
          patient: { reference: 'Patient/123' },
          gender: gender as any,
        });

        expect(relatedPerson.gender).toBe(gender);
      });
    });
  });

  // ============================================================
  // RelatedPersonBuilder Tests
  // ============================================================

  describe('RelatedPersonBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build RelatedPerson with required fields', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .build();

        expect(relatedPerson.patient.reference).toBe('Patient/123');
      });

      it('should build RelatedPerson with all scalar fields', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setId('rel-1')
          .setActive(true)
          .setPatient({ reference: 'Patient/123' })
          .setGender('female')
          .setBirthDate('1980-05-15')
          .setPeriod({ start: '2020-01-01', end: '2024-12-31' })
          .build();

        expect(relatedPerson.id).toBe('rel-1');
        expect(relatedPerson.active).toBe(true);
        expect(relatedPerson.gender).toBe('female');
        expect(relatedPerson.birthDate).toBe('1980-05-15');
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'REL-001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'REL-002' })
          .build();

        expect(relatedPerson.identifier).toHaveLength(2);
      });

      it('should add relationships', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addRelationship({ coding: [{ code: 'MTH', display: 'Mother' }] })
          .addRelationship({ coding: [{ code: 'GUARD', display: 'Guardian' }] })
          .build();

        expect(relatedPerson.relationship).toHaveLength(2);
      });

      it('should add names', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addName({ use: 'official', family: 'Doe', given: ['Jane'] })
          .addName({ use: 'nickname', given: ['Jenny'] })
          .build();

        expect(relatedPerson.name).toHaveLength(2);
      });

      it('should add telecom', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addTelecom({ system: 'phone', value: '555-1234' })
          .addTelecom({ system: 'email', value: 'jane@example.com' })
          .build();

        expect(relatedPerson.telecom).toHaveLength(2);
      });

      it('should add addresses', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addAddress({ use: 'home', city: 'Springfield' })
          .addAddress({ use: 'work', city: 'Boston' })
          .build();

        expect(relatedPerson.address).toHaveLength(2);
      });

      it('should add photos', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addPhoto({ contentType: 'image/jpeg', url: 'http://example.org/photo1.jpg' })
          .build();

        expect(relatedPerson.photo).toHaveLength(1);
      });

      it('should add communication', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addCommunication({
            language: { coding: [{ code: 'en', display: 'English' }] },
            preferred: true,
          })
          .addCommunication({
            language: { coding: [{ code: 'es', display: 'Spanish' }] },
          })
          .build();

        expect(relatedPerson.communication).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const relatedPerson = new RelatedPersonBuilder()
          .setId('rel-chain')
          .setPatient({ reference: 'Patient/123' })
          .setActive(true)
          .addRelationship({ coding: [{ code: 'SPOUSE' }] })
          .addName({ family: 'Doe' })
          .addTelecom({ system: 'phone', value: '555-1234' })
          .build();

        expect(relatedPerson.id).toBe('rel-chain');
        expect(relatedPerson.relationship).toHaveLength(1);
        expect(relatedPerson.name).toHaveLength(1);
        expect(relatedPerson.telecom).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create mother as emergency contact and guardian', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setId('mother-guardian')
        .setActive(true)
        .setPatient({ reference: 'Patient/child-patient', display: 'Emma Johnson (Minor)' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'MTH',
              display: 'Mother',
            },
          ],
        })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'GUARD',
              display: 'Guardian',
            },
          ],
        })
        .addName({
          use: 'official',
          family: 'Johnson',
          given: ['Mary', 'Anne'],
        })
        .addTelecom({ system: 'phone', value: '555-HOME-123', use: 'home' })
        .addTelecom({ system: 'phone', value: '555-WORK-456', use: 'work' })
        .addTelecom({ system: 'phone', value: '555-CELL-789', use: 'mobile', rank: 1 })
        .addTelecom({ system: 'email', value: 'mary.johnson@example.com' })
        .setGender('female')
        .setBirthDate('1985-03-22')
        .addAddress({
          use: 'home',
          type: 'physical',
          line: ['456 Elm Street', 'Apt 2B'],
          city: 'Springfield',
          state: 'IL',
          postalCode: '62702',
          country: 'USA',
        })
        .addCommunication({
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
        })
        .build();

      expect(relatedPerson.active).toBe(true);
      expect(relatedPerson.relationship).toHaveLength(2);
      expect(relatedPerson.telecom).toHaveLength(4);
      expect(relatedPerson.name?.[0]?.given).toContain('Mary');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create spouse as healthcare proxy', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/123', display: 'John Doe' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'HUSB',
              display: 'Husband',
            },
          ],
        })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'HPOWATT',
              display: 'Healthcare Power of Attorney',
            },
          ],
        })
        .addName({ family: 'Doe', given: ['Robert'] })
        .setGender('male')
        .addTelecom({ system: 'phone', value: '555-SPOUSE' })
        .setPeriod({ start: '2010-06-15' })
        .build();

      expect(relatedPerson.relationship).toHaveLength(2);
      expect(relatedPerson.relationship?.[1]?.coding?.[0]?.code).toBe('HPOWATT');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create adult child as caregiver', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/elderly-parent', display: 'Margaret Smith (86 years)' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'DAUC',
              display: 'Daughter',
            },
          ],
        })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'CAREGIVER',
              display: 'Caregiver',
            },
          ],
        })
        .addName({ family: 'Williams', given: ['Susan'] })
        .setGender('female')
        .setBirthDate('1970-08-10')
        .addTelecom({ system: 'phone', value: '555-CARE-111', use: 'mobile' })
        .addAddress({ line: ['789 Oak Ave'], city: 'Springfield' })
        .build();

      expect(relatedPerson.relationship?.[1]?.coding?.[0]?.code).toBe('CAREGIVER');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create foster parent', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/foster-child', display: 'Alex (Foster Child)' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'FAMMEMB',
              display: 'Family Member',
            },
          ],
        })
        .addName({ family: 'Anderson', given: ['Patricia'] })
        .setGender('female')
        .addTelecom({ system: 'phone', value: '555-FOSTER' })
        .setPeriod({ start: '2022-01-15' })
        .build();

      expect(relatedPerson.period?.start).toBe('2022-01-15');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create interpreter for non-English speaking patient', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/123', display: 'Maria Garcia' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'SONC',
              display: 'Son',
            },
          ],
        })
        .addName({ family: 'Garcia', given: ['Carlos'] })
        .setGender('male')
        .addCommunication({
          language: {
            coding: [{ system: 'urn:ietf:bcp:47', code: 'es', display: 'Spanish' }],
          },
          preferred: false,
        })
        .addCommunication({
          language: {
            coding: [{ system: 'urn:ietf:bcp:47', code: 'en', display: 'English' }],
          },
          preferred: true,
        })
        .build();

      expect(relatedPerson.communication).toHaveLength(2);
      expect(relatedPerson.communication?.[1]?.preferred).toBe(true);
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create sibling as organ donor', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/transplant-recipient' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'SIB',
              display: 'Sibling',
            },
          ],
        })
        .addName({ family: 'Thompson', given: ['Michael'] })
        .setGender('male')
        .setBirthDate('1988-11-20')
        .addTelecom({ system: 'phone', value: '555-DONOR' })
        .build();

      expect(relatedPerson.relationship?.[0]?.coding?.[0]?.code).toBe('SIB');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create grandparent as temporary caregiver', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(true)
        .setPatient({ reference: 'Patient/grandchild' })
        .addRelationship({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'GRFTH',
              display: 'Grandfather',
            },
          ],
        })
        .addName({ family: 'Miller', given: ['William'] })
        .setGender('male')
        .setBirthDate('1950-04-05')
        .addTelecom({ system: 'phone', value: '555-GRANDPA' })
        .setPeriod({ start: '2024-01-01', end: '2024-03-31' })
        .build();

      expect(relatedPerson.period?.end).toBe('2024-03-31');
      expectSerializationRoundtrip(relatedPerson);
    });

    it('should create inactive former guardian', () => {
      const relatedPerson = new RelatedPersonBuilder()
        .setActive(false)
        .setPatient({ reference: 'Patient/now-adult-patient' })
        .addRelationship({
          coding: [{ code: 'GUARD', display: 'Guardian' }],
        })
        .addName({ family: 'Brown', given: ['Elizabeth'] })
        .setPeriod({ start: '2005-01-01', end: '2023-12-31' })
        .build();

      expect(relatedPerson.active).toBe(false);
      expect(relatedPerson.period?.end).toBe('2023-12-31');
      expectSerializationRoundtrip(relatedPerson);
    });
  });
});
