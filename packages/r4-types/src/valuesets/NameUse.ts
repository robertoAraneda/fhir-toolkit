/**
 * NameUse
 * 
 * The use of a human name.
 *
 * @see http://hl7.org/fhir/ValueSet/name-use
 */

export type NameUseType = 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';

export enum NameUseEnum {
  /** Usual */
  Usual = 'usual',
  /** Official */
  Official = 'official',
  /** Temp */
  Temp = 'temp',
  /** Nickname */
  Nickname = 'nickname',
  /** Anonymous */
  Anonymous = 'anonymous',
  /** Old */
  Old = 'old',
  /** Name changed for Marriage */
  Maiden = 'maiden',
}

export const NameUseValues = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'] as const;
