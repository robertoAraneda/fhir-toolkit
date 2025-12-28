import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IReference,
  ITaskPerformer,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TaskPerformer */
const TASK_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * TaskPerformer - Who or what performed the task
 *
 * @see https://hl7.org/fhir/R5/taskperformer.html
 *
 * @example
 * const taskPerformer = new TaskPerformer({
 *   // ... properties
 * });
 */
export class TaskPerformer extends BackboneElement implements ITaskPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performance */
  function?: ICodeableConcept;

  /** Who performed the task */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITaskPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, TASK_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TaskPerformer from a JSON object
   */
  static fromJSON(json: ITaskPerformer): TaskPerformer {
    return new TaskPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TaskPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITaskPerformer>): TaskPerformer {
    return new TaskPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TaskPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITaskPerformer) => Partial<ITaskPerformer>): TaskPerformer {
    const currentData = this.toJSON();
    return new TaskPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITaskPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITaskPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TASK_PERFORMER_PROPERTIES);
    return result as ITaskPerformer;
  }

  /**
   * Create a deep clone of this TaskPerformer
   */
  clone(): TaskPerformer {
    return new TaskPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TaskPerformer
   */
  toString(): string {
    const parts: string[] = ['TaskPerformer'];
    return parts.join(', ');
  }
}
