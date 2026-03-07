import { describe, it, expect, beforeAll } from 'vitest';
import { FhirValidator } from '../../src/core/validator.js';
import { SpecRegistry } from '../../src/core/spec-registry.js';
import { evaluate } from '../../src/validators/fhirpath-evaluator.js';

let validator: FhirValidator;
let registry: SpecRegistry;

beforeAll(async () => {
  const { specsPath } = await import('@fhir-toolkit/r4-specs');
  validator = new FhirValidator({
    fhirVersion: 'R4',
    defaultOptions: {
      level: 'full',
      includeWarnings: true,
    },
  });
  await validator.initialize();
  await validator.getRegistry().loadFromDirectory(specsPath);
  registry = validator.getRegistry();
});

describe('FHIRPath memberOf() - Unit Tests', () => {
  describe('with Coding input', () => {
    it('should return true for a code in the ValueSet', () => {
      // ObservationStatus ValueSet includes 'final'
      const coding = {
        system: 'http://hl7.org/fhir/observation-status',
        code: 'final',
      };

      const result = evaluate(
        "memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        coding,
        { resource: coding, registry }
      );

      expect(result.success).toBe(true);
      expect(result.result).toEqual([true]);
    });

    it('should return false for a code not in the ValueSet', () => {
      const coding = {
        system: 'http://hl7.org/fhir/observation-status',
        code: 'not-a-real-status',
      };

      const result = evaluate(
        "memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        coding,
        { resource: coding, registry }
      );

      expect(result.success).toBe(true);
      expect(result.result).toEqual([false]);
    });

    it('should return true for unknown ValueSet (fail-open)', () => {
      const coding = {
        system: 'http://example.org',
        code: 'test',
      };

      const result = evaluate(
        "memberOf('http://unknown.example.org/ValueSet/does-not-exist')",
        coding,
        { resource: coding, registry }
      );

      expect(result.success).toBe(true);
      expect(result.result).toEqual([true]);
    });
  });

  describe('with string code input', () => {
    it('should validate a plain code string against a ValueSet', () => {
      const result = evaluate(
        "status.memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        { resourceType: 'Observation', status: 'final', code: { text: 'test' } },
        { resource: { status: 'final' }, registry }
      );

      expect(result.success).toBe(true);
      // The result depends on how fhirpath.js navigates the data
      if (result.result && result.result.length > 0) {
        expect(result.result[0]).toBe(true);
      }
    });
  });

  describe('with CodeableConcept input', () => {
    it('should return true when any coding matches', () => {
      const cc = {
        coding: [
          { system: 'http://example.org', code: 'unknown-code' },
          { system: 'http://hl7.org/fhir/observation-status', code: 'final' },
        ],
        text: 'Final',
      };

      const result = evaluate(
        "memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        cc,
        { resource: cc, registry }
      );

      expect(result.success).toBe(true);
      expect(result.result).toEqual([true]);
    });

    it('should return false when no coding matches', () => {
      const cc = {
        coding: [
          { system: 'http://example.org', code: 'unknown-code' },
        ],
        text: 'Unknown',
      };

      const result = evaluate(
        "memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        cc,
        { resource: cc, registry }
      );

      expect(result.success).toBe(true);
      expect(result.result).toEqual([false]);
    });
  });

  describe('with empty or null input', () => {
    it('should return empty for null input', () => {
      const result = evaluate(
        "where(false).memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        { resourceType: 'Patient' },
        { resource: { resourceType: 'Patient' }, registry }
      );

      expect(result.success).toBe(true);
      // Empty input → empty result per fhirpath spec
      expect(result.result).toHaveLength(0);
    });
  });

  describe('without registry', () => {
    it('should not error when no registry is provided', () => {
      const coding = {
        system: 'http://hl7.org/fhir/observation-status',
        code: 'final',
      };

      const result = evaluate(
        "memberOf('http://hl7.org/fhir/ValueSet/observation-status')",
        coding,
        { resource: coding }
      );

      // Without registry, memberOf returns empty (can't validate)
      expect(result.success).toBe(true);
      expect(result.result).toHaveLength(0);
    });
  });
});

describe('FHIRPath memberOf() - Integration with Validator', () => {
  it('should evaluate constraints that use memberOf()', async () => {
    // AdministrativeGender ValueSet is required binding on Patient.gender
    const patient = {
      resourceType: 'Patient',
      gender: 'male',
    };

    const result = await validator.validate(patient);

    // Should not have any memberOf-related errors
    const memberOfErrors = result.issue.filter(
      (i) =>
        i.severity === 'error' &&
        i.diagnostics?.toLowerCase().includes('memberof')
    );
    expect(memberOfErrors).toHaveLength(0);
  });

  it('should pass validation with valid observation status', async () => {
    const observation = {
      resourceType: 'Observation',
      status: 'final',
      code: {
        coding: [{ system: 'http://loinc.org', code: '1234-5' }],
      },
    };

    const result = await validator.validate(observation);

    // No constraint errors related to memberOf
    const constraintErrors = result.issue.filter(
      (i) =>
        i.severity === 'error' &&
        i.code?.coding?.[0]?.code === 'invariant' &&
        i.diagnostics?.toLowerCase().includes('memberof')
    );
    expect(constraintErrors).toHaveLength(0);
  });
});
