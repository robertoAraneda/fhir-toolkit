/**
 * CarePlanActivityStatus
 * 
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 *
 * @see http://hl7.org/fhir/ValueSet/care-plan-activity-status
 */

export type CarePlanActivityStatusType = 'not-started' | 'scheduled' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled' | 'stopped' | 'unknown' | 'entered-in-error';

export enum CarePlanActivityStatusEnum {
  /** Not Started */
  NotStarted = 'not-started',
  /** Scheduled */
  Scheduled = 'scheduled',
  /** In Progress */
  InProgress = 'in-progress',
  /** On Hold */
  OnHold = 'on-hold',
  /** Completed */
  Completed = 'completed',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Stopped */
  Stopped = 'stopped',
  /** Unknown */
  Unknown = 'unknown',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const CarePlanActivityStatusValues = ['not-started', 'scheduled', 'in-progress', 'on-hold', 'completed', 'cancelled', 'stopped', 'unknown', 'entered-in-error'] as const;
