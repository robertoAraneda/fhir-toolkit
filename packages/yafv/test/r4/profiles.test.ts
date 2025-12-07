/**
 * Tests for profile and IG validation
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import type { FhirResource, StructureDefinition } from '../../src/index.js';

describe('Profile Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  describe('meta.profile validation', () => {
    it('should warn when profile is not found', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://example.org/fhir/StructureDefinition/UnknownProfile'],
        },
      };
      const outcome = await validator.validate(patient);
      const warnings = outcome.issue.filter(
        (i) => i.severity === 'warning' && i.code === 'not-found'
      );
      expect(warnings.length).toBeGreaterThan(0);
      expect(warnings[0].diagnostics).toContain('not found');
    });

    it('should validate valid resource without profile', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [{ family: 'Doe', given: ['John'] }],
      };
      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });

    it('should handle multiple profiles', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        meta: {
          profile: [
            'http://example.org/fhir/StructureDefinition/Profile1',
            'http://example.org/fhir/StructureDefinition/Profile2',
          ],
        },
      };
      const outcome = await validator.validate(patient);
      const warnings = outcome.issue.filter(
        (i) => i.severity === 'warning' && i.code === 'not-found'
      );
      // Should warn about both unknown profiles
      expect(warnings.length).toBe(2);
    });
  });

  describe('Custom profile loading', () => {
    it('should load and validate against custom profile', async () => {
      // Create a custom profile that requires identifier
      const customProfile: StructureDefinition = {
        resourceType: 'StructureDefinition',
        id: 'required-identifier-patient',
        url: 'http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient',
        name: 'RequiredIdentifierPatient',
        status: 'active',
        kind: 'resource',
        abstract: false,
        type: 'Patient',
        baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Patient',
        derivation: 'constraint',
        snapshot: {
          element: [
            {
              id: 'Patient',
              path: 'Patient',
              min: 0,
              max: '*',
            },
            {
              id: 'Patient.identifier',
              path: 'Patient.identifier',
              min: 1, // Make identifier required
              max: '*',
              type: [{ code: 'Identifier' }],
            },
          ],
        },
      };

      // Add the profile to the registry
      validator.getRegistry().addSpec(customProfile, 'test');

      // Test patient without identifier should fail against this profile
      const patientWithoutId: FhirResource = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient'],
        },
        name: [{ family: 'Doe' }],
      };

      const outcome = await validator.validate(patientWithoutId);
      const errors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'required' &&
          i.diagnostics?.includes('identifier')
      );
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should pass validation with required element present', async () => {
      const patientWithId: FhirResource = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient'],
        },
        identifier: [
          {
            system: 'http://example.org/mrn',
            value: '12345',
          },
        ],
        name: [{ family: 'Doe' }],
      };

      const outcome = await validator.validate(patientWithId);
      const errors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.diagnostics?.includes('identifier')
      );
      expect(errors).toHaveLength(0);
    });
  });

  describe('Profile type mismatch', () => {
    it('should error when profile is for different resource type', async () => {
      // Create a profile for Observation
      const observationProfile: StructureDefinition = {
        resourceType: 'StructureDefinition',
        id: 'custom-observation',
        url: 'http://example.org/fhir/StructureDefinition/CustomObservation',
        name: 'CustomObservation',
        status: 'active',
        kind: 'resource',
        abstract: false,
        type: 'Observation',
        baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Observation',
        derivation: 'constraint',
        snapshot: {
          element: [
            {
              id: 'Observation',
              path: 'Observation',
              min: 0,
              max: '*',
            },
          ],
        },
      };

      validator.getRegistry().addSpec(observationProfile, 'test');

      // Try to use Observation profile on a Patient
      const patient: FhirResource = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://example.org/fhir/StructureDefinition/CustomObservation'],
        },
      };

      const outcome = await validator.validate(patient);
      const errors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.diagnostics?.includes('Observation') &&
          i.diagnostics?.includes('Patient')
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Registry profile methods', () => {
    it('should return profiles for a resource type', async () => {
      const registry = validator.getRegistry();
      const patientProfiles = registry.getProfilesForType('Patient');

      // Should include our custom profile
      expect(patientProfiles).toContain(
        'http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient'
      );
    });

    it('should identify profiles correctly', async () => {
      const registry = validator.getRegistry();

      // Our custom profile should be identified as a profile
      expect(
        registry.isProfile('http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient')
      ).toBe(true);

      // Base Patient is not a profile (it's the base definition)
      expect(
        registry.isProfile('http://hl7.org/fhir/StructureDefinition/Patient')
      ).toBe(false);
    });

    it('should get profile by URL with version', async () => {
      const registry = validator.getRegistry();

      // Create a versioned profile
      const versionedProfile: StructureDefinition = {
        resourceType: 'StructureDefinition',
        id: 'versioned-patient',
        url: 'http://example.org/fhir/StructureDefinition/VersionedPatient',
        version: '1.0.0',
        name: 'VersionedPatient',
        status: 'active',
        kind: 'resource',
        abstract: false,
        type: 'Patient',
        baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Patient',
        derivation: 'constraint',
        snapshot: {
          element: [
            {
              id: 'Patient',
              path: 'Patient',
              min: 0,
              max: '*',
            },
          ],
        },
      };

      registry.addSpec(versionedProfile, 'test');

      // Should find with correct version
      const profile = registry.getProfile(
        'http://example.org/fhir/StructureDefinition/VersionedPatient|1.0.0'
      );
      expect(profile).toBeDefined();
      expect(profile?.version).toBe('1.0.0');

      // Should not find with wrong version
      const wrongVersion = registry.getProfile(
        'http://example.org/fhir/StructureDefinition/VersionedPatient|2.0.0'
      );
      expect(wrongVersion).toBeUndefined();
    });
  });

  describe('loadIG method', () => {
    it('should have loadIG method available', () => {
      expect(typeof validator.loadIG).toBe('function');
    });
  });

  describe('Validate against specific profile', () => {
    it('should validate against profile specified in options', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        name: [{ family: 'Doe' }],
        // No identifier
      };

      // Validate against our custom profile that requires identifier
      const outcome = await validator.validate(patient, {
        profile: 'http://example.org/fhir/StructureDefinition/RequiredIdentifierPatient',
      });

      const errors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'required' &&
          i.diagnostics?.includes('identifier')
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});

describe('Extension Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  describe('Basic extension structure', () => {
    it('should allow valid extensions', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        extension: [
          {
            url: 'http://example.org/fhir/StructureDefinition/custom-extension',
            valueString: 'test value',
          },
        ],
      };
      const outcome = await validator.validate(patient);
      // Should not have errors for the extension structure
      const structureErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'structure' &&
          i.expression?.[0]?.includes('extension')
      );
      expect(structureErrors).toHaveLength(0);
    });

    it('should allow multiple extensions', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        extension: [
          {
            url: 'http://example.org/ext1',
            valueString: 'value1',
          },
          {
            url: 'http://example.org/ext2',
            valueInteger: 42,
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const structureErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'structure' &&
          i.expression?.[0]?.includes('extension')
      );
      expect(structureErrors).toHaveLength(0);
    });
  });

  describe('Nested extensions', () => {
    it('should allow complex extensions with nested extensions', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        extension: [
          {
            url: 'http://example.org/complex-extension',
            extension: [
              {
                url: 'part1',
                valueString: 'nested value',
              },
              {
                url: 'part2',
                valueInteger: 123,
              },
            ],
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const structureErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'structure' &&
          i.expression?.[0]?.includes('extension')
      );
      expect(structureErrors).toHaveLength(0);
    });
  });

  describe('Modifier extensions', () => {
    it('should allow modifier extensions', async () => {
      const patient: FhirResource = {
        resourceType: 'Patient',
        modifierExtension: [
          {
            url: 'http://example.org/modifier-ext',
            valueBoolean: true,
          },
        ],
      };
      const outcome = await validator.validate(patient);
      const structureErrors = outcome.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.code === 'structure' &&
          i.expression?.[0]?.includes('modifierExtension')
      );
      expect(structureErrors).toHaveLength(0);
    });
  });
});

describe('Slicing Validation', () => {
  // Import the slicing validator for unit tests
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  describe('Basic slicing concepts', () => {
    it('should validate arrays that could be sliced', async () => {
      const observation: FhirResource = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
            },
          ],
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
      const errors = outcome.issue.filter((i) => i.severity === 'error');
      expect(errors).toHaveLength(0);
    });
  });
});
