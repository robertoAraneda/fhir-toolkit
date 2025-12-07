/**
 * Research Study Arm Type
 * 
 * Codes for the main intent of the study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-arm-type
 */

export type ResearchStudyArmTypeType = 'active-comparator' | 'placebo-comparator' | 'sham-comparator' | 'no-intervention' | 'experimental' | 'other-arm-type';

export enum ResearchStudyArmTypeEnum {
  /** Active Comparator */
  ActiveComparator = 'active-comparator',
  /** Placebo Comparator */
  PlaceboComparator = 'placebo-comparator',
  /** Sham Comparator */
  ShamComparator = 'sham-comparator',
  /** No Intervention */
  NoIntervention = 'no-intervention',
  /** Experimental */
  Experimental = 'experimental',
  /** Other Arm Type */
  OtherArmType = 'other-arm-type',
}

export const ResearchStudyArmTypeValues = ['active-comparator', 'placebo-comparator', 'sham-comparator', 'no-intervention', 'experimental', 'other-arm-type'] as const;
