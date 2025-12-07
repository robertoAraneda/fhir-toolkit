import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IConceptMap,
  IConceptMapAdditionalAttribute,
  IConceptMapGroup,
  IConceptMapProperty,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMap */
const CONCEPT_MAP_PROPERTIES = [
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
  'property',
  'additionalAttribute',
  'sourceScopeUri',
  '_sourceScopeUri',
  'sourceScopeCanonical',
  '_sourceScopeCanonical',
  'targetScopeUri',
  '_targetScopeUri',
  'targetScopeCanonical',
  '_targetScopeCanonical',
  'group',
] as const;

/**
 * ConceptMap - A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 *
 * @see https://hl7.org/fhir/R4/conceptmap.html
 *
 * @example
 * const conceptMap = new ConceptMap({
 *   resourceType: 'ConceptMap',
 *   // ... properties
 * });
 */
export class ConceptMap extends DomainResource implements IConceptMap {
  readonly resourceType = 'ConceptMap' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this concept map, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the concept map */
  identifier?: IIdentifier[];

  /** Business version of the concept map */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this concept map (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this concept map (human friendly) */
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

  /** Natural language description of the concept map */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for concept map (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this concept map is defined */
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

  /** When the ConceptMap was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the ConceptMap was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the ConceptMap is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc */
  topic?: ICodeableConcept[];

  /** Who authored the ConceptMap */
  author?: IContactDetail[];

  /** Who edited the ConceptMap */
  editor?: IContactDetail[];

  /** Who reviewed the ConceptMap */
  reviewer?: IContactDetail[];

  /** Who endorsed the ConceptMap */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc */
  relatedArtifact?: IRelatedArtifact[];

  /** Additional properties of the mapping */
  property?: IConceptMapProperty[];

  /** Definition of an additional attribute to act as a data source or target */
  additionalAttribute?: IConceptMapAdditionalAttribute[];

  /** The source value set that contains the concepts that are being mapped */
  sourceScopeUri?: string;

  /** Extension for sourceScopeUri */
  _sourceScopeUri?: IElement;

  /** The source value set that contains the concepts that are being mapped */
  sourceScopeCanonical?: string;

  /** Extension for sourceScopeCanonical */
  _sourceScopeCanonical?: IElement;

  /** The target value set which provides context for the mappings */
  targetScopeUri?: string;

  /** Extension for targetScopeUri */
  _targetScopeUri?: IElement;

  /** The target value set which provides context for the mappings */
  targetScopeCanonical?: string;

  /** Extension for targetScopeCanonical */
  _targetScopeCanonical?: IElement;

  /** Same source and target systems */
  group?: IConceptMapGroup[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMap>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMap from a JSON object
   */
  static fromJSON(json: IConceptMap): ConceptMap {
    return new ConceptMap(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMap with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMap>): ConceptMap {
    return new ConceptMap({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMap by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMap) => Partial<IConceptMap>): ConceptMap {
    const currentData = this.toJSON();
    return new ConceptMap({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMap)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMap {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_PROPERTIES);
    return result as IConceptMap;
  }

  /**
   * Create a deep clone of this ConceptMap
   */
  clone(): ConceptMap {
    return new ConceptMap(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMap
   */
  toString(): string {
    const parts: string[] = ['ConceptMap'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
