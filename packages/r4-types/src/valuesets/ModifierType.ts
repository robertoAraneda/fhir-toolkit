/**
 * Modifier type Codes
 * 
 * This value set includes sample Modifier type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-modifiers
 */

export type ModifierTypeType = 'a' | 'b' | 'c' | 'e' | 'rooh' | 'x';

export enum ModifierTypeEnum {
  /** Repair of prior service or installation */
  A = 'a',
  /** Temporary service or installation */
  B = 'b',
  /** TMJ treatment */
  C = 'c',
  /** Implant or associated with an implant */
  E = 'e',
  /** Rush or Outside of office hours */
  Rooh = 'rooh',
  /** None */
  X = 'x',
}

export const ModifierTypeValues = ['a', 'b', 'c', 'e', 'rooh', 'x'] as const;
