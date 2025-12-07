/**
 * Substance Category Codes
 * 
 * Substance category codes
 *
 * @see http://hl7.org/fhir/ValueSet/substance-category
 */

export type SubstanceCategoryType = 'allergen' | 'biological' | 'body' | 'chemical' | 'food' | 'drug' | 'material';

export enum SubstanceCategoryEnum {
  /** Allergen */
  Allergen = 'allergen',
  /** Biological Substance */
  Biological = 'biological',
  /** Body Substance */
  Body = 'body',
  /** Chemical */
  Chemical = 'chemical',
  /** Dietary Substance */
  Food = 'food',
  /** Drug or Medicament */
  Drug = 'drug',
  /** Material */
  Material = 'material',
}

export const SubstanceCategoryValues = ['allergen', 'biological', 'body', 'chemical', 'food', 'drug', 'material'] as const;
