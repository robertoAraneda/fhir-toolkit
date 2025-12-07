/**
 * Risk Probability
 * 
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 *
 * @see http://hl7.org/fhir/ValueSet/risk-probability
 */

export type RiskProbabilityType = 'negligible' | 'low' | 'moderate' | 'high' | 'certain';

export enum RiskProbabilityEnum {
  /** Negligible likelihood */
  Negligible = 'negligible',
  /** Low likelihood */
  Low = 'low',
  /** Moderate likelihood */
  Moderate = 'moderate',
  /** High likelihood */
  High = 'high',
  /** Certain */
  Certain = 'certain',
}

export const RiskProbabilityValues = ['negligible', 'low', 'moderate', 'high', 'certain'] as const;
