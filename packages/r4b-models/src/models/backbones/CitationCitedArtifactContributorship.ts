import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactContributorship,
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipSummary,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactContributorship */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_PROPERTIES = [
  'complete',
  '_complete',
  'entry',
  'summary',
] as const;

/**
 * CitationCitedArtifactContributorship - Attribution of authors and other contributors
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactcontributorship.html
 *
 * @example
 * const citationCitedArtifactContributorship = new CitationCitedArtifactContributorship({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactContributorship extends BackboneElement implements ICitationCitedArtifactContributorship {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Indicates if the list includes all authors and/or contributors */
  complete?: boolean;

  /** Extension for complete */
  _complete?: IElement;

  /** An individual entity named in the list */
  entry?: ICitationCitedArtifactContributorshipEntry[];

  /** Used to record a display of the author/contributor list without separate coding for each list member */
  summary?: ICitationCitedArtifactContributorshipSummary[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactContributorship>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactContributorship from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactContributorship): CitationCitedArtifactContributorship {
    return new CitationCitedArtifactContributorship(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactContributorship with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactContributorship>): CitationCitedArtifactContributorship {
    return new CitationCitedArtifactContributorship({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactContributorship by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactContributorship) => Partial<ICitationCitedArtifactContributorship>): CitationCitedArtifactContributorship {
    const currentData = this.toJSON();
    return new CitationCitedArtifactContributorship({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactContributorship)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactContributorship {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_PROPERTIES);
    return result as ICitationCitedArtifactContributorship;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactContributorship
   */
  clone(): CitationCitedArtifactContributorship {
    return new CitationCitedArtifactContributorship(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactContributorship
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactContributorship'];
    return parts.join(', ');
  }
}
