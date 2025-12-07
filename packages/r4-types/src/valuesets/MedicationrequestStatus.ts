/**
 * Medicationrequest  status
 * 
 * MedicationRequest Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-status
 */

export type MedicationrequestStatusType = 'active' | 'on-hold' | 'cancelled' | 'completed' | 'entered-in-error' | 'stopped' | 'draft' | 'unknown';

export enum MedicationrequestStatusEnum {
  /** Active */
  Active = 'active',
  /** On Hold */
  OnHold = 'on-hold',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Stopped */
  Stopped = 'stopped',
  /** Draft */
  Draft = 'draft',
  /** Unknown */
  Unknown = 'unknown',
}

export const MedicationrequestStatusValues = ['active', 'on-hold', 'cancelled', 'completed', 'entered-in-error', 'stopped', 'draft', 'unknown'] as const;
