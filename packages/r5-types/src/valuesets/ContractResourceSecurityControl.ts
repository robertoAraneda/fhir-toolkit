/**
 * Contract Resource Security Control codes
 * 
 * This value set contract specific codes for security control.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-security-control
 */

export type ContractResourceSecurityControlType = 'policy';

export enum ContractResourceSecurityControlEnum {
  /** Policy */
  Policy = 'policy',
}

export const ContractResourceSecurityControlValues = ['policy'] as const;
