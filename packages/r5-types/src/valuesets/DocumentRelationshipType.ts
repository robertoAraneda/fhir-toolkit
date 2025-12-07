/**
 * Document Relationship Type
 * 
 * The type of relationship between documents.
 *
 * @see http://hl7.org/fhir/ValueSet/document-relationship-type
 */

export type DocumentRelationshipTypeType = 'replaces' | 'transforms' | 'signs' | 'appends' | 'incorporates' | 'summarizes';

export enum DocumentRelationshipTypeEnum {
  /** Replaces */
  Replaces = 'replaces',
  /** Transforms */
  Transforms = 'transforms',
  /** Signs */
  Signs = 'signs',
  /** Appends */
  Appends = 'appends',
  /** Incorporates */
  Incorporates = 'incorporates',
  /** Summarizes */
  Summarizes = 'summarizes',
}

export const DocumentRelationshipTypeValues = ['replaces', 'transforms', 'signs', 'appends', 'incorporates', 'summarizes'] as const;
