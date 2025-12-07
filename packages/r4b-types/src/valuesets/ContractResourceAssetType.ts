/**
 * Contract Resource Asset Type codes
 * 
 * This value set contract specific codes for asset type.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-assettype
 */

export type ContractResourceAssetTypeType = 'participation';

export enum ContractResourceAssetTypeEnum {
  /** Participation */
  Participation = 'participation',
}

export const ContractResourceAssetTypeValues = ['participation'] as const;
