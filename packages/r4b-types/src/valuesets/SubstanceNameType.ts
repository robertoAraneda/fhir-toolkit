/**
 * SubstanceNameType
 * 
 * The type of a name given to a substance.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-name-type
 */

export type SubstanceNameTypeType = 'Systematic' | 'Scientific' | 'Brand';

export enum SubstanceNameTypeEnum {
  /** systematic */
  Systematic = 'Systematic',
  /** scientific */
  Scientific = 'Scientific',
  /** brand */
  Brand = 'Brand',
}

export const SubstanceNameTypeValues = ['Systematic', 'Scientific', 'Brand'] as const;
