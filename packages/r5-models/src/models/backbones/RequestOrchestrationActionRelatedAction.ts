import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IElement,
  IRange,
  IRequestOrchestrationActionRelatedAction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionRelatedAction */
const REQUEST_ORCHESTRATION_ACTION_RELATED_ACTION_PROPERTIES = [
  'targetId',
  '_targetId',
  'relationship',
  '_relationship',
  'endRelationship',
  '_endRelationship',
  'offsetDuration',
  'offsetRange',
] as const;

/**
 * RequestOrchestrationActionRelatedAction - Relationship to another action
 *
 * @see https://hl7.org/fhir/R4/requestorchestrationactionrelatedaction.html
 *
 * @example
 * const requestOrchestrationActionRelatedAction = new RequestOrchestrationActionRelatedAction({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionRelatedAction extends BackboneElement implements IRequestOrchestrationActionRelatedAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What action this is related to */
  targetId: string;

  /** Extension for targetId */
  _targetId?: IElement;

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end */
  relationship: ActionRelationshipTypeType;

  /** Extension for relationship */
  _relationship?: IElement;

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end */
  endRelationship?: ActionRelationshipTypeType;

  /** Extension for endRelationship */
  _endRelationship?: IElement;

  /** Time offset for the relationship */
  offsetDuration?: IDuration;

  /** Time offset for the relationship */
  offsetRange?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestrationActionRelatedAction>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_RELATED_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionRelatedAction from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionRelatedAction): RequestOrchestrationActionRelatedAction {
    return new RequestOrchestrationActionRelatedAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionRelatedAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionRelatedAction>): RequestOrchestrationActionRelatedAction {
    return new RequestOrchestrationActionRelatedAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionRelatedAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionRelatedAction) => Partial<IRequestOrchestrationActionRelatedAction>): RequestOrchestrationActionRelatedAction {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionRelatedAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionRelatedAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionRelatedAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_RELATED_ACTION_PROPERTIES);
    return result as IRequestOrchestrationActionRelatedAction;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionRelatedAction
   */
  clone(): RequestOrchestrationActionRelatedAction {
    return new RequestOrchestrationActionRelatedAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionRelatedAction
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionRelatedAction'];
    return parts.join(', ');
  }
}
