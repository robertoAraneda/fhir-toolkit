/**
 * Participant Resource Types
 * 
 * All Resource Types that represent participant resources
 *
 * @see http://hl7.org/fhir/ValueSet/participant-resource-types
 */

export type ParticipantResourceTypesType = 'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson';

export enum ParticipantResourceTypesEnum {
  Careteam = 'CareTeam',
  Device = 'Device',
  Group = 'Group',
  Healthcareservice = 'HealthcareService',
  Location = 'Location',
  Organization = 'Organization',
  Patient = 'Patient',
  Practitioner = 'Practitioner',
  Practitionerrole = 'PractitionerRole',
  Relatedperson = 'RelatedPerson',
}

export const ParticipantResourceTypesValues = ['CareTeam', 'Device', 'Group', 'HealthcareService', 'Location', 'Organization', 'Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'] as const;
