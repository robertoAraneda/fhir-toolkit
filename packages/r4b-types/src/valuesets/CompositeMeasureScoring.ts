/**
 * CompositeMeasureScoring
 * 
 * The composite scoring method of the measure.
 *
 * @see http://hl7.org/fhir/ValueSet/composite-measure-scoring
 */

export type CompositeMeasureScoringType = 'opportunity' | 'all-or-nothing' | 'linear' | 'weighted';

export enum CompositeMeasureScoringEnum {
  /** Opportunity */
  Opportunity = 'opportunity',
  /** All-or-nothing */
  AllOrNothing = 'all-or-nothing',
  /** Linear */
  Linear = 'linear',
  /** Weighted */
  Weighted = 'weighted',
}

export const CompositeMeasureScoringValues = ['opportunity', 'all-or-nothing', 'linear', 'weighted'] as const;
