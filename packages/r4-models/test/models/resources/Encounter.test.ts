import { describe, it, expect, beforeEach } from 'vitest';
import { Encounter, EncounterBuilder } from '../../../src';
import type { IEncounter, ICoding, IEncounterParticipant, IEncounterDiagnosis, IEncounterLocation } from '@fhir-toolkit/r4-types';

describe('Encounter', () => {
  // Helper functions
  const expectSerializationRoundtrip = (encounter: Encounter) => {
    const json = encounter.toJSON();
    const restored = Encounter.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (encounter: Encounter) => {
    const clone = encounter.clone();
    expect(clone).not.toBe(encounter);
    expect(clone.toJSON()).toEqual(encounter.toJSON());
  };

  const expectNoUndefinedInJSON = (encounter: Encounter) => {
    const json = JSON.stringify(encounter.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal Encounter with required properties', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'AMB', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode' },
        });

        expect(encounter.resourceType).toBe('Encounter');
        expect(encounter.status).toBe('in-progress');
        expect(encounter.class).toEqual({ code: 'AMB', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode' });
      });

      it('should create a complete Encounter with all properties', () => {
        const fullEncounter: IEncounter = {
          resourceType: 'Encounter',
          id: 'encounter-123',
          meta: { versionId: '1' },
          implicitRules: 'http://example.org/rules',
          language: 'en-US',
          text: { status: 'generated', div: '<div>Emergency visit</div>' },
          identifier: [{ system: 'http://hospital.org', value: 'ENC001' }],
          status: 'finished',
          statusHistory: [
            { status: 'arrived', period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T08:15:00Z' } },
            { status: 'in-progress', period: { start: '2023-01-01T08:15:00Z', end: '2023-01-01T10:00:00Z' } },
          ],
          class: { code: 'EMER', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', display: 'Emergency' },
          classHistory: [{ class: { code: 'AMB' }, period: { start: '2023-01-01T08:00:00Z' } }],
          type: [{ coding: [{ code: 'emergency-visit', display: 'Emergency Visit' }] }],
          serviceType: { coding: [{ code: 'emergency', display: 'Emergency Services' }] },
          priority: { coding: [{ code: 'stat', display: 'Immediate' }] },
          subject: { reference: 'Patient/123' },
          episodeOfCare: [{ reference: 'EpisodeOfCare/456' }],
          basedOn: [{ reference: 'ServiceRequest/789' }],
          participant: [
            {
              type: [{ coding: [{ code: 'ATND', display: 'Attender' }] }],
              individual: { reference: 'Practitioner/dr-smith' },
            },
          ],
          appointment: [{ reference: 'Appointment/apt-001' }],
          period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T10:00:00Z' },
          length: { value: 120, unit: 'min', system: 'http://unitsofmeasure.org', code: 'min' },
          reasonCode: [{ coding: [{ code: 'chest-pain', display: 'Chest Pain' }] }],
          reasonReference: [{ reference: 'Condition/chest-pain-123' }],
          diagnosis: [
            {
              condition: { reference: 'Condition/myocardial-infarction' },
              use: { coding: [{ code: 'AD', display: 'Admission diagnosis' }] },
              rank: 1,
            },
          ],
          account: [{ reference: 'Account/billing-001' }],
          hospitalization: {
            preAdmissionIdentifier: { value: 'PRE-001' },
            admitSource: { coding: [{ code: 'emergency' }] },
            dischargeDisposition: { coding: [{ code: 'home', display: 'Discharged to home' }] },
          },
          location: [
            {
              location: { reference: 'Location/er-room-1' },
              status: 'completed',
              period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T10:00:00Z' },
            },
          ],
          serviceProvider: { reference: 'Organization/hospital-main' },
          partOf: { reference: 'Encounter/parent-encounter' },
        };

        const encounter = new Encounter(fullEncounter);

        expect(encounter.id).toBe('encounter-123');
        expect(encounter.meta).toEqual({ versionId: '1' });
        expect(encounter.implicitRules).toBe('http://example.org/rules');
        expect(encounter.language).toBe('en-US');
        expect(encounter.text).toEqual({ status: 'generated', div: '<div>Emergency visit</div>' });
        expect(encounter.identifier).toHaveLength(1);
        expect(encounter.status).toBe('finished');
        expect(encounter.statusHistory).toHaveLength(2);
        expect(encounter.class).toEqual({ code: 'EMER', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', display: 'Emergency' });
        expect(encounter.classHistory).toHaveLength(1);
        expect(encounter.type).toHaveLength(1);
        expect(encounter.serviceType).toBeDefined();
        expect(encounter.priority).toBeDefined();
        expect(encounter.subject).toEqual({ reference: 'Patient/123' });
        expect(encounter.episodeOfCare).toHaveLength(1);
        expect(encounter.basedOn).toHaveLength(1);
        expect(encounter.participant).toHaveLength(1);
        expect(encounter.appointment).toHaveLength(1);
        expect(encounter.period).toBeDefined();
        expect(encounter.length).toEqual({ value: 120, unit: 'min', system: 'http://unitsofmeasure.org', code: 'min' });
        expect(encounter.reasonCode).toHaveLength(1);
        expect(encounter.reasonReference).toHaveLength(1);
        expect(encounter.diagnosis).toHaveLength(1);
        expect(encounter.account).toHaveLength(1);
        expect(encounter.hospitalization).toBeDefined();
        expect(encounter.location).toHaveLength(1);
        expect(encounter.serviceProvider).toEqual({ reference: 'Organization/hospital-main' });
        expect(encounter.partOf).toEqual({ reference: 'Encounter/parent-encounter' });
      });

      it('should create encounter with status history', () => {
        const encounter = new Encounter({
          status: 'finished',
          class: { code: 'IMP' },
          statusHistory: [
            { status: 'planned', period: { start: '2023-01-01T06:00:00Z', end: '2023-01-01T08:00:00Z' } },
            { status: 'arrived', period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T08:30:00Z' } },
            { status: 'in-progress', period: { start: '2023-01-01T08:30:00Z', end: '2023-01-01T16:00:00Z' } },
            { status: 'finished', period: { start: '2023-01-01T16:00:00Z' } },
          ],
        });

        expect(encounter.statusHistory).toHaveLength(4);
        expect(encounter.statusHistory![0].status).toBe('planned');
        expect(encounter.statusHistory![3].status).toBe('finished');
      });

      it('should create encounter with multiple participants', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'IMP' },
          participant: [
            {
              type: [{ coding: [{ code: 'ATND' }] }],
              individual: { reference: 'Practitioner/attending-physician' },
            },
            {
              type: [{ coding: [{ code: 'CON' }] }],
              individual: { reference: 'Practitioner/consultant' },
            },
            {
              type: [{ coding: [{ code: 'ADM' }] }],
              individual: { reference: 'Practitioner/admitting-physician' },
            },
          ],
        });

        expect(encounter.participant).toHaveLength(3);
      });

      it('should create encounter with hospitalization details', () => {
        const encounter = new Encounter({
          status: 'finished',
          class: { code: 'IMP', display: 'Inpatient' },
          hospitalization: {
            preAdmissionIdentifier: { system: 'http://hospital.org', value: 'PREADM001' },
            origin: { reference: 'Location/emergency-department' },
            admitSource: { coding: [{ code: 'emd', display: 'From accident/emergency department' }] },
            reAdmission: { coding: [{ code: 'R', display: 'Re-admission' }] },
            dietPreference: [{ coding: [{ code: 'vegetarian' }] }],
            specialCourtesy: [{ coding: [{ code: 'VIP' }] }],
            specialArrangement: [{ coding: [{ code: 'wheel', display: 'Wheelchair' }] }],
            destination: { reference: 'Location/rehab-center' },
            dischargeDisposition: { coding: [{ code: 'snf', display: 'Skilled nursing facility' }] },
          },
        });

        expect(encounter.hospitalization).toBeDefined();
        expect(encounter.hospitalization!.preAdmissionIdentifier?.value).toBe('PREADM001');
        expect(encounter.hospitalization!.admitSource?.coding?.[0].code).toBe('emd');
        expect(encounter.hospitalization!.dischargeDisposition?.coding?.[0].code).toBe('snf');
      });

      it('should create encounter with multiple locations', () => {
        const encounter = new Encounter({
          status: 'finished',
          class: { code: 'IMP' },
          location: [
            {
              location: { reference: 'Location/emergency-room' },
              status: 'completed',
              physicalType: { coding: [{ code: 'room' }] },
              period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T10:00:00Z' },
            },
            {
              location: { reference: 'Location/icu-bed-5' },
              status: 'completed',
              physicalType: { coding: [{ code: 'bed' }] },
              period: { start: '2023-01-01T10:00:00Z', end: '2023-01-03T14:00:00Z' },
            },
            {
              location: { reference: 'Location/ward-room-201' },
              status: 'completed',
              physicalType: { coding: [{ code: 'room' }] },
              period: { start: '2023-01-03T14:00:00Z', end: '2023-01-05T10:00:00Z' },
            },
          ],
        });

        expect(encounter.location).toHaveLength(3);
        expect(encounter.location![0].location.reference).toBe('Location/emergency-room');
        expect(encounter.location![1].location.reference).toBe('Location/icu-bed-5');
        expect(encounter.location![2].location.reference).toBe('Location/ward-room-201');
      });

      it('should handle encounter with contained resources', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'AMB' },
          contained: [
            { resourceType: 'Practitioner', id: 'pr-1', name: [{ family: 'Smith' }] },
            { resourceType: 'Location', id: 'loc-1', name: 'Exam Room 1' },
          ],
          participant: [{ individual: { reference: '#pr-1' } }],
          location: [{ location: { reference: '#loc-1' } }],
        });

        expect(encounter.contained).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal encounter to JSON', () => {
        const encounter = new Encounter({
          status: 'planned',
          class: { code: 'VR', display: 'Virtual' },
        });

        const json = encounter.toJSON();

        expect(json.resourceType).toBe('Encounter');
        expect(json.status).toBe('planned');
        expect(json.class).toEqual({ code: 'VR', display: 'Virtual' });
        expectNoUndefinedInJSON(encounter);
      });

      it('should serialize complete encounter to JSON', () => {
        const encounter = new Encounter({
          id: 'enc-001',
          status: 'finished',
          class: { code: 'EMER' },
          subject: { reference: 'Patient/123' },
          period: { start: '2023-01-01', end: '2023-01-02' },
          diagnosis: [{ condition: { reference: 'Condition/456' }, rank: 1 }],
        });

        const json = encounter.toJSON();

        expect(json.id).toBe('enc-001');
        expect(json.diagnosis![0].rank).toBe(1);
        expectSerializationRoundtrip(encounter);
      });

      it('should exclude undefined values from JSON', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'AMB' },
        });

        const json = encounter.toJSON();

        expect(json).not.toHaveProperty('identifier');
        expect(json).not.toHaveProperty('hospitalization');
        expect(json).not.toHaveProperty('location');
        expectNoUndefinedInJSON(encounter);
      });
    });

    describe('fromJSON', () => {
      it('should create Encounter from JSON', () => {
        const json: IEncounter = {
          resourceType: 'Encounter',
          id: 'from-json-test',
          status: 'arrived',
          class: { code: 'IMP', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode' },
          subject: { reference: 'Patient/p1' },
        };

        const encounter = Encounter.fromJSON(json);

        expect(encounter).toBeInstanceOf(Encounter);
        expect(encounter.id).toBe('from-json-test');
        expect(encounter.status).toBe('arrived');
        expect(encounter.subject?.reference).toBe('Patient/p1');
      });

      it('should maintain data integrity through fromJSON', () => {
        const originalEncounter = new Encounter({
          status: 'finished',
          class: { code: 'SS' },
          participant: [{ individual: { reference: 'Practitioner/1' } }],
          diagnosis: [{ condition: { reference: 'Condition/1' }, rank: 1 }],
        });

        const json = originalEncounter.toJSON();
        const restored = Encounter.fromJSON(json);

        expect(restored.toJSON()).toEqual(originalEncounter.toJSON());
      });
    });

    describe('Immutability', () => {
      let encounter: Encounter;

      beforeEach(() => {
        encounter = new Encounter({
          id: 'original',
          status: 'in-progress',
          class: { code: 'AMB' },
          subject: { reference: 'Patient/original' },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = encounter.with({ status: 'finished' });

        expect(modified).not.toBe(encounter);
        expect(modified.status).toBe('finished');
        expect(encounter.status).toBe('in-progress');
      });

      it('should handle with() for complex properties', () => {
        const modified = encounter.with({
          period: { start: '2023-06-01', end: '2023-06-02' },
          hospitalization: {
            admitSource: { coding: [{ code: 'routine' }] },
          },
        });

        expect(modified.period).toEqual({ start: '2023-06-01', end: '2023-06-02' });
        expect(modified.hospitalization?.admitSource?.coding?.[0].code).toBe('routine');
        expect(encounter.period).toBeUndefined();
        expect(encounter.hospitalization).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = encounter.applyTransform((data) => ({
          status: 'finished',
          period: { ...data.period, end: '2023-12-31' },
        }));

        expect(modified.status).toBe('finished');
        expect(modified.period?.end).toBe('2023-12-31');
        expect(encounter.status).toBe('in-progress');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'IMP' },
          participant: [{ individual: { reference: 'Practitioner/1' } }],
          location: [{ location: { reference: 'Location/1' }, status: 'active' }],
        });

        const clone = encounter.clone();

        expect(clone).not.toBe(encounter);
        expect(clone.toJSON()).toEqual(encounter.toJSON());

        // Verify deep clone - modifying clone should not affect original
        clone.participant![0].individual.reference = 'Practitioner/modified';
        expect(encounter.participant![0].individual.reference).toBe('Practitioner/1');
      });

      it('should deep clone nested objects', () => {
        const encounter = new Encounter({
          status: 'finished',
          class: { code: 'IMP' },
          hospitalization: {
            admitSource: { coding: [{ code: 'emd', display: 'Emergency' }] },
            dietPreference: [{ coding: [{ code: 'vegetarian' }] }],
          },
        });

        expectDeepClone(encounter);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const encounter = new Encounter({
          id: 'enc-12345',
          status: 'in-progress',
          class: { code: 'AMB' },
        });

        expect(encounter.toString()).toContain('Encounter');
        expect(encounter.toString()).toContain('enc-12345');
      });

      it('should return string representation without id', () => {
        const encounter = new Encounter({
          status: 'planned',
          class: { code: 'VR' },
        });

        expect(encounter.toString()).toBe('Encounter');
      });
    });

    describe('Resource Properties (inherited from Resource and DomainResource)', () => {
      it('should handle Resource properties', () => {
        const encounter = new Encounter({
          id: 'resource-test',
          meta: {
            versionId: '1',
            lastUpdated: '2023-06-15T10:00:00Z',
            profile: ['http://hl7.org/fhir/StructureDefinition/Encounter'],
          },
          implicitRules: 'http://example.org/rules',
          language: 'de-DE',
          status: 'in-progress',
          class: { code: 'AMB' },
        });

        expect(encounter.id).toBe('resource-test');
        expect(encounter.meta?.versionId).toBe('1');
        expect(encounter.meta?.lastUpdated).toBe('2023-06-15T10:00:00Z');
        expect(encounter.implicitRules).toBe('http://example.org/rules');
        expect(encounter.language).toBe('de-DE');

        const json = encounter.toJSON();
        expect(json.id).toBe('resource-test');
        expect(json.meta?.versionId).toBe('1');
        expect(json.implicitRules).toBe('http://example.org/rules');
        expect(json.language).toBe('de-DE');
      });

      it('should handle DomainResource properties', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          class: { code: 'AMB' },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">Ambulatory encounter</div>',
          },
          contained: [{ resourceType: 'Practitioner', id: 'pr1' }],
          extension: [{ url: 'http://example.org/ext', valueString: 'test' }],
          modifierExtension: [{ url: 'http://example.org/modext', valueBoolean: true }],
        });

        expect(encounter.text?.status).toBe('generated');
        expect(encounter.contained).toHaveLength(1);
        expect(encounter.extension).toHaveLength(1);
        expect(encounter.modifierExtension).toHaveLength(1);

        const json = encounter.toJSON();
        expect(json.text?.div).toContain('Ambulatory encounter');
        expect(json.contained?.[0].id).toBe('pr1');
        expect(json.extension?.[0].valueString).toBe('test');
        expect(json.modifierExtension?.[0].valueBoolean).toBe(true);
      });

      it('should handle primitive extensions', () => {
        const encounter = new Encounter({
          status: 'in-progress',
          _status: {
            extension: [{ url: 'http://example.org/status-reason', valueString: 'Waiting for lab results' }],
          },
          class: { code: 'AMB' },
        });

        expect(encounter.status).toBe('in-progress');
        expect(encounter._status?.extension?.[0].valueString).toBe('Waiting for lab results');
      });
    });

    describe('Encounter Status Types', () => {
      const statusTypes: Array<IEncounter['status']> = [
        'planned',
        'arrived',
        'triaged',
        'in-progress',
        'onleave',
        'finished',
        'cancelled',
        'entered-in-error',
        'unknown',
      ];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const encounter = new Encounter({
            status,
            class: { code: 'AMB' },
          });

          expect(encounter.status).toBe(status);
        });
      });
    });

    describe('Encounter Class Codes', () => {
      const classExamples: ICoding[] = [
        { code: 'AMB', display: 'Ambulatory' },
        { code: 'EMER', display: 'Emergency' },
        { code: 'FLD', display: 'Field' },
        { code: 'HH', display: 'Home Health' },
        { code: 'IMP', display: 'Inpatient' },
        { code: 'ACUTE', display: 'Inpatient Acute' },
        { code: 'NONAC', display: 'Inpatient Non-Acute' },
        { code: 'OBSENC', display: 'Observation Encounter' },
        { code: 'PRENC', display: 'Pre-admission' },
        { code: 'SS', display: 'Short Stay' },
        { code: 'VR', display: 'Virtual' },
      ];

      classExamples.forEach((cls) => {
        it(`should accept class code: ${cls.code}`, () => {
          const encounter = new Encounter({
            status: 'in-progress',
            class: cls,
          });

          expect(encounter.class.code).toBe(cls.code);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal Encounter', () => {
        const encounter = new EncounterBuilder()
          .setStatus('planned')
          .setClass({ code: 'AMB' })
          .build();

        expect(encounter.resourceType).toBe('Encounter');
        expect(encounter.status).toBe('planned');
        expect(encounter.class.code).toBe('AMB');
      });

      it('should build complete Encounter with all setters', () => {
        const encounter = new EncounterBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setImplicitRules('http://example.org/rules')
          .setLanguage('en-US')
          .setText({ status: 'generated', div: '<div>Test</div>' })
          .setStatus('in-progress')
          .setClass({ code: 'IMP', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode' })
          .setServiceType({ coding: [{ code: 'cardiology' }] })
          .setPriority({ coding: [{ code: 'routine' }] })
          .setSubject({ reference: 'Patient/123' })
          .setPeriod({ start: '2023-01-01', end: '2023-01-05' })
          .setLength({ value: 4, unit: 'd' })
          .setHospitalization({ admitSource: { coding: [{ code: 'routine' }] } })
          .setServiceProvider({ reference: 'Organization/hospital-1' })
          .setPartOf({ reference: 'Encounter/parent' })
          .build();

        expect(encounter.id).toBe('builder-test');
        expect(encounter.meta?.versionId).toBe('1');
        expect(encounter.status).toBe('in-progress');
        expect(encounter.class.code).toBe('IMP');
        expect(encounter.subject?.reference).toBe('Patient/123');
        expect(encounter.period?.start).toBe('2023-01-01');
        expect(encounter.length?.value).toBe(4);
        expect(encounter.hospitalization?.admitSource?.coding?.[0].code).toBe('routine');
        expect(encounter.serviceProvider?.reference).toBe('Organization/hospital-1');
        expect(encounter.partOf?.reference).toBe('Encounter/parent');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addIdentifier({ system: 'http://hospital.org/encounters', value: 'ENC001' })
          .addIdentifier({ system: 'http://insurance.org', value: 'INS001' })
          .build();

        expect(encounter.identifier).toHaveLength(2);
        expect(encounter.identifier![0].value).toBe('ENC001');
        expect(encounter.identifier![1].value).toBe('INS001');
      });

      it('should add status history entries', () => {
        const encounter = new EncounterBuilder()
          .setStatus('finished')
          .setClass({ code: 'IMP' })
          .addStatusHistory({ status: 'planned', period: { start: '2023-01-01T06:00:00Z' } })
          .addStatusHistory({ status: 'arrived', period: { start: '2023-01-01T08:00:00Z' } })
          .addStatusHistory({ status: 'in-progress', period: { start: '2023-01-01T08:30:00Z' } })
          .addStatusHistory({ status: 'finished', period: { start: '2023-01-01T16:00:00Z' } })
          .build();

        expect(encounter.statusHistory).toHaveLength(4);
      });

      it('should add class history entries', () => {
        const encounter = new EncounterBuilder()
          .setStatus('finished')
          .setClass({ code: 'IMP' })
          .addClassHistory({ class: { code: 'EMER' }, period: { start: '2023-01-01T08:00:00Z' } })
          .addClassHistory({ class: { code: 'IMP' }, period: { start: '2023-01-01T12:00:00Z' } })
          .build();

        expect(encounter.classHistory).toHaveLength(2);
        expect(encounter.classHistory![0].class.code).toBe('EMER');
        expect(encounter.classHistory![1].class.code).toBe('IMP');
      });

      it('should add types', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addType({ coding: [{ code: 'consultation' }] })
          .addType({ coding: [{ code: 'follow-up' }] })
          .build();

        expect(encounter.type).toHaveLength(2);
      });

      it('should add participants', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'IMP' })
          .addParticipant({
            type: [{ coding: [{ code: 'ATND' }] }],
            individual: { reference: 'Practitioner/attending' },
          })
          .addParticipant({
            type: [{ coding: [{ code: 'CON' }] }],
            individual: { reference: 'Practitioner/consultant' },
          })
          .build();

        expect(encounter.participant).toHaveLength(2);
      });

      it('should add episodes of care', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addEpisodeOfCare({ reference: 'EpisodeOfCare/1' })
          .addEpisodeOfCare({ reference: 'EpisodeOfCare/2' })
          .build();

        expect(encounter.episodeOfCare).toHaveLength(2);
      });

      it('should add basedOn references', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addBasedOn({ reference: 'ServiceRequest/sr-1' })
          .addBasedOn({ reference: 'ServiceRequest/sr-2' })
          .build();

        expect(encounter.basedOn).toHaveLength(2);
      });

      it('should add appointments', () => {
        const encounter = new EncounterBuilder()
          .setStatus('arrived')
          .setClass({ code: 'AMB' })
          .addAppointment({ reference: 'Appointment/apt-1' })
          .build();

        expect(encounter.appointment).toHaveLength(1);
      });

      it('should add diagnoses', () => {
        const encounter = new EncounterBuilder()
          .setStatus('finished')
          .setClass({ code: 'IMP' })
          .addDiagnosis({
            condition: { reference: 'Condition/primary-diagnosis' },
            use: { coding: [{ code: 'AD' }] },
            rank: 1,
          })
          .addDiagnosis({
            condition: { reference: 'Condition/secondary-diagnosis' },
            use: { coding: [{ code: 'DD' }] },
            rank: 2,
          })
          .build();

        expect(encounter.diagnosis).toHaveLength(2);
        expect(encounter.diagnosis![0].rank).toBe(1);
        expect(encounter.diagnosis![1].rank).toBe(2);
      });

      it('should add accounts', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'IMP' })
          .addAccount({ reference: 'Account/billing-1' })
          .addAccount({ reference: 'Account/billing-2' })
          .build();

        expect(encounter.account).toHaveLength(2);
      });

      it('should add locations', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'IMP' })
          .addLocation({
            location: { reference: 'Location/er' },
            status: 'completed',
            period: { start: '2023-01-01T08:00:00Z', end: '2023-01-01T10:00:00Z' },
          })
          .addLocation({
            location: { reference: 'Location/icu' },
            status: 'active',
            period: { start: '2023-01-01T10:00:00Z' },
          })
          .build();

        expect(encounter.location).toHaveLength(2);
        expect(encounter.location![0].status).toBe('completed');
        expect(encounter.location![1].status).toBe('active');
      });

      it('should add contained resources', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addContained({ resourceType: 'Practitioner', id: 'pr-1' })
          .addContained({ resourceType: 'Location', id: 'loc-1' })
          .build();

        expect(encounter.contained).toHaveLength(2);
      });

      it('should add extensions', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addExtension({ url: 'http://example.org/ext1', valueString: 'value1' })
          .addExtension({ url: 'http://example.org/ext2', valueBoolean: true })
          .build();

        expect(encounter.extension).toHaveLength(2);
      });

      it('should add modifier extensions', () => {
        const encounter = new EncounterBuilder()
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addModifierExtension({ url: 'http://example.org/mod', valueBoolean: true })
          .build();

        expect(encounter.modifierExtension).toHaveLength(1);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const encounter = new EncounterBuilder()
          .setId('chaining-test')
          .setStatus('in-progress')
          .setClass({ code: 'EMER' })
          .setSubject({ reference: 'Patient/123' })
          .setPeriod({ start: '2023-06-15T08:00:00Z' })
          .addParticipant({ individual: { reference: 'Practitioner/dr-1' } })
          .addLocation({ location: { reference: 'Location/er-1' }, status: 'active' })
          .build();

        expect(encounter.id).toBe('chaining-test');
        expect(encounter.status).toBe('in-progress');
        expect(encounter.class.code).toBe('EMER');
        expect(encounter.subject?.reference).toBe('Patient/123');
        expect(encounter.participant).toHaveLength(1);
        expect(encounter.location).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Emergency Department Visit', () => {
      it('should create a complete ED visit encounter', () => {
        const encounter = new EncounterBuilder()
          .setId('ed-visit-001')
          .setStatus('finished')
          .setClass({ code: 'EMER', system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', display: 'Emergency' })
          .addType({ coding: [{ code: 'emergency-visit', display: 'Emergency Department Visit' }] })
          .setPriority({ coding: [{ code: 'R', display: 'Routine' }] })
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setPeriod({ start: '2023-06-15T08:30:00Z', end: '2023-06-15T14:45:00Z' })
          .setLength({ value: 375, unit: 'min', system: 'http://unitsofmeasure.org', code: 'min' })
          .addStatusHistory({ status: 'arrived', period: { start: '2023-06-15T08:30:00Z', end: '2023-06-15T08:45:00Z' } })
          .addStatusHistory({ status: 'triaged', period: { start: '2023-06-15T08:45:00Z', end: '2023-06-15T09:00:00Z' } })
          .addStatusHistory({ status: 'in-progress', period: { start: '2023-06-15T09:00:00Z', end: '2023-06-15T14:30:00Z' } })
          .addStatusHistory({ status: 'finished', period: { start: '2023-06-15T14:30:00Z' } })
          .addParticipant({
            type: [{ coding: [{ code: 'ATND', display: 'Attender' }] }],
            individual: { reference: 'Practitioner/dr-jones', display: 'Dr. Jones' },
            period: { start: '2023-06-15T09:00:00Z', end: '2023-06-15T14:30:00Z' },
          })
          .addDiagnosis({
            condition: { reference: 'Condition/chest-pain', display: 'Chest Pain' },
            use: { coding: [{ code: 'CC', display: 'Chief Complaint' }] },
            rank: 1,
          })
          .addLocation({
            location: { reference: 'Location/ed-triage', display: 'ED Triage' },
            status: 'completed',
            period: { start: '2023-06-15T08:30:00Z', end: '2023-06-15T08:45:00Z' },
          })
          .addLocation({
            location: { reference: 'Location/ed-bay-5', display: 'ED Bay 5' },
            status: 'completed',
            period: { start: '2023-06-15T08:45:00Z', end: '2023-06-15T14:30:00Z' },
          })
          .setServiceProvider({ reference: 'Organization/hospital-main' })
          .build();

        expect(encounter.status).toBe('finished');
        expect(encounter.class.code).toBe('EMER');
        expect(encounter.statusHistory).toHaveLength(4);
        expect(encounter.location).toHaveLength(2);
        expect(encounter.length?.value).toBe(375);
        expectSerializationRoundtrip(encounter);
      });
    });

    describe('Inpatient Hospitalization', () => {
      it('should create a complete inpatient encounter', () => {
        const encounter = new EncounterBuilder()
          .setId('inpatient-001')
          .setStatus('finished')
          .setClass({ code: 'IMP', display: 'Inpatient' })
          .addIdentifier({ system: 'http://hospital.org/admissions', value: 'ADM-2023-0615' })
          .setSubject({ reference: 'Patient/patient-456' })
          .setPeriod({ start: '2023-06-15T10:00:00Z', end: '2023-06-20T11:00:00Z' })
          .setLength({ value: 5, unit: 'd', system: 'http://unitsofmeasure.org', code: 'd' })
          .setHospitalization({
            preAdmissionIdentifier: { value: 'PREADM-001' },
            origin: { reference: 'Location/emergency-department' },
            admitSource: { coding: [{ code: 'emd', display: 'From accident/emergency department' }] },
            dietPreference: [
              { coding: [{ code: 'dairy-free', display: 'Dairy Free' }] },
            ],
            specialArrangement: [
              { coding: [{ code: 'wheel', display: 'Wheelchair' }] },
            ],
            destination: { reference: 'Location/rehab-center' },
            dischargeDisposition: { coding: [{ code: 'snf', display: 'Skilled nursing facility' }] },
          })
          .addDiagnosis({
            condition: { reference: 'Condition/hip-fracture' },
            use: { coding: [{ code: 'AD', display: 'Admission diagnosis' }] },
            rank: 1,
          })
          .addDiagnosis({
            condition: { reference: 'Condition/hypertension' },
            use: { coding: [{ code: 'CM', display: 'Comorbidity diagnosis' }] },
            rank: 2,
          })
          .addLocation({
            location: { reference: 'Location/or-1' },
            status: 'completed',
            physicalType: { coding: [{ code: 'room', display: 'Room' }] },
            period: { start: '2023-06-15T14:00:00Z', end: '2023-06-15T17:00:00Z' },
          })
          .addLocation({
            location: { reference: 'Location/icu-bed-3' },
            status: 'completed',
            physicalType: { coding: [{ code: 'bed', display: 'Bed' }] },
            period: { start: '2023-06-15T17:00:00Z', end: '2023-06-17T08:00:00Z' },
          })
          .addLocation({
            location: { reference: 'Location/ward-room-401' },
            status: 'completed',
            physicalType: { coding: [{ code: 'room', display: 'Room' }] },
            period: { start: '2023-06-17T08:00:00Z', end: '2023-06-20T11:00:00Z' },
          })
          .setServiceProvider({ reference: 'Organization/general-hospital' })
          .build();

        expect(encounter.hospitalization).toBeDefined();
        expect(encounter.hospitalization!.admitSource?.coding?.[0].code).toBe('emd');
        expect(encounter.hospitalization!.dischargeDisposition?.coding?.[0].code).toBe('snf');
        expect(encounter.diagnosis).toHaveLength(2);
        expect(encounter.location).toHaveLength(3);
        expectSerializationRoundtrip(encounter);
      });
    });

    describe('Ambulatory Visit', () => {
      it('should create an ambulatory/outpatient encounter', () => {
        const encounter = new EncounterBuilder()
          .setId('ambulatory-001')
          .setStatus('finished')
          .setClass({ code: 'AMB', display: 'Ambulatory' })
          .addType({ coding: [{ code: 'routine', display: 'Routine Check-up' }] })
          .setServiceType({ coding: [{ code: 'general-medicine', display: 'General Medicine' }] })
          .setSubject({ reference: 'Patient/patient-789' })
          .addAppointment({ reference: 'Appointment/apt-123' })
          .setPeriod({ start: '2023-06-15T09:00:00Z', end: '2023-06-15T09:30:00Z' })
          .setLength({ value: 30, unit: 'min', system: 'http://unitsofmeasure.org', code: 'min' })
          .addParticipant({
            type: [{ coding: [{ code: 'PPRF', display: 'Primary Performer' }] }],
            individual: { reference: 'Practitioner/dr-smith' },
          })
          .addLocation({
            location: { reference: 'Location/clinic-exam-room-2' },
            status: 'completed',
          })
          .setServiceProvider({ reference: 'Organization/primary-care-clinic' })
          .build();

        expect(encounter.class.code).toBe('AMB');
        expect(encounter.appointment).toHaveLength(1);
        expect(encounter.length?.value).toBe(30);
        expectSerializationRoundtrip(encounter);
      });
    });

    describe('Virtual/Telehealth Encounter', () => {
      it('should create a telehealth encounter', () => {
        const encounter = new EncounterBuilder()
          .setId('telehealth-001')
          .setStatus('finished')
          .setClass({ code: 'VR', display: 'Virtual' })
          .addType({ coding: [{ code: 'video-consult', display: 'Video Consultation' }] })
          .setSubject({ reference: 'Patient/patient-tele' })
          .setPeriod({ start: '2023-06-15T14:00:00Z', end: '2023-06-15T14:20:00Z' })
          .addParticipant({
            type: [{ coding: [{ code: 'PPRF' }] }],
            individual: { reference: 'Practitioner/dr-virtual' },
          })
          .addExtension({
            url: 'http://example.org/telehealth-platform',
            valueString: 'Zoom Healthcare',
          })
          .build();

        expect(encounter.class.code).toBe('VR');
        expect(encounter.extension).toHaveLength(1);
        expectSerializationRoundtrip(encounter);
      });
    });

    describe('Group Encounter', () => {
      it('should create an encounter with a Group as subject', () => {
        const encounter = new EncounterBuilder()
          .setId('group-encounter-001')
          .setStatus('in-progress')
          .setClass({ code: 'AMB' })
          .addType({ coding: [{ code: 'group-therapy', display: 'Group Therapy Session' }] })
          .setSubject({ reference: 'Group/therapy-group-1', display: 'Anxiety Support Group' })
          .addParticipant({
            type: [{ coding: [{ code: 'PPRF' }] }],
            individual: { reference: 'Practitioner/therapist-1' },
          })
          .build();

        expect(encounter.subject?.reference).toBe('Group/therapy-group-1');
        expectSerializationRoundtrip(encounter);
      });
    });

    describe('Encounter with Multiple References', () => {
      it('should handle complex references', () => {
        const encounter = new EncounterBuilder()
          .setId('complex-refs-001')
          .setStatus('finished')
          .setClass({ code: 'IMP' })
          .setSubject({ reference: 'Patient/p1' })
          .addEpisodeOfCare({ reference: 'EpisodeOfCare/ep1' })
          .addEpisodeOfCare({ reference: 'EpisodeOfCare/ep2' })
          .addBasedOn({ reference: 'ServiceRequest/sr1' })
          .addBasedOn({ reference: 'ServiceRequest/sr2' })
          .addAccount({ reference: 'Account/acc1' })
          .setPartOf({ reference: 'Encounter/parent-enc' })
          .build();

        expect(encounter.episodeOfCare).toHaveLength(2);
        expect(encounter.basedOn).toHaveLength(2);
        expect(encounter.account).toHaveLength(1);
        expect(encounter.partOf?.reference).toBe('Encounter/parent-enc');
        expectSerializationRoundtrip(encounter);
      });
    });
  });
});
