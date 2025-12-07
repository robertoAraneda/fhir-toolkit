import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PractitionerRoleNotAvailable } from '../../models/backbones/PractitionerRoleNotAvailable.js';
import type {
  IPeriod,
  IPractitionerRoleNotAvailable,
} from '@fhir-toolkit/r4-types';

/**
 * PractitionerRoleNotAvailableBuilder - Fluent builder for PractitionerRoleNotAvailable backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitionerRoleNotAvailable = new PractitionerRoleNotAvailableBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class PractitionerRoleNotAvailableBuilder extends BackboneElementBuilder<PractitionerRoleNotAvailable, IPractitionerRoleNotAvailable> {
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
   * Build the PractitionerRoleNotAvailable instance
   */
  build(): PractitionerRoleNotAvailable {
    return new PractitionerRoleNotAvailable(this.data);
  }

  /**
   * Build and validate the PractitionerRoleNotAvailable instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PractitionerRoleNotAvailable> {
    const practitionerRoleNotAvailable = this.build();
    await practitionerRoleNotAvailable.validateOrThrow();
    return practitionerRoleNotAvailable;
  }
}
