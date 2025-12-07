/**
 * Missing Tooth Reason Codes
 * 
 * This value set includes sample Missing Tooth Reason codes.
 *
 * @see http://hl7.org/fhir/ValueSet/missing-tooth-reason
 */

export type MissingToothReasonType = 'e' | 'c' | 'u' | 'o';

export enum MissingToothReasonEnum {
  /** E */
  E = 'e',
  /** C */
  C = 'c',
  /** U */
  U = 'u',
  /** O */
  O = 'o',
}

export const MissingToothReasonValues = ['e', 'c', 'u', 'o'] as const;
