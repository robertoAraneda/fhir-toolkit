import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactAbstract,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactAbstract */
const CITATION_CITED_ARTIFACT_ABSTRACT_PROPERTIES = [
  'type',
  'language',
  'text',
  '_text',
  'copyright',
  '_copyright',
] as const;

/**
 * CitationCitedArtifactAbstract - Summary of the article or artifact
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactabstract.html
 *
 * @example
 * const citationCitedArtifactAbstract = new CitationCitedArtifactAbstract({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactAbstract extends BackboneElement implements ICitationCitedArtifactAbstract {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of abstract */
  type?: ICodeableConcept;

  /** Used to express the specific language */
  language?: ICodeableConcept;

  /** Abstract content */
  text: string;

  /** Extension for text */
  _text?: IElement;

  /** Copyright notice for the abstract */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactAbstract>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_ABSTRACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactAbstract from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactAbstract): CitationCitedArtifactAbstract {
    return new CitationCitedArtifactAbstract(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactAbstract with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactAbstract>): CitationCitedArtifactAbstract {
    return new CitationCitedArtifactAbstract({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactAbstract by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactAbstract) => Partial<ICitationCitedArtifactAbstract>): CitationCitedArtifactAbstract {
    const currentData = this.toJSON();
    return new CitationCitedArtifactAbstract({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactAbstract)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactAbstract {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_ABSTRACT_PROPERTIES);
    return result as ICitationCitedArtifactAbstract;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactAbstract
   */
  clone(): CitationCitedArtifactAbstract {
    return new CitationCitedArtifactAbstract(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactAbstract
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactAbstract'];
    return parts.join(', ');
  }
}
