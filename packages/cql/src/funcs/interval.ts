/**
 * CQL interval functions.
 *
 * Ported from Go: funcs/interval.go, funcs/interval_set.go
 */

import type { CqlComparable, CqlValue } from '../types/index.js';
import {
  CqlBoolean,
  CqlDecimal,
  CqlInteger,
} from '../types/index.js';
import { CqlInterval, CqlList } from '../types/index.js';
import { asInteger, asInterval, numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function compareValues(a: CqlComparable, b: CqlValue): number {
  return a.compareTo(b);
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

export function registerIntervalFunctions(registry: FunctionRegistry): void {
  // Contains(interval, point) -> boolean
  registry.register('Contains', (args) => {
    const iv = asInterval(args[0]);
    if (iv === null || args[1] === null) return null;
    const point = args[1] as CqlComparable;
    return CqlBoolean.of(iv.contains(point));
  });

  // Includes(interval_a, interval_b) -> boolean
  registry.register('Includes', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    return CqlBoolean.of(a.includes(b));
  });

  // IncludedIn(interval_a, interval_b) -> boolean
  registry.register('IncludedIn', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    return CqlBoolean.of(b.includes(a));
  });

  // Overlaps(interval_a, interval_b) -> boolean
  registry.register('Overlaps', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    return CqlBoolean.of(a.overlaps(b));
  });

  // Before(interval_a, interval_b) -> boolean
  registry.register('Before', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    if (a.high === null || b.low === null) return null;
    const cmp = compareValues(a.high, b.low);
    return CqlBoolean.of(cmp < 0);
  });

  // After(interval_a, interval_b) -> boolean
  registry.register('After', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    if (a.low === null || b.high === null) return null;
    const cmp = compareValues(a.low, b.high);
    return CqlBoolean.of(cmp > 0);
  });

  // Meets(interval_a, interval_b) -> boolean
  registry.register('Meets', (args) => {
    const a = asInterval(args[0]);
    const b = asInterval(args[1]);
    if (a === null || b === null) return null;
    if (a.high !== null && b.low !== null && a.high.equals(b.low)) {
      return CqlBoolean.TRUE;
    }
    if (a.low !== null && b.high !== null && a.low.equals(b.high)) {
      return CqlBoolean.TRUE;
    }
    return CqlBoolean.FALSE;
  });

  // Width(interval) -> integer|decimal
  registry.register('Width', (args) => {
    const iv = asInterval(args[0]);
    if (iv === null || iv.low === null || iv.high === null) return null;

    // Integer intervals
    if (iv.low instanceof CqlInteger && iv.high instanceof CqlInteger) {
      let lo = iv.low.value;
      let hi = iv.high.value;
      if (!iv.lowClosed) lo++;
      if (!iv.highClosed) hi--;
      return new CqlInteger(hi - lo);
    }

    // Decimal intervals
    if (
      (iv.low instanceof CqlDecimal || iv.low instanceof CqlInteger) &&
      (iv.high instanceof CqlDecimal || iv.high instanceof CqlInteger)
    ) {
      const lo = numericVal(iv.low);
      const hi = numericVal(iv.high);
      return new CqlDecimal(hi.minus(lo));
    }

    return null;
  });

  // Size(interval) -> integer|decimal
  registry.register('Size', (args) => {
    const iv = asInterval(args[0]);
    if (iv === null || iv.low === null || iv.high === null) return null;
    const widthFn = registry.resolve('width');
    if (!widthFn) return null;
    const w = widthFn(args, null!);
    if (w === null) return null;
    if (w instanceof CqlInteger) {
      return new CqlInteger(w.value + 1);
    }
    return w;
  });

  // Expand(interval, per?) -> list
  registry.register('Expand', (args) => {
    const iv = asInterval(args[0]);
    if (iv === null || iv.low === null || iv.high === null) return null;

    if (iv.low instanceof CqlInteger && iv.high instanceof CqlInteger) {
      const perVal = args[1] != null ? asInteger(args[1]) : null;
      const step = perVal !== null && perVal > 0 ? perVal : 1;
      let lo = iv.low.value;
      let hi = iv.high.value;
      if (!iv.lowClosed) lo++;
      if (!iv.highClosed) hi--;
      const result: CqlValue[] = [];
      for (let v = lo; v <= hi; v += step) {
        result.push(new CqlInteger(v));
      }
      return new CqlList(result);
    }

    return null;
  });

  // Collapse(list_of_intervals) -> list_of_intervals
  registry.register('Collapse', (args) => {
    const list = args[0];
    if (list === null || !(list instanceof CqlList)) return null;
    const intervals: CqlInterval<CqlComparable>[] = [];
    for (const item of list.values) {
      if (item instanceof CqlInterval) {
        intervals.push(item as CqlInterval<CqlComparable>);
      }
    }
    if (intervals.length === 0) return null;

    // Sort by low boundary
    intervals.sort((a, b) => {
      if (a.low === null) return -1;
      if (b.low === null) return 1;
      return compareValues(a.low, b.low);
    });

    const result: CqlInterval<CqlComparable>[] = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      const last = result[result.length - 1];
      const cur = intervals[i];
      const overlaps = last.overlaps(cur);
      let meets = false;
      if (last.high !== null && cur.low !== null) {
        meets = last.high.equals(cur.low);
        // Integer successor check
        if (
          !meets &&
          last.high instanceof CqlInteger &&
          cur.low instanceof CqlInteger
        ) {
          meets = last.high.value + 1 === cur.low.value;
        }
      }
      if (overlaps || meets) {
        // Merge: take max high
        let newHigh = last.high;
        let newHighClosed = last.highClosed;
        if (cur.high !== null && last.high !== null) {
          const cmp = compareValues(cur.high, last.high);
          if (cmp > 0) {
            newHigh = cur.high;
            newHighClosed = cur.highClosed;
          }
        }
        result[result.length - 1] = new CqlInterval(
          last.low,
          newHigh,
          last.lowClosed,
          newHighClosed,
        );
      } else {
        result.push(cur);
      }
    }

    return new CqlList(result);
  });
}
