import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanCoverageBenefitLimit } from '../../models/backbones/InsurancePlanCoverageBenefitLimit.js';
import type {
  ICodeableConcept,
  IInsurancePlanCoverageBenefitLimit,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * InsurancePlanCoverageBenefitLimitBuilder - Fluent builder for InsurancePlanCoverageBenefitLimit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanCoverageBenefitLimit = new InsurancePlanCoverageBenefitLimitBuilder()
 *   .setValue(value)
 *   .build();
 */
export class InsurancePlanCoverageBenefitLimitBuilder extends BackboneElementBuilder<InsurancePlanCoverageBenefitLimit, IInsurancePlanCoverageBenefitLimit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set value
   * Maximum value allowed
   */
  setValue(value: IQuantity): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set code
   * Benefit limit details
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanCoverageBenefitLimit instance
   */
  build(): InsurancePlanCoverageBenefitLimit {
    return new InsurancePlanCoverageBenefitLimit(this.data);
  }

  /**
   * Build and validate the InsurancePlanCoverageBenefitLimit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanCoverageBenefitLimit> {
    const insurancePlanCoverageBenefitLimit = this.build();
    await insurancePlanCoverageBenefitLimit.validateOrThrow();
    return insurancePlanCoverageBenefitLimit;
  }
}
