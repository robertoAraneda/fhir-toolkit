/**
 * Contract Resource Asset Scope codes
 * 
 * This value set contract specific codes for asset scope.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-assetscope
 */

export type ContractResourceAssetScopeType = 'thing';

export enum ContractResourceAssetScopeEnum {
  /** Thing */
  Thing = 'thing',
}

export const ContractResourceAssetScopeValues = ['thing'] as const;
