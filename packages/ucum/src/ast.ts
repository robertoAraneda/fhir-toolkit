import type { Unit, Prefix } from './model.js';

/** Binary operator in a UCUM expression. */
export const enum Operator {
  Multiplication = 0,
  Division = 1,
}

export function operatorToString(op: Operator): string {
  return op === Operator.Division ? '/' : '.';
}

/** A binary operation: comp op term. */
export interface Term {
  kind: 'term';
  comp: Component;
  op: Operator;
  term: Term | null;
}

/** A unit reference with optional prefix and exponent. */
export interface Symbol {
  kind: 'symbol';
  unit: Unit;
  prefix: Prefix | null;
  exponent: number;
}

/** A numeric literal. */
export interface Factor {
  kind: 'factor';
  value: number;
}

/** Union of AST node types. */
export type Component = Term | Symbol | Factor;
