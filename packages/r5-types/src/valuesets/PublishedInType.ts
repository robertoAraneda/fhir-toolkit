/**
 * Published In Type
 * 
 * The type of publication such as book, database, or journal.
 *
 * @see http://hl7.org/fhir/ValueSet/published-in-type
 */

export type PublishedInTypeType = 'D020492' | 'D019991' | 'D001877' | 'D064886';

export enum PublishedInTypeEnum {
  /** Periodical */
  D020492 = 'D020492',
  /** Database */
  D019991 = 'D019991',
  /** Book */
  D001877 = 'D001877',
  /** Dataset */
  D064886 = 'D064886',
}

export const PublishedInTypeValues = ['D020492', 'D019991', 'D001877', 'D064886'] as const;
