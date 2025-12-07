import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirement,
  IElement,
  IRequestOrchestrationActionOutput,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionOutput */
const REQUEST_ORCHESTRATION_ACTION_OUTPUT_PROPERTIES = [
  'title',
  '_title',
  'requirement',
  'relatedData',
  '_relatedData',
] as const;

/**
 * RequestOrchestrationActionOutput - Output data definition
 *
 * @see https://hl7.org/fhir/R4/requestorchestrationactionoutput.html
 *
 * @example
 * const requestOrchestrationActionOutput = new RequestOrchestrationActionOutput({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionOutput extends BackboneElement implements IRequestOrchestrationActionOutput {

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

  constructor(data?: Partial<IRequestOrchestrationActionOutput>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_OUTPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionOutput from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionOutput): RequestOrchestrationActionOutput {
    return new RequestOrchestrationActionOutput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionOutput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionOutput>): RequestOrchestrationActionOutput {
    return new RequestOrchestrationActionOutput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionOutput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionOutput) => Partial<IRequestOrchestrationActionOutput>): RequestOrchestrationActionOutput {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionOutput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionOutput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionOutput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_OUTPUT_PROPERTIES);
    return result as IRequestOrchestrationActionOutput;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionOutput
   */
  clone(): RequestOrchestrationActionOutput {
    return new RequestOrchestrationActionOutput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionOutput
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionOutput'];
    return parts.join(', ');
  }
}
