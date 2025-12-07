import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExampleScenarioProcess */
const EXAMPLE_SCENARIO_PROCESS_PROPERTIES = [
  'title',
  '_title',
  'description',
  '_description',
  'preConditions',
  '_preConditions',
  'postConditions',
  '_postConditions',
  'step',
] as const;

/**
 * ExampleScenarioProcess - Each major process - a group of operations
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocess.html
 *
 * @example
 * const exampleScenarioProcess = new ExampleScenarioProcess({
 *   // ... properties
 * });
 */
export class ExampleScenarioProcess extends BackboneElement implements IExampleScenarioProcess {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The diagram title of the group of operations */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** A longer description of the group of operations */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Description of initial status before the process starts */
  preConditions?: string;

  /** Extension for preConditions */
  _preConditions?: IElement;

  /** Description of final status after the process ends */
  postConditions?: string;

  /** Extension for postConditions */
  _postConditions?: IElement;

  /** Each step of the process */
  step?: IExampleScenarioProcessStep[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioProcess>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_PROCESS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioProcess from a JSON object
   */
  static fromJSON(json: IExampleScenarioProcess): ExampleScenarioProcess {
    return new ExampleScenarioProcess(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioProcess with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioProcess>): ExampleScenarioProcess {
    return new ExampleScenarioProcess({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioProcess by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioProcess) => Partial<IExampleScenarioProcess>): ExampleScenarioProcess {
    const currentData = this.toJSON();
    return new ExampleScenarioProcess({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioProcess)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioProcess {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_PROCESS_PROPERTIES);
    return result as IExampleScenarioProcess;
  }

  /**
   * Create a deep clone of this ExampleScenarioProcess
   */
  clone(): ExampleScenarioProcess {
    return new ExampleScenarioProcess(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioProcess
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioProcess'];
    return parts.join(', ');
  }
}
