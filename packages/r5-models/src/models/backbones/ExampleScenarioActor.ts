import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ExampleScenarioActorTypeType,
  IElement,
  IExampleScenarioActor,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenarioActor */
const EXAMPLE_SCENARIO_ACTOR_PROPERTIES = [
  'key',
  '_key',
  'type',
  '_type',
  'title',
  '_title',
  'description',
  '_description',
] as const;

/**
 * ExampleScenarioActor - Individual involved in exchange
 *
 * @see https://hl7.org/fhir/R5/examplescenarioactor.html
 *
 * @example
 * const exampleScenarioActor = new ExampleScenarioActor({
 *   // ... properties
 * });
 */
export class ExampleScenarioActor extends BackboneElement implements IExampleScenarioActor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** ID or acronym of the actor */
  key: string;

  /** Extension for key */
  _key?: IElement;

  /** person | system */
  type: ExampleScenarioActorTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Label for actor when rendering */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** Details about actor */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExampleScenarioActor>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_ACTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenarioActor from a JSON object
   */
  static fromJSON(json: IExampleScenarioActor): ExampleScenarioActor {
    return new ExampleScenarioActor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenarioActor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenarioActor>): ExampleScenarioActor {
    return new ExampleScenarioActor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenarioActor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenarioActor) => Partial<IExampleScenarioActor>): ExampleScenarioActor {
    const currentData = this.toJSON();
    return new ExampleScenarioActor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenarioActor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenarioActor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_ACTOR_PROPERTIES);
    return result as IExampleScenarioActor;
  }

  /**
   * Create a deep clone of this ExampleScenarioActor
   */
  clone(): ExampleScenarioActor {
    return new ExampleScenarioActor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenarioActor
   */
  toString(): string {
    const parts: string[] = ['ExampleScenarioActor'];
    return parts.join(', ');
  }
}
