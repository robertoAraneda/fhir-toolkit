/**
 * Audit Event Source Type
 * 
 * The type of process where the audit event originated from. Use of these codes is not required but is encouraged to maintain translation with DICOM AuditMessage schema.
 *
 * @see http://hl7.org/fhir/ValueSet/security-source-type
 */

export type AuditEventSourceTypeType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export enum AuditEventSourceTypeEnum {
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
}

export const AuditEventSourceTypeValues = ['1', '2', '3', '4', '5', '6', '7', '8'] as const;
