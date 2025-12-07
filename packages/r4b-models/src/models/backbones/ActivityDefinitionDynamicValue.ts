import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IActivityDefinitionDynamicValue,
  IElement,
  IExpression,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ActivityDefinitionDynamicValue */
const ACTIVITY_DEFINITION_DYNAMIC_VALUE_PROPERTIES = [
  'path',
  '_path',
  'expression',
] as const;

/**
 * ActivityDefinitionDynamicValue - Dynamic aspects of the definition
 *
 * @see https://hl7.org/fhir/R4/activitydefinitiondynamicvalue.html
 *
 * @example
 * const activityDefinitionDynamicValue = new ActivityDefinitionDynamicValue({
 *   // ... properties
 * });
 */
export class ActivityDefinitionDynamicValue extends BackboneElement implements IActivityDefinitionDynamicValue {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The path to the element to be set dynamically */
  path: string;

  /** Extension for path */
  _path?: IElement;

  /** An expression that provides the dynamic value for the customization */
  expression: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IActivityDefinitionDynamicValue>) {
    super(data);
    if (data) {
      this.assignProps(data, ACTIVITY_DEFINITION_DYNAMIC_VALUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ActivityDefinitionDynamicValue from a JSON object
   */
  static fromJSON(json: IActivityDefinitionDynamicValue): ActivityDefinitionDynamicValue {
    return new ActivityDefinitionDynamicValue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ActivityDefinitionDynamicValue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IActivityDefinitionDynamicValue>): ActivityDefinitionDynamicValue {
    return new ActivityDefinitionDynamicValue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ActivityDefinitionDynamicValue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IActivityDefinitionDynamicValue) => Partial<IActivityDefinitionDynamicValue>): ActivityDefinitionDynamicValue {
    const currentData = this.toJSON();
    return new ActivityDefinitionDynamicValue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IActivityDefinitionDynamicValue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IActivityDefinitionDynamicValue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACTIVITY_DEFINITION_DYNAMIC_VALUE_PROPERTIES);
    return result as IActivityDefinitionDynamicValue;
  }

  /**
   * Create a deep clone of this ActivityDefinitionDynamicValue
   */
  clone(): ActivityDefinitionDynamicValue {
    return new ActivityDefinitionDynamicValue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ActivityDefinitionDynamicValue
   */
  toString(): string {
    const parts: string[] = ['ActivityDefinitionDynamicValue'];
    return parts.join(', ');
  }
}
