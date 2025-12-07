/**
 * IdentifierUse
 * 
 * Identifies the purpose for this identifier, if known .
 *
 * @see http://hl7.org/fhir/ValueSet/identifier-use
 */

export type IdentifierUseType = 'usual' | 'official' | 'temp' | 'secondary' | 'old';

export enum IdentifierUseEnum {
  /** Usual */
  Usual = 'usual',
  /** Official */
  Official = 'official',
  /** Temp */
  Temp = 'temp',
  /** Secondary */
  Secondary = 'secondary',
  /** Old */
  Old = 'old',
}

export const IdentifierUseValues = ['usual', 'official', 'temp', 'secondary', 'old'] as const;
