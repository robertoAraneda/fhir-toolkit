import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
} from '@fhir-toolkit/r5-types';

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
 * ExampleScenarioProcess - Major process within scenario
 *
 * @see https://hl7.org/fhir/R5/examplescenarioprocess.html
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

  /** Label for procss */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** Human-friendly description of the process */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Status before process starts */
  preConditions?: string;

  /** Extension for preConditions */
  _preConditions?: IElement;

  /** Status after successful completion */
  postConditions?: string;

  /** Extension for postConditions */
  _postConditions?: IElement;

  /** Event within of the process */
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
