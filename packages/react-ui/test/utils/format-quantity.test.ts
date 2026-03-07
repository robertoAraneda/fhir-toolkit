import { describe, it, expect } from 'vitest';
import { formatQuantity } from '../../src/utils/format-quantity.js';

describe('formatQuantity', () => {
  it('formats value with unit', () => {
    expect(formatQuantity({ value: 72, unit: 'kg' })).toBe('72 kg');
  });

  it('formats value with code when no unit', () => {
    expect(formatQuantity({ value: 120, code: 'mm[Hg]' })).toBe('120 mm[Hg]');
  });

  it('includes comparator', () => {
    expect(formatQuantity({ comparator: '>=', value: 10, unit: 'mg' })).toBe('>= 10 mg');
  });

  it('formats value alone', () => {
    expect(formatQuantity({ value: 42 })).toBe('42');
  });

  it('returns empty string for empty quantity', () => {
    expect(formatQuantity({})).toBe('');
  });

  it('handles zero value', () => {
    expect(formatQuantity({ value: 0, unit: 'mg' })).toBe('0 mg');
  });
});
