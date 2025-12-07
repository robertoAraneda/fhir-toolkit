/**
 * Action Reason Code
 * 
 * Provides examples of reasons for actions to be performed.
 *
 * @see http://hl7.org/fhir/ValueSet/action-reason-code
 */

export type ActionReasonCodeType = 'off-pathway' | 'risk-assessment' | 'care-gap' | 'drug-drug-interaction' | 'quality-measure';

export enum ActionReasonCodeEnum {
  /** Off pathway */
  OffPathway = 'off-pathway',
  /** Risk assessment */
  RiskAssessment = 'risk-assessment',
  /** Care gap detected */
  CareGap = 'care-gap',
  /** Drug-drug interaction */
  DrugDrugInteraction = 'drug-drug-interaction',
  /** Quality measure */
  QualityMeasure = 'quality-measure',
}

export const ActionReasonCodeValues = ['off-pathway', 'risk-assessment', 'care-gap', 'drug-drug-interaction', 'quality-measure'] as const;
