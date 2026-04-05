/**
 * Tests for UCUM validation in Quantity types
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/index.js';
import type { FhirResource } from '../../src/index.js';
import { createUcumService } from '@fhir-toolkit/ucum';

describe('UCUM validation in Quantity', () => {
  let validatorWithUcum: FhirValidator;
  let validatorWithoutUcum: FhirValidator;

  beforeAll(async () => {
    const ucumService = createUcumService();

    validatorWithUcum = new FhirValidator({ fhirVersion: 'R4', ucumService });
    await validatorWithUcum.initialize();

    validatorWithoutUcum = new FhirValidator({ fhirVersion: 'R4' });
    await validatorWithoutUcum.initialize();
  });

  it('reports error for invalid UCUM code in Observation.valueQuantity', async () => {
    const observation: FhirResource = {
      resourceType: 'Observation',
      status: 'final',
      code: { coding: [{ system: 'http://loinc.org', code: '15074-8' }] },
      valueQuantity: {
        value: 6.3,
        unit: 'not-a-unit',
        system: 'http://unitsofmeasure.org',
        code: 'not-a-unit',
      },
    };

    const outcome = await validatorWithUcum.validate(observation);
    const ucumErrors = outcome.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('UCUM')
    );
    expect(ucumErrors.length).toBeGreaterThan(0);
  });

  it('passes for valid UCUM code in Observation.valueQuantity', async () => {
    const observation: FhirResource = {
      resourceType: 'Observation',
      status: 'final',
      code: { coding: [{ system: 'http://loinc.org', code: '15074-8' }] },
      valueQuantity: {
        value: 6.3,
        unit: 'mmol/L',
        system: 'http://unitsofmeasure.org',
        code: 'mmol/L',
      },
    };

    const outcome = await validatorWithUcum.validate(observation);
    const ucumErrors = outcome.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('UCUM')
    );
    expect(ucumErrors).toHaveLength(0);
  });

  it('does not validate UCUM codes when no ucumService is provided', async () => {
    const observation: FhirResource = {
      resourceType: 'Observation',
      status: 'final',
      code: { coding: [{ system: 'http://loinc.org', code: '15074-8' }] },
      valueQuantity: {
        value: 6.3,
        unit: 'not-a-unit',
        system: 'http://unitsofmeasure.org',
        code: 'not-a-unit',
      },
    };

    const outcome = await validatorWithoutUcum.validate(observation);
    const ucumErrors = outcome.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('UCUM')
    );
    expect(ucumErrors).toHaveLength(0);
  });

  it('only validates UCUM code when system is http://unitsofmeasure.org', async () => {
    const observation: FhirResource = {
      resourceType: 'Observation',
      status: 'final',
      code: { coding: [{ system: 'http://loinc.org', code: '15074-8' }] },
      valueQuantity: {
        value: 6.3,
        unit: 'not-a-unit',
        system: 'http://example.org/custom-units',
        code: 'not-a-unit',
      },
    };

    const outcome = await validatorWithUcum.validate(observation);
    const ucumErrors = outcome.issue.filter(
      (i) => i.severity === 'error' && i.diagnostics?.includes('UCUM')
    );
    // Should not report UCUM errors for non-UCUM system
    expect(ucumErrors).toHaveLength(0);
  });
});
