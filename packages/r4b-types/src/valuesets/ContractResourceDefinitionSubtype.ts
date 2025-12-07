/**
 * Contract Resource Definition Subtype codes
 * 
 * This value set contract specific codes for status.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-definition-subtype
 */

export type ContractResourceDefinitionSubtypeType = 'temp';

export enum ContractResourceDefinitionSubtypeEnum {
  /** Temporary Value */
  Temp = 'temp',
}

export const ContractResourceDefinitionSubtypeValues = ['temp'] as const;
