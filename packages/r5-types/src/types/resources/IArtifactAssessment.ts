import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IArtifactAssessmentContent } from '../backbones/IArtifactAssessmentContent.js';
import type { ArtifactAssessmentDispositionType, ArtifactAssessmentWorkflowStatusType } from '../../valuesets/index.js';

/**
 * ArtifactAssessment Interface
 * 
 * This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 * 
 *
 * @see https://hl7.org/fhir/R4/artifactassessment.html
 */
export interface IArtifactAssessment extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ArtifactAssessment';

  /**
   * Additional identifier for the artifact assessment
   */
  identifier?: IIdentifier[];

  /**
   * A short title for the assessment for use in displaying and selecting
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * How to cite the comment or rating
   */
  citeAsReference?: IReference;

  /**
   * How to cite the comment or rating
   */
  citeAsMarkdown?: string;
  /**
   * Extension for citeAsMarkdown
   */
  _citeAsMarkdown?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the artifact assessment was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the artifact assessment was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * The artifact assessed, commented upon or rated
   */
  artifactReference?: IReference;

  /**
   * The artifact assessed, commented upon or rated
   */
  artifactCanonical?: string;
  /**
   * Extension for artifactCanonical
   */
  _artifactCanonical?: IElement;

  /**
   * The artifact assessed, commented upon or rated
   */
  artifactUri?: string;
  /**
   * Extension for artifactUri
   */
  _artifactUri?: IElement;

  /**
   * Comment, classifier, or rating content
   */
  content?: IArtifactAssessmentContent[];

  /**
   * submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error
   */
  workflowStatus?: ArtifactAssessmentWorkflowStatusType;
  /**
   * Extension for workflowStatus
   */
  _workflowStatus?: IElement;

  /**
   * unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification
   */
  disposition?: ArtifactAssessmentDispositionType;
  /**
   * Extension for disposition
   */
  _disposition?: IElement;

}
