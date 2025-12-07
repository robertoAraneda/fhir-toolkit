/**
 * Questionnaire Response Status
 * 
 * Lifecycle status of the questionnaire response.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-answers-status
 */

export type QuestionnaireResponseStatusType = 'in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped';

export enum QuestionnaireResponseStatusEnum {
  /** In Progress */
  InProgress = 'in-progress',
  /** Completed */
  Completed = 'completed',
  /** Amended */
  Amended = 'amended',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Stopped */
  Stopped = 'stopped',
}

export const QuestionnaireResponseStatusValues = ['in-progress', 'completed', 'amended', 'entered-in-error', 'stopped'] as const;
