/**
 * Payment Status Codes
 * 
 * This value set includes a sample set of Payment Status codes.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-status
 */

export type PaymentStatusType = 'paid' | 'cleared';

export enum PaymentStatusEnum {
  /** Paid */
  Paid = 'paid',
  /** Cleared */
  Cleared = 'cleared',
}

export const PaymentStatusValues = ['paid', 'cleared'] as const;
