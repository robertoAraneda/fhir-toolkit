/**
 * Medication Cost Category Codes
 * 
 * Medication Cost Category Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-cost-category
 */

export type MedicationCostCategoryType = 'banda' | 'bandb';

export enum MedicationCostCategoryEnum {
  /** Band A */
  Banda = 'banda',
  /** Band B */
  Bandb = 'bandb',
}

export const MedicationCostCategoryValues = ['banda', 'bandb'] as const;
