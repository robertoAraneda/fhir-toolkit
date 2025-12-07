/**
 * DeviceUseStatementStatus
 * 
 * A coded concept indicating the current status of the Device Usage.
 *
 * @see http://hl7.org/fhir/ValueSet/device-statement-status
 */

export type DeviceUseStatementStatusType = 'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold';

export enum DeviceUseStatementStatusEnum {
  /** Active */
  Active = 'active',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Intended */
  Intended = 'intended',
  /** Stopped */
  Stopped = 'stopped',
  /** On Hold */
  OnHold = 'on-hold',
}

export const DeviceUseStatementStatusValues = ['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold'] as const;
