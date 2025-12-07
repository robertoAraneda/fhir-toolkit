/**
 * Code Search Support
 * 
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 *
 * @see http://hl7.org/fhir/ValueSet/code-search-support
 */

export type CodeSearchSupportType = 'in-compose' | 'in-expansion' | 'in-compose-or-expansion';

export enum CodeSearchSupportEnum {
  /** In Compose */
  InCompose = 'in-compose',
  /** In Expansion */
  InExpansion = 'in-expansion',
  /** In Compose Or Expansion */
  InComposeOrExpansion = 'in-compose-or-expansion',
}

export const CodeSearchSupportValues = ['in-compose', 'in-expansion', 'in-compose-or-expansion'] as const;
