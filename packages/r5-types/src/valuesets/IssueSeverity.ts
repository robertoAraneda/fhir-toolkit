/**
 * Issue Severity
 * 
 * How the issue affects the success of the action.
 *
 * @see http://hl7.org/fhir/ValueSet/issue-severity
 */

export type IssueSeverityType = 'fatal' | 'error' | 'warning' | 'information' | 'success';

export enum IssueSeverityEnum {
  /** Fatal */
  Fatal = 'fatal',
  /** Error */
  Error = 'error',
  /** Warning */
  Warning = 'warning',
  /** Information */
  Information = 'information',
  /** Operation Successful */
  Success = 'success',
}

export const IssueSeverityValues = ['fatal', 'error', 'warning', 'information', 'success'] as const;
