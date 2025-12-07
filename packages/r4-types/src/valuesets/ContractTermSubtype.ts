/**
 * Contract Term Subtype Codes
 * 
 * This value set includes sample Contract Term SubType codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-term-subtype
 */

export type ContractTermSubtypeType = 'condition' | 'warranty' | 'innominate';

export enum ContractTermSubtypeEnum {
  /** Condition */
  Condition = 'condition',
  /** Warranty */
  Warranty = 'warranty',
  /** Innominate */
  Innominate = 'innominate',
}

export const ContractTermSubtypeValues = ['condition', 'warranty', 'innominate'] as const;
