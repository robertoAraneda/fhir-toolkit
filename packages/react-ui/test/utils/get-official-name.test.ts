import { describe, it, expect } from 'vitest';
import { getOfficialName } from '../../src/utils/get-official-name.js';

describe('getOfficialName', () => {
  it('returns official name when present', () => {
    const names = [
      { use: 'nickname' as const, given: ['Johnny'] },
      { use: 'official' as const, family: 'Smith', given: ['John'] },
    ];
    expect(getOfficialName(names)).toEqual(names[1]);
  });

  it('falls back to first name when no official', () => {
    const names = [
      { use: 'nickname' as const, given: ['Johnny'] },
      { use: 'usual' as const, given: ['John'] },
    ];
    expect(getOfficialName(names)).toEqual(names[0]);
  });

  it('returns null for empty array', () => {
    expect(getOfficialName([])).toBeNull();
  });

  it('handles single name without use', () => {
    const names = [{ family: 'Smith', given: ['John'] }];
    expect(getOfficialName(names)).toEqual(names[0]);
  });
});
