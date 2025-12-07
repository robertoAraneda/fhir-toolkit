import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionConditionKindType,
  IElement,
  IExpression,
  IRequestOrchestrationActionCondition,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionCondition */
const REQUEST_ORCHESTRATION_ACTION_CONDITION_PROPERTIES = [
  'kind',
  '_kind',
  'expression',
] as const;

/**
 * RequestOrchestrationActionCondition - Whether or not the action is applicable
 *
 * @see https://hl7.org/fhir/R4/requestorchestrationactioncondition.html
 *
 * @example
 * const requestOrchestrationActionCondition = new RequestOrchestrationActionCondition({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionCondition extends BackboneElement implements IRequestOrchestrationActionCondition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** applicability | start | stop */
  kind: ActionConditionKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** Boolean-valued expression */
  expression?: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestrationActionCondition>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_CONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionCondition from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionCondition): RequestOrchestrationActionCondition {
    return new RequestOrchestrationActionCondition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionCondition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionCondition>): RequestOrchestrationActionCondition {
    return new RequestOrchestrationActionCondition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionCondition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionCondition) => Partial<IRequestOrchestrationActionCondition>): RequestOrchestrationActionCondition {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionCondition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionCondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionCondition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_CONDITION_PROPERTIES);
    return result as IRequestOrchestrationActionCondition;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionCondition
   */
  clone(): RequestOrchestrationActionCondition {
    return new RequestOrchestrationActionCondition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionCondition
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionCondition'];
    return parts.join(', ');
  }
}
