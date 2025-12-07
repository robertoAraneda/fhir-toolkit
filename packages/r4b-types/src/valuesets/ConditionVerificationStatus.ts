/**
 * ConditionVerificationStatus
 * 
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-ver-status
 */

export type ConditionVerificationStatusType = 'unconfirmed' | 'provisional' | 'differential' | 'confirmed' | 'refuted' | 'entered-in-error';

export enum ConditionVerificationStatusEnum {
  /** Unconfirmed */
  Unconfirmed = 'unconfirmed',
  /** Provisional */
  Provisional = 'provisional',
  /** Differential */
  Differential = 'differential',
  /** Confirmed */
  Confirmed = 'confirmed',
  /** Refuted */
  Refuted = 'refuted',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const ConditionVerificationStatusValues = ['unconfirmed', 'provisional', 'differential', 'confirmed', 'refuted', 'entered-in-error'] as const;
