/**
 * Tests for Bundle and Contained Resource validation
 */

import { describe, it, expect } from 'vitest';
import {
  validateBundle,
  Bundle,
} from '../src/validators/bundle-validator.js';
import {
  validateContainedResources,
  resolveContainedReference,
} from '../src/validators/contained-validator.js';
import {
  validateReference,
  parseReference,
  referencesMatch,
} from '../src/validators/reference-validator.js';
import type { FhirResource } from '../src/index.js';

describe('Bundle Validation', () => {
  describe('Bundle type validation', () => {
    it('should validate transaction bundle', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'transaction',
        entry: [
          {
            fullUrl: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a',
            resource: {
              resourceType: 'Patient',
              name: [{ family: 'Doe' }],
            },
            request: {
              method: 'POST',
              url: 'Patient',
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(true);
      expect(result.issues.filter((i) => i.severity === 'error')).toHaveLength(0);
    });

    it('should error when transaction entry missing request', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'transaction',
        entry: [
          {
            fullUrl: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a',
            resource: {
              resourceType: 'Patient',
            },
            // Missing request
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('request'))).toBe(true);
    });

    it('should validate batch bundle', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'batch',
        entry: [
          {
            request: {
              method: 'GET',
              url: 'Patient/123',
            },
          },
          {
            resource: {
              resourceType: 'Patient',
              name: [{ family: 'Smith' }],
            },
            request: {
              method: 'POST',
              url: 'Patient',
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(true);
    });

    it('should error when document bundle first entry is not Composition', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'document',
        entry: [
          {
            fullUrl: 'urn:uuid:patient-1',
            resource: {
              resourceType: 'Patient', // Should be Composition
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('Composition'))).toBe(true);
    });

    it('should error when message bundle first entry is not MessageHeader', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'message',
        entry: [
          {
            fullUrl: 'urn:uuid:patient-1',
            resource: {
              resourceType: 'Patient', // Should be MessageHeader
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('MessageHeader'))).toBe(true);
    });

    it('should validate searchset bundle', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        total: 2,
        entry: [
          {
            fullUrl: 'http://example.org/fhir/Patient/1',
            resource: {
              resourceType: 'Patient',
              id: '1',
            },
            search: {
              mode: 'match',
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Patient/2',
            resource: {
              resourceType: 'Patient',
              id: '2',
            },
            search: {
              mode: 'match',
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(true);
    });

    it('should validate collection bundle', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'http://example.org/fhir/Patient/1',
            resource: {
              resourceType: 'Patient',
              id: '1',
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(true);
    });
  });

  describe('Bundle entry validation', () => {
    it('should validate fullUrl formats', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a',
            resource: { resourceType: 'Patient' },
          },
          {
            fullUrl: 'http://example.org/fhir/Patient/1',
            resource: { resourceType: 'Patient', id: '1' },
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(true);
    });

    it('should warn for invalid fullUrl format', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'invalid-url',
            resource: { resourceType: 'Patient' },
          },
        ],
      };

      const result = await validateBundle(bundle);
      const warnings = result.issues.filter((i) => i.severity === 'warning');
      expect(warnings.some((w) => w.diagnostics?.includes('fullUrl'))).toBe(true);
    });

    it('should error when entry resource missing resourceType', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:test',
            resource: {
              name: 'invalid',
            } as any,
          },
        ],
      };

      const result = await validateBundle(bundle);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('resourceType'))).toBe(true);
    });
  });

  describe('Bundle reference validation', () => {
    it('should validate internal references', async () => {
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:patient-1',
            resource: {
              resourceType: 'Patient',
              id: 'patient-1',
            },
          },
          {
            fullUrl: 'urn:uuid:observation-1',
            resource: {
              resourceType: 'Observation',
              id: 'observation-1',
              status: 'final',
              code: { text: 'test' },
              subject: {
                reference: 'Patient/patient-1',
              },
            },
          },
        ],
      };

      const result = await validateBundle(bundle);
      // Should not have errors for found reference
      const notFoundErrors = result.issues.filter(
        (i) => i.severity === 'error' && i.code === 'not-found'
      );
      expect(notFoundErrors).toHaveLength(0);
    });
  });
});

describe('Contained Resource Validation', () => {
  describe('Basic contained validation', () => {
    it('should validate valid contained resources', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Test Org',
          },
        ],
        managingOrganization: {
          reference: '#org1',
        },
      };

      const result = await validateContainedResources(patient);
      expect(result.valid).toBe(true);
    });

    it('should error when contained resource missing id', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            // Missing id
            name: 'Test Org',
          },
        ],
      };

      const result = await validateContainedResources(patient);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('id'))).toBe(true);
    });

    it('should error when contained resource missing resourceType', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            id: 'org1',
            name: 'Test Org',
          } as any,
        ],
      };

      const result = await validateContainedResources(patient);
      expect(result.valid).toBe(false);
    });

    it('should error for duplicate contained ids', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Org 1',
          },
          {
            resourceType: 'Organization',
            id: 'org1', // Duplicate
            name: 'Org 2',
          },
        ],
      };

      const result = await validateContainedResources(patient);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.code === 'duplicate')).toBe(true);
    });

    it('should error for nested contained resources', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            contained: [
              // Nested contained not allowed
              {
                resourceType: 'Location',
                id: 'loc1',
              },
            ],
          },
        ],
      };

      const result = await validateContainedResources(patient);
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.some((e) => e.diagnostics?.includes('nested'))).toBe(true);
    });

    it('should warn for unreferenced contained resources', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Test Org',
          },
        ],
        // No reference to #org1
      };

      const result = await validateContainedResources(patient);
      const warnings = result.issues.filter((i) => i.severity === 'warning');
      expect(warnings.some((w) => w.diagnostics?.includes('not referenced'))).toBe(true);
    });
  });

  describe('resolveContainedReference', () => {
    it('should resolve contained reference', () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
            name: 'Test Org',
          },
        ],
      };

      const org = resolveContainedReference('#org1', patient);
      expect(org).toBeDefined();
      expect(org?.resourceType).toBe('Organization');
    });

    it('should return undefined for non-contained reference', () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
          },
        ],
      };

      const org = resolveContainedReference('Organization/org1', patient);
      expect(org).toBeUndefined();
    });

    it('should return undefined for missing reference', () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        contained: [
          {
            resourceType: 'Organization',
            id: 'org1',
          },
        ],
      };

      const org = resolveContainedReference('#org2', patient);
      expect(org).toBeUndefined();
    });
  });
});

describe('Reference Validation', () => {
  describe('validateReference', () => {
    it('should validate relative reference', () => {
      const result = validateReference(
        { reference: 'Patient/123' },
        'subject'
      );
      expect(result.valid).toBe(true);
    });

    it('should validate contained reference', () => {
      const result = validateReference(
        { reference: '#contained-id' },
        'subject'
      );
      expect(result.valid).toBe(true);
    });

    it('should validate absolute reference', () => {
      const result = validateReference(
        { reference: 'http://example.org/fhir/Patient/123' },
        'subject'
      );
      expect(result.valid).toBe(true);
    });

    it('should validate URN reference', () => {
      const result = validateReference(
        { reference: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a' },
        'subject'
      );
      expect(result.valid).toBe(true);
    });

    it('should error when reference has no content', () => {
      const result = validateReference({}, 'subject');
      expect(result.valid).toBe(false);
      const errors = result.issues.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should accept identifier-only reference', () => {
      const result = validateReference(
        {
          identifier: {
            system: 'http://example.org/mrn',
            value: '12345',
          },
        },
        'subject'
      );
      expect(result.valid).toBe(true);
    });

    it('should accept display-only reference', () => {
      const result = validateReference(
        {
          display: 'John Doe',
        },
        'subject'
      );
      expect(result.valid).toBe(true);
    });
  });

  describe('parseReference', () => {
    it('should parse relative reference', () => {
      const result = parseReference('Patient/123');
      expect(result.isContained).toBe(false);
      expect(result.isAbsolute).toBe(false);
      expect(result.resourceType).toBe('Patient');
      expect(result.id).toBe('123');
    });

    it('should parse contained reference', () => {
      const result = parseReference('#org1');
      expect(result.isContained).toBe(true);
      expect(result.id).toBe('org1');
    });

    it('should parse absolute reference', () => {
      const result = parseReference('http://example.org/fhir/Patient/123');
      expect(result.isAbsolute).toBe(true);
      expect(result.resourceType).toBe('Patient');
      expect(result.id).toBe('123');
      expect(result.baseUrl).toBe('http://example.org/fhir');
    });

    it('should parse URN reference', () => {
      const result = parseReference('urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a');
      expect(result.isUrn).toBe(true);
      expect(result.id).toBe('urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a');
    });
  });

  describe('referencesMatch', () => {
    it('should match identical references', () => {
      expect(referencesMatch('Patient/123', 'Patient/123')).toBe(true);
    });

    it('should match relative and absolute with same type/id', () => {
      expect(
        referencesMatch('Patient/123', 'http://example.org/fhir/Patient/123')
      ).toBe(true);
    });

    it('should not match different types', () => {
      expect(referencesMatch('Patient/123', 'Observation/123')).toBe(false);
    });

    it('should not match different ids', () => {
      expect(referencesMatch('Patient/123', 'Patient/456')).toBe(false);
    });
  });
});
