import { describe, it, expect } from 'vitest';
import { formatFhirValue } from '../../src/utils/format-fhir-value.js';

describe('formatFhirValue', () => {
  it('returns empty string for null', () => {
    expect(formatFhirValue(null, 'string')).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(formatFhirValue(undefined, 'string')).toBe('');
  });

  it('formats HumanName', () => {
    expect(formatFhirValue({ given: ['John'], family: 'Smith' }, 'HumanName')).toBe('John Smith');
  });

  it('formats Address', () => {
    expect(formatFhirValue({ city: 'Springfield', state: 'IL' }, 'Address')).toBe('Springfield, IL');
  });

  it('formats ContactPoint', () => {
    expect(formatFhirValue({ system: 'phone', value: '555-1234' }, 'ContactPoint')).toBe('[phone] 555-1234');
  });

  it('formats Coding', () => {
    expect(formatFhirValue({ display: 'Male' }, 'Coding')).toBe('Male');
  });

  it('formats CodeableConcept', () => {
    expect(formatFhirValue({ text: 'Hypertension' }, 'CodeableConcept')).toBe('Hypertension');
  });

  it('formats Quantity', () => {
    expect(formatFhirValue({ value: 72, unit: 'kg' }, 'Quantity')).toBe('72 kg');
  });

  it('formats Period', () => {
    expect(formatFhirValue({ start: '2024-01-01', end: '2024-12-31' }, 'Period')).toBe('2024-01-01 – 2024-12-31');
  });

  it('formats Reference', () => {
    expect(formatFhirValue({ display: 'Dr. Smith' }, 'Reference')).toBe('Dr. Smith');
  });

  it('formats Range', () => {
    expect(formatFhirValue({ low: { value: 3.5, unit: 'mmol/L' }, high: { value: 5.5, unit: 'mmol/L' } }, 'Range')).toBe('3.5 mmol/L – 5.5 mmol/L');
  });

  it('formats Ratio', () => {
    expect(formatFhirValue({ numerator: { value: 1, unit: 'mg' }, denominator: { value: 1, unit: 'mL' } }, 'Ratio')).toBe('1 mg / 1 mL');
  });

  it('formats Money', () => {
    expect(formatFhirValue({ value: 100, currency: 'USD' }, 'Money')).toBe('100.00 USD');
  });

  it('formats Annotation', () => {
    expect(formatFhirValue({ text: 'Note text' }, 'Annotation')).toBe('Note text');
  });

  it('formats Identifier', () => {
    expect(formatFhirValue({ value: 'MRN-123' }, 'Identifier')).toBe('MRN-123');
  });

  it('formats string types', () => {
    expect(formatFhirValue('hello', 'string')).toBe('hello');
    expect(formatFhirValue('http://example.com', 'uri')).toBe('http://example.com');
  });

  it('formats boolean as Yes/No', () => {
    expect(formatFhirValue(true, 'boolean')).toBe('Yes');
    expect(formatFhirValue(false, 'boolean')).toBe('No');
  });

  it('formats numbers', () => {
    expect(formatFhirValue(42, 'integer')).toBe('42');
    expect(formatFhirValue(3.14, 'decimal')).toBe('3.14');
  });

  it('handles Age (Quantity subtype)', () => {
    expect(formatFhirValue({ value: 36, unit: 'years' }, 'Age')).toBe('36 years');
  });

  it('handles Duration (Quantity subtype)', () => {
    expect(formatFhirValue({ value: 2, unit: 'hours' }, 'Duration')).toBe('2 hours');
  });

  it('falls back to JSON for unknown types', () => {
    expect(formatFhirValue({ foo: 'bar' }, 'UnknownType')).toBe('{"foo":"bar"}');
  });
});
