import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPlanDefinitionActor,
  IPlanDefinitionActorOption,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PlanDefinitionActor */
const PLAN_DEFINITION_ACTOR_PROPERTIES = [
  'title',
  '_title',
  'description',
  '_description',
  'option',
] as const;

/**
 * PlanDefinitionActor - Actors within the plan
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactor.html
 *
 * @example
 * const planDefinitionActor = new PlanDefinitionActor({
 *   // ... properties
 * });
 */
export class PlanDefinitionActor extends BackboneElement implements IPlanDefinitionActor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** User-visible title */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Describes the actor */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Who or what can be this actor */
  option: IPlanDefinitionActorOption[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActor>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActor from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActor): PlanDefinitionActor {
    return new PlanDefinitionActor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActor>): PlanDefinitionActor {
    return new PlanDefinitionActor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActor) => Partial<IPlanDefinitionActor>): PlanDefinitionActor {
    const currentData = this.toJSON();
    return new PlanDefinitionActor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTOR_PROPERTIES);
    return result as IPlanDefinitionActor;
  }

  /**
   * Create a deep clone of this PlanDefinitionActor
   */
  clone(): PlanDefinitionActor {
    return new PlanDefinitionActor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActor
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActor'];
    return parts.join(', ');
  }
}
