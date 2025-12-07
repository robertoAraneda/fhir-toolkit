/**
 * ActionParticipantType
 * 
 * The type of participant for the action.
 *
 * @see http://hl7.org/fhir/ValueSet/action-participant-type
 */

export type ActionParticipantTypeType = 'patient' | 'practitioner' | 'related-person' | 'device';

export enum ActionParticipantTypeEnum {
  /** Patient */
  Patient = 'patient',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** Related Person */
  RelatedPerson = 'related-person',
  /** Device */
  Device = 'device',
}

export const ActionParticipantTypeValues = ['patient', 'practitioner', 'related-person', 'device'] as const;
