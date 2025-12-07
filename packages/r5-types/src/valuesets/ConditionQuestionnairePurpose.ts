/**
 * Condition Questionnaire Purpose
 * 
 * The use of a questionnaire.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-questionnaire-purpose
 */

export type ConditionQuestionnairePurposeType = 'preadmit' | 'diff-diagnosis' | 'outcome';

export enum ConditionQuestionnairePurposeEnum {
  /** Pre-admit */
  Preadmit = 'preadmit',
  /** Diff Diagnosis */
  DiffDiagnosis = 'diff-diagnosis',
  /** Outcome */
  Outcome = 'outcome',
}

export const ConditionQuestionnairePurposeValues = ['preadmit', 'diff-diagnosis', 'outcome'] as const;
