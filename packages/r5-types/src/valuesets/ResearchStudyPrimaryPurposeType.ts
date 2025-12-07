/**
 * Research Study Primary Purpose Type
 * 
 * Codes for the main intent of the study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-prim-purp-type
 */

export type ResearchStudyPrimaryPurposeTypeType = 'treatment' | 'prevention' | 'diagnostic' | 'supportive-care' | 'screening' | 'health-services-research' | 'basic-science' | 'device-feasibility';

export enum ResearchStudyPrimaryPurposeTypeEnum {
  /** Treatment */
  Treatment = 'treatment',
  /** Prevention */
  Prevention = 'prevention',
  /** Diagnostic */
  Diagnostic = 'diagnostic',
  /** Supportive Care */
  SupportiveCare = 'supportive-care',
  /** Screening */
  Screening = 'screening',
  /** Health Services Research */
  HealthServicesResearch = 'health-services-research',
  /** Basic Science */
  BasicScience = 'basic-science',
  /** Device Feasibility */
  DeviceFeasibility = 'device-feasibility',
}

export const ResearchStudyPrimaryPurposeTypeValues = ['treatment', 'prevention', 'diagnostic', 'supportive-care', 'screening', 'health-services-research', 'basic-science', 'device-feasibility'] as const;
