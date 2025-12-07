import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesTranslation } from '../../models/backbones/TerminologyCapabilitiesTranslation.js';
import type {
  ITerminologyCapabilitiesTranslation,
} from '@fhir-toolkit/r4b-types';

/**
 * TerminologyCapabilitiesTranslationBuilder - Fluent builder for TerminologyCapabilitiesTranslation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesTranslation = new TerminologyCapabilitiesTranslationBuilder()
 *   .setNeedsMap(value)
 *   .build();
 */
export class TerminologyCapabilitiesTranslationBuilder extends BackboneElementBuilder<TerminologyCapabilitiesTranslation, ITerminologyCapabilitiesTranslation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set needsMap
   * Whether the client must identify the map
   */
  setNeedsMap(needsMap: boolean): this {
    this.data.needsMap = needsMap;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesTranslation instance
   */
  build(): TerminologyCapabilitiesTranslation {
    return new TerminologyCapabilitiesTranslation(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesTranslation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesTranslation> {
    const terminologyCapabilitiesTranslation = this.build();
    await terminologyCapabilitiesTranslation.validateOrThrow();
    return terminologyCapabilitiesTranslation;
  }
}
