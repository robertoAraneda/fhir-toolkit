/**
 * Search Comparator
 * 
 * What Search Comparator Codes are supported in search.
 *
 * @see http://hl7.org/fhir/ValueSet/search-comparator
 */

export type SearchComparatorType = 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';

export enum SearchComparatorEnum {
  /** Equals */
  Eq = 'eq',
  /** Not Equals */
  Ne = 'ne',
  /** Greater Than */
  Gt = 'gt',
  /** Less Than */
  Lt = 'lt',
  /** Greater or Equals */
  Ge = 'ge',
  /** Less of Equal */
  Le = 'le',
  /** Starts After */
  Sa = 'sa',
  /** Ends Before */
  Eb = 'eb',
  /** Approximately */
  Ap = 'ap',
}

export const SearchComparatorValues = ['eq', 'ne', 'gt', 'lt', 'ge', 'le', 'sa', 'eb', 'ap'] as const;
