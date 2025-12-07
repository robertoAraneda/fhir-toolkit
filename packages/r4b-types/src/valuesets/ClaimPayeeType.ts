/**
 * PayeeType
 * 
 * This value set includes sample Payee Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/payeetype
 */

export type ClaimPayeeTypeType = 'subscriber' | 'provider' | 'other';

export enum ClaimPayeeTypeEnum {
  /** Subscriber */
  Subscriber = 'subscriber',
  /** Provider */
  Provider = 'provider',
  /** Provider */
  Other = 'other',
}

export const ClaimPayeeTypeValues = ['subscriber', 'provider', 'other'] as const;
