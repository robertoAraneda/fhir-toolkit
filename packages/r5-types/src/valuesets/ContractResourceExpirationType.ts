/**
 * Contract Resource Expiration Type codes
 * 
 * This value set contract specific codes for status.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-expiration-type
 */

export type ContractResourceExpirationTypeType = 'breach';

export enum ContractResourceExpirationTypeEnum {
  /** Breach */
  Breach = 'breach',
}

export const ContractResourceExpirationTypeValues = ['breach'] as const;
