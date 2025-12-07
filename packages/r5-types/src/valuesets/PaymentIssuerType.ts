/**
 * Payment Issuer Type
 * 
 *  The type of payment issuer.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-issuertype
 */

export type PaymentIssuerTypeType = 'patient' | 'insurance';

export enum PaymentIssuerTypeEnum {
  /** Patient */
  Patient = 'patient',
  /** Insurance */
  Insurance = 'insurance',
}

export const PaymentIssuerTypeValues = ['patient', 'insurance'] as const;
