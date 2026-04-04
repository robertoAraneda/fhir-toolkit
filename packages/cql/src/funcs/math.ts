/**
 * CQL math and utility functions.
 *
 * Power, Round, Floor, Ceiling, Truncate, Log, Ln, Exp, Abs,
 * Concatenate, Precision, LowBoundary, HighBoundary, Indexer,
 * ToTime, Message.
 */

import { Decimal } from 'decimal.js';
import type { CqlValue } from '../types/index.js';
import {
  CqlDate,
  CqlDateTime,
  CqlDecimal,
  CqlInteger,
  CqlLong,
  CqlQuantity,
  CqlString,
  CqlTime,
  DatePrecision,
  DateTimePrecision,
  TimePrecision,
} from '../types/primitives.js';
import { CqlList } from '../types/complex.js';
import { numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

function pad(n: number, w: number): string {
  return String(n).padStart(w, '0');
}

export function registerMathFunctions(registry: FunctionRegistry): void {
  // Power(base, exp) -> Integer|Long|Decimal (preserves input type)
  registry.register('Power', (args) => {
    const base = args[0];
    const exp = args[1];
    if (base === null || exp === null) return null;
    const b = numericVal(base);
    const e = numericVal(exp);
    const result = b.pow(e);
    // Preserve type: if both args are Long, return Long
    if (base instanceof CqlLong) {
      try { return new CqlLong(BigInt(result.toFixed(0))); } catch { /* fall through */ }
    }
    // If both args are Integer, return Integer
    if (base instanceof CqlInteger && exp instanceof CqlInteger) {
      return new CqlInteger(result.toNumber());
    }
    return new CqlDecimal(result);
  });

  // Round(value, precision?) -> Decimal
  registry.register('Round', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    const prec = args[1] != null ? numericVal(args[1]).toNumber() : 0;
    return new CqlDecimal(d.toDecimalPlaces(prec, Decimal.ROUND_HALF_CEIL));
  });

  // Floor(value) -> Integer
  registry.register('Floor', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    return new CqlInteger(d.floor().toNumber());
  });

  // Ceiling(value) -> Integer
  registry.register('Ceiling', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    return new CqlInteger(d.ceil().toNumber());
  });

  // Truncate(value) -> Integer
  registry.register('Truncate', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    return new CqlInteger(d.trunc().toNumber());
  });

  // Log(value, base) -> Decimal
  registry.register('Log', (args) => {
    const v = args[0];
    const base = args[1];
    if (v === null || base === null) return null;
    const val = numericVal(v);
    const b = numericVal(base);
    if (val.lte(0) || b.lte(0) || b.eq(1)) return null;
    // log_b(x) = ln(x) / ln(b)
    return new CqlDecimal(val.ln().div(b.ln()));
  });

  // Ln(value) -> Decimal
  registry.register('Ln', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    if (d.lte(0)) return null;
    return new CqlDecimal(d.ln());
  });

  // Exp(value) -> Decimal
  registry.register('Exp', (args) => {
    const v = args[0];
    if (v === null) return null;
    const d = numericVal(v);
    return new CqlDecimal(d.exp());
  });

  // Abs(value) -> Integer|Decimal|Long|Quantity
  registry.register('Abs', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlInteger) {
      return new CqlInteger(Math.abs(v.value));
    }
    if (v instanceof CqlLong) {
      const val = v.value < 0n ? -v.value : v.value;
      return new CqlLong(val);
    }
    if (v instanceof CqlQuantity) {
      return new CqlQuantity(v.value.abs(), v.unit);
    }
    if (v instanceof CqlDecimal) {
      return new CqlDecimal(v.value.abs());
    }
    // Fallback for numeric-ish values
    const d = numericVal(v);
    return new CqlDecimal(d.abs());
  });

  // Concatenate(args...) -> String
  registry.register('Concatenate', (args) => {
    const parts: string[] = [];
    for (const a of args) {
      if (a === null) return null; // CQL spec: null propagates
      parts.push(a.toString());
    }
    return new CqlString(parts.join(''));
  });

  // Precision(value) -> Integer
  // For Decimal: number of digits after the decimal point.
  // For Date/DateTime/Time: total number of digit characters in the representation.
  registry.register('Precision', (args) => {
    const v = args[0];
    if (v === null) return null;

    if (v instanceof CqlDecimal) {
      return new CqlInteger(v.originalPrecision);
    }

    if (v instanceof CqlDate || v instanceof CqlDateTime || v instanceof CqlTime) {
      // Count all digit characters in the raw representation
      const raw = v.raw ?? v.toString();
      let count = 0;
      for (const ch of raw) {
        if (ch >= '0' && ch <= '9') count++;
      }
      return new CqlInteger(count);
    }

    return null;
  });

  // LowBoundary(value, precision?) -> Date|DateTime|Time|Decimal
  // precision = target number of digit characters in the result
  registry.register('LowBoundary', (args) => {
    const v = args[0];
    if (v === null) return null;
    const targetPrec = args[1] instanceof CqlInteger ? args[1].value : null;

    if (v instanceof CqlDecimal) {
      // For Decimal: pad with 0s to reach the target precision (decimal places)
      if (targetPrec === null) return v;
      const s = v.value.toFixed();
      const dotIdx = s.indexOf('.');
      const currentPrec = dotIdx >= 0 ? s.length - dotIdx - 1 : 0;
      if (targetPrec <= currentPrec) return v;
      // Pad with 0s
      const base = dotIdx >= 0 ? s : s + '.';
      const padded = base + '0'.repeat(targetPrec - currentPrec);
      return new CqlDecimal(new Decimal(padded));
    }

    if (v instanceof CqlDate) {
      // Digit counts: year=4, month=6, day=8
      const y = pad(v.year, 4);
      if (targetPrec !== null && targetPrec <= 4) return new CqlDate(y);
      const m = v.month || 1;
      if (targetPrec !== null && targetPrec <= 6) return new CqlDate(`${y}-${pad(m, 2)}`);
      const d = v.day || 1;
      return new CqlDate(`${y}-${pad(m, 2)}-${pad(d, 2)}`);
    }

    if (v instanceof CqlDateTime) {
      const y = pad(v.year, 4);
      const m = v.month || 1;
      const d = v.day || 1;
      const h = v.hour || 0;
      const mn = v.minute || 0;
      const s = v.second || 0;
      const ms = v.millis || 0;

      // Build based on target precision (digit count)
      // year=4, month=6, day=8, hour=10, minute=12, second=14, ms=17
      function buildDT(prec: number | null): string {
        if (prec !== null && prec <= 4) return y;
        const mStr = `${y}-${pad(m, 2)}`;
        if (prec !== null && prec <= 6) return mStr;
        const dStr = `${mStr}-${pad(d, 2)}`;
        if (prec !== null && prec <= 8) return dStr;
        const hStr = `${dStr}T${pad(h, 2)}`;
        if (prec !== null && prec <= 10) return `${hStr}:${pad(mn, 2)}:${pad(s, 2)}.${pad(ms, 3)}`;
        return `${dStr}T${pad(h, 2)}:${pad(mn, 2)}:${pad(s, 2)}.${pad(ms, 3)}`;
      }

      let str = buildDT(targetPrec);
      if (v.hasTZ && str.includes('T')) {
        if (v.tzOffset === 0) {
          str += 'Z';
        } else {
          const sign = v.tzOffset >= 0 ? '+' : '-';
          const absOff = Math.abs(v.tzOffset);
          str += `${sign}${pad(Math.floor(absOff / 60), 2)}:${pad(absOff % 60, 2)}`;
        }
      }
      // If precision limits to date-only, return CqlDate
      if (targetPrec !== null && targetPrec <= 8 && !str.includes('T')) {
        return new CqlDate(str);
      }
      if (str.includes('T')) return new CqlDateTime(str);
      return new CqlDate(str);
    }

    if (v instanceof CqlTime) {
      const h = v.hour;
      const mn = v.minute || 0;
      const s = v.second || 0;
      const ms = v.millis || 0;
      return new CqlTime(`${pad(h, 2)}:${pad(mn, 2)}:${pad(s, 2)}.${pad(ms, 3)}`);
    }

    return null;
  });

  // HighBoundary(value, precision?) -> Date|DateTime|Time|Decimal
  registry.register('HighBoundary', (args) => {
    const v = args[0];
    if (v === null) return null;
    const targetPrec = args[1] instanceof CqlInteger ? args[1].value : null;

    if (v instanceof CqlDecimal) {
      // For Decimal: pad with 9s to reach the target precision (decimal places)
      if (targetPrec === null) return v;
      const s = v.value.toFixed();
      const dotIdx = s.indexOf('.');
      const currentPrec = dotIdx >= 0 ? s.length - dotIdx - 1 : 0;
      if (targetPrec <= currentPrec) return v;
      const base = dotIdx >= 0 ? s : s + '.';
      const padded = base + '9'.repeat(targetPrec - currentPrec);
      return new CqlDecimal(new Decimal(padded));
    }

    if (v instanceof CqlDate) {
      const y = v.year;
      // Digit counts: year=4, month=6, day=8
      if (targetPrec !== null && targetPrec <= 4) return new CqlDate(pad(y, 4));
      const m = v.month || 12;
      if (targetPrec !== null && targetPrec <= 6) return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}`);
      const d = v.day || new Date(Date.UTC(y, m, 0)).getUTCDate();
      return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}`);
    }

    if (v instanceof CqlDateTime) {
      const y = v.year;
      const m = v.month || 12;
      const d = v.day || new Date(Date.UTC(y, m, 0)).getUTCDate();
      const h = v.precision >= DateTimePrecision.Hour ? v.hour : 23;
      const mn = v.precision >= DateTimePrecision.Minute ? v.minute : 59;
      const s = v.precision >= DateTimePrecision.Second ? v.second : 59;
      const ms = v.precision >= DateTimePrecision.Millisecond ? v.millis : 999;

      // Build based on target precision (digit count)
      if (targetPrec !== null && targetPrec <= 4) return new CqlDate(pad(y, 4));
      if (targetPrec !== null && targetPrec <= 6) return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}`);
      if (targetPrec !== null && targetPrec <= 8) return new CqlDate(`${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}`);

      let str = `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}T${pad(h, 2)}:${pad(mn, 2)}:${pad(s, 2)}.${pad(ms, 3)}`;
      if (v.hasTZ) {
        if (v.tzOffset === 0) {
          str += 'Z';
        } else {
          const sign = v.tzOffset >= 0 ? '+' : '-';
          const absOff = Math.abs(v.tzOffset);
          str += `${sign}${pad(Math.floor(absOff / 60), 2)}:${pad(absOff % 60, 2)}`;
        }
      }
      return new CqlDateTime(str);
    }

    if (v instanceof CqlTime) {
      const h = v.hour;
      const mn = v.precision >= TimePrecision.Minute ? v.minute : 59;
      const s = v.precision >= TimePrecision.Second ? v.second : 59;
      const ms = v.precision >= TimePrecision.Millisecond ? v.millis : 999;
      return new CqlTime(`${pad(h, 2)}:${pad(mn, 2)}:${pad(s, 2)}.${pad(ms, 3)}`);
    }

    return null;
  });

  // Indexer(list, index) -> value  (0-based)
  registry.register('Indexer', (args) => {
    const source = args[0];
    const idx = args[1];
    if (source === null || idx === null) return null;

    // String indexer
    if (source instanceof CqlString) {
      if (idx instanceof CqlInteger) {
        const i = idx.value;
        if (i < 0 || i >= source.value.length) return null;
        return new CqlString(source.value[i]);
      }
      return null;
    }

    // List indexer
    if (source instanceof CqlList) {
      if (idx instanceof CqlInteger) {
        const i = idx.value;
        if (i < 0 || i >= source.values.length) return null;
        return source.values[i];
      }
      return null;
    }

    return null;
  });

  // ToTime(value) -> Time
  registry.register('ToTime', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlTime) return v;
    if (v instanceof CqlDateTime) {
      return new CqlTime(
        `${pad(v.hour, 2)}:${pad(v.minute, 2)}:${pad(v.second, 2)}.${pad(v.millis, 3)}`,
      );
    }
    if (v instanceof CqlString) {
      try {
        // Strip leading 'T' if present (CQL time literals use @T prefix)
        let s = v.value.startsWith('T') ? v.value.slice(1) : v.value;
        // Strip timezone offset (Z, +HH:MM, -HH:MM) -- CQL Time has no TZ
        s = s.replace(/([Zz]|[+-]\d{2}:\d{2})$/, '');
        return new CqlTime(s);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Message(source, condition, code, severity, message) -> source
  // CQL spec: returns the first argument (for debugging/tracing)
  registry.register('Message', (args) => {
    return args[0] ?? null;
  });
}
