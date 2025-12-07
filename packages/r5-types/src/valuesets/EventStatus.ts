/**
 * EventStatus
 * 
 * Codes identifying the lifecycle stage of an event.
 *
 * @see http://hl7.org/fhir/ValueSet/event-status
 */

export type EventStatusType = 'preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown';

export enum EventStatusEnum {
  /** Preparation */
  Preparation = 'preparation',
  /** In Progress */
  InProgress = 'in-progress',
  /** Not Done */
  NotDone = 'not-done',
  /** On Hold */
  OnHold = 'on-hold',
  /** Stopped */
  Stopped = 'stopped',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const EventStatusValues = ['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'] as const;
