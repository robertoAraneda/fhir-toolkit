/**
 * Location Status
 * 
 * Indicates whether the location is still in use.
 *
 * @see http://hl7.org/fhir/ValueSet/location-status
 */

export type LocationStatusType = 'active' | 'suspended' | 'inactive';

export enum LocationStatusEnum {
  /** Active */
  Active = 'active',
  /** Suspended */
  Suspended = 'suspended',
  /** Inactive */
  Inactive = 'inactive',
}

export const LocationStatusValues = ['active', 'suspended', 'inactive'] as const;
