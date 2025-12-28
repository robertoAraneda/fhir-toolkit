import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactVersion,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactVersion */
const CITATION_CITED_ARTIFACT_VERSION_PROPERTIES = [
  'value',
  '_value',
  'baseCitation',
] as const;

/**
 * CitationCitedArtifactVersion - The defined version of the cited artifact
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactversion.html
 *
 * @example
 * const citationCitedArtifactVersion = new CitationCitedArtifactVersion({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactVersion extends BackboneElement implements ICitationCitedArtifactVersion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The version number or other version identifier */
  value: string;

  /** Extension for value */
  _value?: IElement;

  /** Citation for the main version of the cited artifact */
  baseCitation?: IReference<'Citation'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactVersion>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_VERSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactVersion from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactVersion): CitationCitedArtifactVersion {
    return new CitationCitedArtifactVersion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactVersion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactVersion>): CitationCitedArtifactVersion {
    return new CitationCitedArtifactVersion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactVersion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactVersion) => Partial<ICitationCitedArtifactVersion>): CitationCitedArtifactVersion {
    const currentData = this.toJSON();
    return new CitationCitedArtifactVersion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactVersion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactVersion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_VERSION_PROPERTIES);
    return result as ICitationCitedArtifactVersion;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactVersion
   */
  clone(): CitationCitedArtifactVersion {
    return new CitationCitedArtifactVersion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactVersion
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactVersion'];
    return parts.join(', ');
  }
}
