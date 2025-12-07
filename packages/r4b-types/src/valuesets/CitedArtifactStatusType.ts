/**
 * CitedArtifactStatusType
 * 
 * Cited Artifact Status Type
 *
 * @see http://hl7.org/fhir/ValueSet/cited-artifact-status-type
 */

export type CitedArtifactStatusTypeType = 'created' | 'submitted' | 'withdrawn' | 'pre-review' | 'under-review' | 'post-review-pre-published' | 'rejected' | 'published-early-form' | 'published-final-form' | 'accepted' | 'archived' | 'retracted' | 'draft' | 'active' | 'approved';

export enum CitedArtifactStatusTypeEnum {
  /** Created */
  Created = 'created',
  /** Submitted */
  Submitted = 'submitted',
  /** Withdrawn */
  Withdrawn = 'withdrawn',
  /** Pre review */
  PreReview = 'pre-review',
  /** Under review */
  UnderReview = 'under-review',
  /** Post review pre published */
  PostReviewPrePublished = 'post-review-pre-published',
  /** Rejected */
  Rejected = 'rejected',
  /** Published early form */
  PublishedEarlyForm = 'published-early-form',
  /** Published final form */
  PublishedFinalForm = 'published-final-form',
  /** Accepted */
  Accepted = 'accepted',
  /** Archived */
  Archived = 'archived',
  /** Retracted */
  Retracted = 'retracted',
  /** Draft */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** Approved */
  Approved = 'approved',
}

export const CitedArtifactStatusTypeValues = ['created', 'submitted', 'withdrawn', 'pre-review', 'under-review', 'post-review-pre-published', 'rejected', 'published-early-form', 'published-final-form', 'accepted', 'archived', 'retracted', 'draft', 'active', 'approved'] as const;
