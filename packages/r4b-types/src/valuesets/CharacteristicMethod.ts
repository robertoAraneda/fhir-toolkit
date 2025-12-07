/**
 * CharacteristicMethod
 * 
 * The method used to determine the characteristic(s) of the variable.
 *
 * @see http://hl7.org/fhir/ValueSet/characteristic-method
 */

export type CharacteristicMethodType = 'Default';

export enum CharacteristicMethodEnum {
  /** Default */
  Default = 'Default',
}

export const CharacteristicMethodValues = ['Default'] as const;
