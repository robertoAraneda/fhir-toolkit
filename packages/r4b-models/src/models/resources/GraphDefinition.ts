import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IGraphDefinition,
  IGraphDefinitionLink,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to GraphDefinition */
const GRAPH_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'version',
  '_version',
  'name',
  '_name',
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
  'start',
  '_start',
  'profile',
  '_profile',
  'link',
] as const;

/**
 * GraphDefinition - A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 *
 * @see https://hl7.org/fhir/R4/graphdefinition.html
 *
 * @example
 * const graphDefinition = new GraphDefinition({
 *   resourceType: 'GraphDefinition',
 *   // ... properties
 * });
 */
export class GraphDefinition extends DomainResource implements IGraphDefinition {
  readonly resourceType = 'GraphDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the graph definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this graph definition (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

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

  /** Natural language description of the graph definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for graph definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this graph definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Type of resource at which the graph starts */
  start: string;

  /** Extension for start */
  _start?: IElement;

  /** Profile on base resource */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  /** Links this graph makes rules about */
  link?: IGraphDefinitionLink[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGraphDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinition from a JSON object
   */
  static fromJSON(json: IGraphDefinition): GraphDefinition {
    return new GraphDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinition>): GraphDefinition {
    return new GraphDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinition) => Partial<IGraphDefinition>): GraphDefinition {
    const currentData = this.toJSON();
    return new GraphDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_PROPERTIES);
    return result as IGraphDefinition;
  }

  /**
   * Create a deep clone of this GraphDefinition
   */
  clone(): GraphDefinition {
    return new GraphDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinition
   */
  toString(): string {
    const parts: string[] = ['GraphDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
