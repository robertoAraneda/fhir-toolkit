import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CompartmentTypeType,
  GraphCompartmentRuleType,
  GraphCompartmentUseType,
  IElement,
  IGraphDefinitionLinkTargetCompartment,
} from '@fhir-toolkit/r4-types';

/** Properties specific to GraphDefinitionLinkTargetCompartment */
const GRAPH_DEFINITION_LINK_TARGET_COMPARTMENT_PROPERTIES = [
  'use',
  '_use',
  'code',
  '_code',
  'rule',
  '_rule',
  'expression',
  '_expression',
  'description',
  '_description',
] as const;

/**
 * GraphDefinitionLinkTargetCompartment - Compartment Consistency Rules
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionlinktargetcompartment.html
 *
 * @example
 * const graphDefinitionLinkTargetCompartment = new GraphDefinitionLinkTargetCompartment({
 *   // ... properties
 * });
 */
export class GraphDefinitionLinkTargetCompartment extends BackboneElement implements IGraphDefinitionLinkTargetCompartment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** condition | requirement */
  use: GraphCompartmentUseType;

  /** Extension for use */
  _use?: IElement;

  /** Patient | Encounter | RelatedPerson | Practitioner | Device */
  code: CompartmentTypeType;

  /** Extension for code */
  _code?: IElement;

  /** identical | matching | different | custom */
  rule: GraphCompartmentRuleType;

  /** Extension for rule */
  _rule?: IElement;

  /** Custom rule, as a FHIRPath expression */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** Documentation for FHIRPath expression */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGraphDefinitionLinkTargetCompartment>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_LINK_TARGET_COMPARTMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinitionLinkTargetCompartment from a JSON object
   */
  static fromJSON(json: IGraphDefinitionLinkTargetCompartment): GraphDefinitionLinkTargetCompartment {
    return new GraphDefinitionLinkTargetCompartment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinitionLinkTargetCompartment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinitionLinkTargetCompartment>): GraphDefinitionLinkTargetCompartment {
    return new GraphDefinitionLinkTargetCompartment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinitionLinkTargetCompartment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinitionLinkTargetCompartment) => Partial<IGraphDefinitionLinkTargetCompartment>): GraphDefinitionLinkTargetCompartment {
    const currentData = this.toJSON();
    return new GraphDefinitionLinkTargetCompartment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinitionLinkTargetCompartment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinitionLinkTargetCompartment {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_LINK_TARGET_COMPARTMENT_PROPERTIES);
    return result as IGraphDefinitionLinkTargetCompartment;
  }

  /**
   * Create a deep clone of this GraphDefinitionLinkTargetCompartment
   */
  clone(): GraphDefinitionLinkTargetCompartment {
    return new GraphDefinitionLinkTargetCompartment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinitionLinkTargetCompartment
   */
  toString(): string {
    const parts: string[] = ['GraphDefinitionLinkTargetCompartment'];
    return parts.join(', ');
  }
}
