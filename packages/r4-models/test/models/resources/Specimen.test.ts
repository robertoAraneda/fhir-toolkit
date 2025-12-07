import { describe, it, expect } from 'vitest';
import { Specimen } from '../../../src/models/resources/Specimen.js';
import { SpecimenBuilder } from '../../../src/builders/resources/SpecimenBuilder.js';
import type { ISpecimen } from '@fhir-toolkit/r4-types';

describe('Specimen', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(specimen: Specimen): void {
    const json = specimen.toJSON();
    const deserialized = Specimen.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(specimen: Specimen): void {
    const cloned = specimen.clone();
    expect(cloned).not.toBe(specimen);
    expect(cloned.toJSON()).toEqual(specimen.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: ISpecimen): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create Specimen with minimal properties', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
      });

      expect(specimen.resourceType).toBe('Specimen');
    });

    it('should create Specimen with all properties', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        id: 'specimen-1',
        identifier: [{ system: 'http://lab.org', value: 'SPEC-001' }],
        accessionIdentifier: { system: 'http://lab.org/accession', value: 'ACC-12345' },
        status: 'available',
        type: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '119297000',
              display: 'Blood specimen',
            },
          ],
        },
        subject: { reference: 'Patient/123' },
        receivedTime: '2024-01-15T10:30:00Z',
        collection: {
          collector: { reference: 'Practitioner/phlebotomist-1' },
          collectedDateTime: '2024-01-15T09:00:00Z',
          quantity: { value: 10, unit: 'mL' },
          method: { coding: [{ code: 'venipuncture' }] },
          bodySite: { coding: [{ code: 'left-antecubital-fossa' }] },
        },
        container: [
          {
            identifier: [{ value: 'TUBE-001' }],
            description: 'Red top tube',
            type: { coding: [{ code: 'tube' }] },
            capacity: { value: 10, unit: 'mL' },
            specimenQuantity: { value: 5, unit: 'mL' },
          },
        ],
        note: [{ text: 'Good quality specimen' }],
      });

      expect(specimen.resourceType).toBe('Specimen');
      expect(specimen.id).toBe('specimen-1');
      expect(specimen.status).toBe('available');
      expect(specimen.accessionIdentifier?.value).toBe('ACC-12345');
      expectSerializationRoundtrip(specimen);
    });

    it('should handle empty constructor', () => {
      const specimen = new Specimen();
      expect(specimen.resourceType).toBe('Specimen');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        status: 'available',
        type: { text: 'Blood' },
      });

      const json = specimen.toJSON();
      expect(json.resourceType).toBe('Specimen');
      expect(json.status).toBe('available');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        id: 'specimen-1',
        meta: { versionId: '1' },
        status: 'available',
        type: { coding: [{ code: 'blood' }] },
        subject: { reference: 'Patient/123' },
        receivedTime: '2024-01-15T10:00:00Z',
        collection: {
          collectedDateTime: '2024-01-15T09:00:00Z',
        },
      });

      const json = specimen.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.collection?.collectedDateTime).toBe('2024-01-15T09:00:00Z');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create Specimen from JSON', () => {
      const json: ISpecimen = {
        resourceType: 'Specimen',
        status: 'available',
        type: { text: 'Urine' },
      };

      const specimen = Specimen.fromJSON(json);
      expect(specimen.status).toBe('available');
      expect(specimen.type?.text).toBe('Urine');
    });

    it('should handle complex JSON structure', () => {
      const json: ISpecimen = {
        resourceType: 'Specimen',
        status: 'available',
        type: { coding: [{ code: 'tissue' }] },
        processing: [
          {
            description: 'Formalin fixation',
            procedure: { coding: [{ code: 'formalin-fix' }] },
            timeDateTime: '2024-01-15T10:00:00Z',
          },
        ],
      };

      const specimen = Specimen.fromJSON(json);
      expect(specimen.processing?.[0]?.description).toBe('Formalin fixation');
      expectSerializationRoundtrip(specimen);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new Specimen({
        resourceType: 'Specimen',
        status: 'available',
      });

      const modified = original.with({ status: 'unavailable' });

      expect(original.status).toBe('available');
      expect(modified.status).toBe('unavailable');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        status: 'available',
        type: { text: 'Blood' },
      });

      const transformed = specimen.applyTransform((data) => ({
        ...data,
        status: 'unsatisfactory',
        note: [{ text: 'Hemolyzed sample' }],
      }));

      expect(transformed.status).toBe('unsatisfactory');
      expect(transformed.note?.[0]?.text).toBe('Hemolyzed sample');
      expect(specimen.status).toBe('available');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        status: 'available',
        type: { text: 'Blood' },
        collection: {
          collectedDateTime: '2024-01-15T09:00:00Z',
          quantity: { value: 10, unit: 'mL' },
        },
      });

      expectDeepClone(specimen);
    });

    it('should clone with all properties', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        id: 'specimen-1',
        status: 'available',
        type: { text: 'Tissue' },
        container: [
          {
            description: 'Formalin container',
            type: { coding: [{ code: 'container' }] },
          },
        ],
        note: [{ text: 'High quality' }],
      });

      const cloned = specimen.clone();
      expect(cloned.toJSON()).toEqual(specimen.toJSON());
      expect(cloned.note?.[0]?.text).toBe('High quality');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        status: 'available',
      });

      expect(specimen.toString()).toBe('Specimen');
    });

    it('should return string representation with id', () => {
      const specimen = new Specimen({
        resourceType: 'Specimen',
        id: 'specimen-123',
        status: 'available',
      });

      expect(specimen.toString()).toBe('Specimen, id=specimen-123');
    });
  });

  // ============================================================
  // Status Tests
  // ============================================================

  describe('Status', () => {
    const validStatuses = ['available', 'unavailable', 'unsatisfactory', 'entered-in-error'];

    validStatuses.forEach((status) => {
      it(`should accept status: ${status}`, () => {
        const specimen = new Specimen({
          resourceType: 'Specimen',
          status: status as any,
        });

        expect(specimen.status).toBe(status);
      });
    });
  });

  // ============================================================
  // SpecimenBuilder Tests
  // ============================================================

  describe('SpecimenBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build Specimen with basic fields', () => {
        const specimen = new SpecimenBuilder()
          .setStatus('available')
          .setType({ text: 'Blood' })
          .build();

        expect(specimen.status).toBe('available');
        expect(specimen.type?.text).toBe('Blood');
      });

      it('should build Specimen with all scalar fields', () => {
        const specimen = new SpecimenBuilder()
          .setId('specimen-1')
          .setAccessionIdentifier({ system: 'http://lab.org', value: 'ACC-001' })
          .setStatus('available')
          .setType({
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '119297000',
                display: 'Blood specimen',
              },
            ],
          })
          .setSubject({ reference: 'Patient/123' })
          .setReceivedTime('2024-01-15T10:30:00Z')
          .setCollection({
            collectedDateTime: '2024-01-15T09:00:00Z',
            collector: { reference: 'Practitioner/phlebotomist-1' },
            quantity: { value: 10, unit: 'mL' },
          })
          .build();

        expect(specimen.id).toBe('specimen-1');
        expect(specimen.accessionIdentifier?.value).toBe('ACC-001');
        expect(specimen.receivedTime).toBe('2024-01-15T10:30:00Z');
        expect(specimen.collection?.quantity?.value).toBe(10);
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const specimen = new SpecimenBuilder()
          .addIdentifier({ system: 'http://lab.org', value: 'SPEC-001' })
          .addIdentifier({ system: 'http://lab.org', value: 'SPEC-002' })
          .build();

        expect(specimen.identifier).toHaveLength(2);
      });

      it('should add parents', () => {
        const specimen = new SpecimenBuilder()
          .setType({ text: 'Serum' })
          .addParent({ reference: 'Specimen/blood-specimen' })
          .build();

        expect(specimen.parent).toHaveLength(1);
      });

      it('should add requests', () => {
        const specimen = new SpecimenBuilder()
          .addRequest({ reference: 'ServiceRequest/lab-order-1' })
          .addRequest({ reference: 'ServiceRequest/lab-order-2' })
          .build();

        expect(specimen.request).toHaveLength(2);
      });

      it('should add processing steps', () => {
        const specimen = new SpecimenBuilder()
          .addProcessing({
            description: 'Centrifugation',
            procedure: { coding: [{ code: 'centrifuge' }] },
            timeDateTime: '2024-01-15T10:00:00Z',
          })
          .addProcessing({
            description: 'Freezing',
            procedure: { coding: [{ code: 'freeze' }] },
            timeDateTime: '2024-01-15T10:15:00Z',
          })
          .build();

        expect(specimen.processing).toHaveLength(2);
        expect(specimen.processing?.[0]?.description).toBe('Centrifugation');
      });

      it('should add containers', () => {
        const specimen = new SpecimenBuilder()
          .addContainer({
            identifier: [{ value: 'TUBE-001' }],
            description: 'Red top tube',
            type: { coding: [{ code: 'tube' }] },
          })
          .addContainer({
            identifier: [{ value: 'TUBE-002' }],
            description: 'Purple top tube',
            type: { coding: [{ code: 'tube' }] },
          })
          .build();

        expect(specimen.container).toHaveLength(2);
      });

      it('should add conditions', () => {
        const specimen = new SpecimenBuilder()
          .addCondition({ coding: [{ code: 'hemolyzed' }] })
          .addCondition({ coding: [{ code: 'lipemic' }] })
          .build();

        expect(specimen.condition).toHaveLength(2);
      });

      it('should add notes', () => {
        const specimen = new SpecimenBuilder()
          .addNote({ text: 'Good quality sample' })
          .addNote({ text: 'Collected on first attempt' })
          .build();

        expect(specimen.note).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const specimen = new SpecimenBuilder()
          .setId('specimen-chain')
          .setStatus('available')
          .setType({ text: 'Blood' })
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ value: 'SPEC-001' })
          .addRequest({ reference: 'ServiceRequest/lab-1' })
          .addNote({ text: 'Test note' })
          .build();

        expect(specimen.id).toBe('specimen-chain');
        expect(specimen.identifier).toHaveLength(1);
        expect(specimen.request).toHaveLength(1);
        expect(specimen.note).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create blood specimen for routine lab work', () => {
      const specimen = new SpecimenBuilder()
        .setId('blood-specimen-1')
        .addIdentifier({
          system: 'http://hospital-lab.org/specimens',
          value: 'SPEC-2024-001234',
        })
        .setAccessionIdentifier({
          system: 'http://hospital-lab.org/accession',
          value: 'ACC-2024-5678',
        })
        .setStatus('available')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '119297000',
              display: 'Blood specimen',
            },
          ],
          text: 'Whole blood',
        })
        .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
        .addRequest({ reference: 'ServiceRequest/lipid-panel', display: 'Lipid Panel' })
        .setReceivedTime('2024-01-15T10:30:00Z')
        .setCollection({
          collector: { reference: 'Practitioner/phlebotomist-1', display: 'Jane Phlebotomist' },
          collectedDateTime: '2024-01-15T09:00:00Z',
          quantity: { value: 10, unit: 'mL', system: 'http://unitsofmeasure.org', code: 'mL' },
          method: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0488',
                code: 'LNV',
                display: 'Venipuncture',
              },
            ],
          },
          bodySite: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '368208006',
                display: 'Left antecubital fossa',
              },
            ],
          },
        })
        .addContainer({
          identifier: [{ value: 'TUBE-RED-001' }],
          description: 'Red top tube (no additive)',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/container-type',
                code: 'red-top',
                display: 'Red Top Tube',
              },
            ],
          },
          capacity: { value: 10, unit: 'mL' },
          specimenQuantity: { value: 5, unit: 'mL' },
        })
        .addNote({ text: 'Patient fasted for 12 hours prior to collection' })
        .build();

      expect(specimen.status).toBe('available');
      expect(specimen.accessionIdentifier?.value).toBe('ACC-2024-5678');
      expect(specimen.collection?.method?.coding?.[0]?.code).toBe('LNV');
      expect(specimen.container?.[0]?.capacity?.value).toBe(10);
      expectSerializationRoundtrip(specimen);
    });

    it('should create urine specimen with processing', () => {
      const specimen = new SpecimenBuilder()
        .setId('urine-specimen')
        .setStatus('available')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '122575003',
              display: 'Urine specimen',
            },
          ],
          text: 'Midstream urine',
        })
        .setSubject({ reference: 'Patient/123' })
        .setCollection({
          collectedDateTime: '2024-01-15T08:00:00Z',
          method: { coding: [{ code: 'clean-catch' }] },
        })
        .setReceivedTime('2024-01-15T09:00:00Z')
        .addProcessing({
          description: 'Centrifugation to separate sediment',
          procedure: {
            coding: [{ code: 'centrifugation', display: 'Centrifugation' }],
          },
          timeDateTime: '2024-01-15T09:15:00Z',
        })
        .addContainer({
          description: 'Sterile urine container',
          type: { coding: [{ code: 'urine-container' }] },
          specimenQuantity: { value: 50, unit: 'mL' },
        })
        .build();

      expect(specimen.type?.coding?.[0]?.code).toBe('122575003');
      expect(specimen.processing).toHaveLength(1);
      expectSerializationRoundtrip(specimen);
    });

    it('should create tissue biopsy specimen', () => {
      const specimen = new SpecimenBuilder()
        .setStatus('available')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '309226005',
              display: 'Tissue specimen from skin',
            },
          ],
          text: 'Skin biopsy',
        })
        .setSubject({ reference: 'Patient/123' })
        .setCollection({
          collector: { reference: 'Practitioner/dermatologist-1' },
          collectedDateTime: '2024-01-15T14:00:00Z',
          method: { coding: [{ code: 'punch-biopsy' }] },
          bodySite: {
            coding: [{ code: 'left-forearm', display: 'Left forearm' }],
          },
        })
        .addProcessing({
          description: 'Formalin fixation',
          procedure: { coding: [{ code: 'formalin-fixation' }] },
          timeDateTime: '2024-01-15T14:30:00Z',
        })
        .addProcessing({
          description: 'Paraffin embedding',
          procedure: { coding: [{ code: 'paraffin-embedding' }] },
          timeDateTime: '2024-01-15T16:00:00Z',
        })
        .addNote({ text: 'Lesion appears suspicious for melanoma' })
        .build();

      expect(specimen.processing).toHaveLength(2);
      expect(specimen.collection?.method?.coding?.[0]?.code).toBe('punch-biopsy');
      expectSerializationRoundtrip(specimen);
    });

    it('should create specimen with parent-child relationship', () => {
      const parent = new SpecimenBuilder()
        .setId('blood-specimen-parent')
        .setStatus('available')
        .setType({ coding: [{ code: '119297000', display: 'Blood specimen' }] })
        .setSubject({ reference: 'Patient/123' })
        .build();

      const serum = new SpecimenBuilder()
        .setId('serum-specimen')
        .setStatus('available')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '119364003',
              display: 'Serum specimen',
            },
          ],
        })
        .setSubject({ reference: 'Patient/123' })
        .addParent({ reference: 'Specimen/blood-specimen-parent', display: 'Parent blood specimen' })
        .addProcessing({
          description: 'Centrifugation to separate serum',
          procedure: { coding: [{ code: 'centrifugation' }] },
          timeDateTime: '2024-01-15T10:00:00Z',
        })
        .build();

      expect(serum.parent).toHaveLength(1);
      expect(serum.parent?.[0]?.reference).toBe('Specimen/blood-specimen-parent');
      expectSerializationRoundtrip(parent);
      expectSerializationRoundtrip(serum);
    });

    it('should create unsatisfactory specimen', () => {
      const specimen = new SpecimenBuilder()
        .setStatus('unsatisfactory')
        .setType({ text: 'Blood' })
        .setSubject({ reference: 'Patient/123' })
        .setCollection({
          collectedDateTime: '2024-01-15T09:00:00Z',
        })
        .addCondition({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0493',
              code: 'HEM',
              display: 'Hemolyzed',
            },
          ],
        })
        .addNote({ text: 'Specimen rejected due to hemolysis. Recollection requested.' })
        .build();

      expect(specimen.status).toBe('unsatisfactory');
      expect(specimen.condition?.[0]?.coding?.[0]?.code).toBe('HEM');
      expectSerializationRoundtrip(specimen);
    });

    it('should create environmental specimen', () => {
      const specimen = new SpecimenBuilder()
        .setStatus('available')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '258580003',
              display: 'Water specimen',
            },
          ],
          text: 'Drinking water sample',
        })
        .setSubject({ reference: 'Location/water-fountain-building-a', display: 'Water fountain, Building A' })
        .setCollection({
          collectedDateTime: '2024-01-15T11:00:00Z',
          collector: { reference: 'Practitioner/environmental-health-specialist' },
          quantity: { value: 500, unit: 'mL' },
        })
        .addRequest({ reference: 'ServiceRequest/water-quality-test' })
        .addNote({ text: 'Routine water quality testing' })
        .build();

      expect(specimen.subject?.reference).toContain('Location/');
      expect(specimen.type?.text).toBe('Drinking water sample');
      expectSerializationRoundtrip(specimen);
    });
  });
});
