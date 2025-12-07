/**
 * Payment Outcome
 * 
 * The outcome of the processing.
 *
 * @see http://hl7.org/fhir/ValueSet/payment-outcome
 */

export type PaymentOutcomeType = 'queued' | 'complete' | 'error' | 'partial';

export enum PaymentOutcomeEnum {
  /** Queued */
  Queued = 'queued',
  /** Processing Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial Processing */
  Partial = 'partial',
}

export const PaymentOutcomeValues = ['queued', 'complete', 'error', 'partial'] as const;
