import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioProcess,
  IExampleScenarioProcessStep,
  IExampleScenarioProcessStepAlternative,
  IExampleScenarioProcessStepOperation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExampleScenarioProcessStep */
const EXAMPLE_SCENARIO_PROCESS_STEP_PROPERTIES = [
  'process',
  'pause',
  '_pause',
  'operation',
  'alternative',
] as const;

/**
 * ExampleScenarioProcessStep - Each step of the process
 *
 * @see https://hl7.org/fhir/R4B/examplescenarioprocessstep.html
 *
 * @example
 * const exampleScenarioProcessStep = new ExampleScenarioProcessStep({
 *   // ... properties
 * });
 */
export class ExampleScenarioProcessStep extends BackboneElement implements IExampleScenarioProcessStep {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Nested process */
  process?: IExampleScenarioProcess[];

  /** If there is a pause in the flow */
  pause?: boolean;

  /** Extension for pause */
  _pause?: IElement;

  /** Each interaction or action */
  operation?: IExampleScenarioProcessStepOperation;

  /** Alternate non-typical step action */
  alternative?: IExampleScenarioProcessStepAlternative[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioProcessStep>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_PROCESS_STEP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioProcessStep from a JSON object
   */
  static fromJSON(json: IExampleScenarioProcessStep): ExampleScenarioProcessStep {
    return new ExampleScenarioProcessStep(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioProcessStep with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioProcessStep>): ExampleScenarioProcessStep {
    return new ExampleScenarioProcessStep({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioProcessStep by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioProcessStep) => Partial<IExampleScenarioProcessStep>): ExampleScenarioProcessStep {
    const currentData = this.toJSON();
    return new ExampleScenarioProcessStep({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioProcessStep)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioProcessStep {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_PROCESS_STEP_PROPERTIES);
    return result as IExampleScenarioProcessStep;
  }

  /**
   * Create a deep clone of this ExampleScenarioProcessStep
   */
  clone(): ExampleScenarioProcessStep {
    return new ExampleScenarioProcessStep(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioProcessStep
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioProcessStep'];
    return parts.join(', ');
  }
}
