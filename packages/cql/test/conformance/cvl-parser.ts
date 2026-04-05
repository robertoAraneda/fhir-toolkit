/**
 * CQL Value Literal (CVL) parser.
 *
 * Parses the <output> strings from the cqframework/cql-tests conformance suite
 * into CqlValue objects that can be compared against engine evaluation results.
 *
 * Supported literals:
 *   null, true, false, 42, 42L, 3.14, 'hello',
 *   @2024-01-15, @2024-01-15T10:30:00, @T10:30:00,
 *   5.0'mg', 5.0 'mg',
 *   Interval[1, 10], Interval(1, 10), Interval [ 1, 10 ],
 *   {1, 2, 3}, Tuple { id: 5, name: 'Chris' }
 */

import {
  CqlInteger,
  CqlLong,
  CqlDecimal,
  CqlString,
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
  CqlNull,
} from '../../src/types/primitives.js';
import { CqlInterval, CqlList, CqlTuple, CqlCode, CqlConcept } from '../../src/types/complex.js';
import type { CqlValue, CqlComparable } from '../../src/types/value.js';

export function parseCvl(text: string): CqlValue | null {
  text = text.trim();
  if (text === 'null') return null;
  if (text === 'true') return CqlBoolean.TRUE;
  if (text === 'false') return CqlBoolean.FALSE;

  // String: 'value'
  if (text.startsWith("'") && text.endsWith("'") && isBalancedString(text)) {
    return new CqlString(unescapeCqlString(text.slice(1, -1)));
  }

  // DateTime: @2024-01-15T10:30:00 or @2024T (year-only with T)
  // Also handles @2014-01-01T (date with trailing T but no time) as DateTime
  if (text.startsWith('@') && !text.startsWith('@T')) {
    const raw = text.slice(1);
    if (raw.includes('T')) {
      // Any presence of T makes it a DateTime.
      // If T is at the end (e.g., @2016T, @2014-01-01T), strip it for parsing
      // since CqlDateTime regex expects optional time components after T.
      const normalized = raw.endsWith('T') ? raw.slice(0, -1) : raw;
      return new CqlDateTime(normalized);
    }
    // Pure date without T: @2024-01-15, @2024-01, @2024
    return new CqlDate(raw);
  }

  // Time: @T10:30:00
  if (text.startsWith('@T')) {
    return new CqlTime(text.slice(2));
  }

  // Long: 42L
  if (/^-?\d+L$/.test(text)) {
    return new CqlLong(BigInt(text.slice(0, -1)));
  }

  // Quantity: 5.0'mg' or 5.0 'mg' or -5.0'mg'
  const qtyMatch = text.match(/^(-?[\d.]+)\s*'([^']*)'$/);
  if (qtyMatch) {
    return CqlQuantity.of(qtyMatch[1], qtyMatch[2]);
  }

  // Interval: Interval[1, 10] or Interval(1, 10) or Interval [ 1, 10 ]
  if (text.startsWith('Interval')) {
    return parseInterval(text);
  }

  // Tuple: Tuple { id: 5, name: 'Chris'} or just { A: 2, B: 5 } (bare tuple)
  if (text.startsWith('Tuple')) {
    return parseTuple(text);
  }

  // Bare tuple (without Tuple prefix): { key: value, ... }
  // Distinguish from list by checking if first element has a colon
  if (text.startsWith('{') && text.endsWith('}')) {
    const inner = text.slice(1, -1).trim();
    if (inner !== '' && /^[A-Za-z_]\w*\s*:/.test(inner)) {
      return parseTuple('Tuple ' + text);
    }
  }

  // Concept: Concept { codes: [...], display: '...' }
  if (text.startsWith('Concept')) {
    return parseConcept(text);
  }

  // List: {1, 2, 3}
  if (text.startsWith('{') && text.endsWith('}')) {
    return parseList(text);
  }

  // Decimal: 3.14
  if (/^-?[\d]+\.[\d]+$/.test(text)) {
    return CqlDecimal.of(text);
  }

  // Integer: 42
  if (/^-?\d+$/.test(text)) {
    return new CqlInteger(parseInt(text, 10));
  }

  throw new Error(`Cannot parse CVL: ${text}`);
}

/** Check if a single-quoted string is balanced (handle escaped quotes). */
function isBalancedString(text: string): boolean {
  if (!text.startsWith("'") || !text.endsWith("'")) return false;
  // Walk through checking for escaped quotes ('' or \')
  let i = 1;
  while (i < text.length - 1) {
    if (text[i] === '\\' && text[i + 1] === "'") {
      i += 2; // skip backslash-escaped quote
    } else if (text[i] === "'" && text[i + 1] === "'") {
      i += 2; // skip double-quote escaped quote
    } else if (text[i] === "'") {
      return false; // unescaped quote in middle
    } else {
      i++;
    }
  }
  return true;
}

/** Unescape CQL string: '' -> ', \' -> ', \" -> ", \\ -> \, \uXXXX -> char, etc. */
function unescapeCqlString(s: string): string {
  return s
    .replace(/''/g, "'")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

/**
 * Split a string by commas, respecting nesting in [], (), {}, and ''.
 */
function splitTopLevel(text: string, delimiter: string = ','): string[] {
  const parts: string[] = [];
  let depth = 0;
  let inString = false;
  let current = '';

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      current += ch;
      if (ch === "'" && text[i + 1] === "'") {
        current += text[++i]; // escaped quote
      } else if (ch === "'") {
        inString = false;
      }
      continue;
    }

    if (ch === "'") {
      inString = true;
      current += ch;
      continue;
    }

    if (ch === '[' || ch === '(' || ch === '{') {
      depth++;
      current += ch;
      continue;
    }

    if (ch === ']' || ch === ')' || ch === '}') {
      depth--;
      current += ch;
      continue;
    }

    if (depth === 0 && text.startsWith(delimiter, i)) {
      parts.push(current);
      current = '';
      i += delimiter.length - 1;
      continue;
    }

    current += ch;
  }

  if (current.length > 0 || parts.length > 0) {
    parts.push(current);
  }

  return parts;
}

function parseInterval(text: string): CqlInterval<CqlComparable> {
  // Strip "Interval" prefix and optional whitespace
  let body = text.slice('Interval'.length).trim();

  // Determine open/closed from first and last chars
  const lowClosed = body[0] === '[';
  const highClosed = body[body.length - 1] === ']';

  // Strip boundary markers
  body = body.slice(1, -1).trim();

  // Split by comma at top level (handle nested structures)
  const parts = splitTopLevel(body);
  if (parts.length !== 2) {
    throw new Error(`Cannot parse Interval body: ${text}`);
  }

  const lowStr = parts[0].trim();
  const highStr = parts[1].trim();

  const low = lowStr === 'null' ? null : parseCvl(lowStr);
  const high = highStr === 'null' ? null : parseCvl(highStr);

  return new CqlInterval(
    low as CqlComparable | null,
    high as CqlComparable | null,
    lowClosed,
    highClosed,
  );
}

function parseList(text: string): CqlList {
  // Strip { }
  const inner = text.slice(1, -1).trim();
  if (inner === '') {
    return new CqlList([]);
  }

  const parts = splitTopLevel(inner);
  const values: CqlValue[] = [];

  for (const part of parts) {
    const trimmed = part.trim();
    const val = parseCvl(trimmed);
    if (val === null) {
      // Use CqlNull sentinel for null elements in lists
      values.push(CqlNull.INSTANCE);
      continue;
    }
    values.push(val);
  }

  return new CqlList(values);
}

function parseTuple(text: string): CqlTuple {
  // Strip "Tuple" prefix, then find the { } block
  let body = text.slice('Tuple'.length).trim();
  if (body.startsWith('{') && body.endsWith('}')) {
    body = body.slice(1, -1).trim();
  } else {
    throw new Error(`Cannot parse Tuple: ${text}`);
  }

  if (body === '') {
    return new CqlTuple(new Map());
  }

  const elements = new Map<string, CqlValue | null>();
  const parts = splitTopLevel(body);

  for (const part of parts) {
    const trimmed = part.trim();
    // Find the first colon that separates key from value
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) {
      throw new Error(`Cannot parse Tuple element: ${trimmed}`);
    }
    const key = trimmed.slice(0, colonIdx).trim();
    const valStr = trimmed.slice(colonIdx + 1).trim();
    elements.set(key, parseCvl(valStr));
  }

  return new CqlTuple(elements);
}

function parseCodeInstance(text: string): CqlCode | null {
  const trimmed = text.trim();
  if (!trimmed.startsWith('Code')) return null;
  // Instance-style: Code { code: '...', ... }
  const braceIdx = trimmed.indexOf('{');
  if (braceIdx >= 0 && trimmed.endsWith('}')) {
    const inner = trimmed.slice(braceIdx + 1, -1).trim();
    const parts = splitTopLevel(inner);
    let code = '', system = '';
    let display: string | undefined;
    for (const p of parts) {
      const t = p.trim();
      const kv = t.match(/^(\w+)\s*:\s*(.+)$/s);
      if (kv) {
        let val = kv[2].trim();
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        const key = kv[1].toLowerCase();
        if (key === 'code') code = val;
        else if (key === 'system') system = val;
        else if (key === 'display') display = val;
      }
    }
    return new CqlCode(code, system, display);
  }
  // CQL-style: Code 'code' from system
  const cqlMatch = trimmed.match(/Code\s+'([^']*)'/);
  const sysMatch = trimmed.match(/from\s+(\S+)/);
  const dispMatch = trimmed.match(/display\s+'([^']*)'/);
  if (cqlMatch) {
    return new CqlCode(cqlMatch[1], sysMatch ? sysMatch[1] : '', dispMatch ? dispMatch[1] : undefined);
  }
  return null;
}

function parseConcept(text: string): CqlConcept {
  let body = text.slice('Concept'.length).trim();
  if (body.startsWith('{') && body.endsWith('}')) {
    body = body.slice(1, -1).trim();
  }
  const codes: CqlCode[] = [];
  let display: string | undefined;

  // Check for tuple-style: "codes: ..."
  if (/^codes\s*:/.test(body)) {
    const parts = splitTopLevel(body);
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.startsWith('codes')) {
        const codesBody = trimmed.replace(/^codes\s*:\s*/, '').trim();
        if (codesBody.startsWith('{') && codesBody.endsWith('}') && !codesBody.startsWith('{Code')) {
          // List of codes
          const inner = codesBody.slice(1, -1).trim();
          const codeParts = splitTopLevel(inner);
          for (const cp of codeParts) {
            const c = parseCodeInstance(cp.trim());
            if (c) codes.push(c);
          }
        } else {
          const c = parseCodeInstance(codesBody);
          if (c) codes.push(c);
        }
      } else if (trimmed.startsWith('display')) {
        const dm = trimmed.match(/display\s*:\s*'([^']*)'/);
        if (dm) display = dm[1];
      }
    }
  } else {
    const parts = splitTopLevel(body);
    for (const part of parts) {
      const trimmed = part.trim();
      const c = parseCodeInstance(trimmed);
      if (c) codes.push(c);
      if (trimmed.startsWith('display')) {
        const dm = trimmed.match(/display\s+'([^']*)'/);
        if (dm) display = dm[1];
      }
    }
  }
  return new CqlConcept(codes, display);
}
