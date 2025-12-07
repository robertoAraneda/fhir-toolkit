/**
 * StatisticType
 * 
 * The type of a statistic, e.g. relative risk or mean
 *
 * @see http://hl7.org/fhir/ValueSet/statistic-type
 */

export type StatisticTypeType = 'absolute-MedianDiff' | 'C25463' | '0000301' | 'predictedRisk' | 'descriptive' | 'C93150' | 'C16726' | 'rate-ratio' | 'C25564' | 'C53319' | '0000457' | 'C28007' | 'C25570' | 'C16932' | 'C65172' | 'C17010' | 'C44256' | '0000565' | 'C93152' | '0000424' | 'C65171' | '0000100';

export enum StatisticTypeEnum {
  /** Absolute Median Difference */
  AbsoluteMediandiff = 'absolute-MedianDiff',
  /** Count */
  C25463 = 'C25463',
  /** Covariance */
  _0000301 = '0000301',
  /** Predicted Risk */
  Predictedrisk = 'predictedRisk',
  /** Descriptive */
  Descriptive = 'descriptive',
  /** Hazard Ratio */
  C93150 = 'C93150',
  /** Incidence */
  C16726 = 'C16726',
  /** Incidence Rate Ratio */
  RateRatio = 'rate-ratio',
  /** Maximum */
  C25564 = 'C25564',
  /** Mean */
  C53319 = 'C53319',
  /** Mean Difference */
  _0000457 = '0000457',
  /** Median */
  C28007 = 'C28007',
  /** Minimum */
  C25570 = 'C25570',
  /** Odds Ratio */
  C16932 = 'C16932',
  /** Pearson Correlation Coefficient */
  C65172 = 'C65172',
  /** Prevalence */
  C17010 = 'C17010',
  /** Proportion */
  C44256 = 'C44256',
  /** Regression Coefficient */
  _0000565 = '0000565',
  /** Relative Risk */
  C93152 = 'C93152',
  /** Risk Difference */
  _0000424 = '0000424',
  /** Spearman Rank-Order Correlation  */
  C65171 = 'C65171',
  /** Standardized Mean Difference */
  _0000100 = '0000100',
}

export const StatisticTypeValues = ['absolute-MedianDiff', 'C25463', '0000301', 'predictedRisk', 'descriptive', 'C93150', 'C16726', 'rate-ratio', 'C25564', 'C53319', '0000457', 'C28007', 'C25570', 'C16932', 'C65172', 'C17010', 'C44256', '0000565', 'C93152', '0000424', 'C65171', '0000100'] as const;
