import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICitationCitedArtifact,
  ICitationCitedArtifactAbstract,
  ICitationCitedArtifactClassification,
  ICitationCitedArtifactContributorship,
  ICitationCitedArtifactPart,
  ICitationCitedArtifactPublicationForm,
  ICitationCitedArtifactRelatesTo,
  ICitationCitedArtifactStatusDate,
  ICitationCitedArtifactTitle,
  ICitationCitedArtifactVersion,
  ICitationCitedArtifactWebLocation,
  ICodeableConcept,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifact */
const CITATION_CITED_ARTIFACT_PROPERTIES = [
  'identifier',
  'relatedIdentifier',
  'dateAccessed',
  '_dateAccessed',
  'version',
  'currentState',
  'statusDate',
  'title',
  'abstract',
  'part',
  'relatesTo',
  'publicationForm',
  'webLocation',
  'classification',
  'contributorship',
  'note',
] as const;

/**
 * CitationCitedArtifact - The article or artifact being described
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifact.html
 *
 * @example
 * const citationCitedArtifact = new CitationCitedArtifact({
 *   // ... properties
 * });
 */
export class CitationCitedArtifact extends BackboneElement implements ICitationCitedArtifact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier. May include DOI, PMID, PMCID, etc */
  identifier?: IIdentifier[];

  /** Identifier not unique to the cited artifact. May include trial registry identifiers */
  relatedIdentifier?: IIdentifier[];

  /** When the cited artifact was accessed */
  dateAccessed?: string;

  /** Extension for dateAccessed */
  _dateAccessed?: IElement;

  /** The defined version of the cited artifact */
  version?: ICitationCitedArtifactVersion;

  /** The status of the cited artifact */
  currentState?: ICodeableConcept[];

  /** An effective date or period for a status of the cited artifact */
  statusDate?: ICitationCitedArtifactStatusDate[];

  /** The title details of the article or artifact */
  title?: ICitationCitedArtifactTitle[];

  /** Summary of the article or artifact */
  abstract?: ICitationCitedArtifactAbstract[];

  /** The component of the article or artifact */
  part?: ICitationCitedArtifactPart;

  /** The artifact related to the cited artifact */
  relatesTo?: ICitationCitedArtifactRelatesTo[];

  /** If multiple, used to represent alternative forms of the article that are not separate citations */
  publicationForm?: ICitationCitedArtifactPublicationForm[];

  /** Used for any URL for the article or artifact cited */
  webLocation?: ICitationCitedArtifactWebLocation[];

  /** The assignment to an organizing scheme */
  classification?: ICitationCitedArtifactClassification[];

  /** Attribution of authors and other contributors */
  contributorship?: ICitationCitedArtifactContributorship;

  /** Any additional information or content for the article or artifact */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifact>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifact from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifact): CitationCitedArtifact {
    return new CitationCitedArtifact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifact>): CitationCitedArtifact {
    return new CitationCitedArtifact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifact) => Partial<ICitationCitedArtifact>): CitationCitedArtifact {
    const currentData = this.toJSON();
    return new CitationCitedArtifact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifact {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PROPERTIES);
    return result as ICitationCitedArtifact;
  }

  /**
   * Create a deep clone of this CitationCitedArtifact
   */
  clone(): CitationCitedArtifact {
    return new CitationCitedArtifact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifact
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifact'];
    return parts.join(', ');
  }
}
