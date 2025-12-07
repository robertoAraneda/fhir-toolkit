/**
 * EvidenceVariantState
 * 
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-variant-state
 */

export type EvidenceVariantStateType = 'low-risk' | 'medium-risk' | 'high-risk';

export enum EvidenceVariantStateEnum {
  /** low risk */
  LowRisk = 'low-risk',
  /** medium risk */
  MediumRisk = 'medium-risk',
  /** high risk */
  HighRisk = 'high-risk',
}

export const EvidenceVariantStateValues = ['low-risk', 'medium-risk', 'high-risk'] as const;
