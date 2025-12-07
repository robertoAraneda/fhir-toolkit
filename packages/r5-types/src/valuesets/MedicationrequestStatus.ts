/**
 * medicationrequest Status
 * 
 * MedicationRequest Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-status
 */

export type MedicationrequestStatusType = 'active' | 'on-hold' | 'ended' | 'stopped' | 'completed' | 'cancelled' | 'entered-in-error' | 'draft' | 'unknown';

export enum MedicationrequestStatusEnum {
  /** Active */
  Active = 'active',
  /** On Hold */
  OnHold = 'on-hold',
  /** Ended */
  Ended = 'ended',
  /** Stopped */
  Stopped = 'stopped',
  /** Completed */
  Completed = 'completed',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Draft */
  Draft = 'draft',
  /** Unknown */
  Unknown = 'unknown',
}

export const MedicationrequestStatusValues = ['active', 'on-hold', 'ended', 'stopped', 'completed', 'cancelled', 'entered-in-error', 'draft', 'unknown'] as const;
