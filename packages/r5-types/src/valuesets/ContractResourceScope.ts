/**
 * Contract Resource Scope codes
 * 
 * This value set contract specific codes for security classification.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-security-classification
 */

export type ContractResourceScopeType = 'policy';

export enum ContractResourceScopeEnum {
  /** Policy */
  Policy = 'policy',
}

export const ContractResourceScopeValues = ['policy'] as const;
