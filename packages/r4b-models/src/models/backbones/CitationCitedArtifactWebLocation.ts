import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactWebLocation,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactWebLocation */
const CITATION_CITED_ARTIFACT_WEB_LOCATION_PROPERTIES = [
  'type',
  'url',
  '_url',
] as const;

/**
 * CitationCitedArtifactWebLocation - Used for any URL for the article or artifact cited
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactweblocation.html
 *
 * @example
 * const citationCitedArtifactWebLocation = new CitationCitedArtifactWebLocation({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactWebLocation extends BackboneElement implements ICitationCitedArtifactWebLocation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code the reason for different URLs, e.g. abstract and full-text */
  type?: ICodeableConcept;

  /** The specific URL */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactWebLocation>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_WEB_LOCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactWebLocation from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactWebLocation): CitationCitedArtifactWebLocation {
    return new CitationCitedArtifactWebLocation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactWebLocation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactWebLocation>): CitationCitedArtifactWebLocation {
    return new CitationCitedArtifactWebLocation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactWebLocation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactWebLocation) => Partial<ICitationCitedArtifactWebLocation>): CitationCitedArtifactWebLocation {
    const currentData = this.toJSON();
    return new CitationCitedArtifactWebLocation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactWebLocation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactWebLocation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_WEB_LOCATION_PROPERTIES);
    return result as ICitationCitedArtifactWebLocation;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactWebLocation
   */
  clone(): CitationCitedArtifactWebLocation {
    return new CitationCitedArtifactWebLocation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactWebLocation
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactWebLocation'];
    return parts.join(', ');
  }
}
