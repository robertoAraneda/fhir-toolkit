import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesClosure } from '../../models/backbones/TerminologyCapabilitiesClosure.js';
import type {
  ITerminologyCapabilitiesClosure,
} from '@fhir-toolkit/r4-types';

/**
 * TerminologyCapabilitiesClosureBuilder - Fluent builder for TerminologyCapabilitiesClosure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesClosure = new TerminologyCapabilitiesClosureBuilder()
 *   .setTranslation(value)
 *   .build();
 */
export class TerminologyCapabilitiesClosureBuilder extends BackboneElementBuilder<TerminologyCapabilitiesClosure, ITerminologyCapabilitiesClosure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set translation
   * If cross-system closure is supported
   */
  setTranslation(translation: boolean): this {
    this.data.translation = translation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesClosure instance
   */
  build(): TerminologyCapabilitiesClosure {
    return new TerminologyCapabilitiesClosure(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesClosure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesClosure> {
    const terminologyCapabilitiesClosure = this.build();
    await terminologyCapabilitiesClosure.validateOrThrow();
    return terminologyCapabilitiesClosure;
  }
}
