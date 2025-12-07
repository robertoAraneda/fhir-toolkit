/**
 * Contract Resource Asset Context codes
 * 
 * This value set contract specific codes for asset context.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-assetcontext
 */

export type ContractResourceAssetContextType = 'custodian';

export enum ContractResourceAssetContextEnum {
  /** Custodian */
  Custodian = 'custodian',
}

export const ContractResourceAssetContextValues = ['custodian'] as const;
