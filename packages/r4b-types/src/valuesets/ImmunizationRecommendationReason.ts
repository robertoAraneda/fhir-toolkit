/**
 * Immunization Recommendation Reason Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-recommendation-reason
 */

export type ImmunizationRecommendationReasonType = '77176002' | '77386006';

export enum ImmunizationRecommendationReasonEnum {
  _77176002 = '77176002',
  _77386006 = '77386006',
}

export const ImmunizationRecommendationReasonValues = ['77176002', '77386006'] as const;
