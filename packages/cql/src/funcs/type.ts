/**
 * CQL type conversion functions.
 *
 * Ported from Go: funcs/type_ops.go
 */

import {
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlDecimal,
  CqlInteger,
  CqlQuantity,
  CqlString,
} from '../types/index.js';
import type { CqlValue } from '../types/index.js';
import type { FunctionRegistry } from './registry.js';

export function registerTypeFunctions(registry: FunctionRegistry): void {
  // ToString(value) -> string
  // CQL spec: Quantity toString uses escaped quotes: "125 'cm'"
  registry.register('ToString', (args) => {
    if (args[0] === null) return null;
    if (args[0] instanceof CqlQuantity) {
      const q = args[0];
      if (q.unit === '' || q.unit === '1') return new CqlString(q.value.toString());
      return new CqlString(`${q.value.toString()} '${q.unit}'`);
    }
    return new CqlString(args[0].toString());
  });

  // ToInteger(value) -> integer
  registry.register('ToInteger', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlInteger) return v;
    if (v instanceof CqlString) {
      const n = parseInt(v.value, 10);
      if (isNaN(n)) return null;
      return new CqlInteger(n);
    }
    if (v instanceof CqlBoolean) {
      return new CqlInteger(v.value ? 1 : 0);
    }
    if (v instanceof CqlDecimal) {
      return new CqlInteger(Math.trunc(v.value.toNumber()));
    }
    return null;
  });

  // ToDecimal(value) -> decimal
  registry.register('ToDecimal', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlDecimal) return v;
    if (v instanceof CqlInteger) return CqlDecimal.of(v.value);
    if (v instanceof CqlString) {
      try {
        return CqlDecimal.of(v.value);
      } catch {
        return null;
      }
    }
    return null;
  });

  // ToBoolean(value) -> boolean
  registry.register('ToBoolean', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlBoolean) return v;
    if (v instanceof CqlString) {
      const s = v.value.toLowerCase();
      switch (s) {
        case 'true':
        case 't':
        case 'yes':
        case 'y':
        case '1':
        case '1.0':
          return CqlBoolean.TRUE;
        case 'false':
        case 'f':
        case 'no':
        case 'n':
        case '0':
        case '0.0':
          return CqlBoolean.FALSE;
        default:
          return null;
      }
    }
    if (v instanceof CqlInteger) {
      return CqlBoolean.of(v.value !== 0);
    }
    if (v instanceof CqlDecimal) {
      return CqlBoolean.of(!v.value.isZero());
    }
    return null;
  });

  // ToDate(value) -> Date
  registry.register('ToDate', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlDate) return v;
    if (v instanceof CqlDateTime) {
      // Extract date part
      const s = v.toString();
      const idx = s.indexOf('T');
      const datePart = idx >= 0 ? s.slice(0, idx) : s;
      return new CqlDate(datePart);
    }
    if (v instanceof CqlString) {
      try {
        return new CqlDate(v.value);
      } catch {
        return null;
      }
    }
    return null;
  });

  // ToDateTime(value) -> DateTime
  registry.register('ToDateTime', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlDateTime) return v;
    if (v instanceof CqlDate) {
      // Preserve date precision: @2014-01-01 -> @2014-01-01T (no time components)
      return new CqlDateTime(v.toString());
    }
    if (v instanceof CqlString) {
      try {
        return new CqlDateTime(v.value);
      } catch {
        return null;
      }
    }
    return null;
  });
}
