/**
 * GroupType
 * 
 * Types of resources that are part of group.
 *
 * @see http://hl7.org/fhir/ValueSet/group-type
 */

export type GroupTypeType = 'person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance';

export enum GroupTypeEnum {
  /** Person */
  Person = 'person',
  /** Animal */
  Animal = 'animal',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** Device */
  Device = 'device',
  /** Medication */
  Medication = 'medication',
  /** Substance */
  Substance = 'substance',
}

export const GroupTypeValues = ['person', 'animal', 'practitioner', 'device', 'medication', 'substance'] as const;
