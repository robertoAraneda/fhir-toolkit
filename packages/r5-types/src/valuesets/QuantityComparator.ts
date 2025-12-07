/**
 * QuantityComparator
 * 
 * How the Quantity should be understood and represented.
 *
 * @see http://hl7.org/fhir/ValueSet/quantity-comparator
 */

export type QuantityComparatorType = '<' | '<=' | '>=' | '>' | 'ad';

export enum QuantityComparatorEnum {
  /** Less than */
  _Empty = '<',
  /** Less or Equal to */
  _Empty1 = '<=',
  /** Greater or Equal to */
  _Empty2 = '>=',
  /** Greater than */
  _Empty3 = '>',
  /** Sufficient to achieve this total quantity */
  Ad = 'ad',
}

export const QuantityComparatorValues = ['<', '<=', '>=', '>', 'ad'] as const;
