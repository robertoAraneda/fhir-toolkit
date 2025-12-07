import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanPlanSpecificCostBenefit } from '../../models/backbones/InsurancePlanPlanSpecificCostBenefit.js';
import type {
  ICodeableConcept,
  IInsurancePlanPlanSpecificCostBenefit,
  IInsurancePlanPlanSpecificCostBenefitCost,
} from '@fhir-toolkit/r4-types';

/**
 * InsurancePlanPlanSpecificCostBenefitBuilder - Fluent builder for InsurancePlanPlanSpecificCostBenefit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanPlanSpecificCostBenefit = new InsurancePlanPlanSpecificCostBenefitBuilder()
 *   .setType(value)
 *   .addCost({ ... })
 *   .build();
 */
export class InsurancePlanPlanSpecificCostBenefitBuilder extends BackboneElementBuilder<InsurancePlanPlanSpecificCostBenefit, IInsurancePlanPlanSpecificCostBenefit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of specific benefit
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add cost
   * List of the costs
   */
  addCost(cost: IInsurancePlanPlanSpecificCostBenefitCost): this {
    return this.addToArray('cost', cost);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanPlanSpecificCostBenefit instance
   */
  build(): InsurancePlanPlanSpecificCostBenefit {
    return new InsurancePlanPlanSpecificCostBenefit(this.data);
  }

  /**
   * Build and validate the InsurancePlanPlanSpecificCostBenefit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanPlanSpecificCostBenefit> {
    const insurancePlanPlanSpecificCostBenefit = this.build();
    await insurancePlanPlanSpecificCostBenefit.validateOrThrow();
    return insurancePlanPlanSpecificCostBenefit;
  }
}
