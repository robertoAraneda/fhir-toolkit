/**
 * SearchEntryMode
 * 
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 *
 * @see http://hl7.org/fhir/ValueSet/search-entry-mode
 */

export type SearchEntryModeType = 'match' | 'include' | 'outcome';

export enum SearchEntryModeEnum {
  /** Match */
  Match = 'match',
  /** Include */
  Include = 'include',
  /** Outcome */
  Outcome = 'outcome',
}

export const SearchEntryModeValues = ['match', 'include', 'outcome'] as const;
