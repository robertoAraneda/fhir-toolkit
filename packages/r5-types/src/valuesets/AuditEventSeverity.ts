/**
 * Audit Event Severity
 * 
 * The severity of the audit entry.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-severity
 */

export type AuditEventSeverityType = 'emergency' | 'alert' | 'critical' | 'error' | 'warning' | 'notice' | 'informational' | 'debug';

export enum AuditEventSeverityEnum {
  /** Emergency */
  Emergency = 'emergency',
  /** Alert */
  Alert = 'alert',
  /** Critical */
  Critical = 'critical',
  /** Error */
  Error = 'error',
  /** Warning */
  Warning = 'warning',
  /** Notice */
  Notice = 'notice',
  /** Informational */
  Informational = 'informational',
  /** Debug */
  Debug = 'debug',
}

export const AuditEventSeverityValues = ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'informational', 'debug'] as const;
