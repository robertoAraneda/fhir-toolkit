import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IPlanDefinitionGoalTarget,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4-types';

/** Properties specific to PlanDefinitionGoalTarget */
const PLAN_DEFINITION_GOAL_TARGET_PROPERTIES = [
  'measure',
  'detailQuantity',
  'detailRange',
  'detailCodeableConcept',
  'due',
] as const;

/**
 * PlanDefinitionGoalTarget - Target outcome for the goal
 *
 * @see https://hl7.org/fhir/R4/plandefinitiongoaltarget.html
 *
 * @example
 * const planDefinitionGoalTarget = new PlanDefinitionGoalTarget({
 *   // ... properties
 * });
 */
export class PlanDefinitionGoalTarget extends BackboneElement implements IPlanDefinitionGoalTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The parameter whose value is to be tracked */
  measure?: ICodeableConcept;

  /** The target value to be achieved */
  detailQuantity?: IQuantity;

  /** The target value to be achieved */
  detailRange?: IRange;

  /** The target value to be achieved */
  detailCodeableConcept?: ICodeableConcept;

  /** Reach goal within */
  due?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionGoalTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_GOAL_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionGoalTarget from a JSON object
   */
  static fromJSON(json: IPlanDefinitionGoalTarget): PlanDefinitionGoalTarget {
    return new PlanDefinitionGoalTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionGoalTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionGoalTarget>): PlanDefinitionGoalTarget {
    return new PlanDefinitionGoalTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionGoalTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionGoalTarget) => Partial<IPlanDefinitionGoalTarget>): PlanDefinitionGoalTarget {
    const currentData = this.toJSON();
    return new PlanDefinitionGoalTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionGoalTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionGoalTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_GOAL_TARGET_PROPERTIES);
    return result as IPlanDefinitionGoalTarget;
  }

  /**
   * Create a deep clone of this PlanDefinitionGoalTarget
   */
  clone(): PlanDefinitionGoalTarget {
    return new PlanDefinitionGoalTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionGoalTarget
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionGoalTarget'];
    return parts.join(', ');
  }
}
