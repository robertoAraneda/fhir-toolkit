import { describe, it, expect } from 'vitest';
import { ServiceRequest, ServiceRequestBuilder } from '../../../src/index.js';
import type { IServiceRequest, ICodeableReference, IReference } from '@fhir-toolkit/r5-types';
import {
  expectSerializationRoundtrip,
  expectImmutability,
  expectDeepClone,
  expectNoUndefinedInJSON,
  expectBuilderProducesType,
  expectChoiceTypeClearsOthers,
} from '../../helpers/test-utils.js';

describe('ServiceRequest', () => {
  const minimalServiceRequest: IServiceRequest = {
    resourceType: 'ServiceRequest',
    status: 'active',
    intent: 'order',
    subject: {
      reference: 'Patient/123',
    },
  };

  const fullServiceRequest: IServiceRequest = {
    resourceType: 'ServiceRequest',
    id: 'sr-1',
    identifier: [
      {
        system: 'http://example.org/requests',
        value: 'req-001',
      },
    ],
    instantiatesCanonical: [
      'http://example.org/ActivityDefinition/blood-test',
    ],
    instantiatesUri: [
      'http://external.org/protocol/123',
    ],
    basedOn: [
      { reference: 'CarePlan/456' },
    ],
    replaces: [
      { reference: 'ServiceRequest/old-request' },
    ],
    requisition: {
      system: 'http://example.org/requisitions',
      value: 'group-001',
    },
    status: 'active',
    intent: 'order',
    category: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '108252007',
            display: 'Laboratory procedure',
          },
        ],
      },
    ],
    priority: 'urgent',
    doNotPerform: false,
    code: {
      concept: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '58410-2',
            display: 'Complete blood count (hemogram) panel - Blood by Automated count',
          },
        ],
      },
    },
    subject: {
      reference: 'Patient/123',
    },
    encounter: {
      reference: 'Encounter/789',
    },
    occurrenceDateTime: '2024-01-20T09:00:00Z',
    authoredOn: '2024-01-15T10:30:00Z',
    requester: {
      reference: 'Practitioner/doc-1',
    },
    performerType: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '61246008',
          display: 'Laboratory medicine specialist',
        },
      ],
    },
    performer: [
      { reference: 'Organization/lab-1' },
    ],
    location: [
      {
        concept: {
          coding: [{ system: 'http://example.org/locations', code: 'main-lab' }],
        },
      },
    ],
    reason: [
      {
        concept: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '271737000',
              display: 'Anemia',
            },
          ],
        },
      },
    ],
    insurance: [
      { reference: 'Coverage/insurance-1' },
    ],
    supportingInfo: [
      {
        reference: { reference: 'Observation/previous-test' },
      },
    ],
    specimen: [
      { reference: 'Specimen/blood-sample-1' },
    ],
    bodySite: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '14975008',
            display: 'Forearm structure',
          },
        ],
      },
    ],
    note: [
      {
        text: 'Patient requested early morning appointment',
      },
    ],
    patientInstruction: [
      {
        instructionMarkdown: 'Fast for 8-12 hours before the blood draw',
      },
    ],
    relevantHistory: [
      { reference: 'Provenance/history-1' },
    ],
  };

  describe('Model', () => {
    describe('Construction', () => {
      it('should create an instance with minimal data', () => {
        const request = new ServiceRequest(minimalServiceRequest);
        expect(request.resourceType).toBe('ServiceRequest');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.subject.reference).toBe('Patient/123');
      });

      it('should create an instance with full data', () => {
        const request = new ServiceRequest(fullServiceRequest);
        expect(request.id).toBe('sr-1');
        expect(request.priority).toBe('urgent');
        expect(request.code?.concept?.coding?.[0].code).toBe('58410-2');
        expect(request.performer).toHaveLength(1);
        expect(request.reason).toHaveLength(1);
        expect(request.patientInstruction).toHaveLength(1);
      });

      it('should handle empty constructor', () => {
        const request = new ServiceRequest();
        expect(request.resourceType).toBe('ServiceRequest');
        expect(request.status).toBeUndefined();
        expect(request.intent).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should roundtrip through JSON', () => {
        const request = new ServiceRequest(fullServiceRequest);
        expectSerializationRoundtrip(request, ServiceRequest);
      });

      it('should not include undefined values in JSON', () => {
        const request = new ServiceRequest(minimalServiceRequest);
        expectNoUndefinedInJSON(request.toJSON());
      });

      it('should preserve choice type values', () => {
        const request = new ServiceRequest({
          ...minimalServiceRequest,
          occurrenceDateTime: '2024-01-20T10:00:00Z',
        });
        const json = request.toJSON();
        expect(json.occurrenceDateTime).toBeDefined();
        expect(json.occurrencePeriod).toBeUndefined();
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ServiceRequest(minimalServiceRequest);
        const updated = original.with({ status: 'completed' });
        expectImmutability(original, updated, 'status');
        expect(original.status).toBe('active');
        expect(updated.status).toBe('completed');
      });

      it('should create new instance with .applyTransform()', () => {
        const original = new ServiceRequest(minimalServiceRequest);
        const updated = original.applyTransform((data) => ({
          priority: 'stat',
          doNotPerform: true,
        }));
        expect(original.priority).toBeUndefined();
        expect(updated.priority).toBe('stat');
        expect(updated.doNotPerform).toBe(true);
      });
    });

    describe('Clone', () => {
      it('should create a deep clone', () => {
        const original = new ServiceRequest(fullServiceRequest);
        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });

      it('should not share nested objects with clone', () => {
        const original = new ServiceRequest(fullServiceRequest);
        const cloned = original.clone();
        cloned.bodySite![0].coding![0].code = 'modified-code';
        expect(original.bodySite?.[0].coding?.[0].code).toBe('14975008');
      });
    });

    describe('String Representation', () => {
      it('should return proper toString', () => {
        const request = new ServiceRequest({ ...minimalServiceRequest, id: 'sr-123' });
        expect(request.toString()).toContain('ServiceRequest');
        expect(request.toString()).toContain('sr-123');
      });
    });
  });

  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build a minimal service request', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/123' })
          .build();

        expectBuilderProducesType({ build: () => request }, ServiceRequest);
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.subject.reference).toBe('Patient/123');
      });

      it('should build a complete service request', () => {
        const code: ICodeableReference = {
          concept: {
            coding: [{ system: 'http://loinc.org', code: '85354-9', display: 'Blood pressure' }],
          },
        };

        const request = new ServiceRequestBuilder()
          .setId('sr-builder-1')
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/456' })
          .setCode(code)
          .setPriority('urgent')
          .setDoNotPerform(false)
          .setEncounter({ reference: 'Encounter/789' })
          .setRequester({ reference: 'Practitioner/doc-1' })
          .setAuthoredOn('2024-01-15T10:00:00Z')
          .setRequisition({ value: 'group-1' })
          .setPerformerType({
            coding: [{ code: 'nurse' }],
          })
          .addCategory({
            coding: [{ code: 'vital-signs' }],
          })
          .addPerformer({ reference: 'Practitioner/nurse-1' })
          .addBodySite({ coding: [{ code: 'left-arm' }] })
          .addNote({ text: 'Priority case' })
          .build();

        expect(request.id).toBe('sr-builder-1');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.code?.concept?.coding?.[0].code).toBe('85354-9');
        expect(request.priority).toBe('urgent');
        expect(request.category).toHaveLength(1);
        expect(request.performer).toHaveLength(1);
        expect(request.bodySite).toHaveLength(1);
        expect(request.note).toHaveLength(1);
      });
    });

    describe('Choice Types', () => {
      it('should set occurrence[x] as DateTime', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setOccurrence('DateTime', '2024-02-01T14:00:00Z')
          .build();

        expect(request.occurrenceDateTime).toBe('2024-02-01T14:00:00Z');
      });

      it('should set occurrence[x] as Period', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setOccurrence('Period', {
            start: '2024-02-01T08:00:00Z',
            end: '2024-02-01T17:00:00Z',
          })
          .build();

        expect(request.occurrencePeriod).toBeDefined();
        expect(request.occurrencePeriod?.start).toBe('2024-02-01T08:00:00Z');
      });

      it('should set occurrence[x] as Timing', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setOccurrence('Timing', {
            repeat: {
              frequency: 1,
              period: 1,
              periodUnit: 'd',
              count: 7,
            },
          })
          .build();

        expect(request.occurrenceTiming).toBeDefined();
        expect(request.occurrenceTiming?.repeat?.count).toBe(7);
      });

      it('should clear other occurrence types when setting a new occurrence', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setOccurrence('DateTime', '2024-02-01')
          .setOccurrence('Period', { start: '2024-02-01', end: '2024-02-07' })
          .build();

        expectChoiceTypeClearsOthers(
          request.toJSON(),
          'occurrencePeriod',
          ['occurrenceDateTime', 'occurrenceTiming']
        );
      });

      it('should set quantity[x] as Quantity', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setQuantity('Quantity', { value: 3, unit: 'vials' })
          .build();

        expect(request.quantityQuantity).toBeDefined();
        expect(request.quantityQuantity?.value).toBe(3);
      });

      it('should set quantity[x] as Ratio', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setQuantity('Ratio', {
            numerator: { value: 1, unit: 'mg' },
            denominator: { value: 1, unit: 'mL' },
          })
          .build();

        expect(request.quantityRatio).toBeDefined();
        expect(request.quantityRatio?.numerator?.value).toBe(1);
      });

      it('should set quantity[x] as Range', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setQuantity('Range', {
            low: { value: 2, unit: 'vials' },
            high: { value: 4, unit: 'vials' },
          })
          .build();

        expect(request.quantityRange).toBeDefined();
        expect(request.quantityRange?.low?.value).toBe(2);
      });

      it('should set asNeeded[x] as Boolean', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setAsNeeded('Boolean', true)
          .build();

        expect(request.asNeededBoolean).toBe(true);
      });

      it('should set asNeeded[x] as CodeableConcept', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .setAsNeeded('CodeableConcept', {
            coding: [{ code: 'prn-pain', display: 'As needed for pain' }],
          })
          .build();

        expect(request.asNeededCodeableConcept).toBeDefined();
      });
    });

    describe('Array Properties', () => {
      it('should accumulate identifiers', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addIdentifier({ system: 'http://example.org', value: 'id1' })
          .addIdentifier({ system: 'http://example.org', value: 'id2' })
          .build();

        expect(request.identifier).toHaveLength(2);
      });

      it('should accumulate categories', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addCategory({ coding: [{ code: 'lab' }] })
          .addCategory({ coding: [{ code: 'imaging' }] })
          .build();

        expect(request.category).toHaveLength(2);
      });

      it('should accumulate basedOn references', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addBasedOn({ reference: 'CarePlan/1' })
          .addBasedOn({ reference: 'ServiceRequest/2' })
          .build();

        expect(request.basedOn).toHaveLength(2);
      });

      it('should accumulate replaces references', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addReplaces({ reference: 'ServiceRequest/old-1' })
          .addReplaces({ reference: 'ServiceRequest/old-2' })
          .build();

        expect(request.replaces).toHaveLength(2);
      });

      it('should accumulate performers', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addPerformer({ reference: 'Practitioner/1' })
          .addPerformer({ reference: 'Organization/1' })
          .addPerformer({ reference: 'CareTeam/1' })
          .build();

        expect(request.performer).toHaveLength(3);
      });

      it('should accumulate locations', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addLocation({ concept: { text: 'Lab A' } })
          .addLocation({ concept: { text: 'Lab B' } })
          .build();

        expect(request.location).toHaveLength(2);
      });

      it('should accumulate reasons', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addReason({ concept: { text: 'Suspected infection' } })
          .addReason({ reference: { reference: 'Condition/123' } })
          .build();

        expect(request.reason).toHaveLength(2);
      });

      it('should accumulate insurance references', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addInsurance({ reference: 'Coverage/primary' })
          .addInsurance({ reference: 'Coverage/secondary' })
          .build();

        expect(request.insurance).toHaveLength(2);
      });

      it('should accumulate supportingInfo', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addSupportingInfo({ reference: { reference: 'Observation/1' } })
          .addSupportingInfo({ reference: { reference: 'DiagnosticReport/1' } })
          .build();

        expect(request.supportingInfo).toHaveLength(2);
      });

      it('should accumulate specimens', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addSpecimen({ reference: 'Specimen/blood-1' })
          .addSpecimen({ reference: 'Specimen/urine-1' })
          .build();

        expect(request.specimen).toHaveLength(2);
      });

      it('should accumulate bodySites', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addBodySite({ coding: [{ code: 'left-arm' }] })
          .addBodySite({ coding: [{ code: 'right-arm' }] })
          .build();

        expect(request.bodySite).toHaveLength(2);
      });

      it('should accumulate notes', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(request.note).toHaveLength(2);
      });

      it('should accumulate patientInstructions', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addPatientInstruction({ instructionMarkdown: 'Instruction 1' })
          .addPatientInstruction({ instructionMarkdown: 'Instruction 2' })
          .build();

        expect(request.patientInstruction).toHaveLength(2);
      });

      it('should accumulate orderDetails', () => {
        const request = new ServiceRequestBuilder()
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .addOrderDetail({
            parameterFocus: { concept: { text: 'Parameter 1' } },
          })
          .addOrderDetail({
            parameterFocus: { concept: { text: 'Parameter 2' } },
          })
          .build();

        expect(request.orderDetail).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const request = new ServiceRequestBuilder()
          .setId('sr-chain')
          .setStatus('active')
          .setIntent('order')
          .setPriority('urgent')
          .setDoNotPerform(false)
          .setSubject({ reference: 'Patient/chain' })
          .setEncounter({ reference: 'Encounter/chain' })
          .setRequester({ reference: 'Practitioner/chain' })
          .setAuthoredOn('2024-01-15')
          .setRequisition({ value: 'group-chain' })
          .setCode({ concept: { text: 'Test' } })
          .setPerformerType({ text: 'Technician' })
          .setBodyStructure({ reference: 'BodyStructure/1' })
          .addIdentifier({ value: 'id-chain' })
          .addCategory({ text: 'category' })
          .addPerformer({ reference: 'Practitioner/perf' })
          .addNote({ text: 'note' })
          .build();

        expect(request.id).toBe('sr-chain');
        expect(request.status).toBe('active');
        expect(request.intent).toBe('order');
        expect(request.priority).toBe('urgent');
        expect(request.subject.reference).toBe('Patient/chain');
        expect(request.encounter?.reference).toBe('Encounter/chain');
        expect(request.identifier).toHaveLength(1);
        expect(request.category).toHaveLength(1);
        expect(request.performer).toHaveLength(1);
        expect(request.note).toHaveLength(1);
      });
    });

    describe('DomainResource Properties', () => {
      it('should set DomainResource properties through builder', () => {
        const request = new ServiceRequestBuilder()
          .setId('sr-domain')
          .setMeta({ versionId: '2' })
          .setLanguage('es')
          .setText({ status: 'generated', div: '<div>Solicitud</div>' })
          .setStatus('active')
          .setIntent('order')
          .setSubject({ reference: 'Patient/1' })
          .build();

        expect(request.id).toBe('sr-domain');
        expect(request.meta?.versionId).toBe('2');
        expect(request.language).toBe('es');
        expect(request.text?.status).toBe('generated');
      });
    });
  });

  describe('fromJSON', () => {
    it('should create instance from JSON', () => {
      const request = ServiceRequest.fromJSON(fullServiceRequest);
      expect(request).toBeInstanceOf(ServiceRequest);
      expect(request.id).toBe('sr-1');
      expect(request.status).toBe('active');
      expect(request.intent).toBe('order');
      expect(request.priority).toBe('urgent');
    });
  });
});
