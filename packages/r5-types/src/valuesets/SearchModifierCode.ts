/**
 * Search Modifier Code
 * 
 * A supported modifier for a search parameter.
 *
 * @see http://hl7.org/fhir/ValueSet/search-modifier-code
 */

export type SearchModifierCodeType = 'missing' | 'exact' | 'contains' | 'not' | 'text' | 'in' | 'not-in' | 'below' | 'above' | 'type' | 'identifier' | 'of-type' | 'code-text' | 'text-advanced' | 'iterate';

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
  OfType = 'of-type',
  /** Code Text */
  CodeText = 'code-text',
  /** Text Advanced */
  TextAdvanced = 'text-advanced',
  /** Iterate */
  Iterate = 'iterate',
}

export const SearchModifierCodeValues = ['missing', 'exact', 'contains', 'not', 'text', 'in', 'not-in', 'below', 'above', 'type', 'identifier', 'of-type', 'code-text', 'text-advanced', 'iterate'] as const;
