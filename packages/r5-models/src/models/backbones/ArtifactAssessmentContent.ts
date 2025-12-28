import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ArtifactAssessmentInformationTypeType,
  IArtifactAssessmentContent,
  ICodeableConcept,
  IElement,
  IQuantity,
  IReference,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ArtifactAssessmentContent */
const ARTIFACT_ASSESSMENT_CONTENT_PROPERTIES = [
  'informationType',
  '_informationType',
  'summary',
  '_summary',
  'type',
  'classifier',
  'quantity',
  'author',
  'path',
  '_path',
  'relatedArtifact',
  'freeToShare',
  '_freeToShare',
  'component',
] as const;

/**
 * ArtifactAssessmentContent - Comment, classifier, or rating content
 *
 * @see https://hl7.org/fhir/R5/artifactassessmentcontent.html
 *
 * @example
 * const artifactAssessmentContent = new ArtifactAssessmentContent({
 *   // ... properties
 * });
 */
export class ArtifactAssessmentContent extends BackboneElement implements IArtifactAssessmentContent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** comment | classifier | rating | container | response | change-request */
  informationType?: ArtifactAssessmentInformationTypeType;

  /** Extension for informationType */
  _informationType?: IElement;

  /** Brief summary of the content */
  summary?: string;

  /** Extension for summary */
  _summary?: IElement;

  /** What type of content */
  type?: ICodeableConcept;

  /** Rating, classifier, or assessment */
  classifier?: ICodeableConcept[];

  /** Quantitative rating */
  quantity?: IQuantity;

  /** Who authored the content */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>;

  /** What the comment is directed to */
  path?: string[];

  /** Extension for path */
  _path?: IElement;

  /** Additional information */
  relatedArtifact?: IRelatedArtifact[];

  /** Acceptable to publicly share the resource content */
  freeToShare?: boolean;

  /** Extension for freeToShare */
  _freeToShare?: IElement;

  /** Contained content */
  component?: IArtifactAssessmentContent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IArtifactAssessmentContent>) {
    super(data);
    if (data) {
      this.assignProps(data, ARTIFACT_ASSESSMENT_CONTENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ArtifactAssessmentContent from a JSON object
   */
  static fromJSON(json: IArtifactAssessmentContent): ArtifactAssessmentContent {
    return new ArtifactAssessmentContent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ArtifactAssessmentContent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IArtifactAssessmentContent>): ArtifactAssessmentContent {
    return new ArtifactAssessmentContent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ArtifactAssessmentContent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IArtifactAssessmentContent) => Partial<IArtifactAssessmentContent>): ArtifactAssessmentContent {
    const currentData = this.toJSON();
    return new ArtifactAssessmentContent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IArtifactAssessmentContent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IArtifactAssessmentContent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ARTIFACT_ASSESSMENT_CONTENT_PROPERTIES);
    return result as IArtifactAssessmentContent;
  }

  /**
   * Create a deep clone of this ArtifactAssessmentContent
   */
  clone(): ArtifactAssessmentContent {
    return new ArtifactAssessmentContent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ArtifactAssessmentContent
   */
  toString(): string {
    const parts: string[] = ['ArtifactAssessmentContent'];
    return parts.join(', ');
  }
}
