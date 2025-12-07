/**
 * Medication request  category  codes
 * 
 * MedicationRequest Category Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-category
 */

export type MedicationRequestCategoryType = 'inpatient' | 'outpatient' | 'community' | 'discharge';

export enum MedicationRequestCategoryEnum {
  /** Inpatient */
  Inpatient = 'inpatient',
  /** Outpatient */
  Outpatient = 'outpatient',
  /** Community */
  Community = 'community',
  /** Discharge */
  Discharge = 'discharge',
}

export const MedicationRequestCategoryValues = ['inpatient', 'outpatient', 'community', 'discharge'] as const;
