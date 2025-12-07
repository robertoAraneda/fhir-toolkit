/**
 * IssueSeverity
 * 
 * How the issue affects the success of the action.
 *
 * @see http://hl7.org/fhir/ValueSet/issue-severity
 */

export type IssueSeverityType = 'fatal' | 'error' | 'warning' | 'information';

export enum IssueSeverityEnum {
  /** Fatal */
  Fatal = 'fatal',
  /** Error */
  Error = 'error',
  /** Warning */
  Warning = 'warning',
  /** Information */
  Information = 'information',
}

export const IssueSeverityValues = ['fatal', 'error', 'warning', 'information'] as const;
