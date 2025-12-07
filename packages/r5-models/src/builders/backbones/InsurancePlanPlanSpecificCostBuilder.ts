import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanPlanSpecificCost } from '../../models/backbones/InsurancePlanPlanSpecificCost.js';
import type {
  ICodeableConcept,
  IInsurancePlanPlanSpecificCost,
  IInsurancePlanPlanSpecificCostBenefit,
} from '@fhir-toolkit/r5-types';

/**
 * InsurancePlanPlanSpecificCostBuilder - Fluent builder for InsurancePlanPlanSpecificCost backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanPlanSpecificCost = new InsurancePlanPlanSpecificCostBuilder()
 *   .setCategory(value)
 *   .addBenefit({ ... })
 *   .build();
 */
export class InsurancePlanPlanSpecificCostBuilder extends BackboneElementBuilder<InsurancePlanPlanSpecificCost, IInsurancePlanPlanSpecificCost> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * General category of benefit
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add benefit
   * Benefits list
   */
  addBenefit(benefit: IInsurancePlanPlanSpecificCostBenefit): this {
    return this.addToArray('benefit', benefit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanPlanSpecificCost instance
   */
  build(): InsurancePlanPlanSpecificCost {
    return new InsurancePlanPlanSpecificCost(this.data);
  }

  /**
   * Build and validate the InsurancePlanPlanSpecificCost instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanPlanSpecificCost> {
    const insurancePlanPlanSpecificCost = this.build();
    await insurancePlanPlanSpecificCost.validateOrThrow();
    return insurancePlanPlanSpecificCost;
  }
}
