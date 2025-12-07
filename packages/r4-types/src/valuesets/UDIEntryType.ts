/**
 * UDIEntryType
 * 
 * Codes to identify how UDI data was entered.
 *
 * @see http://hl7.org/fhir/ValueSet/udi-entry-type
 */

export type UDIEntryTypeType = 'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown';

export enum UDIEntryTypeEnum {
  /** Barcode */
  Barcode = 'barcode',
  /** RFID */
  Rfid = 'rfid',
  /** Manual */
  Manual = 'manual',
  /** Card */
  Card = 'card',
  /** Self Reported */
  SelfReported = 'self-reported',
  /** Unknown */
  Unknown = 'unknown',
}

export const UDIEntryTypeValues = ['barcode', 'rfid', 'manual', 'card', 'self-reported', 'unknown'] as const;
