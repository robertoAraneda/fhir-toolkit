/**
 * Example Payment Type Codes
 * 
 * This value set includes example Payment Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-paymenttype
 */

export type ExamplePaymentTypeType = 'complete' | 'partial';

export enum ExamplePaymentTypeEnum {
  /** Complete */
  Complete = 'complete',
  /** Partial */
  Partial = 'partial',
}

export const ExamplePaymentTypeValues = ['complete', 'partial'] as const;
