/**
 * ResearchStudyReasonStopped
 * 
 * Codes for why the study ended prematurely.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-reason-stopped
 */

export type ResearchStudyReasonStoppedType = 'accrual-goal-met' | 'closed-due-to-toxicity' | 'closed-due-to-lack-of-study-progress' | 'temporarily-closed-per-study-design';

export enum ResearchStudyReasonStoppedEnum {
  /** Accrual Goal Met */
  AccrualGoalMet = 'accrual-goal-met',
  /** Closed due to toxicity */
  ClosedDueToToxicity = 'closed-due-to-toxicity',
  /** Closed due to lack of study progress */
  ClosedDueToLackOfStudyProgress = 'closed-due-to-lack-of-study-progress',
  /** Temporarily closed per study design */
  TemporarilyClosedPerStudyDesign = 'temporarily-closed-per-study-design',
}

export const ResearchStudyReasonStoppedValues = ['accrual-goal-met', 'closed-due-to-toxicity', 'closed-due-to-lack-of-study-progress', 'temporarily-closed-per-study-design'] as const;
