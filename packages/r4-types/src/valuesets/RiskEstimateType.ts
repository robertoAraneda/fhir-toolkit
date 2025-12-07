/**
 * RiskEstimateType
 * 
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 *
 * @see http://hl7.org/fhir/ValueSet/risk-estimate-type
 */

export type RiskEstimateTypeType = 'proportion' | 'derivedProportion' | 'mean' | 'median' | 'count' | 'descriptive';

export enum RiskEstimateTypeEnum {
  /** proportion */
  Proportion = 'proportion',
  /** derivedProportion */
  Derivedproportion = 'derivedProportion',
  /** mean */
  Mean = 'mean',
  /** median */
  Median = 'median',
  /** count */
  Count = 'count',
  /** descriptive */
  Descriptive = 'descriptive',
}

export const RiskEstimateTypeValues = ['proportion', 'derivedProportion', 'mean', 'median', 'count', 'descriptive'] as const;
