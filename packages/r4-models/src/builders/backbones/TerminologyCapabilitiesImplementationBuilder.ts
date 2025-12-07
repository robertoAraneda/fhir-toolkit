import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesImplementation } from '../../models/backbones/TerminologyCapabilitiesImplementation.js';
import type {
  ITerminologyCapabilitiesImplementation,
} from '@fhir-toolkit/r4-types';

/**
 * TerminologyCapabilitiesImplementationBuilder - Fluent builder for TerminologyCapabilitiesImplementation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesImplementation = new TerminologyCapabilitiesImplementationBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class TerminologyCapabilitiesImplementationBuilder extends BackboneElementBuilder<TerminologyCapabilitiesImplementation, ITerminologyCapabilitiesImplementation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Describes this specific instance
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set url
   * Base URL for the implementation
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesImplementation instance
   */
  build(): TerminologyCapabilitiesImplementation {
    return new TerminologyCapabilitiesImplementation(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesImplementation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesImplementation> {
    const terminologyCapabilitiesImplementation = this.build();
    await terminologyCapabilitiesImplementation.validateOrThrow();
    return terminologyCapabilitiesImplementation;
  }
}
