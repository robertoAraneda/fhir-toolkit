/**
 * CQL datetime functions.
 *
 * Ported from Go: funcs/datetime_advanced.go, funcs/temporal.go
 */

import {
  CqlDate,
  CqlDateTime,
  CqlInteger,
  CqlString,
  CqlTime,
} from '../types/index.js';
import { asInteger, asString, toDate } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function pad(n: number, w: number): string {
  return String(n).padStart(w, '0');
}

function yearsBetween(low: Date, high: Date): number {
  let years = high.getUTCFullYear() - low.getUTCFullYear();
  const lowDOY = dayOfYear(low);
  const highDOY = dayOfYear(high);
  if (highDOY < lowDOY) years--;
  return years;
}

function monthsBetween(low: Date, high: Date): number {
  let months =
    (high.getUTCFullYear() - low.getUTCFullYear()) * 12 +
    high.getUTCMonth() -
    low.getUTCMonth();
  if (high.getUTCDate() < low.getUTCDate()) months--;
  return months;
}

function daysBetween(low: Date, high: Date): number {
  return Math.floor((high.getTime() - low.getTime()) / (1000 * 60 * 60 * 24));
}

function hoursBetween(low: Date, high: Date): number {
  return Math.floor((high.getTime() - low.getTime()) / (1000 * 60 * 60));
}

function minutesBetween(low: Date, high: Date): number {
  return Math.floor((high.getTime() - low.getTime()) / (1000 * 60));
}

function secondsBetween(low: Date, high: Date): number {
  return Math.floor((high.getTime() - low.getTime()) / 1000);
}

function millisecondsBetween(low: Date, high: Date): number {
  return high.getTime() - low.getTime();
}

function dayOfYear(d: Date): number {
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  return Math.floor((d.getTime() - start) / (1000 * 60 * 60 * 24)) + 1;
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

export function registerDateTimeFunctions(registry: FunctionRegistry): void {
  // DurationBetween(low, high, precision) -> integer
  registry.register('DurationBetween', (args) => {
    const low = toDate(args[0]);
    const high = toDate(args[1]);
    if (low === null || high === null) return null;
    const precision = asString(args[2]) ?? 'day';
    let result: number;
    switch (precision) {
      case 'year':
      case 'years':
        result = yearsBetween(low, high);
        break;
      case 'month':
      case 'months':
        result = monthsBetween(low, high);
        break;
      case 'week':
      case 'weeks':
        result = Math.trunc(daysBetween(low, high) / 7);
        break;
      case 'day':
      case 'days':
        result = daysBetween(low, high);
        break;
      case 'hour':
      case 'hours':
        result = hoursBetween(low, high);
        break;
      case 'minute':
      case 'minutes':
        result = minutesBetween(low, high);
        break;
      case 'second':
      case 'seconds':
        result = secondsBetween(low, high);
        break;
      case 'millisecond':
      case 'milliseconds':
        result = millisecondsBetween(low, high);
        break;
      default:
        result = daysBetween(low, high);
    }
    return new CqlInteger(result);
  });

  // DifferenceBetween(low, high, precision) -> integer
  // Unlike DurationBetween, DifferenceBetween counts calendar boundaries crossed
  registry.register('DifferenceBetween', (args) => {
    const low = toDate(args[0]);
    const high = toDate(args[1]);
    if (low === null || high === null) return null;
    const precision = asString(args[2]) ?? 'day';
    let result: number;
    switch (precision) {
      case 'year':
      case 'years':
        result = high.getUTCFullYear() - low.getUTCFullYear();
        break;
      case 'month':
      case 'months':
        result = (high.getUTCFullYear() - low.getUTCFullYear()) * 12 +
          high.getUTCMonth() - low.getUTCMonth();
        break;
      case 'week':
      case 'weeks': {
        // Count number of whole weeks in the duration
        const diffMs = high.getTime() - low.getTime();
        result = Math.trunc(diffMs / (7 * 24 * 60 * 60 * 1000));
        break;
      }
      case 'day':
      case 'days': {
        // Difference in days: truncate to dates, then count day boundaries
        const lowDate = Date.UTC(low.getUTCFullYear(), low.getUTCMonth(), low.getUTCDate());
        const highDate = Date.UTC(high.getUTCFullYear(), high.getUTCMonth(), high.getUTCDate());
        result = Math.round((highDate - lowDate) / (24 * 60 * 60 * 1000));
        break;
      }
      case 'hour':
      case 'hours':
        result = Math.trunc((high.getTime() - low.getTime()) / (60 * 60 * 1000));
        break;
      case 'minute':
      case 'minutes':
        result = Math.trunc((high.getTime() - low.getTime()) / (60 * 1000));
        break;
      case 'second':
      case 'seconds':
        result = Math.trunc((high.getTime() - low.getTime()) / 1000);
        break;
      case 'millisecond':
      case 'milliseconds':
        result = high.getTime() - low.getTime();
        break;
      default:
        result = Math.round((high.getTime() - low.getTime()) / (24 * 60 * 60 * 1000));
    }
    return new CqlInteger(result);
  });

  // DateTimeComponentFrom(operand, component) -> value
  registry.register('DateTimeComponentFrom', (args) => {
    if (args[0] === null) return null;
    const d = toDate(args[0]);
    if (d === null) return null;
    const component = asString(args[1]) ?? '';
    switch (component) {
      case 'year':
        return new CqlInteger(d.getUTCFullYear());
      case 'month':
        return new CqlInteger(d.getUTCMonth() + 1);
      case 'day':
        return new CqlInteger(d.getUTCDate());
      case 'hour':
        return new CqlInteger(d.getUTCHours());
      case 'minute':
        return new CqlInteger(d.getUTCMinutes());
      case 'second':
        return new CqlInteger(d.getUTCSeconds());
      case 'millisecond':
        return new CqlInteger(d.getUTCMilliseconds());
      case 'timezone': {
        // Always UTC for our Date objects
        return new CqlString('+00:00');
      }
      case 'date':
        return new CqlDate(
          `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}`,
        );
      case 'time':
        return new CqlTime(
          `${pad(d.getUTCHours(), 2)}:${pad(d.getUTCMinutes(), 2)}:${pad(d.getUTCSeconds(), 2)}.${pad(d.getUTCMilliseconds(), 3)}`,
        );
      default:
        return null;
    }
  });

  // Date(year, month?, day?) -> Date
  registry.register('Date', (args) => {
    const y = asInteger(args[0]);
    if (y === null || y === 0) return null;
    const m = args[1] != null ? asInteger(args[1]) : null;
    const d = args[2] != null ? asInteger(args[2]) : null;
    if (m === null || m === 0) return new CqlDate(pad(y, 4));
    if (d === null || d === 0) return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}`);
    return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}`);
  });

  // DateTime(year, month?, day?, hour?, minute?, second?, millisecond?, tzOffset?) -> DateTime
  registry.register('DateTime', (args) => {
    const y = asInteger(args[0]);
    if (y === null || y === 0) return null;

    // Build string with precision based on which arguments are provided
    let s = pad(y, 4);

    const m = args[1] != null ? asInteger(args[1]) : null;
    if (m === null || m === 0) return new CqlDateTime(s);
    s += `-${pad(m, 2)}`;

    const d = args[2] != null ? asInteger(args[2]) : null;
    if (d === null || d === 0) return new CqlDateTime(s);
    s += `-${pad(d, 2)}`;

    const h = args[3] != null ? asInteger(args[3]) : null;
    if (h === null) return new CqlDateTime(s);
    s += `T${pad(h, 2)}`;

    const mn = args[4] != null ? asInteger(args[4]) : null;
    if (mn === null) return new CqlDateTime(s);
    s += `:${pad(mn, 2)}`;

    const sec = args[5] != null ? asInteger(args[5]) : null;
    if (sec === null) return new CqlDateTime(s);
    s += `:${pad(sec, 2)}`;

    const ms = args[6] != null ? asInteger(args[6]) : null;
    if (ms === null) return new CqlDateTime(s);
    s += `.${pad(ms, 3)}`;

    // Timezone offset: can be a String like "+05:00" or a Decimal like -6.0 (hours)
    if (args[7] != null) {
      const tzStr = asString(args[7]);
      if (tzStr !== null) {
        s += tzStr;
      } else {
        // Numeric timezone offset in hours (e.g., -6.0 = UTC-6)
        const tzNum = args[7];
        if (tzNum && 'value' in tzNum) {
          const hours = typeof tzNum.value === 'object' ? (tzNum.value as any).toNumber() : Number(tzNum.value);
          if (hours === 0) {
            s += 'Z';
          } else {
            const sign = hours < 0 ? '-' : '+';
            const absH = Math.abs(hours);
            const h = Math.floor(absH);
            const m = Math.round((absH - h) * 60);
            s += `${sign}${pad(h, 2)}:${pad(m, 2)}`;
          }
        }
      }
    }

    return new CqlDateTime(s);
  });

  // Time(hour, minute?, second?, millisecond?) -> Time
  registry.register('Time', (args) => {
    const h = asInteger(args[0]) ?? 0;
    const mn = args[1] != null ? asInteger(args[1]) ?? 0 : 0;
    const sec = args[2] != null ? asInteger(args[2]) ?? 0 : 0;
    const ms = args[3] != null ? asInteger(args[3]) ?? 0 : 0;
    return new CqlTime(
      `${pad(h, 2)}:${pad(mn, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`,
    );
  });

  // Now() -> DateTime
  registry.register('Now', () => {
    const now = new Date();
    return new CqlDateTime(now.toISOString().replace(/(\.\d{3})\d*Z/, '$1Z'));
  });

  // Today() -> Date
  registry.register('Today', () => {
    const now = new Date();
    return new CqlDate(
      `${pad(now.getUTCFullYear(), 4)}-${pad(now.getUTCMonth() + 1, 2)}-${pad(now.getUTCDate(), 2)}`,
    );
  });

  // TimeOfDay() -> Time
  registry.register('TimeOfDay', () => {
    const now = new Date();
    return new CqlTime(
      `${pad(now.getUTCHours(), 2)}:${pad(now.getUTCMinutes(), 2)}:${pad(now.getUTCSeconds(), 2)}.${pad(now.getUTCMilliseconds(), 3)}`,
    );
  });
}
