import { describe, it, expect } from 'vitest';
import { formatPeriod } from '../../src/utils/format-period.js';

describe('formatPeriod', () => {
  it('formats start and end', () => {
    expect(formatPeriod({ start: '2024-01-01', end: '2024-12-31' })).toBe('2024-01-01 – 2024-12-31');
  });

  it('formats start only as ongoing', () => {
    expect(formatPeriod({ start: '2024-01-01' })).toBe('2024-01-01 – ongoing');
  });

  it('formats end only', () => {
    expect(formatPeriod({ end: '2024-12-31' })).toBe('until 2024-12-31');
  });

  it('returns empty string for empty period', () => {
    expect(formatPeriod({})).toBe('');
  });
});
