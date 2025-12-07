/**
 * Coverage Type and Self-Pay Codes
 * 
 * This value set includes Coverage Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-type
 */

export type CoverageTypeAndSelfPayType = 'pay';

export enum CoverageTypeAndSelfPayEnum {
  /** Pay */
  Pay = 'pay',
}

export const CoverageTypeAndSelfPayValues = ['pay'] as const;
