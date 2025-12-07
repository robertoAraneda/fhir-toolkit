/**
 * AdministrativeGender
 * 
 * The gender of a person used for administrative purposes.
 *
 * @see http://hl7.org/fhir/ValueSet/administrative-gender
 */

export type AdministrativeGenderType = 'male' | 'female' | 'other' | 'unknown';

export enum AdministrativeGenderEnum {
  /** Male */
  Male = 'male',
  /** Female */
  Female = 'female',
  /** Other */
  Other = 'other',
  /** Unknown */
  Unknown = 'unknown',
}

export const AdministrativeGenderValues = ['male', 'female', 'other', 'unknown'] as const;
