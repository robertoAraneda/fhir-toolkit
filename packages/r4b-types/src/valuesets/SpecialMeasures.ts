/**
 * SpecialMeasures
 * 
 * Extra measures defined for a Medicinal Product, such as a requirement to conduct post-authorisation studies.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-special-measures
 */

export type SpecialMeasuresType = 'Post-authorisationStudies';

export enum SpecialMeasuresEnum {
  /** Requirement to conduct post-authorisation studies */
  PostAuthorisationstudies = 'Post-authorisationStudies',
}

export const SpecialMeasuresValues = ['Post-authorisationStudies'] as const;
