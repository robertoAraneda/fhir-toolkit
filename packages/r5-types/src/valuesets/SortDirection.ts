/**
 * SortDirection
 * 
 * The possible sort directions, ascending or descending.
 *
 * @see http://hl7.org/fhir/ValueSet/sort-direction
 */

export type SortDirectionType = 'ascending' | 'descending';

export enum SortDirectionEnum {
  /** Ascending */
  Ascending = 'ascending',
  /** Descending */
  Descending = 'descending',
}

export const SortDirectionValues = ['ascending', 'descending'] as const;
