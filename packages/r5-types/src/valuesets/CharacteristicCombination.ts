/**
 * Characteristic Combination
 * 
 * Logical grouping of characteristics.
 *
 * @see http://hl7.org/fhir/ValueSet/characteristic-combination
 */

export type CharacteristicCombinationType = 'all-of' | 'any-of' | 'at-least' | 'at-most' | 'statistical' | 'net-effect' | 'dataset';

export enum CharacteristicCombinationEnum {
  /** All of */
  AllOf = 'all-of',
  /** Any of */
  AnyOf = 'any-of',
  /** At least */
  AtLeast = 'at-least',
  /** At most */
  AtMost = 'at-most',
  /** Statistical */
  Statistical = 'statistical',
  /** Net effect */
  NetEffect = 'net-effect',
  /** Dataset */
  Dataset = 'dataset',
}

export const CharacteristicCombinationValues = ['all-of', 'any-of', 'at-least', 'at-most', 'statistical', 'net-effect', 'dataset'] as const;
