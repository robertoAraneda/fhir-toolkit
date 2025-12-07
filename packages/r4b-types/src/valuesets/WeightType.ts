/**
 * WeightType
 * 
 * The type of substance weight measurement.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-weight-type
 */

export type WeightTypeType = 'Exact' | 'Average' | 'WeightAverage';

export enum WeightTypeEnum {
  /** exact */
  Exact = 'Exact',
  /** number average */
  Average = 'Average',
  /** weight average */
  Weightaverage = 'WeightAverage',
}

export const WeightTypeValues = ['Exact', 'Average', 'WeightAverage'] as const;
