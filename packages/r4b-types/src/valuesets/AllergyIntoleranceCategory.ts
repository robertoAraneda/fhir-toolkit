/**
 * AllergyIntoleranceCategory
 * 
 * Category of an identified substance associated with allergies or intolerances.
 *
 * @see http://hl7.org/fhir/ValueSet/allergy-intolerance-category
 */

export type AllergyIntoleranceCategoryType = 'food' | 'medication' | 'environment' | 'biologic';

export enum AllergyIntoleranceCategoryEnum {
  /** Food */
  Food = 'food',
  /** Medication */
  Medication = 'medication',
  /** Environment */
  Environment = 'environment',
  /** Biologic */
  Biologic = 'biologic',
}

export const AllergyIntoleranceCategoryValues = ['food', 'medication', 'environment', 'biologic'] as const;
