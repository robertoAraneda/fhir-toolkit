/**
 * FHIR Device Status
 * 
 * The status of the Device record.
 *
 * @see http://hl7.org/fhir/ValueSet/device-status
 */

export type FHIRDeviceStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum FHIRDeviceStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const FHIRDeviceStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
