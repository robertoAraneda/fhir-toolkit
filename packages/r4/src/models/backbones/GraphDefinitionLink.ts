import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IGraphDefinitionLink,
  IGraphDefinitionLinkTarget,
} from '@fhir-toolkit/r4-types';

/** Properties specific to GraphDefinitionLink */
const GRAPH_DEFINITION_LINK_PROPERTIES = [
  'path',
  '_path',
  'sliceName',
  '_sliceName',
  'min',
  '_min',
  'max',
  '_max',
  'description',
  '_description',
  'target',
] as const;

/**
 * GraphDefinitionLink - Links this graph makes rules about
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionlink.html
 *
 * @example
 * const graphDefinitionLink = new GraphDefinitionLink({
 *   // ... properties
 * });
 */
export class GraphDefinitionLink extends BackboneElement implements IGraphDefinitionLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Path in the resource that contains the link */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** Which slice (if profiled) */
  sliceName?: string;

  /** Extension for sliceName */
  _sliceName?: IElement;

  /** Minimum occurrences for this link */
  min?: number;

  /** Extension for min */
  _min?: IElement;

  /** Maximum occurrences for this link */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  /** Why this link is specified */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Potential target for the link */
  target?: IGraphDefinitionLinkTarget[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGraphDefinitionLink>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinitionLink from a JSON object
   */
  static fromJSON(json: IGraphDefinitionLink): GraphDefinitionLink {
    return new GraphDefinitionLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinitionLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinitionLink>): GraphDefinitionLink {
    return new GraphDefinitionLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinitionLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinitionLink) => Partial<IGraphDefinitionLink>): GraphDefinitionLink {
    const currentData = this.toJSON();
    return new GraphDefinitionLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinitionLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinitionLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_LINK_PROPERTIES);
    return result as IGraphDefinitionLink;
  }

  /**
   * Create a deep clone of this GraphDefinitionLink
   */
  clone(): GraphDefinitionLink {
    return new GraphDefinitionLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinitionLink
   */
  toString(): string {
    const parts: string[] = ['GraphDefinitionLink'];
    return parts.join(', ');
  }
}
