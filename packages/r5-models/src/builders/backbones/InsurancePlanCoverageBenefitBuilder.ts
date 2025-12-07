import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanCoverageBenefit } from '../../models/backbones/InsurancePlanCoverageBenefit.js';
import type {
  ICodeableConcept,
  IInsurancePlanCoverageBenefit,
  IInsurancePlanCoverageBenefitLimit,
} from '@fhir-toolkit/r5-types';

/**
 * InsurancePlanCoverageBenefitBuilder - Fluent builder for InsurancePlanCoverageBenefit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanCoverageBenefit = new InsurancePlanCoverageBenefitBuilder()
 *   .setType(value)
 *   .addLimit({ ... })
 *   .build();
 */
export class InsurancePlanCoverageBenefitBuilder extends BackboneElementBuilder<InsurancePlanCoverageBenefit, IInsurancePlanCoverageBenefit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of benefit
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set requirement
   * Referral requirements
   */
  setRequirement(requirement: string): this {
    this.data.requirement = requirement;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add limit
   * Benefit limits
   */
  addLimit(limit: IInsurancePlanCoverageBenefitLimit): this {
    return this.addToArray('limit', limit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanCoverageBenefit instance
   */
  build(): InsurancePlanCoverageBenefit {
    return new InsurancePlanCoverageBenefit(this.data);
  }

  /**
   * Build and validate the InsurancePlanCoverageBenefit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanCoverageBenefit> {
    const insurancePlanCoverageBenefit = this.build();
    await insurancePlanCoverageBenefit.validateOrThrow();
    return insurancePlanCoverageBenefit;
  }
}
