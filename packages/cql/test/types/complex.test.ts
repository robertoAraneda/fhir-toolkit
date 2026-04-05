import { describe, it, expect } from 'vitest';
import {
  CqlInterval,
  CqlList,
  CqlTuple,
  CqlCode,
  CqlConcept,
  CqlRatio,
} from '../../src/types/complex.js';
import {
  CqlInteger,
  CqlDecimal,
  CqlString,
  CqlQuantity,
} from '../../src/types/primitives.js';

// ---------------------------------------------------------------------------
// CqlInterval
// ---------------------------------------------------------------------------

describe('CqlInterval', () => {
  const int = (n: number) => new CqlInteger(n);

  describe('contains', () => {
    it('returns true for a point inside a closed interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.contains(int(5))).toBe(true);
    });

    it('returns true for a point on the low boundary of a closed interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.contains(int(1))).toBe(true);
    });

    it('returns true for a point on the high boundary of a closed interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.contains(int(10))).toBe(true);
    });

    it('returns false for a point on the low boundary of an open interval', () => {
      const iv = new CqlInterval(int(1), int(10), false, true);
      expect(iv.contains(int(1))).toBe(false);
    });

    it('returns false for a point on the high boundary of an open interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, false);
      expect(iv.contains(int(10))).toBe(false);
    });

    it('returns false for a point below the interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.contains(int(0))).toBe(false);
    });

    it('returns false for a point above the interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.contains(int(11))).toBe(false);
    });

    it('handles null low boundary (unbounded below)', () => {
      const iv = new CqlInterval<CqlInteger>(null, int(10), true, true);
      expect(iv.contains(int(-100))).toBe(true);
      expect(iv.contains(int(10))).toBe(true);
      expect(iv.contains(int(11))).toBe(false);
    });

    it('handles null high boundary (unbounded above)', () => {
      const iv = new CqlInterval<CqlInteger>(int(1), null, true, true);
      expect(iv.contains(int(1))).toBe(true);
      expect(iv.contains(int(1000))).toBe(true);
      expect(iv.contains(int(0))).toBe(false);
    });
  });

  describe('includes', () => {
    it('returns true when this interval fully includes another', () => {
      const outer = new CqlInterval(int(1), int(10), true, true);
      const inner = new CqlInterval(int(2), int(9), true, true);
      expect(outer.includes(inner)).toBe(true);
    });

    it('returns true when intervals are equal', () => {
      const a = new CqlInterval(int(1), int(10), true, true);
      const b = new CqlInterval(int(1), int(10), true, true);
      expect(a.includes(b)).toBe(true);
    });

    it('returns false when the other interval extends beyond', () => {
      const inner = new CqlInterval(int(2), int(9), true, true);
      const outer = new CqlInterval(int(1), int(10), true, true);
      expect(inner.includes(outer)).toBe(false);
    });

    it('returns false when closed boundary sits on open boundary', () => {
      const outer = new CqlInterval(int(1), int(10), false, true);
      const inner = new CqlInterval(int(1), int(5), true, true);
      expect(outer.includes(inner)).toBe(false);
    });
  });

  describe('overlaps', () => {
    it('returns true for overlapping intervals', () => {
      const a = new CqlInterval(int(1), int(5), true, true);
      const b = new CqlInterval(int(3), int(8), true, true);
      expect(a.overlaps(b)).toBe(true);
    });

    it('returns true when intervals share a single closed boundary', () => {
      const a = new CqlInterval(int(1), int(5), true, true);
      const b = new CqlInterval(int(5), int(10), true, true);
      expect(a.overlaps(b)).toBe(true);
    });

    it('returns false when intervals touch at open boundaries', () => {
      const a = new CqlInterval(int(1), int(5), true, false);
      const b = new CqlInterval(int(5), int(10), true, true);
      expect(a.overlaps(b)).toBe(false);
    });

    it('returns false for completely separate intervals', () => {
      const a = new CqlInterval(int(1), int(3), true, true);
      const b = new CqlInterval(int(5), int(8), true, true);
      expect(a.overlaps(b)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('returns false for a valid closed interval', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.isEmpty()).toBe(false);
    });

    it('returns true when low > high', () => {
      const iv = new CqlInterval(int(10), int(1), true, true);
      expect(iv.isEmpty()).toBe(true);
    });

    it('returns true when low == high and one boundary is open', () => {
      const iv = new CqlInterval(int(5), int(5), true, false);
      expect(iv.isEmpty()).toBe(true);
    });

    it('returns false when low == high and both closed', () => {
      const iv = new CqlInterval(int(5), int(5), true, true);
      expect(iv.isEmpty()).toBe(false);
    });

    it('returns false when a boundary is null', () => {
      const iv = new CqlInterval<CqlInteger>(null, int(5), true, true);
      expect(iv.isEmpty()).toBe(false);
    });
  });

  describe('equals', () => {
    it('returns true for identical intervals', () => {
      const a = new CqlInterval(int(1), int(10), true, false);
      const b = new CqlInterval(int(1), int(10), true, false);
      expect(a.equals(b)).toBe(true);
    });

    it('returns false when closures differ', () => {
      const a = new CqlInterval(int(1), int(10), true, true);
      const b = new CqlInterval(int(1), int(10), true, false);
      expect(a.equals(b)).toBe(false);
    });

    it('returns false when boundaries differ', () => {
      const a = new CqlInterval(int(1), int(10), true, true);
      const b = new CqlInterval(int(1), int(9), true, true);
      expect(a.equals(b)).toBe(false);
    });

    it('returns false for non-interval values', () => {
      const a = new CqlInterval(int(1), int(10), true, true);
      expect(a.equals(int(1))).toBe(false);
    });
  });

  describe('toString', () => {
    it('formats closed interval with brackets', () => {
      const iv = new CqlInterval(int(1), int(10), true, true);
      expect(iv.toString()).toBe('Interval[1, 10]');
    });

    it('formats open interval with parens', () => {
      const iv = new CqlInterval(int(1), int(10), false, false);
      expect(iv.toString()).toBe('Interval(1, 10)');
    });

    it('formats null boundaries', () => {
      const iv = new CqlInterval<CqlInteger>(null, int(10), true, true);
      expect(iv.toString()).toBe('Interval[null, 10]');
    });
  });
});

// ---------------------------------------------------------------------------
// CqlList
// ---------------------------------------------------------------------------

describe('CqlList', () => {
  const int = (n: number) => new CqlInteger(n);

  it('count returns number of elements', () => {
    const list = new CqlList([int(1), int(2), int(3)]);
    expect(list.count()).toBe(3);
  });

  it('isEmpty returns true for empty list', () => {
    expect(new CqlList([]).isEmpty()).toBe(true);
  });

  it('isEmpty returns false for non-empty list', () => {
    expect(new CqlList([int(1)]).isEmpty()).toBe(false);
  });

  it('first returns first element', () => {
    const list = new CqlList([int(10), int(20)]);
    expect(list.first()?.equals(int(10))).toBe(true);
  });

  it('first returns null for empty list', () => {
    expect(new CqlList([]).first()).toBeNull();
  });

  it('last returns last element', () => {
    const list = new CqlList([int(10), int(20)]);
    expect(list.last()?.equals(int(20))).toBe(true);
  });

  it('last returns null for empty list', () => {
    expect(new CqlList([]).last()).toBeNull();
  });

  it('distinct removes duplicates', () => {
    const list = new CqlList([int(1), int(2), int(1), int(3), int(2)]);
    const d = list.distinct();
    expect(d.count()).toBe(3);
    expect(d.values[0].equals(int(1))).toBe(true);
    expect(d.values[1].equals(int(2))).toBe(true);
    expect(d.values[2].equals(int(3))).toBe(true);
  });

  it('equals returns true for identical lists', () => {
    const a = new CqlList([int(1), int(2)]);
    const b = new CqlList([int(1), int(2)]);
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false for different lengths', () => {
    const a = new CqlList([int(1)]);
    const b = new CqlList([int(1), int(2)]);
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for different elements', () => {
    const a = new CqlList([int(1), int(2)]);
    const b = new CqlList([int(1), int(3)]);
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for non-list values', () => {
    const a = new CqlList([int(1)]);
    expect(a.equals(int(1))).toBe(false);
  });

  it('toString formats elements', () => {
    const list = new CqlList([int(1), int(2)]);
    expect(list.toString()).toBe('{1, 2}');
  });

  it('toString returns {} for empty list', () => {
    expect(new CqlList([]).toString()).toBe('{}');
  });
});

// ---------------------------------------------------------------------------
// CqlTuple
// ---------------------------------------------------------------------------

describe('CqlTuple', () => {
  const int = (n: number) => new CqlInteger(n);
  const str = (s: string) => new CqlString(s);

  it('get returns value for existing key', () => {
    const t = new CqlTuple(new Map([['x', int(1)]]));
    expect(t.get('x')?.equals(int(1))).toBe(true);
  });

  it('get returns undefined for missing key', () => {
    const t = new CqlTuple(new Map([['x', int(1)]]));
    expect(t.get('y')).toBeUndefined();
  });

  it('get returns null for key with null value', () => {
    const t = new CqlTuple(new Map<string, null>([['x', null]]));
    expect(t.get('x')).toBeNull();
  });

  it('keys returns sorted list of element names', () => {
    const t = new CqlTuple(
      new Map([
        ['b', int(2)],
        ['a', int(1)],
        ['c', int(3)],
      ]),
    );
    expect(t.keys()).toEqual(['a', 'b', 'c']);
  });

  it('equals returns true for same fields and values', () => {
    const a = new CqlTuple(
      new Map([
        ['x', int(1)],
        ['y', str('hello')],
      ]),
    );
    const b = new CqlTuple(
      new Map([
        ['x', int(1)],
        ['y', str('hello')],
      ]),
    );
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false for different fields', () => {
    const a = new CqlTuple(new Map([['x', int(1)]]));
    const b = new CqlTuple(new Map([['y', int(1)]]));
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for different values', () => {
    const a = new CqlTuple(new Map([['x', int(1)]]));
    const b = new CqlTuple(new Map([['x', int(2)]]));
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for different sizes', () => {
    const a = new CqlTuple(
      new Map([
        ['x', int(1)],
        ['y', int(2)],
      ]),
    );
    const b = new CqlTuple(new Map([['x', int(1)]]));
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for non-tuple values', () => {
    const a = new CqlTuple(new Map([['x', int(1)]]));
    expect(a.equals(int(1))).toBe(false);
  });

  it('toString formats sorted elements', () => {
    const t = new CqlTuple(
      new Map([
        ['b', int(2)],
        ['a', int(1)],
      ]),
    );
    expect(t.toString()).toBe('Tuple{a: 1, b: 2}');
  });

  it('toString handles null values', () => {
    const t = new CqlTuple(new Map<string, null>([['x', null]]));
    expect(t.toString()).toBe('Tuple{x: null}');
  });

  it('toString returns Tuple{} for empty tuple', () => {
    const t = new CqlTuple(new Map());
    expect(t.toString()).toBe('Tuple{}');
  });
});

// ---------------------------------------------------------------------------
// CqlCode
// ---------------------------------------------------------------------------

describe('CqlCode', () => {
  it('equals matches by system and code', () => {
    const a = new CqlCode('123', 'http://loinc.org', 'Blood Pressure');
    const b = new CqlCode('123', 'http://loinc.org', 'BP');
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false for different codes', () => {
    const a = new CqlCode('123', 'http://loinc.org');
    const b = new CqlCode('456', 'http://loinc.org');
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for different systems', () => {
    const a = new CqlCode('123', 'http://loinc.org');
    const b = new CqlCode('123', 'http://snomed.info/sct');
    expect(a.equals(b)).toBe(false);
  });

  it('equals ignores display', () => {
    const a = new CqlCode('123', 'http://loinc.org', 'Display A');
    const b = new CqlCode('123', 'http://loinc.org', 'Display B');
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false for non-code values', () => {
    const a = new CqlCode('123', 'http://loinc.org');
    expect(a.equals(new CqlInteger(123))).toBe(false);
  });

  it('equivalent is case-insensitive', () => {
    const a = new CqlCode('ABC', 'http://LOINC.org');
    const b = new CqlCode('abc', 'http://loinc.org');
    expect(a.equivalent(b)).toBe(true);
  });

  it('toString with display', () => {
    const c = new CqlCode('123', 'http://loinc.org', 'BP');
    expect(c.toString()).toBe("Code '123' from http://loinc.org display 'BP'");
  });

  it('toString without display', () => {
    const c = new CqlCode('123', 'http://loinc.org');
    expect(c.toString()).toBe("Code '123' from http://loinc.org");
  });
});

// ---------------------------------------------------------------------------
// CqlConcept
// ---------------------------------------------------------------------------

describe('CqlConcept', () => {
  const loincBP = new CqlCode('8480-6', 'http://loinc.org', 'Systolic BP');
  const snomedBP = new CqlCode('271649006', 'http://snomed.info/sct', 'Systolic BP');

  it('stores multiple codes', () => {
    const concept = new CqlConcept([loincBP, snomedBP], 'Blood Pressure');
    expect(concept.codes.length).toBe(2);
    expect(concept.display).toBe('Blood Pressure');
  });

  it('equals checks all codes match', () => {
    const a = new CqlConcept([loincBP, snomedBP]);
    const b = new CqlConcept([loincBP, snomedBP]);
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false for different code count', () => {
    const a = new CqlConcept([loincBP, snomedBP]);
    const b = new CqlConcept([loincBP]);
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for different codes', () => {
    const a = new CqlConcept([loincBP]);
    const b = new CqlConcept([snomedBP]);
    expect(a.equals(b)).toBe(false);
  });

  it('equivalent returns true if any code matches', () => {
    const a = new CqlConcept([loincBP]);
    const b = new CqlConcept([snomedBP, loincBP]);
    expect(a.equivalent(b)).toBe(true);
  });

  it('equivalent works against a CqlCode', () => {
    const concept = new CqlConcept([loincBP, snomedBP]);
    expect(concept.equivalent(loincBP)).toBe(true);
  });

  it('equivalent returns false for non-matching', () => {
    const concept = new CqlConcept([loincBP]);
    expect(concept.equivalent(new CqlCode('999', 'http://other.org'))).toBe(false);
  });

  it('toString formats codes', () => {
    const concept = new CqlConcept([loincBP], 'BP');
    expect(concept.toString()).toContain('Concept{');
    expect(concept.toString()).toContain("display 'BP'");
  });
});

// ---------------------------------------------------------------------------
// CqlRatio
// ---------------------------------------------------------------------------

describe('CqlRatio', () => {
  it('stores numerator and denominator', () => {
    const num = CqlQuantity.of(5, 'mg');
    const den = CqlQuantity.of(1, 'dL');
    const ratio = new CqlRatio(num, den);
    expect(ratio.numerator.equals(num)).toBe(true);
    expect(ratio.denominator.equals(den)).toBe(true);
  });

  it('equals checks both components', () => {
    const a = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    const b = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    expect(a.equals(b)).toBe(true);
  });

  it('equals returns false when numerators differ', () => {
    const a = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    const b = new CqlRatio(CqlQuantity.of(10, 'mg'), CqlQuantity.of(1, 'dL'));
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false when denominators differ', () => {
    const a = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    const b = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(2, 'dL'));
    expect(a.equals(b)).toBe(false);
  });

  it('equals returns false for non-ratio values', () => {
    const ratio = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    expect(ratio.equals(new CqlInteger(5))).toBe(false);
  });

  it('equivalent uses quantity equivalence', () => {
    const a = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    const b = new CqlRatio(CqlQuantity.of(5, 'MG'), CqlQuantity.of(1, 'DL'));
    expect(a.equivalent(b)).toBe(true);
  });

  it('toString formats as numerator : denominator', () => {
    const ratio = new CqlRatio(CqlQuantity.of(5, 'mg'), CqlQuantity.of(1, 'dL'));
    expect(ratio.toString()).toBe('5 mg : 1 dL');
  });
});
