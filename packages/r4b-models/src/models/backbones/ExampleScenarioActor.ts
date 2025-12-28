import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ExampleScenarioActorTypeType,
  IElement,
  IExampleScenarioActor,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExampleScenarioActor */
const EXAMPLE_SCENARIO_ACTOR_PROPERTIES = [
  'actorId',
  '_actorId',
  'type',
  '_type',
  'name',
  '_name',
  'description',
  '_description',
] as const;

/**
 * ExampleScenarioActor - Actor participating in the resource
 *
 * @see https://hl7.org/fhir/R4B/examplescenarioactor.html
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
  actorId: string;

  /** Extension for actorId */
  _actorId?: IElement;

  /** person | entity */
  type: ExampleScenarioActorTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The name of the actor as shown in the page */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** The description of the actor */
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
