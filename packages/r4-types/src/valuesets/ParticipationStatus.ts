/**
 * ParticipationStatus
 * 
 * The Participation status of an appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/participationstatus
 */

export type ParticipationStatusType = 'accepted' | 'declined' | 'tentative' | 'needs-action';

export enum ParticipationStatusEnum {
  /** Accepted */
  Accepted = 'accepted',
  /** Declined */
  Declined = 'declined',
  /** Tentative */
  Tentative = 'tentative',
  /** Needs Action */
  NeedsAction = 'needs-action',
}

export const ParticipationStatusValues = ['accepted', 'declined', 'tentative', 'needs-action'] as const;
