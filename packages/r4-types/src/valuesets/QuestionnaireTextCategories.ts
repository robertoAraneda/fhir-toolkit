/**
 * Questionnaire Text Categories
 * 
 * Codes defining the purpose of a Questionnaire item of type 'text'.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-display-category
 */

export type QuestionnaireTextCategoriesType = 'instructions' | 'security' | 'help';

export enum QuestionnaireTextCategoriesEnum {
  /** Instructions */
  Instructions = 'instructions',
  /** Security */
  Security = 'security',
  /** Help */
  Help = 'help',
}

export const QuestionnaireTextCategoriesValues = ['instructions', 'security', 'help'] as const;
