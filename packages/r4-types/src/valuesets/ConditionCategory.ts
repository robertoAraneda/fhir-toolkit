/**
 * Condition Category Codes
 * 
 * Preferred value set for Condition Categories.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-category
 */

export type ConditionCategoryType = 'problem-list-item' | 'encounter-diagnosis';

export enum ConditionCategoryEnum {
  /** Problem List Item */
  ProblemListItem = 'problem-list-item',
  /** Encounter Diagnosis */
  EncounterDiagnosis = 'encounter-diagnosis',
}

export const ConditionCategoryValues = ['problem-list-item', 'encounter-diagnosis'] as const;
