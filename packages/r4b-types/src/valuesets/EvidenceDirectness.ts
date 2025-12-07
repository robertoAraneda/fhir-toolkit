/**
 * EvidenceDirectness
 * 
 * The quality of how direct the match is.
 *
 * @see http://hl7.org/fhir/ValueSet/directness
 */

export type EvidenceDirectnessType = 'low' | 'moderate' | 'high' | 'exact';

export enum EvidenceDirectnessEnum {
  /** Low quality match between observed and intended variable */
  Low = 'low',
  /** Moderate quality match between observed and intended variable */
  Moderate = 'moderate',
  /** High quality match between observed and intended variable */
  High = 'high',
  /** Exact match between observed and intended variable */
  Exact = 'exact',
}

export const EvidenceDirectnessValues = ['low', 'moderate', 'high', 'exact'] as const;
