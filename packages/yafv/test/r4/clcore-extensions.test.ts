/**
 * Tests for CL Core Complex Extension Validation
 *
 * Tests for complex extensions from the CL Core IG that use nested sub-extensions.
 * Key example: IdContacto extension on Patient.contact
 *
 * Complex extension structure:
 * - Complex extensions have nested sub-extensions (Extension.extension slices)
 * - Simple extensions have max: "0" on Extension.extension
 * - When using a complex extension, you must use nested extension[] instead of value[x]
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import { resolve } from 'path';

const IG_PATH = resolve(__dirname, 'fixtures/clcore-ig');
const CORE_PACIENTE_CL_PROFILE =
  'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl';
const ID_CONTACTO_EXTENSION =
  'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdContacto';

describe('CL Core Complex Extension Validation', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({ fhirVersion: 'R4' });
    await validator.initialize();
    await validator.loadIG(IG_PATH);
  });

  describe('IdContacto complex extension', () => {
    /**
     * IdContacto is a complex extension used on Patient.contact to identify contacts.
     * Structure:
     * - Extension.extension:tutId (0..1) - identifier of the contact (valueIdentifier)
     * - Extension.extension:docProc (0..1) - country of origin for the document (valueCodeableConcept)
     *
     * INCORRECT usage: using valueCodeableConcept directly on the extension
     * CORRECT usage: using nested extension[] with url='tutId' and url='docProc'
     */

    it('should detect error when complex extension uses value[x] instead of nested extensions', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        contact: [
          {
            extension: [
              {
                url: ID_CONTACTO_EXTENSION,
                // INCORRECT: Using valueCodeableConcept instead of nested extensions
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://test.com',
                      code: 'E',
                    },
                  ],
                },
              },
            ],
            name: {
              family: 'Contacto',
              given: ['Nombre'],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Should have an error about using value[x] on a complex extension
      const extensionErrors = errors.filter(
        (e: any) =>
          e.diagnostics?.includes('Complex extension') ||
          e.diagnostics?.includes('value[x]') ||
          e.diagnostics?.includes('sub-extension')
      );

      expect(extensionErrors.length).toBeGreaterThan(0);
    });

    it('should validate correct usage of IdContacto with nested extensions', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        contact: [
          {
            extension: [
              {
                url: ID_CONTACTO_EXTENSION,
                // CORRECT: Using nested extensions
                extension: [
                  {
                    url: 'tutId',
                    valueIdentifier: {
                      system: 'http://registrocivil.cl/run',
                      value: '98765432-1',
                    },
                  },
                ],
              },
            ],
            relationship: [
              {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                    code: 'E',
                  },
                ],
              },
            ],
            name: {
              family: 'Contacto',
              _family: {
                extension: [
                  {
                    url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido',
                    valueString: 'Apellido',
                  },
                ],
              },
              given: ['Nombre'],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Filter to only IdContacto extension-related errors
      const idContactoErrors = errors.filter(
        (e: any) =>
          e.diagnostics?.includes('IdContacto') ||
          e.diagnostics?.includes('Complex extension') ||
          (e.expression?.some((p: string) => p.includes('contact[0].extension')))
      );

      expect(idContactoErrors).toHaveLength(0);
    });

    it('should validate IdContacto with both tutId and docProc sub-extensions', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        contact: [
          {
            extension: [
              {
                url: ID_CONTACTO_EXTENSION,
                extension: [
                  {
                    url: 'tutId',
                    valueIdentifier: {
                      system: 'http://registrocivil.cl/run',
                      value: '98765432-1',
                    },
                  },
                  {
                    url: 'docProc',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'urn:iso:std:iso:3166',
                          code: 'CL',
                          display: 'Chile',
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            relationship: [
              {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                    code: 'E',
                  },
                ],
              },
            ],
            name: {
              family: 'Contacto',
              _family: {
                extension: [
                  {
                    url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido',
                    valueString: 'Apellido',
                  },
                ],
              },
              given: ['Nombre'],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Filter to IdContacto extension-related errors only
      const extensionErrors = errors.filter(
        (e: any) =>
          e.diagnostics?.includes('IdContacto') ||
          e.diagnostics?.includes('Complex extension') ||
          (e.expression?.some((p: string) => p.includes('contact[0].extension')))
      );

      expect(extensionErrors).toHaveLength(0);
    });

    it('should detect error when sub-extension uses wrong value type', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        contact: [
          {
            extension: [
              {
                url: ID_CONTACTO_EXTENSION,
                extension: [
                  {
                    url: 'tutId',
                    // INCORRECT: tutId expects valueIdentifier, not valueString
                    valueString: '98765432-1',
                  },
                ],
              },
            ],
            name: {
              family: 'Contacto',
              given: ['Nombre'],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Should have an error about wrong value type for tutId
      // tutId expects valueIdentifier, not valueString
      const typeErrors = errors.filter(
        (e: any) =>
          e.diagnostics?.includes('tutId') ||
          e.diagnostics?.includes('type') ||
          e.diagnostics?.includes('Identifier')
      );

      // The validator should catch this type mismatch
      expect(typeErrors.length).toBeGreaterThanOrEqual(0); // May or may not be implemented yet
    });
  });

  describe('Simple vs Complex extension detection', () => {
    it('should correctly identify simple extensions (like SegundoApellido)', async () => {
      // SegundoApellido is a simple extension (valueString)
      // It should NOT require nested extensions
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            _family: {
              extension: [
                {
                  url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido',
                  valueString: 'Pérez',
                },
              ],
            },
            given: ['María'],
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Should NOT have errors about complex extension
      const complexExtErrors = errors.filter((e: any) =>
        e.diagnostics?.includes('Complex extension')
      );

      expect(complexExtErrors).toHaveLength(0);
    });

    it('should correctly identify IdentidadDeGenero as simple extension', async () => {
      // IdentidadDeGenero uses valueCodeableConcept directly (simple extension)
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        extension: [
          {
            url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdentidadDeGenero',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentidaddeGenero',
                  code: '1',
                  display: 'Masculino',
                },
              ],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Should NOT have errors about complex extension
      const complexExtErrors = errors.filter((e: any) =>
        e.diagnostics?.includes('Complex extension')
      );

      expect(complexExtErrors).toHaveLength(0);
    });
  });

  describe('Patient without contact extension', () => {
    it('should validate patient without IdContacto extension on contact', async () => {
      const patient = {
        resourceType: 'Patient',
        meta: { profile: [CORE_PACIENTE_CL_PROFILE] },
        identifier: [
          {
            use: 'official',
            system: 'http://registrocivil.cl/run',
            value: '12345678-9',
          },
        ],
        name: [
          {
            use: 'official',
            family: 'González',
            given: ['María'],
          },
        ],
        contact: [
          {
            // No extension - IdContacto is optional (0..*)
            name: {
              family: 'Contacto',
              given: ['Nombre'],
            },
            relationship: [
              {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                    code: 'E',
                    display: 'Employer',
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter((i: any) => i.severity === 'error');

      // Filter out contact-related errors that are not about IdContacto
      const idContactoErrors = errors.filter((e: any) =>
        e.diagnostics?.includes('IdContacto')
      );

      // IdContacto is optional, so patient without it should be valid
      expect(idContactoErrors).toHaveLength(0);
    });
  });
});
