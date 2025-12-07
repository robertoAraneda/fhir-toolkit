/**
 * StudyType
 * 
 * Types of research studies (types of research methods).
 *
 * @see http://hl7.org/fhir/ValueSet/study-type
 */

export type StudyTypeType = 'RCT' | 'CCT' | 'cohort' | 'case-control' | 'series' | 'case-report' | 'mixed';

export enum StudyTypeEnum {
  /** randomized trial */
  Rct = 'RCT',
  /** controlled trial (non-randomized) */
  Cct = 'CCT',
  /** comparative cohort study */
  Cohort = 'cohort',
  /** case-control study */
  CaseControl = 'case-control',
  /** uncontrolled cohort or case series */
  Series = 'series',
  /** case report */
  CaseReport = 'case-report',
  /** mixed methods */
  Mixed = 'mixed',
}

export const StudyTypeValues = ['RCT', 'CCT', 'cohort', 'case-control', 'series', 'case-report', 'mixed'] as const;
