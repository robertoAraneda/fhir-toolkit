/**
 * MedicationDispense Status Codes
 * 
 * MedicationDispense Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationdispense-status
 */

export type MedicationDispenseStatusType = 'preparation' | 'in-progress' | 'cancelled' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'declined' | 'unknown';

export enum MedicationDispenseStatusEnum {
  /** Preparation */
  Preparation = 'preparation',
  /** In Progress */
  InProgress = 'in-progress',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** On Hold */
  OnHold = 'on-hold',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Stopped */
  Stopped = 'stopped',
  /** Declined */
  Declined = 'declined',
  /** Unknown */
  Unknown = 'unknown',
}

export const MedicationDispenseStatusValues = ['preparation', 'in-progress', 'cancelled', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'declined', 'unknown'] as const;
