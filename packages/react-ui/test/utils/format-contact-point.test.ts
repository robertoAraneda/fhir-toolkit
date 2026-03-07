import { describe, it, expect } from 'vitest';
import { formatContactPoint } from '../../src/utils/format-contact-point.js';

describe('formatContactPoint', () => {
  it('formats with system, value, use', () => {
    expect(
      formatContactPoint({ system: 'phone', value: '555-123-4567', use: 'home' }),
    ).toBe('[phone] 555-123-4567 (home)');
  });

  it('handles missing system', () => {
    expect(formatContactPoint({ value: '555-123-4567', use: 'home' })).toBe(
      '555-123-4567 (home)',
    );
  });

  it('handles missing value', () => {
    expect(formatContactPoint({ system: 'phone', use: 'work' })).toBe(
      '[phone] (work)',
    );
  });

  it('handles missing use', () => {
    expect(formatContactPoint({ system: 'email', value: 'john@example.com' })).toBe(
      '[email] john@example.com',
    );
  });

  it('returns empty string for empty contact point', () => {
    expect(formatContactPoint({})).toBe('');
  });
});
