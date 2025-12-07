/**
 * RelatedArtifactType
 * 
 * The type of relationship to the related artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/related-artifact-type
 */

export type RelatedArtifactTypeType = 'documentation' | 'justification' | 'citation' | 'predecessor' | 'successor' | 'derived-from' | 'depends-on' | 'composed-of' | 'part-of' | 'amends' | 'amended-with' | 'appends' | 'appended-with' | 'cites' | 'cited-by' | 'comments-on' | 'comment-in' | 'contains' | 'contained-in' | 'corrects' | 'correction-in' | 'replaces' | 'replaced-with' | 'retracts' | 'retracted-by' | 'signs' | 'similar-to' | 'supports' | 'supported-with' | 'transforms' | 'transformed-into' | 'transformed-with' | 'documents' | 'specification-of' | 'created-with' | 'cite-as';

export enum RelatedArtifactTypeEnum {
  /** Documentation */
  Documentation = 'documentation',
  /** Justification */
  Justification = 'justification',
  /** Citation */
  Citation = 'citation',
  /** Predecessor */
  Predecessor = 'predecessor',
  /** Successor */
  Successor = 'successor',
  /** Derived From */
  DerivedFrom = 'derived-from',
  /** Depends On */
  DependsOn = 'depends-on',
  /** Composed Of */
  ComposedOf = 'composed-of',
  /** Part Of */
  PartOf = 'part-of',
  /** Amends */
  Amends = 'amends',
  /** Amended With */
  AmendedWith = 'amended-with',
  /** Appends */
  Appends = 'appends',
  /** Appended With */
  AppendedWith = 'appended-with',
  /** Cites */
  Cites = 'cites',
  /** Cited By */
  CitedBy = 'cited-by',
  /** Is Comment On */
  CommentsOn = 'comments-on',
  /** Has Comment In */
  CommentIn = 'comment-in',
  /** Contains */
  Contains = 'contains',
  /** Contained In */
  ContainedIn = 'contained-in',
  /** Corrects */
  Corrects = 'corrects',
  /** Correction In */
  CorrectionIn = 'correction-in',
  /** Replaces */
  Replaces = 'replaces',
  /** Replaced With */
  ReplacedWith = 'replaced-with',
  /** Retracts */
  Retracts = 'retracts',
  /** Retracted By */
  RetractedBy = 'retracted-by',
  /** Signs */
  Signs = 'signs',
  /** Similar To */
  SimilarTo = 'similar-to',
  /** Supports */
  Supports = 'supports',
  /** Supported With */
  SupportedWith = 'supported-with',
  /** Transforms */
  Transforms = 'transforms',
  /** Transformed Into */
  TransformedInto = 'transformed-into',
  /** Transformed With */
  TransformedWith = 'transformed-with',
  /** Documents */
  Documents = 'documents',
  /** Specification Of */
  SpecificationOf = 'specification-of',
  /** Created With */
  CreatedWith = 'created-with',
  /** Cite As */
  CiteAs = 'cite-as',
}

export const RelatedArtifactTypeValues = ['documentation', 'justification', 'citation', 'predecessor', 'successor', 'derived-from', 'depends-on', 'composed-of', 'part-of', 'amends', 'amended-with', 'appends', 'appended-with', 'cites', 'cited-by', 'comments-on', 'comment-in', 'contains', 'contained-in', 'corrects', 'correction-in', 'replaces', 'replaced-with', 'retracts', 'retracted-by', 'signs', 'similar-to', 'supports', 'supported-with', 'transforms', 'transformed-into', 'transformed-with', 'documents', 'specification-of', 'created-with', 'cite-as'] as const;
