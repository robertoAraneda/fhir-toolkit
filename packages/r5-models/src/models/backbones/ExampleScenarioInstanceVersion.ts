import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExampleScenarioInstanceVersion,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenarioInstanceVersion */
const EXAMPLE_SCENARIO_INSTANCE_VERSION_PROPERTIES = [
  'key',
  '_key',
  'title',
  '_title',
  'description',
  '_description',
  'content',
] as const;

/**
 * ExampleScenarioInstanceVersion - Snapshot of instance that changes
 *
 * @see https://hl7.org/fhir/R5/examplescenarioinstanceversion.html
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

  /** ID or acronym of the version */
  key: string;

  /** Extension for key */
  _key?: IElement;

  /** Label for instance version */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** Details about version */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Example instance version data */
  content?: IReference;

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
