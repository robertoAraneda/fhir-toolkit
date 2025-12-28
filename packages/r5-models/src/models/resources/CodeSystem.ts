import { DomainResource } from '../base/DomainResource.js';
import type {
  CodeSystemContentModeType,
  CodeSystemHierarchyMeaningType,
  ICodeSystem,
  ICodeSystemConcept,
  ICodeSystemFilter,
  ICodeSystemProperty,
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

/** Properties specific to CodeSystem */
const CODE_SYSTEM_PROPERTIES = [
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
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'caseSensitive',
  '_caseSensitive',
  'valueSet',
  '_valueSet',
  'hierarchyMeaning',
  '_hierarchyMeaning',
  'compositional',
  '_compositional',
  'versionNeeded',
  '_versionNeeded',
  'content',
  '_content',
  'supplements',
  '_supplements',
  'count',
  '_count',
  'filter',
  'property',
  'concept',
] as const;

/**
 * CodeSystem - The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 *
 * @see https://hl7.org/fhir/R5/codesystem.html
 *
 * @example
 * const codeSystem = new CodeSystem({
 *   // ... properties
 * });
 */
export class CodeSystem extends DomainResource implements ICodeSystem {
  readonly resourceType = 'CodeSystem' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the code system (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the code system (Coding.version) */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this code system (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this code system (human friendly) */
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

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the code system */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for code system (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this code system is defined */
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

  /** When the CodeSystem was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the CodeSystem was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the CodeSystem is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc */
  topic?: ICodeableConcept[];

  /** Who authored the CodeSystem */
  author?: IContactDetail[];

  /** Who edited the CodeSystem */
  editor?: IContactDetail[];

  /** Who reviewed the CodeSystem */
  reviewer?: IContactDetail[];

  /** Who endorsed the CodeSystem */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc */
  relatedArtifact?: IRelatedArtifact[];

  /** If code comparison is case sensitive */
  caseSensitive?: boolean;

  /** Extension for caseSensitive */
  _caseSensitive?: IElement;

  /** Canonical reference to the value set with entire code system */
  valueSet?: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  /** grouped-by | is-a | part-of | classified-with */
  hierarchyMeaning?: CodeSystemHierarchyMeaningType;

  /** Extension for hierarchyMeaning */
  _hierarchyMeaning?: IElement;

  /** If code system defines a compositional grammar */
  compositional?: boolean;

  /** Extension for compositional */
  _compositional?: IElement;

  /** If definitions are not stable */
  versionNeeded?: boolean;

  /** Extension for versionNeeded */
  _versionNeeded?: IElement;

  /** not-present | example | fragment | complete | supplement */
  content: CodeSystemContentModeType;

  /** Extension for content */
  _content?: IElement;

  /** Canonical URL of Code System this adds designations and properties to */
  supplements?: string;

  /** Extension for supplements */
  _supplements?: IElement;

  /** Total concepts in the code system */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  /** Filter that can be used in a value set */
  filter?: ICodeSystemFilter[];

  /** Additional information supplied about each concept */
  property?: ICodeSystemProperty[];

  /** Concepts in the code system */
  concept?: ICodeSystemConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICodeSystem>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystem from a JSON object
   */
  static fromJSON(json: ICodeSystem): CodeSystem {
    return new CodeSystem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystem>): CodeSystem {
    return new CodeSystem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystem) => Partial<ICodeSystem>): CodeSystem {
    const currentData = this.toJSON();
    return new CodeSystem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystem {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_PROPERTIES);
    return result as ICodeSystem;
  }

  /**
   * Create a deep clone of this CodeSystem
   */
  clone(): CodeSystem {
    return new CodeSystem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystem
   */
  toString(): string {
    const parts: string[] = ['CodeSystem'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
