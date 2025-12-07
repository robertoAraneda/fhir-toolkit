/**
 * Contract Resource Definition Type codes
 * 
 * This value set contract specific codes for status.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-definition-type
 */

export type ContractResourceDefinitionTypeType = 'temp';

export enum ContractResourceDefinitionTypeEnum {
  /** Temporary Value */
  Temp = 'temp',
}

export const ContractResourceDefinitionTypeValues = ['temp'] as const;
