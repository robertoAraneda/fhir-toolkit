/**
 * Definition Method
 * 
 * The method used to define, describe, or determine a characteristic value.
 *
 * @see http://hl7.org/fhir/ValueSet/definition-method
 */

export type DefinitionMethodType = 'systematic-assessment' | 'non-systematic-assessment' | 'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';

export enum DefinitionMethodEnum {
  /** Systematic Assessment */
  SystematicAssessment = 'systematic-assessment',
  /** Non-Systematic Assessment */
  NonSystematicAssessment = 'non-systematic-assessment',
  /** Mean */
  Mean = 'mean',
  /** Median */
  Median = 'median',
  /** Mean of Means */
  MeanOfMean = 'mean-of-mean',
  /** Mean of Medians */
  MeanOfMedian = 'mean-of-median',
  /** Median of Means */
  MedianOfMean = 'median-of-mean',
  /** Median of Medians */
  MedianOfMedian = 'median-of-median',
}

export const DefinitionMethodValues = ['systematic-assessment', 'non-systematic-assessment', 'mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median'] as const;
