/**
 * ResearchElementType
 * 
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 *
 * @see http://hl7.org/fhir/ValueSet/research-element-type
 */

export type ResearchElementTypeType = 'population' | 'exposure' | 'outcome';

export enum ResearchElementTypeEnum {
  /** Population */
  Population = 'population',
  /** Exposure */
  Exposure = 'exposure',
  /** Outcome */
  Outcome = 'outcome',
}

export const ResearchElementTypeValues = ['population', 'exposure', 'outcome'] as const;
