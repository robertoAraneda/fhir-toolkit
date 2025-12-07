import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactTitle,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactTitle */
const CITATION_CITED_ARTIFACT_TITLE_PROPERTIES = [
  'type',
  'language',
  'text',
  '_text',
] as const;

/**
 * CitationCitedArtifactTitle - The title details of the article or artifact
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifacttitle.html
 *
 * @example
 * const citationCitedArtifactTitle = new CitationCitedArtifactTitle({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactTitle extends BackboneElement implements ICitationCitedArtifactTitle {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of title */
  type?: ICodeableConcept[];

  /** Used to express the specific language */
  language?: ICodeableConcept;

  /** The title of the article or artifact */
  text: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactTitle>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_TITLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactTitle from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactTitle): CitationCitedArtifactTitle {
    return new CitationCitedArtifactTitle(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactTitle with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactTitle>): CitationCitedArtifactTitle {
    return new CitationCitedArtifactTitle({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactTitle by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactTitle) => Partial<ICitationCitedArtifactTitle>): CitationCitedArtifactTitle {
    const currentData = this.toJSON();
    return new CitationCitedArtifactTitle({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactTitle)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactTitle {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_TITLE_PROPERTIES);
    return result as ICitationCitedArtifactTitle;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactTitle
   */
  clone(): CitationCitedArtifactTitle {
    return new CitationCitedArtifactTitle(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactTitle
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactTitle'];
    return parts.join(', ');
  }
}
