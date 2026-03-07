import { describe, it, expect } from 'vitest';
import { formatAnnotation } from '../../src/utils/format-annotation.js';

describe('formatAnnotation', () => {
  it('returns the text content', () => {
    expect(formatAnnotation({ text: 'Patient is allergic to penicillin' })).toBe(
      'Patient is allergic to penicillin',
    );
  });

  it('returns markdown text', () => {
    expect(formatAnnotation({ text: '**Important**: Follow up in 2 weeks' })).toBe(
      '**Important**: Follow up in 2 weeks',
    );
  });
});
