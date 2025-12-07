/**
 * GenderIdentity
 * 
 * This example value set defines a set of codes that can be used to indicate a patient's gender identity.
 *
 * @see http://hl7.org/fhir/ValueSet/gender-identity
 */

export type GenderIdentityType = 'male' | 'female' | 'non-binary' | 'transgender-male' | 'transgender-female' | 'other' | 'non-disclose';

export enum GenderIdentityEnum {
  /** male */
  Male = 'male',
  /** female */
  Female = 'female',
  /** non-binary */
  NonBinary = 'non-binary',
  /** transgender male */
  TransgenderMale = 'transgender-male',
  /** transgender female */
  TransgenderFemale = 'transgender-female',
  /** other */
  Other = 'other',
  /** does not wish to disclose */
  NonDisclose = 'non-disclose',
}

export const GenderIdentityValues = ['male', 'female', 'non-binary', 'transgender-male', 'transgender-female', 'other', 'non-disclose'] as const;
