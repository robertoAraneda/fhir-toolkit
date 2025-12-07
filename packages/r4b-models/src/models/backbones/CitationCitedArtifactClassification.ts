import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactClassification,
  ICitationCitedArtifactClassificationWhoClassified,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactClassification */
const CITATION_CITED_ARTIFACT_CLASSIFICATION_PROPERTIES = [
  'type',
  'classifier',
  'whoClassified',
] as const;

/**
 * CitationCitedArtifactClassification - The assignment to an organizing scheme
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactclassification.html
 *
 * @example
 * const citationCitedArtifactClassification = new CitationCitedArtifactClassification({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactClassification extends BackboneElement implements ICitationCitedArtifactClassification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of classifier (e.g. publication type, keyword) */
  type?: ICodeableConcept;

  /** The specific classification value */
  classifier?: ICodeableConcept[];

  /** Provenance and copyright of classification */
  whoClassified?: ICitationCitedArtifactClassificationWhoClassified;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactClassification>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CLASSIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactClassification from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactClassification): CitationCitedArtifactClassification {
    return new CitationCitedArtifactClassification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactClassification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactClassification>): CitationCitedArtifactClassification {
    return new CitationCitedArtifactClassification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactClassification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactClassification) => Partial<ICitationCitedArtifactClassification>): CitationCitedArtifactClassification {
    const currentData = this.toJSON();
    return new CitationCitedArtifactClassification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactClassification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactClassification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CLASSIFICATION_PROPERTIES);
    return result as ICitationCitedArtifactClassification;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactClassification
   */
  clone(): CitationCitedArtifactClassification {
    return new CitationCitedArtifactClassification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactClassification
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactClassification'];
    return parts.join(', ');
  }
}
