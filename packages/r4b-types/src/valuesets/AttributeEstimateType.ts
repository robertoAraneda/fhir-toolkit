/**
 * AttributeEstimateType
 * 
 * A statistic about a statistic, e.g.  Confidence interval or p-value
 *
 * @see http://hl7.org/fhir/ValueSet/attribute-estimate-type
 */

export type AttributeEstimateTypeType = '0000419' | 'C53324' | '0000455' | '0000420' | 'C53245' | 'C44185' | 'C38013' | 'C53322' | '0000037' | '0000421' | 'C48918';

export enum AttributeEstimateTypeEnum {
  /** Cochran's Q statistic */
  _0000419 = '0000419',
  /** Confidence interval */
  C53324 = 'C53324',
  /** Credible interval */
  _0000455 = '0000455',
  /** I-squared */
  _0000420 = '0000420',
  /** Interquartile range */
  C53245 = 'C53245',
  /** P-value */
  C44185 = 'C44185',
  /** Range */
  C38013 = 'C38013',
  /** Standard deviation */
  C53322 = 'C53322',
  /** Standard error of the mean */
  _0000037 = '0000037',
  /** Tau squared */
  _0000421 = '0000421',
  /** Variance */
  C48918 = 'C48918',
}

export const AttributeEstimateTypeValues = ['0000419', 'C53324', '0000455', '0000420', 'C53245', 'C44185', 'C38013', 'C53322', '0000037', '0000421', 'C48918'] as const;
