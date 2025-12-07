/**
 * Allergy Intolerance Type
 * 
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 *
 * @see http://hl7.org/fhir/ValueSet/allergy-intolerance-type
 */

export type AllergyIntoleranceTypeType = 'allergy' | 'intolerance';

export enum AllergyIntoleranceTypeEnum {
  /** Allergy */
  Allergy = 'allergy',
  /** Intolerance */
  Intolerance = 'intolerance',
}

export const AllergyIntoleranceTypeValues = ['allergy', 'intolerance'] as const;
