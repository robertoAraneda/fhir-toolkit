/**
 * ResearchSubjectStatus
 * 
 * Indicates the progression of a study subject through a study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-subject-status
 */

export type ResearchSubjectStatusType = 'candidate' | 'eligible' | 'follow-up' | 'ineligible' | 'not-registered' | 'off-study' | 'on-study' | 'on-study-intervention' | 'on-study-observation' | 'pending-on-study' | 'potential-candidate' | 'screening' | 'withdrawn';

export enum ResearchSubjectStatusEnum {
  /** Candidate */
  Candidate = 'candidate',
  /** Eligible */
  Eligible = 'eligible',
  /** Follow-up */
  FollowUp = 'follow-up',
  /** Ineligible */
  Ineligible = 'ineligible',
  /** Not Registered */
  NotRegistered = 'not-registered',
  /** Off-study */
  OffStudy = 'off-study',
  /** On-study */
  OnStudy = 'on-study',
  /** On-study-intervention */
  OnStudyIntervention = 'on-study-intervention',
  /** On-study-observation */
  OnStudyObservation = 'on-study-observation',
  /** Pending on-study */
  PendingOnStudy = 'pending-on-study',
  /** Potential Candidate */
  PotentialCandidate = 'potential-candidate',
  /** Screening */
  Screening = 'screening',
  /** Withdrawn */
  Withdrawn = 'withdrawn',
}

export const ResearchSubjectStatusValues = ['candidate', 'eligible', 'follow-up', 'ineligible', 'not-registered', 'off-study', 'on-study', 'on-study-intervention', 'on-study-observation', 'pending-on-study', 'potential-candidate', 'screening', 'withdrawn'] as const;
