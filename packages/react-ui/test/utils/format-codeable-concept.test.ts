import { describe, it, expect } from 'vitest';
import { formatCodeableConcept } from '../../src/utils/format-codeable-concept.js';

describe('formatCodeableConcept', () => {
  it('returns text when available', () => {
    expect(formatCodeableConcept({ text: 'Hypertension' })).toBe('Hypertension');
  });

  it('falls back to first coding display', () => {
    expect(formatCodeableConcept({
      coding: [{ display: 'Essential hypertension', code: 'I10', system: 'http://hl7.org/fhir/sid/icd-10' }],
    })).toBe('Essential hypertension');
  });

  it('uses coding code when no display', () => {
    expect(formatCodeableConcept({
      coding: [{ code: 'I10', system: 'http://hl7.org/fhir/sid/icd-10' }],
    })).toBe('I10 (http://hl7.org/fhir/sid/icd-10)');
  });

  it('returns empty string for empty concept', () => {
    expect(formatCodeableConcept({})).toBe('');
  });

  it('returns empty string for empty coding array', () => {
    expect(formatCodeableConcept({ coding: [] })).toBe('');
  });
});
