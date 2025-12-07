/**
 * MedicationAdministrationCategory
 * 
 * MedicationAdministration Category Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-admin-category
 */

export type MedicationAdministrationCategoryType = 'inpatient' | 'outpatient' | 'community';

export enum MedicationAdministrationCategoryEnum {
  /** Inpatient */
  Inpatient = 'inpatient',
  /** Outpatient */
  Outpatient = 'outpatient',
  /** Community */
  Community = 'community',
}

export const MedicationAdministrationCategoryValues = ['inpatient', 'outpatient', 'community'] as const;
