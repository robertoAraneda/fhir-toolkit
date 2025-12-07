/**
 * ChargeItemCode
 * 
 * Example set of codes that can be used for billing purposes.
 *
 * @see http://hl7.org/fhir/ValueSet/chargeitem-billingcodes
 */

export type ChargeItemCodeType = '1100' | '1210' | '1320';

export enum ChargeItemCodeEnum {
  /** Unvorhergesehene Inanspruchnahme */
  _1100 = '1100',
  /** Notfallpauschale */
  _1210 = '1210',
  /** Grundpauschale */
  _1320 = '1320',
}

export const ChargeItemCodeValues = ['1100', '1210', '1320'] as const;
