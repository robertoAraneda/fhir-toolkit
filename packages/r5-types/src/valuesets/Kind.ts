/**
 * Kind
 * 
 * The kind of coverage: insurance, selfpay or other.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-kind
 */

export type KindType = 'insurance' | 'self-pay' | 'other';

export enum KindEnum {
  /** Insurance */
  Insurance = 'insurance',
  /** Self-pay */
  SelfPay = 'self-pay',
  /** Other */
  Other = 'other',
}

export const KindValues = ['insurance', 'self-pay', 'other'] as const;
