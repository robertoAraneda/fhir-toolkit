/**
 * UDI Entry Type
 * 
 * Codes to identify how UDI data was entered.
 *
 * @see http://hl7.org/fhir/ValueSet/udi-entry-type
 */

export type UDIEntryTypeType = 'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'electronic-transmission' | 'unknown';

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
  /** Electronic Transmission */
  ElectronicTransmission = 'electronic-transmission',
  /** Unknown */
  Unknown = 'unknown',
}

export const UDIEntryTypeValues = ['barcode', 'rfid', 'manual', 'card', 'self-reported', 'electronic-transmission', 'unknown'] as const;
