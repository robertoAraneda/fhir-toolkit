import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExpression,
  IRequestOrchestrationActionDynamicValue,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionDynamicValue */
const REQUEST_ORCHESTRATION_ACTION_DYNAMIC_VALUE_PROPERTIES = [
  'path',
  '_path',
  'expression',
] as const;

/**
 * RequestOrchestrationActionDynamicValue - Dynamic aspects of the definition
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationactiondynamicvalue.html
 *
 * @example
 * const requestOrchestrationActionDynamicValue = new RequestOrchestrationActionDynamicValue({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionDynamicValue extends BackboneElement implements IRequestOrchestrationActionDynamicValue {

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

  constructor(data?: Partial<IRequestOrchestrationActionDynamicValue>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_DYNAMIC_VALUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionDynamicValue from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionDynamicValue): RequestOrchestrationActionDynamicValue {
    return new RequestOrchestrationActionDynamicValue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionDynamicValue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionDynamicValue>): RequestOrchestrationActionDynamicValue {
    return new RequestOrchestrationActionDynamicValue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionDynamicValue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionDynamicValue) => Partial<IRequestOrchestrationActionDynamicValue>): RequestOrchestrationActionDynamicValue {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionDynamicValue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionDynamicValue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionDynamicValue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_DYNAMIC_VALUE_PROPERTIES);
    return result as IRequestOrchestrationActionDynamicValue;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionDynamicValue
   */
  clone(): RequestOrchestrationActionDynamicValue {
    return new RequestOrchestrationActionDynamicValue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionDynamicValue
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionDynamicValue'];
    return parts.join(', ');
  }
}
