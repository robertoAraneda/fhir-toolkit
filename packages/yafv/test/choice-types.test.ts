/**
 * Tests for choice type (polymorphic) validation
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';
import type { FhirResource } from '../src/index.js';

describe('Choice Type Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();
  });

  describe('Observation value[x]', () => {
    it('should validate Observation with valueQuantity', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueQuantity: {
          value: 80,
          unit: 'beats/minute',
          system: 'http://unitsofmeasure.org',
          code: '/min',
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valueString', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueString: 'Normal',
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valueBoolean', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueBoolean: true,
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valueInteger', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueInteger: 42,
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valueCodeableConcept', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '260385009',
              display: 'Negative',
            },
          ],
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valueDateTime', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueDateTime: '2023-12-25T10:30:00Z',
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with valuePeriod', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valuePeriod: {
          start: '2023-01-01',
          end: '2023-12-31',
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect multiple value[x] variants', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueQuantity: {
          value: 80,
          unit: 'beats/minute',
        },
        valueString: 'Also a string', // Should not be present with valueQuantity
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('Multiple variants'))).toBe(true);
    });

    it('should detect invalid type for valueBoolean', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueBoolean: 'yes', // Should be boolean, not string
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should detect invalid type for valueInteger', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueInteger: 3.14, // Should be integer, not decimal
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should detect invalid dateTime format', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        valueDateTime: 'not-a-date',
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Patient deceased[x]', () => {
    it('should validate Patient with deceasedBoolean', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        deceasedBoolean: false,
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Patient with deceasedDateTime', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        deceasedDateTime: '2023-06-15',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect multiple deceased[x] variants', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        deceasedBoolean: true,
        deceasedDateTime: '2023-06-15',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('Multiple variants'))).toBe(true);
    });
  });

  describe('Patient multipleBirth[x]', () => {
    it('should validate Patient with multipleBirthBoolean', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        multipleBirthBoolean: true,
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Patient with multipleBirthInteger', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        multipleBirthInteger: 2,
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });
  });

  describe('Observation effective[x]', () => {
    it('should validate Observation with effectiveDateTime', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        effectiveDateTime: '2023-12-25T10:30:00Z',
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with effectivePeriod', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        effectivePeriod: {
          start: '2023-12-25T08:00:00Z',
          end: '2023-12-25T12:00:00Z',
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate Observation with effectiveInstant', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        effectiveInstant: '2023-12-25T10:30:00.123Z',
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });
  });
});
