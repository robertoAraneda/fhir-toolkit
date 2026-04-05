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

/**
 * Compute successor of a CqlComparable value, respecting precision.
 */
function successor(val: CqlComparable): CqlComparable | null {
  if (val instanceof CqlInteger) return new CqlInteger(val.value + 1);
  if (val instanceof CqlDecimal) return new CqlDecimal(val.value.plus(new Decimal('1e-8')));
  if (val instanceof CqlDate) {
    const amt = 1;
    let yr = val.year;
    let mo = (val.month || 1) - 1;
    let dy = val.day || 1;
    switch (val.precision) {
      case DatePrecision.Year: yr += amt; break;
      case DatePrecision.Month: { const t = yr*12+mo+amt; yr = Math.floor(t/12); mo = ((t%12)+12)%12; break; }
      default: { const d = new Date(Date.UTC(yr, mo, dy)); d.setUTCDate(d.getUTCDate()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); break; }
    }
    let s = pad(yr, 4);
    if (val.precision >= DatePrecision.Month) s += `-${pad(mo + 1, 2)}`;
    if (val.precision >= DatePrecision.Day) s += `-${pad(dy, 2)}`;
    return new CqlDate(s);
  }
  if (val instanceof CqlDateTime) {
    const amt = 1;
    let yr = val.year;
    let mo = (val.month || 1) - 1;
    let dy = val.day || 1;
    let hr = val.hour;
    let mi = val.minute;
    let se = val.second;
    let ms = val.millis;
    switch (val.precision) {
      case DateTimePrecision.Year: yr += amt; break;
      case DateTimePrecision.Month: { const t = yr*12+mo+amt; yr = Math.floor(t/12); mo = ((t%12)+12)%12; break; }
      case DateTimePrecision.Day: { const d = new Date(Date.UTC(yr, mo, dy)); d.setUTCDate(d.getUTCDate()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); break; }
      case DateTimePrecision.Hour: { const d = new Date(Date.UTC(yr, mo, dy, hr)); d.setUTCHours(d.getUTCHours()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); break; }
      case DateTimePrecision.Minute: { const d = new Date(Date.UTC(yr, mo, dy, hr, mi)); d.setUTCMinutes(d.getUTCMinutes()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); break; }
      case DateTimePrecision.Second: { const d = new Date(Date.UTC(yr, mo, dy, hr, mi, se)); d.setUTCSeconds(d.getUTCSeconds()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); se=d.getUTCSeconds(); break; }
      default: { const d = new Date(Date.UTC(yr, mo, dy, hr, mi, se, ms)); d.setUTCMilliseconds(d.getUTCMilliseconds()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); se=d.getUTCSeconds(); ms=d.getUTCMilliseconds(); break; }
    }
    let s = pad(yr, 4);
    if (val.precision >= DateTimePrecision.Month) s += `-${pad(mo + 1, 2)}`;
    if (val.precision >= DateTimePrecision.Day) s += `-${pad(dy, 2)}`;
    if (val.precision >= DateTimePrecision.Hour) s += `T${pad(hr, 2)}`;
    if (val.precision >= DateTimePrecision.Minute) s += `:${pad(mi, 2)}`;
    if (val.precision >= DateTimePrecision.Second) s += `:${pad(se, 2)}`;
    if (val.precision >= DateTimePrecision.Millisecond) s += `.${pad(ms, 3)}`;
    return new CqlDateTime(s);
  }
  if (val instanceof CqlTime) {
    let totalMs = val.hour * 3600000 + val.minute * 60000 + val.second * 1000 + val.millis;
    switch (val.precision) {
      case TimePrecision.Hour: totalMs += 3600000; break;
      case TimePrecision.Minute: totalMs += 60000; break;
      case TimePrecision.Second: totalMs += 1000; break;
      default: totalMs += 1; break;
    }
    const h = Math.floor(totalMs / 3600000);
    const m = Math.floor((totalMs % 3600000) / 60000);
    const s = Math.floor((totalMs % 60000) / 1000);
    const ms = totalMs % 1000;
    let str = pad(h, 2);
    if (val.precision >= TimePrecision.Minute) str += `:${pad(m, 2)}`;
    if (val.precision >= TimePrecision.Second) str += `:${pad(s, 2)}`;
    if (val.precision >= TimePrecision.Millisecond) str += `.${pad(ms, 3)}`;
    return new CqlTime(str);
  }
  return null;
}

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

  // Determine output precision from unit
  const outputPrecision = unit === 'year' ? DatePrecision.Year
    : unit === 'month' ? DatePrecision.Month
    : DatePrecision.Day;

  const result: CqlValue[] = [];
  let d = new Date(Date.UTC(low.year, (low.month || 1) - 1, low.day || 1));
  if (!lowClosed) addDateUnit(d, unit, step);
  const endD = new Date(Date.UTC(high.year, (high.month || 1) - 1, high.day || 1));
  if (!highClosed) endD.setUTCDate(endD.getUTCDate() - 1);
  const MAX = 10000;
  while (d <= endD && result.length < MAX) {
    let dateStr: string;
    if (outputPrecision === DatePrecision.Year) {
      dateStr = pad(d.getUTCFullYear(), 4);
    } else if (outputPrecision === DatePrecision.Month) {
      dateStr = `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}`;
    } else {
      dateStr = `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}`;
    }
    result.push(new CqlDate(dateStr));
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

  // Determine output precision based on the unit
  const unitPrec = unit === 'hour' ? TimePrecision.Hour
    : unit === 'minute' ? TimePrecision.Minute
    : unit === 'second' ? TimePrecision.Second
    : TimePrecision.Millisecond;

  // If the per unit is finer than the input precision, result is empty
  // e.g., expand Interval[@T10, @T10] per minute — @T10 is hour-precision
  if (unitPrec > low.precision) return new CqlList([]);

  const result: CqlValue[] = [];
  let totalMs = low.hour * 3600000 + low.minute * 60000 + low.second * 1000 + low.millis;
  if (!lowClosed) totalMs += stepToMs(unit, step);
  let endMs = high.hour * 3600000 + high.minute * 60000 + high.second * 1000 + high.millis;
  if (!highClosed) endMs -= 1; // Subtract 1ms for open upper bound
  const MAX = 10000;
  while (totalMs <= endMs && result.length < MAX) {
    const h = Math.floor(totalMs / 3600000);
    const m = Math.floor((totalMs % 3600000) / 60000);
    const s = Math.floor((totalMs % 60000) / 1000);
    const ms = totalMs % 1000;
    // Build string at the unit precision level
    let str = pad(h, 2);
    if (unitPrec >= TimePrecision.Minute) str += `:${pad(m, 2)}`;
    if (unitPrec >= TimePrecision.Second) str += `:${pad(s, 2)}`;
    if (unitPrec >= TimePrecision.Millisecond) str += `.${pad(ms, 3)}`;
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
      // Check if per is a decimal step (e.g., per 0.1) — if so, use decimal expand
      const perArg = args[1];
      if (perArg instanceof CqlDecimal || perArg instanceof CqlQuantity) {
        const step = perArg instanceof CqlQuantity ? perArg.value : perArg.value;
        if (!step.isInteger()) {
          // Decimal step on integer interval: expand as decimals
          // Integer interval [10, 10] with per 0.1 expands to [10.0, 10.1, ..., 10.9]
          // because integer 10 covers the range [10.0, 10.9999...] in decimal space
          let lo = new Decimal(iv.low.value);
          let hi = new Decimal(iv.high.value).plus(1).minus(step);
          if (!iv.lowClosed) lo = lo.plus(step);
          if (!iv.highClosed) hi = new Decimal(iv.high.value).minus(step);
          if (step.lte(0)) return new CqlList([]);
          const result: CqlValue[] = [];
          let current = lo;
          const MAX = 10000;
          // Determine decimal places from step
          const stepStr = step.toFixed();
          const dotIdx = stepStr.indexOf('.');
          const dp = dotIdx >= 0 ? stepStr.length - dotIdx - 1 : 0;
          while (current.lte(hi) && result.length < MAX) {
            result.push(new CqlDecimal(current.toDecimalPlaces(dp)));
            current = current.plus(step);
          }
          return new CqlList(result);
        }
      }

      let perVal: number | null = null;
      if (perArg != null) {
        if (perArg instanceof CqlQuantity) perVal = perArg.value.toNumber();
        else if (perArg instanceof CqlDecimal) perVal = perArg.value.toNumber();
        else perVal = asInteger(perArg);
      }
      const step = perVal !== null && perVal > 0 ? perVal : 1;
      let lo = iv.low.value;
      let hi = iv.high.value;
      if (!iv.lowClosed) lo++;
      if (!iv.highClosed) hi--;
      // For step > 1 with open bounds, ensure entire step-sized span fits
      // For closed intervals, allow partial span at the end
      const effectiveHi = (step > 1 && !iv.highClosed) ? hi - step + 1 : hi;
      const result: CqlValue[] = [];
      for (let v = lo; v <= effectiveHi; v += step) {
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
      }
      if (step.lte(0)) return new CqlList([]);

      // When step is integer (1), produce CqlInteger results if they make sense
      const stepIsInt = step.isInteger() && step.eq(1);
      const result: CqlValue[] = [];
      let current = iv.lowClosed ? lo : lo.plus(step);
      const limit = iv.highClosed ? hi : hi.minus(new Decimal('1e-8'));
      const MAX = 10000;

      // Determine decimal places for output
      const stepStr = step.toFixed();
      const dotIdx = stepStr.indexOf('.');
      const dp = dotIdx >= 0 ? stepStr.length - dotIdx - 1 : 0;

      while (current.lte(limit) && result.length < MAX) {
        if (stepIsInt && current.isInteger()) {
          result.push(new CqlInteger(current.toNumber()));
        } else {
          result.push(new CqlDecimal(dp > 0 ? current.toDecimalPlaces(dp) : current));
        }
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
        // Successor-based adjacency check (precision-aware)
        if (!meets && last.high !== null) {
          const suc = successor(last.high);
          if (suc !== null) {
            try {
              meets = suc.equals(cur.low!);
            } catch { /* ignore precision mismatch */ }
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
