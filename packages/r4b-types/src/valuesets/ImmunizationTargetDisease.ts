/**
 * Immunization Target Disease Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the disease that the dose is being administered against. This value set is provided as a suggestive example and includes the SNOMED CT concepts from the 64572001 (Disease) hierarchy.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-target-disease
 */

export type ImmunizationTargetDiseaseType = '1857005' | '397430003' | '14189004' | '36989005' | '36653000' | '76902006' | '709410003' | '27836007' | '398102009';

export enum ImmunizationTargetDiseaseEnum {
  _1857005 = '1857005',
  _397430003 = '397430003',
  _14189004 = '14189004',
  _36989005 = '36989005',
  _36653000 = '36653000',
  _76902006 = '76902006',
  _709410003 = '709410003',
  _27836007 = '27836007',
  _398102009 = '398102009',
}

export const ImmunizationTargetDiseaseValues = ['1857005', '397430003', '14189004', '36989005', '36653000', '76902006', '709410003', '27836007', '398102009'] as const;
