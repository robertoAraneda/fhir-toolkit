/**
 * ArtifactRelationshipType
 * 
 * Artifact Relationship Type
 *
 * @see http://hl7.org/fhir/ValueSet/artifact-relationship-type
 */

export type ArtifactRelationshipTypeType = 'replaces' | 'amends' | 'appends' | 'transforms' | 'replaced-with' | 'amended-with' | 'appended-with' | 'transformed-with' | 'derived-from' | 'transformed-into' | 'composed-of' | 'part-of' | 'supports' | 'supported-with' | 'depends-on' | 'similar-to' | 'cites' | 'cited-by' | 'retracts' | 'retracted-by' | 'comments-on' | 'comment-in' | 'corrects' | 'correction-in';

export enum ArtifactRelationshipTypeEnum {
  /** Replaces */
  Replaces = 'replaces',
  /** Amends */
  Amends = 'amends',
  /** Appends */
  Appends = 'appends',
  /** Transforms */
  Transforms = 'transforms',
  /** Replaced with */
  ReplacedWith = 'replaced-with',
  /** Amended with */
  AmendedWith = 'amended-with',
  /** Appended with */
  AppendedWith = 'appended-with',
  /** Transformed with */
  TransformedWith = 'transformed-with',
  /** Derived from */
  DerivedFrom = 'derived-from',
  /** Transformed into */
  TransformedInto = 'transformed-into',
  /** Composed of */
  ComposedOf = 'composed-of',
  /** Part of */
  PartOf = 'part-of',
  /** Supports */
  Supports = 'supports',
  /** Supported with */
  SupportedWith = 'supported-with',
  /** Depends on */
  DependsOn = 'depends-on',
  /** Similar to */
  SimilarTo = 'similar-to',
  /** Cites */
  Cites = 'cites',
  /** Cited by */
  CitedBy = 'cited-by',
  /** Retracts */
  Retracts = 'retracts',
  /** Retracted by */
  RetractedBy = 'retracted-by',
  /** Comments On */
  CommentsOn = 'comments-on',
  /** Comment In */
  CommentIn = 'comment-in',
  /** Corrects */
  Corrects = 'corrects',
  /** Correction In */
  CorrectionIn = 'correction-in',
}

export const ArtifactRelationshipTypeValues = ['replaces', 'amends', 'appends', 'transforms', 'replaced-with', 'amended-with', 'appended-with', 'transformed-with', 'derived-from', 'transformed-into', 'composed-of', 'part-of', 'supports', 'supported-with', 'depends-on', 'similar-to', 'cites', 'cited-by', 'retracts', 'retracted-by', 'comments-on', 'comment-in', 'corrects', 'correction-in'] as const;
