/**
 * Contract Resource Decision Mode codes
 * 
 * This value set contract specific codes for decision modes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-decision-mode
 */

export type ContractResourceDecisionModeType = 'policy';

export enum ContractResourceDecisionModeEnum {
  /** Policy */
  Policy = 'policy',
}

export const ContractResourceDecisionModeValues = ['policy'] as const;
