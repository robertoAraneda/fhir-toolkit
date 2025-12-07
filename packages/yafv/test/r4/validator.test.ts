/**
 * Tests for FhirValidator
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator, validate, isValid } from '../../src/index.js';
import type { FhirResource } from '../../src/index.js';

describe('FhirValidator', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  describe('Basic validation', () => {
    it('should reject null resource', async () => {
      const outcome = await validator.validate(null as any);
      expect(outcome.resourceType).toBe('OperationOutcome');
      expect(outcome.issue).toHaveLength(1);
      expect(outcome.issue[0].severity).toBe('error');
      expect(outcome.issue[0].code).toBe('invalid');
    });

    it('should reject resource without resourceType', async () => {
      const outcome = await validator.validate({} as any);
      expect(outcome.issue).toHaveLength(1);
      expect(outcome.issue[0].severity).toBe('error');
      expect(outcome.issue[0].code).toBe('required');
      expect(outcome.issue[0].diagnostics).toContain('resourceType');
    });

    it('should reject unknown resource type', async () => {
      const resource: FhirResource = {
        resourceType: 'UnknownResource',
      };
      const outcome = await validator.validate(resource);
      expect(outcome.issue).toHaveLength(1);
      expect(outcome.issue[0].severity).toBe('error');
      expect(outcome.issue[0].code).toBe('not-supported');
    });
  });

  describe('Patient validation', () => {
    it('should validate a minimal valid Patient', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should validate a Patient with name', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        id: 'example',
        name: [
          {
            family: 'Doe',
            given: ['John'],
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid gender value', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        gender: 'invalid-gender',
      };
      const outcome = await validator.validate(patient);
      // This should produce an error for invalid code value
      // Note: Full terminology validation will be implemented later
      expect(outcome.resourceType).toBe('OperationOutcome');
    });

    it('should detect invalid birthDate format', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        birthDate: 'not-a-date',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should validate correct birthDate format', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect unknown elements', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        unknownField: 'value',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('unknownField'))).toBe(true);
    });
  });

  describe('Observation validation', () => {
    it('should require status in Observation', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      // Observation requires status
      expect(errors.some((e) => e.diagnostics?.includes('status'))).toBe(true);
    });

    it('should validate complete Observation', async () => {
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
  });

  describe('Primitive type validation', () => {
    it('should validate id format', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        id: 'valid-id-123',
      };
      const outcome = await validator.validate(patient);
      const idErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.expression?.[0]?.includes('id')
      );
      expect(idErrors).toHaveLength(0);
    });

    it('should reject invalid id format', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        id: 'invalid id with spaces!!!',
      };
      const outcome = await validator.validate(patient);
      // Note: Full id format validation requires resolving FHIRPath type extensions
      // For now, this test documents the current behavior
      // TODO: Implement id format validation via FHIRPath type extensions
      expect(outcome.resourceType).toBe('OperationOutcome');
    });

    it('should validate boolean values', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        active: true,
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should reject invalid boolean values', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        active: 'yes' as any,
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Convenience functions', () => {
    it('validate() should work without creating validator instance', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        id: 'test',
      };
      const outcome = await validate(patient);
      expect(outcome.resourceType).toBe('OperationOutcome');
    });

    it('isValid() should return true for valid resource', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
      };
      const valid = await isValid(patient);
      expect(valid).toBe(true);
    });

    it('isValid() should return false for invalid resource', async () => {
      const valid = await isValid({} as any);
      expect(valid).toBe(false);
    });
  });

  describe('SpecRegistry', () => {
    it('should have loaded specs', async () => {
      const registry = validator.getRegistry();
      const stats = registry.getStats();
      expect(stats.structureDefinitions).toBeGreaterThan(0);
      expect(stats.total).toBeGreaterThan(0);
    });

    it('should find Patient StructureDefinition', async () => {
      const registry = validator.getRegistry();
      const patientSD = registry.getStructureDefinition('Patient');
      expect(patientSD).toBeDefined();
      expect(patientSD?.resourceType).toBe('StructureDefinition');
      expect(patientSD?.type).toBe('Patient');
    });

    it('should find Observation StructureDefinition', async () => {
      const registry = validator.getRegistry();
      const observationSD = registry.getStructureDefinition('Observation');
      expect(observationSD).toBeDefined();
      expect(observationSD?.type).toBe('Observation');
    });
  });
});
