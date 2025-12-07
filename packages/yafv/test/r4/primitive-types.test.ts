/**
 * Tests for primitive type validation
 */

import { describe, it, expect } from 'vitest';
import {
  validatePrimitiveType,
  isPrimitiveType,
} from '../../src/validators/primitive-types.js';

describe('Primitive Type Validation', () => {
  describe('isPrimitiveType', () => {
    it('should identify primitive types', () => {
      expect(isPrimitiveType('boolean')).toBe(true);
      expect(isPrimitiveType('integer')).toBe(true);
      expect(isPrimitiveType('string')).toBe(true);
      expect(isPrimitiveType('dateTime')).toBe(true);
    });

    it('should not identify complex types as primitive', () => {
      expect(isPrimitiveType('Patient')).toBe(false);
      expect(isPrimitiveType('HumanName')).toBe(false);
      expect(isPrimitiveType('Reference')).toBe(false);
    });
  });

  describe('boolean', () => {
    it('should validate true', () => {
      expect(validatePrimitiveType(true, 'boolean').valid).toBe(true);
    });

    it('should validate false', () => {
      expect(validatePrimitiveType(false, 'boolean').valid).toBe(true);
    });

    it('should reject string "true"', () => {
      const result = validatePrimitiveType('true', 'boolean');
      expect(result.valid).toBe(false);
    });

    it('should reject number 1', () => {
      const result = validatePrimitiveType(1, 'boolean');
      expect(result.valid).toBe(false);
    });
  });

  describe('integer', () => {
    it('should validate positive integer', () => {
      expect(validatePrimitiveType(42, 'integer').valid).toBe(true);
    });

    it('should validate zero', () => {
      expect(validatePrimitiveType(0, 'integer').valid).toBe(true);
    });

    it('should validate negative integer', () => {
      expect(validatePrimitiveType(-10, 'integer').valid).toBe(true);
    });

    it('should reject decimal', () => {
      const result = validatePrimitiveType(3.14, 'integer');
      expect(result.valid).toBe(false);
    });

    it('should reject string', () => {
      const result = validatePrimitiveType('42', 'integer');
      expect(result.valid).toBe(false);
    });

    it('should reject integer out of range', () => {
      const result = validatePrimitiveType(2147483648, 'integer');
      expect(result.valid).toBe(false);
    });
  });

  describe('positiveInt', () => {
    it('should validate positive integer', () => {
      expect(validatePrimitiveType(1, 'positiveInt').valid).toBe(true);
    });

    it('should reject zero', () => {
      const result = validatePrimitiveType(0, 'positiveInt');
      expect(result.valid).toBe(false);
    });

    it('should reject negative', () => {
      const result = validatePrimitiveType(-1, 'positiveInt');
      expect(result.valid).toBe(false);
    });
  });

  describe('unsignedInt', () => {
    it('should validate positive integer', () => {
      expect(validatePrimitiveType(1, 'unsignedInt').valid).toBe(true);
    });

    it('should validate zero', () => {
      expect(validatePrimitiveType(0, 'unsignedInt').valid).toBe(true);
    });

    it('should reject negative', () => {
      const result = validatePrimitiveType(-1, 'unsignedInt');
      expect(result.valid).toBe(false);
    });
  });

  describe('decimal', () => {
    it('should validate decimal number', () => {
      expect(validatePrimitiveType(3.14159, 'decimal').valid).toBe(true);
    });

    it('should validate integer as decimal', () => {
      expect(validatePrimitiveType(42, 'decimal').valid).toBe(true);
    });

    it('should reject Infinity', () => {
      const result = validatePrimitiveType(Infinity, 'decimal');
      expect(result.valid).toBe(false);
    });

    it('should reject NaN', () => {
      const result = validatePrimitiveType(NaN, 'decimal');
      expect(result.valid).toBe(false);
    });
  });

  describe('string', () => {
    it('should validate string', () => {
      expect(validatePrimitiveType('hello', 'string').valid).toBe(true);
    });

    it('should reject empty string', () => {
      // FHIR requires elements to have content if present (ele-1)
      const result = validatePrimitiveType('', 'string');
      expect(result.valid).toBe(false);
      expect(result.message).toContain('empty');
    });

    it('should reject number', () => {
      const result = validatePrimitiveType(42, 'string');
      expect(result.valid).toBe(false);
    });
  });

  describe('id', () => {
    it('should validate simple id', () => {
      expect(validatePrimitiveType('example', 'id').valid).toBe(true);
    });

    it('should validate id with numbers', () => {
      expect(validatePrimitiveType('patient-123', 'id').valid).toBe(true);
    });

    it('should validate id with dots', () => {
      expect(validatePrimitiveType('org.example', 'id').valid).toBe(true);
    });

    it('should reject id with spaces', () => {
      const result = validatePrimitiveType('invalid id', 'id');
      expect(result.valid).toBe(false);
    });

    it('should reject id with special chars', () => {
      const result = validatePrimitiveType('invalid@id', 'id');
      expect(result.valid).toBe(false);
    });

    it('should reject id longer than 64 chars', () => {
      const longId = 'a'.repeat(65);
      const result = validatePrimitiveType(longId, 'id');
      expect(result.valid).toBe(false);
    });

    it('should accept id of exactly 64 chars', () => {
      const maxId = 'a'.repeat(64);
      expect(validatePrimitiveType(maxId, 'id').valid).toBe(true);
    });
  });

  describe('code', () => {
    it('should validate simple code', () => {
      expect(validatePrimitiveType('active', 'code').valid).toBe(true);
    });

    it('should validate code with internal space', () => {
      expect(validatePrimitiveType('not done', 'code').valid).toBe(true);
    });

    it('should reject code with leading space', () => {
      const result = validatePrimitiveType(' active', 'code');
      expect(result.valid).toBe(false);
    });

    it('should reject code with trailing space', () => {
      const result = validatePrimitiveType('active ', 'code');
      expect(result.valid).toBe(false);
    });
  });

  describe('uri', () => {
    it('should validate http URI', () => {
      expect(validatePrimitiveType('http://example.com', 'uri').valid).toBe(true);
    });

    it('should validate urn', () => {
      expect(validatePrimitiveType('urn:oid:1.2.3', 'uri').valid).toBe(true);
    });

    it('should reject empty string', () => {
      const result = validatePrimitiveType('', 'uri');
      expect(result.valid).toBe(false);
    });
  });

  describe('url', () => {
    it('should validate http URL', () => {
      expect(validatePrimitiveType('http://example.com/path', 'url').valid).toBe(true);
    });

    it('should validate https URL', () => {
      expect(validatePrimitiveType('https://example.com', 'url').valid).toBe(true);
    });

    it('should reject relative path', () => {
      const result = validatePrimitiveType('/path/to/resource', 'url');
      expect(result.valid).toBe(false);
    });
  });

  describe('oid', () => {
    it('should validate OID', () => {
      expect(validatePrimitiveType('urn:oid:1.2.3.4.5', 'oid').valid).toBe(true);
    });

    it('should validate OID starting with 2', () => {
      expect(validatePrimitiveType('urn:oid:2.16.840', 'oid').valid).toBe(true);
    });

    it('should reject without urn:oid prefix', () => {
      const result = validatePrimitiveType('1.2.3.4', 'oid');
      expect(result.valid).toBe(false);
    });

    it('should reject OID starting with 3', () => {
      const result = validatePrimitiveType('urn:oid:3.1.2', 'oid');
      expect(result.valid).toBe(false);
    });
  });

  describe('uuid', () => {
    it('should validate UUID', () => {
      expect(
        validatePrimitiveType('urn:uuid:550e8400-e29b-41d4-a716-446655440000', 'uuid').valid
      ).toBe(true);
    });

    it('should validate UUID with uppercase', () => {
      expect(
        validatePrimitiveType('urn:uuid:550E8400-E29B-41D4-A716-446655440000', 'uuid').valid
      ).toBe(true);
    });

    it('should reject without urn:uuid prefix', () => {
      const result = validatePrimitiveType('550e8400-e29b-41d4-a716-446655440000', 'uuid');
      expect(result.valid).toBe(false);
    });

    it('should reject invalid UUID format', () => {
      const result = validatePrimitiveType('urn:uuid:not-a-uuid', 'uuid');
      expect(result.valid).toBe(false);
    });
  });

  describe('date', () => {
    it('should validate full date', () => {
      expect(validatePrimitiveType('2023-12-25', 'date').valid).toBe(true);
    });

    it('should validate year-month', () => {
      expect(validatePrimitiveType('2023-12', 'date').valid).toBe(true);
    });

    it('should validate year only', () => {
      expect(validatePrimitiveType('2023', 'date').valid).toBe(true);
    });

    it('should reject invalid month', () => {
      const result = validatePrimitiveType('2023-13-01', 'date');
      expect(result.valid).toBe(false);
    });

    it('should reject invalid day', () => {
      const result = validatePrimitiveType('2023-12-32', 'date');
      expect(result.valid).toBe(false);
    });

    it('should reject time component', () => {
      const result = validatePrimitiveType('2023-12-25T12:00:00', 'date');
      expect(result.valid).toBe(false);
    });
  });

  describe('dateTime', () => {
    it('should validate full dateTime with timezone', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00Z', 'dateTime').valid).toBe(true);
    });

    it('should validate dateTime with offset', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00+05:00', 'dateTime').valid).toBe(true);
    });

    it('should validate date only', () => {
      expect(validatePrimitiveType('2023-12-25', 'dateTime').valid).toBe(true);
    });

    it('should validate year-month only', () => {
      expect(validatePrimitiveType('2023-12', 'dateTime').valid).toBe(true);
    });

    it('should validate dateTime with milliseconds', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00.123Z', 'dateTime').valid).toBe(true);
    });
  });

  describe('time', () => {
    it('should validate time', () => {
      expect(validatePrimitiveType('12:30:00', 'time').valid).toBe(true);
    });

    it('should validate time with milliseconds', () => {
      expect(validatePrimitiveType('12:30:00.123', 'time').valid).toBe(true);
    });

    it('should validate midnight', () => {
      expect(validatePrimitiveType('00:00:00', 'time').valid).toBe(true);
    });

    it('should reject invalid hour', () => {
      const result = validatePrimitiveType('25:00:00', 'time');
      expect(result.valid).toBe(false);
    });

    it('should reject invalid minute', () => {
      const result = validatePrimitiveType('12:60:00', 'time');
      expect(result.valid).toBe(false);
    });
  });

  describe('instant', () => {
    it('should validate instant with Z', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00Z', 'instant').valid).toBe(true);
    });

    it('should validate instant with timezone offset', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00+05:00', 'instant').valid).toBe(true);
    });

    it('should validate instant with milliseconds', () => {
      expect(validatePrimitiveType('2023-12-25T12:30:00.123Z', 'instant').valid).toBe(true);
    });

    it('should reject without timezone', () => {
      const result = validatePrimitiveType('2023-12-25T12:30:00', 'instant');
      expect(result.valid).toBe(false);
    });

    it('should reject date only', () => {
      const result = validatePrimitiveType('2023-12-25', 'instant');
      expect(result.valid).toBe(false);
    });
  });

  describe('base64Binary', () => {
    it('should validate valid base64', () => {
      expect(validatePrimitiveType('SGVsbG8gV29ybGQ=', 'base64Binary').valid).toBe(true);
    });

    it('should validate empty string', () => {
      expect(validatePrimitiveType('', 'base64Binary').valid).toBe(true);
    });

    it('should validate base64 with padding', () => {
      expect(validatePrimitiveType('YQ==', 'base64Binary').valid).toBe(true);
    });

    it('should reject invalid base64 chars', () => {
      const result = validatePrimitiveType('Invalid!@#', 'base64Binary');
      expect(result.valid).toBe(false);
    });
  });

  describe('xhtml', () => {
    it('should validate simple div', () => {
      expect(validatePrimitiveType('<div>Hello</div>', 'xhtml').valid).toBe(true);
    });

    it('should validate div with attributes', () => {
      expect(
        validatePrimitiveType('<div xmlns="http://www.w3.org/1999/xhtml">Content</div>', 'xhtml')
          .valid
      ).toBe(true);
    });

    it('should reject without div wrapper', () => {
      const result = validatePrimitiveType('<p>Hello</p>', 'xhtml');
      expect(result.valid).toBe(false);
    });

    it('should reject plain text', () => {
      const result = validatePrimitiveType('Hello World', 'xhtml');
      expect(result.valid).toBe(false);
    });
  });
});
