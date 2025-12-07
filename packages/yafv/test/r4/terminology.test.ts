/**
 * Tests for terminology validation
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import type { FhirResource } from '../../src/index.js';

describe('Terminology Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  describe('Patient.gender binding (required)', () => {
    it('should validate valid gender code', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        gender: 'male',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('gender'))).toBe(false);
    });

    it('should validate all valid gender codes', async () => {
      const validGenders = ['male', 'female', 'other', 'unknown'];

      for (const gender of validGenders) {
        const patient: FhirResource = {
          resourceType: 'Patient',
          gender,
        };
        const outcome = await validator.validate(patient);
        const genderErrors = outcome.issue.filter(
          (i) => i.severity === 'error' && i.expression?.[0]?.includes('gender')
        );
        expect(genderErrors).toHaveLength(0);
      }
    });

    it('should detect invalid gender code', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        gender: 'invalid-gender',
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.expression?.[0]?.includes('gender')
      );
      // Should have an error for invalid code
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Observation.status binding (required)', () => {
    it('should validate valid status code', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
      };
      const outcome = await validator.validate(observation);
      const statusErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.expression?.[0]?.includes('status')
      );
      expect(statusErrors).toHaveLength(0);
    });

    it('should validate all valid status codes', async () => {
      const validStatuses = [
        'registered',
        'preliminary',
        'final',
        'amended',
        'corrected',
        'cancelled',
        'entered-in-error',
        'unknown',
      ];

      for (const status of validStatuses) {
        const observation: FhirResource = {
          resourceType: 'Observation',
          status,
          code: {
            coding: [{ system: 'http://loinc.org', code: '8867-4' }],
          },
        };
        const outcome = await validator.validate(observation);
        const statusErrors = outcome.issue.filter(
          (i) =>
            i.severity === 'error' &&
            i.code === 'code-invalid' &&
            i.expression?.[0]?.includes('status')
        );
        expect(statusErrors).toHaveLength(0);
      }
    });

    it('should detect invalid status code', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'invalid-status',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
      };
      const outcome = await validator.validate(observation);
      const errors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.expression?.[0]?.includes('status')
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('CodeableConcept validation', () => {
    it('should validate Observation with valid category code', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '8867-4' }],
        },
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
      };
      const outcome = await validator.validate(observation);
      const categoryErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'code-invalid' &&
          i.expression?.[0]?.includes('category')
      );
      expect(categoryErrors).toHaveLength(0);
    });
  });

  describe('Address.use binding (required)', () => {
    it('should validate valid address use', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        address: [
          {
            use: 'home',
            city: 'Boston',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const useErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'code-invalid' &&
          i.expression?.[0]?.includes('address') &&
          i.expression?.[0]?.includes('use')
      );
      expect(useErrors).toHaveLength(0);
    });

    it('should validate all valid address use codes', async () => {
      const validUses = ['home', 'work', 'temp', 'old', 'billing'];

      for (const use of validUses) {
        const patient: FhirResource = {
          resourceType: 'Patient',
          address: [{ use, city: 'Test' }],
        };
        const outcome = await validator.validate(patient);
        const useErrors = outcome.issue.filter(
          (i) =>
            i.severity === 'error' &&
            i.code === 'code-invalid' &&
            i.expression?.[0]?.includes('use')
        );
        expect(useErrors).toHaveLength(0);
      }
    });
  });

  describe('ContactPoint.system binding (required)', () => {
    it('should validate valid telecom system', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        telecom: [
          {
            system: 'phone',
            value: '555-1234',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const systemErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'code-invalid' &&
          i.expression?.[0]?.includes('system')
      );
      expect(systemErrors).toHaveLength(0);
    });

    it('should validate all valid telecom systems', async () => {
      const validSystems = ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'];

      for (const system of validSystems) {
        const patient: FhirResource = {
          resourceType: 'Patient',
          telecom: [{ system, value: 'test' }],
        };
        const outcome = await validator.validate(patient);
        const systemErrors = outcome.issue.filter(
          (i) =>
            i.severity === 'error' &&
            i.code === 'code-invalid' &&
            i.expression?.[0]?.includes('system')
        );
        expect(systemErrors).toHaveLength(0);
      }
    });
  });

  describe('HumanName.use binding (required)', () => {
    it('should validate valid name use', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [
          {
            use: 'official',
            family: 'Doe',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const useErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'code-invalid' &&
          i.expression?.[0]?.includes('name') &&
          i.expression?.[0]?.includes('use')
      );
      expect(useErrors).toHaveLength(0);
    });

    it('should validate all valid name use codes', async () => {
      const validUses = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'];

      for (const use of validUses) {
        const patient: FhirResource = {
          resourceType: 'Patient',
          name: [{ use, family: 'Test' }],
        };
        const outcome = await validator.validate(patient);
        const useErrors = outcome.issue.filter(
          (i) =>
            i.severity === 'error' &&
            i.code === 'code-invalid' &&
            i.expression?.[0]?.includes('use')
        );
        expect(useErrors).toHaveLength(0);
      }
    });
  });

  describe('Multiple coded elements', () => {
    it('should validate Patient with multiple coded fields', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        gender: 'female',
        maritalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
              code: 'M',
              display: 'Married',
            },
          ],
        },
        name: [
          {
            use: 'official',
            family: 'Smith',
            given: ['Jane'],
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: '555-1234',
            use: 'home',
          },
          {
            system: 'email',
            value: 'jane@example.com',
            use: 'work',
          },
        ],
        address: [
          {
            use: 'home',
            line: ['123 Main St'],
            city: 'Boston',
            state: 'MA',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const codeErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.code === 'code-invalid'
      );
      expect(codeErrors).toHaveLength(0);
    });
  });

  describe('Registry stats', () => {
    it('should have loaded ValueSets and CodeSystems', async () => {
      const registry = validator.getRegistry();
      const stats = registry.getStats();

      // We should have loaded terminology resources
      expect(stats.valueSets).toBeGreaterThan(0);
      expect(stats.codeSystems).toBeGreaterThan(0);
    });
  });
});
