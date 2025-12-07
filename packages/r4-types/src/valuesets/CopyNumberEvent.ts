/**
 * CopyNumberEvent
 * 
 * Copy Number Event.
 *
 * @see http://hl7.org/fhir/ValueSet/copy-number-event
 */

export type CopyNumberEventType = 'amp' | 'del' | 'lof';

export enum CopyNumberEventEnum {
  /** amplification */
  Amp = 'amp',
  /** deletion */
  Del = 'del',
  /** loss of function */
  Lof = 'lof',
}

export const CopyNumberEventValues = ['amp', 'del', 'lof'] as const;
