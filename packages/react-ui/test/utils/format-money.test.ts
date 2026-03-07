import { describe, it, expect } from 'vitest';
import { formatMoney } from '../../src/utils/format-money.js';

describe('formatMoney', () => {
  it('formats value with currency', () => {
    expect(formatMoney({ value: 100, currency: 'USD' })).toBe('100.00 USD');
  });

  it('formats value without currency', () => {
    expect(formatMoney({ value: 50.5 })).toBe('50.50');
  });

  it('returns empty string when no value', () => {
    expect(formatMoney({ currency: 'EUR' })).toBe('');
  });

  it('handles zero value', () => {
    expect(formatMoney({ value: 0, currency: 'USD' })).toBe('0.00 USD');
  });
});
