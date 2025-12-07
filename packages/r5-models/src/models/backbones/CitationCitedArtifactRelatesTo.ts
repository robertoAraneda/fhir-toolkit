import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICitationCitedArtifactRelatesTo,
  ICodeableConcept,
  IElement,
  IReference,
  RelatedArtifactTypeExpandedType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactRelatesTo */
const CITATION_CITED_ARTIFACT_RELATES_TO_PROPERTIES = [
  'type',
  '_type',
  'classifier',
  'label',
  '_label',
  'display',
  '_display',
  'citation',
  '_citation',
  'document',
  'resource',
  '_resource',
  'resourceReference',
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

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of */
  type: RelatedArtifactTypeExpandedType;

  /** Extension for type */
  _type?: IElement;

  /** Additional classifiers */
  classifier?: ICodeableConcept[];

  /** Short label */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** Brief description of the related artifact */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Bibliographic citation for the artifact */
  citation?: string;

  /** Extension for citation */
  _citation?: IElement;

  /** What document is being referenced */
  document?: IAttachment;

  /** What artifact is being referenced */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  /** What artifact, if not a conformance resource */
  resourceReference?: IReference;

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
