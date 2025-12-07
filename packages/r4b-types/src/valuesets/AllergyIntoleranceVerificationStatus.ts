/**
 * AllergyIntolerance Verification Status Codes
 * 
 * Preferred value set for AllergyIntolerance Verification Status.
 *
 * @see http://hl7.org/fhir/ValueSet/allergyintolerance-verification
 */

export type AllergyIntoleranceVerificationStatusType = 'unconfirmed' | 'confirmed' | 'refuted' | 'entered-in-error';

export enum AllergyIntoleranceVerificationStatusEnum {
  /** Unconfirmed */
  Unconfirmed = 'unconfirmed',
  /** Confirmed */
  Confirmed = 'confirmed',
  /** Refuted */
  Refuted = 'refuted',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const AllergyIntoleranceVerificationStatusValues = ['unconfirmed', 'confirmed', 'refuted', 'entered-in-error'] as const;
