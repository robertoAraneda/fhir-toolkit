/**
 * Questionnaire Item Operator
 * 
 * The criteria by which a question is enabled.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-enable-operator
 */

export type QuestionnaireItemOperatorType = 'exists' | '=' | '!=' | '>' | '<' | '>=' | '<=';

export enum QuestionnaireItemOperatorEnum {
  /** Exists */
  Exists = 'exists',
  /** Equals */
  _Empty = '=',
  /** Not Equals */
  _Empty1 = '!=',
  /** Greater Than */
  _Empty2 = '>',
  /** Less Than */
  _Empty3 = '<',
  /** Greater or Equals */
  _Empty4 = '>=',
  /** Less or Equals */
  _Empty5 = '<=',
}

export const QuestionnaireItemOperatorValues = ['exists', '=', '!=', '>', '<', '>=', '<='] as const;
