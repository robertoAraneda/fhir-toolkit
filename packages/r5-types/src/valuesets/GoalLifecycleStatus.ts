/**
 * Goal Lifecycle Status
 * 
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-status
 */

export type GoalLifecycleStatusType = 'proposed' | 'planned' | 'accepted' | 'active' | 'on-hold' | 'completed' | 'cancelled' | 'entered-in-error' | 'rejected';

export enum GoalLifecycleStatusEnum {
  /** Proposed */
  Proposed = 'proposed',
  /** Planned */
  Planned = 'planned',
  /** Accepted */
  Accepted = 'accepted',
  /** Active */
  Active = 'active',
  /** On Hold */
  OnHold = 'on-hold',
  /** Completed */
  Completed = 'completed',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Rejected */
  Rejected = 'rejected',
}

export const GoalLifecycleStatusValues = ['proposed', 'planned', 'accepted', 'active', 'on-hold', 'completed', 'cancelled', 'entered-in-error', 'rejected'] as const;
