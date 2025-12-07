/**
 * NameRepresentationUse
 * 
 * A set of codes for each different representation of a name.
 *
 * @see http://hl7.org/fhir/ValueSet/name-v3-representation
 */

export type NameRepresentationUseType = 'ABC' | 'IDE' | 'SYL';

export enum NameRepresentationUseEnum {
  Abc = 'ABC',
  Ide = 'IDE',
  Syl = 'SYL',
}

export const NameRepresentationUseValues = ['ABC', 'IDE', 'SYL'] as const;
