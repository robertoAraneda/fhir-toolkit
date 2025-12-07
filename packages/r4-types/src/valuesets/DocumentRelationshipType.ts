/**
 * DocumentRelationshipType
 * 
 * The type of relationship between documents.
 *
 * @see http://hl7.org/fhir/ValueSet/document-relationship-type
 */

export type DocumentRelationshipTypeType = 'replaces' | 'transforms' | 'signs' | 'appends';

export enum DocumentRelationshipTypeEnum {
  /** Replaces */
  Replaces = 'replaces',
  /** Transforms */
  Transforms = 'transforms',
  /** Signs */
  Signs = 'signs',
  /** Appends */
  Appends = 'appends',
}

export const DocumentRelationshipTypeValues = ['replaces', 'transforms', 'signs', 'appends'] as const;
