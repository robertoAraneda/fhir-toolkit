import { describe, it, expect, beforeEach } from 'vitest';
import { Procedure, ProcedureBuilder } from '../../../src';
import type { IProcedure } from '@fhir-toolkit/r4-types';

describe('Procedure', () => {
  // Helper functions
  const expectSerializationRoundtrip = (procedure: Procedure) => {
    const json = procedure.toJSON();
    const restored = Procedure.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (procedure: Procedure) => {
    const clone = procedure.clone();
    expect(clone).not.toBe(procedure);
    expect(clone.toJSON()).toEqual(procedure.toJSON());
  };

  const expectNoUndefinedInJSON = (procedure: Procedure) => {
    const json = JSON.stringify(procedure.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal Procedure with required properties', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
        });

        expect(procedure.resourceType).toBe('Procedure');
        expect(procedure.status).toBe('completed');
        expect(procedure.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete Procedure with all properties', () => {
        const fullProcedure: IProcedure = {
          resourceType: 'Procedure',
          id: 'procedure-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Appendectomy</div>' },
          identifier: [{ system: 'http://hospital.org', value: 'PROC-001' }],
          instantiatesCanonical: ['http://example.org/protocol/appendectomy'],
          instantiatesUri: ['http://example.org/external/protocol'],
          basedOn: [{ reference: 'ServiceRequest/sr-001' }],
          partOf: [{ reference: 'Procedure/parent-proc' }],
          status: 'completed',
          statusReason: { coding: [{ code: 'completed-successfully' }] },
          category: { coding: [{ system: 'http://snomed.info/sct', code: '387713003', display: 'Surgical procedure' }] },
          code: { coding: [{ system: 'http://snomed.info/sct', code: '80146002', display: 'Appendectomy' }] },
          subject: { reference: 'Patient/patient-123' },
          encounter: { reference: 'Encounter/enc-456' },
          performedDateTime: '2023-06-15T10:00:00Z',
          recorder: { reference: 'Practitioner/recorder-1' },
          asserter: { reference: 'Practitioner/asserter-1' },
          performer: [
            {
              function: { coding: [{ code: 'surgeon' }] },
              actor: { reference: 'Practitioner/surgeon-1' },
              onBehalfOf: { reference: 'Organization/hospital-1' },
            },
          ],
          location: { reference: 'Location/or-1' },
          reasonCode: [{ coding: [{ code: 'appendicitis' }] }],
          reasonReference: [{ reference: 'Condition/appendicitis-condition' }],
          bodySite: [{ coding: [{ system: 'http://snomed.info/sct', code: '66754008', display: 'Appendix' }] }],
          outcome: { coding: [{ code: 'successful' }] },
          report: [{ reference: 'DiagnosticReport/pathology-1' }],
          complication: [{ coding: [{ code: 'none' }] }],
          complicationDetail: [{ reference: 'Condition/post-op-fever' }],
          followUp: [{ coding: [{ code: 'wound-check' }] }],
          note: [{ text: 'Procedure completed without complications' }],
          focalDevice: [
            {
              action: { coding: [{ code: 'implanted' }] },
              manipulated: { reference: 'Device/stapler-1' },
            },
          ],
          usedReference: [{ reference: 'Device/laparoscope-1' }],
          usedCode: [{ coding: [{ code: 'surgical-stapler' }] }],
        };

        const procedure = new Procedure(fullProcedure);

        expect(procedure.id).toBe('procedure-123');
        expect(procedure.status).toBe('completed');
        expect(procedure.code?.coding?.[0].code).toBe('80146002');
        expect(procedure.performer).toHaveLength(1);
        expect(procedure.bodySite).toHaveLength(1);
      });

      it('should create procedure with performedDateTime', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performedDateTime: '2023-06-15T14:30:00Z',
        });

        expect(procedure.performedDateTime).toBe('2023-06-15T14:30:00Z');
        expect(procedure.performedPeriod).toBeUndefined();
      });

      it('should create procedure with performedPeriod', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performedPeriod: {
            start: '2023-06-15T10:00:00Z',
            end: '2023-06-15T12:30:00Z',
          },
        });

        expect(procedure.performedPeriod?.start).toBe('2023-06-15T10:00:00Z');
        expect(procedure.performedPeriod?.end).toBe('2023-06-15T12:30:00Z');
        expect(procedure.performedDateTime).toBeUndefined();
      });

      it('should create procedure with performedAge', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performedAge: { value: 25, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
        });

        expect(procedure.performedAge?.value).toBe(25);
        expect(procedure.performedAge?.unit).toBe('years');
      });

      it('should create procedure with performedRange', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performedRange: {
            low: { value: 20, unit: 'years' },
            high: { value: 30, unit: 'years' },
          },
        });

        expect(procedure.performedRange?.low?.value).toBe(20);
        expect(procedure.performedRange?.high?.value).toBe(30);
      });

      it('should create procedure with performedString', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performedString: 'In early childhood',
        });

        expect(procedure.performedString).toBe('In early childhood');
      });

      it('should create procedure with multiple performers', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performer: [
            {
              function: { coding: [{ code: 'primary-surgeon' }] },
              actor: { reference: 'Practitioner/surgeon-1' },
            },
            {
              function: { coding: [{ code: 'assistant-surgeon' }] },
              actor: { reference: 'Practitioner/surgeon-2' },
            },
            {
              function: { coding: [{ code: 'anesthesiologist' }] },
              actor: { reference: 'Practitioner/anesthesiologist-1' },
            },
          ],
        });

        expect(procedure.performer).toHaveLength(3);
        expect(procedure.performer![0].function?.coding?.[0].code).toBe('primary-surgeon');
        expect(procedure.performer![2].function?.coding?.[0].code).toBe('anesthesiologist');
      });

      it('should create procedure with focal devices', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          focalDevice: [
            {
              action: { coding: [{ code: 'implanted' }] },
              manipulated: { reference: 'Device/pacemaker-1' },
            },
            {
              action: { coding: [{ code: 'removed' }] },
              manipulated: { reference: 'Device/old-pacemaker-1' },
            },
          ],
        });

        expect(procedure.focalDevice).toHaveLength(2);
        expect(procedure.focalDevice![0].action?.coding?.[0].code).toBe('implanted');
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal procedure to JSON', () => {
        const procedure = new Procedure({
          status: 'in-progress',
          subject: { reference: 'Patient/123' },
        });

        const json = procedure.toJSON();

        expect(json.resourceType).toBe('Procedure');
        expect(json.status).toBe('in-progress');
        expectNoUndefinedInJSON(procedure);
      });

      it('should serialize complete procedure to JSON', () => {
        const procedure = new Procedure({
          id: 'proc-001',
          status: 'completed',
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'surgery' }] },
          performer: [{ actor: { reference: 'Practitioner/dr-1' } }],
        });

        const json = procedure.toJSON();

        expect(json.id).toBe('proc-001');
        expect(json.performer).toHaveLength(1);
        expectSerializationRoundtrip(procedure);
      });

      it('should exclude undefined values from JSON', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
        });

        const json = procedure.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('performer');
        expect(json).not.toHaveProperty('location');
        expectNoUndefinedInJSON(procedure);
      });
    });

    describe('fromJSON', () => {
      it('should create Procedure from JSON', () => {
        const json: IProcedure = {
          resourceType: 'Procedure',
          id: 'from-json-test',
          status: 'completed',
          subject: { reference: 'Patient/p1' },
          code: { coding: [{ code: 'appendectomy' }] },
        };

        const procedure = Procedure.fromJSON(json);

        expect(procedure).toBeInstanceOf(Procedure);
        expect(procedure.id).toBe('from-json-test');
        expect(procedure.code?.coding?.[0].code).toBe('appendectomy');
      });
    });

    describe('Immutability', () => {
      let procedure: Procedure;

      beforeEach(() => {
        procedure = new Procedure({
          id: 'original',
          status: 'preparation',
          subject: { reference: 'Patient/original' },
          code: { coding: [{ code: 'original-code' }] },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = procedure.with({ status: 'completed' });

        expect(modified).not.toBe(procedure);
        expect(modified.status).toBe('completed');
        expect(procedure.status).toBe('preparation');
      });

      it('should handle with() for complex properties', () => {
        const modified = procedure.with({
          performer: [{ actor: { reference: 'Practitioner/new' } }],
          bodySite: [{ coding: [{ code: 'abdomen' }] }],
        });

        expect(modified.performer).toHaveLength(1);
        expect(modified.bodySite).toHaveLength(1);
        expect(procedure.performer).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = procedure.applyTransform((data) => ({
          status: 'completed',
          performedDateTime: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('completed');
        expect(modified.performedDateTime).toBe('2023-12-31T23:59:59Z');
        expect(procedure.status).toBe('preparation');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          performer: [{ actor: { reference: 'Practitioner/dr-1' } }],
        });

        const clone = procedure.clone();

        expect(clone).not.toBe(procedure);
        expect(clone.toJSON()).toEqual(procedure.toJSON());

        // Verify deep clone
        clone.performer![0].actor = { reference: 'Practitioner/modified' };
        expect(procedure.performer![0].actor.reference).toBe('Practitioner/dr-1');
      });

      it('should deep clone nested objects', () => {
        const procedure = new Procedure({
          status: 'completed',
          subject: { reference: 'Patient/123' },
          focalDevice: [
            { action: { coding: [{ code: 'implanted' }] }, manipulated: { reference: 'Device/dev-1' } },
          ],
        });

        expectDeepClone(procedure);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const procedure = new Procedure({
          id: 'proc-12345',
          status: 'completed',
          subject: { reference: 'Patient/123' },
        });

        expect(procedure.toString()).toContain('Procedure');
        expect(procedure.toString()).toContain('proc-12345');
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<IProcedure['status']> = [
        'preparation',
        'in-progress',
        'not-done',
        'on-hold',
        'stopped',
        'completed',
        'entered-in-error',
        'unknown',
      ];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const procedure = new Procedure({
            status,
            subject: { reference: 'Patient/123' },
          });

          expect(procedure.status).toBe(status);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal Procedure', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(procedure.resourceType).toBe('Procedure');
        expect(procedure.status).toBe('completed');
      });

      it('should build complete Procedure with all setters', () => {
        const procedure = new ProcedureBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setStatus('completed')
          .setStatusReason({ coding: [{ code: 'successful' }] })
          .setCategory({ coding: [{ code: 'surgical' }] })
          .setCode({ coding: [{ code: '80146002', display: 'Appendectomy' }] })
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setRecorder({ reference: 'Practitioner/recorder-1' })
          .setAsserter({ reference: 'Practitioner/asserter-1' })
          .setLocation({ reference: 'Location/or-1' })
          .setOutcome({ coding: [{ code: 'successful' }] })
          .build();

        expect(procedure.id).toBe('builder-test');
        expect(procedure.status).toBe('completed');
        expect(procedure.code?.coding?.[0].code).toBe('80146002');
        expect(procedure.location?.reference).toBe('Location/or-1');
      });
    });

    describe('Choice Type Setters', () => {
      it('should set performed as DateTime', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .setPerformed('DateTime', '2023-06-15T10:00:00Z')
          .build();

        expect(procedure.performedDateTime).toBe('2023-06-15T10:00:00Z');
      });

      it('should set performed as String', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .setPerformed('String', 'During childhood')
          .build();

        expect(procedure.performedString).toBe('During childhood');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'PROC001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'PROC002' })
          .build();

        expect(procedure.identifier).toHaveLength(2);
      });

      it('should add performers', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addPerformer({ actor: { reference: 'Practitioner/surgeon-1' } })
          .addPerformer({ actor: { reference: 'Practitioner/assistant-1' } })
          .build();

        expect(procedure.performer).toHaveLength(2);
      });

      it('should add body sites', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addBodySite({ coding: [{ code: 'abdomen' }] })
          .addBodySite({ coding: [{ code: 'appendix' }] })
          .build();

        expect(procedure.bodySite).toHaveLength(2);
      });

      it('should add basedOn references', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addBasedOn({ reference: 'ServiceRequest/sr-1' })
          .addBasedOn({ reference: 'CarePlan/cp-1' })
          .build();

        expect(procedure.basedOn).toHaveLength(2);
      });

      it('should add partOf references', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addPartOf({ reference: 'Procedure/parent-1' })
          .addPartOf({ reference: 'Procedure/parent-2' })
          .build();

        expect(procedure.partOf).toHaveLength(2);
      });

      it('should add reports', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addReport({ reference: 'DiagnosticReport/pathology-1' })
          .addReport({ reference: 'DocumentReference/op-note-1' })
          .build();

        expect(procedure.report).toHaveLength(2);
      });

      it('should add complications', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addComplication({ coding: [{ code: 'bleeding' }] })
          .addComplication({ coding: [{ code: 'infection' }] })
          .build();

        expect(procedure.complication).toHaveLength(2);
      });

      it('should add complication details', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addComplicationDetail({ reference: 'Condition/post-op-infection' })
          .build();

        expect(procedure.complicationDetail).toHaveLength(1);
      });

      it('should add follow up instructions', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addFollowUp({ coding: [{ code: 'wound-check' }] })
          .addFollowUp({ coding: [{ code: 'suture-removal' }] })
          .build();

        expect(procedure.followUp).toHaveLength(2);
      });

      it('should add notes', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'Procedure went well' })
          .addNote({ text: 'Patient tolerated procedure' })
          .build();

        expect(procedure.note).toHaveLength(2);
      });

      it('should add focal devices', () => {
        const procedure = new ProcedureBuilder()
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .addFocalDevice({ action: { coding: [{ code: 'implanted' }] }, manipulated: { reference: 'Device/dev-1' } })
          .addFocalDevice({ action: { coding: [{ code: 'removed' }] }, manipulated: { reference: 'Device/dev-2' } })
          .build();

        expect(procedure.focalDevice).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const procedure = new ProcedureBuilder()
          .setId('chaining-test')
          .setStatus('completed')
          .setSubject({ reference: 'Patient/123' })
          .setCode({ coding: [{ code: 'appendectomy' }] })
          .setCategory({ coding: [{ code: 'surgical' }] })
          .addPerformer({ actor: { reference: 'Practitioner/surgeon' } })
          .addNote({ text: 'Completed' })
          .build();

        expect(procedure.id).toBe('chaining-test');
        expect(procedure.performer).toHaveLength(1);
        expect(procedure.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Laparoscopic Appendectomy', () => {
      it('should create a complete laparoscopic appendectomy procedure', () => {
        const procedure = new ProcedureBuilder()
          .setId('appendectomy-001')
          .addIdentifier({ system: 'http://hospital.org/procedures', value: 'SURG-2023-001' })
          .setStatus('completed')
          .setCategory({
            coding: [{ system: 'http://snomed.info/sct', code: '387713003', display: 'Surgical procedure' }],
          })
          .setCode({
            coding: [{ system: 'http://snomed.info/sct', code: '6025007', display: 'Laparoscopic appendectomy' }],
            text: 'Laparoscopic Appendectomy',
          })
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/surgical-admission-456' })
          .setRecorder({ reference: 'Practitioner/surgeon-recorder' })
          .setAsserter({ reference: 'Practitioner/surgeon-1' })
          .addPerformer({
            function: { coding: [{ code: 'primary-surgeon', display: 'Primary Surgeon' }] },
            actor: { reference: 'Practitioner/surgeon-1', display: 'Dr. Smith' },
            onBehalfOf: { reference: 'Organization/hospital-main' },
          })
          .addPerformer({
            function: { coding: [{ code: 'first-assistant', display: 'First Assistant' }] },
            actor: { reference: 'Practitioner/surgeon-2', display: 'Dr. Jones' },
          })
          .addPerformer({
            function: { coding: [{ code: 'anesthesiologist' }] },
            actor: { reference: 'Practitioner/anesthesiologist-1' },
          })
          .setLocation({ reference: 'Location/operating-room-3' })
          .addBodySite({
            coding: [{ system: 'http://snomed.info/sct', code: '66754008', display: 'Appendix' }],
          })
          .setOutcome({
            coding: [{ system: 'http://snomed.info/sct', code: '385669000', display: 'Successful' }],
          })
          .addReport({ reference: 'DiagnosticReport/pathology-appendix' })
          .addFollowUp({
            coding: [{ code: 'wound-check', display: 'Wound check in 1 week' }],
          })
          .addNote({ text: 'Laparoscopic procedure converted to open due to adhesions' })
          .build();

        // Add performed period via with()
        const procedureWithTime = procedure.with({
          performedPeriod: {
            start: '2023-06-15T09:00:00Z',
            end: '2023-06-15T10:45:00Z',
          },
          reasonCode: [
            { coding: [{ system: 'http://snomed.info/sct', code: '74400008', display: 'Appendicitis' }] },
          ],
          reasonReference: [{ reference: 'Condition/acute-appendicitis' }],
        });

        expect(procedureWithTime.status).toBe('completed');
        expect(procedureWithTime.performer).toHaveLength(3);
        expect(procedureWithTime.performedPeriod?.start).toBe('2023-06-15T09:00:00Z');
        expectSerializationRoundtrip(procedureWithTime);
      });
    });

    describe('Device Implantation', () => {
      it('should create a pacemaker implantation procedure', () => {
        const procedure = new Procedure({
          id: 'pacemaker-implant-001',
          status: 'completed',
          category: { coding: [{ code: 'surgical' }] },
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '175135009', display: 'Implantation of cardiac pacemaker' }],
          },
          subject: { reference: 'Patient/cardiac-patient-123' },
          performedDateTime: '2023-06-15T14:00:00Z',
          performer: [
            {
              function: { coding: [{ code: 'cardiologist' }] },
              actor: { reference: 'Practitioner/cardiologist-1' },
            },
          ],
          location: { reference: 'Location/cath-lab-1' },
          reasonCode: [
            { coding: [{ code: 'bradycardia', display: 'Symptomatic bradycardia' }] },
          ],
          focalDevice: [
            {
              action: { coding: [{ code: 'implanted' }] },
              manipulated: { reference: 'Device/pacemaker-model-xyz' },
            },
          ],
          outcome: { coding: [{ code: 'successful' }] },
          note: [{ text: 'Dual-chamber pacemaker implanted. Good capture thresholds.' }],
        });

        expect(procedure.focalDevice).toHaveLength(1);
        expect(procedure.focalDevice![0].action?.coding?.[0].code).toBe('implanted');
        expectSerializationRoundtrip(procedure);
      });
    });

    describe('Procedure Not Done', () => {
      it('should create a procedure that was not performed', () => {
        const procedure = new Procedure({
          id: 'not-done-001',
          status: 'not-done',
          statusReason: {
            coding: [{ code: 'patient-refused', display: 'Patient refused procedure' }],
            text: 'Patient declined procedure after discussion of risks and benefits',
          },
          code: {
            coding: [{ code: 'colonoscopy', display: 'Colonoscopy' }],
          },
          subject: { reference: 'Patient/123' },
          performedDateTime: '2023-06-15',
          reasonCode: [
            { coding: [{ code: 'screening', display: 'Colon cancer screening' }] },
          ],
          note: [
            { text: 'Patient declined colonoscopy. Will discuss alternative screening options at next visit.' },
          ],
        });

        expect(procedure.status).toBe('not-done');
        expect(procedure.statusReason?.coding?.[0].code).toBe('patient-refused');
        expectSerializationRoundtrip(procedure);
      });
    });

    describe('Counseling Procedure', () => {
      it('should create a counseling/non-invasive procedure', () => {
        const procedure = new Procedure({
          id: 'counseling-001',
          status: 'completed',
          category: {
            coding: [{ code: 'counseling', display: 'Counseling' }],
          },
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '385763009', display: 'Diet education' }],
            text: 'Dietary counseling for diabetes management',
          },
          subject: { reference: 'Patient/diabetic-patient-123' },
          performedPeriod: {
            start: '2023-06-15T10:00:00Z',
            end: '2023-06-15T10:45:00Z',
          },
          performer: [
            {
              function: { coding: [{ code: 'dietitian' }] },
              actor: { reference: 'Practitioner/dietitian-1' },
            },
          ],
          reasonCode: [
            { coding: [{ code: 'diabetes-type-2', display: 'Type 2 Diabetes Mellitus' }] },
          ],
          note: [
            { text: 'Discussed carbohydrate counting and meal planning strategies.' },
          ],
          followUp: [
            { coding: [{ code: 'follow-up-visit', display: 'Follow-up in 4 weeks' }] },
          ],
        });

        expect(procedure.category?.coding?.[0].code).toBe('counseling');
        expect(procedure.performer).toHaveLength(1);
        expectSerializationRoundtrip(procedure);
      });
    });

    describe('Procedure with Complications', () => {
      it('should create a procedure with documented complications', () => {
        const procedure = new Procedure({
          id: 'surgery-with-complications-001',
          status: 'completed',
          code: {
            coding: [{ code: 'cholecystectomy', display: 'Cholecystectomy' }],
          },
          subject: { reference: 'Patient/123' },
          performedPeriod: {
            start: '2023-06-15T08:00:00Z',
            end: '2023-06-15T10:30:00Z',
          },
          performer: [
            { actor: { reference: 'Practitioner/surgeon-1' } },
          ],
          outcome: {
            coding: [{ code: 'completed-with-complications' }],
          },
          complication: [
            { coding: [{ code: 'excessive-bleeding', display: 'Excessive bleeding' }] },
            { coding: [{ code: 'bile-duct-injury', display: 'Bile duct injury' }] },
          ],
          complicationDetail: [
            { reference: 'Condition/post-op-bleeding' },
            { reference: 'Condition/bile-duct-injury-condition' },
          ],
          note: [
            { text: 'Intraoperative bleeding requiring transfusion. Bile duct injury repaired.' },
          ],
        });

        expect(procedure.complication).toHaveLength(2);
        expect(procedure.complicationDetail).toHaveLength(2);
        expectSerializationRoundtrip(procedure);
      });
    });

    describe('Historical Procedure', () => {
      it('should create a historical procedure with performedAge', () => {
        const procedure = new Procedure({
          id: 'historical-proc-001',
          status: 'completed',
          code: {
            coding: [{ code: 'tonsillectomy', display: 'Tonsillectomy' }],
          },
          subject: { reference: 'Patient/123' },
          performedAge: {
            value: 7,
            unit: 'years',
            system: 'http://unitsofmeasure.org',
            code: 'a',
          },
          asserter: { reference: 'Patient/123' },
          note: [
            { text: 'Patient reports having tonsils removed at age 7' },
          ],
        });

        expect(procedure.performedAge?.value).toBe(7);
        expect(procedure.performedAge?.unit).toBe('years');
        expectSerializationRoundtrip(procedure);
      });
    });

    describe('Procedure for Group', () => {
      it('should create a procedure for a Group subject', () => {
        const procedure = new Procedure({
          id: 'group-vaccination-001',
          status: 'completed',
          category: { coding: [{ code: 'immunization' }] },
          code: {
            coding: [{ code: 'flu-vaccination', display: 'Influenza vaccination' }],
          },
          subject: { reference: 'Group/nursing-home-residents', display: 'Nursing Home Residents' },
          performedPeriod: {
            start: '2023-10-01',
            end: '2023-10-15',
          },
          note: [{ text: 'Annual flu vaccination campaign for nursing home' }],
        });

        expect(procedure.subject?.reference).toBe('Group/nursing-home-residents');
        expectSerializationRoundtrip(procedure);
      });
    });
  });
});
