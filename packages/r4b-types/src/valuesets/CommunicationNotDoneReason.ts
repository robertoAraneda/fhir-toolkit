/**
 * CommunicationNotDoneReason
 * 
 * Codes for the reason why a communication did not happen.
 *
 * @see http://hl7.org/fhir/ValueSet/communication-not-done-reason
 */

export type CommunicationNotDoneReasonType = 'unknown' | 'system-error' | 'invalid-phone-number' | 'recipient-unavailable' | 'family-objection' | 'patient-objection';

export enum CommunicationNotDoneReasonEnum {
  /** Unknown */
  Unknown = 'unknown',
  /** System Error */
  SystemError = 'system-error',
  /** Invalid Phone Number */
  InvalidPhoneNumber = 'invalid-phone-number',
  /** Recipient Unavailable */
  RecipientUnavailable = 'recipient-unavailable',
  /** Family Objection */
  FamilyObjection = 'family-objection',
  /** Patient Objection */
  PatientObjection = 'patient-objection',
}

export const CommunicationNotDoneReasonValues = ['unknown', 'system-error', 'invalid-phone-number', 'recipient-unavailable', 'family-objection', 'patient-objection'] as const;
