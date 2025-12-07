/**
 * StrengthOfRecommendationRating
 * 
 * A rating system that describes the strength of the recommendation, such as the GRADE, DynaMed, or HGPS systems.
 *
 * @see http://hl7.org/fhir/ValueSet/recommendation-strength
 */

export type StrengthOfRecommendationRatingType = 'strong' | 'weak';

export enum StrengthOfRecommendationRatingEnum {
  /** Strong */
  Strong = 'strong',
  /** Weak */
  Weak = 'weak',
}

export const StrengthOfRecommendationRatingValues = ['strong', 'weak'] as const;
