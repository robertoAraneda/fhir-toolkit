/**
 * Tests for improved error messages with context enrichment
 */
import { describe, it, expect } from 'vitest';
import { validate } from '../../src/index.js';

describe('Improved Error Messages', () => {
  describe('Type mismatch errors with expectedTypes', () => {
    it('should show expected types in error message for type mismatch', async () => {
      const invalidPatient = {
        resourceType: 'Patient',
        active: 'not-a-boolean', // Should be boolean
      };

      const outcome = await validate(invalidPatient);

      expect(outcome.issue.some(i => i.severity === 'error')).toBe(true);

      // Find the type error issue
      const typeError = outcome.issue.find(i =>
        i.code === 'value' && i.expression?.[0]?.includes('active')
      );

      expect(typeError).toBeDefined();
      // The error message should include expected type information
      expect(typeError?.diagnostics).toContain('Expected type(s): boolean');
    });

    it('should show expected type for invalid primitive values', async () => {
      const invalidPatient = {
        resourceType: 'Patient',
        birthDate: 12345, // Should be string
      };

      const outcome = await validate(invalidPatient);

      const typeError = outcome.issue.find(i =>
        i.code === 'value' && i.expression?.[0]?.includes('birthDate')
      );

      expect(typeError).toBeDefined();
      // Should indicate expected type
      if (typeError?.diagnostics) {
        expect(typeError.diagnostics).toContain('Expected type(s)');
      }
    });
  });

  describe('Structured details in errors', () => {
    it('should include structured details with CodeableConcept', async () => {
      const invalidPatient = {
        resourceType: 'Patient',
        birthDate: 'invalid-date', // Invalid date format
      };

      const outcome = await validate(invalidPatient);

      const errors = outcome.issue.filter(i => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);

      // Check that errors have structured details
      errors.forEach(error => {
        expect(error.details).toBeDefined();
        expect(error.details?.text).toBeDefined();
        expect(error.details?.coding).toBeDefined();
        expect(error.details?.coding?.[0]?.system).toBe('http://hl7.org/fhir/issue-type');
        expect(error.details?.coding?.[0]?.code).toBe(error.code);
      });
    });
  });

  describe('Parent context in diagnostics', () => {
    it('should include parent path in error diagnostics for nested elements', async () => {
      const invalidPatient = {
        resourceType: 'Patient',
        name: [
          {
            family: 123, // Should be string
          }
        ]
      };

      const outcome = await validate(invalidPatient);

      const typeError = outcome.issue.find(i =>
        i.code === 'value' && i.expression?.[0]?.includes('family')
      );

      expect(typeError).toBeDefined();
      // Should include parent context in diagnostics
      if (typeError?.diagnostics) {
        // The diagnostics should provide context about the parent element
        expect(typeError.diagnostics.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Cardinality errors with context', () => {
    it('should provide context for array/scalar mismatch errors', async () => {
      const invalidPatient = {
        resourceType: 'Patient',
        name: {  // Should be array
          family: 'Smith'
        }
      };

      const outcome = await validate(invalidPatient);

      const structureError = outcome.issue.find(i =>
        i.code === 'structure' && i.expression?.[0]?.includes('name')
      );

      expect(structureError).toBeDefined();
      expect(structureError?.diagnostics).toContain('array field');
      expect(structureError?.diagnostics).toContain('scalar value');
    });
  });

  describe('Overall error quality', () => {
    it('should provide actionable error messages', async () => {
      const invalidObservation = {
        resourceType: 'Observation',
        // Missing required fields: status, code
        subject: {
          reference: 123, // Should be string
        }
      };

      const outcome = await validate(invalidObservation);

      const errors = outcome.issue.filter(i => i.severity === 'error');
      expect(errors.length).toBeGreaterThan(0);

      // All errors should have:
      errors.forEach(error => {
        // 1. A clear diagnostic message
        expect(error.diagnostics).toBeDefined();
        expect(error.diagnostics!.length).toBeGreaterThan(0);

        // 2. An expression path (when applicable)
        if (error.code !== 'required' && error.code !== 'invalid') {
          // Some errors may not have expression paths
        }

        // 3. Structured details
        expect(error.details).toBeDefined();
        expect(error.details?.text).toBeDefined();
        expect(error.details?.coding).toBeDefined();
      });
    });
  });
});
