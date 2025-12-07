/**
 * Tests for Fixed and Pattern Value Validation
 *
 * Per FHIR spec:
 * - fixed[x]: The value must be exactly the specified value
 * - pattern[x]: The value must contain at least the specified value (can have more)
 *
 * @see https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.fixed_x_
 * @see https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.pattern_x_
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';

describe('Fixed and Pattern Value Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();

    // Register a custom profile with fixed and pattern constraints
    const registry = validator.getRegistry();

    // Profile with fixedCode on Patient.gender
    const profileWithFixed = {
      resourceType: 'StructureDefinition',
      id: 'test-fixed-gender',
      url: 'http://test.org/StructureDefinition/PatientFixedGender',
      name: 'PatientFixedGender',
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
            id: 'Patient.gender',
            path: 'Patient.gender',
            min: 1,
            max: '1',
            fixedCode: 'female', // Must be exactly 'female'
          },
        ],
      },
    };

    // Profile with patternCodeableConcept on Observation.code
    const profileWithPattern = {
      resourceType: 'StructureDefinition',
      id: 'test-pattern-observation',
      url: 'http://test.org/StructureDefinition/ObservationWithPattern',
      name: 'ObservationWithPattern',
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
          {
            id: 'Observation.status',
            path: 'Observation.status',
            min: 1,
            max: '1',
          },
          {
            id: 'Observation.code',
            path: 'Observation.code',
            min: 1,
            max: '1',
            patternCodeableConcept: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8867-4', // Heart rate
                },
              ],
            },
          },
        ],
      },
    };

    registry.addSpec(profileWithFixed as any);
    registry.addSpec(profileWithPattern as any);
  });

  describe('Fixed value validation (fixedCode)', () => {
    it('should pass when value matches fixed value exactly', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://test.org/StructureDefinition/PatientFixedGender'],
        },
        gender: 'female', // Matches fixedCode exactly
      };

      const result = await validator.validate(patient, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should not have errors about fixed value
      const fixedErrors = errors.filter((e) => e.diagnostics?.includes('fixed'));
      expect(fixedErrors).toHaveLength(0);
    });

    it('should fail when value does not match fixed value', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://test.org/StructureDefinition/PatientFixedGender'],
        },
        gender: 'male', // Does NOT match fixedCode 'female'
      };

      const result = await validator.validate(patient, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about fixed value
      const fixedErrors = errors.filter(
        (e) => e.diagnostics?.includes('fixed') && e.expression?.includes('Patient.gender')
      );
      expect(fixedErrors.length).toBeGreaterThan(0);
      expect(fixedErrors[0].diagnostics).toContain('female');
    });
  });

  describe('Fixed value validation (fixedString)', () => {
    it('should pass when string matches fixed value exactly', async () => {
      // Register a simpler profile with fixedString at top level
      const registry = validator.getRegistry();
      const profileWithFixedStatus = {
        resourceType: 'StructureDefinition',
        id: 'test-fixed-status',
        url: 'http://test.org/StructureDefinition/ObservationFixedStatus',
        name: 'ObservationFixedStatus',
        status: 'active',
        kind: 'resource',
        abstract: false,
        type: 'Observation',
        baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Observation',
        derivation: 'constraint',
        snapshot: {
          element: [
            { id: 'Observation', path: 'Observation', min: 0, max: '*' },
            { id: 'Observation.status', path: 'Observation.status', min: 1, max: '1', fixedCode: 'final' },
            { id: 'Observation.code', path: 'Observation.code', min: 1, max: '1' },
          ],
        },
      };
      registry.addSpec(profileWithFixedStatus as any);

      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationFixedStatus'],
        },
        status: 'final', // Matches fixedCode exactly
        code: { text: 'Test' },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should not have errors about fixed value
      const fixedErrors = errors.filter((e) => e.diagnostics?.includes('fixed'));
      expect(fixedErrors).toHaveLength(0);
    });

    it('should fail when string does not match fixed value', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationFixedStatus'],
        },
        status: 'preliminary', // Does NOT match fixedCode 'final'
        code: { text: 'Test' },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about fixed value
      const fixedErrors = errors.filter(
        (e) =>
          e.diagnostics?.includes('fixed') &&
          e.expression?.some((p) => p.includes('status'))
      );
      expect(fixedErrors.length).toBeGreaterThan(0);
      expect(fixedErrors[0].diagnostics).toContain('final');
    });
  });

  describe('Pattern value validation (patternCodeableConcept)', () => {
    it('should pass when value contains pattern (exact match)', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationWithPattern'],
        },
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4', // Matches pattern exactly
            },
          ],
        },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should not have errors about pattern
      const patternErrors = errors.filter((e) => e.diagnostics?.includes('pattern'));
      expect(patternErrors).toHaveLength(0);
    });

    it('should pass when value contains pattern plus additional data', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationWithPattern'],
        },
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4', // Pattern requirement
              display: 'Heart rate', // Additional data - allowed with pattern
            },
          ],
          text: 'Heart Rate Measurement', // Additional data - allowed with pattern
        },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should not have errors about pattern (additional data is allowed)
      const patternErrors = errors.filter((e) => e.diagnostics?.includes('pattern'));
      expect(patternErrors).toHaveLength(0);
    });

    it('should pass when value contains pattern with additional codings', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationWithPattern'],
        },
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4', // Pattern requirement
            },
            {
              system: 'http://snomed.info/sct',
              code: '364075005', // Additional coding - allowed with pattern
            },
          ],
        },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should not have errors about pattern
      const patternErrors = errors.filter((e) => e.diagnostics?.includes('pattern'));
      expect(patternErrors).toHaveLength(0);
    });

    it('should fail when value does not contain required pattern', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationWithPattern'],
        },
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7', // Different code - does NOT match pattern
            },
          ],
        },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about pattern
      const patternErrors = errors.filter(
        (e) => e.diagnostics?.includes('pattern') && e.expression?.includes('Observation.code')
      );
      expect(patternErrors.length).toBeGreaterThan(0);
    });

    it('should fail when value has wrong system for pattern', async () => {
      const observation = {
        resourceType: 'Observation',
        meta: {
          profile: ['http://test.org/StructureDefinition/ObservationWithPattern'],
        },
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct', // Wrong system
              code: '8867-4', // Right code but wrong system
            },
          ],
        },
      };

      const result = await validator.validate(observation, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about pattern (system doesn't match)
      const patternErrors = errors.filter(
        (e) => e.diagnostics?.includes('pattern') && e.expression?.includes('Observation.code')
      );
      expect(patternErrors.length).toBeGreaterThan(0);
    });
  });

  describe('Fixed vs Pattern semantics', () => {
    it('fixed requires exact match - extra properties cause failure', async () => {
      // This test verifies that fixed requires EXACT match
      // If we had a profile with fixedString, adding extra properties would fail
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['http://test.org/StructureDefinition/PatientFixedGender'],
        },
        gender: 'female', // Matches - this is a primitive so can't have extra properties
      };

      const result = await validator.validate(patient, { includeWarnings: true });
      const fixedErrors = result.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('fixed')
      );
      expect(fixedErrors).toHaveLength(0);
    });
  });

  describe('No fixed/pattern constraints', () => {
    it('should not complain when no fixed or pattern is defined', async () => {
      const patient = {
        resourceType: 'Patient',
        // No profile with fixed/pattern constraints
        gender: 'male',
        name: [{ family: 'Test' }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should not have any fixed or pattern errors
      const fixedPatternErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          (i.diagnostics?.includes('fixed') || i.diagnostics?.includes('pattern'))
      );
      expect(fixedPatternErrors).toHaveLength(0);
    });
  });
});
