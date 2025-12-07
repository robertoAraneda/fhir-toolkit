import { describe, it, expect } from 'vitest';
import { Observation, ObservationBuilder } from '../../../src/index.js';
import type { IObservation, ICodeableConcept, IQuantity, IReference } from '@fhir-toolkit/r5-types';
import {
  expectSerializationRoundtrip,
  expectImmutability,
  expectDeepClone,
  expectNoUndefinedInJSON,
  expectBuilderProducesType,
  expectChoiceTypeClearsOthers,
} from '../../helpers/test-utils.js';

describe('Observation', () => {
  const minimalObservation: IObservation = {
    resourceType: 'Observation',
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '29463-7',
          display: 'Body Weight',
        },
      ],
    },
  };

  const fullObservation: IObservation = {
    resourceType: 'Observation',
    id: 'obs-1',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
            display: 'Vital Signs',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '29463-7',
          display: 'Body Weight',
        },
      ],
    },
    subject: {
      reference: 'Patient/123',
    },
    encounter: {
      reference: 'Encounter/456',
    },
    effectiveDateTime: '2024-01-15T10:30:00Z',
    issued: '2024-01-15T10:35:00Z',
    performer: [
      {
        reference: 'Practitioner/789',
      },
    ],
    valueQuantity: {
      value: 70.5,
      unit: 'kg',
      system: 'http://unitsofmeasure.org',
      code: 'kg',
    },
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'N',
            display: 'Normal',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: { value: 50, unit: 'kg' },
        high: { value: 100, unit: 'kg' },
      },
    ],
    note: [
      {
        text: 'Patient weight measured in the morning',
      },
    ],
  };

  describe('Model', () => {
    describe('Construction', () => {
      it('should create an instance with minimal data', () => {
        const observation = new Observation(minimalObservation);
        expect(observation.resourceType).toBe('Observation');
        expect(observation.status).toBe('final');
        expect(observation.code).toBeDefined();
      });

      it('should create an instance with full data', () => {
        const observation = new Observation(fullObservation);
        expect(observation.id).toBe('obs-1');
        expect(observation.category).toHaveLength(1);
        expect(observation.valueQuantity?.value).toBe(70.5);
        expect(observation.performer).toHaveLength(1);
        expect(observation.referenceRange).toHaveLength(1);
      });

      it('should handle empty constructor', () => {
        const observation = new Observation();
        expect(observation.resourceType).toBe('Observation');
        expect(observation.status).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should roundtrip through JSON', () => {
        const observation = new Observation(fullObservation);
        expectSerializationRoundtrip(observation, Observation);
      });

      it('should not include undefined values in JSON', () => {
        const observation = new Observation(minimalObservation);
        expectNoUndefinedInJSON(observation.toJSON());
      });

      it('should preserve choice type values', () => {
        const observation = new Observation({
          ...minimalObservation,
          valueQuantity: { value: 100, unit: 'mmHg' },
        });
        const json = observation.toJSON();
        expect(json.valueQuantity).toBeDefined();
        expect(json.valueString).toBeUndefined();
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Observation(minimalObservation);
        const updated = original.with({ status: 'preliminary' });
        expectImmutability(original, updated, 'status');
        expect(original.status).toBe('final');
        expect(updated.status).toBe('preliminary');
      });

      it('should create new instance with .applyTransform()', () => {
        const original = new Observation(minimalObservation);
        const updated = original.applyTransform((data) => ({
          status: 'amended',
          note: [{ text: 'Corrected value' }],
        }));
        expect(original.note).toBeUndefined();
        expect(updated.note).toHaveLength(1);
        expect(updated.status).toBe('amended');
      });
    });

    describe('Clone', () => {
      it('should create a deep clone', () => {
        const original = new Observation(fullObservation);
        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });

      it('should not share nested objects with clone', () => {
        const original = new Observation(fullObservation);
        const cloned = original.clone();
        cloned.valueQuantity!.value = 999;
        expect(original.valueQuantity?.value).toBe(70.5);
      });
    });

    describe('String Representation', () => {
      it('should return proper toString', () => {
        const observation = new Observation({ ...minimalObservation, id: 'obs-123' });
        expect(observation.toString()).toContain('Observation');
        expect(observation.toString()).toContain('obs-123');
      });
    });
  });

  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build a minimal observation', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '29463-7' }],
          })
          .build();

        expectBuilderProducesType({ build: () => observation }, Observation);
        expect(observation.status).toBe('final');
        expect(observation.code).toBeDefined();
      });

      it('should build a complete observation', () => {
        const code: ICodeableConcept = {
          coding: [{ system: 'http://loinc.org', code: '29463-7', display: 'Body Weight' }],
        };
        const value: IQuantity = { value: 75, unit: 'kg', system: 'http://unitsofmeasure.org', code: 'kg' };
        const subject: IReference = { reference: 'Patient/123' };

        const observation = new ObservationBuilder()
          .setId('obs-builder-1')
          .setStatus('final')
          .setCode(code)
          .setSubject(subject)
          .setValue('Quantity', value)
          .setIssued('2024-01-15T10:00:00Z')
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: 'vital-signs' }],
          })
          .addPerformer({ reference: 'Practitioner/456' })
          .build();

        expect(observation.id).toBe('obs-builder-1');
        expect(observation.status).toBe('final');
        expect(observation.valueQuantity?.value).toBe(75);
        expect(observation.category).toHaveLength(1);
        expect(observation.performer).toHaveLength(1);
      });
    });

    describe('Choice Types', () => {
      it('should set value[x] as Quantity', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setValue('Quantity', { value: 100, unit: 'mg/dL' })
          .build();

        expect(observation.valueQuantity).toBeDefined();
        expect(observation.valueQuantity?.value).toBe(100);
      });

      it('should set value[x] as String', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setValue('String', 'Positive')
          .build();

        expect(observation.valueString).toBe('Positive');
      });

      it('should set value[x] as CodeableConcept', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setValue('CodeableConcept', {
            coding: [{ system: 'http://example.org', code: 'positive' }],
          })
          .build();

        expect(observation.valueCodeableConcept).toBeDefined();
      });

      it('should clear other value types when setting a new value', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setValue('Quantity', { value: 100 })
          .setValue('String', 'Now a string')
          .build();

        expectChoiceTypeClearsOthers(
          observation.toJSON(),
          'valueString',
          ['valueQuantity', 'valueCodeableConcept', 'valueBoolean', 'valueInteger']
        );
      });

      it('should set effective[x] as DateTime', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setEffective('DateTime', '2024-01-15T10:30:00Z')
          .build();

        expect(observation.effectiveDateTime).toBe('2024-01-15T10:30:00Z');
      });

      it('should set effective[x] as Period', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setEffective('Period', {
            start: '2024-01-15T08:00:00Z',
            end: '2024-01-15T12:00:00Z',
          })
          .build();

        expect(observation.effectivePeriod).toBeDefined();
        expect(observation.effectivePeriod?.start).toBe('2024-01-15T08:00:00Z');
      });
    });

    describe('Array Properties', () => {
      it('should accumulate categories', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addCategory({ coding: [{ code: 'vital-signs' }] })
          .addCategory({ coding: [{ code: 'lab' }] })
          .build();

        expect(observation.category).toHaveLength(2);
      });

      it('should accumulate performers', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addPerformer({ reference: 'Practitioner/1' })
          .addPerformer({ reference: 'Practitioner/2' })
          .addPerformer({ reference: 'Organization/1' })
          .build();

        expect(observation.performer).toHaveLength(3);
      });

      it('should accumulate reference ranges', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addReferenceRange({ low: { value: 0 }, high: { value: 100 } })
          .addReferenceRange({ low: { value: 50 }, high: { value: 150 }, text: 'For adults' })
          .build();

        expect(observation.referenceRange).toHaveLength(2);
      });

      it('should accumulate components', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .setCode({ coding: [{ system: 'http://loinc.org', code: '85354-9', display: 'Blood pressure' }] })
          .addComponent({
            code: { coding: [{ system: 'http://loinc.org', code: '8480-6', display: 'Systolic' }] },
            valueQuantity: { value: 120, unit: 'mmHg' },
          })
          .addComponent({
            code: { coding: [{ system: 'http://loinc.org', code: '8462-4', display: 'Diastolic' }] },
            valueQuantity: { value: 80, unit: 'mmHg' },
          })
          .build();

        expect(observation.component).toHaveLength(2);
        expect(observation.component?.[0].valueQuantity?.value).toBe(120);
        expect(observation.component?.[1].valueQuantity?.value).toBe(80);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const observation = new ObservationBuilder()
          .setId('obs-chain')
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setSubject({ reference: 'Patient/1' })
          .setEncounter({ reference: 'Encounter/1' })
          .setValue('Quantity', { value: 50 })
          .setMethod({ coding: [{ code: 'automated' }] })
          .setBodySite({ coding: [{ code: 'left-arm' }] })
          .addNote({ text: 'Test note' })
          .addInterpretation({ coding: [{ code: 'N' }] })
          .build();

        expect(observation.id).toBe('obs-chain');
        expect(observation.subject?.reference).toBe('Patient/1');
        expect(observation.encounter?.reference).toBe('Encounter/1');
        expect(observation.valueQuantity?.value).toBe(50);
        expect(observation.method).toBeDefined();
        expect(observation.bodySite).toBeDefined();
        expect(observation.note).toHaveLength(1);
        expect(observation.interpretation).toHaveLength(1);
      });
    });

    describe('DomainResource Properties', () => {
      it('should set DomainResource properties through builder', () => {
        const observation = new ObservationBuilder()
          .setId('obs-domain')
          .setMeta({ versionId: '1' })
          .setLanguage('en-US')
          .setText({ status: 'generated', div: '<div>Test</div>' })
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .build();

        expect(observation.id).toBe('obs-domain');
        expect(observation.meta?.versionId).toBe('1');
        expect(observation.language).toBe('en-US');
        expect(observation.text?.status).toBe('generated');
      });
    });
  });

  describe('fromJSON', () => {
    it('should create instance from JSON', () => {
      const observation = Observation.fromJSON(fullObservation);
      expect(observation).toBeInstanceOf(Observation);
      expect(observation.id).toBe('obs-1');
      expect(observation.valueQuantity?.value).toBe(70.5);
    });
  });
});
