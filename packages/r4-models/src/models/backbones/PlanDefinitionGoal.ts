import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IPlanDefinitionGoal,
  IPlanDefinitionGoalTarget,
  IRelatedArtifact,
} from '@fhir-toolkit/r4-types';

/** Properties specific to PlanDefinitionGoal */
const PLAN_DEFINITION_GOAL_PROPERTIES = [
  'category',
  'description',
  'priority',
  'start',
  'addresses',
  'documentation',
  'target',
] as const;

/**
 * PlanDefinitionGoal - What the plan is trying to accomplish
 *
 * @see https://hl7.org/fhir/R4/plandefinitiongoal.html
 *
 * @example
 * const planDefinitionGoal = new PlanDefinitionGoal({
 *   // ... properties
 * });
 */
export class PlanDefinitionGoal extends BackboneElement implements IPlanDefinitionGoal {

  // ============================================================================
  // Properties
  // ============================================================================

  /** E.g. Treatment, dietary, behavioral */
  category?: ICodeableConcept;

  /** Code or text describing the goal */
  description: ICodeableConcept;

  /** high-priority | medium-priority | low-priority */
  priority?: ICodeableConcept;

  /** When goal pursuit begins */
  start?: ICodeableConcept;

  /** What does the goal address */
  addresses?: ICodeableConcept[];

  /** Supporting documentation for the goal */
  documentation?: IRelatedArtifact[];

  /** Target outcome for the goal */
  target?: IPlanDefinitionGoalTarget[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionGoal>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_GOAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionGoal from a JSON object
   */
  static fromJSON(json: IPlanDefinitionGoal): PlanDefinitionGoal {
    return new PlanDefinitionGoal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionGoal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionGoal>): PlanDefinitionGoal {
    return new PlanDefinitionGoal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionGoal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionGoal) => Partial<IPlanDefinitionGoal>): PlanDefinitionGoal {
    const currentData = this.toJSON();
    return new PlanDefinitionGoal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionGoal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionGoal {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_GOAL_PROPERTIES);
    return result as IPlanDefinitionGoal;
  }

  /**
   * Create a deep clone of this PlanDefinitionGoal
   */
  clone(): PlanDefinitionGoal {
    return new PlanDefinitionGoal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionGoal
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionGoal'];
    return parts.join(', ');
  }
}
