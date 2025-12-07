/**
 * Tests for external terminology service integration
 */

import { describe, it, expect, beforeAll, vi, afterEach } from 'vitest';
import { FhirValidator } from '../../src/core/validator.js';
import { TerminologyService, requiresExternalValidation } from '../../src/validators/terminology-service.js';

describe('Terminology Service', () => {
  describe('requiresExternalValidation', () => {
    it('should return true for SNOMED CT', () => {
      expect(requiresExternalValidation('http://snomed.info/sct')).toBe(true);
    });

    it('should return true for LOINC', () => {
      expect(requiresExternalValidation('http://loinc.org')).toBe(true);
    });

    it('should return true for RxNorm', () => {
      expect(requiresExternalValidation('http://www.nlm.nih.gov/research/umls/rxnorm')).toBe(true);
    });

    it('should return true for ICD-10', () => {
      expect(requiresExternalValidation('http://hl7.org/fhir/sid/icd-10')).toBe(true);
      expect(requiresExternalValidation('http://hl7.org/fhir/sid/icd-10-cm')).toBe(true);
    });

    it('should return true for UCUM', () => {
      expect(requiresExternalValidation('http://unitsofmeasure.org')).toBe(true);
    });

    it('should return true for language codes (BCP-47)', () => {
      expect(requiresExternalValidation('urn:ietf:bcp:47')).toBe(true);
    });

    it('should return true for country codes (ISO 3166)', () => {
      expect(requiresExternalValidation('urn:iso:std:iso:3166')).toBe(true);
    });

    it('should return false for HL7 code systems', () => {
      expect(requiresExternalValidation('http://hl7.org/fhir/administrative-gender')).toBe(false);
      expect(requiresExternalValidation('http://hl7.org/fhir/observation-status')).toBe(false);
    });

    it('should return false for custom code systems', () => {
      expect(requiresExternalValidation('http://example.org/fhir/CodeSystem/my-codes')).toBe(false);
    });
  });

  describe('TerminologyService class', () => {
    it('should create service with default options', () => {
      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4',
      });

      expect(service).toBeDefined();
      const stats = service.getCacheStats();
      expect(stats.size).toBe(0);
      expect(stats.maxSize).toBe(1000);
    });

    it('should create service with custom options', () => {
      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4/',
        timeout: 5000,
        cacheSize: 500,
        cacheTTL: 1800000,
      });

      expect(service).toBeDefined();
      const stats = service.getCacheStats();
      expect(stats.maxSize).toBe(500);
    });

    it('should clear cache', () => {
      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4',
      });

      service.clearCache();
      const stats = service.getCacheStats();
      expect(stats.size).toBe(0);
    });
  });

  describe('Integration with FhirValidator', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should validate without terminology server (local only)', async () => {
      const validator = new FhirValidator({ fhirVersion: 'R4' });
      await validator.initialize();

      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
        },
      };

      // Without terminology server, external codes pass validation
      const result = await validator.validate(observation);
      const errors = result.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBe(0);
    });

    it('should accept terminologyServer in constructor', async () => {
      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
      });
      await validator.initialize();

      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/observation-status',
              code: 'final',
            },
          ],
        },
      };

      // This should work without actually calling the server
      // since HL7 codes don't require external validation
      const result = await validator.validate(observation);

      expect(result.resourceType).toBe('OperationOutcome');
    });

    it('should validate Patient with required binding locally', async () => {
      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
      });
      await validator.initialize();

      const patient = {
        resourceType: 'Patient',
        gender: 'male',
      };

      const result = await validator.validate(patient);

      const errors = result.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBe(0);
    });

    it('should detect invalid local codes even with terminology server configured', async () => {
      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
      });
      await validator.initialize();

      const patient = {
        resourceType: 'Patient',
        gender: 'invalid-gender',
      };

      const result = await validator.validate(patient);

      const errors = result.issue.filter((i) => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].diagnostics).toContain('invalid-gender');
    });

    it('should expose cache statistics', async () => {
      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
        terminologyCacheSize: 500,
      });
      await validator.initialize();

      const stats = validator.getTerminologyCacheStats();
      expect(stats).toBeDefined();
      expect(stats?.maxSize).toBe(500);
      expect(stats?.size).toBe(0);
    });

    it('should return undefined stats when no terminology server configured', async () => {
      const validator = new FhirValidator({ fhirVersion: 'R4' });
      await validator.initialize();

      const stats = validator.getTerminologyCacheStats();
      expect(stats).toBeUndefined();
    });
  });

  describe('Mocked external validation', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should handle server timeout gracefully', async () => {
      // Mock fetch to simulate timeout
      vi.spyOn(global, 'fetch').mockImplementation(() => {
        return new Promise((_, reject) => {
          setTimeout(() => reject(new Error('AbortError')), 100);
        });
      });

      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
      });
      await validator.initialize();

      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '271649006',
              display: 'Systolic blood pressure',
            },
          ],
        },
      };

      // Should not throw, should fall back to local validation
      const result = await validator.validate(observation);

      expect(result.resourceType).toBe('OperationOutcome');
    });

    it('should handle server error response gracefully', async () => {
      // Mock fetch to return error
      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      } as Response);

      const validator = new FhirValidator({
        fhirVersion: 'R4',
        terminologyServer: 'https://tx.fhir.org/r4',
      });
      await validator.initialize();

      const observation = {
        resourceType: 'Observation',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
            },
          ],
        },
      };

      // Should not throw, should fall back to local validation
      const result = await validator.validate(observation);

      expect(result.resourceType).toBe('OperationOutcome');
    });

    it('should cache successful validation results', async () => {
      const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            resourceType: 'Parameters',
            parameter: [
              { name: 'result', valueBoolean: true },
              { name: 'display', valueString: 'Heart rate' },
            ],
          }),
      } as Response);

      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4',
      });

      // First call
      await service.validateCode({
        code: '8867-4',
        system: 'http://loinc.org',
        valueSetUrl: 'http://hl7.org/fhir/ValueSet/observation-vitalsignresult',
      });

      // Second call with same parameters
      await service.validateCode({
        code: '8867-4',
        system: 'http://loinc.org',
        valueSetUrl: 'http://hl7.org/fhir/ValueSet/observation-vitalsignresult',
      });

      // Should only call fetch once due to caching
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('should parse valid response from terminology server', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            resourceType: 'Parameters',
            parameter: [
              { name: 'result', valueBoolean: true },
              { name: 'display', valueString: 'Systolic blood pressure' },
              { name: 'message', valueString: 'Code is valid' },
            ],
          }),
      } as Response);

      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4',
      });

      const result = await service.validateCode({
        code: '271649006',
        system: 'http://snomed.info/sct',
        valueSetUrl: 'http://hl7.org/fhir/ValueSet/observation-codes',
      });

      expect(result.validated).toBe(true);
      expect(result.result).toBe(true);
      expect(result.display).toBe('Systolic blood pressure');
    });

    it('should parse invalid code response', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            resourceType: 'Parameters',
            parameter: [
              { name: 'result', valueBoolean: false },
              { name: 'message', valueString: 'Code not found in ValueSet' },
            ],
          }),
      } as Response);

      const service = new TerminologyService({
        baseUrl: 'https://tx.fhir.org/r4',
      });

      const result = await service.validateCode({
        code: 'invalid-code',
        system: 'http://snomed.info/sct',
        valueSetUrl: 'http://hl7.org/fhir/ValueSet/observation-codes',
      });

      expect(result.validated).toBe(true);
      expect(result.result).toBe(false);
      expect(result.message).toBe('Code not found in ValueSet');
    });
  });
});
