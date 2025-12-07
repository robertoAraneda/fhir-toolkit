/**
 * Participant Roles
 * 
 * Roles of participants that may be included in a care team.  Defined as: Healthcare professional (occupation) or Services (qualifier value).
 *
 * @see http://hl7.org/fhir/ValueSet/participant-role
 */

export type ParticipantRolesType = '429577009' | '116154003' | '133932002';

export enum ParticipantRolesEnum {
  _429577009 = '429577009',
  _116154003 = '116154003',
  _133932002 = '133932002',
}

export const ParticipantRolesValues = ['429577009', '116154003', '133932002'] as const;
