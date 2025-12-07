/**
 * EncounterStatus
 * 
 * Current state of the encounter.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-status
 */

export type EncounterStatusType = 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown';

export enum EncounterStatusEnum {
  /** Planned */
  Planned = 'planned',
  /** Arrived */
  Arrived = 'arrived',
  /** Triaged */
  Triaged = 'triaged',
  /** In Progress */
  InProgress = 'in-progress',
  /** On Leave */
  Onleave = 'onleave',
  /** Finished */
  Finished = 'finished',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const EncounterStatusValues = ['planned', 'arrived', 'triaged', 'in-progress', 'onleave', 'finished', 'cancelled', 'entered-in-error', 'unknown'] as const;
