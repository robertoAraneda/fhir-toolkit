/**
 * ParticipantRequired
 * 
 * Is the Participant required to attend the appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/participantrequired
 */

export type ParticipantRequiredType = 'required' | 'optional' | 'information-only';

export enum ParticipantRequiredEnum {
  /** Required */
  Required = 'required',
  /** Optional */
  Optional = 'optional',
  /** Information Only */
  InformationOnly = 'information-only',
}

export const ParticipantRequiredValues = ['required', 'optional', 'information-only'] as const;
