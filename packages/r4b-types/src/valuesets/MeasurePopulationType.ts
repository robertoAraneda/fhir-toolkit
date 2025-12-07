/**
 * MeasurePopulationType
 * 
 * The type of population.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-population
 */

export type MeasurePopulationTypeType = 'initial-population' | 'numerator' | 'numerator-exclusion' | 'denominator' | 'denominator-exclusion' | 'denominator-exception' | 'measure-population' | 'measure-population-exclusion' | 'measure-observation';

export enum MeasurePopulationTypeEnum {
  /** Initial Population */
  InitialPopulation = 'initial-population',
  /** Numerator */
  Numerator = 'numerator',
  /** Numerator Exclusion */
  NumeratorExclusion = 'numerator-exclusion',
  /** Denominator */
  Denominator = 'denominator',
  /** Denominator Exclusion */
  DenominatorExclusion = 'denominator-exclusion',
  /** Denominator Exception */
  DenominatorException = 'denominator-exception',
  /** Measure Population */
  MeasurePopulation = 'measure-population',
  /** Measure Population Exclusion */
  MeasurePopulationExclusion = 'measure-population-exclusion',
  /** Measure Observation */
  MeasureObservation = 'measure-observation',
}

export const MeasurePopulationTypeValues = ['initial-population', 'numerator', 'numerator-exclusion', 'denominator', 'denominator-exclusion', 'denominator-exception', 'measure-population', 'measure-population-exclusion', 'measure-observation'] as const;
