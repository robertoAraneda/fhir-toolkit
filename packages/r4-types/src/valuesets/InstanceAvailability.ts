/**
 * InstanceAvailability
 * 
 * Availability of the resource.
 *
 * @see http://hl7.org/fhir/ValueSet/instance-availability
 */

export type InstanceAvailabilityType = 'ONLINE' | 'OFFLINE' | 'NEARLINE' | 'UNAVAILABLE';

export enum InstanceAvailabilityEnum {
  Online = 'ONLINE',
  Offline = 'OFFLINE',
  Nearline = 'NEARLINE',
  Unavailable = 'UNAVAILABLE',
}

export const InstanceAvailabilityValues = ['ONLINE', 'OFFLINE', 'NEARLINE', 'UNAVAILABLE'] as const;
