/**
 * XPathUsageType
 * 
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 *
 * @see http://hl7.org/fhir/ValueSet/search-xpath-usage
 */

export type XPathUsageTypeType = 'normal' | 'phonetic' | 'nearby' | 'distance' | 'other';

export enum XPathUsageTypeEnum {
  /** Normal */
  Normal = 'normal',
  /** Phonetic */
  Phonetic = 'phonetic',
  /** Nearby */
  Nearby = 'nearby',
  /** Distance */
  Distance = 'distance',
  /** Other */
  Other = 'other',
}

export const XPathUsageTypeValues = ['normal', 'phonetic', 'nearby', 'distance', 'other'] as const;
