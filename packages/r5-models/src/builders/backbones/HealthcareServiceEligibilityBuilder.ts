import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { HealthcareServiceEligibility } from '../../models/backbones/HealthcareServiceEligibility.js';
import type {
  ICodeableConcept,
  IHealthcareServiceEligibility,
} from '@fhir-toolkit/r5-types';

/**
 * HealthcareServiceEligibilityBuilder - Fluent builder for HealthcareServiceEligibility backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const healthcareServiceEligibility = new HealthcareServiceEligibilityBuilder()
 *   .setCode(value)
 *   .build();
 */
export class HealthcareServiceEligibilityBuilder extends BackboneElementBuilder<HealthcareServiceEligibility, IHealthcareServiceEligibility> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Coded value for the eligibility
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set comment
   * Describes the eligibility conditions for the service
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the HealthcareServiceEligibility instance
   */
  build(): HealthcareServiceEligibility {
    return new HealthcareServiceEligibility(this.data);
  }

  /**
   * Build and validate the HealthcareServiceEligibility instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<HealthcareServiceEligibility> {
    const healthcareServiceEligibility = this.build();
    await healthcareServiceEligibility.validateOrThrow();
    return healthcareServiceEligibility;
  }
}
