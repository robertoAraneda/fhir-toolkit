import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInsurancePlanPlanSpecificCostBenefit,
  IInsurancePlanPlanSpecificCostBenefitCost,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InsurancePlanPlanSpecificCostBenefit */
const INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_PROPERTIES = [
  'type',
  'cost',
] as const;

/**
 * InsurancePlanPlanSpecificCostBenefit - Benefits list
 *
 * @see https://hl7.org/fhir/R5/insuranceplanplanspecificcostbenefit.html
 *
 * @example
 * const insurancePlanPlanSpecificCostBenefit = new InsurancePlanPlanSpecificCostBenefit({
 *   // ... properties
 * });
 */
export class InsurancePlanPlanSpecificCostBenefit extends BackboneElement implements IInsurancePlanPlanSpecificCostBenefit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of specific benefit */
  type: ICodeableConcept;

  /** List of the costs */
  cost?: IInsurancePlanPlanSpecificCostBenefitCost[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanPlanSpecificCostBenefit>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanPlanSpecificCostBenefit from a JSON object
   */
  static fromJSON(json: IInsurancePlanPlanSpecificCostBenefit): InsurancePlanPlanSpecificCostBenefit {
    return new InsurancePlanPlanSpecificCostBenefit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanPlanSpecificCostBenefit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanPlanSpecificCostBenefit>): InsurancePlanPlanSpecificCostBenefit {
    return new InsurancePlanPlanSpecificCostBenefit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanPlanSpecificCostBenefit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanPlanSpecificCostBenefit) => Partial<IInsurancePlanPlanSpecificCostBenefit>): InsurancePlanPlanSpecificCostBenefit {
    const currentData = this.toJSON();
    return new InsurancePlanPlanSpecificCostBenefit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanPlanSpecificCostBenefit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanPlanSpecificCostBenefit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_PROPERTIES);
    return result as IInsurancePlanPlanSpecificCostBenefit;
  }

  /**
   * Create a deep clone of this InsurancePlanPlanSpecificCostBenefit
   */
  clone(): InsurancePlanPlanSpecificCostBenefit {
    return new InsurancePlanPlanSpecificCostBenefit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanPlanSpecificCostBenefit
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanPlanSpecificCostBenefit'];
    return parts.join(', ');
  }
}
