/**
 * GroupMeasure
 * 
 * Possible group measure aggregates (E.g. Mean, Median).
 *
 * @see http://hl7.org/fhir/ValueSet/group-measure
 */

export type GroupMeasureType = 'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';

export enum GroupMeasureEnum {
  /** Mean */
  Mean = 'mean',
  /** Median */
  Median = 'median',
  /** Mean of Study Means */
  MeanOfMean = 'mean-of-mean',
  /** Mean of Study Medins */
  MeanOfMedian = 'mean-of-median',
  /** Median of Study Means */
  MedianOfMean = 'median-of-mean',
  /** Median of Study Medians */
  MedianOfMedian = 'median-of-median',
}

export const GroupMeasureValues = ['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median'] as const;
