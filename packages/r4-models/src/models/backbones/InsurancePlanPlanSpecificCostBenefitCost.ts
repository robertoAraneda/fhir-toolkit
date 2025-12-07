import { BackboneElement } from '../base/BackboneElement.js';
import type {
  BenefitCostApplicabilityType,
  ICodeableConcept,
  IInsurancePlanPlanSpecificCostBenefitCost,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/** Properties specific to InsurancePlanPlanSpecificCostBenefitCost */
const INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_COST_PROPERTIES = [
  'type',
  'applicability',
  'qualifiers',
  'value',
] as const;

/**
 * InsurancePlanPlanSpecificCostBenefitCost - List of the costs
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplanspecificcostbenefitcost.html
 *
 * @example
 * const insurancePlanPlanSpecificCostBenefitCost = new InsurancePlanPlanSpecificCostBenefitCost({
 *   // ... properties
 * });
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement implements IInsurancePlanPlanSpecificCostBenefitCost {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of cost */
  type: ICodeableConcept;

  /** in-network | out-of-network | other */
  applicability?: ICodeableConcept<BenefitCostApplicabilityType>;

  /** Additional information about the cost */
  qualifiers?: ICodeableConcept[];

  /** The actual cost value */
  value?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanPlanSpecificCostBenefitCost>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_COST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanPlanSpecificCostBenefitCost from a JSON object
   */
  static fromJSON(json: IInsurancePlanPlanSpecificCostBenefitCost): InsurancePlanPlanSpecificCostBenefitCost {
    return new InsurancePlanPlanSpecificCostBenefitCost(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanPlanSpecificCostBenefitCost with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanPlanSpecificCostBenefitCost>): InsurancePlanPlanSpecificCostBenefitCost {
    return new InsurancePlanPlanSpecificCostBenefitCost({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanPlanSpecificCostBenefitCost by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanPlanSpecificCostBenefitCost) => Partial<IInsurancePlanPlanSpecificCostBenefitCost>): InsurancePlanPlanSpecificCostBenefitCost {
    const currentData = this.toJSON();
    return new InsurancePlanPlanSpecificCostBenefitCost({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanPlanSpecificCostBenefitCost)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanPlanSpecificCostBenefitCost {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PLAN_SPECIFIC_COST_BENEFIT_COST_PROPERTIES);
    return result as IInsurancePlanPlanSpecificCostBenefitCost;
  }

  /**
   * Create a deep clone of this InsurancePlanPlanSpecificCostBenefitCost
   */
  clone(): InsurancePlanPlanSpecificCostBenefitCost {
    return new InsurancePlanPlanSpecificCostBenefitCost(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanPlanSpecificCostBenefitCost
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanPlanSpecificCostBenefitCost'];
    return parts.join(', ');
  }
}
