/**
 * CQL string functions.
 *
 * Ported from Go: funcs/string_ops.go
 */

import { CqlBoolean, CqlInteger, CqlNull, CqlString } from '../types/index.js';
import { CqlList } from '../types/index.js';
import { asInteger, asString } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

export function registerStringFunctions(registry: FunctionRegistry): void {
  // Upper(string) -> string
  registry.register('Upper', (args) => {
    const s = asString(args[0]);
    if (s === null) return null;
    return new CqlString(s.toUpperCase());
  });

  // Lower(string) -> string
  registry.register('Lower', (args) => {
    const s = asString(args[0]);
    if (s === null) return null;
    return new CqlString(s.toLowerCase());
  });

  // Length(string|list) -> integer
  registry.register('Length', (args) => {
    const v = args[0];
    if (v === null) return null;
    if (v instanceof CqlString) return new CqlInteger(v.value.length);
    if (v instanceof CqlList) return new CqlInteger(v.values.length);
    const s = asString(v);
    if (s === null) return new CqlInteger(0);
    return new CqlInteger(s.length);
  });

  // StartsWith(string, prefix) -> boolean
  registry.register('StartsWith', (args) => {
    const s = asString(args[0]);
    const prefix = asString(args[1]);
    if (s === null || prefix === null) return null;
    return CqlBoolean.of(s.startsWith(prefix));
  });

  // EndsWith(string, suffix) -> boolean
  registry.register('EndsWith', (args) => {
    const s = asString(args[0]);
    const suffix = asString(args[1]);
    if (s === null || suffix === null) return null;
    return CqlBoolean.of(s.endsWith(suffix));
  });

  // Substring(string, startIndex, length?) -> string
  registry.register('Substring', (args) => {
    const s = asString(args[0]);
    const start = asInteger(args[1]);
    if (s === null || start === null) return null;
    if (start < 0 || start >= s.length) return null;
    const len = args[2] != null ? asInteger(args[2]) : null;
    if (len !== null && len > 0) {
      const end = Math.min(start + len, s.length);
      const result = s.slice(start, end);
      return result.length === 0 ? null : new CqlString(result);
    }
    const result = s.slice(start);
    return result.length === 0 ? null : new CqlString(result);
  });

  // IndexOf(source, element) -> integer  (works for strings and lists)
  registry.register('IndexOf', (args) => {
    const source = args[0];
    const element = args[1];
    if (source === null) return null;
    // String IndexOf
    if (source instanceof CqlString) {
      const sub = asString(element);
      if (sub === null) return null;
      return new CqlInteger(source.value.indexOf(sub));
    }
    // List IndexOf
    if (source instanceof CqlList) {
      if (element === null) return new CqlInteger(-1);
      for (let i = 0; i < source.values.length; i++) {
        const item = source.values[i];
        if (item instanceof CqlNull) continue;
        try {
          if (item.equals(element)) return new CqlInteger(i);
        } catch { /* skip */ }
      }
      return new CqlInteger(-1);
    }
    return null;
  });

  // PositionOf(pattern, string) -> integer
  registry.register('PositionOf', (args) => {
    const pattern = asString(args[0]);
    const s = asString(args[1]);
    if (s === null || pattern === null) return null;
    return new CqlInteger(s.indexOf(pattern));
  });

  // LastPositionOf(pattern, string) -> integer
  registry.register('LastPositionOf', (args) => {
    const pattern = asString(args[0]);
    const s = asString(args[1]);
    if (s === null || pattern === null) return null;
    return new CqlInteger(s.lastIndexOf(pattern));
  });

  // Matches(string, pattern) -> boolean
  registry.register('Matches', (args) => {
    const s = asString(args[0]);
    const pattern = asString(args[1]);
    if (s === null || pattern === null) return null;
    try {
      const re = new RegExp(`^(?:${pattern})$`);
      return CqlBoolean.of(re.test(s));
    } catch {
      return CqlBoolean.FALSE;
    }
  });

  // ReplaceMatches(string, pattern, replacement) -> string
  registry.register('ReplaceMatches', (args) => {
    const s = asString(args[0]);
    const pattern = asString(args[1]);
    const replacement = asString(args[2]);
    if (s === null || pattern === null || replacement === null) return null;
    try {
      const re = new RegExp(pattern, 'g');
      // Convert Java/CQL regex replacement escapes to JS:
      // \$ -> $$ (literal dollar), \\ -> \ (literal backslash)
      const jsReplacement = replacement.replace(/\\\$/g, '$$$$').replace(/\\\\/g, '\\');
      return new CqlString(s.replace(re, jsReplacement));
    } catch {
      return args[0] as CqlString;
    }
  });

  // Combine(list, separator?) -> string
  registry.register('Combine', (args) => {
    const list = args[0];
    if (list === null) return null;
    const separator = args[1] != null ? asString(args[1]) ?? '' : '';
    if (list instanceof CqlList) {
      if (list.values.length === 0) return null;
      // If any element is null, Combine returns null per CQL spec
      const parts: string[] = [];
      for (const item of list.values) {
        if (item === null) return null;
        parts.push(item.toString());
      }
      return new CqlString(parts.join(separator));
    }
    return null;
  });

  // Split(string, separator) -> list<string>
  registry.register('Split', (args) => {
    const s = asString(args[0]);
    if (s === null) return null;
    const separator = asString(args[1]);
    if (separator === null) {
      // CQL spec: Split with null separator returns the string as a single-element list
      return new CqlList([new CqlString(s)]);
    }
    const parts = s.split(separator);
    return new CqlList(parts.map((p) => new CqlString(p)));
  });
}
