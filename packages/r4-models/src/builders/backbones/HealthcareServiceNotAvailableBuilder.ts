import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { HealthcareServiceNotAvailable } from '../../models/backbones/HealthcareServiceNotAvailable.js';
import type {
  IHealthcareServiceNotAvailable,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * HealthcareServiceNotAvailableBuilder - Fluent builder for HealthcareServiceNotAvailable backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const healthcareServiceNotAvailable = new HealthcareServiceNotAvailableBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class HealthcareServiceNotAvailableBuilder extends BackboneElementBuilder<HealthcareServiceNotAvailable, IHealthcareServiceNotAvailable> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Reason presented to the user explaining why time not available
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set during
   * Service not available from this date
   */
  setDuring(during: IPeriod): this {
    this.data.during = during;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the HealthcareServiceNotAvailable instance
   */
  build(): HealthcareServiceNotAvailable {
    return new HealthcareServiceNotAvailable(this.data);
  }

  /**
   * Build and validate the HealthcareServiceNotAvailable instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<HealthcareServiceNotAvailable> {
    const healthcareServiceNotAvailable = this.build();
    await healthcareServiceNotAvailable.validateOrThrow();
    return healthcareServiceNotAvailable;
  }
}
