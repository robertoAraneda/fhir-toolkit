/**
 * Questionnaire Category Codes
 * 
 * Example list of potential categories for questionnaires.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-category
 */

export type QuestionnaireCategoryType = '273601006' | '273820006' | '273479001' | '273384008' | '304784009';

export enum QuestionnaireCategoryEnum {
  /** Mental status questionnaire */
  _273601006 = '273601006',
  /** Social support questionnaire */
  _273820006 = '273820006',
  /** General health questionnaire */
  _273479001 = '273479001',
  /** Consumer satisfaction questionnaire */
  _273384008 = '273384008',
  /** Administrative form */
  _304784009 = '304784009',
}

export const QuestionnaireCategoryValues = ['273601006', '273820006', '273479001', '273384008', '304784009'] as const;
