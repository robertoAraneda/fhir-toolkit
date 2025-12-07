/**
 * Encounter Status
 * 
 * Current state of the encounter.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-status
 */

export type EncounterStatusType = 'planned' | 'in-progress' | 'on-hold' | 'discharged' | 'completed' | 'cancelled' | 'discontinued' | 'entered-in-error' | 'unknown';

export enum EncounterStatusEnum {
  /** Planned */
  Planned = 'planned',
  /** In Progress */
  InProgress = 'in-progress',
  /** On Hold */
  OnHold = 'on-hold',
  /** Discharged */
  Discharged = 'discharged',
  /** Completed */
  Completed = 'completed',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Discontinued */
  Discontinued = 'discontinued',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const EncounterStatusValues = ['planned', 'in-progress', 'on-hold', 'discharged', 'completed', 'cancelled', 'discontinued', 'entered-in-error', 'unknown'] as const;
