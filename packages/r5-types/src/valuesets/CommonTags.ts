/**
 * Common Tags
 * 
 * Common Tag Codes defined by FHIR project
 *
 * @see http://hl7.org/fhir/ValueSet/common-tags
 */

export type CommonTagsType = 'SUBSETTED';

export enum CommonTagsEnum {
  /** subsetted */
  Subsetted = 'SUBSETTED',
}

export const CommonTagsValues = ['SUBSETTED'] as const;
