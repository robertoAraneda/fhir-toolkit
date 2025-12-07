/**
 * AssertionOperatorType
 * 
 * The type of operator to use for assertion.
 *
 * @see http://hl7.org/fhir/ValueSet/assert-operator-codes
 */

export type AssertionOperatorTypeType = 'equals' | 'notEquals' | 'in' | 'notIn' | 'greaterThan' | 'lessThan' | 'empty' | 'notEmpty' | 'contains' | 'notContains' | 'eval';

export enum AssertionOperatorTypeEnum {
  /** equals */
  Equals = 'equals',
  /** notEquals */
  Notequals = 'notEquals',
  /** in */
  In = 'in',
  /** notIn */
  Notin = 'notIn',
  /** greaterThan */
  Greaterthan = 'greaterThan',
  /** lessThan */
  Lessthan = 'lessThan',
  /** empty */
  Empty = 'empty',
  /** notEmpty */
  Notempty = 'notEmpty',
  /** contains */
  Contains = 'contains',
  /** notContains */
  Notcontains = 'notContains',
  /** evaluate */
  Eval = 'eval',
}

export const AssertionOperatorTypeValues = ['equals', 'notEquals', 'in', 'notIn', 'greaterThan', 'lessThan', 'empty', 'notEmpty', 'contains', 'notContains', 'eval'] as const;
