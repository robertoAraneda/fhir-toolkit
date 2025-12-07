/**
 * Group Type
 * 
 * Types of resources that are part of group.
 *
 * @see http://hl7.org/fhir/ValueSet/group-type
 */

export type GroupTypeType = 'person' | 'animal' | 'practitioner' | 'device' | 'careteam' | 'healthcareservice' | 'location' | 'organization' | 'relatedperson' | 'specimen';

export enum GroupTypeEnum {
  /** Person */
  Person = 'person',
  /** Animal */
  Animal = 'animal',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** Device */
  Device = 'device',
  /** CareTeam */
  Careteam = 'careteam',
  /** HealthcareService */
  Healthcareservice = 'healthcareservice',
  /** Location */
  Location = 'location',
  /** Organization */
  Organization = 'organization',
  /** RelatedPerson */
  Relatedperson = 'relatedperson',
  /** Specimen */
  Specimen = 'specimen',
}

export const GroupTypeValues = ['person', 'animal', 'practitioner', 'device', 'careteam', 'healthcareservice', 'location', 'organization', 'relatedperson', 'specimen'] as const;
