import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioInstance,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioInstanceVersion,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExampleScenarioInstance */
const EXAMPLE_SCENARIO_INSTANCE_PROPERTIES = [
  'resourceId',
  '_resourceId',
  'resourceType',
  '_resourceType',
  'name',
  '_name',
  'description',
  '_description',
  'version',
  'containedInstance',
] as const;

/**
 * ExampleScenarioInstance - Each resource and each version that is present in the workflow
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstance.html
 *
 * @example
 * const exampleScenarioInstance = new ExampleScenarioInstance({
 *   // ... properties
 * });
 */
export class ExampleScenarioInstance extends BackboneElement implements IExampleScenarioInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The id of the resource for referencing */
  resourceId: string;

  /** Extension for resourceId */
  _resourceId?: IElement;

  /** The type of the resource */
  resourceType: string;

  /** Extension for resourceType */
  _resourceType?: IElement;

  /** A short name for the resource instance */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Human-friendly description of the resource instance */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** A specific version of the resource */
  version?: IExampleScenarioInstanceVersion[];

  /** Resources contained in the instance */
  containedInstance?: IExampleScenarioInstanceContainedInstance[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioInstance from a JSON object
   */
  static fromJSON(json: IExampleScenarioInstance): ExampleScenarioInstance {
    return new ExampleScenarioInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioInstance>): ExampleScenarioInstance {
    return new ExampleScenarioInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioInstance) => Partial<IExampleScenarioInstance>): ExampleScenarioInstance {
    const currentData = this.toJSON();
    return new ExampleScenarioInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_INSTANCE_PROPERTIES);
    return result as IExampleScenarioInstance;
  }

  /**
   * Create a deep clone of this ExampleScenarioInstance
   */
  clone(): ExampleScenarioInstance {
    return new ExampleScenarioInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioInstance
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioInstance'];
    return parts.join(', ');
  }
}
