/**
 * CareTeamStatus
 * 
 * Indicates the status of the care team.
 *
 * @see http://hl7.org/fhir/ValueSet/care-team-status
 */

export type CareTeamStatusType = 'proposed' | 'active' | 'suspended' | 'inactive' | 'entered-in-error';

export enum CareTeamStatusEnum {
  /** Proposed */
  Proposed = 'proposed',
  /** Active */
  Active = 'active',
  /** Suspended */
  Suspended = 'suspended',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const CareTeamStatusValues = ['proposed', 'active', 'suspended', 'inactive', 'entered-in-error'] as const;
