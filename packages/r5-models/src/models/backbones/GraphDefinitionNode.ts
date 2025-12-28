import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IGraphDefinitionNode,
  VersionIndependentResourceTypesAllType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GraphDefinitionNode */
const GRAPH_DEFINITION_NODE_PROPERTIES = [
  'nodeId',
  '_nodeId',
  'description',
  '_description',
  'type',
  '_type',
  'profile',
  '_profile',
] as const;

/**
 * GraphDefinitionNode - Potential target for the link
 *
 * @see https://hl7.org/fhir/R5/graphdefinitionnode.html
 *
 * @example
 * const graphDefinitionNode = new GraphDefinitionNode({
 *   // ... properties
 * });
 */
export class GraphDefinitionNode extends BackboneElement implements IGraphDefinitionNode {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Internal ID - target for link references */
  nodeId: string;

  /** Extension for nodeId */
  _nodeId?: IElement;

  /** Why this node is specified */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Type of resource this link refers to */
  type: VersionIndependentResourceTypesAllType;

  /** Extension for type */
  _type?: IElement;

  /** Profile for the target resource */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGraphDefinitionNode>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_NODE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinitionNode from a JSON object
   */
  static fromJSON(json: IGraphDefinitionNode): GraphDefinitionNode {
    return new GraphDefinitionNode(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinitionNode with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinitionNode>): GraphDefinitionNode {
    return new GraphDefinitionNode({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinitionNode by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinitionNode) => Partial<IGraphDefinitionNode>): GraphDefinitionNode {
    const currentData = this.toJSON();
    return new GraphDefinitionNode({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinitionNode)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinitionNode {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_NODE_PROPERTIES);
    return result as IGraphDefinitionNode;
  }

  /**
   * Create a deep clone of this GraphDefinitionNode
   */
  clone(): GraphDefinitionNode {
    return new GraphDefinitionNode(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinitionNode
   */
  toString(): string {
    const parts: string[] = ['GraphDefinitionNode'];
    return parts.join(', ');
  }
}
