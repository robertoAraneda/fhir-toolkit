import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactPublicationFormPublishedIn,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactPublicationFormPublishedIn */
const CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PUBLISHED_IN_PROPERTIES = [
  'type',
  'identifier',
  'title',
  '_title',
  'publisher',
  'publisherLocation',
  '_publisherLocation',
] as const;

/**
 * CitationCitedArtifactPublicationFormPublishedIn - The collection the cited article or artifact is published in
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactpublicationformpublishedin.html
 *
 * @example
 * const citationCitedArtifactPublicationFormPublishedIn = new CitationCitedArtifactPublicationFormPublishedIn({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactPublicationFormPublishedIn extends BackboneElement implements ICitationCitedArtifactPublicationFormPublishedIn {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Kind of container (e.g. Periodical, database, or book) */
  type?: ICodeableConcept;

  /** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN */
  identifier?: IIdentifier[];

  /** Name of the database or title of the book or journal */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Name of the publisher */
  publisher?: IReference<'Organization'>;

  /** Geographic location of the publisher */
  publisherLocation?: string;

  /** Extension for publisherLocation */
  _publisherLocation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactPublicationFormPublishedIn>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PUBLISHED_IN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactPublicationFormPublishedIn from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactPublicationFormPublishedIn): CitationCitedArtifactPublicationFormPublishedIn {
    return new CitationCitedArtifactPublicationFormPublishedIn(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactPublicationFormPublishedIn with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactPublicationFormPublishedIn>): CitationCitedArtifactPublicationFormPublishedIn {
    return new CitationCitedArtifactPublicationFormPublishedIn({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactPublicationFormPublishedIn by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactPublicationFormPublishedIn) => Partial<ICitationCitedArtifactPublicationFormPublishedIn>): CitationCitedArtifactPublicationFormPublishedIn {
    const currentData = this.toJSON();
    return new CitationCitedArtifactPublicationFormPublishedIn({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactPublicationFormPublishedIn)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactPublicationFormPublishedIn {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PUBLISHED_IN_PROPERTIES);
    return result as ICitationCitedArtifactPublicationFormPublishedIn;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactPublicationFormPublishedIn
   */
  clone(): CitationCitedArtifactPublicationFormPublishedIn {
    return new CitationCitedArtifactPublicationFormPublishedIn(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactPublicationFormPublishedIn
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactPublicationFormPublishedIn'];
    return parts.join(', ');
  }
}
