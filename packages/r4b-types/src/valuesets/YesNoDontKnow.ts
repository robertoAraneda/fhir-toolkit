/**
 * YesNoDontKnow
 * 
 * For Capturing simple yes-no-don't know answers
 *
 * @see http://hl7.org/fhir/ValueSet/yesnodontknow
 */

export type YesNoDontKnowType = 'Y' | 'N' | 'asked-unknown';

export enum YesNoDontKnowEnum {
  /** Yes */
  Y = 'Y',
  /** No */
  N = 'N',
  /** Don't know */
  AskedUnknown = 'asked-unknown',
}

export const YesNoDontKnowValues = ['Y', 'N', 'asked-unknown'] as const;
