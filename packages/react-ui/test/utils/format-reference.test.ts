import { describe, it, expect } from 'vitest';
import { formatReference } from '../../src/utils/format-reference.js';

describe('formatReference', () => {
  it('returns display when available', () => {
    expect(formatReference({ display: 'Dr. Smith', reference: 'Practitioner/123' })).toBe('Dr. Smith');
  });

  it('falls back to reference string', () => {
    expect(formatReference({ reference: 'Patient/789' })).toBe('Patient/789');
  });

  it('falls back to identifier value', () => {
    expect(formatReference({ identifier: { value: 'MRN-123' } })).toBe('MRN-123');
  });

  it('returns empty string for empty reference', () => {
    expect(formatReference({})).toBe('');
  });
});
