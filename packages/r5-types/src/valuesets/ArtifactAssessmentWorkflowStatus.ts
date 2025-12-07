/**
 * Artifact Assessment Workflow Status
 * 
 * Possible values for the workflow status of the comment or assessment, typically used to coordinate workflow around the process of accepting and rejecting changes and comments on the artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/artifactassessment-workflow-status
 */

export type ArtifactAssessmentWorkflowStatusType = 'submitted' | 'triaged' | 'waiting-for-input' | 'resolved-no-change' | 'resolved-change-required' | 'deferred' | 'duplicate' | 'applied' | 'published' | 'entered-in-error';

export enum ArtifactAssessmentWorkflowStatusEnum {
  /** Submitted */
  Submitted = 'submitted',
  /** Triaged */
  Triaged = 'triaged',
  /** Waiting for Input */
  WaitingForInput = 'waiting-for-input',
  /** Resolved - No Change */
  ResolvedNoChange = 'resolved-no-change',
  /** Resolved - Change Required */
  ResolvedChangeRequired = 'resolved-change-required',
  /** Deferred */
  Deferred = 'deferred',
  /** Duplicate */
  Duplicate = 'duplicate',
  /** Applied */
  Applied = 'applied',
  /** Published */
  Published = 'published',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const ArtifactAssessmentWorkflowStatusValues = ['submitted', 'triaged', 'waiting-for-input', 'resolved-no-change', 'resolved-change-required', 'deferred', 'duplicate', 'applied', 'published', 'entered-in-error'] as const;
