/**
 * Common Tags
 * 
 * Common Tag Codes defined by FHIR project
 *
 * @see http://hl7.org/fhir/ValueSet/common-tags
 */

export type CommonTagsType = 'actionable';

export enum CommonTagsEnum {
  /** Actionable */
  Actionable = 'actionable',
}

export const CommonTagsValues = ['actionable'] as const;
