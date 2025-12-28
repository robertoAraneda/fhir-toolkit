import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IStructureMap,
  IStructureMapConst,
  IStructureMapGroup,
  IStructureMapStructure,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureMap */
const STRUCTURE_MAP_PROPERTIES = [
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
  'structure',
  'import',
  '_import',
  'const',
  'group',
] as const;

/**
 * StructureMap - A Map of relationships between 2 structures that can be used to transform data.
 *
 * @see https://hl7.org/fhir/R5/structuremap.html
 *
 * @example
 * const structureMap = new StructureMap({
 *   // ... properties
 * });
 */
export class StructureMap extends DomainResource implements IStructureMap {
  readonly resourceType = 'StructureMap' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this structure map, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the structure map */
  identifier?: IIdentifier[];

  /** Business version of the structure map */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this structure map (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this structure map (human friendly) */
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

  /** Natural language description of the structure map */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for structure map (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this structure map is defined */
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

  /** Structure Definition used by this map */
  structure?: IStructureMapStructure[];

  /** Other maps used by this map (canonical URLs) */
  import?: string[];

  /** Extension for import */
  _import?: IElement;

  /** Definition of the constant value used in the map rules */
  const?: IStructureMapConst[];

  /** Named sections for reader convenience */
  group: IStructureMapGroup[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IStructureMap>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMap from a JSON object
   */
  static fromJSON(json: IStructureMap): StructureMap {
    return new StructureMap(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMap with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMap>): StructureMap {
    return new StructureMap({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMap by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMap) => Partial<IStructureMap>): StructureMap {
    const currentData = this.toJSON();
    return new StructureMap({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMap)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMap {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_PROPERTIES);
    return result as IStructureMap;
  }

  /**
   * Create a deep clone of this StructureMap
   */
  clone(): StructureMap {
    return new StructureMap(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMap
   */
  toString(): string {
    const parts: string[] = ['StructureMap'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
