/**
 * Device Production Identifier In UDI
 * 
 * Device Production Identifier in UDI
 *
 * @see http://hl7.org/fhir/ValueSet/device-productidentifierinudi
 */

export type DeviceProductionIdentifierInUDIType = 'lot-number' | 'manufactured-date' | 'serial-number' | 'expiration-date' | 'biological-source' | 'software-version';

export enum DeviceProductionIdentifierInUDIEnum {
  /** Lot Number */
  LotNumber = 'lot-number',
  /** Manufactured date */
  ManufacturedDate = 'manufactured-date',
  /** Serial Number */
  SerialNumber = 'serial-number',
  /** Expiration date */
  ExpirationDate = 'expiration-date',
  /** Biological source */
  BiologicalSource = 'biological-source',
  /** Software Version */
  SoftwareVersion = 'software-version',
}

export const DeviceProductionIdentifierInUDIValues = ['lot-number', 'manufactured-date', 'serial-number', 'expiration-date', 'biological-source', 'software-version'] as const;
