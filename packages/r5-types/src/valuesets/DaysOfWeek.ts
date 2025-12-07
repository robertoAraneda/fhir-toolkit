/**
 * Days Of Week
 * 
 * The days of the week.
 *
 * @see http://hl7.org/fhir/ValueSet/days-of-week
 */

export type DaysOfWeekType = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export enum DaysOfWeekEnum {
  /** Monday */
  Mon = 'mon',
  /** Tuesday */
  Tue = 'tue',
  /** Wednesday */
  Wed = 'wed',
  /** Thursday */
  Thu = 'thu',
  /** Friday */
  Fri = 'fri',
  /** Saturday */
  Sat = 'sat',
  /** Sunday */
  Sun = 'sun',
}

export const DaysOfWeekValues = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;
