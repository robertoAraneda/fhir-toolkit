import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioProcessStep,
  IExampleScenarioProcessStepAlternative,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExampleScenarioProcessStepAlternative */
const EXAMPLE_SCENARIO_PROCESS_STEP_ALTERNATIVE_PROPERTIES = [
  'title',
  '_title',
  'description',
  '_description',
  'step',
] as const;

/**
 * ExampleScenarioProcessStepAlternative - Alternate non-typical step action
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocessstepalternative.html
 *
 * @example
 * const exampleScenarioProcessStepAlternative = new ExampleScenarioProcessStepAlternative({
 *   // ... properties
 * });
 */
export class ExampleScenarioProcessStepAlternative extends BackboneElement implements IExampleScenarioProcessStepAlternative {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for alternative */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** A human-readable description of each option */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** What happens in each alternative option */
  step?: IExampleScenarioProcessStep[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioProcessStepAlternative>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_PROCESS_STEP_ALTERNATIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioProcessStepAlternative from a JSON object
   */
  static fromJSON(json: IExampleScenarioProcessStepAlternative): ExampleScenarioProcessStepAlternative {
    return new ExampleScenarioProcessStepAlternative(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioProcessStepAlternative with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioProcessStepAlternative>): ExampleScenarioProcessStepAlternative {
    return new ExampleScenarioProcessStepAlternative({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioProcessStepAlternative by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioProcessStepAlternative) => Partial<IExampleScenarioProcessStepAlternative>): ExampleScenarioProcessStepAlternative {
    const currentData = this.toJSON();
    return new ExampleScenarioProcessStepAlternative({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioProcessStepAlternative)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioProcessStepAlternative {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_PROCESS_STEP_ALTERNATIVE_PROPERTIES);
    return result as IExampleScenarioProcessStepAlternative;
  }

  /**
   * Create a deep clone of this ExampleScenarioProcessStepAlternative
   */
  clone(): ExampleScenarioProcessStepAlternative {
    return new ExampleScenarioProcessStepAlternative(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioProcessStepAlternative
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioProcessStepAlternative'];
    return parts.join(', ');
  }
}
