/**
 * Tests for CL Core Immunization Profile Validation
 *
 * Tests extension slicing where discriminator is {type: 'value', path: 'url'}
 * and the expected URL comes from type[0].profile[0] on the Extension element.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const IG_PATH = resolve(__dirname, 'fixtures/clcore-ig');

describe('CL Core Immunization Profile Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();

    // Load CL Core IG
    await validator.loadIG(IG_PATH);
  });

  describe('Official ImmunizationCL example', () => {
    it('should validate the official Immunization-ImmunizationCL.json example', async () => {
      // Load the official example
      const examplePath = resolve(IG_PATH, 'example/Immunization-ImmunizationCL.json');
      const immunization = JSON.parse(readFileSync(examplePath, 'utf-8'));

      const result = await validator.validate(immunization, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // The official example should be valid (no errors related to slicing)
      const sliceErrors = errors.filter((e) => e.diagnostics?.includes('Slice'));
      expect(sliceErrors).toHaveLength(0);
    });
  });

  describe('Extension slicing by URL', () => {
    it('should match extension to slice when url matches type[0].profile[0]', async () => {
      const immunization = {
        resourceType: 'Immunization',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ImmunizationCL'],
        },
        extension: [
          {
            url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana',
            valueCoding: {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSNombreCampana',
              code: 'hepatiA',
              display: 'Hepatitis A',
            },
          },
        ],
        identifier: [
          {
            system: 'http://sgi.gob.cl/identifier/inmunization/rni/',
            value: '136588279',
          },
        ],
        status: 'completed',
        vaccineCode: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI',
              valueCode: 'hep_A',
            },
          ],
        },
        patient: {
          reference: 'Patient/11',
        },
        occurrenceDateTime: '2022-04-07T00:00:00-04:00',
        location: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud',
              valueCoding: {
                system: 'https://minsal.cl/fhir/HD/CodeSystem/CSCodSSalud',
                code: 'SSAN',
                display: 'Servicio de Salud Antofagasta',
              },
            },
          ],
          reference: 'Location/3333458',
        },
        expirationDate: '2022-03-31',
        performer: [
          {
            actor: {
              reference: 'Organization/f003',
            },
          },
        ],
        protocolApplied: [
          {
            doseNumberString: '1º dosis',
          },
        ],
      };

      const result = await validator.validate(immunization, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Filter to slice-related errors
      const sliceErrors = errors.filter((e) => e.diagnostics?.includes('Slice'));

      // Should not have errors about extension slices not being matched
      expect(sliceErrors).toHaveLength(0);
    });

    it('should detect when required extension slice is missing', async () => {
      const immunization = {
        resourceType: 'Immunization',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ImmunizationCL'],
        },
        // Missing the required 'campana' extension
        extension: [],
        identifier: [
          {
            system: 'http://sgi.gob.cl/identifier/inmunization/rni/',
            value: '136588279',
          },
        ],
        status: 'completed',
        vaccineCode: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI',
              valueCode: 'hep_A',
            },
          ],
        },
        patient: {
          reference: 'Patient/11',
        },
        occurrenceDateTime: '2022-04-07T00:00:00-04:00',
        location: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud',
              valueCoding: {
                system: 'https://minsal.cl/fhir/HD/CodeSystem/CSCodSSalud',
                code: 'SSAN',
              },
            },
          ],
          reference: 'Location/3333458',
        },
        expirationDate: '2022-03-31',
        performer: [
          {
            actor: {
              reference: 'Organization/f003',
            },
          },
        ],
      };

      const result = await validator.validate(immunization, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about missing 'campana' slice (min: 1)
      const campanaErrors = errors.filter((e) => e.diagnostics?.includes('campana'));
      expect(campanaErrors.length).toBeGreaterThan(0);
    });

    it('should not match extension when url does not match profile', async () => {
      const immunization = {
        resourceType: 'Immunization',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ImmunizationCL'],
        },
        extension: [
          {
            // Wrong URL - should not match the 'campana' slice
            url: 'http://example.org/wrong-extension',
            valueCoding: {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSNombreCampana',
              code: 'hepatiA',
            },
          },
        ],
        identifier: [
          {
            system: 'http://sgi.gob.cl/identifier/inmunization/rni/',
            value: '136588279',
          },
        ],
        status: 'completed',
        vaccineCode: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI',
              valueCode: 'hep_A',
            },
          ],
        },
        patient: {
          reference: 'Patient/11',
        },
        occurrenceDateTime: '2022-04-07T00:00:00-04:00',
        location: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud',
              valueCoding: {
                system: 'https://minsal.cl/fhir/HD/CodeSystem/CSCodSSalud',
                code: 'SSAN',
              },
            },
          ],
          reference: 'Location/3333458',
        },
        expirationDate: '2022-03-31',
        performer: [
          {
            actor: {
              reference: 'Organization/f003',
            },
          },
        ],
      };

      const result = await validator.validate(immunization, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Should have error about missing 'campana' slice
      const campanaErrors = errors.filter((e) => e.diagnostics?.includes('campana'));
      expect(campanaErrors.length).toBeGreaterThan(0);
    });
  });

  describe('Nested extension slicing', () => {
    it('should validate extensions on nested elements like statusReason', async () => {
      const immunization = {
        resourceType: 'Immunization',
        meta: {
          profile: ['https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ImmunizationCL'],
        },
        extension: [
          {
            url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana',
            valueCoding: {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSNombreCampana',
              code: 'hepatiA',
              display: 'Hepatitis A',
            },
          },
        ],
        identifier: [
          {
            system: 'http://sgi.gob.cl/identifier/inmunization/rni/',
            value: '136588279',
          },
        ],
        status: 'not-done',
        statusReason: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm',
              valueCode: 'solicitudPaci',
            },
          ],
        },
        vaccineCode: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI',
              valueCode: 'hep_A',
            },
          ],
        },
        patient: {
          reference: 'Patient/11',
        },
        occurrenceDateTime: '2022-04-07T00:00:00-04:00',
        location: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud',
              valueCoding: {
                system: 'https://minsal.cl/fhir/HD/CodeSystem/CSCodSSalud',
                code: 'SSAN',
              },
            },
          ],
          reference: 'Location/3333458',
        },
        expirationDate: '2022-03-31',
        performer: [
          {
            actor: {
              reference: 'Organization/f003',
            },
          },
        ],
      };

      const result = await validator.validate(immunization, { includeWarnings: true });
      const errors = result.issue.filter((i) => i.severity === 'error');

      // Filter to slice-related errors for statusReason
      const statusReasonSliceErrors = errors.filter(
        (e) =>
          e.diagnostics?.includes('Slice') && e.expression?.some((p) => p.includes('statusReason'))
      );

      // Should not have errors about statusReason extension slices
      expect(statusReasonSliceErrors).toHaveLength(0);
    });
  });
});
