import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/core/validator.js';
import { buildResourceIndex, resolveReference } from '../../src/validators/fhirpath-resolver.js';
import { evaluate } from '../../src/validators/fhirpath-evaluator.js';

let validator: FhirValidator;

beforeAll(async () => {
  const { specsPath } = await import('@fhir-toolkit/r4-specs');
  validator = new FhirValidator({
    fhirVersion: 'R4',
    registry: undefined,
    defaultOptions: {
      level: 'full',
      includeWarnings: true,
    },
  });
  await validator.initialize();
  await validator.getRegistry().loadFromDirectory(specsPath);
});

describe('FHIRPath resolve() - Unit Tests', () => {
  describe('buildResourceIndex', () => {
    it('should index contained resources by id', () => {
      const resource = {
        resourceType: 'Patient',
        contained: [
          { resourceType: 'Organization', id: 'org1', name: 'Test Org' },
          { resourceType: 'Practitioner', id: 'pract1', name: [{ family: 'Smith' }] },
        ],
      };

      const index = buildResourceIndex(resource);
      expect(index.containedResources.size).toBe(2);
      expect(index.containedResources.get('org1')).toEqual(resource.contained![0]);
      expect(index.containedResources.get('pract1')).toEqual(resource.contained![1]);
    });

    it('should index Bundle entries by fullUrl', () => {
      const bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:abc-123',
            resource: { resourceType: 'Patient', id: '1' },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/obs-1',
            resource: { resourceType: 'Observation', id: 'obs-1' },
          },
        ],
      };

      const index = buildResourceIndex(bundle);
      expect(index.bundleEntries.size).toBe(2);
      expect(index.bundleEntries.get('urn:uuid:abc-123')?.resourceType).toBe('Patient');
      expect(index.bundleEntries.get('http://example.org/fhir/Observation/obs-1')?.resourceType).toBe('Observation');
    });

    it('should index Bundle entries by ResourceType/id', () => {
      const bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:abc-123',
            resource: { resourceType: 'Patient', id: 'pat-1' },
          },
        ],
      };

      const index = buildResourceIndex(bundle);
      expect(index.bundleEntriesByTypeId.get('Patient/pat-1')?.resourceType).toBe('Patient');
    });

    it('should handle resource with no contained or entries', () => {
      const resource = { resourceType: 'Patient', id: '1' };
      const index = buildResourceIndex(resource);
      expect(index.containedResources.size).toBe(0);
      expect(index.bundleEntries.size).toBe(0);
    });
  });

  describe('resolveReference', () => {
    const index = buildResourceIndex({
      resourceType: 'Bundle',
      type: 'collection',
      contained: [
        { resourceType: 'Organization', id: 'org1', name: 'Contained Org' },
      ],
      entry: [
        {
          fullUrl: 'urn:uuid:patient-1',
          resource: { resourceType: 'Patient', id: 'p1', name: [{ family: 'Test' }] },
        },
        {
          fullUrl: 'http://example.org/fhir/Observation/obs-1',
          resource: { resourceType: 'Observation', id: 'obs-1' },
        },
      ],
    });

    it('should resolve contained reference #id', () => {
      const result = resolveReference('#org1', index);
      expect(result?.name).toBe('Contained Org');
    });

    it('should resolve urn:uuid reference in Bundle', () => {
      const result = resolveReference('urn:uuid:patient-1', index);
      expect(result?.resourceType).toBe('Patient');
    });

    it('should resolve absolute URL reference in Bundle', () => {
      const result = resolveReference('http://example.org/fhir/Observation/obs-1', index);
      expect(result?.resourceType).toBe('Observation');
    });

    it('should resolve relative reference Type/id via suffix match', () => {
      const result = resolveReference('Observation/obs-1', index);
      expect(result?.resourceType).toBe('Observation');
    });

    it('should return undefined for unresolvable reference', () => {
      expect(resolveReference('Patient/unknown', index)).toBeUndefined();
    });

    it('should return undefined for empty reference', () => {
      expect(resolveReference('', index)).toBeUndefined();
    });

    it('should return undefined for null/undefined', () => {
      expect(resolveReference(null as any, index)).toBeUndefined();
      expect(resolveReference(undefined as any, index)).toBeUndefined();
    });
  });

  describe('FHIRPath evaluate with resolve()', () => {
    it('should resolve a reference in FHIRPath expression', () => {
      const resource = {
        resourceType: 'Observation',
        subject: { reference: '#pat1' },
        contained: [
          { resourceType: 'Patient', id: 'pat1', name: [{ family: 'Doe' }] },
        ],
      };

      const index = buildResourceIndex(resource);
      const result = evaluate(
        'Observation.subject.resolve().name.family',
        resource,
        { resource, resourceIndex: index }
      );

      expect(result.success).toBe(true);
      expect(result.result).toContain('Doe');
    });

    it('should resolve a Bundle entry reference', () => {
      const bundle = {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            fullUrl: 'urn:uuid:obs-1',
            resource: {
              resourceType: 'Observation',
              id: 'obs-1',
              subject: { reference: 'urn:uuid:pat-1' },
            },
          },
          {
            fullUrl: 'urn:uuid:pat-1',
            resource: {
              resourceType: 'Patient',
              id: 'pat-1',
              name: [{ family: 'Smith' }],
            },
          },
        ],
      };

      const index = buildResourceIndex(bundle);
      const obsResource = bundle.entry[0].resource;
      const result = evaluate(
        'Observation.subject.resolve().name.family',
        obsResource,
        { resource: obsResource, resourceIndex: index }
      );

      expect(result.success).toBe(true);
      expect(result.result).toContain('Smith');
    });

    it('should return empty when reference cannot be resolved', () => {
      const resource = {
        resourceType: 'Observation',
        subject: { reference: 'Patient/unknown' },
      };

      const index = buildResourceIndex(resource);
      const result = evaluate(
        'Observation.subject.resolve()',
        resource,
        { resource, resourceIndex: index }
      );

      expect(result.success).toBe(true);
      expect(result.result).toHaveLength(0);
    });

    it('should work without resourceIndex (no resolve available)', () => {
      const resource = {
        resourceType: 'Patient',
        id: '1',
        active: true,
      };

      // No resourceIndex = no resolve, but other expressions still work
      const result = evaluate('Patient.active', resource, { resource });
      expect(result.success).toBe(true);
      expect(result.result).toEqual([true]);
    });
  });
});

describe('FHIRPath resolve() - Integration with Validator', () => {
  it('should not produce constraint errors for resources with resolvable contained references', async () => {
    const observation = {
      resourceType: 'Observation',
      id: 'obs-1',
      status: 'final',
      code: {
        coding: [{ system: 'http://loinc.org', code: '1234-5' }],
      },
      subject: { reference: '#pat1' },
      contained: [
        {
          resourceType: 'Patient',
          id: 'pat1',
          name: [{ family: 'Doe' }],
        },
      ],
    };

    const result = await validator.validate(observation);

    // Should not have errors about unresolvable references from constraints
    const resolveErrors = result.issue.filter(
      (i) =>
        i.severity === 'error' &&
        i.diagnostics?.includes('resolve')
    );
    expect(resolveErrors).toHaveLength(0);
  });

  it('should validate a Bundle where entries reference each other', async () => {
    const bundle = {
      resourceType: 'Bundle',
      type: 'collection',
      entry: [
        {
          fullUrl: 'urn:uuid:patient-1',
          resource: {
            resourceType: 'Patient',
            id: 'patient-1',
            active: true,
          },
        },
        {
          fullUrl: 'urn:uuid:observation-1',
          resource: {
            resourceType: 'Observation',
            id: 'observation-1',
            status: 'final',
            code: {
              coding: [{ system: 'http://loinc.org', code: '1234-5' }],
            },
            subject: { reference: 'urn:uuid:patient-1' },
          },
        },
      ],
    };

    const result = await validator.validate(bundle);

    // Should validate without constraint errors related to resolve
    const errors = result.issue.filter((i) => i.severity === 'error');
    // Some errors may exist (like terminology), but none should be from resolve failures
    const resolveErrors = errors.filter(
      (i) => i.diagnostics?.toLowerCase().includes('resolve')
    );
    expect(resolveErrors).toHaveLength(0);
  });
});
