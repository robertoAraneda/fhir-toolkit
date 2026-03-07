import { describe, it, expect } from 'vitest';
import { formatHumanName } from '../../src/utils/format-human-name.js';

describe('formatHumanName', () => {
  it('returns text if available', () => {
    expect(formatHumanName({ text: 'John Smith' })).toBe('John Smith');
  });

  it('formats given + family (given-first, default)', () => {
    expect(formatHumanName({ given: ['John'], family: 'Smith' })).toBe('John Smith');
  });

  it('formats family, given (family-first)', () => {
    expect(
      formatHumanName({ given: ['John'], family: 'Smith' }, { order: 'family-first' }),
    ).toBe('Smith, John');
  });

  it('includes prefix by default', () => {
    expect(
      formatHumanName({ prefix: ['Dr.'], given: ['John'], family: 'Smith' }),
    ).toBe('Dr. John Smith');
  });

  it('includes suffix by default', () => {
    expect(
      formatHumanName({ given: ['John'], family: 'Smith', suffix: ['Jr.'] }),
    ).toBe('John Smith Jr.');
  });

  it('excludes prefix when includePrefix=false', () => {
    expect(
      formatHumanName(
        { prefix: ['Dr.'], given: ['John'], family: 'Smith' },
        { includePrefix: false },
      ),
    ).toBe('John Smith');
  });

  it('excludes suffix when includeSuffix=false', () => {
    expect(
      formatHumanName(
        { given: ['John'], family: 'Smith', suffix: ['Jr.'] },
        { includeSuffix: false },
      ),
    ).toBe('John Smith');
  });

  it('joins multiple given names with space', () => {
    expect(
      formatHumanName({ given: ['John', 'Michael'], family: 'Smith' }),
    ).toBe('John Michael Smith');
  });

  it('returns "Unknown" for empty name', () => {
    expect(formatHumanName({})).toBe('Unknown');
  });

  it('handles name with only family', () => {
    expect(formatHumanName({ family: 'Smith' })).toBe('Smith');
  });

  it('handles name with only given', () => {
    expect(formatHumanName({ given: ['John'] })).toBe('John');
  });
});
