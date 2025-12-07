/**
 * Contract Type Codes
 * 
 * This value set includes sample Contract Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-type
 */

export type ContractTypeType = 'privacy' | 'disclosure' | 'healthinsurance' | 'supply' | 'consent';

export enum ContractTypeEnum {
  /** Privacy */
  Privacy = 'privacy',
  /** Disclosure */
  Disclosure = 'disclosure',
  /** Health Insurance */
  Healthinsurance = 'healthinsurance',
  /** Supply Contract */
  Supply = 'supply',
  /** Consent */
  Consent = 'consent',
}

export const ContractTypeValues = ['privacy', 'disclosure', 'healthinsurance', 'supply', 'consent'] as const;
