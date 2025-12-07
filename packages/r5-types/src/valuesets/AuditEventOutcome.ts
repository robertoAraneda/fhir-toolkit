/**
 * Audit Event Outcome
 * 
 * Indicates whether the event succeeded or failed.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-outcome
 */

export type AuditEventOutcomeType = 'fatal' | 'error' | 'warning' | 'information' | 'success';

export enum AuditEventOutcomeEnum {
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

export const AuditEventOutcomeValues = ['fatal', 'error', 'warning', 'information', 'success'] as const;
