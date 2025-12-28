import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IExampleScenarioInstance,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioInstanceVersion,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenarioInstance */
const EXAMPLE_SCENARIO_INSTANCE_PROPERTIES = [
  'key',
  '_key',
  'structureType',
  'structureVersion',
  '_structureVersion',
  'structureProfileCanonical',
  '_structureProfileCanonical',
  'structureProfileUri',
  '_structureProfileUri',
  'title',
  '_title',
  'description',
  '_description',
  'content',
  'version',
  'containedInstance',
] as const;

/**
 * ExampleScenarioInstance - Data used in the scenario
 *
 * @see https://hl7.org/fhir/R5/examplescenarioinstance.html
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

  /** ID or acronym of the instance */
  key: string;

  /** Extension for key */
  _key?: IElement;

  /** Data structure for example */
  structureType: ICoding;

  /** E.g. 4.0.1 */
  structureVersion?: string;

  /** Extension for structureVersion */
  _structureVersion?: IElement;

  /** Rules instance adheres to */
  structureProfileCanonical?: string;

  /** Extension for structureProfileCanonical */
  _structureProfileCanonical?: IElement;

  /** Rules instance adheres to */
  structureProfileUri?: string;

  /** Extension for structureProfileUri */
  _structureProfileUri?: IElement;

  /** Label for instance */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** Human-friendly description of the instance */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Example instance data */
  content?: IReference;

  /** Snapshot of instance that changes */
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
