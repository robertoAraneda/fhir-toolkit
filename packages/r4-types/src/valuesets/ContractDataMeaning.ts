/**
 * ContractDataMeaning
 * 
 * How a resource reference is interpreted when evaluating contract offers.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-data-meaning
 */

export type ContractDataMeaningType = 'instance' | 'related' | 'dependents' | 'authoredby';

export enum ContractDataMeaningEnum {
  /** Instance */
  Instance = 'instance',
  /** Related */
  Related = 'related',
  /** Dependents */
  Dependents = 'dependents',
  /** AuthoredBy */
  Authoredby = 'authoredby',
}

export const ContractDataMeaningValues = ['instance', 'related', 'dependents', 'authoredby'] as const;
