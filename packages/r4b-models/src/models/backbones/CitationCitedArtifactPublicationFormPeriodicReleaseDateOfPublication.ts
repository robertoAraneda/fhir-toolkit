import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication */
const CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_DATE_OF_PUBLICATION_PROPERTIES = [
  'date',
  '_date',
  'year',
  '_year',
  'month',
  '_month',
  'day',
  '_day',
  'season',
  '_season',
  'text',
  '_text',
] as const;

/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication - Defining the date on which the issue of the journal was published
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactpublicationformperiodicreleasedateofpublication.html
 *
 * @example
 * const citationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication = new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication extends BackboneElement implements ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Date on which the issue of the journal was published */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Year on which the issue of the journal was published */
  year?: string;

  /** Extension for year */
  _year?: IElement;

  /** Month on which the issue of the journal was published */
  month?: string;

  /** Extension for month */
  _month?: IElement;

  /** Day on which the issue of the journal was published */
  day?: string;

  /** Extension for day */
  _day?: IElement;

  /** Season on which the issue of the journal was published */
  season?: string;

  /** Extension for season */
  _season?: IElement;

  /** Text representation of the date of which the issue of the journal was published */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_DATE_OF_PUBLICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    return new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication>): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    return new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication) => Partial<ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication>): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    const currentData = this.toJSON();
    return new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PERIODIC_RELEASE_DATE_OF_PUBLICATION_PROPERTIES);
    return result as ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication
   */
  clone(): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    return new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication'];
    return parts.join(', ');
  }
}
