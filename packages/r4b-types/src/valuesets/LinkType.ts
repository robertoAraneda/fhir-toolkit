/**
 * LinkType
 * 
 * The type of link between this patient resource and another patient resource.
 *
 * @see http://hl7.org/fhir/ValueSet/link-type
 */

export type LinkTypeType = 'replaced-by' | 'replaces' | 'refer' | 'seealso';

export enum LinkTypeEnum {
  /** Replaced-by */
  ReplacedBy = 'replaced-by',
  /** Replaces */
  Replaces = 'replaces',
  /** Refer */
  Refer = 'refer',
  /** See also */
  Seealso = 'seealso',
}

export const LinkTypeValues = ['replaced-by', 'replaces', 'refer', 'seealso'] as const;
