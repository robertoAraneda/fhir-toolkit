/**
 * HumanNameAssemblyOrder
 * 
 * A code that represents the preferred display order of the components of a human name.
 *
 * @see http://hl7.org/fhir/ValueSet/name-assembly-order
 */

export type HumanNameAssemblyOrderType = 'NL1' | 'NL2' | 'NL3' | 'NL4' | 'F' | 'G' | 'UNK';

export enum HumanNameAssemblyOrderEnum {
  /** Own Name */
  Nl1 = 'NL1',
  /** Partner Name */
  Nl2 = 'NL2',
  /** Partner Name followed by Maiden Name */
  Nl3 = 'NL3',
  /** Own Name followed by Partner Name */
  Nl4 = 'NL4',
  /** Prefix Family Given Suffix */
  F = 'F',
  /** Prefix Given Family Suffix */
  G = 'G',
  /** Unknown */
  Unk = 'UNK',
}

export const HumanNameAssemblyOrderValues = ['NL1', 'NL2', 'NL3', 'NL4', 'F', 'G', 'UNK'] as const;
