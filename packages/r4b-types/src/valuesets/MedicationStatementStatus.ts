/**
 * MedicationStatementStatus
 * 
 * MedicationStatement Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-statement-status
 */

export type MedicationStatementStatusType = 'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold' | 'unknown' | 'not-taken';

export enum MedicationStatementStatusEnum {
  /** Active */
  Active = 'active',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Intended */
  Intended = 'intended',
  /** Stopped */
  Stopped = 'stopped',
  /** On Hold */
  OnHold = 'on-hold',
  /** Unknown */
  Unknown = 'unknown',
  /** Not Taken */
  NotTaken = 'not-taken',
}

export const MedicationStatementStatusValues = ['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold', 'unknown', 'not-taken'] as const;
