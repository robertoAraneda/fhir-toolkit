/**
 * FHIRDeviceStatus
 * 
 * The availability status of the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-status
 */

export type FHIRDeviceStatusType = 'active' | 'inactive' | 'entered-in-error' | 'unknown';

export enum FHIRDeviceStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const FHIRDeviceStatusValues = ['active', 'inactive', 'entered-in-error', 'unknown'] as const;
