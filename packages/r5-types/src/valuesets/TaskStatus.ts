/**
 * Task Status
 * 
 * The current status of the task.
 *
 * @see http://hl7.org/fhir/ValueSet/task-status
 */

export type TaskStatusType = 'draft' | 'requested' | 'received' | 'accepted' | 'rejected' | 'ready' | 'cancelled' | 'in-progress' | 'on-hold' | 'failed' | 'completed' | 'entered-in-error';

export enum TaskStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Requested */
  Requested = 'requested',
  /** Received */
  Received = 'received',
  /** Accepted */
  Accepted = 'accepted',
  /** Rejected */
  Rejected = 'rejected',
  /** Ready */
  Ready = 'ready',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** In Progress */
  InProgress = 'in-progress',
  /** On Hold */
  OnHold = 'on-hold',
  /** Failed */
  Failed = 'failed',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const TaskStatusValues = ['draft', 'requested', 'received', 'accepted', 'rejected', 'ready', 'cancelled', 'in-progress', 'on-hold', 'failed', 'completed', 'entered-in-error'] as const;
