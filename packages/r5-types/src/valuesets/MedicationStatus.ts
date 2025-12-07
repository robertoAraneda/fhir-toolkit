/**
 * Medication Status Codes
 * 
 * Medication Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-status
 */

export type MedicationStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum MedicationStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const MedicationStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
