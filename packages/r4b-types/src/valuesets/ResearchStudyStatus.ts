/**
 * ResearchStudyStatus
 * 
 * Codes that convey the current status of the research study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-status
 */

export type ResearchStudyStatusType = 'active' | 'administratively-completed' | 'approved' | 'closed-to-accrual' | 'closed-to-accrual-and-intervention' | 'completed' | 'disapproved' | 'in-review' | 'temporarily-closed-to-accrual' | 'temporarily-closed-to-accrual-and-intervention' | 'withdrawn';

export enum ResearchStudyStatusEnum {
  /** Active */
  Active = 'active',
  /** Administratively Completed */
  AdministrativelyCompleted = 'administratively-completed',
  /** Approved */
  Approved = 'approved',
  /** Closed to Accrual */
  ClosedToAccrual = 'closed-to-accrual',
  /** Closed to Accrual and Intervention */
  ClosedToAccrualAndIntervention = 'closed-to-accrual-and-intervention',
  /** Completed */
  Completed = 'completed',
  /** Disapproved */
  Disapproved = 'disapproved',
  /** In Review */
  InReview = 'in-review',
  /** Temporarily Closed to Accrual */
  TemporarilyClosedToAccrual = 'temporarily-closed-to-accrual',
  /** Temporarily Closed to Accrual and Intervention */
  TemporarilyClosedToAccrualAndIntervention = 'temporarily-closed-to-accrual-and-intervention',
  /** Withdrawn */
  Withdrawn = 'withdrawn',
}

export const ResearchStudyStatusValues = ['active', 'administratively-completed', 'approved', 'closed-to-accrual', 'closed-to-accrual-and-intervention', 'completed', 'disapproved', 'in-review', 'temporarily-closed-to-accrual', 'temporarily-closed-to-accrual-and-intervention', 'withdrawn'] as const;
