/**
 * AbstractType
 * 
 * A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.
 *
 * @see http://hl7.org/fhir/ValueSet/abstract-types
 */

export type AbstractTypeType = 'Type' | 'Any';

export enum AbstractTypeEnum {
  /** Type */
  Type = 'Type',
  /** Any */
  Any = 'Any',
}

export const AbstractTypeValues = ['Type', 'Any'] as const;
