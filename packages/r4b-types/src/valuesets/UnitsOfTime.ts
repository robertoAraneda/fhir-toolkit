/**
 * UnitsOfTime
 * 
 * A unit of time (units from UCUM).
 *
 * @see http://hl7.org/fhir/ValueSet/units-of-time
 */

export type UnitsOfTimeType = 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';

export enum UnitsOfTimeEnum {
  /** second */
  S = 's',
  /** minute */
  Min = 'min',
  /** hour */
  H = 'h',
  /** day */
  D = 'd',
  /** week */
  Wk = 'wk',
  /** month */
  Mo = 'mo',
  /** year */
  A = 'a',
}

export const UnitsOfTimeValues = ['s', 'min', 'h', 'd', 'wk', 'mo', 'a'] as const;
