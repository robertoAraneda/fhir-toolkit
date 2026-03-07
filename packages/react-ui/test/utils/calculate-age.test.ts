import { describe, it, expect } from 'vitest';
import { calculateAge } from '../../src/utils/calculate-age.js';

describe('calculateAge', () => {
  it('calculates age correctly', () => {
    const age = calculateAge('1990-01-15', new Date('2026-03-06'));
    expect(age).toBe(36);
  });

  it('handles birthday not yet occurred this year', () => {
    const age = calculateAge('1990-12-25', new Date('2026-03-06'));
    expect(age).toBe(35);
  });

  it('handles birthday on the same day', () => {
    const age = calculateAge('1990-03-06', new Date('2026-03-06'));
    expect(age).toBe(36);
  });

  it('returns null for invalid date', () => {
    expect(calculateAge('not-a-date')).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(calculateAge('')).toBeNull();
  });

  it('handles leap year birthdays', () => {
    const age = calculateAge('2000-02-29', new Date('2026-03-01'));
    expect(age).toBe(26);
  });

  it('uses custom reference date', () => {
    const age = calculateAge('2000-05-15', new Date('2010-05-15'));
    expect(age).toBe(10);
  });

  it('returns null for future birth dates', () => {
    const age = calculateAge('2030-01-01', new Date('2026-03-06'));
    expect(age).toBeNull();
  });
});
