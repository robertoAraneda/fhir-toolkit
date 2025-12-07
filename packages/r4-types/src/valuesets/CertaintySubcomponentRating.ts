/**
 * CertaintySubcomponentRating
 * 
 * The quality rating of the subcomponent of a quality of evidence rating.
 *
 * @see http://hl7.org/fhir/ValueSet/certainty-subcomponent-rating
 */

export type CertaintySubcomponentRatingType = 'no-change' | 'downcode1' | 'downcode2' | 'downcode3' | 'upcode1' | 'upcode2' | 'no-concern' | 'serious-concern' | 'critical-concern' | 'present' | 'absent';

export enum CertaintySubcomponentRatingEnum {
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
  /** no serious concern */
  NoConcern = 'no-concern',
  /** serious concern */
  SeriousConcern = 'serious-concern',
  /** critical concern */
  CriticalConcern = 'critical-concern',
  /** present */
  Present = 'present',
  /** absent */
  Absent = 'absent',
}

export const CertaintySubcomponentRatingValues = ['no-change', 'downcode1', 'downcode2', 'downcode3', 'upcode1', 'upcode2', 'no-concern', 'serious-concern', 'critical-concern', 'present', 'absent'] as const;
