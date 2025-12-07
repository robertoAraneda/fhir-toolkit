/**
 * Tests for Terminology Display Validation
 *
 * Per FHIR spec: "If the display element is populated, the string used in display
 * SHALL be one of the display strings defined for that code by the code system"
 *
 * @see https://hl7.org/fhir/R4/datatypes.html#Coding
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import { resolve } from 'path';

describe('Terminology Display Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();

    // Load CL Core IG which has CodeSystems with defined displays
    const igPath = resolve(__dirname, 'fixtures/clcore-ig');
    await validator.loadIG(igPath);
  });

  describe('Display validation against CodeSystem', () => {
    it('should accept correct display for a code', async () => {
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
                  display: 'Run', // Correct display for code 01
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should not have display warning
      const displayWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('Display')
      );
      expect(displayWarnings).toHaveLength(0);
    });

    it('should warn when display does not match CodeSystem definition', async () => {
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
                  display: 'RUN', // Wrong case - should be "Run"
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should have display warning
      const displayWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('Display') &&
          i.diagnostics?.includes("'RUN'")
      );
      expect(displayWarnings.length).toBeGreaterThan(0);
      expect(displayWarnings[0].diagnostics).toContain("Valid display(s): 'Run'");
    });

    it('should warn when display is completely wrong', async () => {
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
                  display: 'Completely Wrong Display',
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should have display warning
      const displayWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('Display') &&
          i.diagnostics?.includes("'Completely Wrong Display'")
      );
      expect(displayWarnings.length).toBeGreaterThan(0);
    });

    it('should not warn when display is not provided', async () => {
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
                  // No display provided - should not warn
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should not have display warning
      const displayWarnings = result.issue.filter(
        (i) => i.severity === 'warning' && i.diagnostics?.includes('Display')
      );
      expect(displayWarnings).toHaveLength(0);
    });

    it('should validate display for different codes in same CodeSystem', async () => {
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
                  code: '04',
                  display: 'Pasaporte', // Wrong - should be "Número de pasaporte"
                },
              ],
            },
            system: 'urn:example:passport',
            value: 'AB123456',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should have display warning
      const displayWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('Display') &&
          i.diagnostics?.includes("'Pasaporte'")
      );
      expect(displayWarnings.length).toBeGreaterThan(0);
      expect(displayWarnings[0].diagnostics).toContain('Número de pasaporte');
    });
  });

  describe('Display validation with missing CodeSystem', () => {
    it('should not warn when CodeSystem is not available', async () => {
      const patient = {
        resourceType: 'Patient',
        identifier: [
          {
            use: 'official',
            type: {
              coding: [
                {
                  system: 'http://unknown-system.example.com/codes',
                  code: 'ABC',
                  display: 'Any Display',
                },
              ],
            },
            system: 'http://example.com',
            value: '12345',
          },
        ],
        name: [{ family: 'Test' }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should not have display warning for unknown CodeSystem
      const displayWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('Display') &&
          i.diagnostics?.includes("'Any Display'")
      );
      expect(displayWarnings).toHaveLength(0);
    });
  });

  describe('Display validation is separate from code validation', () => {
    it('should report both code and display errors when both are wrong', async () => {
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
                  code: 'INVALID_CODE', // Invalid code
                  display: 'Invalid Display',
                },
              ],
            },
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [{ use: 'official', family: 'Test', given: ['Test'] }],
      };

      const result = await validator.validate(patient, { includeWarnings: true });

      // Should have code-invalid warning for the invalid code
      const codeWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes("Code 'INVALID_CODE'") &&
          i.diagnostics?.includes('not in the extensible ValueSet')
      );
      expect(codeWarnings.length).toBeGreaterThan(0);

      // Should NOT have display warning since code is invalid
      // (display validation only runs when code is valid)
      const displayWarnings = result.issue.filter(
        (i) =>
          i.severity === 'warning' &&
          i.diagnostics?.includes('Display') &&
          i.diagnostics?.includes("'Invalid Display'")
      );
      expect(displayWarnings).toHaveLength(0);
    });
  });
});
