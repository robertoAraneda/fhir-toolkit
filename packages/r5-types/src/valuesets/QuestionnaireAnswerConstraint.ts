/**
 * Questionnaire answer constraints value set
 * 
 * Codes that describe the types of constraints possible on a question item that has a list of permitted answers
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-answer-constraint
 */

export type QuestionnaireAnswerConstraintType = 'optionsOnly' | 'optionsOrType' | 'optionsOrString';

export enum QuestionnaireAnswerConstraintEnum {
  /** Options only */
  Optionsonly = 'optionsOnly',
  /** Options or 'type' */
  Optionsortype = 'optionsOrType',
  /** Options or string */
  Optionsorstring = 'optionsOrString',
}

export const QuestionnaireAnswerConstraintValues = ['optionsOnly', 'optionsOrType', 'optionsOrString'] as const;
