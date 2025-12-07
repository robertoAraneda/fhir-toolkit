import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanPlanSpecificCostBenefitCost } from '../../models/backbones/InsurancePlanPlanSpecificCostBenefitCost.js';
import type {
  BenefitCostApplicabilityType,
  ICodeableConcept,
  IInsurancePlanPlanSpecificCostBenefitCost,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * InsurancePlanPlanSpecificCostBenefitCostBuilder - Fluent builder for InsurancePlanPlanSpecificCostBenefitCost backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanPlanSpecificCostBenefitCost = new InsurancePlanPlanSpecificCostBenefitCostBuilder()
 *   .setType(value)
 *   .addQualifiers({ ... })
 *   .build();
 */
export class InsurancePlanPlanSpecificCostBenefitCostBuilder extends BackboneElementBuilder<InsurancePlanPlanSpecificCostBenefitCost, IInsurancePlanPlanSpecificCostBenefitCost> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of cost
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set applicability
   * in-network | out-of-network | other
   */
  setApplicability(applicability: ICodeableConcept<BenefitCostApplicabilityType>): this {
    this.data.applicability = applicability;
    return this;
  }

  /**
   * Set value
   * The actual cost value
   */
  setValue(value: IQuantity): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add qualifiers
   * Additional information about the cost
   */
  addQualifiers(qualifier: ICodeableConcept): this {
    return this.addToArray('qualifiers', qualifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanPlanSpecificCostBenefitCost instance
   */
  build(): InsurancePlanPlanSpecificCostBenefitCost {
    return new InsurancePlanPlanSpecificCostBenefitCost(this.data);
  }

  /**
   * Build and validate the InsurancePlanPlanSpecificCostBenefitCost instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanPlanSpecificCostBenefitCost> {
    const insurancePlanPlanSpecificCostBenefitCost = this.build();
    await insurancePlanPlanSpecificCostBenefitCost.validateOrThrow();
    return insurancePlanPlanSpecificCostBenefitCost;
  }
}
