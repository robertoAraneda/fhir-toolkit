/**
 * AdverseEventSeverity
 * 
 * The severity of the adverse event itself, in direct relation to the subject.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-severity
 */

export type AdverseEventSeverityType = 'mild' | 'moderate' | 'severe';

export enum AdverseEventSeverityEnum {
  /** Mild */
  Mild = 'mild',
  /** Moderate */
  Moderate = 'moderate',
  /** Severe */
  Severe = 'severe',
}

export const AdverseEventSeverityValues = ['mild', 'moderate', 'severe'] as const;
