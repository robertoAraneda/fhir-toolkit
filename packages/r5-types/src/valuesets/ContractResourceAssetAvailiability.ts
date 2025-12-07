/**
 * Contract Resource Asset Availiability codes
 * 
 * This value set has asset availability codes.
 *
 * @see http://hl7.org/fhir/ValueSet/asset-availability
 */

export type ContractResourceAssetAvailiabilityType = 'lease';

export enum ContractResourceAssetAvailiabilityEnum {
  /** Lease */
  Lease = 'lease',
}

export const ContractResourceAssetAvailiabilityValues = ['lease'] as const;
