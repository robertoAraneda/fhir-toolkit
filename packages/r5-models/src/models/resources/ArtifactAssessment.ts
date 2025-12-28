import { DomainResource } from '../base/DomainResource.js';
import type {
  ArtifactAssessmentDispositionType,
  ArtifactAssessmentWorkflowStatusType,
  IArtifactAssessment,
  IArtifactAssessmentContent,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ArtifactAssessment */
const ARTIFACT_ASSESSMENT_PROPERTIES = [
  'identifier',
  'title',
  '_title',
  'citeAsReference',
  'citeAsMarkdown',
  '_citeAsMarkdown',
  'date',
  '_date',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'artifactReference',
  'artifactCanonical',
  '_artifactCanonical',
  'artifactUri',
  '_artifactUri',
  'content',
  'workflowStatus',
  '_workflowStatus',
  'disposition',
  '_disposition',
] as const;

/**
 * ArtifactAssessment - This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 *
 * @see https://hl7.org/fhir/R5/artifactassessment.html
 *
 * @example
 * const artifactAssessment = new ArtifactAssessment({
 *   // ... properties
 * });
 */
export class ArtifactAssessment extends DomainResource implements IArtifactAssessment {
  readonly resourceType = 'ArtifactAssessment' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Additional identifier for the artifact assessment */
  identifier?: IIdentifier[];

  /** A short title for the assessment for use in displaying and selecting */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** How to cite the comment or rating */
  citeAsReference?: IReference;

  /** How to cite the comment or rating */
  citeAsMarkdown?: string;

  /** Extension for citeAsMarkdown */
  _citeAsMarkdown?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the artifact assessment was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the artifact assessment was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** The artifact assessed, commented upon or rated */
  artifactReference?: IReference;

  /** The artifact assessed, commented upon or rated */
  artifactCanonical?: string;

  /** Extension for artifactCanonical */
  _artifactCanonical?: IElement;

  /** The artifact assessed, commented upon or rated */
  artifactUri?: string;

  /** Extension for artifactUri */
  _artifactUri?: IElement;

  /** Comment, classifier, or rating content */
  content?: IArtifactAssessmentContent[];

  /** submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error */
  workflowStatus?: ArtifactAssessmentWorkflowStatusType;

  /** Extension for workflowStatus */
  _workflowStatus?: IElement;

  /** unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification */
  disposition?: ArtifactAssessmentDispositionType;

  /** Extension for disposition */
  _disposition?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IArtifactAssessment>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ARTIFACT_ASSESSMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ArtifactAssessment from a JSON object
   */
  static fromJSON(json: IArtifactAssessment): ArtifactAssessment {
    return new ArtifactAssessment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ArtifactAssessment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IArtifactAssessment>): ArtifactAssessment {
    return new ArtifactAssessment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ArtifactAssessment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IArtifactAssessment) => Partial<IArtifactAssessment>): ArtifactAssessment {
    const currentData = this.toJSON();
    return new ArtifactAssessment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IArtifactAssessment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IArtifactAssessment {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ARTIFACT_ASSESSMENT_PROPERTIES);
    return result as IArtifactAssessment;
  }

  /**
   * Create a deep clone of this ArtifactAssessment
   */
  clone(): ArtifactAssessment {
    return new ArtifactAssessment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ArtifactAssessment
   */
  toString(): string {
    const parts: string[] = ['ArtifactAssessment'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
