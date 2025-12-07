/**
 * Consent Data Meaning
 * 
 * How a resource reference is interpreted when testing consent restrictions.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-data-meaning
 */

export type ConsentDataMeaningType = 'instance' | 'related' | 'dependents' | 'authoredby';

export enum ConsentDataMeaningEnum {
  /** Instance */
  Instance = 'instance',
  /** Related */
  Related = 'related',
  /** Dependents */
  Dependents = 'dependents',
  /** AuthoredBy */
  Authoredby = 'authoredby',
}

export const ConsentDataMeaningValues = ['instance', 'related', 'dependents', 'authoredby'] as const;
