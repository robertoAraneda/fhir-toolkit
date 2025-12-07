import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IOperationDefinitionOverload,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OperationDefinitionOverload */
const OPERATION_DEFINITION_OVERLOAD_PROPERTIES = [
  'parameterName',
  '_parameterName',
  'comment',
  '_comment',
] as const;

/**
 * OperationDefinitionOverload - Define overloaded variants for when  generating code
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionoverload.html
 *
 * @example
 * const operationDefinitionOverload = new OperationDefinitionOverload({
 *   // ... properties
 * });
 */
export class OperationDefinitionOverload extends BackboneElement implements IOperationDefinitionOverload {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of parameter to include in overload */
  parameterName?: string[];

  /** Extension for parameterName */
  _parameterName?: IElement;

  /** Comments to go on overload */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationDefinitionOverload>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_DEFINITION_OVERLOAD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationDefinitionOverload from a JSON object
   */
  static fromJSON(json: IOperationDefinitionOverload): OperationDefinitionOverload {
    return new OperationDefinitionOverload(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationDefinitionOverload with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationDefinitionOverload>): OperationDefinitionOverload {
    return new OperationDefinitionOverload({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationDefinitionOverload by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationDefinitionOverload) => Partial<IOperationDefinitionOverload>): OperationDefinitionOverload {
    const currentData = this.toJSON();
    return new OperationDefinitionOverload({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationDefinitionOverload)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationDefinitionOverload {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OPERATION_DEFINITION_OVERLOAD_PROPERTIES);
    return result as IOperationDefinitionOverload;
  }

  /**
   * Create a deep clone of this OperationDefinitionOverload
   */
  clone(): OperationDefinitionOverload {
    return new OperationDefinitionOverload(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationDefinitionOverload
   */
  toString(): string {
    const parts: string[] = ['OperationDefinitionOverload'];
    return parts.join(', ');
  }
}
