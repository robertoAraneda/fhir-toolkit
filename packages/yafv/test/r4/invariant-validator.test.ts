/**
 * Tests for global invariant validation (ele-1, etc.)
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/core/validator.js';
import {
  validateGlobalInvariants,
  getGlobalInvariants,
  hasInvariant,
} from '../../src/validators/invariant-validator.js';

describe('Invariant Validator', () => {
  describe('validateGlobalInvariants (unit tests)', () => {
    describe('ele-1: All FHIR elements must have a @value or children', () => {
      it('should detect empty object {} as violation', () => {
        const data = {
          resourceType: 'Patient',
          name: [
            {
              family: 'Test',
            },
          ],
          contact: [
            {
              name: {}, // Empty object - violates ele-1
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBeGreaterThan(0);
        expect(ele1Issues[0].expression).toContain('Patient.contact[0].name');
      });

      it('should detect empty nested object in extension', () => {
        const data = {
          resourceType: 'Patient',
          extension: [
            {
              url: 'http://example.org/extension',
              extension: [
                {
                  url: 'nested',
                  valueIdentifier: {}, // Empty object - violates ele-1
                },
              ],
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBeGreaterThan(0);
        // Should point to the empty valueIdentifier
        const hasValueIdentifierPath = ele1Issues.some((i) =>
          i.expression?.some((p) => p.includes('valueIdentifier'))
        );
        expect(hasValueIdentifierPath).toBe(true);
      });

      it('should pass for object with primitive value', () => {
        const data = {
          resourceType: 'Patient',
          name: [
            {
              family: 'González',
              given: ['María'],
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBe(0);
      });

      it('should pass for object with children', () => {
        const data = {
          resourceType: 'Patient',
          identifier: [
            {
              system: 'http://example.org',
              value: '12345',
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBe(0);
      });

      it('should detect multiple empty objects', () => {
        const data = {
          resourceType: 'Patient',
          name: [{}], // Empty
          identifier: [
            {
              type: {}, // Empty
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBe(2);
      });

      it('should not flag root resource level', () => {
        // A minimal valid resource
        const data = {
          resourceType: 'Patient',
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        // Root level should not be flagged (resources have resourceType)
        expect(ele1Issues.length).toBe(0);
      });

      it('should detect empty string as violation', () => {
        const data = {
          resourceType: 'Patient',
          name: [
            {
              family: '', // Empty string violates ele-1
              given: ['María'],
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBeGreaterThan(0);
        expect(ele1Issues[0].expression?.[0]).toBe('Patient.name[0].family');
      });

      it('should pass for valid non-empty string', () => {
        const data = {
          resourceType: 'Patient',
          name: [
            {
              family: 'González',
              given: ['María'],
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBe(0);
      });

      it('should allow zero and false as valid values', () => {
        const data = {
          resourceType: 'Observation',
          valueInteger: 0, // Zero is a valid value
          status: 'final',
        };

        const issues = validateGlobalInvariants(data, 'Observation');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBe(0);
      });

      it('should handle deeply nested empty objects', () => {
        const data = {
          resourceType: 'Patient',
          contact: [
            {
              relationship: [
                {
                  coding: [
                    {
                      system: 'http://example.org',
                      code: 'test',
                    },
                  ],
                },
              ],
              name: {
                family: 'Test',
                _family: {
                  extension: [
                    {
                      url: 'http://example.org',
                      valueString: {}, // This is wrong - valueString should be a string, not object
                    },
                  ],
                },
              },
            },
          ],
        };

        const issues = validateGlobalInvariants(data, 'Patient');
        const ele1Issues = issues.filter((i) => i.diagnostics?.includes('ele-1'));

        expect(ele1Issues.length).toBeGreaterThan(0);
      });
    });

    describe('options', () => {
      it('should skip invariants when specified', () => {
        const data = {
          resourceType: 'Patient',
          name: [{}], // Would violate ele-1
        };

        const issues = validateGlobalInvariants(data, 'Patient', {
          skip: ['ele-1'],
        });

        expect(issues.length).toBe(0);
      });

      it('should only run specified invariants', () => {
        const data = {
          resourceType: 'Patient',
          name: [{}],
        };

        const issues = validateGlobalInvariants(data, 'Patient', {
          only: ['ele-1'],
        });

        expect(issues.length).toBeGreaterThan(0);
      });

      it('should return no issues when only specifies non-existent invariant', () => {
        const data = {
          resourceType: 'Patient',
          name: [{}],
        };

        const issues = validateGlobalInvariants(data, 'Patient', {
          only: ['non-existent'],
        });

        expect(issues.length).toBe(0);
      });
    });
  });

  describe('helper functions', () => {
    it('getGlobalInvariants should return all registered invariants', () => {
      const invariants = getGlobalInvariants();

      expect(invariants.length).toBeGreaterThan(0);
      expect(invariants.some((i) => i.key === 'ele-1')).toBe(true);
    });

    it('hasInvariant should check if invariant exists', () => {
      expect(hasInvariant('ele-1')).toBe(true);
      expect(hasInvariant('non-existent')).toBe(false);
    });
  });
});

describe('FhirValidator integration with invariants', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
  });

  it('should detect ele-1 violation in empty valueIdentifier', async () => {
    const patient = {
      resourceType: 'Patient',
      contact: [
        {
          extension: [
            {
              url: 'http://example.org/extension/contact-id',
              extension: [
                {
                  url: 'tutId',
                  valueIdentifier: {}, // Empty - violates ele-1
                },
              ],
            },
          ],
          name: {
            family: 'Test',
          },
        },
      ],
    };

    const result = await validator.validate(patient);
    const ele1Errors = result.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('ele-1')
    );

    expect(ele1Errors.length).toBeGreaterThan(0);
    expect(ele1Errors[0].expression?.[0]).toContain('valueIdentifier');
  });

  it('should detect ele-1 violation in empty name object', async () => {
    const patient = {
      resourceType: 'Patient',
      name: [{}], // Empty HumanName - violates ele-1
    };

    const result = await validator.validate(patient);
    const ele1Errors = result.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('ele-1')
    );

    expect(ele1Errors.length).toBeGreaterThan(0);
  });

  it('should pass validation for valid patient with proper values', async () => {
    const patient = {
      resourceType: 'Patient',
      identifier: [
        {
          system: 'http://example.org',
          value: '12345',
        },
      ],
      name: [
        {
          family: 'González',
          given: ['María'],
        },
      ],
    };

    const result = await validator.validate(patient);
    const ele1Errors = result.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('ele-1')
    );

    expect(ele1Errors.length).toBe(0);
  });

  it('should detect ele-1 in nested extension values', async () => {
    const observation = {
      resourceType: 'Observation',
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '12345-6',
          },
        ],
      },
      extension: [
        {
          url: 'http://example.org/complex-extension',
          extension: [
            {
              url: 'part1',
              valueCodeableConcept: {}, // Empty - violates ele-1
            },
          ],
        },
      ],
    };

    const result = await validator.validate(observation);
    const ele1Errors = result.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('ele-1')
    );

    expect(ele1Errors.length).toBeGreaterThan(0);
  });

  it('should work with structural validation level', async () => {
    const patient = {
      resourceType: 'Patient',
      name: [{}], // Empty
    };

    const result = await validator.validate(patient, { level: 'structural' });
    const ele1Errors = result.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('ele-1')
    );

    expect(ele1Errors.length).toBeGreaterThan(0);
  });
});
