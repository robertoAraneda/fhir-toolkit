/**
 * Payment Adjustment Reason Codes
 * 
 * This value set includes smattering of Payment Adjustment Reason codes.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-adjustment-reason
 */

export type PaymentAdjustmentReasonType = 'a001' | 'a002';

export enum PaymentAdjustmentReasonEnum {
  /** Prior Payment Reversal */
  A001 = 'a001',
  /** Prior Overpayment */
  A002 = 'a002',
}

export const PaymentAdjustmentReasonValues = ['a001', 'a002'] as const;
