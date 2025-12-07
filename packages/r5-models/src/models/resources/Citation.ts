import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICitation,
  ICitationCitedArtifact,
  ICitationClassification,
  ICitationStatusDate,
  ICitationSummary,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Citation */
const CITATION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
  'name',
  '_name',
  'title',
  '_title',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'summary',
  'classification',
  'note',
  'currentState',
  'statusDate',
  'relatedArtifact',
  'citedArtifact',
] as const;

/**
 * Citation - The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 *
 * @see https://hl7.org/fhir/R4/citation.html
 *
 * @example
 * const citation = new Citation({
 *   // ... properties
 * });
 */
export class Citation extends DomainResource implements ICitation {
  readonly resourceType = 'Citation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this citation record, represented as a globally unique URI */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Identifier for the citation record itself */
  identifier?: IIdentifier[];

  /** Business version of the citation record */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this citation record (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this citation record (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** The publisher of the citation record, not the publisher of the article or artifact being cited */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher of the citation record */
  contact?: IContactDetail[];

  /** Natural language description of the citation */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the citation record content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for citation record (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this citation is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions for the citation record, not for the cited artifact */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) for the ciation record, not for the cited artifact */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** When the citation record was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the citation record was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the citation record is expected to be used */
  effectivePeriod?: IPeriod;

  /** Who authored the citation record */
  author?: IContactDetail[];

  /** Who edited the citation record */
  editor?: IContactDetail[];

  /** Who reviewed the citation record */
  reviewer?: IContactDetail[];

  /** Who endorsed the citation record */
  endorser?: IContactDetail[];

  /** A human-readable display of key concepts to represent the citation */
  summary?: ICitationSummary[];

  /** The assignment to an organizing scheme */
  classification?: ICitationClassification[];

  /** Used for general notes and annotations not coded elsewhere */
  note?: IAnnotation[];

  /** The status of the citation record */
  currentState?: ICodeableConcept[];

  /** An effective date or period for a status of the citation record */
  statusDate?: ICitationStatusDate[];

  /** Artifact related to the citation record */
  relatedArtifact?: IRelatedArtifact[];

  /** The article or artifact being described */
  citedArtifact?: ICitationCitedArtifact;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICitation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Citation from a JSON object
   */
  static fromJSON(json: ICitation): Citation {
    return new Citation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Citation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitation>): Citation {
    return new Citation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Citation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitation) => Partial<ICitation>): Citation {
    const currentData = this.toJSON();
    return new Citation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CITATION_PROPERTIES);
    return result as ICitation;
  }

  /**
   * Create a deep clone of this Citation
   */
  clone(): Citation {
    return new Citation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Citation
   */
  toString(): string {
    const parts: string[] = ['Citation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
