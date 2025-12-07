/**
 * ConstraintSeverity
 * 
 * SHALL applications comply with this constraint?
 *
 * @see http://hl7.org/fhir/ValueSet/constraint-severity
 */

export type ConstraintSeverityType = 'error' | 'warning';

export enum ConstraintSeverityEnum {
  /** Error */
  Error = 'error',
  /** Warning */
  Warning = 'warning',
}

export const ConstraintSeverityValues = ['error', 'warning'] as const;
