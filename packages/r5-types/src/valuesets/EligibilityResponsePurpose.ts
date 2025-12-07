/**
 * Eligibility Response Purpose
 * 
 * A code specifying the types of information being requested.
 *
 * @see http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose
 */

export type EligibilityResponsePurposeType = 'auth-requirements' | 'benefits' | 'discovery' | 'validation';

export enum EligibilityResponsePurposeEnum {
  /** Coverage auth-requirements */
  AuthRequirements = 'auth-requirements',
  /** Coverage benefits */
  Benefits = 'benefits',
  /** Coverage Discovery */
  Discovery = 'discovery',
  /** Coverage Validation */
  Validation = 'validation',
}

export const EligibilityResponsePurposeValues = ['auth-requirements', 'benefits', 'discovery', 'validation'] as const;
