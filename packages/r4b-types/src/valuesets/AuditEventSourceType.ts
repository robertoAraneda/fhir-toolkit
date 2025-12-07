/**
 * Audit Event Source Type
 * 
 * The type of process where the audit event originated from.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-source-type
 */

export type AuditEventSourceTypeType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export enum AuditEventSourceTypeEnum {
  /** User Device */
  _1 = '1',
  /** Data Interface */
  _2 = '2',
  /** Web Server */
  _3 = '3',
  /** Application Server */
  _4 = '4',
  /** Database Server */
  _5 = '5',
  /** Security Server */
  _6 = '6',
  /** Network Device */
  _7 = '7',
  /** Network Router */
  _8 = '8',
  /** Other */
  _9 = '9',
}

export const AuditEventSourceTypeValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
