/**
 * Report Relationship Type
 * 
 * The type of relationship between reports.
 *
 * @see http://hl7.org/fhir/ValueSet/report-relation-type
 */

export type ReportRelationshipTypeType = 'replaces' | 'amends' | 'appends' | 'transforms' | 'replacedWith' | 'amendedWith' | 'appendedWith' | 'transformedWith';

export enum ReportRelationshipTypeEnum {
  /** Replaces */
  Replaces = 'replaces',
  /** Amends */
  Amends = 'amends',
  /** Appends */
  Appends = 'appends',
  /** Transforms */
  Transforms = 'transforms',
  /** Replaced With */
  Replacedwith = 'replacedWith',
  /** Amended With */
  Amendedwith = 'amendedWith',
  /** Appended With */
  Appendedwith = 'appendedWith',
  /** Transformed With */
  Transformedwith = 'transformedWith',
}

export const ReportRelationshipTypeValues = ['replaces', 'amends', 'appends', 'transforms', 'replacedWith', 'amendedWith', 'appendedWith', 'transformedWith'] as const;
