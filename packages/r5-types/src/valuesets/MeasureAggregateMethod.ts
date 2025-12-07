/**
 * Measure Aggregate Method
 * 
 * Aggregation method for a measure (e.g. sum, average, median, minimum, maximum, count)
 *
 * @see http://hl7.org/fhir/ValueSet/measure-aggregate-method
 */

export type MeasureAggregateMethodType = 'sum' | 'average' | 'median' | 'minimum' | 'maximum' | 'count';

export enum MeasureAggregateMethodEnum {
  /** Sum */
  Sum = 'sum',
  /** Average */
  Average = 'average',
  /** Median */
  Median = 'median',
  /** Minimum */
  Minimum = 'minimum',
  /** Maximum */
  Maximum = 'maximum',
  /** Count */
  Count = 'count',
}

export const MeasureAggregateMethodValues = ['sum', 'average', 'median', 'minimum', 'maximum', 'count'] as const;
