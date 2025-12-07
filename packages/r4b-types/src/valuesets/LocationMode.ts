/**
 * LocationMode
 * 
 * Indicates whether a resource instance represents a specific location or a class of locations.
 *
 * @see http://hl7.org/fhir/ValueSet/location-mode
 */

export type LocationModeType = 'instance' | 'kind';

export enum LocationModeEnum {
  /** Instance */
  Instance = 'instance',
  /** Kind */
  Kind = 'kind',
}

export const LocationModeValues = ['instance', 'kind'] as const;
