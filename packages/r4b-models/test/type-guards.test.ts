/**
 * Type Guards Tests for FHIR R4B
 *
 * Tests for runtime type checking of FHIR resources.
 */

import { describe, it, expect } from 'vitest';
import {
  isPatient,
  isObservation,
  isPractitioner,
  isOrganization,
  isEncounter,
  isCondition,
  isMedicationRequest,
  isBundle,
  isFhirResource,
} from '../src/index.js';

describe('Type Guards (R4B)', () => {
  describe('isPatient', () => {
    it('should return true for Patient resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
        name: [{ family: 'Doe' }],
      };

      expect(isPatient(patient)).toBe(true);
    });

    it('should return false for non-Patient resource', () => {
      const observation = {
        resourceType: 'Observation',
        status: 'final',
      };

      expect(isPatient(observation)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isPatient(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isPatient(undefined)).toBe(false);
    });

    it('should return false for non-object', () => {
      expect(isPatient('Patient')).toBe(false);
      expect(isPatient(123)).toBe(false);
    });
  });

  describe('isObservation', () => {
    it('should return true for Observation resource', () => {
      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [{ code: '12345-6' }],
        },
      };

      expect(isObservation(observation)).toBe(true);
    });

    it('should return false for non-Observation resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isObservation(patient)).toBe(false);
    });
  });

  describe('isPractitioner', () => {
    it('should return true for Practitioner resource', () => {
      const practitioner = {
        resourceType: 'Practitioner',
        id: 'example',
        name: [{ family: 'Smith' }],
      };

      expect(isPractitioner(practitioner)).toBe(true);
    });

    it('should return false for non-Practitioner resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isPractitioner(patient)).toBe(false);
    });
  });

  describe('isOrganization', () => {
    it('should return true for Organization resource', () => {
      const organization = {
        resourceType: 'Organization',
        id: 'example',
        name: 'Test Hospital',
      };

      expect(isOrganization(organization)).toBe(true);
    });

    it('should return false for non-Organization resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isOrganization(patient)).toBe(false);
    });
  });

  describe('isEncounter', () => {
    it('should return true for Encounter resource', () => {
      const encounter = {
        resourceType: 'Encounter',
        id: 'example',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'AMB',
        },
      };

      expect(isEncounter(encounter)).toBe(true);
    });

    it('should return false for non-Encounter resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isEncounter(patient)).toBe(false);
    });
  });

  describe('isCondition', () => {
    it('should return true for Condition resource', () => {
      const condition = {
        resourceType: 'Condition',
        id: 'example',
        clinicalStatus: {
          coding: [{ code: 'active' }],
        },
        subject: {
          reference: 'Patient/example',
        },
      };

      expect(isCondition(condition)).toBe(true);
    });

    it('should return false for non-Condition resource', () => {
      const observation = {
        resourceType: 'Observation',
        status: 'final',
      };

      expect(isCondition(observation)).toBe(false);
    });
  });

  describe('isMedicationRequest', () => {
    it('should return true for MedicationRequest resource', () => {
      const medRequest = {
        resourceType: 'MedicationRequest',
        id: 'example',
        status: 'active',
        intent: 'order',
        medicationCodeableConcept: {
          coding: [{ code: '12345' }],
        },
        subject: {
          reference: 'Patient/example',
        },
      };

      expect(isMedicationRequest(medRequest)).toBe(true);
    });

    it('should return false for non-MedicationRequest resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isMedicationRequest(patient)).toBe(false);
    });
  });

  describe('isBundle', () => {
    it('should return true for Bundle resource', () => {
      const bundle = {
        resourceType: 'Bundle',
        id: 'example',
        type: 'searchset',
        entry: [],
      };

      expect(isBundle(bundle)).toBe(true);
    });

    it('should return false for non-Bundle resource', () => {
      const patient = {
        resourceType: 'Patient',
        id: 'example',
      };

      expect(isBundle(patient)).toBe(false);
    });
  });

  describe('isFhirResource', () => {
    it('should return true for any valid FHIR resource', () => {
      const patient = { resourceType: 'Patient', id: 'example' };
      const observation = { resourceType: 'Observation', status: 'final' };
      const bundle = { resourceType: 'Bundle', type: 'searchset' };

      expect(isFhirResource(patient)).toBe(true);
      expect(isFhirResource(observation)).toBe(true);
      expect(isFhirResource(bundle)).toBe(true);
    });

    it('should return false for objects without resourceType', () => {
      const notResource = { id: 'example', name: 'Test' };

      expect(isFhirResource(notResource)).toBe(false);
    });

    it('should return false for objects with non-string resourceType', () => {
      const invalidResource = { resourceType: 123, id: 'example' };

      expect(isFhirResource(invalidResource)).toBe(false);
    });

    it('should return false for null and undefined', () => {
      expect(isFhirResource(null)).toBeFalsy();
      expect(isFhirResource(undefined)).toBeFalsy();
    });

    it('should return false for primitives', () => {
      expect(isFhirResource('Patient')).toBe(false);
      expect(isFhirResource(123)).toBe(false);
      expect(isFhirResource(true)).toBe(false);
    });
  });

  describe('Type Narrowing', () => {
    it('should narrow type correctly for Patient', () => {
      const resource: unknown = {
        resourceType: 'Patient',
        id: 'example',
        name: [{ family: 'Doe', given: ['John'] }],
        gender: 'male',
      };

      if (isPatient(resource)) {
        // TypeScript should know this is IPatient
        expect(resource.name?.[0].family).toBe('Doe');
        expect(resource.gender).toBe('male');
      } else {
        throw new Error('Expected Patient type');
      }
    });

    it('should narrow type correctly for Observation', () => {
      const resource: unknown = {
        resourceType: 'Observation',
        id: 'example',
        status: 'final',
        code: {
          coding: [{ system: 'http://loinc.org', code: '12345-6' }],
        },
        valueQuantity: {
          value: 120,
          unit: 'mmHg',
        },
      };

      if (isObservation(resource)) {
        // TypeScript should know this is IObservation
        expect(resource.status).toBe('final');
        expect(resource.valueQuantity?.value).toBe(120);
      } else {
        throw new Error('Expected Observation type');
      }
    });

    it('should work in switch-like pattern', () => {
      const resources = [
        { resourceType: 'Patient', id: 'p1', name: [{ family: 'Doe' }] },
        { resourceType: 'Observation', id: 'o1', status: 'final', code: {} },
        { resourceType: 'Practitioner', id: 'pr1', name: [{ family: 'Smith' }] },
      ];

      const types: string[] = [];

      for (const resource of resources) {
        if (isPatient(resource)) {
          types.push('Patient');
        } else if (isObservation(resource)) {
          types.push('Observation');
        } else if (isPractitioner(resource)) {
          types.push('Practitioner');
        }
      }

      expect(types).toEqual(['Patient', 'Observation', 'Practitioner']);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty objects', () => {
      expect(isPatient({})).toBe(false);
      expect(isFhirResource({})).toBe(false);
    });

    it('should handle objects with only resourceType', () => {
      const minimalPatient = { resourceType: 'Patient' };
      expect(isPatient(minimalPatient)).toBe(true);
      expect(isFhirResource(minimalPatient)).toBe(true);
    });

    it('should handle arrays', () => {
      expect(isPatient([])).toBe(false);
      expect(isFhirResource([])).toBe(false);
    });

    it('should handle deeply nested objects', () => {
      const complexPatient = {
        resourceType: 'Patient',
        id: 'complex',
        name: [
          {
            use: 'official',
            family: 'Doe',
            given: ['John', 'Robert'],
            prefix: ['Dr.'],
          },
        ],
        address: [
          {
            use: 'home',
            line: ['123 Main St'],
            city: 'Springfield',
          },
        ],
        contact: [
          {
            relationship: [{ coding: [{ code: 'N' }] }],
            name: { family: 'Doe', given: ['Jane'] },
          },
        ],
      };

      expect(isPatient(complexPatient)).toBe(true);
    });
  });
});
