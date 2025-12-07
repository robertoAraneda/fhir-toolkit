/**
 * Search Processing Mode Type
 * 
 * How a search parameter relates to the set of elements returned by evaluating its expression query.
 *
 * @see http://hl7.org/fhir/ValueSet/search-processingmode
 */

export type SearchProcessingModeTypeType = 'normal' | 'phonetic' | 'other';

export enum SearchProcessingModeTypeEnum {
  /** Normal */
  Normal = 'normal',
  /** Phonetic */
  Phonetic = 'phonetic',
  /** Other */
  Other = 'other',
}

export const SearchProcessingModeTypeValues = ['normal', 'phonetic', 'other'] as const;
