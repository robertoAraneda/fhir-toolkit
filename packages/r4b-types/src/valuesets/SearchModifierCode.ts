/**
 * SearchModifierCode
 * 
 * A supported modifier for a search parameter.
 *
 * @see http://hl7.org/fhir/ValueSet/search-modifier-code
 */

export type SearchModifierCodeType = 'missing' | 'exact' | 'contains' | 'not' | 'text' | 'in' | 'not-in' | 'below' | 'above' | 'type' | 'identifier' | 'ofType';

export enum SearchModifierCodeEnum {
  /** Missing */
  Missing = 'missing',
  /** Exact */
  Exact = 'exact',
  /** Contains */
  Contains = 'contains',
  /** Not */
  Not = 'not',
  /** Text */
  Text = 'text',
  /** In */
  In = 'in',
  /** Not In */
  NotIn = 'not-in',
  /** Below */
  Below = 'below',
  /** Above */
  Above = 'above',
  /** Type */
  Type = 'type',
  /** Identifier */
  Identifier = 'identifier',
  /** Of Type */
  Oftype = 'ofType',
}

export const SearchModifierCodeValues = ['missing', 'exact', 'contains', 'not', 'text', 'in', 'not-in', 'below', 'above', 'type', 'identifier', 'ofType'] as const;
