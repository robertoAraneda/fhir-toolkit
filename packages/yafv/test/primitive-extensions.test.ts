/**
 * Tests for FHIR Primitive Extensions (_element syntax)
 *
 * FHIR allows extensions on primitive elements using the _elementName syntax.
 * For example, _birthDate contains extensions for the birthDate element.
 *
 * @see https://www.hl7.org/fhir/json.html#primitive
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../src/index.js';

describe('Primitive Extensions', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator();
    await validator.initialize();
  });

  describe('Basic primitive extension support', () => {
    it('should accept valid primitive extension on resource element', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          extension: [
            {
              url: 'http://example.org/fhir/StructureDefinition/birth-time',
              valueDateTime: '1990-01-15T10:30:00Z',
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i => i.severity === 'error' && i.diagnostics?.includes("Unknown element '_birthDate'")
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should accept primitive extension with only id', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          id: 'birthdate-1',
        },
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_birthDate'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should accept primitive extension with both id and extension', async () => {
      const patient = {
        resourceType: 'Patient',
        active: true,
        _active: {
          id: 'active-status',
          extension: [
            {
              url: 'http://example.org/fhir/StructureDefinition/data-absent-reason',
              valueCode: 'unknown',
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_active'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(errors).toHaveLength(0);
    });

    it('should reject primitive extension for non-existent element', async () => {
      const patient = {
        resourceType: 'Patient',
        _nonExistent: {
          extension: [
            {
              url: 'http://example.org/test',
              valueString: 'test',
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          i.diagnostics?.includes("Invalid primitive extension '_nonExistent'")
      );

      expect(errors.length).toBeGreaterThan(0);
    });

    it('should reject primitive extension with invalid structure', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          invalidProperty: 'should not be here',
          extension: [
            {
              url: 'http://example.org/test',
              valueString: 'test',
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i =>
          i.severity === 'error' && i.diagnostics?.includes("Invalid property 'invalidProperty'")
      );

      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Primitive extensions in complex types', () => {
    it('should accept primitive extension on Address.city', async () => {
      const patient = {
        resourceType: 'Patient',
        address: [
          {
            city: 'Santiago',
            _city: {
              extension: [
                {
                  url: 'http://example.org/fhir/StructureDefinition/city-code',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://example.org/codes/cities',
                        code: '13101',
                        display: 'Santiago',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_city'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should accept primitive extensions on multiple Address fields', async () => {
      const patient = {
        resourceType: 'Patient',
        address: [
          {
            city: 'Providencia',
            _city: {
              extension: [
                {
                  url: 'http://example.org/city-extension',
                  valueString: 'comuna',
                },
              ],
            },
            district: 'Santiago',
            _district: {
              extension: [
                {
                  url: 'http://example.org/district-extension',
                  valueString: 'provincia',
                },
              ],
            },
            state: 'Metropolitana',
            _state: {
              extension: [
                {
                  url: 'http://example.org/state-extension',
                  valueString: 'region',
                },
              ],
            },
            country: 'Chile',
            _country: {
              extension: [
                {
                  url: 'http://example.org/country-extension',
                  valueString: 'country-code',
                },
              ],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should reject primitive extension for invalid element in complex type', async () => {
      const patient = {
        resourceType: 'Patient',
        address: [
          {
            city: 'Santiago',
            _invalid: {
              extension: [
                {
                  url: 'http://example.org/test',
                  valueString: 'test',
                },
              ],
            },
          },
        ],
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i =>
          i.severity === 'error' && i.diagnostics?.includes("Invalid primitive extension '_invalid'")
      );

      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('Array primitive extensions', () => {
    it('should accept primitive extensions on array elements (line in Address)', async () => {
      const patient = {
        resourceType: 'Patient',
        address: [
          {
            line: ['Av. Providencia 1234', 'Depto 501'],
            _line: [
              {
                extension: [
                  {
                    url: 'http://example.org/line-type',
                    valueCode: 'street',
                  },
                ],
              },
              {
                extension: [
                  {
                    url: 'http://example.org/line-type',
                    valueCode: 'unit',
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_line'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should accept null in array primitive extensions', async () => {
      const patient = {
        resourceType: 'Patient',
        address: [
          {
            line: ['Street', 'Unit'],
            _line: [
              null, // First line has no extension
              {
                extension: [
                  {
                    url: 'http://example.org/line-type',
                    valueCode: 'unit',
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_line'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });
  });

  describe('Extension validation within primitive extensions', () => {
    it('should reject extension without url', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          extension: [
            {
              valueString: 'missing url',
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i => i.severity === 'error' && i.diagnostics?.includes("must have a 'url' property")
      );

      expect(errors.length).toBeGreaterThan(0);
    });

    it('should reject extension with multiple values', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          extension: [
            {
              url: 'http://example.org/test',
              valueString: 'value1',
              valueInteger: 123,
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const errors = result.issue.filter(
        i => i.severity === 'error' && i.diagnostics?.includes('can only have one value[x]')
      );

      expect(errors.length).toBeGreaterThan(0);
    });

    it('should accept extension with nested extensions (complex extension)', async () => {
      const patient = {
        resourceType: 'Patient',
        birthDate: '1990-01-15',
        _birthDate: {
          extension: [
            {
              url: 'http://example.org/complex-extension',
              extension: [
                {
                  url: 'part1',
                  valueString: 'nested value',
                },
              ],
            },
          ],
        },
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_birthDate'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });
  });

  describe('HumanName primitive extensions', () => {
    it('should accept primitive extension on HumanName.family', async () => {
      const patient = {
        resourceType: 'Patient',
        name: [
          {
            family: 'González',
            _family: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
                  valueString: 'Pérez',
                },
              ],
            },
            given: ['Juan'],
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_family'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });

    it('should accept primitive extensions on array given names', async () => {
      const patient = {
        resourceType: 'Patient',
        name: [
          {
            given: ['Juan', 'Pablo'],
            _given: [
              {
                extension: [
                  {
                    url: 'http://example.org/name-type',
                    valueCode: 'first',
                  },
                ],
              },
              {
                extension: [
                  {
                    url: 'http://example.org/name-type',
                    valueCode: 'middle',
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = await validator.validate(patient);
      const structureErrors = result.issue.filter(
        i =>
          i.severity === 'error' &&
          (i.diagnostics?.includes("Unknown element '_given'") ||
            i.diagnostics?.includes('Invalid primitive extension'))
      );

      expect(structureErrors).toHaveLength(0);
    });
  });
});
