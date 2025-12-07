/**
 * Benefit cost applicability
 * 
 * Whether the cost applies to in-network or out-of-network providers.
 *
 * @see http://hl7.org/fhir/ValueSet/insuranceplan-applicability
 */

export type BenefitCostApplicabilityType = 'in-network' | 'out-of-network' | 'other';

export enum BenefitCostApplicabilityEnum {
  /** In Network */
  InNetwork = 'in-network',
  /** Out of Network */
  OutOfNetwork = 'out-of-network',
  /** Other */
  Other = 'other',
}

export const BenefitCostApplicabilityValues = ['in-network', 'out-of-network', 'other'] as const;
