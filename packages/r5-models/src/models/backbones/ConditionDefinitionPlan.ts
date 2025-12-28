import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionDefinitionPlan,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinitionPlan */
const CONDITION_DEFINITION_PLAN_PROPERTIES = [
  'role',
  'reference',
] as const;

/**
 * ConditionDefinitionPlan - Plan that is appropriate
 *
 * @see https://hl7.org/fhir/R5/conditiondefinitionplan.html
 *
 * @example
 * const conditionDefinitionPlan = new ConditionDefinitionPlan({
 *   // ... properties
 * });
 */
export class ConditionDefinitionPlan extends BackboneElement implements IConditionDefinitionPlan {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Use for the plan */
  role?: ICodeableConcept;

  /** The actual plan */
  reference: IReference<'PlanDefinition'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionDefinitionPlan>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_PLAN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinitionPlan from a JSON object
   */
  static fromJSON(json: IConditionDefinitionPlan): ConditionDefinitionPlan {
    return new ConditionDefinitionPlan(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinitionPlan with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinitionPlan>): ConditionDefinitionPlan {
    return new ConditionDefinitionPlan({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinitionPlan by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinitionPlan) => Partial<IConditionDefinitionPlan>): ConditionDefinitionPlan {
    const currentData = this.toJSON();
    return new ConditionDefinitionPlan({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinitionPlan)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinitionPlan {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_PLAN_PROPERTIES);
    return result as IConditionDefinitionPlan;
  }

  /**
   * Create a deep clone of this ConditionDefinitionPlan
   */
  clone(): ConditionDefinitionPlan {
    return new ConditionDefinitionPlan(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinitionPlan
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinitionPlan'];
    return parts.join(', ');
  }
}
