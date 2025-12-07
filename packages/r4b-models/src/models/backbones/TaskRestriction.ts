import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPeriod,
  IReference,
  ITaskRestriction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TaskRestriction */
const TASK_RESTRICTION_PROPERTIES = [
  'repetitions',
  '_repetitions',
  'period',
  'recipient',
] as const;

/**
 * TaskRestriction - Constraints on fulfillment tasks
 *
 * @see https://hl7.org/fhir/R4/taskrestriction.html
 *
 * @example
 * const taskRestriction = new TaskRestriction({
 *   // ... properties
 * });
 */
export class TaskRestriction extends BackboneElement implements ITaskRestriction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How many times to repeat */
  repetitions?: number;

  /** Extension for repetitions */
  _repetitions?: IElement;

  /** When fulfillment sought */
  period?: IPeriod;

  /** For whom is fulfillment sought? */
  recipient?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'Organization'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITaskRestriction>) {
    super(data);
    if (data) {
      this.assignProps(data, TASK_RESTRICTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TaskRestriction from a JSON object
   */
  static fromJSON(json: ITaskRestriction): TaskRestriction {
    return new TaskRestriction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TaskRestriction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITaskRestriction>): TaskRestriction {
    return new TaskRestriction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TaskRestriction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITaskRestriction) => Partial<ITaskRestriction>): TaskRestriction {
    const currentData = this.toJSON();
    return new TaskRestriction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITaskRestriction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITaskRestriction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TASK_RESTRICTION_PROPERTIES);
    return result as ITaskRestriction;
  }

  /**
   * Create a deep clone of this TaskRestriction
   */
  clone(): TaskRestriction {
    return new TaskRestriction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TaskRestriction
   */
  toString(): string {
    const parts: string[] = ['TaskRestriction'];
    return parts.join(', ');
  }
}
