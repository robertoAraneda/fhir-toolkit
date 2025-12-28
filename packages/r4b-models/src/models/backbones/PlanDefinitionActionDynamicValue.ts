import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExpression,
  IPlanDefinitionActionDynamicValue,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PlanDefinitionActionDynamicValue */
const PLAN_DEFINITION_ACTION_DYNAMIC_VALUE_PROPERTIES = [
  'path',
  '_path',
  'expression',
] as const;

/**
 * PlanDefinitionActionDynamicValue - Dynamic aspects of the definition
 *
 * @see https://hl7.org/fhir/R4B/plandefinitionactiondynamicvalue.html
 *
 * @example
 * const planDefinitionActionDynamicValue = new PlanDefinitionActionDynamicValue({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionDynamicValue extends BackboneElement implements IPlanDefinitionActionDynamicValue {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The path to the element to be set dynamically */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** An expression that provides the dynamic value for the customization */
  expression?: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActionDynamicValue>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_DYNAMIC_VALUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionDynamicValue from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionDynamicValue): PlanDefinitionActionDynamicValue {
    return new PlanDefinitionActionDynamicValue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionDynamicValue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionDynamicValue>): PlanDefinitionActionDynamicValue {
    return new PlanDefinitionActionDynamicValue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionDynamicValue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionDynamicValue) => Partial<IPlanDefinitionActionDynamicValue>): PlanDefinitionActionDynamicValue {
    const currentData = this.toJSON();
    return new PlanDefinitionActionDynamicValue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionDynamicValue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionDynamicValue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_DYNAMIC_VALUE_PROPERTIES);
    return result as IPlanDefinitionActionDynamicValue;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionDynamicValue
   */
  clone(): PlanDefinitionActionDynamicValue {
    return new PlanDefinitionActionDynamicValue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionDynamicValue
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionDynamicValue'];
    return parts.join(', ');
  }
}
