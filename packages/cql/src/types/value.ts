/**
 * CQL type system core interfaces.
 *
 * Mirrors the Go fhirpath/types.Value and Comparable interfaces while
 * following TypeScript idioms (no IsEmpty — use `null` instead).
 */

/** Union of all CQL type names. */
export type CqlType =
  | 'Boolean'
  | 'Integer'
  | 'Long'
  | 'Decimal'
  | 'String'
  | 'Date'
  | 'DateTime'
  | 'Time'
  | 'Quantity'
  | 'Ratio'
  | 'Code'
  | 'Concept'
  | 'Interval'
  | 'List'
  | 'Tuple'
  | 'Null';

/**
 * Base interface for every CQL value.
 *
 * Null is represented by JS `null`, not a wrapper class.
 */
export interface CqlValue {
  /** The CQL type name. */
  readonly type: CqlType;

  /**
   * CQL equality (`=`).
   * Returns `true` only when the other value has the same type and equal
   * content. Cross-type equality is supported for Integer / Decimal.
   */
  equals(other: CqlValue): boolean;

  /**
   * CQL equivalence (`~`).
   * Looser than equality — e.g. strings are compared case-insensitively,
   * Integer and Decimal are compared numerically.
   */
  equivalent(other: CqlValue): boolean;

  /** Human-readable string representation. */
  toString(): string;
}

/**
 * Implemented by CQL types that support ordering (`<`, `>`, `<=`, `>=`).
 */
export interface CqlComparable extends CqlValue {
  /**
   * Returns a negative number if `this < other`, zero if equal, positive if
   * `this > other`.
   *
   * @throws {TypeError} when the other value's type is incompatible.
   */
  compareTo(other: CqlValue): number;
}
