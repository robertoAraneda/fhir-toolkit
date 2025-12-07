/**
 * Research Study Status
 * 
 * Codes that convey the current status of the research study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-status
 */

export type ResearchStudyStatusType = 'overall-study' | 'active' | 'active-but-not-recruiting' | 'administratively-completed' | 'approved' | 'closed-to-accrual' | 'closed-to-accrual-and-intervention' | 'completed' | 'disapproved' | 'enrolling-by-invitation' | 'in-review' | 'not-yet-recruiting' | 'recruiting' | 'temporarily-closed-to-accrual' | 'temporarily-closed-to-accrual-and-intervention' | 'terminated' | 'withdrawn';

export enum ResearchStudyStatusEnum {
  /** Overall study */
  OverallStudy = 'overall-study',
  /** Active */
  Active = 'active',
  /** Active, not recruiting */
  ActiveButNotRecruiting = 'active-but-not-recruiting',
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
  /** Enrolling by invitation */
  EnrollingByInvitation = 'enrolling-by-invitation',
  /** In Review */
  InReview = 'in-review',
  /** Not yet recruiting */
  NotYetRecruiting = 'not-yet-recruiting',
  /** Recruiting */
  Recruiting = 'recruiting',
  /** Temporarily Closed to Accrual */
  TemporarilyClosedToAccrual = 'temporarily-closed-to-accrual',
  /** Temporarily Closed to Accrual and Intervention */
  TemporarilyClosedToAccrualAndIntervention = 'temporarily-closed-to-accrual-and-intervention',
  /** Terminated */
  Terminated = 'terminated',
  /** Withdrawn */
  Withdrawn = 'withdrawn',
}

export const ResearchStudyStatusValues = ['overall-study', 'active', 'active-but-not-recruiting', 'administratively-completed', 'approved', 'closed-to-accrual', 'closed-to-accrual-and-intervention', 'completed', 'disapproved', 'enrolling-by-invitation', 'in-review', 'not-yet-recruiting', 'recruiting', 'temporarily-closed-to-accrual', 'temporarily-closed-to-accrual-and-intervention', 'terminated', 'withdrawn'] as const;
