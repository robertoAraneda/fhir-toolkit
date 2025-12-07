/**
 * Payment Kind
 * 
 *  The type of workflow from which this payment arose.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-kind
 */

export type PaymentKindType = 'deposit' | 'periodic-payment' | 'online' | 'kiosk';

export enum PaymentKindEnum {
  /** Deposit on Account */
  Deposit = 'deposit',
  /** Periodic Payment */
  PeriodicPayment = 'periodic-payment',
  /** Online Bill Payment */
  Online = 'online',
  /** Kiosk Payment */
  Kiosk = 'kiosk',
}

export const PaymentKindValues = ['deposit', 'periodic-payment', 'online', 'kiosk'] as const;
