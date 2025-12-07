/**
 * DeviceDefinitionPropertyCode
 * 
 * Codes for identifying device properties.   This is based upon IEEE/HCD specified codes.
 *
 * @see http://hl7.org/fhir/ValueSet/device-component-property
 */

export type DeviceDefinitionPropertyCodeType = '68219' | '68220' | '68221' | '68222' | '68223' | '68224' | '68226' | '532353' | '532354' | '532355';

export enum DeviceDefinitionPropertyCodeEnum {
  /** MDC_TIME_CAP_STATE */
  _68219 = '68219',
  /** MDC_TIME_SYNC_PROTOCOL */
  _68220 = '68220',
  /** MDC_TIME_SYNC_ACCURACY */
  _68221 = '68221',
  /** MDC_TIME_RES_ABS */
  _68222 = '68222',
  /** MDC_TIME_RES_REL */
  _68223 = '68223',
  /** MDC_TIME_RES_REL_HI_RES */
  _68224 = '68224',
  /** MDC_TIME_RES_BO */
  _68226 = '68226',
  /** MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST */
  _532353 = '532353',
  /** MDC_REG_CERT_DATA_CONTINUA_REG_STATUS */
  _532354 = '532354',
  /** MDC_REG_CERT_DATA_CONTINUA_PHG_CERT_LIST */
  _532355 = '532355',
}

export const DeviceDefinitionPropertyCodeValues = ['68219', '68220', '68221', '68222', '68223', '68224', '68226', '532353', '532354', '532355'] as const;
