/**
 * Episode Of Care Status
 * 
 * The status of the episode of care.
 *
 * @see http://hl7.org/fhir/ValueSet/episode-of-care-status
 */

export type EpisodeOfCareStatusType = 'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error';

export enum EpisodeOfCareStatusEnum {
  /** Planned */
  Planned = 'planned',
  /** Waitlist */
  Waitlist = 'waitlist',
  /** Active */
  Active = 'active',
  /** On Hold */
  Onhold = 'onhold',
  /** Finished */
  Finished = 'finished',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const EpisodeOfCareStatusValues = ['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'] as const;
