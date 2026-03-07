import { describe, it, expect } from 'vitest';
import { formatRange } from '../../src/utils/format-range.js';

describe('formatRange', () => {
  it('formats low and high', () => {
    expect(formatRange({
      low: { value: 3.5, unit: 'mmol/L' },
      high: { value: 5.5, unit: 'mmol/L' },
    })).toBe('3.5 mmol/L – 5.5 mmol/L');
  });

  it('formats low only', () => {
    expect(formatRange({ low: { value: 10, unit: 'mg' } })).toBe('>= 10 mg');
  });

  it('formats high only', () => {
    expect(formatRange({ high: { value: 100, unit: 'mg' } })).toBe('<= 100 mg');
  });

  it('returns empty string for empty range', () => {
    expect(formatRange({})).toBe('');
  });
});
