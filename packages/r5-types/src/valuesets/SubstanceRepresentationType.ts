/**
 * Substance Representation Type
 * 
 * The type of a name given to a substance.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-representation-type
 */

export type SubstanceRepresentationTypeType = 'Systematic' | 'Scientific' | 'Brand';

export enum SubstanceRepresentationTypeEnum {
  /** systematic */
  Systematic = 'Systematic',
  /** scientific */
  Scientific = 'Scientific',
  /** brand */
  Brand = 'Brand',
}

export const SubstanceRepresentationTypeValues = ['Systematic', 'Scientific', 'Brand'] as const;
