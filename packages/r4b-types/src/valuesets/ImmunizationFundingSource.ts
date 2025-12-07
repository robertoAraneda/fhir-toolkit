/**
 * Immunization Funding Source
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-funding-source
 */

export type ImmunizationFundingSourceType = 'private' | 'public';

export enum ImmunizationFundingSourceEnum {
  /** Private */
  Private = 'private',
  /** Public */
  Public = 'public',
}

export const ImmunizationFundingSourceValues = ['private', 'public'] as const;
