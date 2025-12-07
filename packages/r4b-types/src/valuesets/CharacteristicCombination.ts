/**
 * CharacteristicCombination
 * 
 * Logical grouping of characteristics.
 *
 * @see http://hl7.org/fhir/ValueSet/characteristic-combination
 */

export type CharacteristicCombinationType = 'intersection' | 'union';

export enum CharacteristicCombinationEnum {
  /** intersection */
  Intersection = 'intersection',
  /** union */
  Union = 'union',
}

export const CharacteristicCombinationValues = ['intersection', 'union'] as const;
