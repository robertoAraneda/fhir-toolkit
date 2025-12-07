import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenarioProcessStepOperation */
const EXAMPLE_SCENARIO_PROCESS_STEP_OPERATION_PROPERTIES = [
  'type',
  'title',
  '_title',
  'initiator',
  '_initiator',
  'receiver',
  '_receiver',
  'description',
  '_description',
  'initiatorActive',
  '_initiatorActive',
  'receiverActive',
  '_receiverActive',
  'request',
  'response',
] as const;

/**
 * ExampleScenarioProcessStepOperation - Step is simple action
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocessstepoperation.html
 *
 * @example
 * const exampleScenarioProcessStepOperation = new ExampleScenarioProcessStepOperation({
 *   // ... properties
 * });
 */
export class ExampleScenarioProcessStepOperation extends BackboneElement implements IExampleScenarioProcessStepOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Kind of action */
  type?: ICoding;

  /** Label for step */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** Who starts the operation */
  initiator?: string;

  /** Extension for initiator */
  _initiator?: IElement;

  /** Who receives the operation */
  receiver?: string;

  /** Extension for receiver */
  _receiver?: IElement;

  /** Human-friendly description of the operation */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Initiator stays active? */
  initiatorActive?: boolean;

  /** Extension for initiatorActive */
  _initiatorActive?: IElement;

  /** Receiver stays active? */
  receiverActive?: boolean;

  /** Extension for receiverActive */
  _receiverActive?: IElement;

  /** Instance transmitted on invocation */
  request?: IExampleScenarioInstanceContainedInstance;

  /** Instance transmitted on invocation response */
  response?: IExampleScenarioInstanceContainedInstance;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioProcessStepOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_PROCESS_STEP_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioProcessStepOperation from a JSON object
   */
  static fromJSON(json: IExampleScenarioProcessStepOperation): ExampleScenarioProcessStepOperation {
    return new ExampleScenarioProcessStepOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioProcessStepOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioProcessStepOperation>): ExampleScenarioProcessStepOperation {
    return new ExampleScenarioProcessStepOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioProcessStepOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioProcessStepOperation) => Partial<IExampleScenarioProcessStepOperation>): ExampleScenarioProcessStepOperation {
    const currentData = this.toJSON();
    return new ExampleScenarioProcessStepOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioProcessStepOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioProcessStepOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_PROCESS_STEP_OPERATION_PROPERTIES);
    return result as IExampleScenarioProcessStepOperation;
  }

  /**
   * Create a deep clone of this ExampleScenarioProcessStepOperation
   */
  clone(): ExampleScenarioProcessStepOperation {
    return new ExampleScenarioProcessStepOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioProcessStepOperation
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioProcessStepOperation'];
    return parts.join(', ');
  }
}
