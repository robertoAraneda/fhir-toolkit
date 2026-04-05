import type { Component, Term } from './ast.js';
import { operatorToString } from './ast.js';
import type { Canonical } from './canonical.js';

/** Serialize an AST term back to a UCUM string. */
export function composeTerm(t: Term | null): string {
  if (!t) return '';
  let result = '';
  result += composeComponent(t.comp);
  if (t.term) {
    result += operatorToString(t.op);
    result += composeTerm(t.term);
  }
  return result;
}

function composeComponent(c: Component): string {
  switch (c.kind) {
    case 'factor':
      return String(c.value);
    case 'symbol': {
      let s = '';
      if (c.prefix) s += c.prefix.code;
      s += c.unit.code;
      if (c.exponent !== 1) s += String(c.exponent);
      return s;
    }
    case 'term':
      return composeTerm(c);
  }
}

/**
 * Serialize canonical units to a UCUM string.
 * Example: [{m,1},{s,-1}] produces "m.s-1".
 */
export function composeCanonicalUnits(c: Canonical | null): string {
  if (!c || c.units.length === 0) {
    return '1';
  }

  const parts: string[] = [];
  for (const u of c.units) {
    if (u.exponent === 0) continue;
    let s = u.base.code;
    if (u.exponent !== 1) {
      s += String(u.exponent);
    }
    parts.push(s);
  }

  if (parts.length === 0) return '1';
  parts.sort();
  return parts.join('.');
}
