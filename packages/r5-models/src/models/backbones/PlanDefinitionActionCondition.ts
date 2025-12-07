import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionConditionKindType,
  IElement,
  IExpression,
  IPlanDefinitionActionCondition,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PlanDefinitionActionCondition */
const PLAN_DEFINITION_ACTION_CONDITION_PROPERTIES = [
  'kind',
  '_kind',
  'expression',
] as const;

/**
 * PlanDefinitionActionCondition - Whether or not the action is applicable
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactioncondition.html
 *
 * @example
 * const planDefinitionActionCondition = new PlanDefinitionActionCondition({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionCondition extends BackboneElement implements IPlanDefinitionActionCondition {

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

  constructor(data?: Partial<IPlanDefinitionActionCondition>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_CONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionCondition from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionCondition): PlanDefinitionActionCondition {
    return new PlanDefinitionActionCondition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionCondition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionCondition>): PlanDefinitionActionCondition {
    return new PlanDefinitionActionCondition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionCondition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionCondition) => Partial<IPlanDefinitionActionCondition>): PlanDefinitionActionCondition {
    const currentData = this.toJSON();
    return new PlanDefinitionActionCondition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionCondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionCondition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_CONDITION_PROPERTIES);
    return result as IPlanDefinitionActionCondition;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionCondition
   */
  clone(): PlanDefinitionActionCondition {
    return new PlanDefinitionActionCondition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionCondition
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionCondition'];
    return parts.join(', ');
  }
}
