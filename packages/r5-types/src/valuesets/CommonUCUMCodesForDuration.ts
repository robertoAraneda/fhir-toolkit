/**
 * Common UCUM Codes for Duration
 * 
 * Unified Code for Units of Measure (UCUM). This value set includes all common UCUM codes used for Duration - that it is, all commonly used units which have the same canonical unit as 'a' (year)
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
