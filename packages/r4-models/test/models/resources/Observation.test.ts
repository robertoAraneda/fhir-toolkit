/**
 * Observation Resource Model and Builder Tests
 *
 * Tests for the Observation resource class and its builder.
 * Observation represents measurements and simple assertions made about
 * a patient, device or other subject.
 */

import { describe, it, expect } from 'vitest';
import { Observation, ObservationBuilder } from '../../../src/index.js';
import type { IObservation } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const observations = {
  simple: {
    resourceType: 'Observation',
    id: 'example',
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
    subject: {
      reference: 'Patient/example',
    },
    valueQuantity: {
      value: 70,
      unit: 'kg',
      system: 'http://unitsofmeasure.org',
      code: 'kg',
    },
  } as IObservation,
  complete: {
    resourceType: 'Observation',
    id: 'complete-obs',
    meta: {
      versionId: '1',
      lastUpdated: '2024-01-15T10:30:00Z',
    },
    identifier: [
      {
        system: 'http://hospital.example.org/observations',
        value: 'OBS12345',
      },
    ],
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
          code: '8867-4',
          display: 'Heart rate',
        },
      ],
      text: 'Heart rate',
    },
    subject: {
      reference: 'Patient/example',
      display: 'John Doe',
    },
    encounter: {
      reference: 'Encounter/example',
    },
    effectiveDateTime: '2024-01-15T09:30:00Z',
    issued: '2024-01-15T10:00:00Z',
    performer: [
      {
        reference: 'Practitioner/example',
        display: 'Dr. Smith',
      },
    ],
    valueQuantity: {
      value: 72,
      unit: 'beats/minute',
      system: 'http://unitsofmeasure.org',
      code: '/min',
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
        low: { value: 60, unit: '/min' },
        high: { value: 100, unit: '/min' },
        text: 'Normal range for adults',
      },
    ],
  } as IObservation,
  bloodPressure: {
    resourceType: 'Observation',
    id: 'blood-pressure',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '85354-9',
          display: 'Blood pressure panel',
        },
      ],
    },
    subject: { reference: 'Patient/example' },
    effectiveDateTime: '2024-01-15T09:30:00Z',
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
    id: 'lab-glucose',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
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
    subject: { reference: 'Patient/example' },
    valueQuantity: {
      value: 95,
      unit: 'mg/dL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/dL',
    },
    interpretation: [
      {
        coding: [{ code: 'N', display: 'Normal' }],
      },
    ],
    referenceRange: [
      {
        low: { value: 70, unit: 'mg/dL' },
        high: { value: 100, unit: 'mg/dL' },
      },
    ],
    specimen: {
      reference: 'Specimen/blood',
    },
  } as IObservation,
  withDataAbsent: {
    resourceType: 'Observation',
    id: 'data-absent',
    status: 'final',
    code: {
      coding: [{ system: 'http://loinc.org', code: '29463-7' }],
    },
    subject: { reference: 'Patient/example' },
    dataAbsentReason: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/data-absent-reason',
          code: 'not-performed',
          display: 'Not Performed',
        },
      ],
    },
  } as IObservation,
  withCodeableConceptValue: {
    resourceType: 'Observation',
    id: 'coded-value',
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '72166-2',
          display: 'Tobacco smoking status',
        },
      ],
    },
    subject: { reference: 'Patient/example' },
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '449868002',
          display: 'Current every day smoker',
        },
      ],
    },
  } as IObservation,
};

describe('Observation', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const obs = new Observation({});
        expect(obs).toBeInstanceOf(Observation);
        expect(obs.resourceType).toBe('Observation');
      });

      it('should create simple observation', () => {
        const obs = new Observation(observations.simple);
        expect(obs.id).toBe('example');
        expect(obs.status).toBe('final');
        expect(obs.code?.coding?.[0].code).toBe('29463-7');
        expect(obs.valueQuantity?.value).toBe(70);
      });

      it('should create complete observation', () => {
        const obs = new Observation(observations.complete);
        expect(obs.identifier).toHaveLength(1);
        expect(obs.category).toHaveLength(1);
        expect(obs.performer).toHaveLength(1);
        expect(obs.interpretation).toHaveLength(1);
        expect(obs.referenceRange).toHaveLength(1);
        expect(obs.effectiveDateTime).toBe('2024-01-15T09:30:00Z');
      });

      it('should create blood pressure observation with components', () => {
        const obs = new Observation(observations.bloodPressure);
        expect(obs.component).toHaveLength(2);
        expect(obs.component?.[0].valueQuantity?.value).toBe(120);
        expect(obs.component?.[1].valueQuantity?.value).toBe(80);
      });

      it('should create lab result observation', () => {
        const obs = new Observation(observations.labResult);
        expect(obs.category?.[0].coding?.[0].code).toBe('laboratory');
        expect(obs.specimen?.reference).toBe('Specimen/blood');
      });

      it('should create observation with data absent reason', () => {
        const obs = new Observation(observations.withDataAbsent);
        expect(obs.dataAbsentReason?.coding?.[0].code).toBe('not-performed');
      });

      it('should create observation with codeable concept value', () => {
        const obs = new Observation(observations.withCodeableConceptValue);
        expect(obs.valueCodeableConcept?.coding?.[0].code).toBe('449868002');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const obs = new Observation(observations.complete);
        const json = obs.toJSON();

        expect(json.resourceType).toBe('Observation');
        expect(json.id).toBe('complete-obs');
        expect(json.code?.text).toBe('Heart rate');
      });

      it('should omit undefined properties in JSON', () => {
        const obs = new Observation(observations.simple);
        const json = obs.toJSON();

        expect(json.resourceType).toBeDefined();
        expect(json.code).toBeDefined();
        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('component');
        expect(json).not.toHaveProperty('dataAbsentReason');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Observation(observations.complete);
        expectSerializationRoundtrip(original, Observation);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IObservation = {
          resourceType: 'Observation',
          id: 'test',
          status: 'final',
          code: { coding: [{ code: 'test' }] },
        };
        const obs = Observation.fromJSON(json);

        expect(obs).toBeInstanceOf(Observation);
        expect(obs.id).toBe('test');
        expect(obs.status).toBe('final');
      });

      it('should create identical instance from JSON', () => {
        const original = new Observation(observations.complete);
        const json = original.toJSON();
        const restored = Observation.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
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

      it('should apply transform function correctly', () => {
        const obs = new Observation(observations.simple);
        const transformed = obs.applyTransform((data) => ({
          valueQuantity: {
            ...data.valueQuantity,
            value: (data.valueQuantity?.value || 0) + 5,
          },
        }));

        expect(transformed.valueQuantity?.value).toBe(75);
        expect(obs.valueQuantity?.value).toBe(70);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Observation(observations.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned component', () => {
        const original = new Observation(observations.bloodPressure);
        const cloned = original.clone();

        if (cloned.component && cloned.component[0].valueQuantity) {
          cloned.component[0].valueQuantity.value = 999;
        }

        expect(original.component?.[0].valueQuantity?.value).toBe(120);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const obs = new Observation(observations.simple);
        const str = obs.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Observation');
        expect(str).toContain('example');
      });
    });

    describe('Resource Properties', () => {
      it('should handle meta property', () => {
        const obs = new Observation({
          resourceType: 'Observation',
          status: 'final',
          code: { coding: [] },
          meta: {
            versionId: '2',
            profile: ['http://hl7.org/fhir/StructureDefinition/vitalsigns'],
          },
        });

        expect(obs.meta?.versionId).toBe('2');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const obs = new ObservationBuilder().build();
        expect(obs).toBeInstanceOf(Observation);
        expect(obs.resourceType).toBe('Observation');
      });

      it('should build with id', () => {
        const obs = new ObservationBuilder()
          .setId('123')
          .build();

        expect(obs.id).toBe('123');
      });

      it('should build with status', () => {
        const obs = new ObservationBuilder()
          .setStatus('final')
          .build();

        expect(obs.status).toBe('final');
      });

      it('should build with code', () => {
        const obs = new ObservationBuilder()
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '29463-7' }],
          })
          .build();

        expect(obs.code?.coding?.[0].code).toBe('29463-7');
      });

      it('should build with subject', () => {
        const obs = new ObservationBuilder()
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(obs.subject?.reference).toBe('Patient/123');
      });

      it('should build with encounter', () => {
        const obs = new ObservationBuilder()
          .setEncounter({ reference: 'Encounter/123' })
          .build();

        expect(obs.encounter?.reference).toBe('Encounter/123');
      });

      it('should build with issued', () => {
        const obs = new ObservationBuilder()
          .setIssued('2024-01-15T10:00:00Z')
          .build();

        expect(obs.issued).toBe('2024-01-15T10:00:00Z');
      });

      it('should build with bodySite', () => {
        const obs = new ObservationBuilder()
          .setBodySite({
            coding: [{ code: 'LA' }],
            text: 'Left arm',
          })
          .build();

        expect(obs.bodySite?.text).toBe('Left arm');
      });

      it('should build with method', () => {
        const obs = new ObservationBuilder()
          .setMethod({
            coding: [{ code: 'manual' }],
          })
          .build();

        expect(obs.method?.coding?.[0].code).toBe('manual');
      });

      it('should build with specimen', () => {
        const obs = new ObservationBuilder()
          .setSpecimen({ reference: 'Specimen/blood' })
          .build();

        expect(obs.specimen?.reference).toBe('Specimen/blood');
      });

      it('should build with device', () => {
        const obs = new ObservationBuilder()
          .setDevice({ reference: 'Device/bp-monitor' })
          .build();

        expect(obs.device?.reference).toBe('Device/bp-monitor');
      });

      it('should build with dataAbsentReason', () => {
        const obs = new ObservationBuilder()
          .setDataAbsentReason({
            coding: [{ code: 'not-performed' }],
          })
          .build();

        expect(obs.dataAbsentReason?.coding?.[0].code).toBe('not-performed');
      });
    });

    describe('Choice Types', () => {
      it('should set effectiveDateTime', () => {
        const obs = new ObservationBuilder()
          .setEffective('DateTime', '2024-01-15T09:30:00Z')
          .build();

        expect(obs.effectiveDateTime).toBe('2024-01-15T09:30:00Z');
      });

      it('should set valueQuantity', () => {
        const obs = new ObservationBuilder()
          .setValue('Quantity', { value: 70, unit: 'kg' } as any)
          .build();

        expect(obs.valueQuantity?.value).toBe(70);
      });

      it('should set valueBoolean', () => {
        const obs = new ObservationBuilder()
          .setValue('Boolean', true)
          .build();

        expect(obs.valueBoolean).toBe(true);
      });

      it('should set valueInteger', () => {
        const obs = new ObservationBuilder()
          .setValue('Integer', 42)
          .build();

        expect(obs.valueInteger).toBe(42);
      });

      it('should set valueString', () => {
        const obs = new ObservationBuilder()
          .setValue('String', 'positive' as any)
          .build();

        expect(obs.valueString).toBe('positive');
      });
    });

    describe('Array Properties', () => {
      it('should add identifiers', () => {
        const obs = new ObservationBuilder()
          .addIdentifier({ system: 'http://example.org', value: '123' })
          .addIdentifier({ system: 'http://example.org', value: '456' })
          .build();

        expect(obs.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const obs = new ObservationBuilder()
          .addCategory({ coding: [{ code: 'vital-signs' }] })
          .addCategory({ coding: [{ code: 'laboratory' }] })
          .build();

        expect(obs.category).toHaveLength(2);
      });

      it('should add performers', () => {
        const obs = new ObservationBuilder()
          .addPerformer({ reference: 'Practitioner/1' })
          .addPerformer({ reference: 'Organization/1' })
          .build();

        expect(obs.performer).toHaveLength(2);
      });

      it('should add interpretations', () => {
        const obs = new ObservationBuilder()
          .addInterpretation({ coding: [{ code: 'H', display: 'High' }] })
          .build();

        expect(obs.interpretation).toHaveLength(1);
      });

      it('should add notes', () => {
        const obs = new ObservationBuilder()
          .addNote({ text: 'Patient was fasting' })
          .build();

        expect(obs.note).toHaveLength(1);
      });

      it('should add reference ranges', () => {
        const obs = new ObservationBuilder()
          .addReferenceRange({
            low: { value: 60 },
            high: { value: 100 },
          })
          .build();

        expect(obs.referenceRange).toHaveLength(1);
      });

      it('should add components', () => {
        const obs = new ObservationBuilder()
          .addComponent({
            code: { coding: [{ code: 'systolic' }] },
            valueQuantity: { value: 120 },
          })
          .addComponent({
            code: { coding: [{ code: 'diastolic' }] },
            valueQuantity: { value: 80 },
          })
          .build();

        expect(obs.component).toHaveLength(2);
      });

      it('should add basedOn', () => {
        const obs = new ObservationBuilder()
          .addBasedOn({ reference: 'ServiceRequest/1' })
          .build();

        expect(obs.basedOn).toHaveLength(1);
      });

      it('should add hasMember', () => {
        const obs = new ObservationBuilder()
          .addHasMember({ reference: 'Observation/component1' })
          .addHasMember({ reference: 'Observation/component2' })
          .build();

        expect(obs.hasMember).toHaveLength(2);
      });

      it('should add derivedFrom', () => {
        const obs = new ObservationBuilder()
          .addDerivedFrom({ reference: 'Observation/source' })
          .build();

        expect(obs.derivedFrom).toHaveLength(1);
      });
    });

    describe('DomainResource Builder Methods', () => {
      it('should set meta', () => {
        const obs = new ObservationBuilder()
          .setMeta({ versionId: '1' })
          .build();

        expect(obs.meta?.versionId).toBe('1');
      });

      it('should add extensions', () => {
        const obs = new ObservationBuilder()
          .addExtension({
            url: 'http://example.org/ext',
            valueString: 'test',
          })
          .build();

        expect(obs.extension).toHaveLength(1);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ObservationBuilder()
          .setId('123')
          .setStatus('final')
          .setCode({ coding: [] })
          .setSubject({ reference: 'Patient/1' });

        expect(builder).toBeInstanceOf(ObservationBuilder);
      });

      it('should allow overwriting properties', () => {
        const obs = new ObservationBuilder()
          .setStatus('preliminary')
          .setStatus('final')
          .build();

        expect(obs.status).toBe('final');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const obs = new ObservationBuilder()
          .setId('123')
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .setSubject({ reference: 'Patient/1' })
          .build();

        const json = obs.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ObservationBuilder()
          .setId('123')
          .setStatus('final')
          .setCode({ coding: [] })
          .build();

        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work in vital signs scenario', () => {
      const heartRate = new ObservationBuilder()
        .setId('heart-rate-001')
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
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
        })
        .setSubject({ reference: 'Patient/example' })
        .setEffective('DateTime', '2024-01-15T09:30:00Z')
        .setValue('Quantity', { value: 72, unit: '/min' } as any)
        .addReferenceRange({
          low: { value: 60, unit: '/min' },
          high: { value: 100, unit: '/min' },
        })
        .build();

      expect(heartRate.category?.[0].coding?.[0].code).toBe('vital-signs');
      expect(heartRate.valueQuantity?.value).toBe(72);

      const json = heartRate.toJSON();
      const restored = Observation.fromJSON(json);

      expect(restored.code?.coding?.[0].code).toBe('8867-4');
    });

    it('should work in blood pressure panel scenario', () => {
      const bp = new ObservationBuilder()
        .setId('bp-001')
        .setStatus('final')
        .addCategory({
          coding: [{ code: 'vital-signs' }],
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
        .addComponent({
          code: { coding: [{ code: '8480-6', display: 'Systolic' }] },
          valueQuantity: { value: 120, unit: 'mmHg' },
        })
        .addComponent({
          code: { coding: [{ code: '8462-4', display: 'Diastolic' }] },
          valueQuantity: { value: 80, unit: 'mmHg' },
        })
        .build();

      expect(bp.component).toHaveLength(2);
      expect(bp.component?.[0].valueQuantity?.value).toBe(120);
      expect(bp.component?.[1].valueQuantity?.value).toBe(80);
    });

    it('should work in lab result scenario', () => {
      const glucose = new ObservationBuilder()
        .setId('glucose-001')
        .setStatus('final')
        .addCategory({
          coding: [{ code: 'laboratory' }],
        })
        .setCode({
          coding: [
            {
              system: 'http://loinc.org',
              code: '2339-0',
              display: 'Glucose',
            },
          ],
        })
        .setSubject({ reference: 'Patient/example' })
        .setSpecimen({ reference: 'Specimen/blood' })
        .setValue('Quantity', { value: 95, unit: 'mg/dL' } as any)
        .addInterpretation({
          coding: [{ code: 'N', display: 'Normal' }],
        })
        .build();

      expect(glucose.specimen?.reference).toBe('Specimen/blood');
      expect(glucose.interpretation?.[0].coding?.[0].code).toBe('N');
    });

    it('should handle observation update', () => {
      const original = new Observation(observations.simple);

      const updated = original.with({
        status: 'amended',
        note: [{ text: 'Corrected value' }],
      });

      expect(updated.status).toBe('amended');
      expect(updated.note?.[0].text).toBe('Corrected value');
      expect(original.status).toBe('final');
    });

    it('should work in observation panel scenario', () => {
      const lipidPanel = new ObservationBuilder()
        .setId('lipid-panel')
        .setStatus('final')
        .setCode({
          coding: [{ code: '57698-3', display: 'Lipid panel' }],
        })
        .setSubject({ reference: 'Patient/example' })
        .addHasMember({ reference: 'Observation/cholesterol' })
        .addHasMember({ reference: 'Observation/triglycerides' })
        .addHasMember({ reference: 'Observation/hdl' })
        .addHasMember({ reference: 'Observation/ldl' })
        .build();

      expect(lipidPanel.hasMember).toHaveLength(4);
    });

    it('should work in smoking status scenario', () => {
      const smokingStatus = new ObservationBuilder()
        .setId('smoking-status')
        .setStatus('final')
        .addCategory({
          coding: [{ code: 'social-history' }],
        })
        .setCode({
          coding: [
            {
              system: 'http://loinc.org',
              code: '72166-2',
              display: 'Tobacco smoking status',
            },
          ],
        })
        .setSubject({ reference: 'Patient/example' })
        .setValue('CodeableConcept', {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '8517006',
              display: 'Ex-smoker',
            },
          ],
        } as any)
        .build();

      expect(smokingStatus.valueCodeableConcept?.coding?.[0].code).toBe('8517006');
    });
  });
});
