/**
 * ActivityDefinitionCategory
 * 
 * High-level categorization of the type of activity.
 *
 * @see http://hl7.org/fhir/ValueSet/activity-definition-category
 */

export type ActivityDefinitionCategoryType = 'treatment' | 'education' | 'assessment';

export enum ActivityDefinitionCategoryEnum {
  /** Treatment */
  Treatment = 'treatment',
  /** Education */
  Education = 'education',
  /** Assessment */
  Assessment = 'assessment',
}

export const ActivityDefinitionCategoryValues = ['treatment', 'education', 'assessment'] as const;
