import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  IGoalTarget,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to GoalTarget */
const GOAL_TARGET_PROPERTIES = [
  'measure',
  'detailQuantity',
  'detailRange',
  'detailCodeableConcept',
  'detailString',
  '_detailString',
  'detailBoolean',
  '_detailBoolean',
  'detailInteger',
  '_detailInteger',
  'detailRatio',
  'dueDate',
  '_dueDate',
  'dueDuration',
] as const;

/**
 * GoalTarget - Target outcome for the goal
 *
 * @see https://hl7.org/fhir/R4B/goaltarget.html
 *
 * @example
 * const goalTarget = new GoalTarget({
 *   // ... properties
 * });
 */
export class GoalTarget extends BackboneElement implements IGoalTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The parameter whose value is being tracked */
  measure?: ICodeableConcept;

  /** The target value to be achieved */
  detailQuantity?: IQuantity;

  /** The target value to be achieved */
  detailRange?: IRange;

  /** The target value to be achieved */
  detailCodeableConcept?: ICodeableConcept;

  /** The target value to be achieved */
  detailString?: string;

  /** Extension for detailString */
  _detailString?: IElement;

  /** The target value to be achieved */
  detailBoolean?: boolean;

  /** Extension for detailBoolean */
  _detailBoolean?: IElement;

  /** The target value to be achieved */
  detailInteger?: number;

  /** Extension for detailInteger */
  _detailInteger?: IElement;

  /** The target value to be achieved */
  detailRatio?: IRatio;

  /** Reach goal on or before */
  dueDate?: string;

  /** Extension for dueDate */
  _dueDate?: IElement;

  /** Reach goal on or before */
  dueDuration?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGoalTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, GOAL_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GoalTarget from a JSON object
   */
  static fromJSON(json: IGoalTarget): GoalTarget {
    return new GoalTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GoalTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGoalTarget>): GoalTarget {
    return new GoalTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GoalTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGoalTarget) => Partial<IGoalTarget>): GoalTarget {
    const currentData = this.toJSON();
    return new GoalTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGoalTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGoalTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GOAL_TARGET_PROPERTIES);
    return result as IGoalTarget;
  }

  /**
   * Create a deep clone of this GoalTarget
   */
  clone(): GoalTarget {
    return new GoalTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GoalTarget
   */
  toString(): string {
    const parts: string[] = ['GoalTarget'];
    return parts.join(', ');
  }
}
