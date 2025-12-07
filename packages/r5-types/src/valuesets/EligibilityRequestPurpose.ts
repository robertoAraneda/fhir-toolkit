/**
 * Eligibility Request Purpose
 * 
 * A code specifying the types of information being requested.
 *
 * @see http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose
 */

export type EligibilityRequestPurposeType = 'auth-requirements' | 'benefits' | 'discovery' | 'validation';

export enum EligibilityRequestPurposeEnum {
  /** Coverage auth-requirements */
  AuthRequirements = 'auth-requirements',
  /** Coverage benefits */
  Benefits = 'benefits',
  /** Coverage Discovery */
  Discovery = 'discovery',
  /** Coverage Validation */
  Validation = 'validation',
}

export const EligibilityRequestPurposeValues = ['auth-requirements', 'benefits', 'discovery', 'validation'] as const;
