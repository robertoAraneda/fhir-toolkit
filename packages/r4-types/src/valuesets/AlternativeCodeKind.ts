/**
 * AlternativeCodeKind
 * 
 * Indicates the type of use for which the code is defined.
 *
 * @see http://hl7.org/fhir/ValueSet/codesystem-altcode-kind
 */

export type AlternativeCodeKindType = 'alternate' | 'deprecated' | 'case-insensitive' | 'case-sensitive' | 'expression';

export enum AlternativeCodeKindEnum {
  /** Alternate Code */
  Alternate = 'alternate',
  /** Deprecated */
  Deprecated = 'deprecated',
  /** Case Insensitive */
  CaseInsensitive = 'case-insensitive',
  /** Case Sensitive */
  CaseSensitive = 'case-sensitive',
  /** Expression */
  Expression = 'expression',
}

export const AlternativeCodeKindValues = ['alternate', 'deprecated', 'case-insensitive', 'case-sensitive', 'expression'] as const;
