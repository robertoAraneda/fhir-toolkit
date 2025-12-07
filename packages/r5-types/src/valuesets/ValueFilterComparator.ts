/**
 * Value Filter Comparator
 * 
 * The type of comparator operator to use
 *
 * @see http://hl7.org/fhir/ValueSet/value-filter-comparator
 */

export type ValueFilterComparatorType = 'eq' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb';

export enum ValueFilterComparatorEnum {
  /** Equals */
  Eq = 'eq',
  /** Greater Than */
  Gt = 'gt',
  /** Less Than */
  Lt = 'lt',
  /** Greater or Equals */
  Ge = 'ge',
  /** Less of Equal */
  Le = 'le',
  /** Starts After */
  Sa = 'sa',
  /** Ends Before */
  Eb = 'eb',
}

export const ValueFilterComparatorValues = ['eq', 'gt', 'lt', 'ge', 'le', 'sa', 'eb'] as const;
