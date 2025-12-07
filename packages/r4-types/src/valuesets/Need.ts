/**
 * Need
 * 
 * The frequency with which the target must be validated
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-need
 */

export type NeedType = 'none' | 'initial' | 'periodic';

export enum NeedEnum {
  /** None */
  None = 'none',
  /** Initial */
  Initial = 'initial',
  /** Periodic */
  Periodic = 'periodic',
}

export const NeedValues = ['none', 'initial', 'periodic'] as const;
