import { DomainResource } from '../base/DomainResource.js';
import type {
  IAttachment,
  ICodeableConcept,
  IContactDetail,
  IDataRequirement,
  IElement,
  IIdentifier,
  ILibrary,
  IParameterDefinition,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Library */
const LIBRARY_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'type',
  'subjectCodeableConcept',
  'subjectReference',
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
  'usage',
  '_usage',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'parameter',
  'dataRequirement',
  'content',
] as const;

/**
 * Library - The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 *
 * @see https://hl7.org/fhir/R4B/library.html
 *
 * @example
 * const library = new Library({
 *   // ... properties
 * });
 */
export class Library extends DomainResource implements ILibrary {
  readonly resourceType = 'Library' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this library, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the library */
  identifier?: IIdentifier[];

  /** Business version of the library */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this library (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this library (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the library */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** logic-library | model-definition | asset-collection | module-definition */
  type: ICodeableConcept;

  /** Type of individual the library content is focused on */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of individual the library content is focused on */
  subjectReference?: IReference;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the library */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for library (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this library is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the library */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the library was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the library was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the library is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc. */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc. */
  relatedArtifact?: IRelatedArtifact[];

  /** Parameters defined by the library */
  parameter?: IParameterDefinition[];

  /** What data is referenced by this library */
  dataRequirement?: IDataRequirement[];

  /** Contents of the library, either embedded or referenced */
  content?: IAttachment[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ILibrary>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, LIBRARY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Library from a JSON object
   */
  static fromJSON(json: ILibrary): Library {
    return new Library(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Library with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILibrary>): Library {
    return new Library({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Library by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILibrary) => Partial<ILibrary>): Library {
    const currentData = this.toJSON();
    return new Library({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILibrary)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILibrary {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, LIBRARY_PROPERTIES);
    return result as ILibrary;
  }

  /**
   * Create a deep clone of this Library
   */
  clone(): Library {
    return new Library(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Library
   */
  toString(): string {
    const parts: string[] = ['Library'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
