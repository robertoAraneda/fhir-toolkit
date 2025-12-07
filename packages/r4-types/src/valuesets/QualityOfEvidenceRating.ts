/**
 * QualityOfEvidenceRating
 * 
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-quality
 */

export type QualityOfEvidenceRatingType = 'high' | 'moderate' | 'low' | 'very-low';

export enum QualityOfEvidenceRatingEnum {
  /** High quality */
  High = 'high',
  /** Moderate quality */
  Moderate = 'moderate',
  /** Low quality */
  Low = 'low',
  /** Very low quality */
  VeryLow = 'very-low',
}

export const QualityOfEvidenceRatingValues = ['high', 'moderate', 'low', 'very-low'] as const;
