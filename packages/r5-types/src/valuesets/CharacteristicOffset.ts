/**
 * Characteristic Offset
 * 
 * Reference point for characteristic.valueQuantity.
 *
 * @see http://hl7.org/fhir/ValueSet/characteristic-offset
 */

export type CharacteristicOffsetType = 'UNL' | 'LNL';

export enum CharacteristicOffsetEnum {
  /** Upper Normal Limit */
  Unl = 'UNL',
  /** Lower Normal Limit */
  Lnl = 'LNL',
}

export const CharacteristicOffsetValues = ['UNL', 'LNL'] as const;
