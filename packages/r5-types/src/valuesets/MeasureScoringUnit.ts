/**
 * Measure Scoring Unit
 * 
 * This is an example value set illustrating some typical scoring units used in quality measure specifications.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-scoring-unit
 */

export type MeasureScoringUnitType = '1' | '/1000.d';

export enum MeasureScoringUnitEnum {
  /** Default units */
  _1 = '1',
  /** per 1000 patient days */
  _1000D = '/1000.d',
}

export const MeasureScoringUnitValues = ['1', '/1000.d'] as const;
