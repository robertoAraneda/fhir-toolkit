/**
 * Statistics Code value set
 * 
 * Codes indicating types of statistics that can be returned
 *
 * @see http://hl7.org/fhir/ValueSet/observation-statistics
 */

export type StatisticsCodeType = 'average' | 'maximum' | 'minimum' | 'count' | 'total-count' | 'median' | 'std-dev' | 'sum' | 'variance' | '20-percent' | '80-percent' | '4-lower' | '4-upper' | '4-dev' | '5-1' | '5-2' | '5-3' | '5-4' | 'skew' | 'kurtosis' | 'regression';

export enum StatisticsCodeEnum {
  /** Average */
  Average = 'average',
  /** Maximum */
  Maximum = 'maximum',
  /** Minimum */
  Minimum = 'minimum',
  /** Count */
  Count = 'count',
  /** Total Count */
  TotalCount = 'total-count',
  /** Median */
  Median = 'median',
  /** Standard Deviation */
  StdDev = 'std-dev',
  /** Sum */
  Sum = 'sum',
  /** Variance */
  Variance = 'variance',
  /** 20th Percentile */
  _20Percent = '20-percent',
  /** 80th Percentile */
  _80Percent = '80-percent',
  /** Lower Quartile */
  _4Lower = '4-lower',
  /** Upper Quartile */
  _4Upper = '4-upper',
  /** Quartile Deviation */
  _4Dev = '4-dev',
  /** 1st Quintile */
  _51 = '5-1',
  /** 2nd Quintile */
  _52 = '5-2',
  /** 3rd Quintile */
  _53 = '5-3',
  /** 4th Quintile */
  _54 = '5-4',
  /** Skew */
  Skew = 'skew',
  /** Kurtosis */
  Kurtosis = 'kurtosis',
  /** Regression */
  Regression = 'regression',
}

export const StatisticsCodeValues = ['average', 'maximum', 'minimum', 'count', 'total-count', 'median', 'std-dev', 'sum', 'variance', '20-percent', '80-percent', '4-lower', '4-upper', '4-dev', '5-1', '5-2', '5-3', '5-4', 'skew', 'kurtosis', 'regression'] as const;
