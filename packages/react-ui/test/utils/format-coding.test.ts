import { describe, it, expect } from 'vitest';
import { formatCoding } from '../../src/utils/format-coding.js';

describe('formatCoding', () => {
  it('returns display when available', () => {
    expect(formatCoding({ display: 'Male', code: 'male', system: 'http://hl7.org/fhir/administrative-gender' })).toBe('Male');
  });

  it('falls back to code (system)', () => {
    expect(formatCoding({ code: 'male', system: 'http://hl7.org/fhir/administrative-gender' })).toBe('male (http://hl7.org/fhir/administrative-gender)');
  });

  it('returns code alone when no system', () => {
    expect(formatCoding({ code: 'male' })).toBe('male');
  });

  it('returns empty string for empty coding', () => {
    expect(formatCoding({})).toBe('');
  });
});
