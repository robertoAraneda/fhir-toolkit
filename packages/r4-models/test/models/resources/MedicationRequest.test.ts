import { describe, it, expect, beforeEach } from 'vitest';
import { MedicationRequest, MedicationRequestBuilder } from '../../../src';
import type { IMedicationRequest } from '@fhir-toolkit/r4-types';

describe('MedicationRequest', () => {
  // Helper functions
  const expectSerializationRoundtrip = (request: MedicationRequest) => {
    const json = request.toJSON();
    const restored = MedicationRequest.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (request: MedicationRequest) => {
    const clone = request.clone();
    expect(clone).not.toBe(request);
    expect(clone.toJSON()).toEqual(request.toJSON());
  };

  const expectNoUndefinedInJSON = (request: MedicationRequest) => {
    const json = JSON.stringify(request.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal MedicationRequest with required properties', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'aspirin' }] },
        });

        expect(request.resourceType).toBe('MedicationRequest');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.subject).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete MedicationRequest with all properties', () => {
        const fullRequest: IMedicationRequest = {
          resourceType: 'MedicationRequest',
          id: 'medrx-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Prescription</div>' },
          identifier: [{ system: 'http://pharmacy.org', value: 'RX001' }],
          status: 'active',
          statusReason: { coding: [{ code: 'clarification-needed' }] },
          intent: 'order',
          category: [{ coding: [{ code: 'outpatient' }] }],
          priority: 'routine',
          doNotPerform: false,
          reportedBoolean: false,
          medicationCodeableConcept: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '1049221', display: 'Acetaminophen 325 MG' }],
          },
          subject: { reference: 'Patient/123' },
          encounter: { reference: 'Encounter/456' },
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/dr-smith' },
          performer: { reference: 'Organization/pharmacy-main' },
          performerType: { coding: [{ code: 'pharmacist' }] },
          recorder: { reference: 'Practitioner/nurse-jones' },
          reasonCode: [{ coding: [{ code: 'headache' }] }],
          reasonReference: [{ reference: 'Condition/migraine' }],
          basedOn: [{ reference: 'CarePlan/pain-management' }],
          groupIdentifier: { value: 'group-001' },
          courseOfTherapyType: { coding: [{ code: 'acute' }] },
          insurance: [{ reference: 'Coverage/insurance-001' }],
          note: [{ text: 'Take with food' }],
          dosageInstruction: [
            {
              sequence: 1,
              text: 'Take 2 tablets every 6 hours as needed',
              timing: { repeat: { frequency: 4, period: 1, periodUnit: 'd' } },
              asNeededBoolean: true,
              doseAndRate: [{ doseQuantity: { value: 2, unit: 'tablets' } }],
            },
          ],
          dispenseRequest: {
            validityPeriod: { start: '2023-06-15', end: '2023-12-15' },
            numberOfRepeatsAllowed: 3,
            quantity: { value: 60, unit: 'tablets' },
            expectedSupplyDuration: { value: 30, unit: 'd' },
          },
          substitution: {
            allowedBoolean: true,
            reason: { coding: [{ code: 'cost' }] },
          },
          priorPrescription: { reference: 'MedicationRequest/prior-rx' },
          detectedIssue: [{ reference: 'DetectedIssue/drug-interaction' }],
          eventHistory: [{ reference: 'Provenance/prescription-created' }],
        };

        const request = new MedicationRequest(fullRequest);

        expect(request.id).toBe('medrx-123');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.priority).toBe('routine');
        expect(request.medicationCodeableConcept?.coding?.[0].code).toBe('1049221');
        expect(request.dosageInstruction).toHaveLength(1);
        expect(request.dispenseRequest?.numberOfRepeatsAllowed).toBe(3);
        expect(request.substitution?.allowedBoolean).toBe(true);
      });

      it('should create request with medication as CodeableConcept', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '197361', display: 'Lisinopril 10 MG' }],
            text: 'Lisinopril 10mg tablet',
          },
        });

        expect(request.medicationCodeableConcept?.coding?.[0].code).toBe('197361');
        expect(request.medicationReference).toBeUndefined();
      });

      it('should create request with medication as Reference', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationReference: { reference: 'Medication/med-001' },
        });

        expect(request.medicationReference?.reference).toBe('Medication/med-001');
        expect(request.medicationCodeableConcept).toBeUndefined();
      });

      it('should create request with dosage instructions', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
          dosageInstruction: [
            {
              sequence: 1,
              text: 'Take 1 tablet in the morning',
              timing: {
                repeat: { frequency: 1, period: 1, periodUnit: 'd', when: ['MORN'] },
              },
              route: { coding: [{ code: 'PO', display: 'Oral' }] },
              doseAndRate: [{ doseQuantity: { value: 1, unit: 'tablet' } }],
            },
            {
              sequence: 2,
              text: 'Take 1 tablet at night',
              timing: {
                repeat: { frequency: 1, period: 1, periodUnit: 'd', when: ['NIGHT'] },
              },
              route: { coding: [{ code: 'PO', display: 'Oral' }] },
              doseAndRate: [{ doseQuantity: { value: 1, unit: 'tablet' } }],
            },
          ],
        });

        expect(request.dosageInstruction).toHaveLength(2);
        expect(request.dosageInstruction![0].sequence).toBe(1);
        expect(request.dosageInstruction![1].sequence).toBe(2);
      });

      it('should create request with dispense request', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
          dispenseRequest: {
            initialFill: {
              quantity: { value: 30, unit: 'tablets' },
              duration: { value: 30, unit: 'd' },
            },
            dispenseInterval: { value: 30, unit: 'd' },
            validityPeriod: { start: '2023-01-01', end: '2024-01-01' },
            numberOfRepeatsAllowed: 11,
            quantity: { value: 30, unit: 'tablets' },
            expectedSupplyDuration: { value: 30, unit: 'd' },
            performer: { reference: 'Organization/pharmacy' },
          },
        });

        expect(request.dispenseRequest?.numberOfRepeatsAllowed).toBe(11);
        expect(request.dispenseRequest?.quantity?.value).toBe(30);
      });

      it('should create request with substitution rules', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'brand-name-med' }] },
          substitution: {
            allowedBoolean: false,
            reason: { coding: [{ code: 'brand-required', display: 'Brand name required' }] },
          },
        });

        expect(request.substitution?.allowedBoolean).toBe(false);
        expect(request.substitution?.reason?.coding?.[0].code).toBe('brand-required');
      });

      it('should create request with doNotPerform flag', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'contraindicated-med' }] },
          doNotPerform: true,
        });

        expect(request.doNotPerform).toBe(true);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal request to JSON', () => {
        const request = new MedicationRequest({
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
        });

        const json = request.toJSON();

        expect(json.resourceType).toBe('MedicationRequest');
        expect(json.status).toBe('draft');
        expect(json.intent).toBe('proposal');
        expectNoUndefinedInJSON(request);
      });

      it('should serialize complete request to JSON', () => {
        const request = new MedicationRequest({
          id: 'rx-001',
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
          dosageInstruction: [{ text: 'Take as directed' }],
        });

        const json = request.toJSON();

        expect(json.id).toBe('rx-001');
        expect(json.dosageInstruction).toHaveLength(1);
        expectSerializationRoundtrip(request);
      });

      it('should exclude undefined values from JSON', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
        });

        const json = request.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('dispenseRequest');
        expect(json).not.toHaveProperty('substitution');
        expectNoUndefinedInJSON(request);
      });
    });

    describe('fromJSON', () => {
      it('should create MedicationRequest from JSON', () => {
        const json: IMedicationRequest = {
          resourceType: 'MedicationRequest',
          id: 'from-json-test',
          status: 'completed',
          intent: 'order',
          subject: { reference: 'Patient/p1' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
        };

        const request = MedicationRequest.fromJSON(json);

        expect(request).toBeInstanceOf(MedicationRequest);
        expect(request.id).toBe('from-json-test');
        expect(request.status).toBe('completed');
      });
    });

    describe('Immutability', () => {
      let request: MedicationRequest;

      beforeEach(() => {
        request = new MedicationRequest({
          id: 'original',
          status: 'draft',
          intent: 'proposal',
          subject: { reference: 'Patient/original' },
          medicationCodeableConcept: { coding: [{ code: 'original-med' }] },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = request.with({ status: 'active', intent: 'order' });

        expect(modified).not.toBe(request);
        expect(modified.status).toBe('active');
        expect(modified.intent).toBe('order');
        expect(request.status).toBe('draft');
        expect(request.intent).toBe('proposal');
      });

      it('should handle with() for complex properties', () => {
        const modified = request.with({
          dosageInstruction: [{ text: 'New dosage' }],
          dispenseRequest: { quantity: { value: 30 } },
        });

        expect(modified.dosageInstruction).toHaveLength(1);
        expect(modified.dispenseRequest?.quantity?.value).toBe(30);
        expect(request.dosageInstruction).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = request.applyTransform((data) => ({
          status: 'active',
          authoredOn: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('active');
        expect(modified.authoredOn).toBe('2023-12-31T23:59:59Z');
        expect(request.status).toBe('draft');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
          dosageInstruction: [{ text: 'Take daily' }],
        });

        const clone = request.clone();

        expect(clone).not.toBe(request);
        expect(clone.toJSON()).toEqual(request.toJSON());

        // Verify deep clone
        clone.dosageInstruction![0].text = 'Modified';
        expect(request.dosageInstruction![0].text).toBe('Take daily');
      });

      it('should deep clone nested objects', () => {
        const request = new MedicationRequest({
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
          dispenseRequest: {
            validityPeriod: { start: '2023-01-01' },
            quantity: { value: 30 },
          },
        });

        expectDeepClone(request);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const request = new MedicationRequest({
          id: 'rx-12345',
          status: 'active',
          intent: 'order',
          subject: { reference: 'Patient/123' },
          medicationCodeableConcept: { coding: [{ code: 'med' }] },
        });

        expect(request.toString()).toContain('MedicationRequest');
        expect(request.toString()).toContain('rx-12345');
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<IMedicationRequest['status']> = [
        'active',
        'on-hold',
        'cancelled',
        'completed',
        'entered-in-error',
        'stopped',
        'draft',
        'unknown',
      ];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const request = new MedicationRequest({
            status,
            intent: 'order',
            subject: { reference: 'Patient/123' },
            medicationCodeableConcept: { coding: [{ code: 'med' }] },
          });

          expect(request.status).toBe(status);
        });
      });
    });

    describe('Intent Types', () => {
      const intentTypes: Array<IMedicationRequest['intent']> = [
        'proposal',
        'plan',
        'order',
        'original-order',
        'reflex-order',
        'filler-order',
        'instance-order',
        'option',
      ];

      intentTypes.forEach((intent) => {
        it(`should accept intent: ${intent}`, () => {
          const request = new MedicationRequest({
            status: 'active',
            intent,
            subject: { reference: 'Patient/123' },
            medicationCodeableConcept: { coding: [{ code: 'med' }] },
          });

          expect(request.intent).toBe(intent);
        });
      });
    });

    describe('Priority Types', () => {
      const priorityTypes: Array<NonNullable<IMedicationRequest['priority']>> = [
        'routine',
        'urgent',
        'asap',
        'stat',
      ];

      priorityTypes.forEach((priority) => {
        it(`should accept priority: ${priority}`, () => {
          const request = new MedicationRequest({
            status: 'active',
            intent: 'order',
            priority,
            subject: { reference: 'Patient/123' },
            medicationCodeableConcept: { coding: [{ code: 'med' }] },
          });

          expect(request.priority).toBe(priority);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal MedicationRequest', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(request.resourceType).toBe('MedicationRequest');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
      });

      it('should build complete MedicationRequest with all setters', () => {
        const request = new MedicationRequestBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setStatus('active')
          .setStatusReason({ coding: [{ code: 'on-formulary' }] })
          .setIntent('order')
          .setPriority('urgent')
          .setDoNotPerform(false)
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setAuthoredOn('2023-06-15T10:00:00Z')
          .setRequester({ reference: 'Practitioner/dr-1' })
          .setPerformer({ reference: 'Organization/pharmacy' })
          .setPerformerType({ coding: [{ code: 'pharmacist' }] })
          .setRecorder({ reference: 'Practitioner/nurse-1' })
          .setGroupIdentifier({ value: 'group-1' })
          .setCourseOfTherapyType({ coding: [{ code: 'continuous' }] })
          .setDispenseRequest({ quantity: { value: 30 } })
          .setSubstitution({ allowedBoolean: true })
          .setPriorPrescription({ reference: 'MedicationRequest/prior' })
          .build();

        expect(request.id).toBe('builder-test');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.priority).toBe('urgent');
        expect(request.requester?.reference).toBe('Practitioner/dr-1');
        expect(request.dispenseRequest?.quantity?.value).toBe(30);
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://pharmacy.org', value: 'RX001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'HOSP001' })
          .build();

        expect(request.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'inpatient' }] })
          .addCategory({ coding: [{ code: 'discharge' }] })
          .build();

        expect(request.category).toHaveLength(2);
      });

      it('should add dosage instructions', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addDosageInstruction({
            sequence: 1,
            text: 'Morning dose',
            timing: { repeat: { when: ['MORN'] } },
          })
          .addDosageInstruction({
            sequence: 2,
            text: 'Evening dose',
            timing: { repeat: { when: ['EVE'] } },
          })
          .build();

        expect(request.dosageInstruction).toHaveLength(2);
      });

      it('should add notes', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(request.note).toHaveLength(2);
      });

      it('should add basedOn references', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addBasedOn({ reference: 'CarePlan/cp-1' })
          .addBasedOn({ reference: 'ServiceRequest/sr-1' })
          .build();

        expect(request.basedOn).toHaveLength(2);
      });

      it('should add insurance references', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addInsurance({ reference: 'Coverage/primary' })
          .addInsurance({ reference: 'Coverage/secondary' })
          .build();

        expect(request.insurance).toHaveLength(2);
      });

      it('should add detected issues', () => {
        const request = new MedicationRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .addDetectedIssue({ reference: 'DetectedIssue/interaction-1' })
          .addDetectedIssue({ reference: 'DetectedIssue/allergy-1' })
          .build();

        expect(request.detectedIssue).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const request = new MedicationRequestBuilder()
          .setId('chaining-test')
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .setPriority('stat')
          .setAuthoredOn('2023-06-15T10:00:00Z')
          .addCategory({ coding: [{ code: 'outpatient' }] })
          .addDosageInstruction({ text: 'Take as directed' })
          .addNote({ text: 'Important' })
          .build();

        expect(request.id).toBe('chaining-test');
        expect(request.priority).toBe('stat');
        expect(request.category).toHaveLength(1);
        expect(request.dosageInstruction).toHaveLength(1);
        expect(request.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Outpatient Prescription', () => {
      it('should create a complete outpatient prescription', () => {
        const request = new MedicationRequestBuilder()
          .setId('outpatient-rx-001')
          .addIdentifier({ system: 'http://pharmacy.org/rx', value: 'RX-2023-001' })
          .setStatus('active')
          .setIntent('order')
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category', code: 'outpatient' }],
          })
          .setPriority('routine')
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/office-visit-456' })
          .setAuthoredOn('2023-06-15T10:30:00Z')
          .setRequester({ reference: 'Practitioner/dr-smith', display: 'Dr. Smith' })
          .addDosageInstruction({
            sequence: 1,
            text: 'Take 1 tablet by mouth twice daily with food',
            timing: {
              repeat: {
                frequency: 2,
                period: 1,
                periodUnit: 'd',
                when: ['MORN', 'EVE'],
              },
            },
            route: { coding: [{ system: 'http://snomed.info/sct', code: '26643006', display: 'Oral route' }] },
            method: { coding: [{ code: 'swallow', display: 'Swallow' }] },
            doseAndRate: [
              {
                type: { coding: [{ code: 'ordered' }] },
                doseQuantity: { value: 1, unit: 'tablet', system: 'http://unitsofmeasure.org', code: '{tablet}' },
              },
            ],
          })
          .setDispenseRequest({
            validityPeriod: { start: '2023-06-15', end: '2024-06-15' },
            numberOfRepeatsAllowed: 11,
            quantity: { value: 60, unit: 'tablet' },
            expectedSupplyDuration: { value: 30, unit: 'd' },
          })
          .setSubstitution({ allowedBoolean: true })
          .addNote({ text: 'Patient educated on proper administration' })
          .build();

        // Add medication via with() since builder choice type may need specific value
        const requestWithMed = request.with({
          medicationCodeableConcept: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '197361', display: 'Lisinopril 10 MG Oral Tablet' }],
            text: 'Lisinopril 10mg',
          },
        });

        expect(requestWithMed.status).toBe('active');
        expect(requestWithMed.intent).toBe('order');
        expect(requestWithMed.dosageInstruction).toHaveLength(1);
        expect(requestWithMed.dispenseRequest?.numberOfRepeatsAllowed).toBe(11);
        expectSerializationRoundtrip(requestWithMed);
      });
    });

    describe('Inpatient Medication Order', () => {
      it('should create an inpatient medication order', () => {
        const request = new MedicationRequest({
          id: 'inpatient-order-001',
          status: 'active',
          intent: 'order',
          category: [
            { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category', code: 'inpatient' }] },
          ],
          priority: 'stat',
          medicationCodeableConcept: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '1049221', display: 'Acetaminophen 325 MG Oral Tablet' }],
          },
          subject: { reference: 'Patient/inpatient-123' },
          encounter: { reference: 'Encounter/admission-456' },
          authoredOn: '2023-06-15T02:30:00Z',
          requester: { reference: 'Practitioner/dr-night' },
          dosageInstruction: [
            {
              text: 'Give 2 tablets now for fever',
              timing: { event: ['2023-06-15T02:30:00Z'] },
              asNeededBoolean: false,
              doseAndRate: [{ doseQuantity: { value: 2, unit: 'tablet' } }],
            },
          ],
          reasonCode: [{ coding: [{ code: 'fever', display: 'Fever' }] }],
        });

        expect(request.priority).toBe('stat');
        expect(request.category?.[0].coding?.[0].code).toBe('inpatient');
        expectSerializationRoundtrip(request);
      });
    });

    describe('PRN Medication', () => {
      it('should create a PRN (as needed) medication order', () => {
        const request = new MedicationRequest({
          id: 'prn-order-001',
          status: 'active',
          intent: 'order',
          medicationCodeableConcept: {
            coding: [{ code: '1049589', display: 'Ibuprofen 400 MG Oral Tablet' }],
          },
          subject: { reference: 'Patient/123' },
          dosageInstruction: [
            {
              text: 'Take 1 tablet every 6 hours as needed for pain',
              timing: {
                repeat: {
                  frequency: 1,
                  period: 6,
                  periodUnit: 'h',
                },
              },
              asNeededCodeableConcept: {
                coding: [{ system: 'http://snomed.info/sct', code: '22253000', display: 'Pain' }],
              },
              maxDosePerPeriod: {
                numerator: { value: 4, unit: 'tablet' },
                denominator: { value: 1, unit: 'd' },
              },
              doseAndRate: [{ doseQuantity: { value: 1, unit: 'tablet' } }],
            },
          ],
        });

        expect(request.dosageInstruction?.[0].asNeededCodeableConcept?.coding?.[0].code).toBe('22253000');
        expect(request.dosageInstruction?.[0].maxDosePerPeriod?.numerator?.value).toBe(4);
        expectSerializationRoundtrip(request);
      });
    });

    describe('Controlled Substance Prescription', () => {
      it('should create a controlled substance prescription with restrictions', () => {
        const request = new MedicationRequest({
          id: 'controlled-rx-001',
          status: 'active',
          intent: 'order',
          medicationCodeableConcept: {
            coding: [{ code: '197696', display: 'Hydrocodone 5 MG / Acetaminophen 325 MG' }],
          },
          subject: { reference: 'Patient/123' },
          authoredOn: '2023-06-15T10:00:00Z',
          requester: { reference: 'Practitioner/dr-licensed', display: 'Dr. Licensed (DEA: AB1234567)' },
          dosageInstruction: [
            {
              text: 'Take 1-2 tablets every 4-6 hours as needed for pain',
              asNeededCodeableConcept: { coding: [{ code: 'pain' }] },
              doseAndRate: [
                {
                  doseRange: {
                    low: { value: 1, unit: 'tablet' },
                    high: { value: 2, unit: 'tablet' },
                  },
                },
              ],
            },
          ],
          dispenseRequest: {
            validityPeriod: { start: '2023-06-15', end: '2023-07-15' },
            numberOfRepeatsAllowed: 0, // No refills for controlled substances
            quantity: { value: 30, unit: 'tablet' },
          },
          substitution: { allowedBoolean: false },
        });

        expect(request.dispenseRequest?.numberOfRepeatsAllowed).toBe(0);
        expect(request.substitution?.allowedBoolean).toBe(false);
        expectSerializationRoundtrip(request);
      });
    });

    describe('Medication Proposal', () => {
      it('should create a medication proposal for clinical decision support', () => {
        const request = new MedicationRequest({
          id: 'proposal-001',
          status: 'draft',
          intent: 'proposal',
          medicationCodeableConcept: {
            coding: [{ code: 'statin-recommended', display: 'Statin Therapy Recommended' }],
          },
          subject: { reference: 'Patient/high-risk-cv' },
          reasonCode: [
            { coding: [{ code: 'high-ldl', display: 'Elevated LDL Cholesterol' }] },
            { coding: [{ code: 'cv-risk', display: 'High Cardiovascular Risk' }] },
          ],
          note: [
            { text: 'Patient meets criteria for statin therapy based on cardiovascular risk assessment' },
          ],
        });

        expect(request.status).toBe('draft');
        expect(request.intent).toBe('proposal');
        expect(request.reasonCode).toHaveLength(2);
        expectSerializationRoundtrip(request);
      });
    });

    describe('Medication Request with Group Subject', () => {
      it('should create a medication request for a Group', () => {
        const request = new MedicationRequest({
          id: 'group-med-001',
          status: 'active',
          intent: 'order',
          medicationCodeableConcept: {
            coding: [{ code: 'vaccine', display: 'Influenza Vaccine' }],
          },
          subject: { reference: 'Group/nursing-home-residents', display: 'Nursing Home Residents' },
          note: [{ text: 'Annual flu vaccination campaign' }],
        });

        expect(request.subject?.reference).toBe('Group/nursing-home-residents');
        expectSerializationRoundtrip(request);
      });
    });
  });
});
