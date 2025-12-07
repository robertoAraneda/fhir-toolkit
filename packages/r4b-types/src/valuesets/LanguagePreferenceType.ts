/**
 * LanguagePreferenceType
 * 
 * This value set defines the set of codes for describing the type or mode of the patient's preferred language.
 *
 * @see http://hl7.org/fhir/ValueSet/language-preference-type
 */

export type LanguagePreferenceTypeType = 'verbal' | 'written';

export enum LanguagePreferenceTypeEnum {
  /** verbal */
  Verbal = 'verbal',
  /** written */
  Written = 'written',
}

export const LanguagePreferenceTypeValues = ['verbal', 'written'] as const;
