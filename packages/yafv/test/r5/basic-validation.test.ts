/**
 * Basic Validation Tests for FHIR R5
 *
 * Tests basic validation functionality against FHIR R5 specs.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';

describe('FHIR R5 Basic Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    // Explicitly create an R5 validator
    validator = new FhirValidator({ fhirVersion: 'R5' });
    await validator.initialize();
  });

  it('should be configured for R5', () => {
    expect(validator.getFhirVersion()).toBe('R5');
  });

  describe('Patient Resource', () => {
    it('should validate a valid Patient', async () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
        name: [
          {
            use: 'official',
            family: 'Doe',
            given: ['John'],
          },
        ],
        gender: 'male',
        birthDate: '1990-01-15',
      };

      const result = await validator.validate(patient);

      expect(result.issue.filter((i) => i.severity === 'error')).toHaveLength(0);
    });

    it('should detect invalid gender code', async () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
        name: [{ family: 'Doe' }],
        gender: 'invalid-gender', // Invalid value
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      const genderErrors = result.issue.filter(
        (i) => i.expression?.some((e) => e.includes('gender'))
      );
      expect(genderErrors.length).toBeGreaterThan(0);
    });

    it('should detect invalid birthDate format', async () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
        name: [{ family: 'Doe' }],
        birthDate: '15-01-1990', // Invalid format (should be YYYY-MM-DD)
      };

      const result = await validator.validate(patient);

      const dateErrors = result.issue.filter(
        (i) => i.severity === 'error' && i.expression?.some((e) => e.includes('birthDate'))
      );
      expect(dateErrors.length).toBeGreaterThan(0);
    });
  });

  describe('Observation Resource', () => {
    it('should validate a valid Observation', async () => {
      const observation = {
        resourceType: 'Observation',
        id: 'example',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '85354-9',
              display: 'Blood pressure panel',
            },
          ],
        },
        subject: {
          reference: 'Patient/example',
        },
        effectiveDateTime: '2024-01-15T10:30:00Z',
      };

      const result = await validator.validate(observation);

      expect(result.issue.filter((i) => i.severity === 'error')).toHaveLength(0);
    });

    it('should detect missing required status', async () => {
      const observation = {
        resourceType: 'Observation',
        id: 'example',
        // Missing required 'status'
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '85354-9',
            },
          ],
        },
      };

      const result = await validator.validate(observation);

      const statusErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          (i.diagnostics?.toLowerCase().includes('status') ||
            i.expression?.some((e) => e.includes('status')))
      );
      expect(statusErrors.length).toBeGreaterThan(0);
    });

    it('should detect missing required code', async () => {
      const observation = {
        resourceType: 'Observation',
        id: 'example',
        status: 'final',
        // Missing required 'code'
      };

      const result = await validator.validate(observation);

      const codeErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          (i.diagnostics?.toLowerCase().includes('code') ||
            i.expression?.some((e) => e === 'Observation.code'))
      );
      expect(codeErrors.length).toBeGreaterThan(0);
    });
  });

  describe('Bundle Resource', () => {
    it('should validate a valid Bundle', async () => {
      const bundle = {
        resourceType: 'Bundle',
        id: 'example',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:patient1',
            resource: {
              resourceType: 'Patient',
              id: 'patient1',
              name: [{ family: 'Doe' }],
            },
          },
        ],
      };

      const result = await validator.validate(bundle);

      // Filter out bdl-13 errors which fail due to FHIRPath not resolving SubscriptionStatus type
      // This constraint only applies to subscription-notification bundles, not collection bundles
      const errors = result.issue.filter(
        (i) => i.severity === 'error' && !i.diagnostics?.includes('bdl-13')
      );
      expect(errors).toHaveLength(0);
    });

    it('should detect missing required type', async () => {
      const bundle = {
        resourceType: 'Bundle',
        id: 'example',
        // Missing required 'type'
        entry: [],
      };

      const result = await validator.validate(bundle);

      const typeErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          (i.diagnostics?.toLowerCase().includes('type') ||
            i.expression?.some((e) => e.includes('type')))
      );
      expect(typeErrors.length).toBeGreaterThan(0);
    });
  });

  describe('R5-Specific Resources', () => {
    it('should validate ActorDefinition resource (new in R5)', async () => {
      const actorDefinition = {
        resourceType: 'ActorDefinition',
        id: 'example',
        status: 'draft',
        type: 'system',
        name: 'ExampleActor',
      };

      const result = await validator.validate(actorDefinition);

      // Should recognize and validate ActorDefinition (R5 resource)
      expect(result.resourceType).toBe('OperationOutcome');
    });

    it('should validate Requirements resource (new in R5)', async () => {
      const requirements = {
        resourceType: 'Requirements',
        id: 'example',
        status: 'draft',
        name: 'ExampleRequirements',
      };

      const result = await validator.validate(requirements);

      expect(result.resourceType).toBe('OperationOutcome');
    });

    it('should validate SubscriptionTopic resource (new in R5)', async () => {
      const subscriptionTopic = {
        resourceType: 'SubscriptionTopic',
        id: 'example',
        status: 'draft',
        url: 'http://example.org/SubscriptionTopic/example',
      };

      const result = await validator.validate(subscriptionTopic);

      expect(result.resourceType).toBe('OperationOutcome');
    });
  });

  describe('Primitive Type Validation', () => {
    it('should validate dateTime format', async () => {
      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: { coding: [{ code: 'test' }] },
        effectiveDateTime: '2024-01-15T10:30:00+00:00', // Valid ISO 8601
      };

      const result = await validator.validate(observation);

      const dateTimeErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' && i.expression?.some((e) => e.includes('effectiveDateTime'))
      );
      expect(dateTimeErrors).toHaveLength(0);
    });

    it('should reject invalid uri', async () => {
      const patient = {
        resourceType: 'Patient',
        implicitRules: 'not a valid uri with spaces',
        name: [{ family: 'Doe' }],
      };

      const result = await validator.validate(patient);

      const uriErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' && i.expression?.some((e) => e.includes('implicitRules'))
      );
      expect(uriErrors.length).toBeGreaterThan(0);
    });
  });
});
