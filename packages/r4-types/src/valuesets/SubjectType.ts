/**
 * Subject type
 * 
 * Possible types of subjects.
 *
 * @see http://hl7.org/fhir/ValueSet/subject-type
 */

export type SubjectTypeType = 'Patient' | 'Practitioner' | 'Organization' | 'Location' | 'Device';

export enum SubjectTypeEnum {
  Patient = 'Patient',
  Practitioner = 'Practitioner',
  Organization = 'Organization',
  Location = 'Location',
  Device = 'Device',
}

export const SubjectTypeValues = ['Patient', 'Practitioner', 'Organization', 'Location', 'Device'] as const;
