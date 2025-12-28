import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactPublicationFormPeriodicRelease,
  ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactPublicationFormPeriodicRelease */
const CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_PROPERTIES = [
  'citedMedium',
  'volume',
  '_volume',
  'issue',
  '_issue',
  'dateOfPublication',
] as const;

/**
 * CitationCitedArtifactPublicationFormPeriodicRelease - The specific issue in which the cited article resides
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactpublicationformperiodicrelease.html
 *
 * @example
 * const citationCitedArtifactPublicationFormPeriodicRelease = new CitationCitedArtifactPublicationFormPeriodicRelease({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactPublicationFormPeriodicRelease extends BackboneElement implements ICitationCitedArtifactPublicationFormPeriodicRelease {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Internet or Print */
  citedMedium?: ICodeableConcept;

  /** Volume number of journal in which the article is published */
  volume?: string;

  /** Extension for volume */
  _volume?: IElement;

  /** Issue, part or supplement of journal in which the article is published */
  issue?: string;

  /** Extension for issue */
  _issue?: IElement;

  /** Defining the date on which the issue of the journal was published */
  dateOfPublication?: ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactPublicationFormPeriodicRelease>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactPublicationFormPeriodicRelease from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactPublicationFormPeriodicRelease): CitationCitedArtifactPublicationFormPeriodicRelease {
    return new CitationCitedArtifactPublicationFormPeriodicRelease(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactPublicationFormPeriodicRelease with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactPublicationFormPeriodicRelease>): CitationCitedArtifactPublicationFormPeriodicRelease {
    return new CitationCitedArtifactPublicationFormPeriodicRelease({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactPublicationFormPeriodicRelease by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactPublicationFormPeriodicRelease) => Partial<ICitationCitedArtifactPublicationFormPeriodicRelease>): CitationCitedArtifactPublicationFormPeriodicRelease {
    const currentData = this.toJSON();
    return new CitationCitedArtifactPublicationFormPeriodicRelease({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactPublicationFormPeriodicRelease)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactPublicationFormPeriodicRelease {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_PROPERTIES);
    return result as ICitationCitedArtifactPublicationFormPeriodicRelease;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactPublicationFormPeriodicRelease
   */
  clone(): CitationCitedArtifactPublicationFormPeriodicRelease {
    return new CitationCitedArtifactPublicationFormPeriodicRelease(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactPublicationFormPeriodicRelease
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactPublicationFormPeriodicRelease'];
    return parts.join(', ');
  }
}
