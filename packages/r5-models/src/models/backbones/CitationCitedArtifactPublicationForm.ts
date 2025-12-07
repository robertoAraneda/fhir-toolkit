import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactPublicationForm,
  ICitationCitedArtifactPublicationFormPublishedIn,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactPublicationForm */
const CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PROPERTIES = [
  'publishedIn',
  'citedMedium',
  'volume',
  '_volume',
  'issue',
  '_issue',
  'articleDate',
  '_articleDate',
  'publicationDateText',
  '_publicationDateText',
  'publicationDateSeason',
  '_publicationDateSeason',
  'lastRevisionDate',
  '_lastRevisionDate',
  'language',
  'accessionNumber',
  '_accessionNumber',
  'pageString',
  '_pageString',
  'firstPage',
  '_firstPage',
  'lastPage',
  '_lastPage',
  'pageCount',
  '_pageCount',
  'copyright',
  '_copyright',
] as const;

/**
 * CitationCitedArtifactPublicationForm - If multiple, used to represent alternative forms of the article that are not separate citations
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactpublicationform.html
 *
 * @example
 * const citationCitedArtifactPublicationForm = new CitationCitedArtifactPublicationForm({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactPublicationForm extends BackboneElement implements ICitationCitedArtifactPublicationForm {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The collection the cited article or artifact is published in */
  publishedIn?: ICitationCitedArtifactPublicationFormPublishedIn;

  /** Internet or Print */
  citedMedium?: ICodeableConcept;

  /** Volume number of journal or other collection in which the article is published */
  volume?: string;

  /** Extension for volume */
  _volume?: IElement;

  /** Issue, part or supplement of journal or other collection in which the article is published */
  issue?: string;

  /** Extension for issue */
  _issue?: IElement;

  /** The date the article was added to the database, or the date the article was released */
  articleDate?: string;

  /** Extension for articleDate */
  _articleDate?: IElement;

  /** Text representation of the date on which the issue of the cited artifact was published */
  publicationDateText?: string;

  /** Extension for publicationDateText */
  _publicationDateText?: IElement;

  /** Season in which the cited artifact was published */
  publicationDateSeason?: string;

  /** Extension for publicationDateSeason */
  _publicationDateSeason?: IElement;

  /** The date the article was last revised or updated in the database */
  lastRevisionDate?: string;

  /** Extension for lastRevisionDate */
  _lastRevisionDate?: IElement;

  /** Language(s) in which this form of the article is published */
  language?: ICodeableConcept[];

  /** Entry number or identifier for inclusion in a database */
  accessionNumber?: string;

  /** Extension for accessionNumber */
  _accessionNumber?: IElement;

  /** Used for full display of pagination */
  pageString?: string;

  /** Extension for pageString */
  _pageString?: IElement;

  /** Used for isolated representation of first page */
  firstPage?: string;

  /** Extension for firstPage */
  _firstPage?: IElement;

  /** Used for isolated representation of last page */
  lastPage?: string;

  /** Extension for lastPage */
  _lastPage?: IElement;

  /** Number of pages or screens */
  pageCount?: string;

  /** Extension for pageCount */
  _pageCount?: IElement;

  /** Copyright notice for the full article or artifact */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactPublicationForm>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactPublicationForm from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactPublicationForm): CitationCitedArtifactPublicationForm {
    return new CitationCitedArtifactPublicationForm(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactPublicationForm with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactPublicationForm>): CitationCitedArtifactPublicationForm {
    return new CitationCitedArtifactPublicationForm({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactPublicationForm by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactPublicationForm) => Partial<ICitationCitedArtifactPublicationForm>): CitationCitedArtifactPublicationForm {
    const currentData = this.toJSON();
    return new CitationCitedArtifactPublicationForm({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactPublicationForm)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactPublicationForm {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PUBLICATION_FORM_PROPERTIES);
    return result as ICitationCitedArtifactPublicationForm;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactPublicationForm
   */
  clone(): CitationCitedArtifactPublicationForm {
    return new CitationCitedArtifactPublicationForm(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactPublicationForm
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactPublicationForm'];
    return parts.join(', ');
  }
}
