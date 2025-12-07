/**
 * Payment Type Codes
 * 
 * This value set includes sample Payment Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-type
 */

export type PaymentTypeType = 'payment' | 'adjustment' | 'advance';

export enum PaymentTypeEnum {
  /** Payment */
  Payment = 'payment',
  /** Adjustment */
  Adjustment = 'adjustment',
  /** Advance */
  Advance = 'advance',
}

export const PaymentTypeValues = ['payment', 'adjustment', 'advance'] as const;
