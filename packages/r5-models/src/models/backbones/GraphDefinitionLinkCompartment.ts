import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CompartmentTypeType,
  GraphCompartmentRuleType,
  GraphCompartmentUseType,
  IElement,
  IGraphDefinitionLinkCompartment,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GraphDefinitionLinkCompartment */
const GRAPH_DEFINITION_LINK_COMPARTMENT_PROPERTIES = [
  'use',
  '_use',
  'rule',
  '_rule',
  'code',
  '_code',
  'expression',
  '_expression',
  'description',
  '_description',
] as const;

/**
 * GraphDefinitionLinkCompartment - Compartment Consistency Rules
 *
 * @see https://hl7.org/fhir/R5/graphdefinitionlinkcompartment.html
 *
 * @example
 * const graphDefinitionLinkCompartment = new GraphDefinitionLinkCompartment({
 *   // ... properties
 * });
 */
export class GraphDefinitionLinkCompartment extends BackboneElement implements IGraphDefinitionLinkCompartment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** where | requires */
  use: GraphCompartmentUseType;

  /** Extension for use */
  _use?: IElement;

  /** identical | matching | different | custom */
  rule: GraphCompartmentRuleType;

  /** Extension for rule */
  _rule?: IElement;

  /** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare */
  code: CompartmentTypeType;

  /** Extension for code */
  _code?: IElement;

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

  constructor(data?: Partial<IGraphDefinitionLinkCompartment>) {
    super(data);
    if (data) {
      this.assignProps(data, GRAPH_DEFINITION_LINK_COMPARTMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GraphDefinitionLinkCompartment from a JSON object
   */
  static fromJSON(json: IGraphDefinitionLinkCompartment): GraphDefinitionLinkCompartment {
    return new GraphDefinitionLinkCompartment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GraphDefinitionLinkCompartment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGraphDefinitionLinkCompartment>): GraphDefinitionLinkCompartment {
    return new GraphDefinitionLinkCompartment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GraphDefinitionLinkCompartment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGraphDefinitionLinkCompartment) => Partial<IGraphDefinitionLinkCompartment>): GraphDefinitionLinkCompartment {
    const currentData = this.toJSON();
    return new GraphDefinitionLinkCompartment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGraphDefinitionLinkCompartment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGraphDefinitionLinkCompartment {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GRAPH_DEFINITION_LINK_COMPARTMENT_PROPERTIES);
    return result as IGraphDefinitionLinkCompartment;
  }

  /**
   * Create a deep clone of this GraphDefinitionLinkCompartment
   */
  clone(): GraphDefinitionLinkCompartment {
    return new GraphDefinitionLinkCompartment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GraphDefinitionLinkCompartment
   */
  toString(): string {
    const parts: string[] = ['GraphDefinitionLinkCompartment'];
    return parts.join(', ');
  }
}
