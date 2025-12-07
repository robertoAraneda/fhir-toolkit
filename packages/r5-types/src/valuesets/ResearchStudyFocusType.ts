/**
 * Research Study Focus Type
 * 
 * Codes for the main intent of the study.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-focus-type
 */

export type ResearchStudyFocusTypeType = 'medication' | 'device' | 'intervention' | 'factor';

export enum ResearchStudyFocusTypeEnum {
  /** Medication */
  Medication = 'medication',
  /** Device */
  Device = 'device',
  /** Intervention */
  Intervention = 'intervention',
  /** Factor */
  Factor = 'factor',
}

export const ResearchStudyFocusTypeValues = ['medication', 'device', 'intervention', 'factor'] as const;
