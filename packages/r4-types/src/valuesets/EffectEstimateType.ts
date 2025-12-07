/**
 * EffectEstimateType
 * 
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 *
 * @see http://hl7.org/fhir/ValueSet/effect-estimate-type
 */

export type EffectEstimateTypeType = 'relative-RR' | 'relative-OR' | 'relative-HR' | 'absolute-ARD' | 'absolute-MeanDiff' | 'absolute-SMD' | 'absolute-MedianDiff';

export enum EffectEstimateTypeEnum {
  /** relative risk */
  RelativeRr = 'relative-RR',
  /** odds ratio */
  RelativeOr = 'relative-OR',
  /** hazard ratio */
  RelativeHr = 'relative-HR',
  /** absolute risk difference */
  AbsoluteArd = 'absolute-ARD',
  /** mean difference */
  AbsoluteMeandiff = 'absolute-MeanDiff',
  /** standardized mean difference */
  AbsoluteSmd = 'absolute-SMD',
  /** median difference */
  AbsoluteMediandiff = 'absolute-MedianDiff',
}

export const EffectEstimateTypeValues = ['relative-RR', 'relative-OR', 'relative-HR', 'absolute-ARD', 'absolute-MeanDiff', 'absolute-SMD', 'absolute-MedianDiff'] as const;
