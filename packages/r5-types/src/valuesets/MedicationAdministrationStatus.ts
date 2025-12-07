/**
 * MedicationAdministration Status Codes
 * 
 * MedicationAdministration Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-admin-status
 */

export type MedicationAdministrationStatusType = 'in-progress' | 'not-done' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'unknown';

export enum MedicationAdministrationStatusEnum {
  /** In Progress */
  InProgress = 'in-progress',
  /** Not Done */
  NotDone = 'not-done',
  /** On Hold */
  OnHold = 'on-hold',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Stopped */
  Stopped = 'stopped',
  /** Unknown */
  Unknown = 'unknown',
}

export const MedicationAdministrationStatusValues = ['in-progress', 'not-done', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'unknown'] as const;
