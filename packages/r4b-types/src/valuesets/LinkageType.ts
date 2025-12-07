/**
 * LinkageType
 * 
 * Used to distinguish different roles a resource can play within a set of linked resources.
 *
 * @see http://hl7.org/fhir/ValueSet/linkage-type
 */

export type LinkageTypeType = 'source' | 'alternate' | 'historical';

export enum LinkageTypeEnum {
  /** Source of Truth */
  Source = 'source',
  /** Alternate Record */
  Alternate = 'alternate',
  /** Historical/Obsolete Record */
  Historical = 'historical',
}

export const LinkageTypeValues = ['source', 'alternate', 'historical'] as const;
