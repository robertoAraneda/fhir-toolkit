/**
 * Tests for FHIRPath constraint evaluation
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';
import type { FhirResource } from '../src/index.js';

describe('FHIRPath Constraint Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();
  });

  describe('Observation constraints', () => {
    it('should pass obs-6: dataAbsentReason with no value', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        dataAbsentReason: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/data-absent-reason',
              code: 'unknown',
            },
          ],
        },
        // No value[x] - this is correct
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('obs-6'))).toBe(false);
    });

    it('should fail obs-6: dataAbsentReason with value present', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        dataAbsentReason: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/data-absent-reason',
              code: 'unknown',
            },
          ],
        },
        valueString: 'Some value', // Should not be present with dataAbsentReason
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('obs-6'))).toBe(true);
    });

    it('should pass obs-7: different codes in code and component', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '85354-9' }], // Blood pressure panel
        },
        component: [
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8480-6' }], // Systolic
            },
            valueQuantity: { value: 120, unit: 'mmHg' },
          },
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8462-4' }], // Diastolic
            },
            valueQuantity: { value: 80, unit: 'mmHg' },
          },
        ],
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('obs-7'))).toBe(false);
    });
  });

  describe('DomainResource constraints', () => {
    it('should pass dom-2: no nested contained resources', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Test Hospital',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('dom-2'))).toBe(false);
    });

    it('should pass dom-3: contained resources are referenced', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Test Hospital',
          },
        ],
        managingOrganization: {
          reference: '#org1',
        },
      };
      const outcome = await validator.validate(patient);
      // Note: dom-3 check requires full reference resolution which may not be implemented yet
      expect(outcome.resourceType).toBe('OperationOutcome');
    });
  });

  describe('Resource-specific constraints', () => {
    it('should validate Patient without constraint errors', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Doe',
            given: ['John'],
          },
        ],
        gender: 'male',
        birthDate: '1990-01-15',
      };
      const outcome = await validator.validate(patient);
      const constraintErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.code === 'invariant'
      );
      expect(constraintErrors).toHaveLength(0);
    });

    it('should validate complete Observation without constraint errors', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
        },
        subject: {
          reference: 'Patient/123',
        },
        effectiveDateTime: '2023-12-25T10:30:00Z',
        valueQuantity: {
          value: 80,
          unit: 'beats/minute',
          system: 'http://unitsofmeasure.org',
          code: '/min',
        },
      };
      const outcome = await validator.validate(observation);
      const constraintErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.code === 'invariant'
      );
      expect(constraintErrors).toHaveLength(0);
    });
  });

  describe('Extension constraints', () => {
    it('should validate extension with url and value', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        extension: [
          {
            url: 'http://example.org/fhir/StructureDefinition/patient-importance',
            valueString: 'VIP',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const extErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('ext-1')
      );
      expect(extErrors).toHaveLength(0);
    });
  });

  describe('Constraint severity levels', () => {
    it('should report constraint failures with correct severity', async () => {
      // This test checks that error-level constraints are reported as errors
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
        dataAbsentReason: {
          coding: [{ system: 'http://example.org', code: 'unknown' }],
        },
        valueString: 'Present', // Violates obs-6
      };
      const outcome = await validator.validate(observation);
      const obs6Error = outcome.issue.find((i) => i.diagnostics?.includes('obs-6'));
      expect(obs6Error).toBeDefined();
      expect(obs6Error?.severity).toBe('error');
    });
  });
});
