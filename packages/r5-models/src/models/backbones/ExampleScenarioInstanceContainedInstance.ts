import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioInstanceContainedInstance,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenarioInstanceContainedInstance */
const EXAMPLE_SCENARIO_INSTANCE_CONTAINED_INSTANCE_PROPERTIES = [
  'instanceReference',
  '_instanceReference',
  'versionReference',
  '_versionReference',
] as const;

/**
 * ExampleScenarioInstanceContainedInstance - Resources contained in the instance
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstancecontainedinstance.html
 *
 * @example
 * const exampleScenarioInstanceContainedInstance = new ExampleScenarioInstanceContainedInstance({
 *   // ... properties
 * });
 */
export class ExampleScenarioInstanceContainedInstance extends BackboneElement implements IExampleScenarioInstanceContainedInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Key of contained instance */
  instanceReference: string;

  /** Extension for instanceReference */
  _instanceReference?: IElement;

  /** Key of contained instance version */
  versionReference?: string;

  /** Extension for versionReference */
  _versionReference?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioInstanceContainedInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_INSTANCE_CONTAINED_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioInstanceContainedInstance from a JSON object
   */
  static fromJSON(json: IExampleScenarioInstanceContainedInstance): ExampleScenarioInstanceContainedInstance {
    return new ExampleScenarioInstanceContainedInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioInstanceContainedInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioInstanceContainedInstance>): ExampleScenarioInstanceContainedInstance {
    return new ExampleScenarioInstanceContainedInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioInstanceContainedInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioInstanceContainedInstance) => Partial<IExampleScenarioInstanceContainedInstance>): ExampleScenarioInstanceContainedInstance {
    const currentData = this.toJSON();
    return new ExampleScenarioInstanceContainedInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioInstanceContainedInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioInstanceContainedInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_INSTANCE_CONTAINED_INSTANCE_PROPERTIES);
    return result as IExampleScenarioInstanceContainedInstance;
  }

  /**
   * Create a deep clone of this ExampleScenarioInstanceContainedInstance
   */
  clone(): ExampleScenarioInstanceContainedInstance {
    return new ExampleScenarioInstanceContainedInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioInstanceContainedInstance
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioInstanceContainedInstance'];
    return parts.join(', ');
  }
}
