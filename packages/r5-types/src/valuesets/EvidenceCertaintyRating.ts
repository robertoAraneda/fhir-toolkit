/**
 * Evidence Certainty Rating
 * 
 * The assessment of quality, confidence, or certainty.
 *
 * @see http://hl7.org/fhir/ValueSet/certainty-rating
 */

export type EvidenceCertaintyRatingType = 'high' | 'moderate' | 'low' | 'very-low' | 'no-concern' | 'serious-concern' | 'very-serious-concern' | 'extremely-serious-concern' | 'present' | 'absent' | 'no-change' | 'downcode1' | 'downcode2' | 'downcode3' | 'upcode1' | 'upcode2';

export enum EvidenceCertaintyRatingEnum {
  /** High quality */
  High = 'high',
  /** Moderate quality */
  Moderate = 'moderate',
  /** Low quality */
  Low = 'low',
  /** Very low quality */
  VeryLow = 'very-low',
  /** no serious concern */
  NoConcern = 'no-concern',
  /** serious concern */
  SeriousConcern = 'serious-concern',
  /** very serious concern */
  VerySeriousConcern = 'very-serious-concern',
  /** extremely serious concern */
  ExtremelySeriousConcern = 'extremely-serious-concern',
  /** present */
  Present = 'present',
  /** absent */
  Absent = 'absent',
  /** no change to rating */
  NoChange = 'no-change',
  /** reduce rating: -1 */
  Downcode1 = 'downcode1',
  /** reduce rating: -2 */
  Downcode2 = 'downcode2',
  /** reduce rating: -3 */
  Downcode3 = 'downcode3',
  /** increase rating: +1 */
  Upcode1 = 'upcode1',
  /** increase rating: +2 */
  Upcode2 = 'upcode2',
}

export const EvidenceCertaintyRatingValues = ['high', 'moderate', 'low', 'very-low', 'no-concern', 'serious-concern', 'very-serious-concern', 'extremely-serious-concern', 'present', 'absent', 'no-change', 'downcode1', 'downcode2', 'downcode3', 'upcode1', 'upcode2'] as const;
