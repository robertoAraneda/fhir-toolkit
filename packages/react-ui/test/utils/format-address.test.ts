import { describe, it, expect } from 'vitest';
import { formatAddress } from '../../src/utils/format-address.js';

describe('formatAddress', () => {
  it('returns text if available', () => {
    expect(formatAddress({ text: '123 Main St, Springfield, IL' })).toBe(
      '123 Main St, Springfield, IL',
    );
  });

  it('formats line + city + state + postalCode + country', () => {
    expect(
      formatAddress({
        line: ['123 Main St'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
        country: 'US',
      }),
    ).toBe('123 Main St, Springfield, IL, 62701, US');
  });

  it('uses custom separator', () => {
    expect(
      formatAddress(
        { line: ['123 Main St'], city: 'Springfield', state: 'IL' },
        { separator: ' | ' },
      ),
    ).toBe('123 Main St | Springfield | IL');
  });

  it('handles missing fields', () => {
    expect(formatAddress({ city: 'Springfield', state: 'IL' })).toBe(
      'Springfield, IL',
    );
  });

  it('handles multiple address lines', () => {
    expect(
      formatAddress({ line: ['123 Main St', 'Apt 4B'], city: 'Springfield' }),
    ).toBe('123 Main St, Apt 4B, Springfield');
  });

  it('returns empty string for empty address', () => {
    expect(formatAddress({})).toBe('');
  });

  it('handles address with only city', () => {
    expect(formatAddress({ city: 'Springfield' })).toBe('Springfield');
  });
});
