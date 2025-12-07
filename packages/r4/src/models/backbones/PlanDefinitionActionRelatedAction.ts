import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionRelationshipTypeType,
  IDuration,
  IElement,
  IPlanDefinitionActionRelatedAction,
  IRange,
} from '@fhir-toolkit/r4-types';

/** Properties specific to PlanDefinitionActionRelatedAction */
const PLAN_DEFINITION_ACTION_RELATED_ACTION_PROPERTIES = [
  'actionId',
  '_actionId',
  'relationship',
  '_relationship',
  'offsetDuration',
  'offsetRange',
] as const;

/**
 * PlanDefinitionActionRelatedAction - Relationship to another action
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactionrelatedaction.html
 *
 * @example
 * const planDefinitionActionRelatedAction = new PlanDefinitionActionRelatedAction({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionRelatedAction extends BackboneElement implements IPlanDefinitionActionRelatedAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What action is this related to */
  actionId: string;

  /** Extension for actionId */
  _actionId?: IElement;

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: ActionRelationshipTypeType;

  /** Extension for relationship */
  _relationship?: IElement;

  /** Time offset for the relationship */
  offsetDuration?: IDuration;

  /** Time offset for the relationship */
  offsetRange?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActionRelatedAction>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_RELATED_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionRelatedAction from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionRelatedAction): PlanDefinitionActionRelatedAction {
    return new PlanDefinitionActionRelatedAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionRelatedAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionRelatedAction>): PlanDefinitionActionRelatedAction {
    return new PlanDefinitionActionRelatedAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionRelatedAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionRelatedAction) => Partial<IPlanDefinitionActionRelatedAction>): PlanDefinitionActionRelatedAction {
    const currentData = this.toJSON();
    return new PlanDefinitionActionRelatedAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionRelatedAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionRelatedAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_RELATED_ACTION_PROPERTIES);
    return result as IPlanDefinitionActionRelatedAction;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionRelatedAction
   */
  clone(): PlanDefinitionActionRelatedAction {
    return new PlanDefinitionActionRelatedAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionRelatedAction
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionRelatedAction'];
    return parts.join(', ');
  }
}
