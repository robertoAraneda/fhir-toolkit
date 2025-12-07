/**
 * Tests for MustSupport Validation
 *
 * Per FHIR spec: "mustSupport" indicates that:
 * - Producers MUST be capable of providing the element
 * - Consumers MUST be capable of processing the element
 *
 * @see https://www.hl7.org/fhir/conformance-rules.html#mustSupport
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import { resolve } from 'path';

describe('MustSupport Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();

    // Load CL Core IG which has elements marked with mustSupport
    const igPath = resolve(__dirname, 'fixtures/clcore-ig');
    await validator.loadIG(igPath);
  });

  describe('Basic mustSupport validation', () => {
    it('should not warn about mustSupport when validateMustSupport is disabled (default)', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        // Only required fields, missing optional mustSupport fields
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should NOT have mustSupport warnings when option is disabled
      const mustSupportWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('mustSupport')
      );
      expect(mustSupportWarnings).toHaveLength(0);
    });

    it('should warn about missing mustSupport elements when enabled', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        // Only required fields, missing optional mustSupport fields like birthDate
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, {
        includeWarnings: true,
        validateMustSupport: true,
      });

      // Should have mustSupport warnings
      const mustSupportWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('mustSupport')
      );
      expect(mustSupportWarnings.length).toBeGreaterThan(0);

      // Warnings should mention the profile name
      expect(mustSupportWarnings[0].diagnostics).toContain('Profile:');
    });

    it('should not warn about mustSupport elements that are present', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        identifier: [
          {
            use: 'official',
            type: {
              coding: [
                {
                  system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador',
                  code: '01',
                  display: 'Run',
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
        birthDate: '1990-01-01', // This is a mustSupport field
      };

      const result = await validator.validate(patient, {
        includeWarnings: true,
        validateMustSupport: true,
      });

      // Should not warn about birthDate since it's present
      const birthDateWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('mustSupport') &&
          i.expression?.includes('Patient.birthDate')
      );
      expect(birthDateWarnings).toHaveLength(0);
    });

    it('should not warn about required elements (cardinality handles them)', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        // identifier is required (1..*) AND mustSupport - should only get cardinality error
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, {
        includeWarnings: true,
        validateMustSupport: true,
      });

      // Should have error for missing identifier (required)
      const identifierErrors = result.issue.filter(
        (i) =>
          i.severity === 'error' &&
          i.expression?.some((e) => e.includes('identifier'))
      );
      expect(identifierErrors.length).toBeGreaterThan(0);

      // Should NOT have mustSupport warning for identifier (since it's required)
      const identifierMustSupportWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('mustSupport') &&
          i.expression?.includes('Patient.identifier')
      );
      expect(identifierMustSupportWarnings).toHaveLength(0);
    });
  });

  describe('mustSupport validation without profile', () => {
    it('should not warn when no profile is specified', async () => {
      const patient = {
        resourceType: 'Patient',
        // No meta.profile - using base Patient
        identifier: [
          {
            use: 'official',
            system: 'http://example.com',
            value: '12345',
          },
        ],
        name: [{ family: 'Test' }],
      };

      const result = await validator.validate(patient, {
        includeWarnings: true,
        validateMustSupport: true,
      });

      // Should NOT have mustSupport warnings without a profile
      const mustSupportWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('mustSupport')
      );
      expect(mustSupportWarnings).toHaveLength(0);
    });
  });

  describe('mustSupport validation respects includeWarnings', () => {
    it('should not include mustSupport warnings when includeWarnings is false', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, {
        includeWarnings: false,
        validateMustSupport: true,
      });

      // Should NOT include warnings
      const warnings = result.issue.filter((i) => i.severity === 'warning');
      expect(warnings).toHaveLength(0);
    });
  });

  describe('mustSupport warning message format', () => {
    it('should include profile name in warning message', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl'],
        },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, {
        includeWarnings: true,
        validateMustSupport: true,
      });

      const mustSupportWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('mustSupport')
      );

      if (mustSupportWarnings.length > 0) {
        // Should include profile name
        expect(mustSupportWarnings[0].diagnostics).toContain('[Profile:');
        // Should use business-rule code
        expect(mustSupportWarnings[0].code).toBe('business-rule');
        // Should have expression with the element path
        expect(mustSupportWarnings[0].expression).toBeDefined();
        expect(mustSupportWarnings[0].expression!.length).toBeGreaterThan(0);
      }
    });
  });
});
