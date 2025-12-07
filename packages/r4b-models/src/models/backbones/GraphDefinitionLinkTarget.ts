import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IGraphDefinitionLink,
  IGraphDefinitionLinkTarget,
  IGraphDefinitionLinkTargetCompartment,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to GraphDefinitionLinkTarget */
const GRAPH_DEFINITION_LINK_TARGET_PROPERTIES = [
  'type',
  '_type',
  'params',
  '_params',
  'profile',
  '_profile',
  'compartment',
  'link',
] as const;

/**
 * GraphDefinitionLinkTarget - Potential target for the link
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionlinktarget.html
 *
 * @example
 * const graphDefinitionLinkTarget = new GraphDefinitionLinkTarget({
 *   // ... properties
 * });
 */
export class GraphDefinitionLinkTarget extends BackboneElement implements IGraphDefinitionLinkTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of resource this link refers to */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** Criteria for reverse lookup */
  params?: string;

  /** Extension for params */
  _params?: IElement;

  /** Profile for the target resource */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  /** Compartment Consistency Rules */
  compartment?: IGraphDefinitionLinkTargetCompartment[];

  /** Additional links from target resource */
  link?: IGraphDefinitionLink[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGraphDefinitionLinkTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_LINK_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinitionLinkTarget from a JSON object
   */
  static fromJSON(json: IGraphDefinitionLinkTarget): GraphDefinitionLinkTarget {
    return new GraphDefinitionLinkTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinitionLinkTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinitionLinkTarget>): GraphDefinitionLinkTarget {
    return new GraphDefinitionLinkTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinitionLinkTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinitionLinkTarget) => Partial<IGraphDefinitionLinkTarget>): GraphDefinitionLinkTarget {
    const currentData = this.toJSON();
    return new GraphDefinitionLinkTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinitionLinkTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinitionLinkTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_LINK_TARGET_PROPERTIES);
    return result as IGraphDefinitionLinkTarget;
  }

  /**
   * Create a deep clone of this GraphDefinitionLinkTarget
   */
  clone(): GraphDefinitionLinkTarget {
    return new GraphDefinitionLinkTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinitionLinkTarget
   */
  toString(): string {
    const parts: string[] = ['GraphDefinitionLinkTarget'];
    return parts.join(', ');
  }
}
