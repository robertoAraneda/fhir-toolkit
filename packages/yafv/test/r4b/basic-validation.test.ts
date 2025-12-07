/**
 * Basic Validation Tests for FHIR R4B
 *
 * Tests basic validation functionality against FHIR R4B specs.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';

describe('FHIR R4B Basic Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    // Explicitly create an R4B validator
    validator = new FhirValidator({ fhirVersion: 'R4B' });
    await validator.initialize();
  });

  it('should be configured for R4B', () => {
    expect(validator.getFhirVersion()).toBe('R4B');
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
            resource: {
              resourceType: 'Patient',
              id: 'patient1',
              name: [{ family: 'Doe' }],
            },
          },
        ],
      };

      const result = await validator.validate(bundle);

      expect(result.issue.filter((i) => i.severity === 'error')).toHaveLength(0);
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

  describe('R4B-Specific Resources', () => {
    it('should validate Citation resource (new in R4B)', async () => {
      const citation = {
        resourceType: 'Citation',
        id: 'example',
        status: 'active',
      };

      const result = await validator.validate(citation);

      // Citation exists in R4B
      const unknownResourceErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.diagnostics?.toLowerCase().includes('unknown resource')
      );
      expect(unknownResourceErrors).toHaveLength(0);
    });

    it('should validate EvidenceReport resource (new in R4B)', async () => {
      const evidenceReport = {
        resourceType: 'EvidenceReport',
        id: 'example',
        status: 'active',
      };

      const result = await validator.validate(evidenceReport);

      const unknownResourceErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.diagnostics?.toLowerCase().includes('unknown resource')
      );
      expect(unknownResourceErrors).toHaveLength(0);
    });

    it('should validate SubscriptionStatus resource (new in R4B)', async () => {
      const subscriptionStatus = {
        resourceType: 'SubscriptionStatus',
        id: 'example',
        status: 'active',
        type: 'heartbeat',
        subscription: {
          reference: 'Subscription/example',
        },
      };

      const result = await validator.validate(subscriptionStatus);

      const unknownResourceErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.diagnostics?.toLowerCase().includes('unknown resource')
      );
      expect(unknownResourceErrors).toHaveLength(0);
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
