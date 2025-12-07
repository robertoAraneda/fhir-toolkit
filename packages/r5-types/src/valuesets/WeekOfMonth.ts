/**
 * Week Of Month
 * 
 * The set of weeks in a month.
 *
 * @see http://hl7.org/fhir/ValueSet/week-of-month
 */

export type WeekOfMonthType = 'first' | 'second' | 'third' | 'fourth' | 'last';

export enum WeekOfMonthEnum {
  /** First */
  First = 'first',
  /** Second */
  Second = 'second',
  /** Third */
  Third = 'third',
  /** Fourth */
  Fourth = 'fourth',
  /** Last */
  Last = 'last',
}

export const WeekOfMonthValues = ['first', 'second', 'third', 'fourth', 'last'] as const;
