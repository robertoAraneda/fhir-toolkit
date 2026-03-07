/**
 * Integration tests for FHIR spec compliance features:
 * - maxLength validation
 * - minValue[x] / maxValue[x] validation
 * - contentReference validation
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';

describe('FHIR Spec Compliance', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();

    const registry = validator.getRegistry();

    // Profile with maxLength on Patient.name.family
    const profileWithMaxLength = {
      resourceType: 'StructureDefinition',
      id: 'test-maxlength',
      url: 'http://test.org/StructureDefinition/PatientMaxLength',
      name: 'PatientMaxLength',
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
            id: 'Patient.name',
            path: 'Patient.name',
            min: 0,
            max: '*',
            type: [{ code: 'HumanName' }],
          },
          {
            id: 'Patient.name.family',
            path: 'Patient.name.family',
            min: 0,
            max: '1',
            maxLength: 50,
            type: [{ code: 'string' }],
          },
        ],
      },
    };

    // Profile with minValueInteger / maxValueInteger on an extension value
    const profileWithBounds = {
      resourceType: 'StructureDefinition',
      id: 'test-bounds',
      url: 'http://test.org/StructureDefinition/ObservationBounds',
      name: 'ObservationBounds',
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
            type: [{ code: 'code' }],
          },
          {
            id: 'Observation.code',
            path: 'Observation.code',
            min: 1,
            max: '1',
            type: [{ code: 'CodeableConcept' }],
          },
          {
            id: 'Observation.valueInteger',
            path: 'Observation.valueInteger',
            min: 0,
            max: '1',
            type: [{ code: 'integer' }],
            minValueInteger: 0,
            maxValueInteger: 300,
          },
        ],
      },
    };

    registry.addSpec(profileWithMaxLength as any);
    registry.addSpec(profileWithBounds as any);
  });

  describe('maxLength validation', () => {
    it('should pass when string is within maxLength', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: ['http://test.org/StructureDefinition/PatientMaxLength'] },
        name: [{ family: 'Smith' }],
      };

      const outcome = await validator.validate(patient);
      const maxLengthErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('maxLength')
      );
      expect(maxLengthErrors).toHaveLength(0);
    });

    it('should fail when string exceeds maxLength', async () => {
      const longName = 'A'.repeat(51);
      const patient = {
        resourceType: 'Patient',
        meta: { profile: ['http://test.org/StructureDefinition/PatientMaxLength'] },
        name: [{ family: longName }],
      };

      const outcome = await validator.validate(patient);
      const maxLengthErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('maxLength')
      );
      expect(maxLengthErrors.length).toBeGreaterThan(0);
      expect(maxLengthErrors[0].diagnostics).toContain('51');
      expect(maxLengthErrors[0].diagnostics).toContain('50');
    });

    it('should pass when string is exactly at maxLength', async () => {
      const exactName = 'A'.repeat(50);
      const patient = {
        resourceType: 'Patient',
        meta: { profile: ['http://test.org/StructureDefinition/PatientMaxLength'] },
        name: [{ family: exactName }],
      };

      const outcome = await validator.validate(patient);
      const maxLengthErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('maxLength')
      );
      expect(maxLengthErrors).toHaveLength(0);
    });
  });

  describe('minValue/maxValue validation', () => {
    const baseObservation = {
      resourceType: 'Observation',
      meta: { profile: ['http://test.org/StructureDefinition/ObservationBounds'] },
      status: 'final',
      code: {
        coding: [{ system: 'http://loinc.org', code: '8867-4' }],
      },
    };

    it('should pass when value is within bounds', async () => {
      const obs = { ...baseObservation, valueInteger: 72 };
      const outcome = await validator.validate(obs);
      const boundsErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && (i.diagnostics?.includes('minimum') || i.diagnostics?.includes('maximum'))
      );
      expect(boundsErrors).toHaveLength(0);
    });

    it('should fail when value is below minValue', async () => {
      const obs = { ...baseObservation, valueInteger: -1 };
      const outcome = await validator.validate(obs);
      const boundsErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('minimum')
      );
      expect(boundsErrors.length).toBeGreaterThan(0);
      expect(boundsErrors[0].diagnostics).toContain('-1');
    });

    it('should fail when value exceeds maxValue', async () => {
      const obs = { ...baseObservation, valueInteger: 301 };
      const outcome = await validator.validate(obs);
      const boundsErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('maximum')
      );
      expect(boundsErrors.length).toBeGreaterThan(0);
      expect(boundsErrors[0].diagnostics).toContain('301');
    });

    it('should pass when value equals boundary values', async () => {
      const obsMin = { ...baseObservation, valueInteger: 0 };
      const outcomeMin = await validator.validate(obsMin);
      const minErrors = outcomeMin.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('minimum')
      );
      expect(minErrors).toHaveLength(0);

      const obsMax = { ...baseObservation, valueInteger: 300 };
      const outcomeMax = await validator.validate(obsMax);
      const maxErrors = outcomeMax.issue.filter(
        (i) => i.severity === 'error' && i.diagnostics?.includes('maximum')
      );
      expect(maxErrors).toHaveLength(0);
    });
  });

  describe('contentReference validation', () => {
    it('should validate Questionnaire.item recursive structure', async () => {
      const questionnaire = {
        resourceType: 'Questionnaire',
        status: 'active',
        item: [
          {
            linkId: '1',
            type: 'group',
            text: 'Group 1',
            item: [
              {
                linkId: '1.1',
                type: 'string',
                text: 'Question 1',
              },
            ],
          },
        ],
      };

      const outcome = await validator.validate(questionnaire);
      // Should not have errors about the nested item structure
      const structureErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.expression?.[0]?.includes('item.item')
      );
      // Nested items should be valid (they have linkId and type which are required)
      expect(structureErrors).toHaveLength(0);
    });

    it('should detect missing required fields in nested contentReference items', async () => {
      const questionnaire = {
        resourceType: 'Questionnaire',
        status: 'active',
        item: [
          {
            linkId: '1',
            type: 'group',
            text: 'Group 1',
            item: [
              {
                // Missing linkId and type - both are required
                text: 'Question without required fields',
              },
            ],
          },
        ],
      };

      const outcome = await validator.validate(questionnaire);
      const requiredErrors = outcome.issue.filter(
        (i) => i.severity === 'error' && i.code === 'required'
      );
      // Should catch missing required linkId and/or type in nested items
      expect(requiredErrors.length).toBeGreaterThan(0);
    });
  });
});
