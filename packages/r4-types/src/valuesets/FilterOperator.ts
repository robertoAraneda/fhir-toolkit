/**
 * FilterOperator
 * 
 * The kind of operation to perform as a part of a property based filter.
 *
 * @see http://hl7.org/fhir/ValueSet/filter-operator
 */

export type FilterOperatorType = '=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists';

export enum FilterOperatorEnum {
  /** Equals */
  _Empty = '=',
  /** Is A (by subsumption) */
  IsA = 'is-a',
  /** Descendent Of (by subsumption) */
  DescendentOf = 'descendent-of',
  /** Not (Is A) (by subsumption) */
  IsNotA = 'is-not-a',
  /** Regular Expression */
  Regex = 'regex',
  /** In Set */
  In = 'in',
  /** Not in Set */
  NotIn = 'not-in',
  /** Generalizes (by Subsumption) */
  Generalizes = 'generalizes',
  /** Exists */
  Exists = 'exists',
}

export const FilterOperatorValues = ['=', 'is-a', 'descendent-of', 'is-not-a', 'regex', 'in', 'not-in', 'generalizes', 'exists'] as const;
