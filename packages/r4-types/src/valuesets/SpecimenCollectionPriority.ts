/**
 * Specimen collection priority
 * 
 *  This example value set defines a set of codes that can be used to indicate the priority of collection of a specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-collection-priority
 */

export type SpecimenCollectionPriorityType = '1' | '2' | '3' | '4' | '5' | '6' | '7';

export enum SpecimenCollectionPriorityEnum {
  /** STAT */
  _1 = '1',
  /** ASAP */
  _2 = '2',
  /** ASAP-ED */
  _3 = '3',
  /** AM */
  _4 = '4',
  /** ROUTINE */
  _5 = '5',
  /** NURSE COLLECT */
  _6 = '6',
  /** CALL OR FAX */
  _7 = '7',
}

export const SpecimenCollectionPriorityValues = ['1', '2', '3', '4', '5', '6', '7'] as const;
