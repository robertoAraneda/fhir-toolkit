/**
 * Medication dispense  category  codes
 * 
 * MedicationDispense Category Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationdispense-category
 */

export type MedicationDispenseCategoryType = 'inpatient' | 'outpatient' | 'community' | 'discharge';

export enum MedicationDispenseCategoryEnum {
  /** Inpatient */
  Inpatient = 'inpatient',
  /** Outpatient */
  Outpatient = 'outpatient',
  /** Community */
  Community = 'community',
  /** Discharge */
  Discharge = 'discharge',
}

export const MedicationDispenseCategoryValues = ['inpatient', 'outpatient', 'community', 'discharge'] as const;
