import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesValidateCode } from '../../models/backbones/TerminologyCapabilitiesValidateCode.js';
import type {
  ITerminologyCapabilitiesValidateCode,
} from '@fhir-toolkit/r4-types';

/**
 * TerminologyCapabilitiesValidateCodeBuilder - Fluent builder for TerminologyCapabilitiesValidateCode backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesValidateCode = new TerminologyCapabilitiesValidateCodeBuilder()
 *   .setTranslations(value)
 *   .build();
 */
export class TerminologyCapabilitiesValidateCodeBuilder extends BackboneElementBuilder<TerminologyCapabilitiesValidateCode, ITerminologyCapabilitiesValidateCode> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set translations
   * Whether translations are validated
   */
  setTranslations(translations: boolean): this {
    this.data.translations = translations;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesValidateCode instance
   */
  build(): TerminologyCapabilitiesValidateCode {
    return new TerminologyCapabilitiesValidateCode(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesValidateCode instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesValidateCode> {
    const terminologyCapabilitiesValidateCode = this.build();
    await terminologyCapabilitiesValidateCode.validateOrThrow();
    return terminologyCapabilitiesValidateCode;
  }
}
