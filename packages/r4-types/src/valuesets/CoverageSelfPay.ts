/**
 * Coverage SelfPay Codes
 * 
 * This value set includes Coverage SelfPay codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-selfpay
 */

export type CoverageSelfPayType = 'pay';

export enum CoverageSelfPayEnum {
  /** Pay */
  Pay = 'pay',
}

export const CoverageSelfPayValues = ['pay'] as const;
