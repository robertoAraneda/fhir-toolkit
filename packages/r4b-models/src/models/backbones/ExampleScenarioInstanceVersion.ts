import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioInstanceVersion,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExampleScenarioInstanceVersion */
const EXAMPLE_SCENARIO_INSTANCE_VERSION_PROPERTIES = [
  'versionId',
  '_versionId',
  'description',
  '_description',
] as const;

/**
 * ExampleScenarioInstanceVersion - A specific version of the resource
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstanceversion.html
 *
 * @example
 * const exampleScenarioInstanceVersion = new ExampleScenarioInstanceVersion({
 *   // ... properties
 * });
 */
export class ExampleScenarioInstanceVersion extends BackboneElement implements IExampleScenarioInstanceVersion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The identifier of a specific version of a resource */
  versionId: string;

  /** Extension for versionId */
  _versionId?: IElement;

  /** The description of the resource version */
  description: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioInstanceVersion>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_INSTANCE_VERSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioInstanceVersion from a JSON object
   */
  static fromJSON(json: IExampleScenarioInstanceVersion): ExampleScenarioInstanceVersion {
    return new ExampleScenarioInstanceVersion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioInstanceVersion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioInstanceVersion>): ExampleScenarioInstanceVersion {
    return new ExampleScenarioInstanceVersion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioInstanceVersion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioInstanceVersion) => Partial<IExampleScenarioInstanceVersion>): ExampleScenarioInstanceVersion {
    const currentData = this.toJSON();
    return new ExampleScenarioInstanceVersion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioInstanceVersion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioInstanceVersion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_INSTANCE_VERSION_PROPERTIES);
    return result as IExampleScenarioInstanceVersion;
  }

  /**
   * Create a deep clone of this ExampleScenarioInstanceVersion
   */
  clone(): ExampleScenarioInstanceVersion {
    return new ExampleScenarioInstanceVersion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioInstanceVersion
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioInstanceVersion'];
    return parts.join(', ');
  }
}
