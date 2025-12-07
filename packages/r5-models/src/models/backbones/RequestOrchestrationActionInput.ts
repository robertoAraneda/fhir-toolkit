import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirement,
  IElement,
  IRequestOrchestrationActionInput,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionInput */
const REQUEST_ORCHESTRATION_ACTION_INPUT_PROPERTIES = [
  'title',
  '_title',
  'requirement',
  'relatedData',
  '_relatedData',
] as const;

/**
 * RequestOrchestrationActionInput - Input data requirements
 *
 * @see https://hl7.org/fhir/R4/requestorchestrationactioninput.html
 *
 * @example
 * const requestOrchestrationActionInput = new RequestOrchestrationActionInput({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionInput extends BackboneElement implements IRequestOrchestrationActionInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** User-visible title */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** What data is provided */
  requirement?: IDataRequirement;

  /** What data is provided */
  relatedData?: string;

  /** Extension for relatedData */
  _relatedData?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestrationActionInput>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionInput from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionInput): RequestOrchestrationActionInput {
    return new RequestOrchestrationActionInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionInput>): RequestOrchestrationActionInput {
    return new RequestOrchestrationActionInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionInput) => Partial<IRequestOrchestrationActionInput>): RequestOrchestrationActionInput {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_INPUT_PROPERTIES);
    return result as IRequestOrchestrationActionInput;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionInput
   */
  clone(): RequestOrchestrationActionInput {
    return new RequestOrchestrationActionInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionInput
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionInput'];
    return parts.join(', ');
  }
}
