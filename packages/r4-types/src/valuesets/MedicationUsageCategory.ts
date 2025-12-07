/**
 * Medication usage category codes
 * 
 * Medication Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-statement-category
 */

export type MedicationUsageCategoryType = 'inpatient' | 'outpatient' | 'community' | 'patientspecified';

export enum MedicationUsageCategoryEnum {
  /** Inpatient */
  Inpatient = 'inpatient',
  /** Outpatient */
  Outpatient = 'outpatient',
  /** Community */
  Community = 'community',
  /** Patient Specified */
  Patientspecified = 'patientspecified',
}

export const MedicationUsageCategoryValues = ['inpatient', 'outpatient', 'community', 'patientspecified'] as const;
