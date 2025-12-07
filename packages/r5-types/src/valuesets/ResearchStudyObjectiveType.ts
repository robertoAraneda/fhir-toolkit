/**
 * Research Study Objective Type
 * 
 * Codes for the kind of study objective.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-objective-type
 */

export type ResearchStudyObjectiveTypeType = 'primary' | 'secondary' | 'exploratory';

export enum ResearchStudyObjectiveTypeEnum {
  /** Primary */
  Primary = 'primary',
  /** Secondary */
  Secondary = 'secondary',
  /** Exploratory */
  Exploratory = 'exploratory',
}

export const ResearchStudyObjectiveTypeValues = ['primary', 'secondary', 'exploratory'] as const;
