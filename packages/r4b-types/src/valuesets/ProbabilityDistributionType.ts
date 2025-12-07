/**
 * ProbabilityDistributionType
 * 
 * Codes specifying the type of probability distribution.
 *
 * @see http://hl7.org/fhir/ValueSet/probability-distribution-type
 */

export type ProbabilityDistributionTypeType = 'B' | 'E' | 'F' | 'G' | 'LN' | 'N' | 'T' | 'U' | 'X2';

export enum ProbabilityDistributionTypeEnum {
  /** beta */
  B = 'B',
  /** exponential */
  E = 'E',
  /** F */
  F = 'F',
  /** (gamma) */
  G = 'G',
  /** log-normal */
  Ln = 'LN',
  /** normal (Gaussian) */
  N = 'N',
  /** T */
  T = 'T',
  /** uniform */
  U = 'U',
  /** chi square */
  X2 = 'X2',
}

export const ProbabilityDistributionTypeValues = ['B', 'E', 'F', 'G', 'LN', 'N', 'T', 'U', 'X2'] as const;
