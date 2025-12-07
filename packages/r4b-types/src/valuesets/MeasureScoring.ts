/**
 * MeasureScoring
 * 
 * The scoring type of the measure.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-scoring
 */

export type MeasureScoringType = 'proportion' | 'ratio' | 'continuous-variable' | 'cohort';

export enum MeasureScoringEnum {
  /** Proportion */
  Proportion = 'proportion',
  /** Ratio */
  Ratio = 'ratio',
  /** Continuous Variable */
  ContinuousVariable = 'continuous-variable',
  /** Cohort */
  Cohort = 'cohort',
}

export const MeasureScoringValues = ['proportion', 'ratio', 'continuous-variable', 'cohort'] as const;
