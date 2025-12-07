/**
 * Immunization Program Eligibility
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-program-eligibility
 */

export type ImmunizationProgramEligibilityType = 'ineligible' | 'uninsured';

export enum ImmunizationProgramEligibilityEnum {
  /** Not Eligible */
  Ineligible = 'ineligible',
  /** Uninsured */
  Uninsured = 'uninsured',
}

export const ImmunizationProgramEligibilityValues = ['ineligible', 'uninsured'] as const;
