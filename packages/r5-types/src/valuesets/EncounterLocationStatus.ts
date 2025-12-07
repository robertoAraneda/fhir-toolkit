/**
 * Encounter Location Status
 * 
 * The status of the location.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-location-status
 */

export type EncounterLocationStatusType = 'planned' | 'active' | 'reserved' | 'completed';

export enum EncounterLocationStatusEnum {
  /** Planned */
  Planned = 'planned',
  /** Active */
  Active = 'active',
  /** Reserved */
  Reserved = 'reserved',
  /** Completed */
  Completed = 'completed',
}

export const EncounterLocationStatusValues = ['planned', 'active', 'reserved', 'completed'] as const;
