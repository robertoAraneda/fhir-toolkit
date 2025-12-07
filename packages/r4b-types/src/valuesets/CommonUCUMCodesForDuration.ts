/**
 * Common UCUM Codes for Duration
 * 
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes
 *
 * @see http://hl7.org/fhir/ValueSet/duration-units
 */

export type CommonUCUMCodesForDurationType = 'ms' | 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';

export enum CommonUCUMCodesForDurationEnum {
  /** milliseconds */
  Ms = 'ms',
  /** seconds */
  S = 's',
  /** minutes */
  Min = 'min',
  /** hours */
  H = 'h',
  /** days */
  D = 'd',
  /** weeks */
  Wk = 'wk',
  /** months */
  Mo = 'mo',
  /** years */
  A = 'a',
}

export const CommonUCUMCodesForDurationValues = ['ms', 's', 'min', 'h', 'd', 'wk', 'mo', 'a'] as const;
