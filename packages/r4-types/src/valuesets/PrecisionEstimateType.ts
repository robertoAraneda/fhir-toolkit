/**
 * PrecisionEstimateType
 * 
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 *
 * @see http://hl7.org/fhir/ValueSet/precision-estimate-type
 */

export type PrecisionEstimateTypeType = 'CI' | 'IQR' | 'SD' | 'SE';

export enum PrecisionEstimateTypeEnum {
  /** confidence interval */
  Ci = 'CI',
  /** interquartile range */
  Iqr = 'IQR',
  /** standard deviation */
  Sd = 'SD',
  /** standard error */
  Se = 'SE',
}

export const PrecisionEstimateTypeValues = ['CI', 'IQR', 'SD', 'SE'] as const;
