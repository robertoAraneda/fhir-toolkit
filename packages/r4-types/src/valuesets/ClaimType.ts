/**
 * Claim Type Codes
 * 
 * This value set includes Claim Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-type
 */

export type ClaimTypeType = 'institutional' | 'oral' | 'pharmacy' | 'professional' | 'vision';

export enum ClaimTypeEnum {
  /** Institutional */
  Institutional = 'institutional',
  /** Oral */
  Oral = 'oral',
  /** Pharmacy */
  Pharmacy = 'pharmacy',
  /** Professional */
  Professional = 'professional',
  /** Vision */
  Vision = 'vision',
}

export const ClaimTypeValues = ['institutional', 'oral', 'pharmacy', 'professional', 'vision'] as const;
