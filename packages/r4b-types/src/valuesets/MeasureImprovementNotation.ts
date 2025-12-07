/**
 * MeasureImprovementNotation
 * 
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-improvement-notation
 */

export type MeasureImprovementNotationType = 'increase' | 'decrease';

export enum MeasureImprovementNotationEnum {
  /** Increased score indicates improvement */
  Increase = 'increase',
  /** Decreased score indicates improvement */
  Decrease = 'decrease',
}

export const MeasureImprovementNotationValues = ['increase', 'decrease'] as const;
