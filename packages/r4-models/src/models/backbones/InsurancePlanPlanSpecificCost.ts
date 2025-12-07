import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInsurancePlanPlanSpecificCost,
  IInsurancePlanPlanSpecificCostBenefit,
} from '@fhir-toolkit/r4-types';

/** Properties specific to InsurancePlanPlanSpecificCost */
const INSURANCE_PLAN_PLAN_SPECIFIC_COST_PROPERTIES = [
  'category',
  'benefit',
] as const;

/**
 * InsurancePlanPlanSpecificCost - Specific costs
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplanspecificcost.html
 *
 * @example
 * const insurancePlanPlanSpecificCost = new InsurancePlanPlanSpecificCost({
 *   // ... properties
 * });
 */
export class InsurancePlanPlanSpecificCost extends BackboneElement implements IInsurancePlanPlanSpecificCost {

  // ============================================================================
  // Properties
  // ============================================================================

  /** General category of benefit */
  category: ICodeableConcept;

  /** Benefits list */
  benefit?: IInsurancePlanPlanSpecificCostBenefit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanPlanSpecificCost>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PLAN_SPECIFIC_COST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanPlanSpecificCost from a JSON object
   */
  static fromJSON(json: IInsurancePlanPlanSpecificCost): InsurancePlanPlanSpecificCost {
    return new InsurancePlanPlanSpecificCost(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanPlanSpecificCost with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanPlanSpecificCost>): InsurancePlanPlanSpecificCost {
    return new InsurancePlanPlanSpecificCost({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanPlanSpecificCost by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanPlanSpecificCost) => Partial<IInsurancePlanPlanSpecificCost>): InsurancePlanPlanSpecificCost {
    const currentData = this.toJSON();
    return new InsurancePlanPlanSpecificCost({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanPlanSpecificCost)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanPlanSpecificCost {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PLAN_SPECIFIC_COST_PROPERTIES);
    return result as IInsurancePlanPlanSpecificCost;
  }

  /**
   * Create a deep clone of this InsurancePlanPlanSpecificCost
   */
  clone(): InsurancePlanPlanSpecificCost {
    return new InsurancePlanPlanSpecificCost(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanPlanSpecificCost
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanPlanSpecificCost'];
    return parts.join(', ');
  }
}
