/**
 * Device Usage Status
 * 
 * A coded concept indicating the current status of the Device Usage.
 *
 * @see http://hl7.org/fhir/ValueSet/deviceusage-status
 */

export type DeviceUsageStatusType = 'active' | 'completed' | 'not-done' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold';

export enum DeviceUsageStatusEnum {
  /** Active */
  Active = 'active',
  /** Completed */
  Completed = 'completed',
  /** Not done */
  NotDone = 'not-done',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Intended */
  Intended = 'intended',
  /** Stopped */
  Stopped = 'stopped',
  /** On Hold */
  OnHold = 'on-hold',
}

export const DeviceUsageStatusValues = ['active', 'completed', 'not-done', 'entered-in-error', 'intended', 'stopped', 'on-hold'] as const;
