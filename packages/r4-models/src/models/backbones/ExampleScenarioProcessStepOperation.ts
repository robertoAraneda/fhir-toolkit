import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExampleScenarioProcessStepOperation */
const EXAMPLE_SCENARIO_PROCESS_STEP_OPERATION_PROPERTIES = [
  'number',
  '_number',
  'type',
  '_type',
  'name',
  '_name',
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
 * ExampleScenarioProcessStepOperation - Each interaction or action
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

  /** The sequential number of the interaction */
  number: string;

  /** Extension for number */
  _number?: IElement;

  /** The type of operation - CRUD */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** The human-friendly name of the interaction */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Who starts the transaction */
  initiator?: string;

  /** Extension for initiator */
  _initiator?: IElement;

  /** Who receives the transaction */
  receiver?: string;

  /** Extension for receiver */
  _receiver?: IElement;

  /** A comment to be inserted in the diagram */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Whether the initiator is deactivated right after the transaction */
  initiatorActive?: boolean;

  /** Extension for initiatorActive */
  _initiatorActive?: IElement;

  /** Whether the receiver is deactivated right after the transaction */
  receiverActive?: boolean;

  /** Extension for receiverActive */
  _receiverActive?: IElement;

  /** Each resource instance used by the initiator */
  request?: IExampleScenarioInstanceContainedInstance;

  /** Each resource instance used by the responder */
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
