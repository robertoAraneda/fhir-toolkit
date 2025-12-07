/**
 * SearchParamType
 * 
 * Data types allowed to be used for search parameters.
 *
 * @see http://hl7.org/fhir/ValueSet/search-param-type
 */

export type SearchParamTypeType = 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';

export enum SearchParamTypeEnum {
  /** Number */
  Number = 'number',
  /** Date/DateTime */
  Date = 'date',
  /** String */
  String = 'string',
  /** Token */
  Token = 'token',
  /** Reference */
  Reference = 'reference',
  /** Composite */
  Composite = 'composite',
  /** Quantity */
  Quantity = 'quantity',
  /** URI */
  Uri = 'uri',
  /** Special */
  Special = 'special',
}

export const SearchParamTypeValues = ['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri', 'special'] as const;
