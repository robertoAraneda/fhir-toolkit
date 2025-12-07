/**
 * Codes for Immunization Site of Administration
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the body site where the vaccination occurred. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-site
 */

export type CodesForImmunizationSiteOfAdministrationType = 'LA' | 'RA';

export enum CodesForImmunizationSiteOfAdministrationEnum {
  /** Left arm */
  La = 'LA',
  /** Right arm */
  Ra = 'RA',
}

export const CodesForImmunizationSiteOfAdministrationValues = ['LA', 'RA'] as const;
