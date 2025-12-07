/**
 * Device Version Type
 * 
 * Describes the type of version
 *
 * @see http://hl7.org/fhir/ValueSet/device-versiontype
 */

export type DeviceVersionTypeType = '531974' | '531975' | '531976' | '531977' | '532352';

export enum DeviceVersionTypeEnum {
  /** Hardware revision */
  _531974 = '531974',
  /** Software revision */
  _531975 = '531975',
  /** Firmware revision */
  _531976 = '531976',
  /** Protocol revision */
  _531977 = '531977',
  /** Continua version */
  _532352 = '532352',
}

export const DeviceVersionTypeValues = ['531974', '531975', '531976', '531977', '532352'] as const;
