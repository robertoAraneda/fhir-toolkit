/**
 * Observation Resource Model and Builder Tests for FHIR R4B
 *
 * Tests for the Observation resource class and its builder.
 * Observation represents measurements and simple assertions made about a patient.
 */

import { describe, it, expect } from 'vitest';
import { Observation, ObservationBuilder } from '../../../src/index.js';
import type { IObservation } from '@fhir-toolkit/r4b-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const observations = {
  vitalSign: {
    resourceType: 'Observation',
    id: 'blood-pressure',
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
          code: '85354-9',
          display: 'Blood pressure panel with all children optional',
        },
      ],
    },
    subject: {
      reference: 'Patient/example',
    },
    effectiveDateTime: '2024-01-15T10:30:00Z',
    component: [
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8480-6',
              display: 'Systolic blood pressure',
            },
          ],
        },
        valueQuantity: {
          value: 120,
          unit: 'mmHg',
          system: 'http://unitsofmeasure.org',
          code: 'mm[Hg]',
        },
      },
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8462-4',
              display: 'Diastolic blood pressure',
            },
          ],
        },
        valueQuantity: {
          value: 80,
          unit: 'mmHg',
          system: 'http://unitsofmeasure.org',
          code: 'mm[Hg]',
        },
      },
    ],
  } as IObservation,
  labResult: {
    resourceType: 'Observation',
    id: 'glucose',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
            display: 'Laboratory',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '2339-0',
          display: 'Glucose [Mass/volume] in Blood',
        },
      ],
    },
    subject: {
      reference: 'Patient/example',
    },
    effectiveDateTime: '2024-01-15T08:00:00Z',
    valueQuantity: {
      value: 95,
      unit: 'mg/dL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/dL',
    },
    referenceRange: [
      {
        low: { value: 70, unit: 'mg/dL' },
        high: { value: 100, unit: 'mg/dL' },
        type: {
          coding: [{ code: 'normal', display: 'Normal Range' }],
        },
      },
    ],
  } as IObservation,
  simple: {
    resourceType: 'Observation',
    id: 'simple-obs',
    status: 'final',
    code: {
      coding: [{ system: 'http://example.org', code: 'test' }],
    },
  } as IObservation,
};

describe('Observation (R4B)', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const observation = new Observation({});
        expect(observation).toBeInstanceOf(Observation);
        expect(observation.resourceType).toBe('Observation');
      });

      it('should create vital sign observation', () => {
        const observation = new Observation(observations.vitalSign);
        expect(observation.id).toBe('blood-pressure');
        expect(observation.status).toBe('final');
        expect(observation.code?.coding?.[0].code).toBe('85354-9');
        expect(observation.component).toHaveLength(2);
      });

      it('should create lab result observation', () => {
        const observation = new Observation(observations.labResult);
        expect(observation.valueQuantity?.value).toBe(95);
        expect(observation.referenceRange).toHaveLength(1);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const observation = new Observation(observations.vitalSign);
        const json = observation.toJSON();

        expect(json.resourceType).toBe('Observation');
        expect(json.id).toBe('blood-pressure');
        expect(json.status).toBe('final');
      });

      it('should omit undefined properties in JSON', () => {
        const observation = new Observation(observations.simple);
        const json = observation.toJSON();

        expectNoUndefinedInJSON(json);
        expect(json).not.toHaveProperty('valueQuantity');
        expect(json).not.toHaveProperty('component');
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Observation(observations.vitalSign);
        expectSerializationRoundtrip(original, Observation);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const observation = Observation.fromJSON(observations.labResult);

        expect(observation).toBeInstanceOf(Observation);
        expect(observation.valueQuantity?.value).toBe(95);
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Observation(observations.simple);
        const updated = original.with({ status: 'amended' });

        expect(updated).not.toBe(original);
        expect(updated.status).toBe('amended');
        expect(original.status).toBe('final');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Observation(observations.vitalSign);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const observation = new ObservationBuilder().build();
        expect(observation).toBeInstanceOf(Observation);
        expect(observation.resourceType).toBe('Observation');
      });

      it('should build with status', () => {
        const observation = new ObservationBuilder()
          .setStatus('final')
          .build();

        expect(observation.status).toBe('final');
      });

      it('should build with code', () => {
        const observation = new ObservationBuilder()
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '12345-6' }],
          })
          .build();

        expect(observation.code?.coding?.[0].code).toBe('12345-6');
      });

      it('should build with subject', () => {
        const observation = new ObservationBuilder()
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(observation.subject?.reference).toBe('Patient/123');
      });
    });

    describe('Choice Types', () => {
      it('should set valueQuantity', () => {
        const observation = new ObservationBuilder()
          .setValue('Quantity', { value: 120, unit: 'mmHg' })
          .build();

        expect(observation.valueQuantity?.value).toBe(120);
      });

      it('should set valueString', () => {
        const observation = new ObservationBuilder()
          .setValue('String', 'Normal')
          .build();

        expect(observation.valueString).toBe('Normal');
      });

      it('should set valueCodeableConcept', () => {
        const observation = new ObservationBuilder()
          .setValue('CodeableConcept', {
            coding: [{ code: 'positive' }],
          })
          .build();

        expect(observation.valueCodeableConcept?.coding?.[0].code).toBe('positive');
      });

      it('should set effectiveDateTime', () => {
        const observation = new ObservationBuilder()
          .setEffective('DateTime', '2024-01-15')
          .build();

        expect(observation.effectiveDateTime).toBe('2024-01-15');
      });

      it('should set effectivePeriod', () => {
        const observation = new ObservationBuilder()
          .setEffective('Period', { start: '2024-01-15', end: '2024-01-16' })
          .build();

        expect(observation.effectivePeriod?.start).toBe('2024-01-15');
      });
    });

    describe('Array Properties', () => {
      it('should add categories', () => {
        const observation = new ObservationBuilder()
          .addCategory({
            coding: [{ code: 'vital-signs' }],
          })
          .addCategory({
            coding: [{ code: 'exam' }],
          })
          .build();

        expect(observation.category).toHaveLength(2);
      });

      it('should add components', () => {
        const observation = new ObservationBuilder()
          .addComponent({
            code: { coding: [{ code: '8480-6' }] },
            valueQuantity: { value: 120, unit: 'mmHg' },
          })
          .addComponent({
            code: { coding: [{ code: '8462-4' }] },
            valueQuantity: { value: 80, unit: 'mmHg' },
          })
          .build();

        expect(observation.component).toHaveLength(2);
      });

      it('should add reference ranges', () => {
        const observation = new ObservationBuilder()
          .addReferenceRange({
            low: { value: 70, unit: 'mg/dL' },
            high: { value: 100, unit: 'mg/dL' },
          })
          .build();

        expect(observation.referenceRange).toHaveLength(1);
      });

      it('should add performers', () => {
        const observation = new ObservationBuilder()
          .addPerformer({ reference: 'Practitioner/1' })
          .build();

        expect(observation.performer).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work in vital signs scenario', () => {
      const observation = new ObservationBuilder()
        .setId('bp-measurement')
        .setStatus('final')
        .addCategory({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'vital-signs',
            },
          ],
        })
        .setCode({
          coding: [
            {
              system: 'http://loinc.org',
              code: '85354-9',
              display: 'Blood pressure panel',
            },
          ],
        })
        .setSubject({ reference: 'Patient/example' })
        .setEffective('DateTime', '2024-01-15T10:30:00Z')
        .addComponent({
          code: { coding: [{ system: 'http://loinc.org', code: '8480-6' }] },
          valueQuantity: { value: 120, unit: 'mmHg' },
        })
        .addComponent({
          code: { coding: [{ system: 'http://loinc.org', code: '8462-4' }] },
          valueQuantity: { value: 80, unit: 'mmHg' },
        })
        .build();

      expect(observation.component).toHaveLength(2);
      expect(observation.component?.[0].valueQuantity?.value).toBe(120);

      const json = observation.toJSON();
      const restored = Observation.fromJSON(json);

      expect(restored.component?.[1].valueQuantity?.value).toBe(80);
    });

    it('should work in laboratory result scenario', () => {
      const observation = new ObservationBuilder()
        .setStatus('final')
        .addCategory({
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: 'laboratory' }],
        })
        .setCode({
          coding: [{ system: 'http://loinc.org', code: '2339-0', display: 'Glucose' }],
        })
        .setSubject({ reference: 'Patient/example' })
        .setValue('Quantity', { value: 95, unit: 'mg/dL', system: 'http://unitsofmeasure.org', code: 'mg/dL' })
        .addReferenceRange({
          low: { value: 70, unit: 'mg/dL' },
          high: { value: 100, unit: 'mg/dL' },
        })
        .addInterpretation({
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation', code: 'N' }],
        })
        .build();

      expect(observation.valueQuantity?.value).toBe(95);
      expect(observation.interpretation?.[0].coding?.[0].code).toBe('N');
    });
  });
});
