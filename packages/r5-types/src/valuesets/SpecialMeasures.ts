/**
 * Special Measures
 * 
 * Extra measures defined for a Medicinal Product, such as a requirement to conduct post-authorization studies.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-special-measures
 */

export type SpecialMeasuresType = 'Post-authorizationStudies';

export enum SpecialMeasuresEnum {
  /** Requirement to conduct post-authorization studies */
  PostAuthorizationstudies = 'Post-authorizationStudies',
}

export const SpecialMeasuresValues = ['Post-authorizationStudies'] as const;
