import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  INamingSystem,
  INamingSystemUniqueId,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  NamingSystemTypeType,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NamingSystem */
const NAMING_SYSTEM_PROPERTIES = [
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
  'kind',
  '_kind',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'responsible',
  '_responsible',
  'type',
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
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'usage',
  '_usage',
  'uniqueId',
] as const;

/**
 * NamingSystem - A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 *
 * @see https://hl7.org/fhir/R4/namingsystem.html
 *
 * @example
 * const namingSystem = new NamingSystem({
 *   // ... properties
 * });
 */
export class NamingSystem extends DomainResource implements INamingSystem {
  readonly resourceType = 'NamingSystem' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this naming system, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the naming system (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the naming system */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this naming system (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Title for this naming system (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** codesystem | identifier | root */
  kind: NamingSystemTypeType;

  /** Extension for kind */
  _kind?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Who maintains system namespace? */
  responsible?: string;

  /** Extension for responsible */
  _responsible?: IElement;

  /** e.g. driver,  provider,  patient, bank etc */
  type?: ICodeableConcept;

  /** Natural language description of the naming system */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for naming system (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this naming system is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** When the NamingSystem was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the NamingSystem was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the NamingSystem is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc */
  topic?: ICodeableConcept[];

  /** Who authored the CodeSystem */
  author?: IContactDetail[];

  /** Who edited the NamingSystem */
  editor?: IContactDetail[];

  /** Who reviewed the NamingSystem */
  reviewer?: IContactDetail[];

  /** Who endorsed the NamingSystem */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc */
  relatedArtifact?: IRelatedArtifact[];

  /** How/where is it used */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Unique identifiers used for system */
  uniqueId: INamingSystemUniqueId[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<INamingSystem>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, NAMING_SYSTEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NamingSystem from a JSON object
   */
  static fromJSON(json: INamingSystem): NamingSystem {
    return new NamingSystem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NamingSystem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INamingSystem>): NamingSystem {
    return new NamingSystem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NamingSystem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INamingSystem) => Partial<INamingSystem>): NamingSystem {
    const currentData = this.toJSON();
    return new NamingSystem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INamingSystem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INamingSystem {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, NAMING_SYSTEM_PROPERTIES);
    return result as INamingSystem;
  }

  /**
   * Create a deep clone of this NamingSystem
   */
  clone(): NamingSystem {
    return new NamingSystem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NamingSystem
   */
  toString(): string {
    const parts: string[] = ['NamingSystem'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
