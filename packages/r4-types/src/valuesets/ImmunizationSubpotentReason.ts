/**
 * Immunization Subpotent Reason
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-subpotent-reason
 */

export type ImmunizationSubpotentReasonType = 'partial' | 'coldchainbreak' | 'recall';

export enum ImmunizationSubpotentReasonEnum {
  /** Partial Dose */
  Partial = 'partial',
  /** Cold Chain Break */
  Coldchainbreak = 'coldchainbreak',
  /** Manufacturer Recall */
  Recall = 'recall',
}

export const ImmunizationSubpotentReasonValues = ['partial', 'coldchainbreak', 'recall'] as const;
