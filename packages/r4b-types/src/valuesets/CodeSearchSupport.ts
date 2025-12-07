/**
 * CodeSearchSupport
 * 
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 *
 * @see http://hl7.org/fhir/ValueSet/code-search-support
 */

export type CodeSearchSupportType = 'explicit' | 'all';

export enum CodeSearchSupportEnum {
  /** Explicit Codes */
  Explicit = 'explicit',
  /** Implicit Codes */
  All = 'all',
}

export const CodeSearchSupportValues = ['explicit', 'all'] as const;
