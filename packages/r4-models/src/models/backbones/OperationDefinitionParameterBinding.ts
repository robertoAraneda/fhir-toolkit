import { BackboneElement } from '../base/BackboneElement.js';
import type {
  BindingStrengthType,
  IElement,
  IOperationDefinitionParameterBinding,
} from '@fhir-toolkit/r4-types';

/** Properties specific to OperationDefinitionParameterBinding */
const OPERATION_DEFINITION_PARAMETER_BINDING_PROPERTIES = [
  'strength',
  '_strength',
  'valueSet',
  '_valueSet',
] as const;

/**
 * OperationDefinitionParameterBinding - ValueSet details if this is coded
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionparameterbinding.html
 *
 * @example
 * const operationDefinitionParameterBinding = new OperationDefinitionParameterBinding({
 *   // ... properties
 * });
 */
export class OperationDefinitionParameterBinding extends BackboneElement implements IOperationDefinitionParameterBinding {

  // ============================================================================
  // Properties
  // ============================================================================

  /** required | extensible | preferred | example */
  strength: BindingStrengthType;

  /** Extension for strength */
  _strength?: IElement;

  /** Source of value set */
  valueSet: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationDefinitionParameterBinding>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_DEFINITION_PARAMETER_BINDING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationDefinitionParameterBinding from a JSON object
   */
  static fromJSON(json: IOperationDefinitionParameterBinding): OperationDefinitionParameterBinding {
    return new OperationDefinitionParameterBinding(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationDefinitionParameterBinding with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationDefinitionParameterBinding>): OperationDefinitionParameterBinding {
    return new OperationDefinitionParameterBinding({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationDefinitionParameterBinding by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationDefinitionParameterBinding) => Partial<IOperationDefinitionParameterBinding>): OperationDefinitionParameterBinding {
    const currentData = this.toJSON();
    return new OperationDefinitionParameterBinding({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationDefinitionParameterBinding)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationDefinitionParameterBinding {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OPERATION_DEFINITION_PARAMETER_BINDING_PROPERTIES);
    return result as IOperationDefinitionParameterBinding;
  }

  /**
   * Create a deep clone of this OperationDefinitionParameterBinding
   */
  clone(): OperationDefinitionParameterBinding {
    return new OperationDefinitionParameterBinding(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationDefinitionParameterBinding
   */
  toString(): string {
    const parts: string[] = ['OperationDefinitionParameterBinding'];
    return parts.join(', ');
  }
}
