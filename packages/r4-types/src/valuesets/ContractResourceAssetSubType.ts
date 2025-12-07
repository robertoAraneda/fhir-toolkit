/**
 * Contract Resource Asset Sub-Type codes
 * 
 * This value set contract specific codes for asset subtype.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-assetsubtype
 */

export type ContractResourceAssetSubTypeType = 'participation';

export enum ContractResourceAssetSubTypeEnum {
  /** Participation */
  Participation = 'participation',
}

export const ContractResourceAssetSubTypeValues = ['participation'] as const;
