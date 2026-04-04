/**
 * CQL interval functions.
 *
 * Ported from Go: funcs/interval.go, funcs/interval_set.go
 */

import { Decimal } from 'decimal.js';
import type { CqlComparable, CqlValue } from '../types/index.js';
import {
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlDecimal,
  CqlInteger,
  CqlQuantity,
  CqlTime,
  DatePrecision,
  DateTimePrecision,
  TimePrecision,
} from '../types/index.js';
import { CqlInterval, CqlList } from '../types/index.js';
import { asInteger, asInterval, numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

function pad(n: number, w: number): string {
  return String(n).padStart(w, '0');
}

function getQuantityUnit(per: CqlValue | null): string {
  if (per instanceof CqlQuantity) return per.unit.toLowerCase().replace(/s$/, '');
  return 'day';
}

function getQuantityValue(per: CqlValue | null): number {
  if (per instanceof CqlQuantity) return per.value.toNumber();
  if (per instanceof CqlInteger) return per.value;
  return 1;
}

function expandDateInterval(
  low: CqlDate, high: CqlDate,
  lowClosed: boolean, highClosed: boolean,
  per: CqlValue | null,
): CqlList {
  const unit = per ? getQuantityUnit(per) : 'day';
  const step = per ? getQuantityValue(per) : 1;
  if (step <= 0) return new CqlList([]);

  const result: CqlValue[] = [];
  let d = new Date(Date.UTC(low.year, (low.month || 1) - 1, low.day || 1));
  if (!lowClosed) addDateUnit(d, unit, step);
  const endD = new Date(Date.UTC(high.year, (high.month || 1) - 1, high.day || 1));
  if (!highClosed) endD.setUTCDate(endD.getUTCDate() - 1);
  const MAX = 10000;
  while (d <= endD && result.length < MAX) {
    result.push(new CqlDate(`${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}`));
    addDateUnit(d, unit, step);
  }
  return new CqlList(result);
}

function expandDateTimeInterval(
  low: CqlDateTime, high: CqlDateTime,
  lowClosed: boolean, highClosed: boolean,
  per: CqlValue | null,
): CqlList {
  const unit = per ? getQuantityUnit(per) : 'day';
  const step = per ? getQuantityValue(per) : 1;
  if (step <= 0) return new CqlList([]);

  const result: CqlValue[] = [];
  let d = new Date(Date.UTC(low.year, (low.month || 1) - 1, low.day || 1,
    low.hour, low.minute, low.second, low.millis));
  if (!lowClosed) addDateUnit(d, unit, step);
  const endD = new Date(Date.UTC(high.year, (high.month || 1) - 1, high.day || 1,
    high.hour, high.minute, high.second, high.millis));
  const MAX = 10000;
  while (d <= endD && result.length < MAX) {
    const s = `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}T${pad(d.getUTCHours(), 2)}:${pad(d.getUTCMinutes(), 2)}:${pad(d.getUTCSeconds(), 2)}.${pad(d.getUTCMilliseconds(), 3)}`;
    result.push(new CqlDateTime(s));
    addDateUnit(d, unit, step);
  }
  return new CqlList(result);
}

function expandTimeInterval(
  low: CqlTime, high: CqlTime,
  lowClosed: boolean, highClosed: boolean,
  per: CqlValue | null,
): CqlList {
  const unit = per ? getQuantityUnit(per) : 'hour';
  const step = per ? getQuantityValue(per) : 1;
  if (step <= 0) return new CqlList([]);

  const result: CqlValue[] = [];
  let totalMs = low.hour * 3600000 + low.minute * 60000 + low.second * 1000 + low.millis;
  if (!lowClosed) totalMs += stepToMs(unit, step);
  const endMs = high.hour * 3600000 + high.minute * 60000 + high.second * 1000 + high.millis;
  const MAX = 10000;
  while (totalMs <= endMs && result.length < MAX) {
    const h = Math.floor(totalMs / 3600000);
    const m = Math.floor((totalMs % 3600000) / 60000);
    const s = Math.floor((totalMs % 60000) / 1000);
    const ms = totalMs % 1000;
    let str = pad(h, 2);
    if (low.precision >= TimePrecision.Minute) str += `:${pad(m, 2)}`;
    if (low.precision >= TimePrecision.Second) str += `:${pad(s, 2)}`;
    if (low.precision >= TimePrecision.Millisecond) str += `.${pad(ms, 3)}`;
    result.push(new CqlTime(str));
    totalMs += stepToMs(unit, step);
  }
  return new CqlList(result);
}

function addDateUnit(d: Date, unit: string, step: number): void {
  switch (unit) {
    case 'year': d.setUTCFullYear(d.getUTCFullYear() + step); break;
    case 'month': d.setUTCMonth(d.getUTCMonth() + step); break;
    case 'week': d.setUTCDate(d.getUTCDate() + step * 7); break;
    case 'day': d.setUTCDate(d.getUTCDate() + step); break;
    case 'hour': d.setUTCHours(d.getUTCHours() + step); break;
    case 'minute': d.setUTCMinutes(d.getUTCMinutes() + step); break;
    case 'second': d.setUTCSeconds(d.getUTCSeconds() + step); break;
    case 'millisecond': d.setUTCMilliseconds(d.getUTCMilliseconds() + step); break;
  }
}

function stepToMs(unit: string, step: number): number {
  switch (unit) {
    case 'hour': return step * 3600000;
    case 'minute': return step * 60000;
    case 'second': return step * 1000;
    case 'millisecond': return step;
    default: return step * 3600000;
  }
}

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

  // Width(interval) -> integer|decimal|quantity
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

    // Quantity intervals
    if (iv.low instanceof CqlQuantity && iv.high instanceof CqlQuantity) {
      return new CqlQuantity(iv.high.value.minus(iv.low.value), iv.low.unit);
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

    // Integer intervals
    if (iv.low instanceof CqlInteger && iv.high instanceof CqlInteger) {
      let perVal: number | null = null;
      if (args[1] != null) {
        if (args[1] instanceof CqlQuantity) perVal = args[1].value.toNumber();
        else perVal = asInteger(args[1]);
      }
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

    // Decimal intervals
    if ((iv.low instanceof CqlDecimal || iv.low instanceof CqlInteger) &&
        (iv.high instanceof CqlDecimal || iv.high instanceof CqlInteger)) {
      const lo = numericVal(iv.low);
      const hi = numericVal(iv.high);
      let step = new Decimal(1);
      if (args[1] != null) {
        if (args[1] instanceof CqlQuantity) step = args[1].value;
        else step = numericVal(args[1]);
      } else if (args[1] === null || args[1] === undefined) {
        // Default step: use successor distance (1e-8) for decimals, 1 for integers
        step = new Decimal(1);
      }
      if (step.lte(0)) return new CqlList([]);
      const result: CqlValue[] = [];
      let current = iv.lowClosed ? lo : lo.plus(step);
      const limit = iv.highClosed ? hi : hi.minus(new Decimal('1e-8'));
      const MAX = 10000;
      while (current.lte(limit) && result.length < MAX) {
        result.push(new CqlDecimal(current));
        current = current.plus(step);
      }
      return new CqlList(result);
    }

    // Date intervals
    if (iv.low instanceof CqlDate && iv.high instanceof CqlDate) {
      return expandDateInterval(iv.low, iv.high, iv.lowClosed, iv.highClosed, args[1] ?? null);
    }

    // DateTime intervals
    if (iv.low instanceof CqlDateTime && iv.high instanceof CqlDateTime) {
      return expandDateTimeInterval(iv.low, iv.high, iv.lowClosed, iv.highClosed, args[1] ?? null);
    }

    // Time intervals
    if (iv.low instanceof CqlTime && iv.high instanceof CqlTime) {
      return expandTimeInterval(iv.low, iv.high, iv.lowClosed, iv.highClosed, args[1] ?? null);
    }

    return new CqlList([]);
  });

  // Collapse(list_of_intervals) -> list_of_intervals
  registry.register('Collapse', (args) => {
    const list = args[0];
    if (list === null || !(list instanceof CqlList)) return null;
    const intervals: CqlInterval<CqlComparable>[] = [];
    for (const item of list.values) {
      if (item === null) continue;
      if (item instanceof CqlInterval) {
        // Skip null-null intervals
        if (item.low === null && item.high === null) continue;
        intervals.push(item as CqlInterval<CqlComparable>);
      }
    }
    if (intervals.length === 0) return new CqlList([]);

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
        // Successor-based adjacency check
        if (!meets) {
          if (last.high instanceof CqlInteger && cur.low instanceof CqlInteger) {
            meets = last.high.value + 1 === cur.low.value;
          } else if (last.high instanceof CqlDecimal && cur.low instanceof CqlDecimal) {
            const suc = last.high.value.plus(new Decimal('1e-8'));
            meets = suc.equals(cur.low.value);
          } else if (last.high instanceof CqlDateTime && cur.low instanceof CqlDateTime) {
            // DateTime successor: add 1ms
            const d = new Date(Date.UTC(
              last.high.year, (last.high.month || 1) - 1, last.high.day || 1,
              last.high.hour, last.high.minute, last.high.second, last.high.millis));
            d.setUTCMilliseconds(d.getUTCMilliseconds() + 1);
            const sucDt = new CqlDateTime(
              `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}T${pad(d.getUTCHours(), 2)}:${pad(d.getUTCMinutes(), 2)}:${pad(d.getUTCSeconds(), 2)}.${pad(d.getUTCMilliseconds(), 3)}`);
            meets = sucDt.equals(cur.low);
          } else if (last.high instanceof CqlTime && cur.low instanceof CqlTime) {
            let totalMs = last.high.hour * 3600000 + last.high.minute * 60000 + last.high.second * 1000 + last.high.millis;
            totalMs += 1;
            const h = Math.floor(totalMs / 3600000);
            const m = Math.floor((totalMs % 3600000) / 60000);
            const s = Math.floor((totalMs % 60000) / 1000);
            const ms = totalMs % 1000;
            const sucTime = new CqlTime(`${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}.${pad(ms, 3)}`);
            meets = sucTime.equals(cur.low);
          }
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
