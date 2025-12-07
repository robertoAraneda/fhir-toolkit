/**
 * Action Participant Type
 * 
 * The type of participant for the action.
 *
 * @see http://hl7.org/fhir/ValueSet/action-participant-type
 */

export type ActionParticipantTypeType = 'careteam' | 'device' | 'group' | 'healthcareservice' | 'location' | 'organization' | 'patient' | 'practitioner' | 'practitionerrole' | 'relatedperson';

export enum ActionParticipantTypeEnum {
  /** CareTeam */
  Careteam = 'careteam',
  /** Device */
  Device = 'device',
  /** Group */
  Group = 'group',
  /** HealthcareService */
  Healthcareservice = 'healthcareservice',
  /** Location */
  Location = 'location',
  /** Organization */
  Organization = 'organization',
  /** Patient */
  Patient = 'patient',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** PractitionerRole */
  Practitionerrole = 'practitionerrole',
  /** RelatedPerson */
  Relatedperson = 'relatedperson',
}

export const ActionParticipantTypeValues = ['careteam', 'device', 'group', 'healthcareservice', 'location', 'organization', 'patient', 'practitioner', 'practitionerrole', 'relatedperson'] as const;
