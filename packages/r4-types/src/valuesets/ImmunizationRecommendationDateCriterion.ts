/**
 * Immunization Recommendation Date Criterion Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support the definition of dates relevant to recommendations for future doses of vaccines. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion
 */

export type ImmunizationRecommendationDateCriterionType = '30981-5' | '30980-7' | '59777-3' | '59778-1';

export enum ImmunizationRecommendationDateCriterionEnum {
  _309815 = '30981-5',
  _309807 = '30980-7',
  _597773 = '59777-3',
  _597781 = '59778-1',
}

export const ImmunizationRecommendationDateCriterionValues = ['30981-5', '30980-7', '59777-3', '59778-1'] as const;
