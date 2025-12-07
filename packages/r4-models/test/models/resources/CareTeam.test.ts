import { describe, it, expect } from 'vitest';
import { CareTeam } from '../../../src/models/resources/CareTeam.js';
import { CareTeamBuilder } from '../../../src/builders/resources/CareTeamBuilder.js';
import type { ICareTeam } from '@fhir-toolkit/r4-types';

describe('CareTeam', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(careTeam: CareTeam): void {
    const json = careTeam.toJSON();
    const deserialized = CareTeam.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(careTeam: CareTeam): void {
    const cloned = careTeam.clone();
    expect(cloned).not.toBe(careTeam);
    expect(cloned.toJSON()).toEqual(careTeam.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: ICareTeam): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create CareTeam with minimal properties', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
      });

      expect(careTeam.resourceType).toBe('CareTeam');
    });

    it('should create CareTeam with all properties', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        id: 'careteam-1',
        identifier: [{ system: 'http://example.org', value: 'CT-001' }],
        status: 'active',
        category: [{ coding: [{ code: 'longitudinal', display: 'Longitudinal Care Coordination' }] }],
        name: 'Diabetes Care Team',
        subject: { reference: 'Patient/123' },
        encounter: { reference: 'Encounter/456' },
        period: { start: '2024-01-01', end: '2024-12-31' },
        participant: [
          {
            role: [{ coding: [{ code: 'primary-care-physician' }] }],
            member: { reference: 'Practitioner/doc-1' },
          },
        ],
        reasonCode: [{ coding: [{ code: 'diabetes-management' }] }],
        managingOrganization: [{ reference: 'Organization/hospital-1' }],
        telecom: [{ system: 'phone', value: '555-1234' }],
        note: [{ text: 'Team established for comprehensive diabetes care' }],
      });

      expect(careTeam.resourceType).toBe('CareTeam');
      expect(careTeam.id).toBe('careteam-1');
      expect(careTeam.status).toBe('active');
      expect(careTeam.name).toBe('Diabetes Care Team');
      expectSerializationRoundtrip(careTeam);
    });

    it('should handle empty constructor', () => {
      const careTeam = new CareTeam();
      expect(careTeam.resourceType).toBe('CareTeam');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        status: 'active',
        name: 'Primary Care Team',
      });

      const json = careTeam.toJSON();
      expect(json.resourceType).toBe('CareTeam');
      expect(json.status).toBe('active');
      expect(json.name).toBe('Primary Care Team');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        id: 'careteam-1',
        meta: { versionId: '1' },
        status: 'active',
        subject: { reference: 'Patient/123' },
        participant: [
          {
            member: { reference: 'Practitioner/1' },
            period: { start: '2024-01-01' },
          },
        ],
      });

      const json = careTeam.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.participant?.[0]?.member?.reference).toBe('Practitioner/1');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create CareTeam from JSON', () => {
      const json: ICareTeam = {
        resourceType: 'CareTeam',
        status: 'active',
        name: 'Cardiac Care Team',
      };

      const careTeam = CareTeam.fromJSON(json);
      expect(careTeam.status).toBe('active');
      expect(careTeam.name).toBe('Cardiac Care Team');
    });

    it('should handle complex JSON structure', () => {
      const json: ICareTeam = {
        resourceType: 'CareTeam',
        status: 'active',
        participant: [
          {
            role: [{ coding: [{ code: 'cardiologist' }] }],
            member: { reference: 'Practitioner/cardio-1' },
            period: { start: '2024-01-01' },
          },
          {
            role: [{ coding: [{ code: 'nurse' }] }],
            member: { reference: 'Practitioner/nurse-1' },
          },
        ],
      };

      const careTeam = CareTeam.fromJSON(json);
      expect(careTeam.participant).toHaveLength(2);
      expect(careTeam.participant?.[0]?.role?.[0]?.coding?.[0]?.code).toBe('cardiologist');
      expectSerializationRoundtrip(careTeam);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new CareTeam({
        resourceType: 'CareTeam',
        status: 'active',
        name: 'Original Team',
      });

      const modified = original.with({ status: 'suspended' });

      expect(original.status).toBe('active');
      expect(modified.status).toBe('suspended');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        status: 'active',
        name: 'Care Team',
      });

      const transformed = careTeam.applyTransform((data) => ({
        ...data,
        status: 'inactive',
        note: [{ text: 'Team disbanded due to patient discharge' }],
      }));

      expect(transformed.status).toBe('inactive');
      expect(transformed.note?.[0]?.text).toContain('disbanded');
      expect(careTeam.status).toBe('active');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        status: 'active',
        name: 'Surgery Team',
        participant: [
          {
            role: [{ coding: [{ code: 'surgeon' }] }],
            member: { reference: 'Practitioner/surgeon-1' },
          },
        ],
      });

      expectDeepClone(careTeam);
    });

    it('should clone with all properties', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        id: 'careteam-1',
        status: 'active',
        name: 'ICU Team',
        participant: [{ member: { reference: 'Practitioner/1' } }],
        note: [{ text: 'Intensive care coordination' }],
      });

      const cloned = careTeam.clone();
      expect(cloned.toJSON()).toEqual(careTeam.toJSON());
      expect(cloned.note?.[0]?.text).toBe('Intensive care coordination');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        status: 'active',
      });

      expect(careTeam.toString()).toBe('CareTeam');
    });

    it('should return string representation with id', () => {
      const careTeam = new CareTeam({
        resourceType: 'CareTeam',
        id: 'careteam-123',
        status: 'active',
      });

      expect(careTeam.toString()).toBe('CareTeam, id=careteam-123');
    });
  });

  // ============================================================
  // Status Tests
  // ============================================================

  describe('Status', () => {
    const validStatuses = ['proposed', 'active', 'suspended', 'inactive', 'entered-in-error'];

    validStatuses.forEach((status) => {
      it(`should accept status: ${status}`, () => {
        const careTeam = new CareTeam({
          resourceType: 'CareTeam',
          status: status as any,
        });

        expect(careTeam.status).toBe(status);
      });
    });
  });

  // ============================================================
  // CareTeamBuilder Tests
  // ============================================================

  describe('CareTeamBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build CareTeam with basic fields', () => {
        const careTeam = new CareTeamBuilder()
          .setStatus('active')
          .setName('Primary Care Team')
          .build();

        expect(careTeam.status).toBe('active');
        expect(careTeam.name).toBe('Primary Care Team');
      });

      it('should build CareTeam with all scalar fields', () => {
        const careTeam = new CareTeamBuilder()
          .setId('careteam-1')
          .setStatus('active')
          .setName('Oncology Care Team')
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setPeriod({ start: '2024-01-01', end: '2024-12-31' })
          .build();

        expect(careTeam.id).toBe('careteam-1');
        expect(careTeam.name).toBe('Oncology Care Team');
        expect(careTeam.period?.start).toBe('2024-01-01');
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const careTeam = new CareTeamBuilder()
          .addIdentifier({ system: 'http://example.org', value: 'CT-001' })
          .addIdentifier({ system: 'http://example.org', value: 'CT-002' })
          .build();

        expect(careTeam.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const careTeam = new CareTeamBuilder()
          .addCategory({ coding: [{ code: 'longitudinal' }] })
          .addCategory({ coding: [{ code: 'episodic' }] })
          .build();

        expect(careTeam.category).toHaveLength(2);
      });

      it('should add participants', () => {
        const careTeam = new CareTeamBuilder()
          .addParticipant({
            role: [{ coding: [{ code: 'primary-care-physician' }] }],
            member: { reference: 'Practitioner/doc-1' },
          })
          .addParticipant({
            role: [{ coding: [{ code: 'nurse' }] }],
            member: { reference: 'Practitioner/nurse-1' },
          })
          .build();

        expect(careTeam.participant).toHaveLength(2);
      });

      it('should add managing organizations', () => {
        const careTeam = new CareTeamBuilder()
          .addManagingOrganization({ reference: 'Organization/hospital-1' })
          .addManagingOrganization({ reference: 'Organization/clinic-1' })
          .build();

        expect(careTeam.managingOrganization).toHaveLength(2);
      });

      it('should add telecom', () => {
        const careTeam = new CareTeamBuilder()
          .addTelecom({ system: 'phone', value: '555-1234' })
          .addTelecom({ system: 'email', value: 'team@example.org' })
          .build();

        expect(careTeam.telecom).toHaveLength(2);
      });

      it('should add notes', () => {
        const careTeam = new CareTeamBuilder()
          .addNote({ text: 'Team meets weekly' })
          .addNote({ text: 'Patient prefers morning appointments' })
          .build();

        expect(careTeam.note).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const careTeam = new CareTeamBuilder()
          .setId('careteam-chain')
          .setStatus('active')
          .setName('Multi-disciplinary Team')
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'clinical-research' }] })
          .addParticipant({ member: { reference: 'Practitioner/1' } })
          .addNote({ text: 'Research protocol active' })
          .build();

        expect(careTeam.id).toBe('careteam-chain');
        expect(careTeam.category).toHaveLength(1);
        expect(careTeam.participant).toHaveLength(1);
        expect(careTeam.note).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create diabetes care coordination team', () => {
      const careTeam = new CareTeamBuilder()
        .setId('diabetes-care-team')
        .setStatus('active')
        .addCategory({
          coding: [
            {
              system: 'http://loinc.org',
              code: 'LA27976-2',
              display: 'Longitudinal care-coordination focused care team',
            },
          ],
        })
        .setName('Type 2 Diabetes Management Team')
        .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
        .setPeriod({ start: '2024-01-15' })
        .addParticipant({
          role: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '446050000',
                  display: 'Primary care physician',
                },
              ],
            },
          ],
          member: { reference: 'Practitioner/pcp-1', display: 'Dr. Sarah Johnson' },
          period: { start: '2024-01-15' },
        })
        .addParticipant({
          role: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '159141008',
                  display: 'Endocrinologist',
                },
              ],
            },
          ],
          member: { reference: 'Practitioner/endo-1', display: 'Dr. Michael Chen' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'dietitian', display: 'Dietitian' }] }],
          member: { reference: 'Practitioner/dietitian-1', display: 'Lisa Nutritionist' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'diabetes-educator', display: 'Diabetes Educator' }] }],
          member: { reference: 'Practitioner/educator-1', display: 'Mary Educator' },
        })
        .addManagingOrganization({ reference: 'Organization/hospital-main', display: 'Main Hospital' })
        .addTelecom({ system: 'phone', value: '555-DIABETES', use: 'work' })
        .addTelecom({ system: 'email', value: 'diabetes-team@hospital.org', use: 'work' })
        .addNote({ text: 'Multidisciplinary team for comprehensive diabetes management and patient education' })
        .build();

      const careTeamWithReason = careTeam.with({
        reasonCode: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '44054006',
                display: 'Type 2 diabetes mellitus',
              },
            ],
          },
        ],
      });

      expect(careTeamWithReason.status).toBe('active');
      expect(careTeamWithReason.participant).toHaveLength(4);
      expect(careTeamWithReason.telecom).toHaveLength(2);
      expect(careTeamWithReason.reasonCode?.[0]?.coding?.[0]?.code).toBe('44054006');
      expectSerializationRoundtrip(careTeamWithReason);
    });

    it('should create post-surgical care team', () => {
      const careTeam = new CareTeamBuilder()
        .setStatus('active')
        .setName('Post-Surgical Recovery Team')
        .setSubject({ reference: 'Patient/123' })
        .setEncounter({ reference: 'Encounter/surgery-admission' })
        .setPeriod({ start: '2024-01-15', end: '2024-02-15' })
        .addParticipant({
          role: [{ coding: [{ code: 'surgeon', display: 'Surgeon' }] }],
          member: { reference: 'Practitioner/surgeon-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'recovery-nurse', display: 'Recovery Nurse' }] }],
          member: { reference: 'Practitioner/rn-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'physical-therapist', display: 'Physical Therapist' }] }],
          member: { reference: 'Practitioner/pt-1' },
        })
        .addNote({ text: 'Team coordinates post-operative care and rehabilitation' })
        .build();

      expect(careTeam.period?.end).toBe('2024-02-15');
      expect(careTeam.participant).toHaveLength(3);
      expectSerializationRoundtrip(careTeam);
    });

    it('should create mental health crisis team', () => {
      const careTeam = new CareTeamBuilder()
        .setStatus('active')
        .addCategory({
          coding: [
            {
              system: 'http://loinc.org',
              code: 'LA27977-0',
              display: 'Episode of care focused care team',
            },
          ],
        })
        .setName('Crisis Assessment Team')
        .setSubject({ reference: 'Patient/123' })
        .addParticipant({
          role: [{ coding: [{ code: 'psychiatrist', display: 'Psychiatrist' }] }],
          member: { reference: 'Practitioner/psych-1' },
          onBehalfOf: { reference: 'Organization/mental-health-center' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'social-worker', display: 'Social Worker' }] }],
          member: { reference: 'Practitioner/sw-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'psychiatric-nurse', display: 'Psychiatric Nurse' }] }],
          member: { reference: 'Practitioner/psych-nurse-1' },
        })
        .addTelecom({ system: 'phone', value: '555-CRISIS', use: 'work' })
        .addNote({ text: '24/7 crisis response team' })
        .build();

      expect(careTeam.name).toBe('Crisis Assessment Team');
      expect(careTeam.participant?.[0]?.onBehalfOf?.reference).toContain('mental-health-center');
      expectSerializationRoundtrip(careTeam);
    });

    it('should create oncology multidisciplinary team', () => {
      const careTeam = new CareTeamBuilder()
        .setStatus('active')
        .setName('Breast Cancer Multidisciplinary Team')
        .setSubject({ reference: 'Patient/123' })
        .addParticipant({
          role: [{ coding: [{ code: 'medical-oncologist', display: 'Medical Oncologist' }] }],
          member: { reference: 'Practitioner/onc-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'radiation-oncologist', display: 'Radiation Oncologist' }] }],
          member: { reference: 'Practitioner/rad-onc-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'surgical-oncologist', display: 'Surgical Oncologist' }] }],
          member: { reference: 'Practitioner/surg-onc-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'oncology-nurse-navigator', display: 'Nurse Navigator' }] }],
          member: { reference: 'Practitioner/nav-1' },
        })
        .addManagingOrganization({ reference: 'Organization/cancer-center' })
        .build();

      const careTeamWithReason = careTeam.with({
        reasonReference: [{ reference: 'Condition/breast-cancer', display: 'Breast Cancer Stage 2' }],
      });

      expect(careTeamWithReason.participant).toHaveLength(4);
      expect(careTeamWithReason.reasonReference?.[0]?.reference).toBe('Condition/breast-cancer');
      expectSerializationRoundtrip(careTeamWithReason);
    });

    it('should create pediatric care team', () => {
      const careTeam = new CareTeamBuilder()
        .setStatus('active')
        .setName('Pediatric Complex Care Team')
        .setSubject({ reference: 'Patient/child-patient' })
        .addCategory({ coding: [{ code: 'longitudinal', display: 'Longitudinal Care Coordination' }] })
        .addParticipant({
          role: [{ coding: [{ code: 'pediatrician', display: 'Pediatrician' }] }],
          member: { reference: 'Practitioner/peds-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'pediatric-cardiologist', display: 'Pediatric Cardiologist' }] }],
          member: { reference: 'Practitioner/peds-cardio-1' },
        })
        .addParticipant({
          role: [{ coding: [{ code: 'caregiver', display: 'Parent/Caregiver' }] }],
          member: { reference: 'RelatedPerson/parent-1', display: 'Jane Doe (Mother)' },
        })
        .addNote({ text: 'Family-centered care team for child with congenital heart disease' })
        .build();

      expect(careTeam.participant).toHaveLength(3);
      expect(careTeam.participant?.[2]?.member?.reference).toContain('RelatedPerson');
      expectSerializationRoundtrip(careTeam);
    });

    it('should create suspended care team', () => {
      const careTeam = new CareTeamBuilder()
        .setStatus('suspended')
        .setName('Cardiac Rehabilitation Team')
        .setSubject({ reference: 'Patient/123' })
        .setPeriod({ start: '2023-06-01', end: '2023-12-31' })
        .addParticipant({
          member: { reference: 'Practitioner/cardio-1' },
          period: { start: '2023-06-01', end: '2023-10-15' },
        })
        .addNote({ text: 'Team activities suspended pending patient recovery from complications' })
        .build();

      expect(careTeam.status).toBe('suspended');
      expect(careTeam.note?.[0]?.text).toContain('suspended');
      expectSerializationRoundtrip(careTeam);
    });
  });
});
