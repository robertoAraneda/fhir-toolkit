/**
 * Detected Issue Severity
 * 
 * Indicates the potential degree of impact of the identified issue on the patient.
 *
 * @see http://hl7.org/fhir/ValueSet/detectedissue-severity
 */

export type DetectedIssueSeverityType = 'high' | 'moderate' | 'low';

export enum DetectedIssueSeverityEnum {
  /** High */
  High = 'high',
  /** Moderate */
  Moderate = 'moderate',
  /** Low */
  Low = 'low',
}

export const DetectedIssueSeverityValues = ['high', 'moderate', 'low'] as const;
