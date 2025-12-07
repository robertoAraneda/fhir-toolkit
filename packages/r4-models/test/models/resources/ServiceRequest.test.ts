import { describe, it, expect, beforeEach } from 'vitest';
import { ServiceRequest, ServiceRequestBuilder } from '../../../src';
import type { IServiceRequest } from '@fhir-toolkit/r4-types';

describe('ServiceRequest', () => {
  // Helper functions
  const expectSerializationRoundtrip = (serviceRequest: ServiceRequest) => {
    const json = serviceRequest.toJSON();
    const restored = ServiceRequest.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (serviceRequest: ServiceRequest) => {
    const clone = serviceRequest.clone();
    expect(clone).not.toBe(serviceRequest);
    expect(clone.toJSON()).toEqual(serviceRequest.toJSON());
  };

  const expectNoUndefinedInJSON = (serviceRequest: ServiceRequest) => {
    const json = JSON.stringify(serviceRequest.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal ServiceRequest with required properties', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
        });

        expect(serviceRequest.resourceType).toBe('ServiceRequest');
        expect(serviceRequest.status).toBe('active');
        expect(serviceRequest.intent).toBe('order');
        expect(serviceRequest.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete ServiceRequest with all properties', () => {
        const fullServiceRequest: IServiceRequest = {
          resourceType: 'ServiceRequest',
          id: 'sr-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Lab Order</div>' },
          identifier: [{ system: 'http://hospital.org/orders', value: 'LAB-001' }],
          requisition: { system: 'http://hospital.org/requisitions', value: 'REQ-001' },
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ system: 'http://snomed.info/sct', code: '108252007', display: 'Laboratory procedure' }] }],
          priority: 'routine',
          doNotPerform: false,
          code: { coding: [{ system: 'http://loinc.org', code: '24331-1', display: 'Lipid panel' }] },
          orderDetail: [{ coding: [{ code: 'fasting' }] }],
          subject: { reference: 'Patient/patient-123', display: 'John Doe' },
          encounter: { reference: 'Encounter/enc-456' },
          occurrenceDateTime: '2023-06-20T08:00:00Z',
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/dr-smith', display: 'Dr. Smith' },
          performerType: { coding: [{ code: 'laboratory', display: 'Laboratory' }] },
          performer: [{ reference: 'Organization/lab-main' }],
          locationReference: [{ reference: 'Location/lab-room-1' }],
          reasonCode: [{ coding: [{ code: 'routine-screening', display: 'Routine screening' }] }],
          reasonReference: [{ reference: 'Condition/hyperlipidemia' }],
          supportingInfo: [{ reference: 'Observation/previous-lipids' }],
          specimen: [{ reference: 'Specimen/blood-sample' }],
          bodySite: [{ coding: [{ code: 'left-arm', display: 'Left arm' }] }],
          note: [{ text: 'Patient should fast for 12 hours before test' }],
          patientInstruction: 'Please fast (no food or drink except water) for 12 hours before your lab appointment',
          insurance: [{ reference: 'Coverage/insurance-001' }],
          relevantHistory: [{ reference: 'Provenance/order-created' }],
        };

        const serviceRequest = new ServiceRequest(fullServiceRequest);

        expect(serviceRequest.id).toBe('sr-123');
        expect(serviceRequest.status).toBe('active');
        expect(serviceRequest.intent).toBe('order');
        expect(serviceRequest.priority).toBe('routine');
        expect(serviceRequest.code?.coding?.[0].code).toBe('24331-1');
        expect(serviceRequest.patientInstruction).toContain('fast');
      });

      it('should create service request with occurrenceDateTime', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          occurrenceDateTime: '2023-06-20T08:00:00Z',
        });

        expect(serviceRequest.occurrenceDateTime).toBe('2023-06-20T08:00:00Z');
        expect(serviceRequest.occurrencePeriod).toBeUndefined();
      });

      it('should create service request with occurrencePeriod', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          occurrencePeriod: {
            start: '2023-06-20',
            end: '2023-06-27',
          },
        });

        expect(serviceRequest.occurrencePeriod?.start).toBe('2023-06-20');
        expect(serviceRequest.occurrencePeriod?.end).toBe('2023-06-27');
      });

      it('should create service request with occurrenceTiming', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          occurrenceTiming: {
            repeat: {
              frequency: 1,
              period: 1,
              periodUnit: 'd',
            },
          },
        });

        expect(serviceRequest.occurrenceTiming?.repeat?.frequency).toBe(1);
        expect(serviceRequest.occurrenceTiming?.repeat?.periodUnit).toBe('d');
      });

      it('should create service request with asNeededBoolean', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          asNeededBoolean: true,
        });

        expect(serviceRequest.asNeededBoolean).toBe(true);
        expect(serviceRequest.asNeededCodeableConcept).toBeUndefined();
      });

      it('should create service request with asNeededCodeableConcept', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          asNeededCodeableConcept: { coding: [{ code: 'pain', display: 'For pain' }] },
        });

        expect(serviceRequest.asNeededCodeableConcept?.coding?.[0].code).toBe('pain');
        expect(serviceRequest.asNeededBoolean).toBeUndefined();
      });

      it('should create service request with quantityQuantity', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          quantityQuantity: { value: 5, unit: 'sessions' },
        });

        expect(serviceRequest.quantityQuantity?.value).toBe(5);
        expect(serviceRequest.quantityQuantity?.unit).toBe('sessions');
      });

      it('should create service request with multiple performers', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          performer: [
            { reference: 'Practitioner/dr-1', display: 'Dr. Primary' },
            { reference: 'Practitioner/dr-2', display: 'Dr. Assistant' },
          ],
        });

        expect(serviceRequest.performer).toHaveLength(2);
        expect(serviceRequest.performer![0].reference).toBe('Practitioner/dr-1');
      });

      it('should create service request with categories', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          category: [
            { coding: [{ code: 'imaging', display: 'Imaging' }] },
            { coding: [{ code: 'radiology', display: 'Radiology' }] },
          ],
        });

        expect(serviceRequest.category).toHaveLength(2);
      });

      it('should create service request with doNotPerform flag', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'contraindicated-procedure' }] },
          doNotPerform: true,
        });

        expect(serviceRequest.doNotPerform).toBe(true);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal service request to JSON', () => {
        const serviceRequest = new ServiceRequest({
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/123' },
        });

        const json = serviceRequest.toJSON();

        expect(json.resourceType).toBe('ServiceRequest');
        expect(json.status).toBe('draft');
        expect(json.intent).toBe('proposal');
        expectNoUndefinedInJSON(serviceRequest);
      });

      it('should serialize complete service request to JSON', () => {
        const serviceRequest = new ServiceRequest({
          id: 'sr-001',
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          code: { coding: [{ code: 'lab-test' }] },
          performer: [{ reference: 'Organization/lab' }],
        });

        const json = serviceRequest.toJSON();

        expect(json.id).toBe('sr-001');
        expect(json.performer).toHaveLength(1);
        expectSerializationRoundtrip(serviceRequest);
      });

      it('should exclude undefined values from JSON', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
        });

        const json = serviceRequest.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('performer');
        expect(json).not.toHaveProperty('specimen');
        expectNoUndefinedInJSON(serviceRequest);
      });
    });

    describe('fromJSON', () => {
      it('should create ServiceRequest from JSON', () => {
        const json: IServiceRequest = {
          resourceType: 'ServiceRequest',
          id: 'from-json-test',
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/p1' },
          code: { coding: [{ code: 'procedure' }] },
        };

        const serviceRequest = ServiceRequest.fromJSON(json);

        expect(serviceRequest).toBeInstanceOf(ServiceRequest);
        expect(serviceRequest.id).toBe('from-json-test');
        expect(serviceRequest.status).toBe('active');
      });
    });

    describe('Immutability', () => {
      let serviceRequest: ServiceRequest;

      beforeEach(() => {
        serviceRequest = new ServiceRequest({
          id: 'original',
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/original' },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = serviceRequest.with({ status: 'active', intent: 'order' });

        expect(modified).not.toBe(serviceRequest);
        expect(modified.status).toBe('active');
        expect(modified.intent).toBe('order');
        expect(serviceRequest.status).toBe('draft');
        expect(serviceRequest.intent).toBe('proposal');
      });

      it('should handle with() for complex properties', () => {
        const modified = serviceRequest.with({
          performer: [{ reference: 'Practitioner/new' }],
          reasonCode: [{ coding: [{ code: 'reason' }] }],
        });

        expect(modified.performer).toHaveLength(1);
        expect(modified.reasonCode).toHaveLength(1);
        expect(serviceRequest.performer).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = serviceRequest.applyTransform((data) => ({
          status: 'active',
          authoredOn: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('active');
        expect(modified.authoredOn).toBe('2023-12-31T23:59:59Z');
        expect(serviceRequest.status).toBe('draft');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          performer: [{ reference: 'Practitioner/dr-1' }],
        });

        const clone = serviceRequest.clone();

        expect(clone).not.toBe(serviceRequest);
        expect(clone.toJSON()).toEqual(serviceRequest.toJSON());

        // Verify deep clone
        clone.performer![0] = { reference: 'Practitioner/modified' };
        expect(serviceRequest.performer![0].reference).toBe('Practitioner/dr-1');
      });

      it('should deep clone nested objects', () => {
        const serviceRequest = new ServiceRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          occurrenceTiming: { repeat: { frequency: 1, period: 1, periodUnit: 'd' } },
        });

        expectDeepClone(serviceRequest);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const serviceRequest = new ServiceRequest({
          id: 'sr-12345',
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
        });

        expect(serviceRequest.toString()).toContain('ServiceRequest');
        expect(serviceRequest.toString()).toContain('sr-12345');
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<IServiceRequest['status']> = [
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
          const serviceRequest = new ServiceRequest({
            status,
            intent: 'order',
            subject: { reference: 'Patient/123' },
          });

          expect(serviceRequest.status).toBe(status);
        });
      });
    });

    describe('Intent Types', () => {
      const intentTypes: Array<IServiceRequest['intent']> = [
        'proposal',
        'plan',
        'directive',
        'order',
        'original-order',
        'reflex-order',
        'filler-order',
        'instance-order',
        'option',
      ];

      intentTypes.forEach((intent) => {
        it(`should accept intent: ${intent}`, () => {
          const serviceRequest = new ServiceRequest({
            status: 'active',
            intent,
            subject: { reference: 'Patient/123' },
          });

          expect(serviceRequest.intent).toBe(intent);
        });
      });
    });

    describe('Priority Types', () => {
      const priorityTypes: Array<NonNullable<IServiceRequest['priority']>> = [
        'routine',
        'urgent',
        'asap',
        'stat',
      ];

      priorityTypes.forEach((priority) => {
        it(`should accept priority: ${priority}`, () => {
          const serviceRequest = new ServiceRequest({
            status: 'active',
            intent: 'order',
            priority,
            subject: { reference: 'Patient/123' },
          });

          expect(serviceRequest.priority).toBe(priority);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal ServiceRequest', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(serviceRequest.resourceType).toBe('ServiceRequest');
        expect(serviceRequest.status).toBe('active');
        expect(serviceRequest.intent).toBe('order');
      });

      it('should build complete ServiceRequest with all setters', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setStatus('active')
          .setIntent('order')
          .setPriority('routine')
          .setDoNotPerform(false)
          .setCode({ coding: [{ code: 'lab-test' }] })
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setAuthoredOn('2023-06-15T10:00:00Z')
          .setRequester({ reference: 'Practitioner/dr-1' })
          .setPerformerType({ coding: [{ code: 'lab' }] })
          .setPatientInstruction('Please follow instructions')
          .build();

        expect(serviceRequest.id).toBe('builder-test');
        expect(serviceRequest.status).toBe('active');
        expect(serviceRequest.priority).toBe('routine');
        expect(serviceRequest.patientInstruction).toBe('Please follow instructions');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'SR001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'SR002' })
          .build();

        expect(serviceRequest.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'laboratory' }] })
          .addCategory({ coding: [{ code: 'imaging' }] })
          .build();

        expect(serviceRequest.category).toHaveLength(2);
      });

      it('should add performers', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addPerformer({ reference: 'Organization/lab-1' })
          .addPerformer({ reference: 'Organization/lab-2' })
          .build();

        expect(serviceRequest.performer).toHaveLength(2);
      });

      it('should add supporting info', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addSupportingInfo({ reference: 'Observation/obs-1' })
          .addSupportingInfo({ reference: 'DiagnosticReport/report-1' })
          .build();

        expect(serviceRequest.supportingInfo).toHaveLength(2);
      });

      it('should add notes', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(serviceRequest.note).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setId('chaining-test')
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .setCode({ coding: [{ code: 'procedure' }] })
          .setPriority('stat')
          .addCategory({ coding: [{ code: 'emergency' }] })
          .addNote({ text: 'Urgent' })
          .build();

        expect(serviceRequest.id).toBe('chaining-test');
        expect(serviceRequest.priority).toBe('stat');
        expect(serviceRequest.category).toHaveLength(1);
        expect(serviceRequest.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Laboratory Order', () => {
      it('should create a comprehensive laboratory service request', () => {
        const serviceRequest = new ServiceRequestBuilder()
          .setId('lab-order-001')
          .addIdentifier({ system: 'http://hospital.org/lab-orders', value: 'LAB-2023-001' })
          .setRequisition({ system: 'http://hospital.org/requisitions', value: 'REQ-001' })
          .setStatus('active')
          .setIntent('order')
          .addCategory({
            coding: [{ system: 'http://snomed.info/sct', code: '108252007', display: 'Laboratory procedure' }],
          })
          .setPriority('routine')
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '24331-1', display: 'Lipid panel - Serum or Plasma' }],
            text: 'Lipid Panel',
          })
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/annual-physical-456' })
          .setAuthoredOn('2023-06-15T10:00:00Z')
          .setRequester({ reference: 'Practitioner/dr-smith', display: 'Dr. Smith (Primary Care)' })
          .setPerformerType({ coding: [{ code: 'laboratory', display: 'Clinical Laboratory' }] })
          .addPerformer({ reference: 'Organization/lab-main', display: 'Main Hospital Laboratory' })
          .setPatientInstruction('Please fast (no food or drink except water) for 12 hours before your lab appointment. Take your regular medications with water.')
          .addNote({ text: 'Patient has history of hyperlipidemia' })
          .build();

        // Add additional properties via with()
        const serviceRequestComplete = serviceRequest.with({
          occurrenceDateTime: '2023-06-20T08:00:00Z',
          specimen: [{ reference: 'Specimen/blood-sample' }],
          bodySite: [{ coding: [{ code: 'left-antecubital-fossa', display: 'Left antecubital fossa' }] }],
          reasonCode: [{ coding: [{ code: 'routine-screening', display: 'Routine health screening' }] }],
        });

        expect(serviceRequestComplete.status).toBe('active');
        expect(serviceRequestComplete.intent).toBe('order');
        expect(serviceRequestComplete.priority).toBe('routine');
        expect(serviceRequestComplete.patientInstruction).toContain('fast');
        expectSerializationRoundtrip(serviceRequestComplete);
      });
    });

    describe('Imaging Order', () => {
      it('should create a radiology imaging request', () => {
        const serviceRequest = new ServiceRequest({
          id: 'imaging-order-001',
          identifier: [{ system: 'http://hospital.org/radiology', value: 'RAD-2023-001' }],
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'imaging', display: 'Imaging' }] }],
          priority: 'urgent',
          code: {
            coding: [
              { system: 'http://loinc.org', code: '30746-2', display: 'CT Chest WO contrast' },
            ],
            text: 'CT Chest without contrast',
          },
          subject: { reference: 'Patient/patient-456' },
          encounter: { reference: 'Encounter/er-visit-789' },
          occurrenceDateTime: '2023-06-15T14:00:00Z',
          authoredOn: '2023-06-15T12:00:00Z',
          requester: { reference: 'Practitioner/er-doctor' },
          performerType: { coding: [{ code: 'radiology-dept' }] },
          performer: [{ reference: 'Organization/radiology-dept' }],
          locationReference: [{ reference: 'Location/imaging-suite-2' }],
          reasonCode: [{ coding: [{ code: 'chest-pain', display: 'Acute chest pain' }] }],
          reasonReference: [{ reference: 'Condition/suspected-pe' }],
          patientInstruction: 'Remove all metal objects before the scan',
          note: [{ text: 'Rule out pulmonary embolism' }],
        });

        expect(serviceRequest.priority).toBe('urgent');
        expect(serviceRequest.category![0].coding?.[0].code).toBe('imaging');
        expect(serviceRequest.reasonCode![0].coding?.[0].code).toBe('chest-pain');
        expectSerializationRoundtrip(serviceRequest);
      });
    });

    describe('Physical Therapy Referral', () => {
      it('should create a physical therapy service request', () => {
        const serviceRequest = new ServiceRequest({
          id: 'pt-referral-001',
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'therapy', display: 'Therapy' }] }],
          code: {
            coding: [{ code: 'physical-therapy', display: 'Physical therapy' }],
            text: 'Physical Therapy Evaluation and Treatment',
          },
          subject: { reference: 'Patient/post-op-patient' },
          occurrencePeriod: { start: '2023-06-20', end: '2023-09-20' },
          occurrenceTiming: {
            repeat: {
              frequency: 3,
              period: 1,
              periodUnit: 'wk',
              boundsDuration: { value: 12, unit: 'weeks' },
            },
          },
          quantityQuantity: { value: 36, unit: 'sessions' },
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/orthopedic-surgeon' },
          performerType: { coding: [{ code: 'physical-therapist' }] },
          reasonCode: [{ coding: [{ code: 'post-op-rehab', display: 'Post-operative rehabilitation' }] }],
          reasonReference: [{ reference: 'Procedure/total-hip-replacement' }],
          patientInstruction: 'Attend physical therapy 3 times per week for 12 weeks. Bring comfortable clothing and athletic shoes.',
          note: [
            { text: 'Focus on hip strength and mobility' },
            { text: 'Patient goal: independent ambulation without assistive device' },
          ],
        });

        expect(serviceRequest.quantityQuantity?.value).toBe(36);
        expect(serviceRequest.occurrenceTiming?.repeat?.frequency).toBe(3);
        expect(serviceRequest.note).toHaveLength(2);
        expectSerializationRoundtrip(serviceRequest);
      });
    });

    describe('Home Health Services', () => {
      it('should create a home health nursing service request', () => {
        const serviceRequest = new ServiceRequest({
          id: 'home-health-001',
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'home-health', display: 'Home Health' }] }],
          code: {
            coding: [{ code: 'skilled-nursing', display: 'Skilled nursing visits' }],
          },
          subject: { reference: 'Patient/elderly-patient' },
          occurrenceTiming: {
            repeat: {
              frequency: 2,
              period: 1,
              periodUnit: 'wk',
              boundsDuration: { value: 8, unit: 'weeks' },
            },
          },
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/primary-care-dr' },
          performerType: { coding: [{ code: 'registered-nurse' }] },
          locationCode: [{ coding: [{ code: 'home', display: 'Patient Home' }] }],
          reasonCode: [{ coding: [{ code: 'wound-care', display: 'Wound care management' }] }],
          reasonReference: [{ reference: 'Condition/diabetic-foot-ulcer' }],
          patientInstruction: 'Please have wound care supplies ready for nurse visit',
          note: [{ text: 'Monitor healing, change dressing, assess for infection' }],
        });

        expect(serviceRequest.occurrenceTiming?.repeat?.frequency).toBe(2);
        expect(serviceRequest.locationCode![0].coding?.[0].code).toBe('home');
        expectSerializationRoundtrip(serviceRequest);
      });
    });

    describe('Surgical Procedure Request', () => {
      it('should create a surgical procedure service request', () => {
        const serviceRequest = new ServiceRequest({
          id: 'surgery-request-001',
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'surgical', display: 'Surgical procedure' }] }],
          priority: 'urgent',
          code: {
            coding: [
              { system: 'http://snomed.info/sct', code: '80146002', display: 'Appendectomy' },
            ],
            text: 'Emergency Appendectomy',
          },
          subject: { reference: 'Patient/acute-patient' },
          encounter: { reference: 'Encounter/er-admission' },
          occurrenceDateTime: '2023-06-15T20:00:00Z',
          authoredOn: '2023-06-15T18:00:00Z',
          requester: { reference: 'Practitioner/er-surgeon' },
          performerType: { coding: [{ code: 'general-surgeon' }] },
          performer: [{ reference: 'Practitioner/surgeon-on-call' }],
          locationReference: [{ reference: 'Location/operating-room-2' }],
          reasonCode: [{ coding: [{ code: 'acute-appendicitis', display: 'Acute appendicitis' }] }],
          reasonReference: [{ reference: 'Condition/appendicitis' }],
          supportingInfo: [
            { reference: 'DiagnosticReport/ct-abdomen' },
            { reference: 'Observation/elevated-wbc' },
          ],
          note: [
            { text: 'Patient presents with acute abdominal pain, elevated WBC, CT confirms appendicitis' },
            { text: 'Patient NPO, IV antibiotics started' },
          ],
        });

        expect(serviceRequest.priority).toBe('urgent');
        expect(serviceRequest.supportingInfo).toHaveLength(2);
        expect(serviceRequest.note).toHaveLength(2);
        expectSerializationRoundtrip(serviceRequest);
      });
    });

    describe('Consultation Request', () => {
      it('should create a specialist consultation request', () => {
        const serviceRequest = new ServiceRequest({
          id: 'consult-001',
          status: 'active',
          intent: 'order',
          category: [{ coding: [{ code: 'consult', display: 'Consultation' }] }],
          code: {
            coding: [{ code: 'cardiology-consult', display: 'Cardiology consultation' }],
          },
          subject: { reference: 'Patient/cardiac-patient' },
          occurrenceDateTime: '2023-06-20T14:00:00Z',
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/primary-care-dr', display: 'Dr. Primary Care' },
          performerType: { coding: [{ code: 'cardiologist' }] },
          performer: [{ reference: 'Practitioner/cardiologist-1', display: 'Dr. Heart Specialist' }],
          reasonCode: [{ coding: [{ code: 'chest-pain', display: 'Recurrent chest pain' }] }],
          reasonReference: [{ reference: 'Condition/angina' }],
          supportingInfo: [
            { reference: 'Observation/ecg-abnormal' },
            { reference: 'DiagnosticReport/stress-test' },
          ],
          note: [
            { text: 'Patient with recurrent chest pain despite medical management' },
            { text: 'Consider cardiac catheterization' },
          ],
        });

        expect(serviceRequest.category![0].coding?.[0].code).toBe('consult');
        expect(serviceRequest.performer![0].display).toContain('Heart Specialist');
        expectSerializationRoundtrip(serviceRequest);
      });
    });
  });
});
