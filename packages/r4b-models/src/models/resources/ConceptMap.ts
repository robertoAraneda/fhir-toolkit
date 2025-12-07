import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IConceptMap,
  IConceptMapGroup,
  IContactDetail,
  IElement,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ConceptMap */
const CONCEPT_MAP_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
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
  'sourceUri',
  '_sourceUri',
  'sourceCanonical',
  '_sourceCanonical',
  'targetUri',
  '_targetUri',
  'targetCanonical',
  '_targetCanonical',
  'group',
] as const;

/**
 * ConceptMap - A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 *
 * @see https://hl7.org/fhir/R4/conceptmap.html
 *
 * @example
 * const conceptMap = new ConceptMap({
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
  identifier?: IIdentifier;

  /** Business version of the concept map */
  version?: string;

  /** Extension for version */
  _version?: IElement;

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

  /** Name of the publisher (organization or individual) */
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

  /** The source value set that contains the concepts that are being mapped */
  sourceUri?: string;

  /** Extension for sourceUri */
  _sourceUri?: IElement;

  /** The source value set that contains the concepts that are being mapped */
  sourceCanonical?: string;

  /** Extension for sourceCanonical */
  _sourceCanonical?: IElement;

  /** The target value set which provides context for the mappings */
  targetUri?: string;

  /** Extension for targetUri */
  _targetUri?: IElement;

  /** The target value set which provides context for the mappings */
  targetCanonical?: string;

  /** Extension for targetCanonical */
  _targetCanonical?: IElement;

  /** Same source and target systems */
  group?: IConceptMapGroup[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IConceptMap>, 'resourceType'>) {
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
