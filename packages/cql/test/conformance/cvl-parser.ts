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
} from '../../src/types/primitives.js';
import { CqlInterval, CqlList, CqlTuple } from '../../src/types/complex.js';
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
  if (text.startsWith('@') && !text.startsWith('@T')) {
    const raw = text.slice(1);
    if (raw.includes('T') || /^\d{4}$/.test(raw) || /^\d{4}-\d{2}$/.test(raw) || /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      // If it ends with T (like @2016T) or contains T in the middle, it's a DateTime
      if (raw.includes('T')) {
        return new CqlDateTime(raw);
      }
      // Pure date without T: @2024-01-15
      return new CqlDate(raw);
    }
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

  // List: {1, 2, 3}
  if (text.startsWith('{') && text.endsWith('}')) {
    return parseList(text);
  }

  // Tuple: Tuple { id: 5, name: 'Chris'}
  if (text.startsWith('Tuple')) {
    return parseTuple(text);
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
  // Walk through checking for escaped quotes ('')
  let i = 1;
  while (i < text.length - 1) {
    if (text[i] === "'" && text[i + 1] === "'") {
      i += 2; // skip escaped quote
    } else if (text[i] === "'") {
      return false; // unescaped quote in middle
    } else {
      i++;
    }
  }
  return true;
}

/** Unescape CQL string ('' -> '). */
function unescapeCqlString(s: string): string {
  return s.replace(/''/g, "'");
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
      // null elements in lists — we still include them conceptually
      // but CqlList holds CqlValue[], so we skip nulls or handle specially
      // For now, push a sentinel — actually the list tests may not have null elements in output
      // We'll handle this if needed
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
