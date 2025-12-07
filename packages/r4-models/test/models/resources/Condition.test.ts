import { describe, it, expect, beforeEach } from 'vitest';
import { Condition, ConditionBuilder } from '../../../src';
import type { ICondition } from '@fhir-toolkit/r4-types';

describe('Condition', () => {
  // Helper functions
  const expectSerializationRoundtrip = (condition: Condition) => {
    const json = condition.toJSON();
    const restored = Condition.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (condition: Condition) => {
    const clone = condition.clone();
    expect(clone).not.toBe(condition);
    expect(clone.toJSON()).toEqual(condition.toJSON());
  };

  const expectNoUndefinedInJSON = (condition: Condition) => {
    const json = JSON.stringify(condition.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal Condition with required properties', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
        });

        expect(condition.resourceType).toBe('Condition');
        expect(condition.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete Condition with all properties', () => {
        const fullCondition: ICondition = {
          resourceType: 'Condition',
          id: 'condition-123',
          meta: { versionId: '1' },
          implicitRules: 'http://example.org/rules',
          language: 'en-US',
          text: { status: 'generated', div: '<div>Type 2 Diabetes Mellitus</div>' },
          identifier: [{ system: 'http://hospital.org', value: 'COND001' }],
          clinicalStatus: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
          },
          verificationStatus: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'confirmed' }],
          },
          category: [
            { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-category', code: 'problem-list-item' }] },
          ],
          severity: { coding: [{ code: 'moderate', display: 'Moderate' }] },
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '44054006', display: 'Type 2 diabetes mellitus' }],
          },
          bodySite: [{ coding: [{ code: 'pancreas', display: 'Pancreas' }] }],
          subject: { reference: 'Patient/123' },
          encounter: { reference: 'Encounter/456' },
          onsetDateTime: '2020-01-15',
          recordedDate: '2020-01-20',
          recorder: { reference: 'Practitioner/dr-smith' },
          asserter: { reference: 'Practitioner/dr-jones' },
          stage: [
            {
              summary: { coding: [{ code: 'stage-2', display: 'Stage 2' }] },
              assessment: [{ reference: 'Observation/hba1c' }],
            },
          ],
          evidence: [
            {
              code: [{ coding: [{ code: 'elevated-glucose', display: 'Elevated glucose' }] }],
              detail: [{ reference: 'Observation/glucose-test' }],
            },
          ],
          note: [{ text: 'Patient diagnosed after routine checkup' }],
        };

        const condition = new Condition(fullCondition);

        expect(condition.id).toBe('condition-123');
        expect(condition.meta).toEqual({ versionId: '1' });
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
        expect(condition.verificationStatus?.coding?.[0].code).toBe('confirmed');
        expect(condition.category).toHaveLength(1);
        expect(condition.severity?.coding?.[0].code).toBe('moderate');
        expect(condition.code?.coding?.[0].code).toBe('44054006');
        expect(condition.bodySite).toHaveLength(1);
        expect(condition.subject).toEqual({ reference: 'Patient/123' });
        expect(condition.encounter).toEqual({ reference: 'Encounter/456' });
        expect(condition.onsetDateTime).toBe('2020-01-15');
        expect(condition.recordedDate).toBe('2020-01-20');
        expect(condition.recorder?.reference).toBe('Practitioner/dr-smith');
        expect(condition.asserter?.reference).toBe('Practitioner/dr-jones');
        expect(condition.stage).toHaveLength(1);
        expect(condition.evidence).toHaveLength(1);
        expect(condition.note).toHaveLength(1);
      });

      it('should create condition with onset as DateTime', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          onsetDateTime: '2023-06-15T10:30:00Z',
        });

        expect(condition.onsetDateTime).toBe('2023-06-15T10:30:00Z');
        expect(condition.onsetAge).toBeUndefined();
        expect(condition.onsetPeriod).toBeUndefined();
      });

      it('should create condition with onset as Age', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          onsetAge: { value: 45, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
        });

        expect(condition.onsetAge?.value).toBe(45);
        expect(condition.onsetAge?.unit).toBe('years');
      });

      it('should create condition with onset as Period', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          onsetPeriod: { start: '2020-01-01', end: '2020-06-01' },
        });

        expect(condition.onsetPeriod?.start).toBe('2020-01-01');
        expect(condition.onsetPeriod?.end).toBe('2020-06-01');
      });

      it('should create condition with onset as Range', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          onsetRange: {
            low: { value: 40, unit: 'years' },
            high: { value: 50, unit: 'years' },
          },
        });

        expect(condition.onsetRange?.low?.value).toBe(40);
        expect(condition.onsetRange?.high?.value).toBe(50);
      });

      it('should create condition with onset as String', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          onsetString: 'In childhood',
        });

        expect(condition.onsetString).toBe('In childhood');
      });

      it('should create condition with abatement types', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          clinicalStatus: { coding: [{ code: 'resolved' }] },
          abatementDateTime: '2023-12-01',
        });

        expect(condition.abatementDateTime).toBe('2023-12-01');
      });

      it('should create condition with multiple stages', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'cancer', display: 'Cancer' }] },
          stage: [
            {
              summary: { coding: [{ code: 'stage-iiia', display: 'Stage IIIA' }] },
              type: { coding: [{ code: 'clinical', display: 'Clinical' }] },
              assessment: [{ reference: 'Observation/tumor-staging' }],
            },
            {
              summary: { coding: [{ code: 'stage-iiib', display: 'Stage IIIB' }] },
              type: { coding: [{ code: 'pathological', display: 'Pathological' }] },
            },
          ],
        });

        expect(condition.stage).toHaveLength(2);
        expect(condition.stage![0].summary?.coding?.[0].code).toBe('stage-iiia');
        expect(condition.stage![1].summary?.coding?.[0].code).toBe('stage-iiib');
      });

      it('should create condition with evidence', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          evidence: [
            {
              code: [{ coding: [{ code: 'symptom-1' }] }, { coding: [{ code: 'symptom-2' }] }],
              detail: [{ reference: 'Observation/obs-1' }, { reference: 'DiagnosticReport/dr-1' }],
            },
          ],
        });

        expect(condition.evidence).toHaveLength(1);
        expect(condition.evidence![0].code).toHaveLength(2);
        expect(condition.evidence![0].detail).toHaveLength(2);
      });

      it('should handle condition with contained resources', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          contained: [
            { resourceType: 'Observation', id: 'obs-1', status: 'final', code: {} },
          ],
          evidence: [{ detail: [{ reference: '#obs-1' }] }],
        });

        expect(condition.contained).toHaveLength(1);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal condition to JSON', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
        });

        const json = condition.toJSON();

        expect(json.resourceType).toBe('Condition');
        expect(json.subject).toEqual({ reference: 'Patient/123' });
        expectNoUndefinedInJSON(condition);
      });

      it('should serialize complete condition to JSON', () => {
        const condition = new Condition({
          id: 'cond-001',
          subject: { reference: 'Patient/123' },
          clinicalStatus: { coding: [{ code: 'active' }] },
          code: { coding: [{ code: 'diabetes' }] },
          onsetDateTime: '2020-01-01',
        });

        const json = condition.toJSON();

        expect(json.id).toBe('cond-001');
        expect(json.clinicalStatus?.coding?.[0].code).toBe('active');
        expect(json.onsetDateTime).toBe('2020-01-01');
        expectSerializationRoundtrip(condition);
      });

      it('should exclude undefined values from JSON', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
        });

        const json = condition.toJSON();

        expect(json).not.toHaveProperty('clinicalStatus');
        expect(json).not.toHaveProperty('verificationStatus');
        expect(json).not.toHaveProperty('stage');
        expectNoUndefinedInJSON(condition);
      });
    });

    describe('fromJSON', () => {
      it('should create Condition from JSON', () => {
        const json: ICondition = {
          resourceType: 'Condition',
          id: 'from-json-test',
          subject: { reference: 'Patient/p1' },
          clinicalStatus: { coding: [{ code: 'active' }] },
        };

        const condition = Condition.fromJSON(json);

        expect(condition).toBeInstanceOf(Condition);
        expect(condition.id).toBe('from-json-test');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
      });

      it('should maintain data integrity through fromJSON', () => {
        const originalCondition = new Condition({
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'hypertension' }] },
          stage: [{ summary: { coding: [{ code: 'stage-1' }] } }],
        });

        const json = originalCondition.toJSON();
        const restored = Condition.fromJSON(json);

        expect(restored.toJSON()).toEqual(originalCondition.toJSON());
      });
    });

    describe('Immutability', () => {
      let condition: Condition;

      beforeEach(() => {
        condition = new Condition({
          id: 'original',
          subject: { reference: 'Patient/original' },
          clinicalStatus: { coding: [{ code: 'active' }] },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = condition.with({
          clinicalStatus: { coding: [{ code: 'resolved' }] },
        });

        expect(modified).not.toBe(condition);
        expect(modified.clinicalStatus?.coding?.[0].code).toBe('resolved');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
      });

      it('should handle with() for complex properties', () => {
        const modified = condition.with({
          stage: [{ summary: { coding: [{ code: 'new-stage' }] } }],
          evidence: [{ code: [{ coding: [{ code: 'new-evidence' }] }] }],
        });

        expect(modified.stage).toHaveLength(1);
        expect(modified.evidence).toHaveLength(1);
        expect(condition.stage).toBeUndefined();
        expect(condition.evidence).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = condition.applyTransform((data) => ({
          clinicalStatus: { coding: [{ code: 'remission' }] },
          abatementDateTime: '2023-12-31',
        }));

        expect(modified.clinicalStatus?.coding?.[0].code).toBe('remission');
        expect(modified.abatementDateTime).toBe('2023-12-31');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          stage: [{ summary: { coding: [{ code: 'stage-1' }] } }],
          evidence: [{ code: [{ coding: [{ code: 'evidence-1' }] }] }],
        });

        const clone = condition.clone();

        expect(clone).not.toBe(condition);
        expect(clone.toJSON()).toEqual(condition.toJSON());

        // Verify deep clone
        clone.stage![0].summary!.coding![0].code = 'modified';
        expect(condition.stage![0].summary!.coding![0].code).toBe('stage-1');
      });

      it('should deep clone nested objects', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          note: [{ text: 'Original note', authorReference: { reference: 'Practitioner/1' } }],
        });

        expectDeepClone(condition);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const condition = new Condition({
          id: 'cond-12345',
          subject: { reference: 'Patient/123' },
        });

        expect(condition.toString()).toContain('Condition');
        expect(condition.toString()).toContain('cond-12345');
      });

      it('should return string representation without id', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
        });

        expect(condition.toString()).toBe('Condition');
      });
    });

    describe('Resource Properties (inherited)', () => {
      it('should handle Resource properties', () => {
        const condition = new Condition({
          id: 'resource-test',
          meta: {
            versionId: '1',
            lastUpdated: '2023-06-15T10:00:00Z',
            profile: ['http://hl7.org/fhir/StructureDefinition/Condition'],
          },
          implicitRules: 'http://example.org/rules',
          language: 'es',
          subject: { reference: 'Patient/123' },
        });

        expect(condition.id).toBe('resource-test');
        expect(condition.meta?.versionId).toBe('1');
        expect(condition.implicitRules).toBe('http://example.org/rules');
        expect(condition.language).toBe('es');

        const json = condition.toJSON();
        expect(json.id).toBe('resource-test');
        expect(json.meta?.versionId).toBe('1');
      });

      it('should handle DomainResource properties', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">Diabetes Type 2</div>',
          },
          contained: [{ resourceType: 'Observation', id: 'obs1' }],
          extension: [{ url: 'http://example.org/ext', valueString: 'test' }],
          modifierExtension: [{ url: 'http://example.org/modext', valueBoolean: true }],
        });

        expect(condition.text?.status).toBe('generated');
        expect(condition.contained).toHaveLength(1);
        expect(condition.extension).toHaveLength(1);
        expect(condition.modifierExtension).toHaveLength(1);
      });
    });

    describe('Clinical Status Types', () => {
      const clinicalStatuses = ['active', 'recurrence', 'relapse', 'inactive', 'remission', 'resolved'];

      clinicalStatuses.forEach((status) => {
        it(`should accept clinicalStatus: ${status}`, () => {
          const condition = new Condition({
            subject: { reference: 'Patient/123' },
            clinicalStatus: { coding: [{ code: status }] },
          });

          expect(condition.clinicalStatus?.coding?.[0].code).toBe(status);
        });
      });
    });

    describe('Verification Status Types', () => {
      const verificationStatuses = ['unconfirmed', 'provisional', 'differential', 'confirmed', 'refuted', 'entered-in-error'];

      verificationStatuses.forEach((status) => {
        it(`should accept verificationStatus: ${status}`, () => {
          const condition = new Condition({
            subject: { reference: 'Patient/123' },
            verificationStatus: { coding: [{ code: status }] },
          });

          expect(condition.verificationStatus?.coding?.[0].code).toBe(status);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal Condition', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(condition.resourceType).toBe('Condition');
        expect(condition.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should build complete Condition with all setters', () => {
        const condition = new ConditionBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setLanguage('en-US')
          .setText({ status: 'generated', div: '<div>Test</div>' })
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .setVerificationStatus({ coding: [{ code: 'confirmed' }] })
          .setSeverity({ coding: [{ code: 'moderate' }] })
          .setCode({ coding: [{ code: 'diabetes', display: 'Diabetes' }] })
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setRecordedDate('2023-01-15')
          .setRecorder({ reference: 'Practitioner/dr-1' })
          .setAsserter({ reference: 'Patient/123' })
          .build();

        expect(condition.id).toBe('builder-test');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
        expect(condition.verificationStatus?.coding?.[0].code).toBe('confirmed');
        expect(condition.severity?.coding?.[0].code).toBe('moderate');
        expect(condition.code?.coding?.[0].code).toBe('diabetes');
        expect(condition.subject?.reference).toBe('Patient/123');
        expect(condition.encounter?.reference).toBe('Encounter/456');
        expect(condition.recordedDate).toBe('2023-01-15');
        expect(condition.recorder?.reference).toBe('Practitioner/dr-1');
        expect(condition.asserter?.reference).toBe('Patient/123');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'COND001' })
          .addIdentifier({ system: 'http://lab.org', value: 'LAB001' })
          .build();

        expect(condition.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'problem-list-item' }] })
          .addCategory({ coding: [{ code: 'encounter-diagnosis' }] })
          .build();

        expect(condition.category).toHaveLength(2);
      });

      it('should add body sites', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addBodySite({ coding: [{ code: 'knee', display: 'Knee' }] })
          .addBodySite({ coding: [{ code: 'ankle', display: 'Ankle' }] })
          .build();

        expect(condition.bodySite).toHaveLength(2);
      });

      it('should add stages', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addStage({
            summary: { coding: [{ code: 'stage-1' }] },
            assessment: [{ reference: 'Observation/1' }],
          })
          .addStage({
            summary: { coding: [{ code: 'stage-2' }] },
          })
          .build();

        expect(condition.stage).toHaveLength(2);
      });

      it('should add evidence', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addEvidence({
            code: [{ coding: [{ code: 'symptom-1' }] }],
            detail: [{ reference: 'Observation/1' }],
          })
          .addEvidence({
            code: [{ coding: [{ code: 'symptom-2' }] }],
          })
          .build();

        expect(condition.evidence).toHaveLength(2);
      });

      it('should add notes', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'First note' })
          .addNote({ text: 'Second note', authorReference: { reference: 'Practitioner/1' } })
          .build();

        expect(condition.note).toHaveLength(2);
      });

      it('should add contained resources', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addContained({ resourceType: 'Observation', id: 'obs-1' })
          .addContained({ resourceType: 'Practitioner', id: 'pr-1' })
          .build();

        expect(condition.contained).toHaveLength(2);
      });

      it('should add extensions', () => {
        const condition = new ConditionBuilder()
          .setSubject({ reference: 'Patient/123' })
          .addExtension({ url: 'http://example.org/ext1', valueString: 'value1' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 42 })
          .build();

        expect(condition.extension).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const condition = new ConditionBuilder()
          .setId('chaining-test')
          .setSubject({ reference: 'Patient/123' })
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .setCode({ coding: [{ code: 'diabetes' }] })
          .addCategory({ coding: [{ code: 'problem-list-item' }] })
          .addStage({ summary: { coding: [{ code: 'stage-1' }] } })
          .addNote({ text: 'Test note' })
          .build();

        expect(condition.id).toBe('chaining-test');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
        expect(condition.category).toHaveLength(1);
        expect(condition.stage).toHaveLength(1);
        expect(condition.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Diabetes Diagnosis', () => {
      it('should create a complete diabetes diagnosis', () => {
        const condition = new ConditionBuilder()
          .setId('diabetes-001')
          .setClinicalStatus({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active', display: 'Active' }],
          })
          .setVerificationStatus({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'confirmed', display: 'Confirmed' }],
          })
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-category', code: 'problem-list-item', display: 'Problem List Item' }],
          })
          .setSeverity({
            coding: [{ system: 'http://snomed.info/sct', code: '6736007', display: 'Moderate' }],
          })
          .setCode({
            coding: [{ system: 'http://snomed.info/sct', code: '44054006', display: 'Type 2 diabetes mellitus' }],
            text: 'Type 2 Diabetes Mellitus',
          })
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/enc-456' })
          .setRecordedDate('2020-03-15')
          .setRecorder({ reference: 'Practitioner/dr-smith' })
          .addEvidence({
            code: [{ coding: [{ system: 'http://snomed.info/sct', code: '271327008', display: 'Elevated blood glucose' }] }],
            detail: [{ reference: 'Observation/glucose-test-001' }],
          })
          .addNote({ text: 'Patient diagnosed during routine checkup. Started on metformin.' })
          .build();

        expect(condition.code?.coding?.[0].code).toBe('44054006');
        expect(condition.clinicalStatus?.coding?.[0].code).toBe('active');
        expect(condition.evidence).toHaveLength(1);
        expectSerializationRoundtrip(condition);
      });
    });

    describe('Cancer Staging', () => {
      it('should create a cancer condition with staging', () => {
        const condition = new ConditionBuilder()
          .setId('cancer-001')
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .setVerificationStatus({ coding: [{ code: 'confirmed' }] })
          .setCode({
            coding: [{ system: 'http://snomed.info/sct', code: '254637007', display: 'Non-small cell lung cancer' }],
          })
          .setSubject({ reference: 'Patient/patient-456' })
          .addBodySite({
            coding: [{ system: 'http://snomed.info/sct', code: '39607008', display: 'Lung structure' }],
          })
          .addStage({
            summary: {
              coding: [{ system: 'http://cancerstaging.org', code: 'IIIA', display: 'Stage IIIA' }],
            },
            type: {
              coding: [{ code: 'clinical', display: 'Clinical staging' }],
            },
            assessment: [
              { reference: 'Observation/tnm-t3' },
              { reference: 'Observation/tnm-n2' },
              { reference: 'Observation/tnm-m0' },
            ],
          })
          .addStage({
            summary: {
              coding: [{ system: 'http://cancerstaging.org', code: 'IIIB', display: 'Stage IIIB' }],
            },
            type: {
              coding: [{ code: 'pathological', display: 'Pathological staging' }],
            },
          })
          .build();

        expect(condition.stage).toHaveLength(2);
        expect(condition.stage![0].summary?.coding?.[0].code).toBe('IIIA');
        expect(condition.stage![0].assessment).toHaveLength(3);
        expect(condition.bodySite).toHaveLength(1);
        expectSerializationRoundtrip(condition);
      });
    });

    describe('Resolved Condition', () => {
      it('should create a resolved condition with abatement', () => {
        const condition = new ConditionBuilder()
          .setId('resolved-001')
          .setClinicalStatus({ coding: [{ code: 'resolved' }] })
          .setVerificationStatus({ coding: [{ code: 'confirmed' }] })
          .setCode({
            coding: [{ system: 'http://snomed.info/sct', code: '386661006', display: 'Fever' }],
          })
          .setSubject({ reference: 'Patient/patient-789' })
          .build();

        // Set onset and abatement directly since builder uses choice type method
        const conditionWithDates = new Condition({
          ...condition.toJSON(),
          onsetDateTime: '2023-06-01T08:00:00Z',
          abatementDateTime: '2023-06-05T10:00:00Z',
        });

        expect(conditionWithDates.clinicalStatus?.coding?.[0].code).toBe('resolved');
        expect(conditionWithDates.onsetDateTime).toBe('2023-06-01T08:00:00Z');
        expect(conditionWithDates.abatementDateTime).toBe('2023-06-05T10:00:00Z');
        expectSerializationRoundtrip(conditionWithDates);
      });
    });

    describe('Encounter Diagnosis', () => {
      it('should create an encounter diagnosis', () => {
        const condition = new ConditionBuilder()
          .setId('enc-diag-001')
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-category', code: 'encounter-diagnosis' }],
          })
          .setCode({
            coding: [{ system: 'http://hl7.org/fhir/sid/icd-10-cm', code: 'J18.9', display: 'Pneumonia, unspecified organism' }],
          })
          .setSubject({ reference: 'Patient/patient-enc' })
          .setEncounter({ reference: 'Encounter/er-visit-001' })
          .setRecordedDate('2023-11-15T14:30:00Z')
          .addEvidence({
            code: [{ coding: [{ code: 'cough' }] }, { coding: [{ code: 'fever' }] }],
            detail: [{ reference: 'Observation/chest-xray' }],
          })
          .build();

        expect(condition.category?.[0].coding?.[0].code).toBe('encounter-diagnosis');
        expect(condition.encounter?.reference).toBe('Encounter/er-visit-001');
        expectSerializationRoundtrip(condition);
      });
    });

    describe('Condition with Group Subject', () => {
      it('should create condition with Group as subject', () => {
        const condition = new ConditionBuilder()
          .setId('group-condition-001')
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .setCode({
            coding: [{ code: 'outbreak', display: 'Disease Outbreak' }],
          })
          .setSubject({ reference: 'Group/affected-population', display: 'Affected Population Group' })
          .build();

        expect(condition.subject?.reference).toBe('Group/affected-population');
        expectSerializationRoundtrip(condition);
      });
    });

    describe('Condition with All Onset Types', () => {
      it('should handle onsetAge correctly', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'congenital-condition' }] },
          onsetAge: {
            value: 0,
            unit: 'days',
            system: 'http://unitsofmeasure.org',
            code: 'd',
          },
        });

        expect(condition.onsetAge?.value).toBe(0);
        expect(condition.onsetAge?.unit).toBe('days');
        expectSerializationRoundtrip(condition);
      });

      it('should handle onsetRange correctly', () => {
        const condition = new Condition({
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'uncertain-onset' }] },
          onsetRange: {
            low: { value: 20, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
            high: { value: 30, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
          },
        });

        expect(condition.onsetRange?.low?.value).toBe(20);
        expect(condition.onsetRange?.high?.value).toBe(30);
        expectSerializationRoundtrip(condition);
      });
    });
  });
});
