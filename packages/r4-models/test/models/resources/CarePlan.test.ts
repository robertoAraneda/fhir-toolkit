import { describe, it, expect, beforeEach } from 'vitest';
import { CarePlan, CarePlanBuilder } from '../../../src';
import type { ICarePlan } from '@fhir-toolkit/r4-types';

describe('CarePlan', () => {
  // Helper functions
  const expectSerializationRoundtrip = (carePlan: CarePlan) => {
    const json = carePlan.toJSON();
    const restored = CarePlan.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (carePlan: CarePlan) => {
    const clone = carePlan.clone();
    expect(clone).not.toBe(carePlan);
    expect(clone.toJSON()).toEqual(carePlan.toJSON());
  };

  const expectNoUndefinedInJSON = (carePlan: CarePlan) => {
    const json = JSON.stringify(carePlan.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal CarePlan with required properties', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
        });

        expect(carePlan.resourceType).toBe('CarePlan');
        expect(carePlan.status).toBe('active');
        expect(carePlan.intent).toBe('plan');
        expect(carePlan.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete CarePlan with all properties', () => {
        const fullCarePlan: ICarePlan = {
          resourceType: 'CarePlan',
          id: 'careplan-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Diabetes Care Plan</div>' },
          identifier: [{ system: 'http://hospital.org/careplans', value: 'CP-001' }],
          instantiatesCanonical: ['http://example.org/protocol/diabetes-care'],
          basedOn: [{ reference: 'CarePlan/previous-plan' }],
          replaces: [{ reference: 'CarePlan/old-plan' }],
          partOf: [{ reference: 'CarePlan/master-plan' }],
          status: 'active',
          intent: 'plan',
          category: [
            { coding: [{ system: 'http://snomed.info/sct', code: '734163000', display: 'Care plan' }] },
          ],
          title: 'Diabetes Management Plan',
          description: 'Comprehensive diabetes management including medication, diet, and exercise',
          subject: { reference: 'Patient/patient-123', display: 'John Doe' },
          encounter: { reference: 'Encounter/enc-456' },
          period: { start: '2023-06-01', end: '2024-06-01' },
          created: '2023-06-01T10:00:00Z',
          author: { reference: 'Practitioner/dr-smith', display: 'Dr. Smith' },
          contributor: [
            { reference: 'Practitioner/dietitian-1' },
            { reference: 'Practitioner/nurse-1' },
          ],
          careTeam: [{ reference: 'CareTeam/diabetes-team' }],
          addresses: [
            { reference: 'Condition/diabetes-type-2' },
            { reference: 'Condition/hypertension' },
          ],
          supportingInfo: [{ reference: 'Observation/hba1c' }],
          goal: [
            { reference: 'Goal/target-hba1c' },
            { reference: 'Goal/weight-loss' },
          ],
          activity: [
            {
              outcomeCodeableConcept: [{ coding: [{ code: 'improved' }] }],
              detail: {
                kind: 'MedicationRequest',
                instantiatesCanonical: ['http://example.org/protocol/metformin'],
                code: { coding: [{ code: 'medication-therapy' }] },
                status: 'in-progress',
                scheduledTiming: {
                  repeat: { frequency: 2, period: 1, periodUnit: 'd' },
                },
                location: { reference: 'Location/pharmacy' },
                performer: [{ reference: 'Practitioner/pharmacist-1' }],
                description: 'Take Metformin 500mg twice daily with meals',
              },
            },
          ],
          note: [{ text: 'Patient motivated and engaged in self-care' }],
        };

        const carePlan = new CarePlan(fullCarePlan);

        expect(carePlan.id).toBe('careplan-123');
        expect(carePlan.status).toBe('active');
        expect(carePlan.intent).toBe('plan');
        expect(carePlan.title).toBe('Diabetes Management Plan');
        expect(carePlan.addresses).toHaveLength(2);
        expect(carePlan.goal).toHaveLength(2);
        expect(carePlan.activity).toHaveLength(1);
      });

      it('should create care plan with period', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          period: {
            start: '2023-01-01',
            end: '2023-12-31',
          },
        });

        expect(carePlan.period?.start).toBe('2023-01-01');
        expect(carePlan.period?.end).toBe('2023-12-31');
      });

      it('should create care plan with categories', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          category: [
            { coding: [{ code: 'assess-plan', display: 'Assessment and Plan of Treatment' }] },
            { coding: [{ code: 'careteam', display: 'Care Team coordination' }] },
          ],
        });

        expect(carePlan.category).toHaveLength(2);
        expect(carePlan.category![0].coding?.[0].code).toBe('assess-plan');
      });

      it('should create care plan with goals', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          goal: [
            { reference: 'Goal/blood-pressure', display: 'Control blood pressure' },
            { reference: 'Goal/weight-loss', display: 'Lose 10 pounds' },
            { reference: 'Goal/exercise', display: 'Exercise 3x per week' },
          ],
        });

        expect(carePlan.goal).toHaveLength(3);
        expect(carePlan.goal![0].reference).toBe('Goal/blood-pressure');
      });

      it('should create care plan with activities', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          activity: [
            {
              detail: {
                kind: 'Appointment',
                code: { coding: [{ code: 'follow-up' }] },
                status: 'scheduled',
                scheduledString: 'Weekly for 8 weeks',
                description: 'Follow-up appointment with primary care',
              },
            },
            {
              detail: {
                kind: 'ServiceRequest',
                code: { coding: [{ code: 'lab-test' }] },
                status: 'scheduled',
                description: 'Monthly HbA1c monitoring',
              },
            },
          ],
        });

        expect(carePlan.activity).toHaveLength(2);
        expect(carePlan.activity![0].detail?.kind).toBe('Appointment');
        expect(carePlan.activity![1].detail?.kind).toBe('ServiceRequest');
      });

      it('should create care plan with care team', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          careTeam: [
            { reference: 'CareTeam/primary-team' },
            { reference: 'CareTeam/specialist-team' },
          ],
        });

        expect(carePlan.careTeam).toHaveLength(2);
      });

      it('should create care plan addressing conditions', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          addresses: [
            { reference: 'Condition/diabetes', display: 'Type 2 Diabetes' },
            { reference: 'Condition/hypertension', display: 'Hypertension' },
            { reference: 'Condition/obesity', display: 'Obesity' },
          ],
        });

        expect(carePlan.addresses).toHaveLength(3);
        expect(carePlan.addresses![0].display).toBe('Type 2 Diabetes');
      });

      it('should create care plan with author and contributors', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          author: { reference: 'Practitioner/primary-doctor' },
          contributor: [
            { reference: 'Practitioner/cardiologist' },
            { reference: 'Practitioner/dietitian' },
            { reference: 'Patient/123' },
          ],
        });

        expect(carePlan.author?.reference).toBe('Practitioner/primary-doctor');
        expect(carePlan.contributor).toHaveLength(3);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal care plan to JSON', () => {
        const carePlan = new CarePlan({
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/123' },
        });

        const json = carePlan.toJSON();

        expect(json.resourceType).toBe('CarePlan');
        expect(json.status).toBe('draft');
        expect(json.intent).toBe('proposal');
        expectNoUndefinedInJSON(carePlan);
      });

      it('should serialize complete care plan to JSON', () => {
        const carePlan = new CarePlan({
          id: 'cp-001',
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          title: 'Test Plan',
          goal: [{ reference: 'Goal/goal-1' }],
        });

        const json = carePlan.toJSON();

        expect(json.id).toBe('cp-001');
        expect(json.title).toBe('Test Plan');
        expectSerializationRoundtrip(carePlan);
      });

      it('should exclude undefined values from JSON', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
        });

        const json = carePlan.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('period');
        expect(json).not.toHaveProperty('activity');
        expectNoUndefinedInJSON(carePlan);
      });
    });

    describe('fromJSON', () => {
      it('should create CarePlan from JSON', () => {
        const json: ICarePlan = {
          resourceType: 'CarePlan',
          id: 'from-json-test',
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/p1' },
          title: 'Test Care Plan',
        };

        const carePlan = CarePlan.fromJSON(json);

        expect(carePlan).toBeInstanceOf(CarePlan);
        expect(carePlan.id).toBe('from-json-test');
        expect(carePlan.title).toBe('Test Care Plan');
      });
    });

    describe('Immutability', () => {
      let carePlan: CarePlan;

      beforeEach(() => {
        carePlan = new CarePlan({
          id: 'original',
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/original' },
          title: 'Original Plan',
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = carePlan.with({ status: 'active', intent: 'plan' });

        expect(modified).not.toBe(carePlan);
        expect(modified.status).toBe('active');
        expect(modified.intent).toBe('plan');
        expect(carePlan.status).toBe('draft');
        expect(carePlan.intent).toBe('proposal');
      });

      it('should handle with() for complex properties', () => {
        const modified = carePlan.with({
          goal: [{ reference: 'Goal/new' }],
          activity: [{ detail: { status: 'completed' } }],
        });

        expect(modified.goal).toHaveLength(1);
        expect(modified.activity).toHaveLength(1);
        expect(carePlan.goal).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = carePlan.applyTransform((data) => ({
          status: 'active',
          created: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('active');
        expect(modified.created).toBe('2023-12-31T23:59:59Z');
        expect(carePlan.status).toBe('draft');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          goal: [{ reference: 'Goal/goal-1' }],
        });

        const clone = carePlan.clone();

        expect(clone).not.toBe(carePlan);
        expect(clone.toJSON()).toEqual(carePlan.toJSON());

        // Verify deep clone
        clone.goal![0] = { reference: 'Goal/modified' };
        expect(carePlan.goal![0].reference).toBe('Goal/goal-1');
      });

      it('should deep clone nested objects', () => {
        const carePlan = new CarePlan({
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
          activity: [{ detail: { status: 'in-progress', description: 'Activity' } }],
        });

        expectDeepClone(carePlan);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const carePlan = new CarePlan({
          id: 'cp-12345',
          status: 'active',
          intent: 'plan',
          subject: { reference: 'Patient/123' },
        });

        expect(carePlan.toString()).toContain('CarePlan');
        expect(carePlan.toString()).toContain('cp-12345');
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<ICarePlan['status']> = [
        'draft',
        'active',
        'on-hold',
        'revoked',
        'completed',
        'entered-in-error',
        'unknown',
      ];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const carePlan = new CarePlan({
            status,
            intent: 'plan',
            subject: { reference: 'Patient/123' },
          });

          expect(carePlan.status).toBe(status);
        });
      });
    });

    describe('Intent Types', () => {
      const intentTypes: Array<ICarePlan['intent']> = ['proposal', 'plan', 'order', 'option'];

      intentTypes.forEach((intent) => {
        it(`should accept intent: ${intent}`, () => {
          const carePlan = new CarePlan({
            status: 'active',
            intent,
            subject: { reference: 'Patient/123' },
          });

          expect(carePlan.intent).toBe(intent);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal CarePlan', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(carePlan.resourceType).toBe('CarePlan');
        expect(carePlan.status).toBe('active');
        expect(carePlan.intent).toBe('plan');
      });

      it('should build complete CarePlan with all setters', () => {
        const carePlan = new CarePlanBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setStatus('active')
          .setIntent('plan')
          .setTitle('Comprehensive Care Plan')
          .setDescription('Full care plan description')
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setPeriod({ start: '2023-01-01', end: '2023-12-31' })
          .setCreated('2023-01-01T10:00:00Z')
          .setAuthor({ reference: 'Practitioner/dr-1' })
          .build();

        expect(carePlan.id).toBe('builder-test');
        expect(carePlan.status).toBe('active');
        expect(carePlan.title).toBe('Comprehensive Care Plan');
        expect(carePlan.period?.start).toBe('2023-01-01');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'CP001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'CP002' })
          .build();

        expect(carePlan.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'assess-plan' }] })
          .addCategory({ coding: [{ code: 'careteam' }] })
          .build();

        expect(carePlan.category).toHaveLength(2);
      });

      it('should add goals', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addGoal({ reference: 'Goal/goal-1' })
          .addGoal({ reference: 'Goal/goal-2' })
          .build();

        expect(carePlan.goal).toHaveLength(2);
      });

      it('should add activities', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addActivity({ detail: { status: 'scheduled', description: 'Activity 1' } })
          .addActivity({ detail: { status: 'in-progress', description: 'Activity 2' } })
          .build();

        expect(carePlan.activity).toHaveLength(2);
      });

      it('should add addresses', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addAddresses({ reference: 'Condition/diabetes' })
          .addAddresses({ reference: 'Condition/hypertension' })
          .build();

        expect(carePlan.addresses).toHaveLength(2);
      });

      it('should add care teams', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addCareTeam({ reference: 'CareTeam/team-1' })
          .addCareTeam({ reference: 'CareTeam/team-2' })
          .build();

        expect(carePlan.careTeam).toHaveLength(2);
      });

      it('should add contributors', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addContributor({ reference: 'Practitioner/dr-1' })
          .addContributor({ reference: 'Practitioner/nurse-1' })
          .build();

        expect(carePlan.contributor).toHaveLength(2);
      });

      it('should add notes', () => {
        const carePlan = new CarePlanBuilder()
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(carePlan.note).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const carePlan = new CarePlanBuilder()
          .setId('chaining-test')
          .setStatus('active')
          .setIntent('plan')
          .setSubject({ reference: 'Patient/123' })
          .setTitle('Chained Plan')
          .addCategory({ coding: [{ code: 'diabetes' }] })
          .addGoal({ reference: 'Goal/goal-1' })
          .addNote({ text: 'Important' })
          .build();

        expect(carePlan.id).toBe('chaining-test');
        expect(carePlan.title).toBe('Chained Plan');
        expect(carePlan.category).toHaveLength(1);
        expect(carePlan.goal).toHaveLength(1);
        expect(carePlan.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Diabetes Management Plan', () => {
      it('should create a comprehensive diabetes care plan', () => {
        const carePlan = new CarePlanBuilder()
          .setId('diabetes-plan-001')
          .addIdentifier({ system: 'http://hospital.org/careplans', value: 'DM-2023-001' })
          .setStatus('active')
          .setIntent('plan')
          .addCategory({
            coding: [{ system: 'http://snomed.info/sct', code: '734163000', display: 'Care plan for diabetes' }],
          })
          .setTitle('Type 2 Diabetes Management Plan')
          .setDescription('Comprehensive care plan for managing Type 2 Diabetes including medication, lifestyle modifications, and monitoring')
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setPeriod({ start: '2023-06-01', end: '2024-06-01' })
          .setCreated('2023-06-01T10:00:00Z')
          .setAuthor({ reference: 'Practitioner/dr-smith', display: 'Dr. Smith (Endocrinologist)' })
          .addContributor({ reference: 'Practitioner/dietitian-1' })
          .addContributor({ reference: 'Practitioner/nurse-educator-1' })
          .addCareTeam({ reference: 'CareTeam/diabetes-team' })
          .addAddresses({ reference: 'Condition/diabetes-type-2', display: 'Type 2 Diabetes Mellitus' })
          .addAddresses({ reference: 'Condition/hypertension', display: 'Hypertension' })
          .addGoal({ reference: 'Goal/hba1c-target', display: 'HbA1c < 7%' })
          .addGoal({ reference: 'Goal/weight-loss', display: 'Lose 15 pounds' })
          .addGoal({ reference: 'Goal/bp-control', display: 'BP < 130/80' })
          .addActivity({
            detail: {
              kind: 'MedicationRequest',
              code: { coding: [{ code: 'medication-therapy', display: 'Medication therapy' }] },
              status: 'in-progress',
              scheduledTiming: { repeat: { frequency: 2, period: 1, periodUnit: 'd' } },
              description: 'Metformin 1000mg twice daily with meals',
            },
          })
          .addActivity({
            detail: {
              kind: 'ServiceRequest',
              code: { coding: [{ code: 'lab-monitoring', display: 'Laboratory monitoring' }] },
              status: 'scheduled',
              scheduledTiming: { repeat: { frequency: 1, period: 3, periodUnit: 'mo' } },
              description: 'HbA1c and lipid panel every 3 months',
            },
          })
          .addActivity({
            detail: {
              kind: 'Appointment',
              code: { coding: [{ code: 'nutrition-counseling' }] },
              status: 'scheduled',
              scheduledString: 'Monthly for 6 months',
              performer: [{ reference: 'Practitioner/dietitian-1' }],
              description: 'Nutrition counseling and meal planning',
            },
          })
          .addNote({ text: 'Patient motivated to make lifestyle changes. Wife is supportive.' })
          .build();

        expect(carePlan.status).toBe('active');
        expect(carePlan.addresses).toHaveLength(2);
        expect(carePlan.goal).toHaveLength(3);
        expect(carePlan.activity).toHaveLength(3);
        expectSerializationRoundtrip(carePlan);
      });
    });

    describe('Post-Surgery Recovery Plan', () => {
      it('should create a post-surgical care plan', () => {
        const carePlan = new CarePlan({
          id: 'post-surgery-001',
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'post-operative', display: 'Post-operative care' }] }],
          title: 'Hip Replacement Recovery Plan',
          description: 'Care plan for recovery following total hip replacement surgery',
          subject: { reference: 'Patient/patient-456' },
          period: { start: '2023-06-20', end: '2023-09-20' },
          created: '2023-06-20T14:00:00Z',
          author: { reference: 'Practitioner/orthopedic-surgeon' },
          addresses: [{ reference: 'Condition/post-op-hip-replacement' }],
          goal: [
            { reference: 'Goal/pain-management', display: 'Pain control' },
            { reference: 'Goal/mobility', display: 'Return to independent walking' },
            { reference: 'Goal/wound-healing', display: 'Complete wound healing' },
          ],
          activity: [
            {
              detail: {
                kind: 'ServiceRequest',
                code: { coding: [{ code: 'physical-therapy' }] },
                status: 'in-progress',
                scheduledTiming: { repeat: { frequency: 3, period: 1, periodUnit: 'wk' } },
                description: 'Physical therapy 3 times per week for 12 weeks',
              },
            },
            {
              detail: {
                kind: 'Appointment',
                code: { coding: [{ code: 'follow-up' }] },
                status: 'scheduled',
                scheduledString: '2 weeks, 6 weeks, 12 weeks post-op',
                description: 'Surgical follow-up appointments',
              },
            },
          ],
          note: [{ text: 'Patient doing well. Family support strong.' }],
        });

        expect(carePlan.intent).toBe('order');
        expect(carePlan.category![0].coding?.[0].code).toBe('post-operative');
        expect(carePlan.goal).toHaveLength(3);
        expectSerializationRoundtrip(carePlan);
      });
    });

    describe('Mental Health Care Plan', () => {
      it('should create a mental health care plan', () => {
        const carePlan = new CarePlan({
          id: 'mental-health-001',
          status: 'active',
          intent: 'plan',
          category: [{ coding: [{ code: 'mental-health', display: 'Mental health care' }] }],
          title: 'Depression Treatment Plan',
          description: 'Care plan for managing major depressive disorder',
          subject: { reference: 'Patient/patient-789' },
          period: { start: '2023-06-01', end: '2023-12-01' },
          created: '2023-06-01T09:00:00Z',
          author: { reference: 'Practitioner/psychiatrist-1' },
          addresses: [{ reference: 'Condition/major-depressive-disorder' }],
          goal: [
            { reference: 'Goal/symptom-reduction', display: 'Reduce depressive symptoms' },
            { reference: 'Goal/daily-functioning', display: 'Improve daily functioning' },
          ],
          activity: [
            {
              detail: {
                kind: 'MedicationRequest',
                code: { coding: [{ code: 'antidepressant' }] },
                status: 'in-progress',
                description: 'Sertraline 50mg daily',
              },
            },
            {
              detail: {
                kind: 'Appointment',
                code: { coding: [{ code: 'psychotherapy' }] },
                status: 'in-progress',
                scheduledTiming: { repeat: { frequency: 1, period: 1, periodUnit: 'wk' } },
                description: 'Weekly cognitive behavioral therapy sessions',
              },
            },
          ],
          note: [
            { text: 'Patient reports improved mood after 4 weeks of treatment' },
            { text: 'Continue monitoring for suicidal ideation' },
          ],
        });

        expect(carePlan.category![0].coding?.[0].code).toBe('mental-health');
        expect(carePlan.activity).toHaveLength(2);
        expectSerializationRoundtrip(carePlan);
      });
    });

    describe('Pregnancy Care Plan', () => {
      it('should create a prenatal care plan', () => {
        const carePlan = new CarePlan({
          id: 'prenatal-001',
          status: 'active',
          intent: 'plan',
          category: [{ coding: [{ code: 'prenatal', display: 'Prenatal care' }] }],
          title: 'Prenatal Care Plan',
          description: 'Comprehensive prenatal care for low-risk pregnancy',
          subject: { reference: 'Patient/pregnant-patient-001' },
          period: { start: '2023-03-01', end: '2023-12-01' },
          created: '2023-03-01T10:00:00Z',
          author: { reference: 'Practitioner/obgyn-1' },
          addresses: [{ reference: 'Condition/pregnancy' }],
          goal: [
            { reference: 'Goal/healthy-pregnancy', display: 'Maintain healthy pregnancy' },
            { reference: 'Goal/healthy-baby', display: 'Healthy baby delivery' },
          ],
          activity: [
            {
              detail: {
                kind: 'Appointment',
                code: { coding: [{ code: 'prenatal-visit' }] },
                status: 'in-progress',
                scheduledString: 'Monthly until 28 weeks, bi-weekly until 36 weeks, then weekly',
                description: 'Regular prenatal checkups',
              },
            },
            {
              detail: {
                kind: 'ServiceRequest',
                code: { coding: [{ code: 'ultrasound' }] },
                status: 'scheduled',
                scheduledString: '20 weeks gestation',
                description: 'Anatomy ultrasound',
              },
            },
          ],
          note: [{ text: 'First pregnancy. Patient taking prenatal vitamins.' }],
        });

        expect(carePlan.category![0].coding?.[0].code).toBe('prenatal');
        expect(carePlan.goal).toHaveLength(2);
        expectSerializationRoundtrip(carePlan);
      });
    });

    describe('End of Life Care Plan', () => {
      it('should create a palliative care plan', () => {
        const carePlan = new CarePlan({
          id: 'palliative-001',
          status: 'active',
          intent: 'plan',
          category: [{ coding: [{ code: 'palliative', display: 'Palliative care' }] }],
          title: 'Palliative Care Plan',
          description: 'Comfort-focused care plan for advanced cancer',
          subject: { reference: 'Patient/terminal-patient-001' },
          period: { start: '2023-06-01' },
          created: '2023-06-01T10:00:00Z',
          author: { reference: 'Practitioner/palliative-care-dr' },
          careTeam: [{ reference: 'CareTeam/hospice-team' }],
          addresses: [
            { reference: 'Condition/metastatic-cancer' },
            { reference: 'Condition/severe-pain' },
          ],
          goal: [
            { reference: 'Goal/pain-relief', display: 'Adequate pain control' },
            { reference: 'Goal/quality-of-life', display: 'Maintain quality of life' },
            { reference: 'Goal/dignity', display: 'Dignified end of life' },
          ],
          activity: [
            {
              detail: {
                kind: 'MedicationRequest',
                code: { coding: [{ code: 'pain-management' }] },
                status: 'in-progress',
                description: 'Morphine for pain control',
              },
            },
            {
              detail: {
                kind: 'ServiceRequest',
                code: { coding: [{ code: 'home-nursing' }] },
                status: 'in-progress',
                description: 'Daily home nursing visits',
              },
            },
          ],
          note: [
            { text: 'Patient wishes to remain at home' },
            { text: 'DNR order in place' },
            { text: 'Family very involved in care' },
          ],
        });

        expect(carePlan.category![0].coding?.[0].code).toBe('palliative');
        expect(carePlan.period?.end).toBeUndefined();
        expect(carePlan.note).toHaveLength(3);
        expectSerializationRoundtrip(carePlan);
      });
    });
  });
});
