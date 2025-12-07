/**
 * Tests for nested element validation in arrays
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';
import type { FhirResource } from '../src/index.js';

describe('Nested Array Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();
  });

  describe('Patient.name nested elements', () => {
    it('should validate multiple names with correct types', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            use: 'official',
            family: 'Doe',
            given: ['John', 'James'],
          },
          {
            use: 'nickname',
            given: ['Johnny'],
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid family type in array item', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Doe',
            given: ['John'],
          },
          {
            family: 123, // Should be string, not number
            given: ['Jane'],
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      // Error should include array index in path
      expect(errors.some((e) => e.expression?.[0]?.includes('[1]'))).toBe(true);
    });

    it('should detect invalid given type in array item', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Doe',
            given: [123, 'John'], // First item should be string
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Patient.address nested elements', () => {
    it('should validate multiple addresses with correct types', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        address: [
          {
            use: 'home',
            line: ['123 Main St', 'Apt 4'],
            city: 'Boston',
            state: 'MA',
          },
          {
            use: 'work',
            line: ['456 Office Blvd'],
            city: 'Cambridge',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid postalCode type in second address', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        address: [
          {
            city: 'Boston',
            postalCode: '02115',
          },
          {
            city: 'Cambridge',
            postalCode: 12345, // Should be string
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      // Error should include array index in path
      expect(errors.some((e) => e.expression?.[0]?.includes('[1]'))).toBe(true);
    });
  });

  describe('Patient.telecom nested elements', () => {
    it('should validate multiple telecom entries', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        telecom: [
          {
            system: 'phone',
            value: '555-1234',
            use: 'home',
          },
          {
            system: 'email',
            value: 'john@example.com',
            use: 'work',
          },
          {
            system: 'phone',
            value: '555-5678',
            use: 'mobile',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid rank type', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        telecom: [
          {
            system: 'phone',
            value: '555-1234',
            rank: 1,
          },
          {
            system: 'phone',
            value: '555-5678',
            rank: 'second', // Should be positiveInt
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Patient.identifier nested elements', () => {
    it('should validate multiple identifiers with periods', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        identifier: [
          {
            system: 'http://hospital.example.org',
            value: '12345',
            period: {
              start: '2020-01-01',
              end: '2025-12-31',
            },
          },
          {
            system: 'http://insurance.example.org',
            value: 'ABC123',
            period: {
              start: '2023-01-01',
            },
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid date in identifier period', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        identifier: [
          {
            system: 'http://hospital.example.org',
            value: '12345',
            period: {
              start: 'invalid-date',
            },
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Observation.component nested elements', () => {
    it('should validate observation with multiple components', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '85354-9' }],
        },
        component: [
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8480-6' }],
            },
            valueQuantity: {
              value: 120,
              unit: 'mmHg',
            },
          },
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8462-4' }],
            },
            valueQuantity: {
              value: 80,
              unit: 'mmHg',
            },
          },
        ],
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });
  });

  describe('Deeply nested arrays', () => {
    it('should validate nested coding arrays in identifier type', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        identifier: [
          {
            type: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                  code: 'MR',
                  display: 'Medical Record',
                },
                {
                  system: 'http://local.example.org/codes',
                  code: 'LOCAL-MR',
                },
              ],
            },
            value: '12345',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid coding system type', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        identifier: [
          {
            type: {
              coding: [
                {
                  system: 123, // Should be uri (string)
                  code: 'MR',
                },
              ],
            },
            value: '12345',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Multiple array indices in path', () => {
    it('should report correct path for errors in nested arrays', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Doe',
            given: ['John'],
          },
          {
            family: 123, // Error in name[1]
            given: ['Jane'],
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');

      // Check that the path includes the array index
      const nameError = errors.find((e) =>
        e.expression?.[0]?.includes('name') &&
        e.expression?.[0]?.includes('[1]')
      );
      expect(nameError).toBeDefined();
    });
  });

  describe('Scalar value in array field', () => {
    it('should detect scalar value where array is expected for given', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Pérez',
            given: ['Juan'],
          },
          {
            family: 'Ruiz',
            given: 'male', // Should be array: ['male']
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');

      // Should have an error about scalar value in array field
      const scalarError = errors.find((e) =>
        e.diagnostics?.includes('array field') &&
        e.diagnostics?.includes('scalar value')
      );
      expect(scalarError).toBeDefined();
      expect(scalarError?.expression?.[0]).toContain('given');
    });

    it('should detect scalar value where array is expected for line in address', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        address: [
          {
            city: 'Boston',
            line: '123 Main St', // Should be array: ['123 Main St']
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');

      const scalarError = errors.find((e) =>
        e.diagnostics?.includes('array field') &&
        e.diagnostics?.includes('scalar value')
      );
      expect(scalarError).toBeDefined();
      expect(scalarError?.expression?.[0]).toContain('line');
    });

    it('should accept correct array syntax for given', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            family: 'Pérez',
            given: ['Juan'],
          },
          {
            family: 'Ruiz',
            given: ['male'], // Correct: array syntax
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should detect scalar value for top-level array field like identifier', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        identifier: {
          system: 'http://example.org',
          value: '12345',
        } as any, // Should be array: [{ system: '...', value: '...' }]
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');

      const scalarError = errors.find((e) =>
        e.diagnostics?.includes('array field') &&
        e.diagnostics?.includes('scalar value')
      );
      expect(scalarError).toBeDefined();
    });

    it('should detect scalar value for name array field', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: {
          family: 'Doe',
          given: ['John'],
        } as any, // Should be array: [{ family: 'Doe', given: ['John'] }]
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');

      const scalarError = errors.find((e) =>
        e.diagnostics?.includes('array field') &&
        e.diagnostics?.includes('scalar value')
      );
      expect(scalarError).toBeDefined();
    });
  });
});
