/**
 * FHIR Device Availability Status
 * 
 * The availability status of the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-availability-status
 */

export type FHIRDeviceAvailabilityStatusType = 'lost' | 'damaged' | 'destroyed' | 'available';

export enum FHIRDeviceAvailabilityStatusEnum {
  /** Lost */
  Lost = 'lost',
  /** Damaged */
  Damaged = 'damaged',
  /** Destroyed */
  Destroyed = 'destroyed',
  /** Available */
  Available = 'available',
}

export const FHIRDeviceAvailabilityStatusValues = ['lost', 'damaged', 'destroyed', 'available'] as const;
