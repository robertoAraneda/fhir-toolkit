import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICitationCitedArtifactRelatesTo,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactRelatesTo */
const CITATION_CITED_ARTIFACT_RELATES_TO_PROPERTIES = [
  'relationshipType',
  'targetClassifier',
  'targetUri',
  '_targetUri',
  'targetIdentifier',
  'targetReference',
  'targetAttachment',
] as const;

/**
 * CitationCitedArtifactRelatesTo - The artifact related to the cited artifact
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactrelatesto.html
 *
 * @example
 * const citationCitedArtifactRelatesTo = new CitationCitedArtifactRelatesTo({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactRelatesTo extends BackboneElement implements ICitationCitedArtifactRelatesTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How the cited artifact relates to the target artifact */
  relationshipType: ICodeableConcept;

  /** The clasification of the related artifact */
  targetClassifier?: ICodeableConcept[];

  /** The article or artifact that the cited artifact is related to */
  targetUri?: string;

  /** Extension for targetUri */
  _targetUri?: IElement;

  /** The article or artifact that the cited artifact is related to */
  targetIdentifier?: IIdentifier;

  /** The article or artifact that the cited artifact is related to */
  targetReference?: IReference;

  /** The article or artifact that the cited artifact is related to */
  targetAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactRelatesTo>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_RELATES_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactRelatesTo from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactRelatesTo): CitationCitedArtifactRelatesTo {
    return new CitationCitedArtifactRelatesTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactRelatesTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactRelatesTo>): CitationCitedArtifactRelatesTo {
    return new CitationCitedArtifactRelatesTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactRelatesTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactRelatesTo) => Partial<ICitationCitedArtifactRelatesTo>): CitationCitedArtifactRelatesTo {
    const currentData = this.toJSON();
    return new CitationCitedArtifactRelatesTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactRelatesTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactRelatesTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_RELATES_TO_PROPERTIES);
    return result as ICitationCitedArtifactRelatesTo;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactRelatesTo
   */
  clone(): CitationCitedArtifactRelatesTo {
    return new CitationCitedArtifactRelatesTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactRelatesTo
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactRelatesTo'];
    return parts.join(', ');
  }
}
