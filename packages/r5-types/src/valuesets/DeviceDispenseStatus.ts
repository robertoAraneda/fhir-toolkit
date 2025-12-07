/**
 * DeviceDispense Status Codes
 * 
 * DeviceDispense Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/devicedispense-status
 */

export type DeviceDispenseStatusType = 'preparation' | 'in-progress' | 'cancelled' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'declined' | 'unknown';

export enum DeviceDispenseStatusEnum {
  /** Preparation */
  Preparation = 'preparation',
  /** In Progress */
  InProgress = 'in-progress',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** On Hold */
  OnHold = 'on-hold',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Stopped */
  Stopped = 'stopped',
  /** Declined */
  Declined = 'declined',
  /** Unknown */
  Unknown = 'unknown',
}

export const DeviceDispenseStatusValues = ['preparation', 'in-progress', 'cancelled', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'declined', 'unknown'] as const;
