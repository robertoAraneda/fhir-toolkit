import { describe, it, expect } from 'vitest';
import { formatRatio } from '../../src/utils/format-ratio.js';

describe('formatRatio', () => {
  it('formats numerator and denominator', () => {
    expect(formatRatio({
      numerator: { value: 1, unit: 'mg' },
      denominator: { value: 1, unit: 'mL' },
    })).toBe('1 mg / 1 mL');
  });

  it('formats numerator only', () => {
    expect(formatRatio({ numerator: { value: 500, unit: 'mg' } })).toBe('500 mg');
  });

  it('formats denominator only', () => {
    expect(formatRatio({ denominator: { value: 1, unit: 'mL' } })).toBe('/ 1 mL');
  });

  it('returns empty string for empty ratio', () => {
    expect(formatRatio({})).toBe('');
  });
});
