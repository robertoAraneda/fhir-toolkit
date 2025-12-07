/**
 * Common UCUM Codes for Age
 * 
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes
 *
 * @see http://hl7.org/fhir/ValueSet/age-units
 */

export type CommonUCUMCodesForAgeType = 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';

export enum CommonUCUMCodesForAgeEnum {
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

export const CommonUCUMCodesForAgeValues = ['min', 'h', 'd', 'wk', 'mo', 'a'] as const;
